import React, { useState } from 'react';
import { Search, Coffee, Sparkles, Plus, Star, Check, MessageSquare, Wheat, Flame, ArrowRight } from 'lucide-react';
import { CoffeeProduct, BakeryItem } from '../types';
import { COFFEE_PRODUCTS, BAKERY_ITEMS } from '../data/coffeeData';

interface ServicesPageProps {
  onSelectProduct: (product: CoffeeProduct) => void;
  onQuickAdd: (product: CoffeeProduct) => void;
  onAddBakeryItem?: (item: BakeryItem) => void;
}

const WHATSAPP_INTL = '923472279405';

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectProduct,
  onQuickAdd,
  onAddBakeryItem,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [addedId, setAddedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Complete Menu' },
    { id: 'espresso', label: 'Espresso Bar' },
    { id: 'specialty', label: 'Signature Roastery' },
    { id: 'filter', label: 'Pour-Over & Filter' },
    { id: 'cold', label: 'Cold Brews & Chilled' },
    { id: 'tea', label: 'Artisanal Loose Tea' },
    { id: 'bakery', label: 'Fresh Bakery & Pastries' },
  ];

  // Filter Coffee Products
  const filteredCoffee = COFFEE_PRODUCTS.filter((product) => {
    if (activeCategory === 'bakery') return false;
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.notes.some((n) => n.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Filter Bakery Items
  const filteredBakery = BAKERY_ITEMS.filter((item) => {
    if (activeCategory !== 'all' && activeCategory !== 'bakery') return false;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.pairingCoffee.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const totalResults = filteredCoffee.length + filteredBakery.length;

  const handleCoffeeQuickAdd = (e: React.MouseEvent, product: CoffeeProduct) => {
    e.stopPropagation();
    onQuickAdd(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const handleBakeryQuickAdd = (e: React.MouseEvent, item: BakeryItem) => {
    e.stopPropagation();
    if (onAddBakeryItem) {
      onAddBakeryItem(item);
    }
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const handleDirectWhatsAppCoffeeOrder = (e: React.MouseEvent, product: CoffeeProduct) => {
    e.stopPropagation();
    const pkr = Math.round(product.price * 150);
    const msg = `☕ *ARTISTIC CAFE LAHORE — COFFEE ORDER*\n\n*Item:* ${product.name}\n*Price:* Rs. ${pkr.toLocaleString()} ($${product.price.toFixed(2)})\n*Origin:* ${product.origin}\n*Roast Level:* ${product.roastLevel}\n*Tasting Notes:* ${product.notes.join(', ')}\n\n📍 *Cafe Location:* MM Alam Road, Gulberg III, Lahore\n\nPlease confirm preparation time. I would like to place this order via WhatsApp!`;
    window.open(`https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleDirectWhatsAppBakeryOrder = (e: React.MouseEvent, item: BakeryItem) => {
    e.stopPropagation();
    const pkr = Math.round(item.price * 150);
    const msg = `🥐 *ARTISTIC CAFE LAHORE — BAKERY ORDER*\n\n*Item:* ${item.name}\n*Price:* Rs. ${pkr.toLocaleString()} ($${item.price.toFixed(2)})\n*Category:* ${item.category}\n*Description:* ${item.description}\n*Pairing Suggestion:* ${item.pairingCoffee}\n\n📍 *Cafe Location:* MM Alam Road, Gulberg III, Lahore\n\nPlease confirm availability and freshly baked batch status. Thank you!`;
    window.open(`https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div id="services" className="py-12 sm:py-16 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAD8C7]/60 text-[#8C5035] text-xs font-semibold mb-3 border border-[#D9C4B0]">
            <Coffee className="w-3.5 h-3.5 text-[#C88A58]" />
            <span>Complete Artisanal Roastery &amp; Bakery Menu</span>
          </div>
          <h1 className="font-handwritten text-4xl sm:text-5xl lg:text-6xl text-[#22110C] tracking-tight">
            Artistic Cafe Menu
          </h1>
          <div className="w-20 h-1 bg-[#C88A58] mx-auto mt-3 rounded-full" />
          <p className="mt-3.5 text-xs sm:text-sm text-[#532C20]/80 leading-relaxed max-w-xl mx-auto">
            Explore our complete collection of single-origin espresso roasts, slow pour-overs, nitro cold brews,
            and freshly baked French pastries. Order any item instantly via WhatsApp!
          </p>
        </div>

        {/* WhatsApp Fast Ordering Banner */}
        <div className="bg-gradient-to-r from-[#23120C] to-[#361910] text-white p-5 sm:p-6 rounded-3xl shadow-xl mb-10 border border-[#C88A58]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-lg">
              <MessageSquare className="w-6 h-6 fill-white" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-[#FAF7F2]">
                Instant WhatsApp Ordering
              </h3>
              <p className="text-xs text-[#FAF7F2]/75 mt-0.5">
                Click "Order via WhatsApp" on any menu item below for instant barista confirmation.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(
              'Hello Artistic Cafe Lahore! I am looking at your complete menu and would like to place an order.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition flex items-center gap-2 shadow-md hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-[#F4ECE4] shadow-sm mb-10 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search complete menu (espresso, latte, cold brew, croissant, cheesecake...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 text-xs sm:text-sm rounded-2xl bg-[#FAF6F0] border-0 focus:ring-2 focus:ring-[#C88A58] text-[#22110C]"
            />
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#2C1710] text-[#FAF7F2] shadow-md'
                    : 'bg-[#FAF6F0] text-[#532C20] hover:bg-amber-100/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Empty state */}
        {totalResults === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 p-8">
            <Coffee className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="font-handwritten text-2xl text-[#22110C]">No menu items match your search</h3>
            <p className="text-xs text-gray-500 mt-1">Try searching for espresso, cold brew, or croissant.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
              }}
              className="mt-4 px-5 py-2.5 bg-[#2C1710] text-white text-xs rounded-full font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Coffee Roastery Section */}
            {filteredCoffee.length > 0 && (
              <div>
                {activeCategory === 'all' && (
                  <div className="flex items-center gap-2 mb-6">
                    <Coffee className="w-5 h-5 text-[#C88A58]" />
                    <h2 className="font-bold text-xl text-[#22110C] tracking-tight">
                      Craft Roastery &amp; Espresso Bar
                    </h2>
                    <span className="text-xs text-stone-500 font-mono">({filteredCoffee.length} items)</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {filteredCoffee.map((item, index) => {
                    const isAdded = addedId === item.id;
                    const pkr = Math.round(item.price * 150);

                    return (
                      <div
                        key={item.id}
                        onClick={() => onSelectProduct(item)}
                        className="bg-white rounded-3xl p-6 border border-[#F4ECE4] shadow-soft-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                      >
                        <div>
                          {/* Top image with 360 spin */}
                          <div className="relative mb-5 flex justify-center">
                            <div className="w-32 h-32 rounded-full bg-[#FAF6F0] p-1.5 shadow-sm border border-gray-100 flex items-center justify-center overflow-hidden">
                              <div
                                className="w-full h-full rounded-full overflow-hidden flex items-center justify-center select-none"
                                style={{
                                  animation: `spin360 ${18 + (index % 3) * 4}s linear infinite`,
                                  transformOrigin: 'center center',
                                }}
                              >
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  referrerPolicy="no-referrer"
                                  className="w-full h-full object-cover rounded-full"
                                />
                              </div>
                            </div>

                            <span className="absolute top-0 right-0 bg-[#FAF6F0] text-[#8C5035] text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border border-[#F4ECE4]">
                              360°
                            </span>

                            {item.isPopular && (
                              <span className="absolute top-0 left-0 bg-[#C88A58] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                                <Sparkles className="w-2.5 h-2.5" /> Popular
                              </span>
                            )}
                          </div>

                          <div className="flex justify-between items-start">
                            <h3 className="text-lg font-bold text-[#22110C] group-hover:text-[#A3683A] transition-colors">
                              {item.name}
                            </h3>
                            <div className="text-right">
                              <span className="text-base font-extrabold text-[#22110C] block leading-tight">
                                Rs. {pkr.toLocaleString()}
                              </span>
                              <span className="text-[11px] text-stone-500 font-mono">
                                (${item.price.toFixed(2)})
                              </span>
                            </div>
                          </div>

                          <span className="text-[11px] text-[#C88A58] font-medium block mt-0.5">
                            {item.origin} • {item.roastLevel}
                          </span>

                          <p className="text-xs text-[#532C20]/75 mt-2.5 leading-relaxed line-clamp-2">
                            {item.description}
                          </p>

                          {/* Tasting notes */}
                          <div className="flex flex-wrap gap-1 mt-3">
                            {item.notes.map((note) => (
                              <span
                                key={note}
                                className="px-2 py-0.5 rounded bg-[#FAF6F0] text-[#8C5035] text-[10px] font-medium"
                              >
                                {note}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Bottom details & WhatsApp action buttons */}
                        <div className="mt-5 pt-4 border-t border-[#F4ECE4] space-y-2.5">
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-1 text-amber-600 font-bold">
                              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                              <span>{item.rating}</span>
                              <span className="text-gray-400 font-normal text-[11px]">
                                ({item.reviewsCount})
                              </span>
                            </div>
                            <span className="text-[11px] text-stone-500 font-mono">{item.caffeine}</span>
                          </div>

                          {/* Dual Actions: Direct WhatsApp Order + Customize */}
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              type="button"
                              onClick={(e) => handleDirectWhatsAppCoffeeOrder(e, item)}
                              className="py-2 px-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm hover:scale-[1.02] active:scale-95 cursor-pointer"
                              title="Direct order via WhatsApp"
                            >
                              <MessageSquare className="w-3.5 h-3.5 fill-white" />
                              <span className="truncate">Order via WhatsApp</span>
                            </button>

                            <button
                              type="button"
                              onClick={(e) => handleCoffeeQuickAdd(e, item)}
                              className={`py-2 px-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1 cursor-pointer ${
                                isAdded
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-[#FAF6F0] text-[#3D2017] hover:bg-[#C88A58] hover:text-white'
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
                                  <span>Customize</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Fresh Bakery & Pastries Section */}
            {filteredBakery.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-6 pt-6 border-t border-stone-200">
                  <Wheat className="w-5 h-5 text-[#C88A58]" />
                  <h2 className="font-bold text-xl text-[#22110C] tracking-tight">
                    Artisanal Bakery &amp; Patisserie
                  </h2>
                  <span className="text-xs text-stone-500 font-mono">({filteredBakery.length} items)</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {filteredBakery.map((bakery) => {
                    const isAdded = addedId === bakery.id;
                    const pkr = Math.round(bakery.price * 150);

                    return (
                      <div
                        key={bakery.id}
                        className="bg-white rounded-3xl p-6 border border-[#F4ECE4] shadow-soft-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                      >
                        <div>
                          {/* Image */}
                          <div className="relative mb-5 h-44 rounded-2xl overflow-hidden bg-[#FAF6F0]">
                            <img
                              src={bakery.image}
                              alt={bakery.name}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            {bakery.badge && (
                              <span className="absolute top-3 left-3 bg-[#2C1710] text-[#FAF7F2] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
                                {bakery.badge}
                              </span>
                            )}
                            <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[#532C20] text-[10px] font-bold px-2 py-1 rounded-full shadow-xs">
                              {bakery.calories} kcal
                            </span>
                          </div>

                          <div className="flex justify-between items-start">
                            <h3 className="text-lg font-bold text-[#22110C] group-hover:text-[#A3683A] transition-colors">
                              {bakery.name}
                            </h3>
                            <div className="text-right">
                              <span className="text-base font-extrabold text-[#22110C] block leading-tight">
                                Rs. {pkr.toLocaleString()}
                              </span>
                              <span className="text-[11px] text-stone-500 font-mono">
                                (${bakery.price.toFixed(2)})
                              </span>
                            </div>
                          </div>

                          <span className="text-[11px] text-[#C88A58] font-medium block mt-0.5">
                            {bakery.category}
                          </span>

                          <p className="text-xs text-[#532C20]/75 mt-2.5 leading-relaxed line-clamp-2">
                            {bakery.description}
                          </p>

                          <div className="mt-3 flex items-center gap-2 text-[11px] text-[#8C5035] bg-[#FAF6F0] p-2 rounded-xl">
                            <Coffee className="w-3.5 h-3.5 text-[#C88A58] shrink-0" />
                            <span className="truncate">Pair with: <strong>{bakery.pairingCoffee}</strong></span>
                          </div>
                        </div>

                        {/* Bottom details & action buttons */}
                        <div className="mt-5 pt-4 border-t border-[#F4ECE4] space-y-2.5">
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-1 text-amber-600 font-bold">
                              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                              <span>{bakery.rating}</span>
                              <span className="text-gray-400 font-normal text-[11px]">(Fresh Daily)</span>
                            </div>
                            <span className="text-[11px] text-emerald-700 font-semibold">
                              {bakery.isVegetarian ? 'Vegetarian' : 'Fresh Batch'}
                            </span>
                          </div>

                          {/* Dual Actions: WhatsApp Order + Add to Drawer */}
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              type="button"
                              onClick={(e) => handleDirectWhatsAppBakeryOrder(e, bakery)}
                              className="py-2 px-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm hover:scale-[1.02] active:scale-95 cursor-pointer"
                              title="Direct order via WhatsApp"
                            >
                              <MessageSquare className="w-3.5 h-3.5 fill-white" />
                              <span className="truncate">Order via WhatsApp</span>
                            </button>

                            <button
                              type="button"
                              onClick={(e) => handleBakeryQuickAdd(e, bakery)}
                              className={`py-2 px-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1 cursor-pointer ${
                                isAdded
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-[#FAF6F0] text-[#3D2017] hover:bg-[#C88A58] hover:text-white'
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
                                  <span>Add to Order</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
