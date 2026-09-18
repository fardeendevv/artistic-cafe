import React, { useState } from 'react';
import { X, Coffee, Check, Plus, Minus, Flame, Star, Sparkles, MessageSquare } from 'lucide-react';
import { CoffeeProduct, CartItem, CupSize, MilkOption, SweetnessLevel, TemperatureOption } from '../types';
import { RotatingCup } from './RotatingCup';

interface ProductCustomizeModalProps {
  product: CoffeeProduct | null;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
}

const WHATSAPP_INTL = '923472279405';

export const ProductCustomizeModal: React.FC<ProductCustomizeModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [size, setSize] = useState<CupSize>('Regular (12oz)');
  const [milk, setMilk] = useState<MilkOption>('Whole Milk');
  const [sweetness, setSweetness] = useState<SweetnessLevel>('Standard (50%)');
  const [temperature, setTemperature] = useState<TemperatureOption>('Hot');
  const [extraShots, setExtraShots] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [specialNotes, setSpecialNotes] = useState<string>('');

  // Calculate price dynamically
  const sizePriceAdd = size === 'Large (16oz)' ? 1.0 : size === 'Small (8oz)' ? -0.5 : 0;
  const milkPriceAdd = milk.includes('$0.75') ? 0.75 : milk.includes('$0.50') ? 0.5 : 0;
  const shotsPriceAdd = extraShots * 1.25;
  const singleUnitPrice = Math.max(2.5, product.price + sizePriceAdd + milkPriceAdd + shotsPriceAdd);
  const totalPrice = singleUnitPrice * quantity;

  const handleAdd = () => {
    const item: CartItem = {
      id: `${product.id}-${Date.now()}`,
      product,
      quantity,
      size,
      milk,
      sweetness,
      temperature,
      extraShots,
      specialNotes: specialNotes.trim() || undefined,
      itemTotal: totalPrice,
    };
    onAddToCart(item);
    onClose();
  };

  const handleWhatsAppDirect = () => {
    const pkr = Math.round(totalPrice * 150);
    const msg = [
      `☕ *ARTISTIC CAFE LAHORE — QUICK ORDER*`,
      `📍 MM Alam Road, Gulberg III, Lahore`,
      `Item: *${product.name}* (x${quantity})`,
      `• Size: ${size}`,
      `• Temp: ${temperature} | Milk: ${milk}`,
      `• Sweetness: ${sweetness}`,
      extraShots > 0 ? `• Extra Shots: +${extraShots}` : '',
      specialNotes.trim() ? `• Note: ${specialNotes.trim()}` : '',
      `• Total: Rs. ${pkr.toLocaleString()} ($${totalPrice.toFixed(2)})`,
      `\nPlease confirm preparation time. Thank you!`
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-[#F4ECE4] overflow-hidden my-6 relative animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#FAF6F0] hover:bg-gray-200 text-gray-700 flex items-center justify-center transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left Column: 360 Degree Rotating Cup & Tasting Notes */}
          <div className="md:col-span-5 bg-[#23120C] text-white p-6 sm:p-8 flex flex-col items-center justify-between relative overflow-hidden">
            <div className="w-full text-center relative z-10">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C88A58] font-bold">
                Artisan Roastery
              </span>
              <h3 className="font-handwritten text-3xl text-white mt-1">{product.name}</h3>
              <p className="text-xs text-[#FAF7F2]/70 mt-1">{product.origin}</p>
            </div>

            {/* Central 360 Degree Spinning Cup */}
            <div className="my-6 relative z-10">
              <RotatingCup
                imageSrc={product.image}
                altText={product.name}
                size="md"
                showControls={false}
                showSteam={temperature === 'Hot'}
                initialSpeed="normal"
              />
              <div className="text-center mt-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] text-[#C88A58] font-mono">
                  <Sparkles className="w-3 h-3" /> 360° View
                </span>
              </div>
            </div>

            {/* Flavor Notes Tag Cloud */}
            <div className="w-full text-center relative z-10">
              <span className="text-[10px] text-white/50 uppercase tracking-wider block mb-2 font-semibold">
                Tasting Notes
              </span>
              <div className="flex flex-wrap justify-center gap-1.5">
                {product.notes.map((note) => (
                  <span
                    key={note}
                    className="px-2 py-0.5 rounded bg-white/10 text-[#FAF7F2] text-[10px]"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Customization Controls */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C88A58]">
                  Custom Craft Extraction
                </span>
                <span className="text-xl font-bold text-[#22110C]">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-[#532C20]/75 leading-relaxed">
                {product.longDescription || product.description}
              </p>
            </div>

            {/* Temperature Choice */}
            <div>
              <label className="text-xs font-bold text-[#22110C] block mb-2">Temperature</label>
              <div className="grid grid-cols-2 gap-2">
                {(['Hot', 'Iced'] as TemperatureOption[]).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTemperature(t)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold transition border cursor-pointer ${
                      temperature === t
                        ? 'bg-[#2C1710] text-white border-[#2C1710]'
                        : 'bg-[#FAF6F0] text-[#532C20] border-transparent hover:bg-amber-100/60'
                    }`}
                  >
                    {t === 'Hot' ? '🔥 Steaming Hot' : '🧊 Chilled on Rocks'}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Options */}
            <div>
              <label className="text-xs font-bold text-[#22110C] block mb-2">Cup Size</label>
              <div className="grid grid-cols-3 gap-2">
                {(['Small (8oz)', 'Regular (12oz)', 'Large (16oz)'] as CupSize[]).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    className={`py-2 px-2 text-center rounded-xl text-xs font-semibold transition border cursor-pointer ${
                      size === s
                        ? 'bg-[#C88A58] text-white border-[#C88A58]'
                        : 'bg-[#FAF6F0] text-[#532C20] border-transparent hover:bg-amber-100/60'
                    }`}
                  >
                    {s.split(' ')[0]}
                    <span className="block text-[10px] font-normal opacity-80">
                      {s.match(/\((.*?)\)/)?.[1]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Milk Options */}
            <div>
              <label className="text-xs font-bold text-[#22110C] block mb-2">Milk Choice</label>
              <div className="grid grid-cols-2 gap-2">
                {(
                  [
                    'Whole Milk',
                    'Oat Milk (+ $0.75)',
                    'Almond Milk (+ $0.75)',
                    'No Milk',
                  ] as MilkOption[]
                ).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMilk(m)}
                    className={`py-2 px-2.5 rounded-xl text-left text-xs font-medium transition border cursor-pointer ${
                      milk === m
                        ? 'bg-[#2C1710] text-white border-[#2C1710]'
                        : 'bg-[#FAF6F0] text-[#532C20] border-transparent hover:bg-amber-100/60'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Sweetness Slider */}
            <div>
              <div className="flex justify-between items-center text-xs mb-1.5">
                <span className="font-bold text-[#22110C]">Sweetness Level</span>
                <span className="text-[#8C5035] font-semibold">{sweetness}</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {(
                  [
                    'Unsweetened (0%)',
                    'Less Sweet (25%)',
                    'Standard (50%)',
                    'Sweet (100%)',
                  ] as SweetnessLevel[]
                ).map((sw) => (
                  <button
                    key={sw}
                    type="button"
                    onClick={() => setSweetness(sw)}
                    className={`py-1.5 rounded-lg text-[10px] font-medium transition cursor-pointer ${
                      sweetness === sw
                        ? 'bg-[#C88A58] text-white font-bold'
                        : 'bg-[#FAF6F0] text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {sw.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Extra Espresso Shots */}
            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
              <div>
                <span className="text-xs font-bold text-[#22110C] block">Extra Espresso Shots</span>
                <span className="text-[10px] text-gray-500">+$1.25 per double ristretto shot</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  disabled={extraShots <= 0}
                  onClick={() => setExtraShots((prev) => Math.max(0, prev - 1))}
                  className="w-7 h-7 rounded-full bg-gray-100 disabled:opacity-40 flex items-center justify-center text-gray-700 hover:bg-gray-200"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-sm font-bold text-[#22110C] w-4 text-center">{extraShots}</span>
                <button
                  type="button"
                  onClick={() => setExtraShots((prev) => prev + 1)}
                  className="w-7 h-7 rounded-full bg-[#2C1710] text-white flex items-center justify-center hover:bg-[#C88A58]"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Quantity Stepper & Dual Action Buttons */}
            <div className="pt-4 border-t border-stone-200 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 bg-[#FAF6F0] p-1 rounded-xl border border-stone-200">
                  <button
                    type="button"
                    disabled={quantity <= 1}
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 rounded-lg bg-white shadow-xs disabled:opacity-40 flex items-center justify-center text-gray-700 cursor-pointer"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-bold w-6 text-center text-[#22110C]">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-8 h-8 rounded-lg bg-white shadow-xs flex items-center justify-center text-gray-700 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-right">
                  <span className="text-base font-extrabold text-[#22110C] block leading-tight">
                    Rs. {Math.round(totalPrice * 150).toLocaleString()}
                  </span>
                  <span className="text-[11px] text-stone-500 font-mono">
                    (${totalPrice.toFixed(2)})
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleAdd}
                  className="py-3 px-4 rounded-xl bg-[#22110C] hover:bg-[#C88A58] text-white text-xs font-bold shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Coffee className="w-4 h-4 text-[#E4A877]" />
                  <span>Add to Order Drawer</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Order via WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
