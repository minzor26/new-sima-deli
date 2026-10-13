import React from 'react';
import { MENU_ITEMS } from '../../data/siteData';
import { Calendar, Users, Clock, Sparkles } from 'lucide-react';

interface MenuLayoutProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export const MenuLayoutMidnight: React.FC<MenuLayoutProps> = ({ onOpenBooking }) => {
  const warmDishes = MENU_ITEMS.filter((i) => i.category === "Varma persiska rätter");
  const starters = MENU_ITEMS.filter((i) => i.category === "Tillbehör & Mazeh" || i.category === "Sallader");
  const desserts = MENU_ITEMS.filter((i) => i.category === "Något sött");

  return (
    <div className="w-full min-h-screen bg-[#07090D] pt-24 sm:pt-28 pb-24 animate-fadeIn font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B0E14] text-[#F3EFE6] rounded-3xl p-6 sm:p-12 lg:p-16 border border-stone-800 shadow-2xl space-y-16 sm:space-y-24">
          
          {/* 1. HERO HEADER WITH SCRIPT ACCENT */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs uppercase tracking-[0.3em]">
              <span className="h-px w-8 bg-[#D4AF37]/50" />
              <span>Exklusiv Persisk Matupplevelse</span>
              <span className="h-px w-8 bg-[#D4AF37]/50" />
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white">
              HUVUDMENY
            </h2>

            <p className="font-serif italic text-lg sm:text-xl text-[#D4AF37]/90 font-light">
              "Äkta persiska smaker i hjärtat av Stockholm"
            </p>

            <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed max-w-lg mx-auto">
              En sensorisk upplevelse av långkokta grytor, handplockat saffran från Khorasan och färska örter.
            </p>
          </div>

          {/* 2. COCKTAILS & EXCLUSIVE BEVERAGES */}
          <section className="space-y-8">
            <div className="flex flex-col items-center text-center space-y-1">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">Aperitif</span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white tracking-wide">
                DRINKAR & APERITIF
              </h3>
          <div className="h-px w-16 bg-[#D4AF37]/40 mt-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="py-2 border-b border-stone-800/80 group">
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-base sm:text-lg text-white group-hover:text-[#D4AF37] transition-colors">
                  Saffron Spritz
                </span>
                <span className="font-serif text-sm sm:text-base text-[#D4AF37] font-bold">145:-</span>
              </div>
              <p className="text-xs text-stone-400 font-light mt-0.5">Saffransinfuserad aperitivo, prosecco, apelsinzest, sodavatten</p>
            </div>

            <div className="py-2 border-b border-stone-800/80 group">
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-base sm:text-lg text-white group-hover:text-[#D4AF37] transition-colors">
                  Cardamom & Rose Gin Tonic
                </span>
                <span className="font-serif text-sm sm:text-base text-[#D4AF37] font-bold">145:-</span>
              </div>
              <p className="text-xs text-stone-400 font-light mt-0.5">Stockholms Bränneri gin, krossad kardemumma, rosenblad, hantverkstonic</p>
            </div>

            <div className="py-2 border-b border-stone-800/80 group">
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-base sm:text-lg text-white group-hover:text-[#D4AF37] transition-colors">
                  Sekanjabin Mocktail (Alkoholfri)
                </span>
                <span className="font-serif text-sm sm:text-base text-[#D4AF37] font-bold">75:-</span>
              </div>
              <p className="text-xs text-stone-400 font-light mt-0.5">Persisk traditionell sirap med mynta, gurka och färskpressad lime</p>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl p-2 bg-stone-950 w-full max-w-xs aspect-[3/4] sm:aspect-square flex items-center justify-center">
              <img
                src="/images/sholeh-zard.jpg"
                alt="Persian specialty drink"
                className="w-full h-full object-contain rounded-xl brightness-90 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. APPETIZERS / FÖRRÄTTER */}
      <section className="space-y-8">
        <div className="flex flex-col items-center text-center space-y-1">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">Förrätter</span>
          <h3 className="font-serif text-2xl sm:text-3xl text-white tracking-wide">
            FÖRRÄTTER & MAZEH
          </h3>
          <div className="h-px w-16 bg-[#D4AF37]/40 mt-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl p-2 bg-stone-950 w-full max-w-xs aspect-[3/4] sm:aspect-square flex items-center justify-center">
              <img
                src="/images/mazeh-tallrik.jpg"
                alt="Mazeh selection"
                className="w-full h-full object-contain rounded-xl brightness-90 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
            {starters.slice(0, 5).map((dish) => (
              <div key={dish.id} className="py-2 border-b border-stone-800/80 group">
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-base sm:text-lg text-white group-hover:text-[#D4AF37] transition-colors">
                    {dish.name}
                  </span>
                  <div className="flex-1 border-b border-dotted border-stone-700/60 mx-3 hidden sm:block mb-1" />
                  <span className="font-serif text-sm sm:text-base text-[#D4AF37] font-bold shrink-0">
                    {dish.price}
                  </span>
                </div>
                <p className="text-xs text-stone-400 font-light mt-0.5 leading-relaxed">
                  {dish.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MAIN COURSES / HUVUDRÄTTER */}
      <section className="space-y-8">
        <div className="flex flex-col items-center text-center space-y-1">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">Varmrätter</span>
          <h3 className="font-serif text-2xl sm:text-3xl text-white tracking-wide">
            VARMRÄTTER & SIGNATURER
          </h3>
          <div className="h-px w-16 bg-[#D4AF37]/40 mt-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            {warmDishes.slice(0, 5).map((dish) => (
              <div key={dish.id} className="py-2.5 border-b border-stone-800/80 group">
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-base sm:text-lg text-white group-hover:text-[#D4AF37] transition-colors">
                    {dish.name}
                  </span>
                  <div className="flex-1 border-b border-dotted border-stone-700/60 mx-3 hidden sm:block mb-1" />
                  <span className="font-serif text-sm sm:text-base text-[#D4AF37] font-bold shrink-0">
                    {dish.price}
                  </span>
                </div>
                <p className="text-xs text-stone-400 font-light mt-0.5 leading-relaxed">
                  {dish.description}
                </p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl p-2 bg-stone-950 w-full max-w-xs aspect-[3/4] sm:aspect-square flex items-center justify-center">
              <img
                src="/images/baghali-polo.jpg"
                alt="Baghali Polo Mahiche"
                className="w-full h-full object-contain rounded-xl brightness-90 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. DESSERTS */}
      <section className="space-y-6">
        <div className="flex flex-col items-center text-center space-y-1">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">Sött & Avslutning</span>
          <h3 className="font-serif text-2xl sm:text-3xl text-white tracking-wide">
            DESSERTER & SÖTT
          </h3>
          <div className="h-px w-16 bg-[#D4AF37]/40 mt-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {desserts.map((dish) => (
            <div key={dish.id} className="bg-stone-900/60 border border-stone-800 p-5 rounded-2xl space-y-2">
              <div className="flex justify-between items-baseline font-serif text-base text-white">
                <span className="font-bold">{dish.name}</span>
                <span className="text-[#D4AF37] font-bold">{dish.price}</span>
              </div>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                {dish.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. INTEGRATED LUXURY TABLE RESERVATION BAR */}
      <div className="border border-[#D4AF37]/40 bg-gradient-to-r from-stone-900 via-black to-stone-900 rounded-3xl p-6 sm:p-10 shadow-2xl text-center space-y-6">
        <div className="space-y-1">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-medium">
            Bordsbokning
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-white tracking-widest uppercase">
            BOKA BORD
          </h3>
        </div>

        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-3">
          <div className="bg-stone-950/80 border border-stone-800 rounded-xl p-3 flex items-center justify-between text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-[#D4AF37]" /> 2 Personer</span>
          </div>
          <div className="bg-stone-950/80 border border-stone-800 rounded-xl p-3 flex items-center justify-between text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#D4AF37]" /> Idag / Datum</span>
          </div>
          <div className="bg-stone-950/80 border border-stone-800 rounded-xl p-3 flex items-center justify-between text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#D4AF37]" /> 18:30</span>
          </div>
          <button
            onClick={onOpenBooking}
            className="w-full py-3 bg-[#D4AF37] hover:bg-[#b59226] text-black font-semibold uppercase tracking-wider text-xs rounded-xl shadow-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Boka Nu</span>
          </button>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};
