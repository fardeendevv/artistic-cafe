import React, { useState } from 'react';
import { Coffee, Plus, Sparkles, Check, Info } from 'lucide-react';
import { CoffeeProduct } from '../types';
import { RotatingCup } from './RotatingCup';

interface BestCoffeeSectionProps {
  products: CoffeeProduct[];
  onQuickAdd: (product: CoffeeProduct) => void;
  onSelectProduct: (product: CoffeeProduct) => void;
}

export const BestCoffeeSection: React.FC<BestCoffeeSectionProps> = ({
  products,
  onQuickAdd,
  onSelectProduct,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'espresso' | 'filter' | 'cold'>('all');
  const [addedId, setAddedId] = useState<string | null>(null);

  // The 3 primary showcase cards from screenshot 2: Espresso, Americano, Cappuccino
  const primaryShowcase = products.slice(0, 3);

  const filteredProducts =
    selectedFilter === 'all'
      ? primaryShowcase
      : products.filter((p) => p.category === selectedFilter);

  const handleAddClick = (e: React.MouseEvent, product: CoffeeProduct) => {
    e.stopPropagation();
    onQuickAdd(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section className="py-20 sm:py-24 bg-white relative overflow-hidden" id="services">
      {/* Decorative background watermarks */}
      <div className="absolute -right-20 top-20 w-80 h-80 rounded-full bg-amber-50/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header with Cursive Signature Style (Screenshot 2) */}
        <div className="text-center mb-14">
          <h2 className="font-handwritten text-4xl sm:text-5xl lg:text-6xl text-[#22110C] tracking-tight">
            Best Coffee For You
          </h2>
          <div className="w-16 h-1 bg-[#C88A58] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-[#532C20]/75 max-w-xl mx-auto text-sm sm:text-base font-normal leading-relaxed">
            Carefully extracted by championship-trained baristas to elevate flavor profiles, balanced
            acidity, and velvet body.
          </p>

          {/* Interactive filter pills */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-2">
            {[
              { id: 'all', label: 'Curated Trio' },
              { id: 'espresso', label: 'Espresso Bar' },
              { id: 'filter', label: 'Drip & Filter' },
              { id: 'cold', label: 'Cold Brew' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-[#2C1710] text-[#FAF7F2] shadow-md'
                    : 'bg-[#FAF7F2] text-[#532C20] hover:bg-amber-100/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Coffee Products Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {filteredProducts.map((product, idx) => {
            const isAdded = addedId === product.id;

            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                id={`card-${product.id}`}
                className="group bg-white rounded-3xl p-8 pt-10 border border-[#F4ECE4] shadow-soft-card hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden cursor-pointer"
              >
                {/* Subtle top accent highlight on hover */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-[#C88A58] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Dish Thumbnail Circle with 360-Degree Continuous Rotating Cup */}
                <div className="mb-6 relative">
                  <div className="w-36 h-36 rounded-full bg-[#FAF6F0] border-4 border-white shadow-md p-2 group-hover:scale-105 transition-transform flex items-center justify-center relative overflow-hidden">
                    <div
                      className="w-full h-full rounded-full overflow-hidden shadow-inner flex items-center justify-center select-none"
                      style={{
                        animation: `spin360 ${16 + idx * 4}s linear infinite`,
                        transformOrigin: 'center center',
                      }}
                      title="360° rotating cup"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover rounded-full select-none"
                      />
                    </div>
                  </div>
                  {/* Subtle 360 Badge */}
                  <span className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-[#2C1710] text-[10px] text-white font-mono shadow-sm">
                    360°
                  </span>
                </div>

                {/* Product Title */}
                <h3 className="text-xl font-bold text-[#22110C] group-hover:text-[#A3683A] transition-colors">
                  {product.name}
                </h3>

                {/* Origin / Roast note tag */}
                <span className="text-[11px] font-medium text-[#C88A58] uppercase tracking-wider mt-1">
                  {product.origin.split(',')[0]} • {product.roastLevel}
                </span>

                {/* Description Text */}
                <p className="text-xs sm:text-sm text-[#532C20]/75 mt-3 leading-relaxed">
                  {product.description}
                </p>

                {/* Flavor Notes Pills */}
                <div className="flex flex-wrap justify-center gap-1.5 mt-4">
                  {product.notes.map((note) => (
                    <span
                      key={note}
                      className="px-2 py-0.5 rounded-md bg-[#FAF6F0] text-[#8C5035] text-[10px] font-medium"
                    >
                      {note}
                    </span>
                  ))}
                </div>

                {/* Price & Quick Add Button Row */}
                <div className="mt-6 pt-5 w-full border-t border-[#F4ECE4] flex items-center justify-between">
                  <div className="text-left">
                    <span className="text-xs text-[#8C5035]/80 block">Single Serving</span>
                    <span className="text-xl font-bold text-[#22110C]">${product.price.toFixed(2)}</span>
                  </div>

                  <button
                    onClick={(e) => handleAddClick(e, product)}
                    id={`quick-add-${product.id}`}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm ${
                      isAdded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#FAF6F0] text-[#3D2017] hover:bg-[#C88A58] hover:text-white active:scale-95'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Quick Add</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
