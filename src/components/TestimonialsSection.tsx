import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Plus, Check } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  onAddReview: (newReview: Testimonial) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  onAddReview,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewerName, setReviewerName] = useState('');
  const [reviewerRole, setReviewerRole] = useState('');
  const [reviewerQuote, setReviewerQuote] = useState('');
  const [reviewerRating, setReviewerRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  // For mobile and desktop paging
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewerName.trim() || !reviewerQuote.trim()) return;

    const initials = reviewerName
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();

    const newTestimonial: Testimonial = {
      id: `review-${Date.now()}`,
      name: reviewerName.trim(),
      role: reviewerRole.trim() || 'Coffee Enthusiast',
      quote: reviewerQuote.trim(),
      avatarText: initials,
      avatarColor: 'from-amber-700 to-amber-500',
      rating: reviewerRating,
      date: 'Just now',
    };

    onAddReview(newTestimonial);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
      setReviewerName('');
      setReviewerRole('');
      setReviewerQuote('');
    }, 1200);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header (matching Screenshot 3) */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#A3683A] font-bold block mb-1">
            Community Voices
          </span>
          <h2 className="font-handwritten text-4xl sm:text-5xl lg:text-6xl text-[#22110C] tracking-tight">
            What Our Patrons Say
          </h2>
          <div className="w-16 h-1 bg-[#C88A58] mx-auto mt-4 rounded-full" />
        </div>

        {/* Testimonial Cards Grid (Screenshot 3 shows 3 cards in desktop row) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((item, idx) => (
            <article
              key={item.id}
              className="bg-[#F8F5F1] rounded-3xl p-8 border border-[#F4ECE4] shadow-soft-card relative flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                {/* Top Row: Avatar & Giant Double Quotes (Screenshot 3) */}
                <div className="flex items-start justify-between mb-6">
                  {/* Avatar Bubble */}
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md bg-[#FAF6F0] p-1">
                    <div
                      className={`w-full h-full rounded-full bg-gradient-to-tr ${item.avatarColor} flex items-center justify-center text-white text-sm font-bold shadow-inner`}
                    >
                      {item.avatarText}
                    </div>
                  </div>

                  {/* Stylized Giant Quotation Marks (From Screenshot 3) */}
                  <span className="text-5xl font-serif-display text-[#D59A78]/40 select-none leading-none">
                    “
                  </span>
                </div>

                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C88A58] text-[#C88A58]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-[#532C20]/80 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {item.quote}
                </p>
              </div>

              {/* Signature Name in Pacifico cursive (Exact font from Screenshot 3: Dilshad, Sabir ali, Dipankar kumar) */}
              <div className="border-t border-[#F4ECE4] pt-4">
                <span className="font-handwritten text-2xl text-[#22110C] block group-hover:text-[#A3683A] transition-colors">
                  {item.name}
                </span>
                <span className="text-[11px] text-[#8C5035] uppercase tracking-wider font-semibold block mt-0.5">
                  {item.role}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Carousel Pagination Dots (Faithfully translated from Screenshot 3) */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
          <div className="flex items-center gap-2">
            {[0, 1, 2, 3].map((dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => setActiveIndex(dotIndex)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeIndex === dotIndex
                    ? 'w-3.5 h-3.5 bg-[#22110C]'
                    : 'w-2 h-2 bg-[#D59A78] hover:bg-[#8C5035]'
                }`}
                aria-label={`Go to slide ${dotIndex + 1}`}
              />
            ))}
          </div>

          {/* Action to share user experience */}
          <div className="sm:ml-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF6F0] hover:bg-[#C88A58] text-[#532C20] hover:text-white text-xs font-semibold border border-[#F4ECE4] shadow-sm transition-all cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Share Your Experience</span>
            </button>
          </div>
        </div>
      </div>

      {/* Review Submission Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
            <h3 className="font-handwritten text-3xl text-[#22110C] mb-1">
              Leave a Review
            </h3>
            <p className="text-xs text-[#532C20]/80 mb-5">
              Share your love for our coffee with our barista team and fellow patrons.
            </p>

            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#22110C] mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={reviewerName}
                  onChange={(e) => setReviewerName(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C88A58]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#22110C] mb-1">
                  Profession / Role (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Frontend Engineer"
                  value={reviewerRole}
                  onChange={(e) => setReviewerRole(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C88A58]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#22110C] mb-1">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setReviewerRating(star)}
                      className="p-1 text-lg transition"
                    >
                      <Star
                        className={`w-5 h-5 ${
                          star <= reviewerRating
                            ? 'fill-[#C88A58] text-[#C88A58]'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#22110C] mb-1">Review</label>
                <textarea
                  required
                  rows={3}
                  placeholder="What was your favorite pour or favorite spot in the cafe?"
                  value={reviewerQuote}
                  onChange={(e) => setReviewerQuote(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C88A58]"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-2.5 rounded-full border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitted}
                  className="flex-1 py-2.5 rounded-full bg-[#2C1710] hover:bg-[#C88A58] text-white text-xs font-semibold shadow-md flex items-center justify-center gap-1.5 transition"
                >
                  {submitted ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Submitted!</span>
                    </>
                  ) : (
                    <span>Post Review</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
