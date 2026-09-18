import React, { useState } from 'react';
import { Coffee, ShoppingBag, Menu, X, Sparkles, Home, Layers, Wheat, Palette, Info, Star, MapPin } from 'lucide-react';
import { PageTab } from '../types';

interface NavbarProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  onOpenCart,
  onOpenOrderModal,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: { label: string; tab: PageTab; icon: React.FC<{ className?: string }> }[] = [
    { label: 'Home', tab: 'home', icon: Home },
    { label: 'Menu', tab: 'services', icon: Layers },
    { label: 'Bakery', tab: 'bakery', icon: Wheat },
    { label: 'Gallery', tab: 'gallery', icon: Palette },
    { label: 'About', tab: 'about', icon: Info },
    { label: 'Reviews', tab: 'testimonials', icon: Star },
    { label: 'Contact', tab: 'contact', icon: MapPin },
  ];

  const handleNavClick = (tab: PageTab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#2C1710]/95 backdrop-blur-md border-b border-white/10 transition-all duration-300 shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group focus:outline-none text-left"
          id="brand-logo"
        >
          <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#A3683A] to-[#C88A58] flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
            <Coffee className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-handwritten text-2xl sm:text-3xl text-white tracking-wide group-hover:text-[#C88A58] transition-colors leading-none">
              Artistic
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#FAF7F2]/60 font-semibold mt-1">
              Cafe &amp; Roastery • Lahore
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links with React Icons */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-[#FAF7F2]/90 font-medium text-sm">
          {navLinks.map((link) => {
            const isActive = activeTab === link.tab;
            const Icon = link.icon;
            return (
              <button
                key={link.tab}
                onClick={() => handleNavClick(link.tab)}
                id={`nav-${link.tab}`}
                className={`inline-flex items-center gap-1.5 transition duration-200 relative py-1 cursor-pointer ${
                  isActive
                    ? 'text-[#C88A58] font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#C88A58]'
                    : 'text-[#FAF7F2]/80 hover:text-white'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#C88A58]' : 'text-[#FAF7F2]/60'}`} />
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Button Group */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Cart Icon Button */}
          <button
            onClick={onOpenCart}
            id="cart-btn"
            aria-label="View Shopping Cart"
            className="relative p-2.5 rounded-full bg-white/10 hover:bg-white/15 text-[#FAF7F2] transition border border-white/10"
            title="Open Cart"
          >
            <ShoppingBag className="w-5 h-5 text-[#FAF7F2]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#C88A58] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-lg animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          {/* Order CTA Button (matching Screenshot 1: Order with coffee cup icon) */}
          <button
            onClick={onOpenOrderModal}
            id="order-cta-btn"
            className="group relative inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-[#82442B] to-[#5A2C1C] border border-amber-600/40 text-[#FAF7F2] font-medium text-sm tracking-wide shadow-lg hover:from-[#C88A58] hover:to-[#844425] hover:shadow-glow-caramel hover:scale-105 active:scale-95 transition duration-300 cursor-pointer"
          >
            <span>Order</span>
            <Coffee className="w-4 h-4 text-[#E4A877] group-hover:text-white transition-colors" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            id="mobile-nav-toggle"
            className="lg:hidden p-2 text-[#FAF7F2]/80 hover:text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#22110C] border-t border-white/10 px-6 py-5 space-y-2 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeTab === link.tab;
            return (
              <button
                key={link.tab}
                onClick={() => handleNavClick(link.tab)}
                className={`flex items-center gap-3 w-full text-left py-2.5 px-3 rounded-xl text-sm font-medium transition ${
                  isActive
                    ? 'bg-white/10 text-[#C88A58] font-bold'
                    : 'text-[#FAF7F2]/85 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#C88A58]' : 'text-[#FAF7F2]/60'}`} />
                <span>{link.label}</span>
              </button>
            );
          })}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#C88A58] text-white font-medium shadow-md"
            >
              <Coffee className="w-4 h-4" />
              <span>Order Online</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
