import React, { useState } from 'react';
import { Phone, ShoppingBag, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../../data/siteData';

interface MenuLayoutProps {
  onOpenBooking?: () => void;
  onNavigate?: (path: string) => void;
}

export const MenuLayoutLuxuryDishes: React.FC<MenuLayoutProps> = ({ onNavigate }) => {
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const handleOrder = (name: string) => {
    setAddedItem(name);
    setTimeout(() => setAddedItem(null), 2000);
  };

  const mainStews = [
    {
      id: 'zereshk-polo',
      name: 'ZERESHKPOLO',
      description: 'Marinated chicken fillet in tomato sauce, saffron rice, zereshk and pistachios.',
      price: '189 kr',
      image: '/images/zereshk-polo.jpg'
    },
    {
      id: 'ghormeh-sabzi',
      name: 'GHORMEH-SABZI',
      description: 'Herb stew with kidney beans, tender meat and sun-dried black limes.',
      price: '189 kr',
      image: '/images/ghormeh-sabzi.jpg'
    },
    {
      id: 'baghali-polo',
      name: 'BAGHALI-POLO MAHICHE',
      description: 'Slow-cooked lamb shank served with dill and tender fava bean rice.',
      price: '259 kr',
      image: '/images/baghali-polo.jpg'
    },
    {
      id: 'tahchin',
      name: 'TAHCHIN',
      description: 'Crispy saffron rice cake with spiced chicken, egg and Persian yogurt.',
      price: '189 kr',
      image: '/images/tahchin.jpg'
    },
    {
      id: 'gheymeh',
      name: 'GHEYMEH BADEMJAN',
      description: 'Yellow lentil stew with roasted eggplants, cherry tomatoes and saffron rice.',
      price: '189 kr',
      image: '/images/gheymeh.jpg'
    },
    {
      id: 'zaboon',
      name: 'ZABOON SPECIAL',
      description: 'Tender beef tongue in fragrant broth with barbari bread and torshi.',
      price: '229 kr',
      image: '/images/zaboon.jpg'
    }
  ];

  const pairings = [
    {
      id: 'mazeh-tallrik',
      name: 'SIMA MAZEH TALLRIK',
      description: 'Selection of Persian dips, Kashke Bademjan, Olovieh, herbs and fresh bread.',
      price: '219 kr',
      image: '/images/mazeh-tallrik.jpg'
    },
    {
      id: 'shirazi-salad',
      name: 'SALAD SHIRAZI',
      description: 'Finely diced cucumbers, tomatoes, red onions, dried mint and olive oil.',
      price: '65 kr',
      image: '/images/shirazi-salad.jpg'
    },
    {
      id: 'mastmoosir',
      name: 'MAST-O-MOOSIR',
      description: 'Creamy yogurt infused with wild Persian mountain shallots and herbs.',
      price: '69 kr',
      image: '/images/mastmoosir.jpg'
    },
    {
      id: 'olovieh',
      name: 'SALAD OLOVIEH',
      description: 'Traditional potato salad with shredded chicken, sweet peas and pickles.',
      price: '89 kr',
      image: '/images/olovieh.jpg'
    },
    {
      id: 'koo-koo',
      name: 'KOO-KOO SABZI',
      description: 'Persian fresh herb frittata with barberries, walnuts and garlic.',
      price: '95 kr',
      image: '/images/koo-koo.jpg'
    },
    {
      id: 'sholeh-zard',
      name: 'SHOLEH ZARD',
      description: 'Saffron rice dessert with rosewater, cinnamon, pistachios and almonds.',
      price: '79 kr',
      image: '/images/sholeh-zard.jpg'
    }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-14 border border-stone-200 shadow-sm max-w-7xl mx-auto space-y-20 font-sans animate-fadeIn text-stone-900">
      
      {/* Toast Alert */}
      {addedItem && (
        <div className="fixed top-24 right-8 z-50 bg-[#1C1917] text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 text-xs border border-stone-700 animate-slideDown">
          <Sparkles className="w-4 h-4 text-[#c6a04a]" />
          <span>Tillagd: <strong>{addedItem}</strong></span>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 1. TOP HEADER & HERO SECTION (Exact Reference 1: "Dishes Menu")             */}
      {/* ========================================================================= */}
      <div className="space-y-12">
        {/* Title & Breadcrumbs */}
        <div className="text-center space-y-1">
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-stone-900">
            DISHES MENU
          </h2>
          <div className="text-xs text-stone-400 font-medium">
            <span>Home</span> / <span className="text-[#c6a04a]">Menu</span> / <span>Dishes</span>
          </div>
        </div>

        {/* Hero Banner: Wooden Board on Left, Story on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAF8F5] p-6 sm:p-10 rounded-3xl border border-stone-200">
          
          {/* Left: Wooden Board Platter Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-xl ring-8 ring-white bg-amber-50">
              <img
                src="/images/zereshk-polo.jpg"
                alt="The Greatest Table Luxury Dish"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: "THE GREATEST TABLE LUXURY RESTAURANT" */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#c6a04a]">
              <span>—</span>
              <span>BEST QUALITY FOOD</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
              THE GREATEST TABLE LUXURY RESTAURANT.
            </h3>

            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed max-w-lg">
              Sedan grundandet har Sima Deli serverat autentisk persisk mat med högsta kvalitet på Valhallavägen 120. Varje rätt är omsorgsfullt tillagad från grunden med handplockat saffran och färska örter.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate && onNavigate('/om-oss/')}
                className="px-6 py-2.5 rounded-full bg-[#1C1917] hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm flex items-center gap-2"
              >
                <span>ABOUT RESTAURANT</span>
                <span>→</span>
              </button>
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="flex items-center gap-2 text-xs font-bold text-stone-800 hover:text-[#c6a04a] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#c6a04a]" />
                <span>{RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </div>

        </div>

        {/* 2. STAT COUNTERS ROW (Exact Reference 1) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-4 border-b border-stone-200 pb-10 text-center md:text-left">
          <div className="col-span-2 md:col-span-1 flex items-center gap-2 text-xs text-stone-500 font-medium">
            <Sparkles className="w-4 h-4 text-[#c6a04a] shrink-0" />
            <span>All the work we have done has been successfully completed</span>
          </div>

          <div className="space-y-0.5">
            <div className="font-sans text-2xl sm:text-3xl font-bold text-stone-900">200+</div>
            <div className="text-[11px] uppercase tracking-wider text-stone-500">VISITORS DAILY</div>
          </div>

          <div className="space-y-0.5">
            <div className="font-sans text-2xl sm:text-3xl font-bold text-stone-900">200+</div>
            <div className="text-[11px] uppercase tracking-wider text-stone-500">DELIVERIES MONTHLY</div>
          </div>

          <div className="space-y-0.5">
            <div className="font-sans text-2xl sm:text-3xl font-bold text-stone-900">1000+</div>
            <div className="text-[11px] uppercase tracking-wider text-stone-500">POSITIVE FEEDBACK</div>
          </div>

          <div className="space-y-0.5">
            <div className="font-sans text-2xl sm:text-3xl font-bold text-stone-900">40+</div>
            <div className="text-[11px] uppercase tracking-wider text-stone-500">AWARDS AND HONORS</div>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 3. DISHES MENU: CATEGORY 1 (VARMARÄTTER / STEWS)                          */}
      {/* ========================================================================= */}
      <section className="space-y-10">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h3 className="font-sans text-2xl sm:text-3xl font-bold uppercase tracking-tight text-stone-900">
            DISHES MENU
          </h3>
          <p className="text-xs text-stone-500 font-light leading-relaxed">
            Appetizers tantalize your taste buds with their creativity and finesse. Perhaps you start with delicate marinades, featuring saffron and authentic stew atop golden rice.
          </p>
          <div className="pt-2">
            <h4 className="font-serif italic text-lg text-stone-800">Warm Dishes & Stews</h4>
            <p className="text-[11px] text-stone-400">Traditionella persiska grytor långkokta till perfektion</p>
          </div>
        </div>

        {/* 2-Column Dish Grid (Rectangular Photo + Title + Price + Orange Order Bag) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {mainStews.map((dish) => (
            <div key={dish.id} className="flex items-center justify-between gap-4 p-2 rounded-2xl hover:bg-[#FAF8F5] transition-colors group">
              <div className="flex items-center gap-4">
                {/* Rectangular Image */}
                <div className="w-16 h-14 sm:w-20 sm:h-16 rounded-xl overflow-hidden bg-stone-100 shrink-0 shadow-xs">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Info */}
                <div className="space-y-0.5">
                  <h5 className="font-sans text-xs sm:text-sm font-bold text-stone-900 group-hover:text-[#c6a04a] transition-colors">
                    {dish.name}
                  </h5>
                  <p className="text-[11px] text-stone-500 font-light line-clamp-1 max-w-[220px] sm:max-w-xs">
                    {dish.description}
                  </p>
                </div>
              </div>

              {/* Price & Action Button */}
              <div className="flex items-center gap-2 shrink-0">
                <span className="font-sans text-xs sm:text-sm font-bold text-stone-900">
                  {dish.price}
                </span>
                <button
                  onClick={() => handleOrder(dish.name)}
                  className="w-7 h-7 rounded-full bg-[#E07A5F] hover:bg-[#c6654c] text-white flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                  title="Beställ rätt"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CATEGORY 2: CONSIDER FOOD PAIRINGS (CIRCULAR DISHES)                   */}
      {/* ========================================================================= */}
      <section className="space-y-10 pt-6">
        <div className="text-center space-y-1">
          <h4 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
            Consider Food Pairings
          </h4>
          <p className="text-xs text-stone-500 font-light">
            Komplettera din måltid med traditionella röror, färska örtsallader och saffransdessert.
          </p>
        </div>

        {/* 2-Column Grid with Circular Plated Dishes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {pairings.map((dish) => (
            <div key={dish.id} className="flex items-center justify-between gap-4 p-2 rounded-2xl hover:bg-[#FAF8F5] transition-colors group">
              <div className="flex items-center gap-4">
                {/* Circular Dish Photo */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-stone-100 shrink-0 shadow-xs ring-2 ring-stone-200">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-0.5">
                  <h5 className="font-sans text-xs sm:text-sm font-bold text-stone-900 group-hover:text-[#c6a04a] transition-colors">
                    {dish.name}
                  </h5>
                  <p className="text-[11px] text-stone-500 font-light line-clamp-1 max-w-[220px] sm:max-w-xs">
                    {dish.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="font-sans text-xs sm:text-sm font-bold text-stone-900">
                  {dish.price}
                </span>
                <button
                  onClick={() => handleOrder(dish.name)}
                  className="w-7 h-7 rounded-full bg-[#E07A5F] hover:bg-[#c6654c] text-white flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                  title="Beställ rätt"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
