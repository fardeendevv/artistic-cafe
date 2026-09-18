import { CoffeeProduct, Testimonial, BrewGuide, ArtisticCard, BakeryItem } from '../types';

// High resolution top-down and artisanal coffee images directly matching the reference screenshots
export const COFFEE_IMAGES = {
  heroBeansSaucer: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARnX4dJV8b8JWUjJ6ryg6cdrIfu1S79PicARMb-u-w7MW4dLAcFs8K1tyc2fr5hGlwcW1AGMEEieIDfCCl3KD35tpR33RA1XTfCsewLxK-Af7QTo-e0d5CBGXUqdW_b1BchI_ezvrxdXv1UkOrndyRwSftZhstiV3D0kJOywu0dvBtv9aGMDtOW4Oh5M8v80rjfp5blkSI2TymwckyPNZG3iVhyLYks6EyXiD6tF0DWGSRON0J2UzC',
  espressoCup: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeOQ0TcTDidOY52SS4JJem5MNOTYAvcg3eRwNeSP2ojxocs7GzZ7c_aED5RArNd7Xfi60yWJT8kAPfhMmc3NrSRUKWKgFUPy6H_Tnj8i51B1dG2hHg3ZT7WGnzMWFLWWs8g4_uXRFsY9i_PtyTqjM8dF47dBg-7zxFWX1vs_A2TaDiOTL8kMYzYYgiXIvt0BufcfaeqRPIMNsuY21B5Ig_rMPuOWNnO-TeFhFIKbRltMWyfCSJZTvB',
  americanoCup: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBpDsVOyEc28AJWGRft0sjlOZMQnySDilUUDMINeaQVoj8EgPojuhOwbCDUtJhKAlL6j1HudHCnLJMCxoEDS-_rZW8hlT72pP7-IYfqlPus4OtqtzFHW3O0PJVd7f8M3v0slhBHZbnBuvG45aUK1HKfUWg2G7pFXoqNOSaaAPSySXz2BVjYMP30qP6SshNO5yaX8KI43IbyG7hApxndKXcj0jpKZxeA-Gpl3rzUE80JyXUNCSzijGT',
  cappuccinoCup: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzWyuYYb62YHbg81Jv8N5ObG71ZBy49thpiWms6Qf4sDAdNmSBFlycSyKqTPP2QsnZB4qVm2gd2BH379V9rORpQwxvgxf9Znx4KPYcv7fkcepT6gNoRG2wTiZCMtTRSsLHGS1vdY0ZAGs6SRFTIUkZDIfjIlI-LgmqTfeMX_aCG31crdi7NsstVA2ODfbm8dCemZpJY1ofZXRO4lbDKQN11S7aCUkYH1BU3MZ0XZ2TdWcQxdLeJZxy',
  latteHeart: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80',
  coldBrew: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80',
  mocha: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80',
  matcha: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80'
};

export const COFFEE_PRODUCTS: CoffeeProduct[] = [
  {
    id: 'espresso',
    name: 'Espresso',
    category: 'espresso',
    price: 4.25,
    description: 'Freshly extracted single-origin Colombian shot featuring dense golden crema, hazelnut sweetness, and rich cocoa aromatics.',
    longDescription: 'Extracted under 9 bars of pressure from single-origin Colombian Huila micro-lots. Yields a dense golden-russet crema with intoxicating notes of dark cocoa nibs, brown sugar caramel, and blackberry acidity.',
    image: COFFEE_IMAGES.espressoCup,
    roastLevel: 'Medium-Dark',
    origin: 'Huila, Colombia (1,850m masl)',
    notes: ['Dark Chocolate', 'Molasses', 'Blackberry'],
    rating: 4.9,
    reviewsCount: 142,
    caffeine: '68 mg / single shot',
    isPopular: true
  },
  {
    id: 'americano',
    name: 'Americano',
    category: 'espresso',
    price: 4.75,
    description: 'Double ristretto shots balanced over hot pure mineral water for a clean, nuanced cup with toasted pecan notes.',
    longDescription: 'Two fresh shots of our signature house blend combined with pure filtered boiling mineral water. Delivers a clean, elongated profile with smooth body and sweet toasted pecan undertones.',
    image: COFFEE_IMAGES.americanoCup,
    roastLevel: 'Medium',
    origin: 'Antigua, Guatemala & Yirgacheffe, Ethiopia',
    notes: ['Toasted Pecan', 'Cane Sugar', 'Orange Blossom'],
    rating: 4.8,
    reviewsCount: 98,
    caffeine: '136 mg / double shot',
    isPopular: true
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    category: 'espresso',
    price: 5.25,
    description: 'Equal thirds of bold double espresso, velvety steamed whole milk, and an airy pillow of silky microfoam.',
    longDescription: 'Equal thirds of intense double espresso, silky steamed organic whole milk, and an airy pillow of microfoam finished with an artisanal heart pour and a pinch of ground Ceylon cinnamon.',
    image: COFFEE_IMAGES.cappuccinoCup,
    roastLevel: 'Medium',
    origin: 'Cerrado Mineiro, Brazil',
    notes: ['Sweet Cream', 'Milk Chocolate', 'Cinnamon Spice'],
    rating: 5.0,
    reviewsCount: 215,
    isPopular: true,
    caffeine: '136 mg'
  },
  {
    id: 'premium-blend',
    name: 'Premium Blend Roast',
    category: 'filter',
    price: 5.50,
    description: 'Hand-selected grade 1 micro-lots roasted in small 12kg drums for vibrant balance and unmatched depth.',
    longDescription: 'Our flagship roastery pride: 60% washed Ethiopian Heirloom combined with 40% honey-processed Costa Rican Tarrazú. Brewed fresh on our custom V60 pour-over bar or batch chemex.',
    image: COFFEE_IMAGES.heroBeansSaucer,
    roastLevel: 'Medium',
    origin: 'Ethiopia & Costa Rica',
    notes: ['Bergamot', 'Stone Fruit', 'Caramelized Honey'],
    rating: 4.9,
    reviewsCount: 184,
    caffeine: '160 mg',
    isPopular: true
  },
  {
    id: 'flat-white',
    name: 'Artisan Flat White',
    category: 'espresso',
    price: 5.10,
    description: 'Double ristretto extraction folded into finely textured velvet microfoam with minimal froth.',
    longDescription: 'The purist favorite. Shorter, sweeter ristretto shots bring forth intense aromatics, softened only by velvety textured milk for an incredibly rich tactile mouthfeel.',
    image: COFFEE_IMAGES.cappuccinoCup,
    roastLevel: 'Medium-Dark',
    origin: 'Sidama, Ethiopia',
    notes: ['Caramel', 'Hazelnut Praline', 'Silky Crema'],
    rating: 4.9,
    reviewsCount: 167,
    caffeine: '140 mg'
  },
  {
    id: 'cold-brew-reserve',
    name: 'Kyoto Cold Brew Reserve',
    category: 'cold',
    price: 5.75,
    description: 'Slow-dripped drop-by-drop over 18 hours through Dutch glass towers for zero bitterness.',
    longDescription: 'Our Kyoto slow-drip technique extracts exclusively soluble aromatics and sweet oils, yielding a wine-like clarity, deep chocolate foundation, and zero harsh acidity.',
    image: COFFEE_IMAGES.americanoCup,
    roastLevel: 'Dark',
    origin: 'Sumatra Mandheling',
    notes: ['Cedar', 'Dark Cacao', 'Sweet Tobacco'],
    rating: 4.9,
    reviewsCount: 112,
    caffeine: '200 mg',
    isPopular: true
  },
  {
    id: 'mocha-sublime',
    name: 'Dark Mocha Sublime',
    category: 'specialty',
    price: 5.85,
    description: 'Valrhona 72% single-estate dark chocolate melted into espresso, topped with whipped vanilla chantilly.',
    longDescription: 'A decadent symphony between craft chocolate and espresso. Hand-whisked ganache infused with double shot espresso and steamed milk.',
    image: COFFEE_IMAGES.espressoCup,
    roastLevel: 'Medium-Dark',
    origin: 'Colombia & Ecuador',
    notes: ['Dark Fudge', 'Roasted Almond', 'Madagascar Vanilla'],
    rating: 4.8,
    reviewsCount: 89,
    caffeine: '140 mg'
  },
  {
    id: 'artisan-chai-tea',
    name: 'Spiced Masala Chai Latte',
    category: 'tea',
    price: 4.95,
    description: 'Freshly crushed whole green cardamom, ginger root, star anise, and Assam black tea simmered with milk.',
    longDescription: 'Brewed slow with raw spices and wild mountain honey. A heartwarming tribute for tea lovers seeking comfort and aromatic depth.',
    image: COFFEE_IMAGES.cappuccinoCup,
    roastLevel: 'Light',
    origin: 'Assam, India',
    notes: ['Green Cardamom', 'Fresh Ginger', 'Star Anise', 'Wild Honey'],
    rating: 4.9,
    reviewsCount: 130,
    caffeine: '45 mg'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'dilshad',
    name: 'Dilshad',
    role: 'Gulberg Patron',
    quote: 'The pour-over Ethiopian roast is by far the finest in Lahore. I usually message my morning flat white order over WhatsApp, and it is ready the moment I arrive at the counter.',
    avatarText: 'DL',
    avatarColor: 'from-amber-800 to-amber-600',
    rating: 5,
    date: 'Yesterday'
  },
  {
    id: 'sabir',
    name: 'Sabir ali',
    role: 'Specialty Coffee Regular',
    quote: 'What sets Artistic apart is the genuine barista craft. You can taste the precision in every single espresso shot, and the staff treats you like family every single visit.',
    avatarText: 'SA',
    avatarColor: 'from-stone-700 to-stone-500',
    rating: 5,
    date: '3 days ago'
  },
  {
    id: 'dipankar',
    name: 'Dipankar kumar',
    role: 'Design Architect & Regular',
    quote: 'The quiet ambience on MM Alam Road paired with their fresh flaky croissants and cortado makes this our team’s daily meeting and brainstorming sanctuary.',
    avatarText: 'DK',
    avatarColor: 'from-emerald-800 to-amber-700',
    rating: 5,
    date: '1 week ago'
  },
  {
    id: 'elena',
    name: 'Elena Rostova',
    role: 'Food & Coffee Writer',
    quote: 'Warm hospitality, honest human hospitality, and silky microfoam latte art that rivals specialty cafes in Melbourne and London. Absolutely wonderful.',
    avatarText: 'ER',
    avatarColor: 'from-rose-800 to-orange-700',
    rating: 5,
    date: '2 weeks ago'
  }
];

export const BREW_GUIDES: BrewGuide[] = [
  {
    id: 'v60',
    name: 'Hario V60 Pour-Over',
    ratio: '1:16 (18g Coffee / 288g Water)',
    waterTemp: '93°C (200°F)',
    grind: 'Medium-Fine (Sea Salt)',
    time: '2m 45s - 3m 15s',
    description: 'Accentuates delicate floral aromas and lively crisp acidity with a crystal-clean mouthfeel.'
  },
  {
    id: 'aeropress',
    name: 'Inverted AeroPress',
    ratio: '1:14 (17g Coffee / 240g Water)',
    waterTemp: '88°C (190°F)',
    grind: 'Medium (Table Salt)',
    time: '1m 45s',
    description: 'Extracts full caramelized sweetness with heavy body and subtle fruit acidity.'
  },
  {
    id: 'chemex',
    name: 'Classic 6-Cup Chemex',
    ratio: '1:15 (30g Coffee / 450g Water)',
    waterTemp: '94°C (202°F)',
    grind: 'Medium-Coarse (Kosher Salt)',
    time: '4m 00s',
    description: 'Heavy multi-layer bond filter paper absorbs excess sediment and bitter compounds for pristine tea-like body.'
  }
];

export const ARTISTIC_CARDS: ArtisticCard[] = [
  {
    id: 'swan-rosetta',
    title: 'Dual Swan Rosetta',
    subtitle: 'Free-pour pitcher choreography on velvety espresso crema',
    category: 'Latte Art',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
    tags: ['Microfoam 65°C', 'Single Steam Wand', 'Velvet Crema'],
    artistNote: 'Poured with micro-textured whole milk using rhythmic wrist oscillations, sculpting symmetrical swan feathers atop a rich hazelnut crema canvas.',
    flavorProfile: { aroma: 92, sweetness: 88, body: 90, acidity: 70 },
    details: {
      temperature: '65°C Microfoam',
      equipment: 'La Marzocco Linea PB & Nanofoam Pitcher'
    }
  },
  {
    id: 'syphon-alchemy',
    title: 'Halogen Vacuum Syphon',
    subtitle: 'Luminous vapor infusion extracting pure floral volatiles',
    category: 'Brew Method',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    tags: ['Vapor Pressure', 'Halogen Beam', 'Crystal Clarity'],
    artistNote: 'Utilizing thermal expansion and vacuum pressure, this theatrical Japanese brewing method extracts aromatic essential oils with champagne-like clarity.',
    flavorProfile: { aroma: 98, sweetness: 85, body: 75, acidity: 94 },
    details: {
      temperature: '94°C Water',
      equipment: 'Hario Technica 5-Cup & Beam Heater'
    }
  },
  {
    id: 'geisha-panama',
    title: 'Panama Geisha Boquete',
    subtitle: 'High-altitude volcanic heirloom with jasmine and white peach',
    category: 'Single Origin',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    tags: ['1,950m Altitude', 'Natural Ferment', 'Cup of Excellence'],
    artistNote: 'Hand-picked on the mist-covered slopes of Volcán Barú. Offers an ethereal bouquet of bergamot, lemongrass blossoms, and sweet honeydew.',
    flavorProfile: { aroma: 99, sweetness: 95, body: 80, acidity: 96 },
    details: {
      elevation: '1,950 meters',
      processing: 'Slow Dry Natural / 24-day African Raised Beds'
    }
  },
  {
    id: 'slow-drip-kyoto',
    title: 'Kyoto Cold Drip Towers',
    subtitle: '18-hour Dutch glassware slow extraction with zero astringency',
    category: 'Brew Method',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
    tags: ['1 Drop / 3 Sec', 'Zero Heat', 'Wine-like Body'],
    artistNote: 'Water filtered through volcanic rock drops at a measured cadence over single-estate grounds, producing a viscous, naturally sweet nectar.',
    flavorProfile: { aroma: 90, sweetness: 96, body: 95, acidity: 60 },
    details: {
      temperature: '4°C Ice-drip',
      equipment: 'Oji Handcrafted Dutch Glass Cold Tower'
    }
  },
  {
    id: 'flame-roast',
    title: 'Diedrich Infrared Drum Roasting',
    subtitle: 'Controlled thermal curves capturing peak maillard nuances',
    category: 'Roasting Craft',
    image: 'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=800&q=80',
    tags: ['First Crack', 'Cast Iron Drum', 'Airflow Curves'],
    artistNote: 'Master roaster carefully tracks the Rate of Rise (RoR) across 11 minutes to develop caramelization without scorching fragile volatile aromatics.',
    flavorProfile: { aroma: 95, sweetness: 92, body: 92, acidity: 82 },
    details: {
      equipment: 'Diedrich IR-12 Ceramic Infrared Roaster',
      processing: 'Custom Profiling via Cropster Telemetry'
    }
  },
  {
    id: 'tulip-pour',
    title: 'Seven-Tier Layered Tulip',
    subtitle: 'Precision textured art with deep contrasting espresso border',
    category: 'Latte Art',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
    tags: ['Multi-Stack', 'Contrasting Crema', 'Barista Championship'],
    artistNote: 'Seven individual micro-pushes forming a cascading bloom of pure silk foam, framed symmetrically within an 8oz ceramic tulip cup.',
    flavorProfile: { aroma: 89, sweetness: 90, body: 92, acidity: 72 },
    details: {
      temperature: '63°C Velvety Milk',
      equipment: 'Motta Europa Frothing Pitcher'
    }
  }
];

export const BAKERY_ITEMS: BakeryItem[] = [
  {
    id: 'croissant-almond',
    name: 'Almond Frangipane Croissant',
    category: 'Croissant',
    price: 4.95,
    description: 'Double-baked artisan butter croissant loaded with rich almond frangipane cream and toasted sliced almonds.',
    calories: 380,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80',
    isVegetarian: true,
    pairingCoffee: 'Artisan Flat White',
    rating: 4.9,
    badge: 'Fresh Daily'
  },
  {
    id: 'basque-cheesecake',
    name: 'San Sebastián Basque Cheesecake',
    category: 'Cakes & Tarts',
    price: 6.50,
    description: 'Caramelized burnt exterior with an ultra-creamy, molten center infused with Madagascar vanilla bean.',
    calories: 420,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80',
    isVegetarian: true,
    isGlutenFree: true,
    pairingCoffee: 'Kyoto Cold Brew Reserve',
    rating: 5.0,
    badge: 'Chef Signature'
  },
  {
    id: 'pistachio-cruffin',
    name: 'Pistachio Rose Cruffin',
    category: 'Croissant',
    price: 5.40,
    description: 'Croissant dough baked in a muffin mould, filled with velvety Sicilian pistachio ganache and candied rose petals.',
    calories: 390,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    isVegetarian: true,
    pairingCoffee: 'Cappuccino',
    rating: 4.9,
    badge: 'Trending'
  },
  {
    id: 'classic-tiramisu',
    name: 'Single-Origin Espresso Tiramisu',
    category: 'Cakes & Tarts',
    price: 6.20,
    description: 'Savoiardi ladyfingers soaked in our fresh Colombian Huila espresso, layered with whipped mascarpone and dark cocoa.',
    calories: 350,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80',
    isVegetarian: true,
    pairingCoffee: 'Espresso',
    rating: 4.9,
    badge: 'House Special'
  },
  {
    id: 'pain-au-chocolat',
    name: 'Valrhona Pain au Chocolat',
    category: 'Croissant',
    price: 4.75,
    description: 'Flaky Normandy butter lamination enveloping two batons of semi-sweet 66% Valrhona dark French chocolate.',
    calories: 340,
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=600&q=80',
    isVegetarian: true,
    pairingCoffee: 'Americano',
    rating: 4.8,
    badge: 'French Classic'
  },
  {
    id: 'sourdough-truffle-toastie',
    name: 'Wild Mushroom Sourdough Melt',
    category: 'Savory',
    price: 7.95,
    description: 'Grilled 36-hour fermented sourdough with sautéed portobello, aged Gruyère cheese, and black truffle butter.',
    calories: 460,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
    isVegetarian: true,
    pairingCoffee: 'Cold Brew or Americano',
    rating: 4.9,
    badge: 'Savory Lunch'
  }
];
