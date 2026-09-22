import React, { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/siteData';
import { Calendar, ShoppingBag, Leaf, Sparkles } from 'lucide-react';

interface MenyPageProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export const MenyPage: React.FC<MenyPageProps> = ({ onOpenBooking, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState("Alla");

  const filteredItems = selectedCategory === "Alla"
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-24 sm:pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
      
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#c6a04a] bg-[#cdebf2]/40 px-3 py-1 rounded-full border border-[#cdebf2]">
          Sima Deli Restaurang & Delikatesser
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917]">
          Vår Meny
        </h1>
        <p className="text-xs sm:text-base text-[#57534E] leading-relaxed font-light px-2">
          Traditionella recept tillagade med färska örter, saffran och omsorg. Njut på plats på Valhallavägen 120, ta med som take-away eller beställ hemleverans.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 pt-2">
          <button
            onClick={onOpenBooking}
            className="px-5 sm:px-6 py-2.5 rounded-full bg-[#c6a04a] hover:bg-[#b08d3b] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs flex items-center gap-1.5 sm:gap-2 cursor-pointer"
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
            className="px-5 sm:px-6 py-2.5 rounded-full bg-[#cdebf2]/40 hover:bg-[#cdebf2] border border-[#cdebf2] text-[#1e5f6e] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 sm:gap-2"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Beställ Hemleverans</span>
          </a>
        </div>
      </div>

      {/* Sticky Category Pills Navigation on Mobile */}
      <div className="sticky top-[56px] sm:top-[68px] z-30 bg-[#FAF7F2]/95 backdrop-blur-md py-3 -mx-4 px-4 sm:mx-0 sm:px-0 border-y sm:border-y-0 border-[#cdebf2]/80 transition-all">
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 pb-1 no-scrollbar scroll-smooth">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                selectedCategory === cat
                  ? 'bg-[#c6a04a] text-white shadow-xs'
                  : 'bg-white text-[#1e5f6e] hover:bg-[#cdebf2]/50 border border-[#cdebf2]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Content Grid */}
      <div className="space-y-6 sm:space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 sm:p-7 border border-[#cdebf2]/70 shadow-2xs hover:border-[#cdebf2] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image if available */}
                {item.image && (
                  <div className="mb-4 rounded-xl overflow-hidden aspect-4/3 sm:aspect-16/10 bg-[#F7F4EE] border-2 border-[#cdebf2]/60 p-2 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain drop-shadow-2xs"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Dish title & price (responsive layout) */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1.5 sm:gap-4 mb-2">
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#1e5f6e] bg-[#cdebf2]/40 px-2 py-0.5 rounded-full border border-[#cdebf2]/60 inline-block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg sm:text-2xl font-bold text-[#1C1917] leading-tight">
                      {item.name}
                    </h3>
                  </div>
                  {item.price && (
                    <div className="self-start sm:self-auto shrink-0 font-serif text-sm sm:text-lg font-bold text-[#1e5f6e] bg-[#cdebf2] px-2.5 sm:px-3 py-1 rounded-lg border border-[#b8e2ec] shadow-2xs">
                      {item.price}
                    </div>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Subitems (e.g. for Mazeh-tallrik, Kaffe, Kalla drycker) */}
                {item.subItems && item.subItems.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-[#cdebf2]/50 space-y-2">
                    {item.subItems.map((sub, idx) => (
                      <div
                        key={idx}
                        className="flex items-start justify-between text-xs py-1.5 border-b border-[#F7F4EE] last:border-0"
                      >
                        <div className="pr-3">
                          <span className="font-semibold text-[#1C1917]">{sub.name}</span>
                          {sub.description && (
                            <span className="text-[#78716C] block text-[11px] mt-0.5">
                              {sub.description}
                            </span>
                          )}
                        </div>
                        {sub.price && (
                          <span className="font-semibold text-[#1e5f6e] bg-[#cdebf2]/50 px-2 py-0.5 rounded-md border border-[#cdebf2] shrink-0 text-[11px]">
                            {sub.price}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Photo & dietary tags */}
              <div className="mt-4 pt-3 border-t border-[#cdebf2]/50 flex items-center justify-between gap-2 flex-wrap">
                <div className="flex flex-wrap gap-1.5">
                  {item.isVegan && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#1e5f6e] bg-[#cdebf2] px-2.5 py-0.5 rounded-full border border-[#b8e2ec]">
                      <Leaf className="w-3 h-3" />
                      Vegan
                    </span>
                  )}
                  {item.isVegetarian && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#1e5f6e] bg-[#cdebf2] px-2.5 py-0.5 rounded-full border border-[#b8e2ec]">
                      <Leaf className="w-3 h-3" />
                      Vegetarisk
                    </span>
                  )}
                  {item.note && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#1e5f6e] bg-[#cdebf2]/40 px-2.5 py-0.5 rounded-full border border-[#cdebf2]">
                      <Sparkles className="w-3 h-3 text-[#c6a04a]" />
                      {item.note}
                    </span>
                  )}
                </div>

                {item.image && (
                  <span className="text-[10px] sm:text-[11px] text-[#c6a04a] font-semibold">
                    Populär signaturrätt
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footnote on dietary & hospitality */}
      <div className="bg-gradient-to-br from-[#cdebf2]/40 via-[#FAF7F2] to-[#FAF7F2] rounded-2xl p-5 sm:p-6 border border-[#cdebf2] text-xs text-[#57534E] text-center max-w-2xl mx-auto space-y-1 shadow-2xs">
        <p className="font-semibold text-[#1C1917]">Har du allergier eller särskilda önskemål?</p>
        <p>Fråga gärna vår personal på plats eller ring oss på 08-660 36 35 så guidar vi dig genom våra rätter och ingredienser.</p>
      </div>

    </div>
  );
};
