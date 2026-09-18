import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, Users, Check, Sparkles, MessageSquare } from 'lucide-react';

const WHATSAPP_INTL = '923472279405';

export const ContactPage: React.FC = () => {
  // Reservation Form State
  const [resName, setResName] = useState('');
  const [resEmail, setResEmail] = useState('');
  const [resGuests, setResGuests] = useState('2');
  const [resDate, setResDate] = useState('2026-09-18');
  const [resTime, setResTime] = useState('10:00 AM');
  const [resConfirmed, setResConfirmed] = useState(false);

  // Inquiry Form State
  const [inqName, setInqName] = useState('');
  const [inqEmail, setInqEmail] = useState('');
  const [inqMessage, setInqMessage] = useState('');
  const [inqSent, setInqSent] = useState(false);

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    setResConfirmed(true);
  };

  const handleSendWhatsAppReservation = () => {
    const text = [
      `☕ *ARTISTIC CAFE LAHORE — TABLE RESERVATION*`,
      `Name: ${resName.trim() || 'Guest'}`,
      `Email: ${resEmail.trim() || 'Not provided'}`,
      `Party Size: ${resGuests} guests`,
      `Date: ${resDate}`,
      `Time: ${resTime}`,
      `Location: MM Alam Road, Gulberg III, Lahore`,
      `\nPlease confirm our table reservation. Thank you!`
    ].join('\n');

    window.open(`https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `☕ *ARTISTIC CAFE LAHORE — INQUIRY*`,
      `From: ${inqName.trim()}`,
      `Email: ${inqEmail.trim()}`,
      `Message: ${inqMessage.trim()}`
    ].join('\n');

    window.open(`https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    setInqSent(true);
  };

  return (
    <div className="py-16 sm:py-20 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C88A58] font-bold block mb-2">
            Flagship Roastery &amp; Espresso Bar
          </span>
          <h1 className="font-handwritten text-4xl sm:text-5xl lg:text-6xl text-[#22110C] tracking-tight">
            Visit Us in Lahore
          </h1>
          <div className="w-16 h-1 bg-[#C88A58] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-xs sm:text-sm text-[#532C20]/80 leading-relaxed">
            Drop in for an artisanal pour-over, reserve a cozy tasting table with friends, or chat with our head
            baristas about origin genetics and roast profiles.
          </p>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F4ECE4] shadow-soft-card flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FFEFEA] text-[#A3683A] flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#22110C]">Our Location</h3>
              <p className="text-xs sm:text-sm text-[#532C20]/80 mt-1 leading-relaxed">
                MM Alam Road, Gulberg III,
                <br />
                Lahore, Pakistan
              </p>
              <span className="text-[11px] text-[#C88A58] font-semibold block mt-2">
                • Near Hussain Chowk, Heart of Gulberg
              </span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F4ECE4] shadow-soft-card flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FFEFEA] text-[#A3683A] flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base text-[#22110C]">Opening Hours</h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                  Open Now
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#532C20]/80 mt-1 leading-relaxed">
                Monday – Sunday:
                <br />
                <span className="font-semibold text-[#22110C]">7:00 AM – 11:00 PM PKT</span>
              </p>
              <span className="text-[11px] text-[#532C20]/70 block mt-2">
                Fresh bakery batches at 7 AM &amp; 1:30 PM
              </span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F4ECE4] shadow-soft-card flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FFEFEA] text-[#A3683A] flex items-center justify-center shrink-0">
              <MessageSquare className="w-6 h-6 text-[#25D366]" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#22110C]">WhatsApp &amp; Support</h3>
              <p className="text-xs sm:text-sm text-[#532C20]/80 mt-1 leading-relaxed">
                Fast Barista Response: <a href="https://wa.me/923472279405" target="_blank" rel="noopener noreferrer" className="font-bold text-[#25D366] hover:underline transition">Chat on WhatsApp</a>
                <br />
                Email: lahore@artistic.cafe
              </p>
              <span className="text-[11px] text-[#C88A58] font-semibold block mt-2">
                Instant reservations &amp; orders
              </span>
            </div>
          </div>
        </div>

        {/* Dual Interaction Columns: Table Reservation & Direct Message */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Reserve a Table */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-[#F4ECE4] shadow-soft-card">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C88A58] mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dine-In &amp; Tasting</span>
            </div>
            <h2 className="font-handwritten text-3xl text-[#22110C] mb-2">
              Reserve a Table
            </h2>
            <p className="text-xs text-[#532C20]/75 mb-6">
              Enjoy handcrafted pour-overs, fresh bakery pairings, and warm cafe hospitality.
            </p>

            {resConfirmed ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-[#22110C] text-base">Table Reserved Successfully!</h4>
                <p className="text-xs text-stone-600 max-w-sm mx-auto">
                  Thank you, <span className="font-bold">{resName}</span>! Your table for {resGuests}{' '}
                  guests on {resDate} at {resTime} is noted. We've got fresh espresso waiting for you at MM Alam Road!
                </p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center pt-2">
                  <button
                    type="button"
                    onClick={handleSendWhatsAppReservation}
                    className="px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white" />
                    <span>Confirm via WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setResConfirmed(false)}
                    className="px-4 py-2 rounded-full bg-[#2C1710] text-white text-xs font-semibold"
                  >
                    Modify
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleReservation} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#22110C] mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Usman Tariq"
                      value={resName}
                      onChange={(e) => setResName(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#C88A58]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#22110C] mb-1">Email / WhatsApp</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 0300 1234567 or email"
                      value={resEmail}
                      onChange={(e) => setResEmail(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#C88A58]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#22110C] mb-1">Party Size</label>
                    <select
                      value={resGuests}
                      onChange={(e) => setResGuests(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#C88A58]"
                    >
                      <option value="1">1 Person (Quiet Corner)</option>
                      <option value="2">2 People (Duo Table)</option>
                      <option value="4">4 People (Friends &amp; Family)</option>
                      <option value="6">6+ People (Large Gathering)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#22110C] mb-1">Date</label>
                    <input
                      type="date"
                      required
                      value={resDate}
                      onChange={(e) => setResDate(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#C88A58]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#22110C] mb-1">Time Slot</label>
                    <select
                      value={resTime}
                      onChange={(e) => setResTime(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#C88A58]"
                    >
                      <option value="08:00 AM">08:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="12:30 PM">12:30 PM</option>
                      <option value="03:00 PM">03:00 PM</option>
                      <option value="05:30 PM">05:30 PM</option>
                      <option value="08:00 PM">08:00 PM</option>
                      <option value="10:00 PM">10:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <button
                    type="submit"
                    className="py-3 px-4 rounded-xl bg-[#22110C] hover:bg-[#C88A58] text-white text-xs font-bold shadow-md transition cursor-pointer"
                  >
                    Lock In Reservation
                  </button>

                  <button
                    type="button"
                    onClick={handleSendWhatsAppReservation}
                    className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold shadow-md transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white" />
                    <span>Reserve via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Inquiries */}
          <div className="lg:col-span-5 bg-[#23120C] text-[#FAF7F2] rounded-3xl p-8 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="font-handwritten text-3xl text-white mb-2">Send a Message</h3>
              <p className="text-xs text-[#FAF7F2]/75 leading-relaxed mb-6">
                Questions about wholesale beans, coffee barista workshops, or private events? Reach out
                directly.
              </p>

              <form onSubmit={handleInquiry} className="space-y-3.5">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={inqName}
                    onChange={(e) => setInqName(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#C88A58]"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={inqEmail}
                    onChange={(e) => setInqEmail(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#C88A58]"
                  />
                </div>

                <div>
                  <textarea
                    required
                    rows={3}
                    placeholder="How can our roastery team help you?"
                    value={inqMessage}
                    onChange={(e) => setInqMessage(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#C88A58]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-white" />
                  <span>{inqSent ? '✓ Sent to WhatsApp' : 'Send Message via WhatsApp'}</span>
                </button>
              </form>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-[#FAF7F2]/70">
              <span>⚡ Direct Barista Response</span>
              <a href="https://wa.me/923472279405" target="_blank" rel="noopener noreferrer" className="font-bold text-[#4ADE80] hover:underline flex items-center gap-1">
                <MessageSquare className="w-3 h-3 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
