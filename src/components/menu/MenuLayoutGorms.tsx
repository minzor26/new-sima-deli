import React from 'react';
import { MENU_ITEMS } from '../../data/siteData';

interface MenuLayoutProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export const MenuLayoutGorms: React.FC<MenuLayoutProps> = () => {
  // Categorize dishes
  const warmDishes = MENU_ITEMS.filter((i) => i.category === "Varma persiska rätter");
  const starters = MENU_ITEMS.filter((i) => i.category === "Tillbehör & Mazeh" || i.category === "Mazeh-tallrik" || i.category === "Sallader");
  const desserts = MENU_ITEMS.filter((i) => i.category === "Något sött");
  const drinks = MENU_ITEMS.filter((i) => i.category === "Drycker");

  return (
    <div className="bg-white rounded-3xl border border-stone-200/80 shadow-xs p-6 sm:p-12 lg:p-16 max-w-5xl mx-auto space-y-16 sm:space-y-24 text-stone-900 font-sans animate-fadeIn">
      
      {/* 1. EDITORIAL HEADER & TOP BANNER SPREAD */}
      <div className="space-y-8">
        {/* Subtle Brand & Title */}
        <div className="flex flex-col items-start border-b border-stone-200 pb-6">
          <span className="text-[11px] tracking-[0.25em] uppercase text-stone-500 font-medium">
            gourmet persiskt kök & delikatesser
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight font-normal text-stone-900 mt-2">
            MENU
          </h2>
        </div>

        {/* Hero Visual Spread: Story & Plated Spread */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
            <p className="font-serif italic text-base sm:text-lg text-stone-800 leading-snug">
              Välkommen till Sima Deli — en kulinarisk mötesplats där persisk tradition förenas med nordisk finess.
            </p>
            <p>
              Våra grytor långkokas i timmar med torkad lime och färska örter. Saffranet handplockas och riset ångas till perfektion med krispig botten (tahdig).
            </p>
            <p className="text-[11px] text-stone-400">
              Traditional recipes crafted with fresh herbs, barberries, saffron and heritage hospitality on Valhallavägen.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="rounded-2xl overflow-hidden shadow-sm aspect-[16/10] bg-stone-100">
              <img
                src="/images/sima-kitchen.jpg"
                alt="Sima Deli Köksmiljö"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/mazeh-tallrik.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. SECTION: VARMARÄTTER WITH FLOATING CIRCULAR PLATED DISH */}
      <section className="space-y-8">
        <div className="border-b border-stone-200 pb-2">
          <span className="text-xs uppercase tracking-widest text-stone-400 font-medium">Huvudrätter</span>
          <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal">Varma persiska grytor & ris</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Menu Items List */}
          <div className="lg:col-span-7 space-y-6">
            {warmDishes.slice(0, 4).map((dish) => (
              <div key={dish.id} className="space-y-1 group">
                <div className="flex items-baseline justify-between gap-4">
                  <h4 className="font-serif text-base sm:text-lg font-bold text-stone-900 group-hover:text-[#947128] transition-colors">
                    {dish.name}
                  </h4>
                  <div className="flex-1 border-b border-dotted border-stone-300 mx-2 hidden sm:block mb-1" />
                  <span className="font-serif text-sm sm:text-base font-bold text-stone-900 tabular-nums shrink-0">
                    {dish.price}
                  </span>
                </div>
                <p className="text-xs text-stone-500 font-light leading-relaxed">
                  {dish.description}
                </p>
              </div>
            ))}
          </div>

          {/* Floating Overhead Circular Plated Dish */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-xl ring-8 ring-stone-100/80 group">
              <img
                src="/images/zereshk-polo.jpg"
                alt="Zereshkpolo overhead"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION: ANTIPASTI & MAZEH (FLOATING CIRCULAR DISH ON LEFT) */}
      <section className="space-y-8">
        <div className="border-b border-stone-200 pb-2">
          <span className="text-xs uppercase tracking-widest text-stone-400 font-medium">Antipasti & Smårätter</span>
          <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal">Mazeh & Färska Sallader</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Floating Circular Dish on Left */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-xl ring-8 ring-stone-100/80 group">
              <img
                src="/images/shirazi-salad.jpg"
                alt="Salad Shirazi overhead"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Menu Items List on Right */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            {starters.slice(0, 4).map((dish) => (
              <div key={dish.id} className="space-y-1 group">
                <div className="flex items-baseline justify-between gap-4">
                  <h4 className="font-serif text-base sm:text-lg font-bold text-stone-900 group-hover:text-[#947128] transition-colors">
                    {dish.name}
                  </h4>
                  <div className="flex-1 border-b border-dotted border-stone-300 mx-2 hidden sm:block mb-1" />
                  <span className="font-serif text-sm sm:text-base font-bold text-stone-900 tabular-nums shrink-0">
                    {dish.price}
                  </span>
                </div>
                <p className="text-xs text-stone-500 font-light leading-relaxed">
                  {dish.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SHARING BOARD / MAZEH TALLRIK HIGHLIGHT */}
      <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-7 space-y-2">
          <span className="text-[10px] uppercase font-semibold tracking-wider text-[#947128]">
            Signaturplanka
          </span>
          <h4 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
            Sima Deli Stora Mazeh-Tallrik
          </h4>
          <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
            Ett urval av kalla och varma persiska delikatesser: Mast-o-Moosir, Kashke Bademjan, Olovieh, Shirazi och hembakat bröd. Perfekt att dela på två eller fler.
          </p>
          <span className="inline-block font-serif text-lg font-bold text-[#947128] pt-1">
            219 kr / person
          </span>
        </div>
        <div className="md:col-span-5 rounded-xl overflow-hidden aspect-[4/3] bg-stone-200 shadow-sm">
          <img
            src="/images/mazeh-tallrik.jpg"
            alt="Mazeh-tallrik planka"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 5. DESSERT SECTION */}
      <section className="space-y-6">
        <div className="border-b border-stone-200 pb-2">
          <span className="text-xs uppercase tracking-widest text-stone-400 font-medium">Dessert</span>
          <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal">Något sött till kaffet</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            {desserts.map((dish) => (
              <div key={dish.id} className="space-y-0.5">
                <div className="flex justify-between font-serif text-base font-bold text-stone-900">
                  <span>{dish.name}</span>
                  <span>{dish.price}</span>
                </div>
                <p className="text-xs text-stone-500 font-light">{dish.description}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl overflow-hidden shadow-sm aspect-[16/9] bg-stone-100">
            <img
              src="/images/sholeh-zard.jpg"
              alt="Sholeh Zard Saffranspudding"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 6. DUAL BEVERAGE / WINE LIST */}
      <section className="pt-6 border-t border-stone-200 space-y-6">
        <div className="text-center space-y-1">
          <h4 className="font-serif text-xl tracking-tight text-stone-900">Dryckeslista & Persiskt Te</h4>
          <p className="text-xs text-stone-500 font-light">Utvalda viner, traditionell Dough och aromatisk persisk bryggning</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {/* Column 1: Kalla Drycker */}
          <div className="space-y-3">
            <h5 className="font-serif text-sm font-semibold tracking-wider uppercase text-stone-700 border-b border-stone-200 pb-1">
              Kalla drycker & Dough
            </h5>
            {drinks.map((item) => (
              <div key={item.id} className="flex justify-between text-xs py-1">
                <span className="text-stone-800">{item.name}</span>
                <span className="font-serif font-bold text-stone-900">{item.price}</span>
              </div>
            ))}
            <div className="flex justify-between text-xs py-1">
              <span className="text-stone-800">Persisk Dough (Kolsyrad yoghurtdryck med mynta)</span>
              <span className="font-serif font-bold text-stone-900">35 kr</span>
            </div>
            <div className="flex justify-between text-xs py-1">
              <span className="text-stone-800">Granatäpplejuice (Färskpressad)</span>
              <span className="font-serif font-bold text-stone-900">45 kr</span>
            </div>
          </div>

          {/* Column 2: Varma Drycker & Vin */}
          <div className="space-y-3">
            <h5 className="font-serif text-sm font-semibold tracking-wider uppercase text-stone-700 border-b border-stone-200 pb-1">
              Varma Drycker & Vin
            </h5>
            <div className="flex justify-between text-xs py-1">
              <span className="text-stone-800">Persiskt Kardemumma-te med Nabat (Saffranssocker)</span>
              <span className="font-serif font-bold text-stone-900">35 kr</span>
            </div>
            <div className="flex justify-between text-xs py-1">
              <span className="text-stone-800">Eko Husets Rödvin (Glas / Flaska)</span>
              <span className="font-serif font-bold text-stone-900">95 kr / 380 kr</span>
            </div>
            <div className="flex justify-between text-xs py-1">
              <span className="text-stone-800">Eko Husets Vitt vin (Glas / Flaska)</span>
              <span className="font-serif font-bold text-stone-900">95 kr / 380 kr</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
