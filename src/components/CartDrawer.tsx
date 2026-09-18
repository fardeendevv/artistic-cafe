import React, { useState } from 'react';
import {
  X,
  ShoppingBag,
  Trash2,
  ArrowRight,
  CheckCircle2,
  Coffee,
  Phone,
  MapPin,
  Clock,
  User,
  MessageSquare,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

const WHATSAPP_INTL = '923472279405';

// Format price in Pakistani Rupees (PKR) and standard display
export const formatPKR = (usdAmount: number): string => {
  // Approximate standard Lahore specialty coffee pricing: ~$1 = ~150 Rs scale factor
  const pkrValue = Math.round(usdAmount * 150);
  return `Rs. ${pkrValue.toLocaleString()}`;
};

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [orderType, setOrderType] = useState<'Dine-in' | 'Takeaway' | 'Delivery'>('Dine-in');
  const [addressOrTable, setAddressOrTable] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const [promoMessage, setPromoMessage] = useState<string | null>(null);
  const [orderSent, setOrderSent] = useState(false);
  const [lastOrderTicket, setLastOrderTicket] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Subtotal calculations
  const subtotalUSD = items.reduce((sum, item) => sum + item.itemTotal, 0);
  const totalPKR = Math.max(0, Math.round((subtotalUSD - discountAmount) * 150));

  const handleApplyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (code === 'ARTISTIC10') {
      const discount = subtotalUSD * 0.1;
      setDiscountAmount(discount);
      setPromoMessage('✨ 10% Lahore Patron Discount Applied!');
    } else if (code === 'MMALAM') {
      setDiscountAmount(1.5);
      setPromoMessage('☕ Rs. 225 MM Alam Road Welcome Perk Applied!');
    } else {
      setPromoMessage('❌ Please try code "ARTISTIC10"');
    }
  };

  // Compile the exact WhatsApp message to be sent to WhatsApp cafe line
  const generateWhatsAppMessage = (ticketId: string): string => {
    const lines: string[] = [];
    lines.push('☕ *ARTISTIC CAFE LAHORE — NEW ORDER*');
    lines.push('📍 MM Alam Road, Gulberg III, Lahore');
    lines.push(`🎫 *Ticket #:* ${ticketId}`);
    lines.push('----------------------------------------');
    lines.push(`👤 *Customer:* ${customerName.trim() || 'Guest'}`);
    if (customerPhone.trim()) {
      lines.push(`📞 *Phone:* ${customerPhone.trim()}`);
    }
    lines.push(`🛵 *Service:* ${orderType}`);
    if (addressOrTable.trim()) {
      lines.push(`🏷️ *${orderType === 'Dine-in' ? 'Table Number' : 'Address / Notes'}:* ${addressOrTable.trim()}`);
    }
    lines.push('----------------------------------------');
    lines.push('📋 *ITEMS ORDERED:*');

    items.forEach((item, index) => {
      const pkrSingle = Math.round(item.itemTotal * 150);
      lines.push(
        `${index + 1}. *${item.product.name}* (x${item.quantity})`
      );
      lines.push(`   • Size: ${item.size}`);
      lines.push(`   • Temp: ${item.temperature} | Milk: ${item.milk}`);
      lines.push(`   • Sweetness: ${item.sweetness}`);
      if (item.extraShots > 0) {
        lines.push(`   • Extra Shots: +${item.extraShots}`);
      }
      if (item.specialNotes) {
        lines.push(`   • Note: ${item.specialNotes}`);
      }
      lines.push(`   • Item Total: Rs. ${pkrSingle.toLocaleString()}`);
    });

    lines.push('----------------------------------------');
    if (discountAmount > 0) {
      lines.push(`🏷️ *Discount:* -Rs. ${Math.round(discountAmount * 150).toLocaleString()}`);
    }
    lines.push(`💰 *TOTAL PAYABLE:* Rs. ${totalPKR.toLocaleString()}`);
    lines.push('----------------------------------------');

    if (specialInstructions.trim()) {
      lines.push(`📝 *Barista Instructions:* ${specialInstructions.trim()}`);
      lines.push('----------------------------------------');
    }

    lines.push('💬 *Artistic Cafe Lahore — WhatsApp Direct Order*');
    lines.push('Please confirm preparation time. Thank you!');

    return lines.join('\n');
  };

  const handleSendWhatsAppOrder = () => {
    if (!customerName.trim()) {
      setValidationError('Please enter your name so our baristas know whom to serve.');
      return;
    }
    if (orderType !== 'Takeaway' && !addressOrTable.trim()) {
      setValidationError(
        orderType === 'Dine-in'
          ? 'Please provide your table number or seating area.'
          : 'Please enter your Lahore delivery address.'
      );
      return;
    }
    setValidationError(null);

    const ticketId = `ART-${Math.floor(1000 + Math.random() * 9000)}`;
    setLastOrderTicket(ticketId);

    const message = generateWhatsAppMessage(ticketId);
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_INTL}?text=${encodedMessage}`;

    // Open WhatsApp directly for the user
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setOrderSent(true);
  };

  const handleCopyOrder = () => {
    if (!lastOrderTicket) return;
    const message = generateWhatsAppMessage(lastOrderTicket);
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleResetOrder = () => {
    onClearCart();
    setOrderSent(false);
    setLastOrderTicket('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
      <div className="bg-white w-full max-w-lg h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300 relative z-10 overflow-hidden">
        {/* Header with human cafe branding & direct WhatsApp badge */}
        <div className="p-5 bg-[#22110C] text-[#FAF7F2] flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#C88A58] flex items-center justify-center text-white shadow-sm">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base tracking-tight">Your Coffee Order</h3>
                <span className="px-2 py-0.5 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#4ADE80] text-[10px] font-semibold">
                  WhatsApp Ordering
                </span>
              </div>
              <p className="text-[11px] text-[#FAF7F2]/70">
                Direct to Barista • MM Alam Road, Lahore
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close order drawer"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F2] flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {orderSent ? (
            /* Order Sent Confirmation Screen */
            <div className="py-4 space-y-5 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#A3683A] font-bold block">
                  Ticket Generated
                </span>
                <h4 className="font-handwritten text-3xl text-[#22110C] mt-1">
                  Order Opened in WhatsApp!
                </h4>
                <p className="text-xs text-stone-600 mt-1">
                  Ticket Ref: <span className="font-mono font-bold text-[#22110C]">{lastOrderTicket}</span>
                </p>
              </div>

              {/* Human Barista Notice */}
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EADBCE] text-left space-y-2.5 text-xs text-[#22110C]">
                <div className="flex items-center gap-2 font-bold text-[#22110C]">
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>Next Step: Hit Send on WhatsApp</span>
                </div>
                <p className="text-[#532C20]/80 leading-relaxed">
                  Your order is prepared with your selections. If WhatsApp did not open automatically,
                  tap the button below to send your ticket directly to our counter.
                </p>
                <p className="text-[#532C20]/80 leading-relaxed">
                  Our baristas at MM Alam Road will confirm your order, preparation time, and table service immediately.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <a
                  href={`https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(
                    generateWhatsAppMessage(lastOrderTicket)
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Open WhatsApp Again</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`https://wa.me/${WHATSAPP_INTL}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-white border border-stone-300 hover:bg-stone-50 text-stone-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WhatsApp Cafe</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyOrder}
                    className="py-2.5 px-3 rounded-xl bg-white border border-stone-300 hover:bg-stone-50 text-stone-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-stone-600" />
                        <span>Copy Order Text</span>
                      </>
                    )}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleResetOrder}
                  className="w-full py-3 rounded-xl bg-[#22110C] hover:bg-[#C88A58] text-white text-xs font-bold transition shadow-sm cursor-pointer mt-3"
                >
                  Start Another Order
                </button>
              </div>
            </div>
          ) : items.length === 0 ? (
            /* Empty state */
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FAF6F0] text-[#8C5035] flex items-center justify-center mx-auto border border-[#EADBCE]">
                <Coffee className="w-8 h-8 opacity-70 text-[#C88A58]" />
              </div>
              <h4 className="font-handwritten text-3xl text-[#22110C]">Your Order is Empty</h4>
              <p className="text-xs text-stone-600 max-w-xs mx-auto leading-relaxed">
                Explore our artisanal espresso, brew bar, and bakery menu. When you are ready, order directly to our barista via WhatsApp.
              </p>
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#22110C] hover:bg-[#C88A58] text-white text-xs font-semibold shadow-md transition cursor-pointer"
              >
                <span>Browse Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            /* Item list & Customer Details Form */
            <div className="space-y-4">
              {/* Item List */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs text-stone-500 font-semibold px-1">
                  <span>Selected Drinks &amp; Treats ({items.length})</span>
                  <button
                    onClick={onClearCart}
                    className="text-stone-400 hover:text-red-600 transition text-[11px] cursor-pointer"
                  >
                    Clear All
                  </button>
                </div>

                {items.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-2xl bg-[#FAF6F0] border border-[#EADBCE] flex items-center gap-3 hover:shadow-xs transition"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-13 h-13 rounded-full object-cover bg-white p-0.5 border border-white shrink-0 shadow-xs"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h4 className="text-xs font-bold text-[#22110C] truncate">
                          {item.product.name}
                        </h4>
                        <span className="text-xs font-bold text-[#22110C] shrink-0 ml-2">
                          {formatPKR(item.itemTotal)}
                        </span>
                      </div>

                      <p className="text-[11px] text-[#8C5035] truncate mt-0.5">
                        {item.size.split(' ')[0]} • {item.temperature} • {item.milk.split(' ')[0]}
                      </p>

                      {item.extraShots > 0 && (
                        <span className="text-[10px] text-stone-500 block">
                          +{item.extraShots} extra {item.extraShots === 1 ? 'shot' : 'shots'}
                        </span>
                      )}

                      {item.specialNotes && (
                        <p className="text-[10px] text-stone-500 italic truncate mt-0.5">
                          "{item.specialNotes}"
                        </p>
                      )}

                      {/* Quantity Stepper & Delete */}
                      <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-[#EADBCE]">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="w-6 h-6 rounded-md bg-white text-stone-700 font-bold text-xs flex items-center justify-center hover:bg-stone-200 border border-stone-200 cursor-pointer"
                          >
                            -
                          </button>
                          <span className="text-xs font-bold text-stone-900">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="w-6 h-6 rounded-md bg-white text-stone-700 font-bold text-xs flex items-center justify-center hover:bg-stone-200 border border-stone-200 cursor-pointer"
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.id)}
                          className="text-stone-400 hover:text-red-600 transition p-1 cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo Code Box */}
              <div className="p-3 bg-white rounded-2xl border border-stone-200">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder='Promo code (try "ARTISTIC10")'
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 text-xs px-3 py-2 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#C88A58] uppercase font-mono"
                  />
                  <button
                    type="button"
                    onClick={handleApplyPromo}
                    className="px-3.5 py-2 bg-[#22110C] hover:bg-[#C88A58] text-white text-xs font-semibold rounded-xl transition cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
                {promoMessage && (
                  <p
                    className={`text-[11px] mt-1.5 font-medium ${
                      discountAmount > 0 ? 'text-emerald-700' : 'text-red-600'
                    }`}
                  >
                    {promoMessage}
                  </p>
                )}
              </div>

              {/* Human Barista Order Details Form */}
              <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#EADBCE] space-y-3">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[#C88A58]" />
                  <h4 className="text-xs font-bold text-[#22110C]">Guest &amp; Service Details</h4>
                </div>

                {/* Service Type Buttons */}
                <div className="grid grid-cols-3 gap-1.5 text-xs">
                  {(['Dine-in', 'Takeaway', 'Delivery'] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setOrderType(type)}
                      className={`py-2 px-2 rounded-xl font-semibold border text-center transition cursor-pointer ${
                        orderType === type
                          ? 'bg-[#22110C] text-white border-[#22110C]'
                          : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                {/* Name and Phone inputs */}
                <div className="space-y-2">
                  <div>
                    <label className="text-[11px] font-semibold text-stone-700 block mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Farhan Ali"
                      value={customerName}
                      onChange={(e) => {
                        setCustomerName(e.target.value);
                        if (validationError) setValidationError(null);
                      }}
                      className="w-full text-xs px-3 py-2 rounded-xl bg-white border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#C88A58]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-stone-700 block mb-1">
                      Your WhatsApp / Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 0300 1234567"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-xl bg-white border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#C88A58]"
                    />
                  </div>

                  {orderType !== 'Takeaway' && (
                    <div>
                      <label className="text-[11px] font-semibold text-stone-700 block mb-1">
                        {orderType === 'Dine-in' ? 'Table Number / Seating Area' : 'Lahore Delivery Address'}{' '}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder={
                          orderType === 'Dine-in'
                            ? 'e.g. Table 4 / Patio Garden'
                            : 'e.g. House 14, Block H, Gulberg III, Lahore'
                        }
                        value={addressOrTable}
                        onChange={(e) => {
                          setAddressOrTable(e.target.value);
                          if (validationError) setValidationError(null);
                        }}
                        className="w-full text-xs px-3 py-2 rounded-xl bg-white border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#C88A58]"
                      />
                    </div>
                  )}

                  <div>
                    <label className="text-[11px] font-semibold text-stone-700 block mb-1">
                      Special Note for Barista (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Extra hot milk, less sugar, or pack separately"
                      value={specialInstructions}
                      onChange={(e) => setSpecialInstructions(e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-xl bg-white border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#C88A58]"
                    />
                  </div>
                </div>

                {validationError && (
                  <p className="text-[11px] text-red-600 font-semibold bg-red-50 p-2 rounded-lg border border-red-100">
                    {validationError}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer Checkout Summary with Direct WhatsApp Action */}
        {!orderSent && items.length > 0 && (
          <div className="p-5 bg-[#FAF7F2] border-t border-[#EADBCE] space-y-3">
            {/* Price Calculations */}
            <div className="space-y-1 text-xs text-stone-600">
              <div className="flex justify-between">
                <span>Items Subtotal:</span>
                <span className="font-semibold text-stone-900">
                  Rs. {Math.round(subtotalUSD * 150).toLocaleString()}
                </span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>Discount:</span>
                  <span>-Rs. {Math.round(discountAmount * 150).toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between text-stone-500 text-[11px]">
                <span>Service / Packaging:</span>
                <span>Included Free</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#22110C] pt-1.5 border-t border-stone-300">
                <span>Total Payable:</span>
                <span className="text-base font-extrabold text-[#22110C]">
                  Rs. {totalPKR.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Order Button */}
            <button
              type="button"
              onClick={handleSendWhatsAppOrder}
              className="w-full py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2.5 cursor-pointer active:scale-98"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>Send Order via WhatsApp</span>
            </button>

            <div className="flex items-center justify-between text-[11px] text-stone-500 pt-0.5">
              <span>📍 MM Alam Rd, Gulberg III, Lahore</span>
              <span className="font-semibold text-emerald-700 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Instant Barista Confirmation</span>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
