import React, { useState } from 'react';
import { Sparkles, Clock, Utensils, Heart, Plus, Check, Coffee, Award, Star, Wheat } from 'lucide-react';
import { BAKERY_ITEMS } from '../data/coffeeData';
import { BakeryItem, CoffeeProduct } from '../types';

interface BakeryPageProps {
  onQuickOrderCoffee?: () => void;
  onAddToCart?: (item: BakeryItem) => void;
}

export const BakeryPage: React.FC<BakeryPageProps> = ({ onQuickOrderCoffee, onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const categories = ['All', 'Croissant', 'Cakes & Tarts', 'Savory'];

  const filteredItems = activeCategory === 'All'
    ? BAKERY_ITEMS
    : BAKERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleAddItem = (item: BakeryItem) => {
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    if (onAddToCart) {
      onAddToCart(item);
    }
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1800);
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Bakery Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#EBD8C8] text-[#532C20] text-xs font-bold uppercase tracking-wider">
            <Wheat className="w-3.5 h-3.5 text-[#A3683A]" />
            <span>Artisan Patisserie &amp; Bakes</span>
          </div>
          <h1 className="font-handwritten text-4xl sm:text-5xl lg:text-6xl text-[#22110C] leading-tight">
            Freshly Baked Every Morning
          </h1>
          <div className="w-20 h-1 bg-[#C88A58] mx-auto rounded-full" />
          <p className="text-[#532C20]/80 text-sm sm:text-base leading-relaxed">
            Crafted with cultured Normandy butter, slow cold fermentations, and single-origin chocolate.
            Designed to harmonize with our espresso notes.
          </p>

          {/* Bakery Fresh Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white border border-[#EBD8C8] text-xs text-[#532C20] shadow-sm">
              <Clock className="w-3.5 h-3.5 text-[#C88A58]" />
              <span>Oven Batches: <strong>7:00 AM &amp; 1:30 PM</strong></span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white border border-[#EBD8C8] text-xs text-[#532C20] shadow-sm">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>100% Pure Normandy Butter</span>
            </div>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#2C1710] text-[#FAF7F2] shadow-md scale-105'
                  : 'bg-white text-[#532C20] border border-[#EBD8C8] hover:bg-[#F5ECE2]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bakery Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#F2E6DC] shadow-soft-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image & Badge */}
              <div className="relative h-56 overflow-hidden bg-[#2C1710]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {item.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#C88A58] text-white text-[11px] font-bold shadow-md">
                    {item.badge}
                  </div>
                )}

                <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-xs text-amber-300 text-xs font-bold">
                  <Star className="w-3 h-3 fill-current" />
                  <span>{item.rating}</span>
                </div>

                <div className="absolute bottom-3 left-4 text-white text-xs font-medium bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                  {item.calories} kcal
                </div>
              </div>

              {/* Item Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] uppercase tracking-wider text-[#A3683A] font-bold">
                      {item.category}
                    </span>
                    <span className="text-lg font-extrabold text-[#22110C]">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-[#22110C] group-hover:text-[#A3683A] transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#532C20]/75 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Pairing Note */}
                <div className="p-3 bg-[#FAF7F2] rounded-2xl border border-[#F0E4D8] flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#EBD8C8] flex items-center justify-center text-[#532C20] shrink-0">
                    <Coffee className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-[11px] leading-tight">
                    <span className="text-[#532C20]/70 block">Pairs flawlessly with:</span>
                    <strong className="text-[#22110C]">{item.pairingCoffee}</strong>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={() => handleAddItem(item)}
                    className={`flex-1 py-2.5 px-4 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer ${
                      addedItemIds[item.id]
                        ? 'bg-emerald-700 text-white'
                        : 'bg-[#2C1710] hover:bg-[#C88A58] text-white shadow-md'
                    }`}
                  >
                    {addedItemIds[item.id] ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added to Order</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Order (${item.price.toFixed(2)})</span>
                      </>
                    )}
                  </button>

                  {onQuickOrderCoffee && (
                    <button
                      onClick={onQuickOrderCoffee}
                      title="Order paired coffee"
                      className="p-2.5 rounded-full border border-[#EBD8C8] hover:bg-[#F5ECE2] text-[#532C20] transition cursor-pointer"
                    >
                      <Coffee className="w-4 h-4 text-[#A3683A]" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Roastery Bakery Box Notice */}
        <div className="mt-16 bg-[#23120C] text-[#FAF7F2] rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E4A877]">
              Morning Catering &amp; Box Sets
            </span>
            <h3 className="font-handwritten text-3xl sm:text-4xl text-white">
              Planning a Gathering or Morning Meeting in Lahore?
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF7F2]/75 max-w-xl">
              Order our Artisan Baker's Box with 12 fresh assorted croissants, seasonal tarts, and a 2-liter
              insulated box of fresh Ethiopian pour-over.
            </p>
          </div>

          <button
            onClick={onQuickOrderCoffee}
            className="shrink-0 px-8 py-3.5 rounded-full bg-[#C88A58] hover:bg-[#A3683A] text-white text-xs sm:text-sm font-bold shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Order Cafe Box Set
          </button>
        </div>
      </div>
    </div>
  );
};
