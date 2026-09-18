import React, { useState } from 'react';
import { PageTab, CoffeeProduct, CartItem, Testimonial, BakeryItem } from './types';
import { COFFEE_PRODUCTS, TESTIMONIALS } from './data/coffeeData';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BestCoffeeSection } from './components/BestCoffeeSection';
import { PremiumBlendSection } from './components/PremiumBlendSection';
import { ArtisticCardsSection } from './components/ArtisticCardsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { ServicesPage } from './components/ServicesPage';
import { BakeryPage } from './components/BakeryPage';
import { GalleryPage } from './components/GalleryPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { ProductCustomizeModal } from './components/ProductCustomizeModal';
import { CartDrawer } from './components/CartDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customizingProduct, setCustomizingProduct] = useState<CoffeeProduct | null>(null);
  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>(TESTIMONIALS);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Quick add product to cart with default options
  const handleQuickAdd = (product: CoffeeProduct) => {
    const existingIndex = cartItems.findIndex(
      (item) =>
        item.product.id === product.id &&
        item.size === 'Regular (12oz)' &&
        item.milk === 'Whole Milk'
    );

    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += 1;
      updated[existingIndex].itemTotal = updated[existingIndex].quantity * product.price;
      setCartItems(updated);
    } else {
      const newItem: CartItem = {
        id: `${product.id}-${Date.now()}`,
        product,
        quantity: 1,
        size: 'Regular (12oz)',
        milk: 'Whole Milk',
        sweetness: 'Standard (50%)',
        temperature: 'Hot',
        extraShots: 0,
        itemTotal: product.price,
      };
      setCartItems((prev) => [...prev, newItem]);
    }

    showToast(`Added ${product.name} to cart!`);
  };

  // Customized add from modal
  const handleAddCustomizedItem = (item: CartItem) => {
    setCartItems((prev) => [...prev, item]);
    showToast(`Added customized ${item.product.name} to cart!`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            if (newQty <= 0) return null;
            const singlePrice = item.itemTotal / item.quantity;
            return {
              ...item,
              quantity: newQty,
              itemTotal: singlePrice * newQty,
            };
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    showToast('Item removed from cart');
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleAddReview = (review: Testimonial) => {
    setTestimonialsList((prev) => [review, ...prev]);
    showToast('Thank you! Your review is now live.');
  };

  const handleAddBakeryItem = (bakeryItem: BakeryItem) => {
    const existingIndex = cartItems.findIndex((item) => item.product.id === bakeryItem.id);
    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += 1;
      updated[existingIndex].itemTotal = updated[existingIndex].quantity * bakeryItem.price;
      setCartItems(updated);
    } else {
      const bakeryProduct: CoffeeProduct = {
        id: bakeryItem.id,
        name: bakeryItem.name,
        category: 'specialty',
        price: bakeryItem.price,
        description: bakeryItem.description,
        image: bakeryItem.image,
        roastLevel: 'Medium',
        origin: 'House Bakery Kitchen, Lahore',
        notes: ['Fresh Pastry', 'Normandy Butter', `${bakeryItem.calories} kcal`],
        rating: bakeryItem.rating,
        reviewsCount: 48,
        caffeine: '0 mg',
      };

      const newItem: CartItem = {
        id: `${bakeryItem.id}-${Date.now()}`,
        product: bakeryProduct,
        quantity: 1,
        size: 'Regular (12oz)',
        milk: 'No Milk',
        sweetness: 'Standard (50%)',
        temperature: 'Hot',
        extraShots: 0,
        specialNotes: `Freshly baked pairing: ${bakeryItem.pairingCoffee}`,
        itemTotal: bakeryItem.price,
      };
      setCartItems((prev) => [...prev, newItem]);
    }
    showToast(`🥐 Added ${bakeryItem.name} to order!`);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#22110C] flex flex-col font-sans relative selection:bg-[#C88A58] selection:text-white">
      {/* Top Announcement Bar */}
      <AnnouncementBar onOpenLocations={() => setActiveTab('contact')} />

      {/* Main Sticky Navbar with cart badge */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenOrderModal={() => setIsCartOpen(true)}
      />

      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#22110C] text-[#FAF7F2] px-5 py-3 rounded-2xl shadow-2xl border border-[#C88A58]/40 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <CheckCircle2 className="w-5 h-5 text-[#C88A58]" />
          <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Main Page Routing Views */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            {/* Screen 1: Hero with 360-degree rotating cups, Freshly Brewed & Best Coffee floating badges */}
            <HeroSection
              onExploreRoasts={() => {
                setActiveTab('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOrderNow={() => {
                setActiveTab('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Screen 2 Top: "Best Coffee For You" with 360-degree rotating cups on cards */}
            <BestCoffeeSection
              products={COFFEE_PRODUCTS}
              onQuickAdd={handleQuickAdd}
              onSelectProduct={(product) => setCustomizingProduct(product)}
            />

            {/* Screen 2 Bottom: "Premium Blend Coffee" with 360-degree rotating ceramic saucer & "Tea Lover" callout */}
            <PremiumBlendSection />

            {/* Artistic Cards Showcase on Home */}
            <ArtisticCardsSection onExploreGallery={() => setActiveTab('gallery')} />

            {/* Screen 3: "What Our Patrons Say" Testimonials with Dilshad, Sabir ali, Dipankar kumar */}
            <TestimonialsSection
              testimonials={testimonialsList}
              onAddReview={handleAddReview}
            />
          </>
        )}

        {activeTab === 'services' && (
          <ServicesPage
            onSelectProduct={(product) => setCustomizingProduct(product)}
            onQuickAdd={handleQuickAdd}
            onAddBakeryItem={handleAddBakeryItem}
          />
        )}

        {activeTab === 'bakery' && (
          <BakeryPage
            onQuickOrderCoffee={() => {
              const el = document.getElementById('services');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                setActiveTab('services');
              }
            }}
            onAddToCart={handleAddBakeryItem}
          />
        )}

        {activeTab === 'gallery' && (
          <GalleryPage onOrderNow={() => setIsCartOpen(true)} />
        )}

        {activeTab === 'about' && <AboutPage />}

        {activeTab === 'testimonials' && (
          <div className="pt-6">
            <TestimonialsSection
              testimonials={testimonialsList}
              onAddReview={handleAddReview}
            />
          </div>
        )}

        {activeTab === 'contact' && <ContactPage />}
      </main>

      {/* Cafe Footer */}
      <Footer onNavigate={(tab) => setActiveTab(tab)} />

      {/* Floating Direct WhatsApp Order Action */}
      <FloatingWhatsApp onOpenOrderDrawer={() => setIsCartOpen(true)} />

      {/* Customization Modal */}
      <ProductCustomizeModal
        product={customizingProduct}
        onClose={() => setCustomizingProduct(null)}
        onAddToCart={handleAddCustomizedItem}
      />

      {/* WhatsApp Order Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
