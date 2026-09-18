import React, { useState } from 'react';
import { MessageSquare, X, Phone, Clock, Coffee } from 'lucide-react';

const WHATSAPP_INTL = '923472279405';

interface FloatingWhatsAppProps {
  onOpenOrderDrawer?: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenOrderDrawer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const directOrderLink = `https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(
    'Hello Artistic Cafe Lahore! I would like to place an order / make an inquiry.'
  )}`;

  return (
    <div className="fixed bottom-5 left-5 z-40 flex flex-col items-start font-sans">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-stone-200 p-4 text-[#22110C] animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xs">
                <MessageSquare className="w-5 h-5 fill-white" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-[#22110C]">Artistic Cafe Lahore</h4>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-600 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Barista Online • MM Alam Rd</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-stone-700 p-1 rounded-lg transition"
              aria-label="Close WhatsApp chat card"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-xs text-[#532C20]/85 space-y-2">
            <p className="bg-[#F8F9FA] p-2.5 rounded-xl border border-stone-100">
              👋 Salam! Order your fresh coffee, espresso roasts, or bakery pastries directly on WhatsApp:
            </p>
            <div className="flex items-center justify-between text-[11px] text-stone-600 px-1">
              <span>Delivery / Dine-in:</span>
              <span className="font-semibold text-[#22110C]">MM Alam Road, Lahore</span>
            </div>
          </div>

          <div className="space-y-2 pt-1">
            <a
              href={directOrderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition flex items-center justify-center gap-2 shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>

            {onOpenOrderDrawer && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenOrderDrawer();
                }}
                className="w-full py-2 px-3 rounded-xl bg-[#FAF6F0] hover:bg-[#F2EAE1] text-[#22110C] text-[11px] font-semibold transition flex items-center justify-center gap-1.5 border border-stone-200 cursor-pointer"
              >
                <Coffee className="w-3.5 h-3.5 text-[#C88A58]" />
                <span>Build Order in Drawer First</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        id="floating-whatsapp-btn"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border-2 border-white"
        aria-label="Order via WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-white" />
        <span className="text-xs font-bold pr-1 hidden sm:inline">
          Order via WhatsApp
        </span>
        <span className="text-xs font-bold pr-1 sm:hidden">WhatsApp</span>
      </button>
    </div>
  );
};
