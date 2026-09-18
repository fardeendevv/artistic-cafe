import React from 'react';
import { Sparkles, Palette, Award, Coffee, Eye, Heart, Camera, Compass } from 'lucide-react';
import { ArtisticCardsSection } from './ArtisticCardsSection';

interface GalleryPageProps {
  onOrderNow?: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOrderNow }) => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Gallery Intro Banner */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#EBD8C8] text-[#532C20] text-xs font-bold uppercase tracking-wider">
            <Palette className="w-3.5 h-3.5 text-[#A3683A]" />
            <span>Visual &amp; Sensory Exhibition</span>
          </div>
          <h1 className="font-handwritten text-4xl sm:text-5xl lg:text-6xl text-[#22110C] leading-tight">
            Artisan Gallery &amp; Brewing Studio
          </h1>
          <div className="w-20 h-1 bg-[#C88A58] mx-auto rounded-full" />
          <p className="text-[#532C20]/80 text-sm sm:text-base leading-relaxed">
            Every extraction is an intimate dance of time, thermal momentum, and artisanal technique.
            Explore our visual compendium of craft latte art, rare origins, and laboratory-grade extractions.
          </p>
        </div>

        {/* Featured Artistic Cards Section */}
        <ArtisticCardsSection standalone={true} />

        {/* The Sensory Palette Studio (Interactive Education & Workshop) */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-[#F2E6DC] shadow-soft-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFEFEA] text-[#A3683A] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Lahore Roastery Tasting Experience</span>
              </div>
              <h2 className="font-handwritten text-3xl sm:text-4xl text-[#22110C]">
                Weekend Cupping &amp; Latte Art Workshops
              </h2>
              <p className="text-[#532C20]/80 text-xs sm:text-sm leading-relaxed">
                Join our head barista every Saturday at our Lahore roastery on MM Alam Road. Learn milk steaming
                aeration dynamics, sensory flavor wheel calibration, and hands-on swan and rosetta free-pouring.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#F0E4D8]">
                  <div className="font-bold text-base text-[#22110C]">Saturday 11 AM</div>
                  <div className="text-xs text-[#532C20]/70 mt-0.5">SCA Cupping Session</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#F0E4D8]">
                  <div className="font-bold text-base text-[#22110C]">Sunday 3 PM</div>
                  <div className="text-xs text-[#532C20]/70 mt-0.5">Latte Art Masterclass</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#F0E4D8]">
                  <div className="font-bold text-base text-[#22110C]">Small Cohorts</div>
                  <div className="text-xs text-[#532C20]/70 mt-0.5">Max 6 per group</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white max-w-sm">
                <img
                  src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80"
                  alt="Barista Latte Art Workshop"
                  className="w-full h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#22110C]/90 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-xs font-semibold text-[#E4A877]">Hands-On Barista Bar</span>
                    <h4 className="font-bold text-base">La Marzocco Linea PB Studio</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Curated Patron Gallery Grid */}
        <div className="mt-16 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-handwritten text-3xl text-[#22110C]">Community Cup Moments</h3>
              <p className="text-xs text-[#532C20]/70">Captured daily at Artistic Cafe Lahore</p>
            </div>
            <span className="text-xs font-bold text-[#A3683A] flex items-center gap-1.5">
              <Camera className="w-4 h-4" />
              <span>#ArtisticLahore</span>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              {
                url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80',
                caption: 'Handcrafted Pour-Over'
              },
              {
                url: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=400&q=80',
                caption: 'Morning Rosetta'
              },
              {
                url: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=400&q=80',
                caption: 'Layered Tulip Microfoam'
              },
              {
                url: 'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=400&q=80',
                caption: 'Fresh Drum Roasting'
              }
            ].map((img, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden aspect-square bg-[#2C1710] shadow-sm hover:shadow-lg transition-all"
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-white text-xs font-medium">{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
