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
      label: 'Förrätter & Mazeh',
      sublabel: 'Traditionella persiska smårätter',
      image: '/images/mazeh-tallrik.jpg',
      dishes: MENU_ITEMS.filter((i) => i.category === 'Tillbehör & Mazeh' || i.category === 'Sallader').slice(0, 4)
    },
    {
      id: 'main',
      label: 'Varmrätter & Grytor',
      sublabel: 'Långkokta persiska grytor',
      image: '/images/ghormeh-sabzi.jpg',
      dishes: MENU_ITEMS.filter((i) => i.category === 'Varma persiska rätter').slice(0, 4)
    },
    {
      id: 'desserts',
      label: 'Desserter & Sött',
      sublabel: 'Saffran och rosenvatten',
      image: '/images/sholeh-zard.jpg',
      dishes: MENU_ITEMS.filter((i) => i.category === 'Något sött')
    },
    {
      id: 'wine',
      label: 'Drycker & Te',
      sublabel: 'Kalla & varma persiska drycker',
      image: '/images/shirazi-salad.jpg',
      dishes: MENU_ITEMS.filter((i) => i.category === 'Drycker')
    }
  ];

  const activeCategoryData = categories.find((c) => c.id === selectedCategory) || categories[1];

  return (
    <div className="w-full min-h-screen bg-white text-[#1C1917] pt-24 sm:pt-28 pb-24 font-serif animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
      
        {/* ========================================================================= */}
        {/* 1. TOP HEADER: HAMBURGER, SIGNATURE BRAND & RESERVATION BUTTON            */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          {/* Top Navbar Row */}
          <div className="flex items-center justify-between border-b border-stone-200 pb-4">
            <button
              onClick={() => onNavigate && onNavigate('/meny/')}
              className="text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
              aria-label="Menu navigation"
            >
              <Menu className="w-5 h-5" />
            </button>

            <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#c6a04a] font-semibold">
              SIMA DELI SIGNATUR
            </span>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2 bg-[#c6a04a] hover:bg-[#b58f3b] text-black font-sans text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm rounded-full"
            >
              BOKA BORD
            </button>
          </div>

          {/* Big Masthead Title Split */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end pt-2">
            <div className="md:col-span-7">
              <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#1C1917] font-normal uppercase leading-none">
                SIGNATUR
              </h2>
            </div>

            <div className="md:col-span-5 pb-2">
              <p className="font-sans text-xs sm:text-sm text-stone-500 font-light leading-relaxed max-w-sm">
                Vi serverar ett brett urval av autentiska persiska grytor, saffransris och delikatesser tillagade från grunden med traditionella familjerecept på Valhallavägen 120.
              </p>
            </div>
          </div>

          {/* 2. FOOD SPREAD BANNER — 3 dishes side by side */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 rounded-3xl overflow-hidden">
            {[
              { src: '/images/zereshk-polo.jpg', alt: 'Zereshkpolo' },
              { src: '/images/ghormeh-sabzi.jpg', alt: 'Ghormeh-Sabzi' },
              { src: '/images/baghali-polo.jpg', alt: 'Baghali-Polo Mahiche' },
            ].map((img) => (
              <div key={img.alt} className="aspect-[3/4] rounded-2xl overflow-hidden bg-stone-50 border border-stone-200 shadow-sm group p-1.5 flex items-center justify-center">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. SHOWCASE SECTION                                                       */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-4">
          
          {/* Left: 2 Portrait Cards — different from hero */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-stone-50 border border-stone-200 shadow-md group p-2 flex items-center justify-center">
              <img
                src="/images/tahchin.jpg"
                alt="Tahchin"
                className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-stone-50 border border-stone-200 shadow-md group p-2 flex items-center justify-center">
              <img
                src="/images/mazeh-tallrik.jpg"
                alt="Sima Mazeh-tallrik"
                className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Center / Right: Editorial Story & Learn More Button */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1917] leading-tight">
              Upptäck nya smaker <br />
              och njut av äkta <br />
              persisk matglädje!
            </h3>

            <div className="space-y-4 font-sans text-xs sm:text-sm text-stone-500 font-light leading-relaxed max-w-md">
              <p>
                Vår matfilosofi bygger på långkok och äkta råvaruhantverk: gott, rent och omsorgsfullt tillagat utan genvägar.
              </p>
              <p>
                Med färska örter och handplockat Khorasansaffran låter vi varje persisk gryta sjuda till perfekt mörhet och djup smak.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate && onNavigate('/om-oss/')}
                className="px-6 py-2.5 border border-stone-300 hover:border-stone-800 text-stone-800 hover:text-black font-sans text-xs font-semibold uppercase tracking-widest transition-colors cursor-pointer rounded-full"
              >
                LÄS MER OM OSS
              </button>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 4. "UTFORSKA MENYN" 4-COLUMN GALLERY CARDS                                */}
        {/* ========================================================================= */}
        <div className="space-y-10 pt-8 border-t border-stone-200">
          
          {/* Section Heading */}
          <div className="text-center space-y-1">
            <h3 className="font-serif text-3xl sm:text-4xl uppercase tracking-widest text-[#1C1917] font-normal">
              UTFORSKA VÅR MENY
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
                    className={`w-full aspect-[3/4] rounded-2xl overflow-hidden bg-stone-50 border transition-all duration-300 relative shadow-md p-2 flex items-center justify-center ${
                      isSelected
                        ? 'border-[#c6a04a] ring-2 ring-[#c6a04a]/60 shadow-lg scale-[1.02]'
                        : 'border-stone-200 group-hover:border-stone-400'
                    }`}
                  >
                    <img
                      src={cat.image}
                      alt={cat.label}
                      className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-500 brightness-95"
                    />
                    {isSelected && (
                      <div className="absolute top-3 right-3 p-1 rounded-full bg-[#c6a04a] text-black">
                        <Sparkles className="w-3 h-3" />
                      </div>
                    )}
                  </div>

                  {/* Underlined Category Caption Label */}
                  <div className="space-y-0.5 border-b border-stone-200 pb-2 group-hover:border-stone-500 transition-colors">
                      <div className={`font-serif text-sm sm:text-base font-medium ${
                      isSelected ? 'text-[#c6a04a]' : 'text-[#1C1917]'
                    }`}>
                      {cat.label}
                    </div>
                    <div className="font-sans text-[11px] text-stone-500 font-light">
                      {cat.sublabel}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Category Dish List Expand Panel */}
          <div className="bg-stone-50 rounded-3xl border border-stone-200 p-6 sm:p-10 space-y-6">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <h4 className="font-serif text-2xl text-[#1C1917]">
                {activeCategoryData.label} — <span className="italic text-stone-500 text-lg">{activeCategoryData.sublabel}</span>
              </h4>
              <span className="font-sans text-xs text-stone-500">
                {activeCategoryData.dishes.length} utvalda rätter
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {activeCategoryData.dishes.map((dish) => (
                <div key={dish.id} className="space-y-1 group">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-serif text-base sm:text-lg text-[#1C1917] group-hover:text-[#c6a04a] transition-colors">
                      {dish.name}
                    </span>
                    <div className="flex-1 border-b border-dotted border-stone-300 mx-2 hidden sm:block mb-1" />
                    <span className="font-serif text-sm sm:text-base text-[#c6a04a] font-bold tabular-nums shrink-0">
                      {dish.price}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-stone-500 font-light leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 5. BOTTOM ATMOSPHERE SECTION: LADY & KITCHEN PHOTO UNCROPPED              */}
        {/* ========================================================================= */}
        <div className="pt-8 border-t border-stone-200 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-6">
              <h4 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1C1917] font-normal leading-snug">
                Välkommen till vår hemtrevliga <br />
                oas på Valhallavägen.
              </h4>
            </div>

            <div className="md:col-span-6 space-y-3 font-sans text-xs sm:text-sm text-stone-500 font-light leading-relaxed">
              <p>
                På Sima Deli möts du av värmen från mammas persiska kök, doften av nybryggt kardemummate och genuint mathantverk tillagat med kärlek.
              </p>
              <p>
                Sitt ner i vår mysiga servering eller ta med dig matlådor och take-away hem till familj och vänner.
              </p>
            </div>
          </div>

          {/* Sima Deli Team & Kitchen Visual - Fully Uncropped (Lady face and full apron visible) */}
          <div className="rounded-3xl overflow-hidden bg-stone-50 border border-stone-200 shadow-xl p-4 sm:p-6 flex items-center justify-center">
            <img
              src="/images/sima-kitchen.jpg"
              alt="Sima Deli kök och personal på Valhallavägen 120"
              className="max-h-[550px] w-auto max-w-full object-contain rounded-2xl brightness-95 hover:scale-102 transition-transform duration-700"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/mazeh-tallrik.jpg';
              }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};
