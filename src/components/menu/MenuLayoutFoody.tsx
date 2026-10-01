import React, { useState } from 'react';
import { ShoppingBag, Star, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface MenuLayoutProps {
  onOpenBooking?: () => void;
  onNavigate?: (path: string) => void;
}

interface FoodyDish {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  image: string;
}

const FOODY_DISHES: FoodyDish[] = [
  {
    id: 'zereshk-polo',
    name: 'Zereshkpolo',
    subtitle: 'Kycklingfilé, saffransris & berberis',
    price: '189 kr',
    image: '/images/zereshk-polo.jpg'
  },
  {
    id: 'ghormeh-sabzi',
    name: 'Ghormeh-Sabzi',
    subtitle: 'Långkokt örtgryta med bönor & lime',
    price: '189 kr',
    image: '/images/ghormeh-sabzi.jpg'
  },
  {
    id: 'baghali-polo',
    name: 'Baghali-Polo',
    subtitle: 'Lammlägg med bondbönor & dill',
    price: '259 kr',
    image: '/images/baghali-polo.jpg'
  },
  {
    id: 'tahchin',
    name: 'Tahchin',
    subtitle: 'Krispig saffranskaka med kyckling',
    price: '189 kr',
    image: '/images/tahchin.jpg'
  },
  {
    id: 'mazeh-tallrik',
    name: 'Mazeh-Tallrik',
    subtitle: 'Kashk-e Bademjan, Olovieh & bröd',
    price: '219 kr',
    image: '/images/mazeh-tallrik.jpg'
  },
  {
    id: 'sholeh-zard',
    name: 'Sholeh Zard',
    subtitle: 'Saffranspudding med rosenvatten',
    price: '79 kr',
    image: '/images/sholeh-zard.jpg'
  }
];

export const MenuLayoutFoody: React.FC<MenuLayoutProps> = ({ onOpenBooking, onNavigate }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : FOODY_DISHES.length - 4));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 4 < FOODY_DISHES.length ? prev + 1 : 0));
  };

  const handleAddToCart = (name: string) => {
    setAddedItem(name);
    setTimeout(() => setAddedItem(null), 2000);
  };

  const visibleDishes = FOODY_DISHES.slice(startIndex, startIndex + 4).concat(
    FOODY_DISHES.slice(0, Math.max(0, 4 - (FOODY_DISHES.length - startIndex)))
  ).slice(0, 4);

  return (
    <div className="bg-[#F6F2EC] rounded-3xl p-6 sm:p-10 lg:p-14 border border-[#ECE5DC] shadow-sm max-w-7xl mx-auto space-y-16 animate-fadeIn relative overflow-hidden text-stone-900">
      
      {/* Toast Notification */}
      {addedItem && (
        <div className="fixed top-24 right-8 z-50 bg-[#1C1917] text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 text-xs border border-stone-700 animate-slideDown">
          <Sparkles className="w-4 h-4 text-[#E22A3A]" />
          <span>Tillagd i din beställning: <strong>{addedItem}</strong></span>
        </div>
      )}

      {/* Decorative Floating Leaves (Exact match to Foody reference) */}
      <div className="absolute top-10 right-1/3 opacity-70 pointer-events-none transform -rotate-12 animate-pulse">
        <span className="text-3xl">🍃</span>
      </div>
      <div className="absolute bottom-20 left-6 opacity-60 pointer-events-none transform rotate-45">
        <span className="text-2xl">🌿</span>
      </div>
      <div className="absolute top-36 right-8 opacity-75 pointer-events-none transform rotate-180">
        <span className="text-2xl">🌱</span>
      </div>

      {/* ========================================================================= */}
      {/* 1. HERO SECTION: "it's not just Food, It's an Experience."                */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Heading, CTA Buttons & Reviews */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-8">
          <div className="space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-[#E22A3A]/10 text-[#E22A3A] text-xs font-bold uppercase tracking-wider">
              Sima Deli Stockholm
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight leading-[1.08]">
              it's not just <br />
              Food, It's an <br />
              <span className="text-[#E22A3A] font-bold">Experience.</span>
            </h2>
          </div>

          <p className="text-sm text-stone-600 font-light leading-relaxed max-w-md">
            Upplev den magiska doften av saffran, färska persiska örter och möra långkok. Tillagat enligt tradition på Valhallavägen 120.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              onClick={() => onNavigate && onNavigate('/hemleverans/')}
              className="px-6 py-3 rounded-full bg-[#E22A3A] hover:bg-[#c9202f] text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Beställ Online</span>
            </button>
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-full bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer"
            >
              Boka Bord
            </button>
          </div>

          {/* Social Proof Reviews (Exact Reference 3) */}
          <div className="pt-2 space-y-1.5">
            <div className="text-xs font-medium text-stone-500">Gästomdömen</div>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="w-8 h-8 rounded-full bg-amber-200 border-2 border-white flex items-center justify-center text-xs font-bold text-amber-900">
                  YR
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-200 border-2 border-white flex items-center justify-center text-xs font-bold text-emerald-900">
                  SL
                </div>
                <div className="w-8 h-8 rounded-full bg-sky-200 border-2 border-white flex items-center justify-center text-xs font-bold text-sky-900">
                  MK
                </div>
                <div className="w-8 h-8 rounded-full bg-stone-800 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">
                  45+
                </div>
              </div>
              <div className="flex items-center gap-1 text-[#E22A3A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#E22A3A]" />
                ))}
              </div>
              <span className="text-xs text-stone-600 font-medium">4.9 / 5.0</span>
            </div>
          </div>
        </div>

        {/* Right Column: Giant Circular Hero Bowl with Floating Discount Badge */}
        <div className="lg:col-span-6 flex justify-center relative">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-2xl ring-8 ring-white/90 bg-stone-900 group">
            <img
              src="/images/zereshk-polo.jpg"
              alt="Sima Deli Zereshkpolo"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Floating Discount Tag Badge (Exact match to Image 3) */}
          <div className="absolute top-4 left-6 sm:left-10 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-stone-200/80 flex items-center gap-2 text-xs">
            <span className="w-6 h-6 rounded-lg bg-[#E22A3A]/10 text-[#E22A3A] flex items-center justify-center font-bold text-xs">
              %
            </span>
            <div className="leading-tight">
              <div className="font-bold text-stone-900 text-xs">10% Rabatt</div>
              <div className="text-[10px] text-stone-500 font-light">vid take-away</div>
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 2. BOTTOM INTERACTIVE DISH SLIDER (CARDS WITH POPPING CIRCULAR BOWLS)     */}
      {/* ========================================================================= */}
      <div className="pt-8 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-2xl font-bold text-stone-900 tracking-tight">
            Populära Rätter Just Nu
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-8 h-8 rounded-full bg-stone-800 text-white flex items-center justify-center hover:bg-stone-900 transition-colors cursor-pointer shadow-xs"
              aria-label="Previous dishes"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-8 h-8 rounded-full bg-[#E22A3A] text-white flex items-center justify-center hover:bg-[#c9202f] transition-colors cursor-pointer shadow-xs"
              aria-label="Next dishes"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Cards Grid with Circular Popping Dish Plates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {visibleDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-5 pt-12 pb-6 border border-white shadow-md hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group"
            >
              {/* Circular Overhead Plated Dish Popping Over Top Edge */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-lg ring-4 ring-white bg-stone-100">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Floating Cart Button at Top Right of Card */}
              <button
                onClick={() => handleAddToCart(dish.name)}
                className="absolute top-3 right-3 w-7 h-7 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-[#E22A3A] transition-colors cursor-pointer shadow-xs"
                title="Lägg till i beställning"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
              </button>

              {/* Dish Content */}
              <div className="pt-10 text-center space-y-1">
                <h4 className="font-serif font-bold text-base text-stone-900 group-hover:text-[#E22A3A] transition-colors">
                  {dish.name}
                </h4>
                <p className="text-[11px] text-stone-500 font-light line-clamp-1">
                  {dish.subtitle}
                </p>
              </div>

              {/* Price & Action */}
              <div className="pt-4 flex items-center justify-between border-t border-stone-100 mt-3">
                <span className="font-serif font-bold text-sm text-[#E22A3A]">
                  {dish.price}
                </span>
                <button
                  onClick={() => handleAddToCart(dish.name)}
                  className="text-[10px] uppercase font-bold text-stone-700 hover:text-[#E22A3A] transition-colors cursor-pointer"
                >
                  Välj rätt →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
