import React from 'react';
import { Sparkles, Clock, MapPin } from 'lucide-react';

interface AnnouncementBarProps {
  onOpenLocations: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOpenLocations }) => {
  return (
    <aside className="bg-[#140A07] text-[#FAF7F2]/80 text-xs py-2 px-4 border-b border-[#3D2017]/60 tracking-wider">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="font-medium flex items-center gap-2 text-center sm:text-left">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span>Fresh Single-Origin Ethiopian Yirgacheffe on batch brew today.</span>
        </p>
        <div className="flex items-center gap-4 sm:gap-6 text-[#FAF7F2]/70 text-[11px] sm:text-xs">
          <button
            onClick={onOpenLocations}
            className="hover:text-[#C88A58] transition cursor-pointer flex items-center gap-1"
          >
            <MapPin className="w-3 h-3 text-[#C88A58]" />
            <span>MM Alam Rd, Lahore</span>
          </button>
          <span>•</span>
          <a
            href="https://wa.me/923472279405"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4ADE80] hover:underline font-semibold flex items-center gap-1.5 bg-[#25D366]/20 px-3 py-0.5 rounded-full border border-[#25D366]/40 transition"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            <span>Order on WhatsApp</span>
          </a>
          <span className="hidden md:inline">•</span>
          <span className="text-[#C88A58] font-semibold flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>Open Daily 7:00 AM – 11:00 PM</span>
          </span>
        </div>
      </div>
    </aside>
  );
};
