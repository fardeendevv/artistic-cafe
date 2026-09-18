export type PageTab = 'home' | 'services' | 'bakery' | 'gallery' | 'about' | 'testimonials' | 'contact';

export interface ArtisticCard {
  id: string;
  title: string;
  subtitle: string;
  category: 'Latte Art' | 'Brew Method' | 'Single Origin' | 'Roasting Craft';
  image: string;
  tags: string[];
  artistNote: string;
  flavorProfile: {
    aroma: number;
    sweetness: number;
    body: number;
    acidity: number;
  };
  details: {
    elevation?: string;
    processing?: string;
    temperature?: string;
    equipment?: string;
  };
}

export interface BakeryItem {
  id: string;
  name: string;
  category: 'Croissant' | 'Cakes & Tarts' | 'Savory' | 'Artisan Bread';
  price: number;
  description: string;
  calories: number;
  image: string;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
  pairingCoffee: string;
  rating: number;
  badge?: string;
}

export interface CoffeeProduct {
  id: string;
  name: string;
  category: 'espresso' | 'filter' | 'cold' | 'specialty' | 'tea';
  price: number;
  description: string;
  longDescription?: string;
  image: string;
  roastLevel: 'Light' | 'Medium' | 'Medium-Dark' | 'Dark';
  origin: string;
  notes: string[];
  rating: number;
  reviewsCount: number;
  caffeine: string;
  isPopular?: boolean;
}

export type CupSize = 'Small (8oz)' | 'Regular (12oz)' | 'Large (16oz)';
export type MilkOption = 'Whole Milk' | 'Oat Milk (+ $0.75)' | 'Almond Milk (+ $0.75)' | 'Soy Milk (+ $0.50)' | 'No Milk';
export type SweetnessLevel = 'Unsweetened (0%)' | 'Less Sweet (25%)' | 'Standard (50%)' | 'Sweet (100%)';
export type TemperatureOption = 'Hot' | 'Iced';

export interface CartItem {
  id: string; // unique item instance id
  product: CoffeeProduct;
  quantity: number;
  size: CupSize;
  milk: MilkOption;
  sweetness: SweetnessLevel;
  temperature: TemperatureOption;
  extraShots: number;
  specialNotes?: string;
  itemTotal: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarText: string;
  avatarColor: string;
  avatarImage?: string;
  rating: number;
  date: string;
}

export interface BrewGuide {
  id: string;
  name: string;
  ratio: string;
  waterTemp: string;
  grind: string;
  time: string;
  description: string;
}
