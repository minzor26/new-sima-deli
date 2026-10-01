import React, { useState } from 'react';
import { Menu, Sparkles } from 'lucide-react';
import { MENU_ITEMS } from '../../data/siteData';

interface MenuLayoutProps {
  onOpenBooking?: () => void;
  onNavigate?: (path: string) => void;
}

export const MenuLayoutA: React.FC<MenuLayoutProps> = ({ onOpenBooking, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('main');

  const categories = [
    {
      id: 'appetizers',
      label: 'Appetizers & Mazeh',
      sublabel: 'Förrätter & Smårätter',
      image: '/images/mazeh-tallrik.jpg',
      dishes: MENU_ITEMS.filter((i) => i.category === 'Tillbehör & Mazeh' || i.category === 'Sallader').slice(0, 4)
    },
    {
      id: 'main',
      label: 'Main Courses',
      sublabel: 'Grytor & Varmrätter',
      image: '/images/ghormeh-sabzi.jpg',
      dishes: MENU_ITEMS.filter((i) => i.category === 'Varma persiska rätter').slice(0, 4)
    },
    {
      id: 'desserts',
      label: 'Desserts',
      sublabel: 'Sött & Saffran',
      image: '/images/sholeh-zard.jpg',
      dishes: MENU_ITEMS.filter((i) => i.category === 'Något sött')
    },
    {
      id: 'wine',
      label: 'Wine & Tea',
      sublabel: 'Viner & Persiskt Te',
      image: '/images/shirazi-salad.jpg',
      dishes: MENU_ITEMS.filter((i) => i.category === 'Drycker')
    }
  ];

  const activeCategoryData = categories.find((c) => c.id === selectedCategory) || categories[1];

  return (
    <div className="bg-[#121316] text-[#EAE6DF] rounded-3xl p-6 sm:p-10 lg:p-14 border border-stone-800 shadow-2xl max-w-7xl mx-auto space-y-16 sm:space-y-24 font-serif animate-fadeIn">
      
      {/* ========================================================================= */}
      {/* 1. TOP HEADER: HAMBURGER, SIGNATURE BRAND & RESERVATION BUTTON            */}
      {/* ========================================================================= */}
      <div className="space-y-8">
        {/* Top Navbar Row */}
        <div className="flex items-center justify-between border-b border-stone-800 pb-4">
          <button
            onClick={() => onNavigate && onNavigate('/meny/')}
            className="text-stone-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Menu navigation"
          >
            <Menu className="w-5 h-5" />
          </button>

          <span className="text-xs uppercase tracking-[0.3em] font-sans text-stone-300 font-semibold">
            SIGNATURE
          </span>

          <button
            onClick={onOpenBooking}
            className="px-5 py-2 bg-white hover:bg-stone-200 text-black font-sans text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
          >
            RESERVATION
          </button>
        </div>

        {/* Big Masthead Title Split: "SIGNATURE" on Left, Subtitle on Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end pt-2">
          <div className="md:col-span-7">
            <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white font-normal uppercase leading-none">
              SIGNATURE
            </h2>
          </div>

          <div className="md:col-span-5 pb-2">
            <p className="font-sans text-xs sm:text-sm text-stone-400 font-light leading-relaxed max-w-sm">
              We are serving a wide variety of authentic Persian stews, saffron rice and exotic delicacies hand-crafted with heritage recipes.
            </p>
          </div>
        </div>

        {/* 2. PANORAMIC WIDE FOOD SPREAD BANNER (Exact Reference Layout) */}
        <div className="relative rounded-2xl overflow-hidden aspect-[21/9] sm:aspect-[24/9] bg-stone-900 border border-stone-800/80 shadow-xl group">
          <img
            src="/images/zereshk-polo.jpg"
            alt="Signature Persian Culinary Spread"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. SHOWCASE SECTION: "Discover new flavours..." & PHOTO CARDS             */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-4">
        
        {/* Left: 2 Moody Portrait Cards */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-stone-900 border border-stone-800 shadow-md group">
            <img
              src="/images/baghali-polo.jpg"
              alt="Baghali-Polo Mahiche"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-stone-900 border border-stone-800 shadow-md group">
            <img
              src="/images/ghormeh-sabzi.jpg"
              alt="Ghormeh-Sabzi Stew"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Center / Right: Editorial Story & Learn More Button */}
        <div className="lg:col-span-6 space-y-6">
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
            Discover new flavours <br />
            and enjoy our authentic <br />
            Persian dishes!
          </h3>

          <div className="space-y-4 font-sans text-xs sm:text-sm text-stone-400 font-light leading-relaxed max-w-md">
            <p>
              Our approach is based on a concept of slow food that is defined by three interconnected principles: good, clean and fair.
            </p>
            <p>
              Using the freshest herbs and Khorasan saffron as the basis, we are implementing traditional slow-simmering techniques that do not change the true taste of the products.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={() => onNavigate && onNavigate('/om-oss/')}
              className="px-6 py-2.5 border border-stone-500 hover:border-white text-white font-sans text-xs font-semibold uppercase tracking-widest transition-colors cursor-pointer"
            >
              LEARN MORE
            </button>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 4. "EXPLORE MENU" 4-COLUMN GALLERY CARDS (Exact Reference Layout)         */}
      {/* ========================================================================= */}
      <div className="space-y-10 pt-8 border-t border-stone-800">
        
        {/* Section Heading */}
        <div className="text-center space-y-1">
          <h3 className="font-serif text-3xl sm:text-4xl uppercase tracking-widest text-white font-normal">
            EXPLORE MENU
          </h3>
          <p className="font-sans text-xs text-stone-500 font-light">
            Klicka på en kategori för att utforska rätter och priser
          </p>
        </div>

        {/* 4 Tall Vertical Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className="flex flex-col text-left space-y-3 group cursor-pointer"
              >
                {/* Tall Portrait Image Card */}
                <div
                  className={`w-full aspect-[3/4] rounded-xl overflow-hidden bg-stone-900 border transition-all duration-300 relative shadow-md ${
                    isSelected
                      ? 'border-[#c6a04a] ring-2 ring-[#c6a04a]/60 shadow-lg scale-[1.02]'
                      : 'border-stone-800 group-hover:border-stone-600'
                  }`}
                >
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95"
                  />
                  {isSelected && (
                    <div className="absolute top-2 right-2 p-1 rounded-full bg-[#c6a04a] text-black">
                      <Sparkles className="w-3 h-3" />
                    </div>
                  )}
                </div>

                {/* Underlined Category Caption Label */}
                <div className="space-y-0.5 border-b border-stone-800 pb-2 group-hover:border-stone-500 transition-colors">
                  <div className={`font-serif text-sm sm:text-base font-medium ${
                    isSelected ? 'text-[#c6a04a]' : 'text-white'
                  }`}>
                    {cat.label}
                  </div>
                  <div className="font-sans text-[11px] text-stone-400 font-light">
                    {cat.sublabel}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Dish List Expand Panel */}
        <div className="bg-stone-950/80 rounded-2xl border border-stone-800/80 p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-stone-800 pb-3">
            <h4 className="font-serif text-2xl text-white">
              {activeCategoryData.label} — <span className="italic text-stone-400 text-lg">{activeCategoryData.sublabel}</span>
            </h4>
            <span className="font-sans text-xs text-stone-400">
              {activeCategoryData.dishes.length} utvalda rätter
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {activeCategoryData.dishes.map((dish) => (
              <div key={dish.id} className="space-y-1 group">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-serif text-base sm:text-lg text-white group-hover:text-[#c6a04a] transition-colors">
                    {dish.name}
                  </span>
                  <div className="flex-1 border-b border-dotted border-stone-700/60 mx-2 hidden sm:block mb-1" />
                  <span className="font-serif text-sm sm:text-base text-[#c6a04a] font-bold tabular-nums shrink-0">
                    {dish.price}
                  </span>
                </div>
                <p className="font-sans text-xs text-stone-400 font-light leading-relaxed">
                  {dish.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 5. BOTTOM ATMOSPHERE SECTION: "Relax in our comfortable..."               */}
      {/* ========================================================================= */}
      <div className="pt-8 border-t border-stone-800 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-6">
            <h4 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-snug">
              Relax in our comfortable, <br />
              spacious and gorgeous <br />
              dining area.
            </h4>
          </div>

          <div className="md:col-span-6 space-y-3 font-sans text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
            <p>
              The signature of perfection is reflected in its many natural stone design elements and a variety of authentic materials, including polished copper, natural ceramics and curated Persian art.
            </p>
            <p>
              Warm light creates an intimate and cozy atmosphere on Valhallavägen 120.
            </p>
          </div>
        </div>

        {/* Ambient Interior Visual */}
        <div className="rounded-2xl overflow-hidden aspect-[21/9] bg-stone-900 border border-stone-800 shadow-xl">
          <img
            src="/images/sima-kitchen.jpg"
            alt="Sima Deli Dining Room Atmosphere"
            className="w-full h-full object-cover brightness-90 hover:scale-102 transition-transform duration-700"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/mazeh-tallrik.jpg';
            }}
          />
        </div>
      </div>

    </div>
  );
};
