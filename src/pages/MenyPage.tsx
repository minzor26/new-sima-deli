import React, { useState, useEffect } from 'react';
import { Calendar, ShoppingBag, LayoutGrid, Image as ImageIcon, Sparkles, BookOpen, Compass, Moon, Layers, Utensils, Flame } from 'lucide-react';
import { MenuLayoutA } from '../components/menu/MenuLayoutA';
import { MenuLayoutC } from '../components/menu/MenuLayoutC';
import { MenuLayoutD } from '../components/menu/MenuLayoutD';
import { MenuLayoutFoody } from '../components/menu/MenuLayoutFoody';
import { MenuLayoutLuxuryDishes } from '../components/menu/MenuLayoutLuxuryDishes';
import { MenuLayoutGorms } from '../components/menu/MenuLayoutGorms';
import { MenuLayoutTasteAtlas } from '../components/menu/MenuLayoutTasteAtlas';
import { MenuLayoutMidnight } from '../components/menu/MenuLayoutMidnight';

interface MenyPageProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export type MenuDesignId =
  | 'layout-a'
  | 'layout-c'
  | 'layout-d'
  | 'foody'
  | 'luxury-dishes'
  | 'tasteatlas'
  | 'gorms'
  | 'midnight';

interface MenuDesignOption {
  id: MenuDesignId;
  label: string;
  badge: string;
  refImage: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const MENU_DESIGNS: MenuDesignOption[] = [
  {
    id: 'foody',
    label: 'Foody: Food Experience',
    badge: 'Ny Referens',
    refImage: 'Bild 3 ("It\'s not just Food, It\'s an Experience")',
    description: 'Modern interaktiv matupplevelse med svävande örter, rund hjälte-tallrik och en horisontell slider med utstickande runda skålar.',
    icon: Flame
  },
  {
    id: 'luxury-dishes',
    label: 'Dishes Menu: The Greatest Table',
    badge: 'Ny Referens',
    refImage: 'Bild 1 ("The Greatest Table Luxury Restaurant")',
    description: 'Rund skärbräda i trä med hjälterätt, statistik-räknare (Visitors Daily, Deliveries) och 2-kolumners beställningsmeny med varukorgsknappar.',
    icon: Utensils
  },
  {
    id: 'layout-a',
    label: 'A: Signature Dark Luxury',
    badge: 'Bild 2A',
    refImage: 'SIGNATURE Editorial (Ny)',
    description: 'Exklusiv mörk editorial med SIGNATURE-rubrik, panoramabild, "Explore Menu"-gallerikort och restaurangatmosfär.',
    icon: ImageIcon
  },
  {
    id: 'layout-c',
    label: 'C: Modular Cards Grid',
    badge: 'Bild 2C',
    refImage: 'Option C (Modular Cards)',
    description: '3 modulära kort med bilder och priser överst, följt av en 2-kolumners "More Dishes" textlista under.',
    icon: LayoutGrid
  },
  {
    id: 'layout-d',
    label: 'D: Category Selective Images',
    badge: 'Bild 2D',
    refImage: 'Option D (Selective Images)',
    description: 'Varje kategori i en egen sektion: Starters med bild till höger, Main Course med bild till vänster.',
    icon: Layers
  },
  {
    id: 'tasteatlas',
    label: 'TasteAtlas: Food Guide Grid',
    badge: 'Bild 3',
    refImage: 'Bild 3 (Swedish Food / TasteAtlas)',
    description: 'Table of contents-sidopanel med röd indikator, filterflikar, röda kategori-pills och 4-kolumners kort med bokmärke och betyg.',
    icon: Compass
  },
  {
    id: 'gorms',
    label: 'Gorm’s: Skandinavisk Editorial',
    badge: 'Bild 1',
    refImage: 'Bild 1 (Gorm’s Minimal)',
    description: 'Luftig minimalistisk vit tidningslayout med cirkulära svävande tallrikar, delikatesser och dryckeslista.',
    icon: BookOpen
  },
  {
    id: 'midnight',
    label: 'Midnatt & Guld: Fine Dining',
    badge: 'Bild 4',
    refImage: 'Bild 4 (Midnight Luxury)',
    description: 'Svart och champagne-guld fine dining med cocktails, exklusiva rätter och integrerad "Book A Table"-balk.',
    icon: Moon
  }
];

export const MenyPage: React.FC<MenyPageProps> = ({ onOpenBooking, onNavigate }) => {
  // Read layout from URL search params or localStorage, fallback to 'foody'
  const [activeDesign, setActiveDesign] = useState<MenuDesignId>(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const urlDesign = urlParams.get('design') as MenuDesignId;
      if (urlDesign && MENU_DESIGNS.some((d) => d.id === urlDesign)) {
        return urlDesign;
      }
      const saved = localStorage.getItem('sima_active_menu_design') as MenuDesignId;
      if (saved && MENU_DESIGNS.some((d) => d.id === saved)) {
        return saved;
      }
    }
    return 'foody';
  });

  const handleSelectDesign = (id: MenuDesignId) => {
    setActiveDesign(id);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sima_active_menu_design', id);
      const url = new URL(window.location.href);
      url.searchParams.set('design', id);
      window.history.replaceState({}, '', url.toString());
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeDesign]);

  const currentOption = MENU_DESIGNS.find((d) => d.id === activeDesign) || MENU_DESIGNS[0];

  return (
    <div className={`pt-24 sm:pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12 ${activeDesign === 'midnight' ? 'text-[#FAF7F2]' : 'text-[#1C1917]'}`}>
      
      {/* ========================================================================= */}
      {/* 1. RESTAURANT EDITORIAL HEADER                                            */}
      {/* ========================================================================= */}
      <header className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-6 sm:w-12 bg-gradient-to-r from-transparent via-[#c6a04a] to-[#c6a04a]" />
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#947128]">
            Sima Deli Restaurang & Delikatesser
          </span>
          <div className="h-px w-6 sm:w-12 bg-gradient-to-l from-transparent via-[#c6a04a] to-[#c6a04a]" />
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight">
          Vår Meny
        </h1>

        <div className="flex items-center justify-center gap-2 pt-0.5 pb-1 text-[#c6a04a]">
          <div className="h-px w-10 sm:w-16 bg-[#c6a04a]/40" />
          <span className="text-xs">◆</span>
          <div className="h-px w-10 sm:w-16 bg-[#c6a04a]/40" />
        </div>

        <p className={`text-xs sm:text-sm leading-relaxed font-light max-w-xl mx-auto ${activeDesign === 'midnight' ? 'text-stone-300' : 'text-[#57534E]'}`}>
          Traditionella recept tillagade med färska örter, saffran och omsorg. Njut på plats på Valhallavägen 120, ta med som take-away eller beställ hemleverans.
        </p>

        {/* Global Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
          <button
            onClick={onOpenBooking}
            className="px-5 sm:px-6 py-2.5 rounded-full bg-[#c6a04a] hover:bg-[#b08d3b] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm flex items-center gap-2 cursor-pointer"
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
            className={`px-5 sm:px-6 py-2.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm flex items-center gap-2 ${
              activeDesign === 'midnight'
                ? 'bg-stone-900 border-stone-700 text-[#FAF7F2] hover:bg-stone-800'
                : 'bg-white hover:bg-[#FAF7F2] border-[#d6ccc2] text-[#1e5f6e]'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Beställ Hemleverans</span>
          </a>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. MULTI-MENU DESIGN SELECTOR (PROMINENT TABS MATCHING REFERENCE IMAGES)   */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-3xl border border-[#E8DFD3] p-4 sm:p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EAE3DA] pb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#c6a04a]" />
            <h2 className="font-serif text-lg sm:text-xl font-bold text-[#1C1917]">
              Välj Menydesign (Alla Referenser Tillgängliga)
            </h2>
          </div>
          <span className="text-xs text-[#78716C]">
            Klicka på en design för att växla stil direkt
          </span>
        </div>

        {/* Tab Buttons for All Menu Layouts */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {MENU_DESIGNS.map((design) => {
            const isSelected = activeDesign === design.id;
            const Icon = design.icon;

            return (
              <button
                key={design.id}
                onClick={() => handleSelectDesign(design.id)}
                className={`p-3 rounded-2xl text-left transition-all duration-200 flex flex-col justify-between gap-2 cursor-pointer border ${
                  isSelected
                    ? 'bg-[#1C1917] text-white border-[#1C1917] shadow-md ring-2 ring-[#c6a04a]'
                    : 'bg-[#FAF7F2] hover:bg-white text-[#57534E] border-[#E8DFD3] hover:border-[#c6a04a]/60'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#c6a04a]' : 'text-[#78716C]'}`} />
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${
                    isSelected ? 'bg-[#c6a04a] text-white' : 'bg-[#EAE3DA] text-[#78716C]'
                  }`}>
                    {design.badge}
                  </span>
                </div>

                <div>
                  <div className={`font-serif text-xs sm:text-sm font-bold line-clamp-1 ${isSelected ? 'text-white' : 'text-[#1C1917]'}`}>
                    {design.label}
                  </div>
                  <div className={`text-[10px] line-clamp-1 ${isSelected ? 'text-stone-300' : 'text-[#78716C]'}`}>
                    {design.refImage}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Design Banner / Explanatory Note */}
        <div className="bg-[#FAF7F2] rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs border border-[#EAE3DA]/80">
          <div className="space-y-0.5">
            <span className="font-bold text-[#1C1917]">
              Aktiv stil: {currentOption.label}
            </span>
            <p className="text-[#57534E] font-light">
              {currentOption.description}
            </p>
          </div>
          <span className="shrink-0 text-[10px] font-mono text-[#947128] bg-white px-2.5 py-1 rounded-md border border-[#EAE3DA]">
            Design-ID: {currentOption.id}
          </span>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DYNAMIC MENU VIEW RENDERING                                            */}
      {/* ========================================================================= */}
      <main className="min-h-[500px]">
        {activeDesign === 'foody' && (
          <MenuLayoutFoody onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
        )}
        {activeDesign === 'luxury-dishes' && (
          <MenuLayoutLuxuryDishes onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
        )}
        {activeDesign === 'layout-a' && (
          <MenuLayoutA onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
        )}
        {activeDesign === 'layout-c' && (
          <MenuLayoutC onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
        )}
        {activeDesign === 'layout-d' && (
          <MenuLayoutD onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
        )}
        {activeDesign === 'tasteatlas' && (
          <MenuLayoutTasteAtlas onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
        )}
        {activeDesign === 'gorms' && (
          <MenuLayoutGorms onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
        )}
        {activeDesign === 'midnight' && (
          <MenuLayoutMidnight onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
        )}
      </main>

      {/* ========================================================================= */}
      {/* 4. FLOATING QUICK-SWITCHER PILL (EASY TO FLIP ANYTIME)                     */}
      {/* ========================================================================= */}
      <div className="fixed bottom-5 right-5 z-40 bg-[#1C1917]/95 text-white backdrop-blur-md px-4 py-2.5 rounded-full shadow-2xl border border-stone-700 flex items-center gap-3 text-xs">
        <span className="hidden sm:inline text-stone-400 text-[11px] font-medium">Byt Menydesign:</span>
        <div className="flex items-center gap-1.5 flex-wrap">
          {MENU_DESIGNS.map((d) => (
            <button
              key={d.id}
              onClick={() => handleSelectDesign(d.id)}
              title={d.label}
              className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-all cursor-pointer flex items-center justify-center ${
                activeDesign === d.id
                  ? 'bg-[#c6a04a] text-white scale-105 shadow-sm'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white'
              }`}
            >
              {d.badge}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
