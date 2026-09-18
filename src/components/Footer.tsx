import React from 'react';
import { Coffee, MapPin, MessageSquare, Mail, Clock, ArrowUp, Sparkles, Wheat, Palette } from 'lucide-react';
import { PageTab } from '../types';

interface FooterProps {
  onNavigate: (tab: PageTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#2D1A13] text-[#FAF7F2] pt-16 pb-12 overflow-hidden border-t border-[#3D2017]/60">
      {/* Ambient Coffee Bean Textured Background Element (from screenshot 3) */}
      <div className="absolute inset-0 bg-coffee-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Column 1: Brand & Opening Hours */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => {
                onNavigate('home');
                scrollToTop();
              }}
              className="inline-block text-left group cursor-pointer"
            >
              <span className="font-handwritten text-3xl sm:text-4xl text-white tracking-wide group-hover:text-[#C88A58] transition">
                Artistic Cafe
              </span>
            </button>

            <p className="text-[#FAF7F2]/70 text-xs sm:text-sm leading-relaxed max-w-sm">
              Crafted Coffee, Cozy Vibes, Unforgettable Moments — Your Perfect Espresso Escape in Lahore.
            </p>

            <div className="pt-1 flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 text-xs text-[#FAF7F2]/80 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl">
                <Clock className="w-3.5 h-3.5 text-[#C88A58]" />
                <span>Open Daily: 7:00 AM – 11:00 PM</span>
              </div>
              <div className="inline-flex items-center gap-2 text-xs text-[#FAF7F2]/80 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl">
                <Sparkles className="w-3.5 h-3.5 text-[#C88A58]" />
                <span>Freshly Roasted Single-Origin Arabica</span>
              </div>
            </div>
          </div>

          {/* Column 2: Footer Links (Screenshot 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">Explore Cafe</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#FAF7F2]/75">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    scrollToTop();
                  }}
                  className="hover:text-[#C88A58] transition cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    scrollToTop();
                  }}
                  className="hover:text-[#C88A58] transition cursor-pointer"
                >
                  Menu &amp; Roasts
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('bakery');
                    scrollToTop();
                  }}
                  className="hover:text-[#C88A58] transition cursor-pointer flex items-center gap-1.5"
                >
                  <Wheat className="w-3.5 h-3.5 text-[#C88A58]" />
                  <span>Bakery &amp; Patisserie</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('gallery');
                    scrollToTop();
                  }}
                  className="hover:text-[#C88A58] transition cursor-pointer flex items-center gap-1.5"
                >
                  <Palette className="w-3.5 h-3.5 text-[#C88A58]" />
                  <span>Artisan Gallery</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links (Screenshot 3) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#FAF7F2]/75">
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    scrollToTop();
                  }}
                  className="hover:text-[#C88A58] transition cursor-pointer"
                >
                  About Our Roastery
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('testimonials');
                    scrollToTop();
                  }}
                  className="hover:text-[#C88A58] transition cursor-pointer"
                >
                  Patron Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    scrollToTop();
                  }}
                  className="hover:text-[#C88A58] transition cursor-pointer"
                >
                  Reserve Table &amp; Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Address & Socials (Screenshot 3 Right) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#C88A58]" />
              <span>Address</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#FAF7F2]/75 leading-relaxed">
              MM Alam Road, Gulberg III
              <br />
              Lahore, Pakistan
            </p>

            {/* WhatsApp Quick Action */}
            <div className="pt-2">
              <a
                href="https://wa.me/923472279405"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold shadow-md transition"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Order via WhatsApp</span>
              </a>
            </div>

            {/* Social Icon Row from Screenshot 3 (Facebook, LinkedIn, Instagram) */}
            <div className="flex items-center gap-3 pt-3">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C88A58] hover:text-white flex items-center justify-center text-[#FAF7F2] transition duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C88A58] hover:text-white flex items-center justify-center text-[#FAF7F2] transition duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C88A58] hover:text-white flex items-center justify-center text-[#FAF7F2] transition duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Scroll To Top Button */}
              <button
                onClick={scrollToTop}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C88A58] hover:text-white flex items-center justify-center text-[#FAF7F2] transition ml-auto"
                title="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright & System Notice (Screenshot 3 bottom) */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-[#FAF7F2]/45 gap-4">
          <p>© 2026 Artistic Cafe Lahore. Handcrafted specialty coffee, roastery &amp; bakery.</p>
          <p className="font-mono">MM Alam Road, Gulberg III, Lahore • Fast Orders via WhatsApp</p>
        </div>
      </div>
    </footer>
  );
};
