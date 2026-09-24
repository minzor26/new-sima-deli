import React, { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS, type MenuItem } from '../data/siteData';
import { Calendar, ShoppingBag, Leaf, Sparkles, Camera, Utensils, ChevronDown, ChevronUp } from 'lucide-react';

interface MenyPageProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export const MenyPage: React.FC<MenyPageProps> = ({ onOpenBooking, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState("Alla");
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [showMoreOpen, setShowMoreOpen] = useState(false);
  const [showNonImageDishes, setShowNonImageDishes] = useState(false);

  // Check if a dish has a valid image belonging to Sima Deli data
  const hasValidImage = (item: MenuItem) => {
    return Boolean(item.image && item.image.trim() !== '' && !failedImages[item.id]);
  };

  // Dynamically group categories based ONLY on existing Sima Deli dish images
  const mainCategories: string[] = [];
  const showMoreCategories: string[] = [];

  MENU_CATEGORIES.forEach((cat) => {
    if (cat === "Alla") {
      mainCategories.push(cat);
      return;
    }
    const catDishes = MENU_ITEMS.filter((item) => item.category === cat);
    const hasImageDish = catDishes.some((item) => hasValidImage(item));

    if (hasImageDish) {
      mainCategories.push(cat);
    } else {
      showMoreCategories.push(cat);
    }
  });

  const filteredItems = selectedCategory === "Alla"
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  const itemsWithImages = filteredItems.filter(
    (item) => hasValidImage(item)
  );
  const itemsWithoutImages = filteredItems.filter(
    (item) => !hasValidImage(item)
  );

  const handleImageError = (itemId: string) => {
    setFailedImages((prev) => ({ ...prev, [itemId]: true }));
  };

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setShowMoreOpen(false);
    setShowNonImageDishes(false);
  };

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

      {/* Sticky Category Pills Navigation */}
      <div className="sticky top-[56px] sm:top-[68px] z-30 bg-[#FAF7F2]/95 backdrop-blur-md py-3 -mx-4 px-4 sm:mx-0 sm:px-0 border-y sm:border-y-0 border-[#cdebf2]/80 transition-all">
        <div className="flex flex-wrap items-center justify-start sm:justify-center gap-2 pb-1 no-scrollbar scroll-smooth">
          {/* Main categories (categories that have at least ONE dish with an existing Sima Deli image) */}
          {mainCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategorySelect(cat)}
              className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 flex items-center gap-1.5 ${
                selectedCategory === cat
                  ? 'bg-[#c6a04a] text-white shadow-xs'
                  : 'bg-white text-[#1e5f6e] hover:bg-[#cdebf2]/50 border border-[#cdebf2]'
              }`}
            >
              <span>{cat}</span>
            </button>
          ))}

          {/* Show More Categories Trigger */}
          {showMoreCategories.length > 0 && (
            <button
              onClick={() => setShowMoreOpen(!showMoreOpen)}
              className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 flex items-center gap-1.5 ${
                showMoreCategories.includes(selectedCategory) || showMoreOpen
                  ? 'bg-[#1e5f6e] text-white shadow-xs'
                  : 'bg-white text-[#1e5f6e] hover:bg-[#cdebf2]/50 border border-[#cdebf2]'
              }`}
            >
              <span>Visa fler</span>
              <span className="text-[10px] opacity-80">({showMoreCategories.length})</span>
              {showMoreOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          )}
        </div>

        {/* Show More Expanded Category List */}
        {showMoreOpen && showMoreCategories.length > 0 && (
          <div className="mt-2.5 pt-2.5 border-t border-[#cdebf2]/60 flex flex-wrap items-center justify-start sm:justify-center gap-2">
            {showMoreCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setShowNonImageDishes(false);
                }}
                className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#c6a04a] text-white shadow-xs'
                    : 'bg-white/90 text-[#57534E] hover:bg-white hover:text-[#1e5f6e] border border-[#cdebf2]/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="space-y-10 sm:space-y-14">

        {/* SECTION 1: DISHES WITH IMAGES (4-COLUMN VISUAL SHOWCASE GRID) */}
        {itemsWithImages.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#cdebf2]/80">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-[#c6a04a]/10 text-[#c6a04a]">
                  <Camera className="w-4 h-4" />
                </span>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#c6a04a]">
                    Utvalda Bildrätter
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917]">
                    Fotograferade Delikatesser
                  </h2>
                </div>
              </div>
              <span className="text-xs text-[#78716C] hidden sm:inline-block">
                Visar {itemsWithImages.length} {itemsWithImages.length === 1 ? 'rätt' : 'rätter'} med bild
              </span>
            </div>

            {/* 4 Column Layout on Desktop (xl:grid-cols-4) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 items-stretch">
              {itemsWithImages.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden border border-[#cdebf2]/80 shadow-2xs hover:border-[#c6a04a]/40 hover:shadow-md transition-all flex flex-col justify-between group h-full"
                >
                  <div>
                    {/* Image frame */}
                    <div className="relative aspect-4/3 bg-[#F7F4EE] border-b border-[#cdebf2]/60 overflow-hidden p-2 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        onError={() => handleImageError(item.id)}
                        className="w-full h-full object-contain drop-shadow-2xs group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-2.5 left-2.5 text-[9px] font-bold uppercase tracking-wider text-[#1e5f6e] bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-full border border-[#cdebf2]/80 shadow-2xs">
                        {item.category}
                      </span>
                    </div>

                    <div className="p-4 sm:p-5 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif text-base sm:text-lg font-bold text-[#1C1917] leading-tight">
                          {item.name}
                        </h3>
                        {item.price && (
                          <span className="font-serif text-xs sm:text-sm font-bold text-[#1e5f6e] bg-[#cdebf2]/60 px-2 py-0.5 rounded-md border border-[#b8e2ec] shrink-0">
                            {item.price}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-[#57534E] leading-relaxed">
                        {item.description}
                      </p>

                      {/* Subitems */}
                      {item.subItems && item.subItems.length > 0 && (
                        <div className="mt-3 pt-2.5 border-t border-[#cdebf2]/50 space-y-1.5">
                          {item.subItems.map((sub, idx) => (
                            <div key={idx} className="flex items-start justify-between text-xs py-1 border-b border-[#F7F4EE] last:border-0">
                              <div>
                                <span className="font-semibold text-[#1C1917]">{sub.name}</span>
                                {sub.description && <span className="text-[#78716C] block text-[11px]">{sub.description}</span>}
                              </div>
                              {sub.price && <span className="font-semibold text-[#1e5f6e] bg-[#cdebf2]/50 px-2 py-0.5 rounded-md border border-[#cdebf2] shrink-0 text-[11px]">{sub.price}</span>}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Dietary tags */}
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 flex items-center justify-between gap-2 flex-wrap text-[10px]">
                    <div className="flex flex-wrap gap-1.5">
                      {item.isVegan && (
                        <span className="inline-flex items-center gap-1 font-semibold text-[#1e5f6e] bg-[#cdebf2] px-2 py-0.5 rounded-full border border-[#b8e2ec]">
                          <Leaf className="w-3 h-3" />
                          Vegan
                        </span>
                      )}
                      {item.isVegetarian && (
                        <span className="inline-flex items-center gap-1 font-semibold text-[#1e5f6e] bg-[#cdebf2] px-2 py-0.5 rounded-full border border-[#b8e2ec]">
                          <Leaf className="w-3 h-3" />
                          Vegetarisk
                        </span>
                      )}
                      {item.note && (
                        <span className="inline-flex items-center gap-1 font-semibold text-[#1e5f6e] bg-[#cdebf2]/40 px-2 py-0.5 rounded-full border border-[#cdebf2]">
                          <Sparkles className="w-3 h-3 text-[#c6a04a]" />
                          {item.note}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-[#c6a04a] font-semibold">
                      Signaturrätt
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* SHOW MORE BUTTON FOR NON-IMAGE DISHES IN THIS CATEGORY */}
            {itemsWithoutImages.length > 0 && (
              <div className="flex justify-center pt-4 pb-2">
                <button
                  onClick={() => setShowNonImageDishes(!showNonImageDishes)}
                  className="px-6 py-2.5 rounded-full bg-white hover:bg-[#cdebf2]/40 border border-[#cdebf2] text-[#1e5f6e] text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-2xs hover:shadow-xs"
                >
                  <Utensils className="w-4 h-4 text-[#c6a04a]" />
                  <span>
                    {showNonImageDishes
                      ? "Dölj övriga rätter utan bild"
                      : `Visa övriga rätter utan bild (${itemsWithoutImages.length})`}
                  </span>
                  {showNonImageDishes ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            )}
          </section>
        )}

        {/* SECTION 2: DISHES WITHOUT IMAGES (SHOWN WHEN EXPANDED OR WHEN NO PHOTO DISHES EXIST) */}
        {itemsWithoutImages.length > 0 && (showNonImageDishes || itemsWithImages.length === 0) && (
          <section className="space-y-4 animate-fadeIn">
            {itemsWithImages.length > 0 && (
              <div className="flex items-center gap-2 pb-2 border-b border-[#cdebf2]/80 pt-4">
                <span className="p-1.5 rounded-lg bg-[#1e5f6e]/10 text-[#1e5f6e]">
                  <Utensils className="w-4 h-4" />
                </span>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1e5f6e]">
                    Meny-klassiker
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917]">
                    Husets Övriga Delikatesser
                  </h2>
                </div>
              </div>
            )}

            {/* 4 Column Layout for Non-Image Dishes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 items-stretch">
              {itemsWithoutImages.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-[#cdebf2]/80 shadow-2xs hover:border-[#cdebf2] hover:shadow-sm transition-all flex flex-col justify-between relative overflow-hidden h-full"
                >
                  {/* Decorative top accent line */}
                  <div className="w-10 h-1 bg-[#c6a04a]/70 rounded-full mb-3" />

                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 sm:gap-3 mb-2">
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-[#1e5f6e] bg-[#cdebf2]/40 px-2 py-0.5 rounded-full border border-[#cdebf2]/60 inline-block mb-1">
                          {item.category}
                        </span>
                        <h3 className="font-serif text-base sm:text-lg font-bold text-[#1C1917] leading-tight">
                          {item.name}
                        </h3>
                      </div>
                      {item.price && (
                        <div className="self-start sm:self-auto shrink-0 font-serif text-xs sm:text-sm font-bold text-[#1e5f6e] bg-[#FAF7F2] px-2 py-0.5 rounded-md border border-[#cdebf2]">
                          {item.price}
                        </div>
                      )}
                    </div>

                    <p className="text-xs text-[#57534E] leading-relaxed mb-3">
                      {item.description}
                    </p>

                    {/* Subitems */}
                    {item.subItems && item.subItems.length > 0 && (
                      <div className="mt-3 pt-2.5 border-t border-[#cdebf2]/50 space-y-1.5">
                        {item.subItems.map((sub, idx) => (
                          <div key={idx} className="flex items-start justify-between text-xs py-1 border-b border-[#F7F4EE] last:border-0">
                            <div>
                              <span className="font-semibold text-[#1C1917]">{sub.name}</span>
                              {sub.description && <span className="text-[#78716C] block text-[11px]">{sub.description}</span>}
                            </div>
                            {sub.price && <span className="font-semibold text-[#1e5f6e] bg-[#cdebf2]/50 px-2 py-0.5 rounded-md border border-[#cdebf2] shrink-0 text-[11px]">{sub.price}</span>}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Dietary tags */}
                  <div className="mt-4 pt-3 border-t border-[#cdebf2]/50 flex items-center justify-between gap-2 flex-wrap text-[10px]">
                    <div className="flex flex-wrap gap-1.5">
                      {item.isVegan && (
                        <span className="inline-flex items-center gap-1 font-semibold text-[#1e5f6e] bg-[#cdebf2] px-2 py-0.5 rounded-full border border-[#b8e2ec]">
                          <Leaf className="w-3 h-3" />
                          Vegan
                        </span>
                      )}
                      {item.isVegetarian && (
                        <span className="inline-flex items-center gap-1 font-semibold text-[#1e5f6e] bg-[#cdebf2] px-2 py-0.5 rounded-full border border-[#b8e2ec]">
                          <Leaf className="w-3 h-3" />
                          Vegetarisk
                        </span>
                      )}
                      {item.note && (
                        <span className="inline-flex items-center gap-1 font-semibold text-[#1e5f6e] bg-[#cdebf2]/40 px-2 py-0.5 rounded-full border border-[#cdebf2]">
                          <Sparkles className="w-3 h-3 text-[#c6a04a]" />
                          {item.note}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-[#78716C] font-medium italic">
                      Traditionellt recept
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>

      {/* Footnote on dietary & hospitality */}
      <div className="bg-gradient-to-br from-[#cdebf2]/40 via-[#FAF7F2] to-[#FAF7F2] rounded-2xl p-5 sm:p-6 border border-[#cdebf2] text-xs text-[#57534E] text-center max-w-2xl mx-auto space-y-1 shadow-2xs">
        <p className="font-semibold text-[#1C1917]">Har du allergier eller särskilda önskemål?</p>
        <p>Fråga gärna vår personal på plats eller ring oss på 08-660 36 35 så guidar vi dig genom våra rätter och ingredienser.</p>
      </div>

    </div>
  );
};
