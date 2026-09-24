import React, { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS, type MenuItem } from '../data/siteData';
import { Calendar, ShoppingBag, Leaf, Sparkles, Info } from 'lucide-react';

interface MenyPageProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export const MenyPage: React.FC<MenyPageProps> = ({ onOpenBooking, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState("Alla");
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  // Check if a dish has a valid image
  const hasValidImage = (item: MenuItem) => {
    return Boolean(item.image && item.image.trim() !== '' && !failedImages[item.id]);
  };

  const handleImageError = (itemId: string) => {
    setFailedImages((prev) => ({ ...prev, [itemId]: true }));
  };

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
  };

  // Categories to display
  const categoriesToDisplay = selectedCategory === "Alla"
    ? MENU_CATEGORIES.filter((cat) => cat !== "Alla")
    : [selectedCategory];

  const getCategoryCount = (cat: string) => {
    if (cat === "Alla") return MENU_ITEMS.length;
    return MENU_ITEMS.filter((item) => item.category === cat).length;
  };

  // Helper to render a single menu item entry
  const renderDishItem = (item: MenuItem) => (
    <article key={item.id} className="group py-3.5 border-b border-[#EAE3DA]/70 last:border-0">
      {/* Title, Dotted Leader & Price */}
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="font-serif text-base sm:text-lg lg:text-xl font-bold text-[#1C1917] tracking-tight leading-snug">
          {item.name}
        </h3>
        <div className="flex-1 border-b border-dotted border-[#D6CCC2] mx-2.5 hidden sm:block mb-1 opacity-70 group-hover:opacity-100 transition-opacity" />
        {item.price && (
          <span className="font-serif text-sm sm:text-base font-bold text-[#947128] shrink-0">
            {item.price}
          </span>
        )}
      </div>

      {/* Description */}
      {item.description && (
        <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mt-1 font-light">
          {item.description}
        </p>
      )}

      {/* Subitems (e.g. Mazeh-tallrik choices, Coffee/Tea options, portion variants) */}
      {item.subItems && item.subItems.length > 0 && (
        <div className="mt-2.5 pt-2 pl-3 border-l-2 border-[#c6a04a]/40 space-y-1 my-1.5 bg-[#FAF7F2]/70 rounded-r-lg py-2 pr-3">
          {item.subItems.map((sub, idx) => (
            <div key={idx} className="flex items-baseline justify-between text-xs py-0.5">
              <div className="pr-2">
                <span className="font-medium text-[#1C1917]">{sub.name}</span>
                {sub.description && (
                  <span className="text-[#78716C] block text-[11px] font-light mt-0.5">
                    {sub.description}
                  </span>
                )}
              </div>
              <div className="flex-1 border-b border-dotted border-[#D6CCC2]/50 mx-2 hidden sm:block mb-1" />
              {sub.price && (
                <span className="font-serif font-bold text-[#1e5f6e] shrink-0 text-xs">
                  {sub.price}
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Dietary Tags & Notes */}
      {(item.isVegan || item.isVegetarian || item.note) && (
        <div className="flex flex-wrap items-center gap-1.5 mt-2">
          {item.isVegan && (
            <span className="inline-flex items-center gap-1 font-medium text-[9px] text-[#1e5f6e] bg-[#cdebf2]/40 px-2 py-0.5 rounded-full border border-[#cdebf2]/80">
              <Leaf className="w-2.5 h-2.5" />
              Vegan
            </span>
          )}
          {item.isVegetarian && (
            <span className="inline-flex items-center gap-1 font-medium text-[9px] text-[#1e5f6e] bg-[#cdebf2]/40 px-2 py-0.5 rounded-full border border-[#cdebf2]/80">
              <Leaf className="w-2.5 h-2.5" />
              Vegetarisk
            </span>
          )}
          {item.note && (
            <span className="inline-flex items-center gap-1 font-medium text-[9px] text-[#947128] bg-[#c6a04a]/10 px-2 py-0.5 rounded-full border border-[#c6a04a]/20">
              <Sparkles className="w-2.5 h-2.5 text-[#c6a04a]" />
              {item.note}
            </span>
          )}
        </div>
      )}
    </article>
  );

  return (
    <div className="pt-24 sm:pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
      
      {/* ========================================================================= */}
      {/* 1. EDITORIAL RESTAURANT HEADER (100% Preserved Text & Buttons)            */}
      {/* ========================================================================= */}
      <header className="text-center max-w-2xl mx-auto space-y-3 sm:space-y-4">
        {/* Subtle Istanbul / Persian Crest */}
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-6 sm:w-12 bg-gradient-to-r from-transparent via-[#c6a04a] to-[#c6a04a]" />
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#947128]">
            Sima Deli Restaurang & Delikatesser
          </span>
          <div className="h-px w-6 sm:w-12 bg-gradient-to-l from-transparent via-[#c6a04a] to-[#c6a04a]" />
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1C1917] tracking-tight">
          Vår Meny
        </h1>

        {/* Decorative Diamond Rule */}
        <div className="flex items-center justify-center gap-2 pt-0.5 pb-1 text-[#c6a04a]">
          <div className="h-px w-10 sm:w-16 bg-[#c6a04a]/40" />
          <span className="text-xs">◆</span>
          <div className="h-px w-10 sm:w-16 bg-[#c6a04a]/40" />
        </div>

        <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-light max-w-xl mx-auto">
          Traditionella recept tillagade med färska örter, saffran och omsorg. Njut på plats på Valhallavägen 120, ta med som take-away eller beställ hemleverans.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1.5">
          <button
            onClick={onOpenBooking}
            className="px-5 sm:px-6 py-2 rounded-full bg-[#c6a04a] hover:bg-[#b08d3b] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-2xs hover:shadow-xs flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Boka Bord</span>
          </button>
          <a
            href="/hemleverans/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/hemleverans/');
            }}
            className="px-5 sm:px-6 py-2 rounded-full bg-white hover:bg-[#FAF7F2] border border-[#d6ccc2] hover:border-[#1e5f6e]/50 text-[#1e5f6e] text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-2xs hover:shadow-xs flex items-center gap-2"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Beställ Hemleverans</span>
          </a>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. CATEGORY NAVIGATION (Never Cut Off, Full Accessibility)                */}
      {/* ========================================================================= */}
      <nav aria-label="Menykategorier" className="sticky top-[56px] sm:top-[68px] z-30 bg-[#FAF7F2]/95 backdrop-blur-md py-3 -mx-4 px-4 sm:mx-0 sm:px-0 border-y border-[#E8DFD3] transition-all">
        <div className="flex sm:flex-wrap items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto sm:overflow-x-visible no-scrollbar py-0.5">
          {MENU_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count = getCategoryCount(cat);
            return (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#1C1917] text-white shadow-xs ring-1 ring-[#1C1917]'
                    : 'bg-white text-[#57534E] hover:text-[#1C1917] hover:bg-[#F4EFEA] border border-[#E8DFD3]'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] tabular-nums ${isSelected ? 'text-white/70' : 'text-[#78716C]'}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 3. MENU CHAPTERS — 3 DISHES PER UNCROPPED FOOD IMAGE SPREAD               */}
      {/* ========================================================================= */}
      <main className="space-y-14 sm:space-y-20">
        {categoriesToDisplay.map((categoryName, catIndex) => {
          const categoryDishes = MENU_ITEMS.filter((item) => item.category === categoryName);
          if (categoryDishes.length === 0) return null;

          // Find dishes with images belonging to this category
          const dishesWithImages = categoryDishes.filter((item) => hasValidImage(item));

          // 3 dishes per editorial block
          const chunkSize = 3;
          const dishChunks: MenuItem[][] = [];
          for (let i = 0; i < categoryDishes.length; i += chunkSize) {
            dishChunks.push(categoryDishes.slice(i, i + chunkSize));
          }

          return (
            <section key={categoryName} className="space-y-6 sm:space-y-8">
              
              {/* Category Chapter Heading */}
              <div className="flex flex-col items-center text-center space-y-1.5 pb-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c6a04a]">
                  Delikatess & Restaurang
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1917] tracking-tight">
                  {categoryName}
                </h2>
                <div className="flex items-center justify-center gap-2 pt-0.5 text-[#c6a04a]/70">
                  <div className="h-px w-10 sm:w-16 bg-[#c6a04a]/30" />
                  <span className="text-[10px]">✦</span>
                  <div className="h-px w-10 sm:w-16 bg-[#c6a04a]/30" />
                </div>
              </div>

              {/* SECTION BODY: 2-COLUMN SPREAD WITH UNCROPPED IMAGE ON LEFT OR RIGHT */}
              {dishesWithImages.length === 0 ? (
                /* Text-only category: Elegant 2-column menu sheet */
                <div className="bg-white rounded-2xl border border-[#E8DFD3] p-6 sm:p-8 lg:p-10 shadow-2xs">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
                    {categoryDishes.map((item) => renderDishItem(item))}
                  </div>
                </div>
              ) : (
                /* Category with images: Editorial blocks with uncropped photo on left or right */
                <div className="space-y-8 sm:space-y-10">
                  {dishChunks.map((chunk, chunkIdx) => {
                    const chunkImageDish = chunk.find((item) => hasValidImage(item)) || dishesWithImages[chunkIdx % dishesWithImages.length];
                    // Alternate left/right based on category index + chunk index
                    const isImageOnLeft = (catIndex + chunkIdx) % 2 === 0;

                    return (
                      <div
                        key={chunkIdx}
                        className="bg-white rounded-2xl border border-[#E8DFD3] overflow-hidden shadow-2xs hover:shadow-xs transition-shadow duration-300"
                      >
                        <div
                          className={`flex flex-col md:flex-row items-center ${
                            !isImageOnLeft ? 'md:flex-row-reverse' : ''
                          }`}
                        >
                          {/* UNCROPPED FULL PHOTO COLUMN (Left or Right on desktop, Top on mobile) */}
                          <div className="w-full md:w-5/12 lg:w-5/12 bg-[#F4EFEA] flex items-center justify-center p-4 sm:p-6 self-stretch min-h-[280px] sm:min-h-[320px] relative overflow-hidden group">
                            <div className="relative w-full h-full max-h-[360px] flex items-center justify-center">
                              <img
                                src={chunkImageDish.image}
                                alt={chunkImageDish.name}
                                onError={() => handleImageError(chunkImageDish.id)}
                                className="w-auto h-auto max-w-full max-h-[340px] object-contain rounded-xl shadow-xs group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                                loading="lazy"
                              />
                            </div>

                            {/* Dish name & price overlay pill */}
                            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none">
                              <span className="text-[11px] font-serif font-bold bg-[#1C1917]/85 backdrop-blur-md text-white px-2.5 py-1 rounded-md border border-white/20 shadow-xs">
                                {chunkImageDish.name}
                              </span>
                              {chunkImageDish.price && (
                                <span className="text-[11px] font-serif font-bold bg-[#FAF7F2]/95 text-[#1C1917] px-2.5 py-1 rounded-md border border-[#E8DFD3] shadow-xs">
                                  {chunkImageDish.price}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* 3 DISHES MENU CONTENT LIST COLUMN */}
                          <div className="w-full md:w-7/12 lg:w-7/12 p-6 sm:p-8 lg:p-10 flex flex-col justify-center divide-y divide-[#EAE3DA]/70">
                            {chunk.map((item) => renderDishItem(item))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

            </section>
          );
        })}
      </main>

      {/* ========================================================================= */}
      {/* 4. HOSPITALITY & ALLERGIES NOTE (100% Preserved Verbatim Content)         */}
      {/* ========================================================================= */}
      <footer className="bg-gradient-to-br from-white via-[#FAF7F2] to-[#F4EFEA] rounded-2xl p-6 sm:p-8 border border-[#E8DFD3] text-xs text-[#57534E] text-center max-w-2xl mx-auto space-y-1.5 shadow-2xs">
        <div className="inline-flex p-1.5 rounded-full bg-[#c6a04a]/10 text-[#c6a04a] mb-0.5">
          <Info className="w-3.5 h-3.5" />
        </div>
        <p className="font-serif text-base font-bold text-[#1C1917]">
          Har du allergier eller särskilda önskemål?
        </p>
        <p className="leading-relaxed font-light text-xs">
          Fråga gärna vår personal på plats eller ring oss på 08-660 36 35 så guidar vi dig genom våra rätter och ingredienser.
        </p>
      </footer>

    </div>
  );
};
