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
      description: 'Marinerad kycklingfilé i tomatsås, saffransris, zereshk (berberisbär) och pistagenötter.',
      price: '189 kr',
      image: '/images/zereshk-polo.jpg'
    },
    {
      id: 'ghormeh-sabzi',
      name: 'GHORMEH-SABZI',
      description: 'Traditionell persisk örtgryta med kidneybönor, mört kött och torkad svart lime.',
      price: '189 kr',
      image: '/images/ghormeh-sabzi.jpg'
    },
    {
      id: 'baghali-polo',
      name: 'BAGHALI-POLO MAHICHE',
      description: 'Långkokt mört lammlägg serveras med dill- och bondbönris.',
      price: '259 kr',
      image: '/images/baghali-polo.jpg'
    },
    {
      id: 'tahchin',
      name: 'TAHCHIN',
      description: 'Krispig saffransriskaka med kryddad kyckling, ägg och persisk yoghurt.',
      price: '189 kr',
      image: '/images/tahchin.jpg'
    },
    {
      id: 'gheymeh',
      name: 'GHEYMEH BADEMJAN',
      description: 'Gryta med gula linser, ugnsrostade auberginer, körsbärstomater och saffransris.',
      price: '189 kr',
      image: '/images/gheymeh.jpg'
    },
    {
      id: 'zaboon',
      name: 'ZABOON SPECIAL',
      description: 'Mör oxtunga i aromatisk buljong serveras med persiskt bröd och torshi.',
      price: '229 kr',
      image: '/images/zaboon.jpg'
    }
  ];

  const pairings = [
    {
      id: 'mazeh-tallrik',
      name: 'SIMA MAZEH TALLRIK',
      description: 'Urval av persiska röror – Kashke Bademjan, Olovieh, färska örter och nybakat bröd.',
      price: '219 kr',
      image: '/images/mazeh-tallrik.jpg'
    },
    {
      id: 'shirazi-salad',
      name: 'SALAD SHIRAZI',
      description: 'Fint tärnad gurka, tomat, rödlök, torkad mynta, olivolja och citron.',
      price: '65 kr',
      image: '/images/shirazi-salad.jpg'
    },
    {
      id: 'mastmoosir',
      name: 'MAST-O-MOOSIR',
      description: 'Krämig yoghurt smaksatt med vild persisk berglök och örter.',
      price: '69 kr',
      image: '/images/mastmoosir.jpg'
    },
    {
      id: 'olovieh',
      name: 'SALAD OLOVIEH',
      description: 'Klassisk persisk potatissallad med kyckling, gröna ärtor och saltgurka.',
      price: '89 kr',
      image: '/images/olovieh.jpg'
    },
    {
      id: 'koo-koo',
      name: 'KOO-KOO SABZI',
      description: 'Persisk färsk örtomelett med berberisbär, valnötter och vitlök.',
      price: '95 kr',
      image: '/images/koo-koo.jpg'
    },
    {
      id: 'sholeh-zard',
      name: 'SHOLEH ZARD',
      description: 'Traditionell saffransdessert med rosenvatten, kanel, pistage och mandel.',
      price: '79 kr',
      image: '/images/sholeh-zard.jpg'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#FAF8F5] pt-24 sm:pt-28 pb-24 font-sans animate-fadeIn text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Toast Alert */}
        {addedItem && (
          <div className="fixed top-24 right-8 z-50 bg-[#1C1917] text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 text-xs border border-stone-700 animate-slideDown">
            <Sparkles className="w-4 h-4 text-[#c6a04a]" />
            <span>Tillagd: <strong>{addedItem}</strong></span>
          </div>
        )}

      {/* ========================================================================= */}
      {/* 1. TOP HEADER & HERO SECTION                                              */}
      {/* ========================================================================= */}
      <div className="space-y-12">
        {/* Title & Breadcrumbs in Swedish */}
        <div className="text-center space-y-1">
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-stone-900">
            SIMA DELI MENY
          </h2>
          <div className="text-xs text-stone-400 font-medium">
            <span>Hem</span> / <span className="text-[#c6a04a]">Meny</span> / <span>Varmrätter</span>
          </div>
        </div>

        {/* Hero Banner: Platter Photo on Left, Story on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAF8F5] p-6 sm:p-10 rounded-3xl border border-stone-200">
          
          {/* Left: Complete Dish Photo without circular crop */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-xl ring-8 ring-white bg-white p-2.5 flex items-center justify-center">
              <img
                src="/images/zereshk-polo.jpg"
                alt="Sima Deli Zereshkpolo"
                className="w-full h-auto max-h-80 sm:max-h-96 object-contain rounded-2xl"
              />
            </div>
          </div>

          {/* Right: Swedish Header & Story */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#c6a04a]">
              <span>—</span>
              <span>BÄSTA KVALITET</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
              STOCKHOLMS MEST SMAKRIKA PERSISKA BORD.
            </h3>

            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed max-w-lg">
              Sedan grundandet har Sima Deli serverat autentisk persisk mat med högsta kvalitet på Valhallavägen 120. Varje rätt är omsorgsfullt tillagad från grunden med handplockat saffran och färska örter.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate && onNavigate('/om-oss/')}
                className="px-6 py-2.5 rounded-full bg-[#1C1917] hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm flex items-center gap-2"
              >
                <span>OM RESTAURANGEN</span>
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

        {/* 2. STAT COUNTERS ROW */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-4 border-b border-stone-200 pb-10 text-center md:text-left">
          <div className="col-span-2 md:col-span-1 flex items-center gap-2 text-xs text-stone-500 font-medium">
            <Sparkles className="w-4 h-4 text-[#c6a04a] shrink-0" />
            <span>Passion för traditionell persisk matlagning sedan starten</span>
          </div>

          <div className="space-y-0.5">
            <div className="font-sans text-2xl sm:text-3xl font-bold text-stone-900">200+</div>
            <div className="text-[11px] uppercase tracking-wider text-stone-500">DAGLIGA GÄSTER</div>
          </div>

          <div className="space-y-0.5">
            <div className="font-sans text-2xl sm:text-3xl font-bold text-stone-900">200+</div>
            <div className="text-[11px] uppercase tracking-wider text-stone-500">LEVERANSER I MÅNADEN</div>
          </div>

          <div className="space-y-0.5">
            <div className="font-sans text-2xl sm:text-3xl font-bold text-stone-900">1000+</div>
            <div className="text-[11px] uppercase tracking-wider text-stone-500">NÖJDA GÄSTER</div>
          </div>

          <div className="space-y-0.5">
            <div className="font-sans text-2xl sm:text-3xl font-bold text-stone-900">40+</div>
            <div className="text-[11px] uppercase tracking-wider text-stone-500">UNIKA PERSISKA RÄTTER</div>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 3. DISHES MENU: CATEGORY 1 (VARMARÄTTER / STEWS)                          */}
      {/* ========================================================================= */}
      <section className="space-y-10">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h3 className="font-sans text-2xl sm:text-3xl font-bold uppercase tracking-tight text-stone-900">
            VARMRÄTTER & GRYTOR
          </h3>
          <p className="text-xs text-stone-500 font-light leading-relaxed">
            Våra signaturrätter och traditionella persiska grytor tillagas långsamt från grunden med handplockat saffran, färska örter och finaste råvaror.
          </p>
          <div className="pt-2">
            <h4 className="font-serif italic text-lg text-stone-800">Klassiska Varmrätter</h4>
            <p className="text-[11px] text-stone-400">Traditionella persiska grytor långkokta till perfektion</p>
          </div>
        </div>

        {/* 2-Column Dish Grid with Whole Uncropped Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {mainStews.map((dish) => (
            <div key={dish.id} className="flex items-center justify-between gap-4 p-2.5 rounded-2xl hover:bg-[#FAF8F5] transition-colors group">
              <div className="flex items-center gap-4">
                {/* Full Uncropped Image */}
                <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-xl overflow-hidden bg-white border border-stone-200 shrink-0 shadow-xs p-1 flex items-center justify-center">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Info */}
                <div className="space-y-0.5">
                  <h5 className="font-sans text-xs sm:text-sm font-bold text-stone-900 group-hover:text-[#c6a04a] transition-colors">
                    {dish.name}
                  </h5>
                  <p className="text-[11px] text-stone-500 font-light line-clamp-2 max-w-[220px] sm:max-w-xs">
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
      {/* 4. CATEGORY 2: TILLBEHÖR & MAZEH (FULL UNCROPPED IMAGES)                   */}
      {/* ========================================================================= */}
      <section className="space-y-10 pt-6">
        <div className="text-center space-y-1">
          <h4 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
            Tillbehör, Mazeh & Sallader
          </h4>
          <p className="text-xs text-stone-500 font-light">
            Komplettera din måltid med traditionella röror, färska örtsallader och saffransdessert.
          </p>
        </div>

        {/* 2-Column Grid with Full Uncropped Dishes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {pairings.map((dish) => (
            <div key={dish.id} className="flex items-center justify-between gap-4 p-2.5 rounded-2xl hover:bg-[#FAF8F5] transition-colors group">
              <div className="flex items-center gap-4">
                {/* Full Uncropped Image */}
                <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-xl overflow-hidden bg-white border border-stone-200 shrink-0 shadow-xs p-1 flex items-center justify-center">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-0.5">
                  <h5 className="font-sans text-xs sm:text-sm font-bold text-stone-900 group-hover:text-[#c6a04a] transition-colors">
                    {dish.name}
                  </h5>
                  <p className="text-[11px] text-stone-500 font-light line-clamp-2 max-w-[220px] sm:max-w-xs">
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
    </div>
  );
};
