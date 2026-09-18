import React, { useState } from 'react';
import { Sparkles, Award, Flame, Droplets, Compass, Eye, Layers, X, Sliders, ChevronRight } from 'lucide-react';
import { ARTISTIC_CARDS } from '../data/coffeeData';
import { ArtisticCard } from '../types';

interface ArtisticCardsSectionProps {
  onExploreGallery?: () => void;
  standalone?: boolean;
}

export const ArtisticCardsSection: React.FC<ArtisticCardsSectionProps> = ({
  onExploreGallery,
  standalone = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeCardModal, setActiveCardModal] = useState<ArtisticCard | null>(null);

  const categories = ['All', 'Latte Art', 'Brew Method', 'Single Origin', 'Roasting Craft'];

  const filteredCards = selectedCategory === 'All'
    ? ARTISTIC_CARDS
    : ARTISTIC_CARDS.filter((card) => card.category === selectedCategory);

  return (
    <section className={`relative ${standalone ? 'py-12' : 'py-20 bg-[#FAF7F2]'} overflow-hidden`}>
      {/* Subtle warm ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C88A58]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#2C1710]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBD8C8] text-[#532C20] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#A3683A]" />
              <span>Artisan Masterpieces</span>
            </div>
            <h2 className="font-handwritten text-4xl sm:text-5xl lg:text-6xl text-[#22110C] leading-tight">
              The Art of the Craft
            </h2>
            <p className="text-[#532C20]/75 text-sm sm:text-base max-w-xl mt-2">
              From free-pour latte art choreography to precision vacuum syphon extractions, explore the
              sensory canvas behind our signature cups.
            </p>
          </div>

          {/* Category Filter Pills with React Icons */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#2C1710] text-[#FAF7F2] shadow-md scale-105'
                    : 'bg-white text-[#532C20] border border-[#F0E4D8] hover:bg-[#F5ECE2]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Artistic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              className="group relative bg-white rounded-3xl overflow-hidden border border-[#F2E6DC] shadow-soft-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 cursor-pointer"
              onClick={() => setActiveCardModal(card)}
            >
              {/* Image & Artistic Badges */}
              <div className="relative h-60 overflow-hidden bg-[#2C1710]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#22110C]/80 via-[#22110C]/20 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[11px] font-semibold border border-white/15 shadow">
                  {card.category === 'Latte Art' && <Sparkles className="w-3 h-3 text-[#E4A877]" />}
                  {card.category === 'Brew Method' && <Droplets className="w-3 h-3 text-cyan-300" />}
                  {card.category === 'Single Origin' && <Compass className="w-3 h-3 text-emerald-400" />}
                  {card.category === 'Roasting Craft' && <Flame className="w-3 h-3 text-amber-400" />}
                  <span>{card.category}</span>
                </div>

                {/* Quick Inspect Button */}
                <button
                  type="button"
                  aria-label="Inspect artwork"
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-[#C88A58]"
                >
                  <Eye className="w-4 h-4" />
                </button>

                {/* Bottom title inside banner */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-handwritten text-2xl text-white drop-shadow-sm leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-white/80 text-xs line-clamp-1 mt-0.5">
                    {card.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-[#532C20]/80 text-xs sm:text-sm leading-relaxed italic">
                  "{card.artistNote}"
                </p>

                {/* Flavor Profile Micro-Meters */}
                <div className="bg-[#FAF7F2] rounded-2xl p-3.5 border border-[#F0E4D8] space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-[#532C20]">
                    <span className="flex items-center gap-1">
                      <Sliders className="w-3 h-3 text-[#C88A58]" />
                      <span>Sensory Profile</span>
                    </span>
                    <span className="text-[#A3683A]">Peak Intensity</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[10px] text-[#532C20]/85">
                    <div>
                      <div className="flex justify-between mb-0.5">
                        <span>Aroma</span>
                        <span className="font-bold">{card.flavorProfile.aroma}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#C88A58] to-[#A3683A] rounded-full"
                          style={{ width: `${card.flavorProfile.aroma}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-0.5">
                        <span>Sweetness</span>
                        <span className="font-bold">{card.flavorProfile.sweetness}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-amber-400 to-[#C88A58] rounded-full"
                          style={{ width: `${card.flavorProfile.sweetness}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tags and CTA */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-gray-100">
                  <div className="flex flex-wrap gap-1.5">
                    {card.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#F5ECE2] text-[#532C20] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveCardModal(card);
                    }}
                    className="text-xs font-bold text-[#A3683A] hover:text-[#2C1710] inline-flex items-center gap-1 transition"
                  >
                    <span>View Craft</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {onExploreGallery && (
          <div className="text-center mt-12">
            <button
              onClick={onExploreGallery}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2C1710] hover:bg-[#C88A58] text-[#FAF7F2] text-xs sm:text-sm font-bold shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <Award className="w-4 h-4 text-[#E4A877]" />
              <span>Explore Complete Artisan Gallery</span>
            </button>
          </div>
        )}
      </div>

      {/* Interactive Modal for Artistic Card Detail */}
      {activeCardModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActiveCardModal(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#EBD8C8] animate-scaleUp relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Image */}
            <div className="relative h-64 bg-[#2C1710]">
              <img
                src={activeCardModal.image}
                alt={activeCardModal.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#22110C] via-[#22110C]/30 to-transparent" />

              <button
                onClick={() => setActiveCardModal(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-[#C88A58] transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#E4A877] block mb-1">
                  {activeCardModal.category}
                </span>
                <h3 className="font-handwritten text-3xl text-white">
                  {activeCardModal.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 max-h-[65vh] overflow-y-auto">
              <p className="text-xs sm:text-sm text-[#532C20]/85 leading-relaxed">
                {activeCardModal.artistNote}
              </p>

              {/* Equipment & Details */}
              <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#F0E4D8] space-y-2">
                <h4 className="text-xs font-bold text-[#22110C] uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#C88A58]" />
                  <span>Technical &amp; Brewing Specifications</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#532C20]">
                  {activeCardModal.details.temperature && (
                    <div>
                      <span className="text-gray-400 block text-[10px]">Temperature:</span>
                      <span className="font-semibold">{activeCardModal.details.temperature}</span>
                    </div>
                  )}
                  {activeCardModal.details.equipment && (
                    <div>
                      <span className="text-gray-400 block text-[10px]">Equipment:</span>
                      <span className="font-semibold">{activeCardModal.details.equipment}</span>
                    </div>
                  )}
                  {activeCardModal.details.elevation && (
                    <div>
                      <span className="text-gray-400 block text-[10px]">Elevation:</span>
                      <span className="font-semibold">{activeCardModal.details.elevation}</span>
                    </div>
                  )}
                  {activeCardModal.details.processing && (
                    <div>
                      <span className="text-gray-400 block text-[10px]">Processing:</span>
                      <span className="font-semibold">{activeCardModal.details.processing}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Full Flavor Meter Breakdown */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold text-[#22110C]">Cupping Flavor Metrics</h4>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(activeCardModal.flavorProfile).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                      <div className="flex justify-between text-[11px] font-medium capitalize text-[#532C20] mb-1">
                        <span>{key}</span>
                        <span className="font-bold">{value}%</span>
                      </div>
                      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#C88A58] to-[#2C1710] rounded-full"
                          style={{ width: `${value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {activeCardModal.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-3 py-1 rounded-full bg-[#F5ECE2] text-[#532C20] font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
