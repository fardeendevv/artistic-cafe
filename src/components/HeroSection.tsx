import React, { useState } from 'react';
import { Coffee, ArrowRight, Sparkles, Heart, MessageSquare } from 'lucide-react';
import { RotatingCup } from './RotatingCup';
import { COFFEE_IMAGES } from '../data/coffeeData';

interface HeroSectionProps {
  onExploreRoasts: () => void;
  onOrderNow: () => void;
}

const WHATSAPP_INTL = '923472279405';

const CUP_OPTIONS = [
  { id: 'beans-saucer', name: 'Roaster Reserve', image: COFFEE_IMAGES.heroBeansSaucer, roast: 'Dark Roast' },
  { id: 'cappuccino-heart', name: 'Cappuccino Heart', image: COFFEE_IMAGES.cappuccinoCup, roast: 'Medium Roast' },
  { id: 'espresso-single', name: 'Classic Espresso', image: COFFEE_IMAGES.espressoCup, roast: 'Medium-Dark' },
  { id: 'americano-crema', name: 'Velvet Americano', image: COFFEE_IMAGES.americanoCup, roast: 'Light-Medium' },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreRoasts, onOrderNow }) => {
  const [selectedCup, setSelectedCup] = useState(CUP_OPTIONS[0]);

  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-[#23120C] via-[#1E0E08] to-[#180A06] text-white py-16 sm:py-24 lg:py-28 overflow-hidden min-h-[660px] flex items-center"
    >
      {/* Ambient Background Lighting Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#C88A58]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#914620]/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-6 space-y-7">
            {/* Small Pre-header Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs tracking-wider uppercase text-[#E4A877] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C88A58] animate-pulse" />
              <span>Crafted for Coffee Lovers &amp; Purists</span>
            </div>

            {/* Main Hero Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF7F2] leading-[1.18]">
              We serve the richest <br className="hidden sm:block" />
              <span className="font-handwritten text-[#C88A58] font-normal text-5xl sm:text-6xl lg:text-7xl drop-shadow-md">
                Coffee
              </span>{' '}
              in the city
            </h1>

            {/* Description Paragraph */}
            <p className="text-[#FAF7F2]/75 text-base sm:text-lg max-w-lg leading-relaxed font-light">
              Indulge in sustainably sourced, locally batch-roasted specialty beans. Every extraction is
              crafted to perfection to celebrate rich aromas, velvety crema, and quiet moments of delight.
            </p>

            {/* Interactive Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOrderNow}
                id="hero-order-coffee-btn"
                className="px-7 py-3 rounded-full bg-gradient-to-r from-[#82442B] to-[#5A2C1C] hover:from-[#C88A58] hover:to-[#844425] text-[#FAF7F2] font-semibold text-sm border border-white/15 shadow-lg hover:shadow-[#C88A58]/25 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <Coffee className="w-4 h-4 text-[#E4A877]" />
                <span>Order Fresh Coffee</span>
              </button>

              <a
                href={`https://wa.me/${WHATSAPP_INTL}?text=Hello%20Artistic%20Cafe%20Lahore!%20I%20would%20like%20to%20place%20an%20order.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm shadow-md hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Order via WhatsApp</span>
              </a>

              <button
                onClick={onExploreRoasts}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#FAF7F2]/80 hover:text-[#C88A58] transition py-2 px-3 group cursor-pointer"
              >
                <span>Explore Roasts</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Cup Swapper Pills */}
            <div className="pt-4">
              <span className="text-xs uppercase tracking-wider text-[#FAF7F2]/60 font-semibold block mb-2.5">
                Select 360° Rotating Cup Style:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {CUP_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedCup(opt)}
                    className={`px-3.5 py-1.5 rounded-full text-xs transition flex items-center gap-1.5 cursor-pointer ${
                      selectedCup.id === opt.id
                        ? 'bg-[#C88A58] text-white font-semibold shadow-md'
                        : 'bg-white/5 text-[#FAF7F2]/70 hover:bg-white/10 hover:text-white border border-white/10'
                    }`}
                  >
                    <span>{opt.name}</span>
                    <span className="text-[10px] opacity-70">({opt.roast})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Hero Visual Showcase with 360 Degree Rotating Cup and Badges */}
          <div className="lg:col-span-6 relative flex flex-col justify-center items-center">
            {/* Floating Badge 1: Freshly Brewed */}
            <div className="absolute -top-6 sm:top-2 left-2 sm:left-10 z-20 animate-float">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 text-[#FAF7F2] px-5 py-2.5 rounded-2xl shadow-2xl text-xs sm:text-sm font-medium flex items-center gap-2">
                <span className="text-base">☕</span>
                <span>Freshly Brewed</span>
              </div>
            </div>

            {/* Central 360 Degree Rotating Cup Component */}
            <RotatingCup
              imageSrc={selectedCup.image}
              altText={selectedCup.name}
              size="hero"
              showControls={true}
              showSteam={true}
              initialSpeed="normal"
              borderedPlate={true}
            />

            {/* Floating Badge 2: Best Coffee (Screenshot 1 bottom-right) */}
            <div className="absolute bottom-2 sm:bottom-16 right-2 sm:right-6 z-20 animate-float-reverse">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 text-[#FAF7F2] px-5 py-2.5 rounded-2xl shadow-2xl text-xs sm:text-sm font-medium flex items-center gap-2 hover:bg-white/20 transition cursor-default">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                <span>Best Coffee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
