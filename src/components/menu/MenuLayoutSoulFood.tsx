import React, { useState, useEffect } from 'react';

interface MenuLayoutProps {
  onOpenBooking?: () => void;
  onNavigate?: (path: string) => void;
}

interface DishItem {
  name: string;
  price: string | number;
  smallPrice?: string | number;
  desc?: string;
  tag?: string;
  isWarningTag?: boolean;
}

interface MenuCategoryTab {
  id: string;
  label: string;
  note?: string;
  dishes: DishItem[];
}

const MENU_CATEGORIES: MenuCategoryTab[] = [
  {
    id: 'varma',
    label: 'Varma rätter',
    note: 'Serveras med saffransris, berberisbär (zereshk) eller enligt beskrivning.',
    dishes: [
      { name: 'Zereshk-Polo ba Morgh', price: '189 kr', desc: 'Marinerad kycklingfilé i tomatsås, serveras med saffransris och zereshk (berberisbär).' },
      { name: 'Gheymeh', price: '189 kr', desc: 'Köttgryta med gula linser, körsbärstomater, torkad lime, serveras med saffransris.' },
      { name: 'Veg. Gheymeh – Bademjan', price: '189 kr', desc: 'Gryta med gula linser, körsbärstomater, torkad lime och ugnsrostade auberginer, serveras med saffransris.', tag: 'Vegan Friendly' },
      { name: 'Ghormeh-Sabzi', price: '189 kr', desc: 'Köttgryta med örter, bönor och torkad lime, serveras med saffransris.' },
      { name: 'Veg. Ghormeh-Sabzi', price: '189 kr', desc: 'Gryta med örter, bönor och torkad lime, serveras med saffransris.', tag: 'Vegan Friendly' },
      { name: 'Baghali-Polo Mahiche', price: '259 kr', desc: 'Långkokt lammlägg serveras med saffransris med bondbönor och dill.' },
      { name: 'Tahchin', price: '189 kr', desc: 'Marinerad kyckling i yoghurt och ägg tillagad som en "Rice-Cake" med saffransris, toppad med zereshk.', tag: 'Serveras endast lördagar', isWarningTag: true },
      { name: 'Ash Reshte', price: '119 kr', desc: 'Vegetarisk örtsoppa med bönor och nudlar.', tag: 'Vegetarisk' },
      { name: 'Abgoosht', price: '249 kr', desc: 'Traditionell köttsoppa med bönor och tomat, serveras med Sangak-bröd och färska örter.' }
    ]
  },
  {
    id: 'mazeh',
    label: 'Mazeh-tallrik',
    note: 'Kombinera 3 valfria Mazeh från deli-disken för 189 kr, eller köp separat i liten/stor portion.',
    dishes: [
      { name: 'Morgh', price: '189 kr', desc: 'Ugnsgrillad kycklingfilé.' },
      { name: 'Kashke-Bademjan', price: 'Stor 179 kr', smallPrice: 'Liten 95 kr', desc: 'Ugnsrostade auberginer i röra med matlagningsyoghurt, rostad lök, färsk vitlök, valnötter och mynta.', tag: 'Vegetarisk' },
      { name: 'Olovieh', price: 'Stor 179 kr', smallPrice: 'Liten 95 kr', desc: 'Kycklingröra med potatis, ägg, majonnäs, ärtor och saltgurka.' },
      { name: 'Hummus', price: 'Stor 169 kr', smallPrice: 'Liten 89 kr', desc: 'Kikärter, tahini, olivolja, färsk vitlök och citronjuice.', tag: 'Vegan Friendly' },
      { name: 'Koo-Koo', price: 'Stor 169 kr', smallPrice: 'Liten 89 kr', desc: 'Vegetarisk örtomelett med zereshk (berberisbär), örter och vitlök.', tag: 'Vegetarisk' },
      { name: 'Baghali-Polo (vegetarisk)', price: 'Tallrik 189 kr', desc: 'Saffransris med dill och bondbönor.', tag: 'Vegetarisk' }
    ]
  },
  {
    id: 'sallader',
    label: 'Sallader',
    note: 'Alla sallader serveras med blandsallad, gurka, tomat och säsongens grönsaker.',
    dishes: [
      { name: 'Grillad kycklingfilé', price: '159 kr', desc: 'Serveras med fetaost och avokado eller chèvre och rödbetor.' },
      { name: 'Grillad halloumi', price: '169 kr', desc: 'Ugnsrostad aubergine, avokadocrème och säsongens frukt.', tag: 'Vegetarisk' }
    ]
  },
  {
    id: 'wraps',
    label: 'Wraps',
    note: 'Färska persiska wraps – perfekt lunch att äta här eller ta med.',
    dishes: [
      { name: 'Panir Sabzi wrap', price: '119 kr', desc: 'Fetaost, valnötter, mynta, gurka och tomat.', tag: 'Vegetarisk' },
      { name: 'Koo-Koo wrap', price: '119 kr', desc: 'Örtomelett med zereshk (berberisbär), sallad, tomat och saltgurka.', tag: 'Vegetarisk' },
      { name: 'Morgh wrap', price: '119 kr', desc: 'Kyckling, bulgur, hummus, pickles, tomat och persilja.' },
      { name: 'Olovieh wrap', price: '119 kr', desc: 'Kycklingröra med potatis, ägg, majonnäs, ärtor och saltgurka.' }
    ]
  },
  {
    id: 'tillbehor',
    label: 'Tillbehör',
    note: 'Traditionella persiska tillbehör och smårätter.',
    dishes: [
      { name: 'Torshi', price: '59 kr', desc: 'Sima Delis egna inlagda grönsaker.', tag: 'Vegan' },
      { name: 'Mastokhiar', price: '39 kr', desc: 'Yoghurt blandad med gurka och mynta.', tag: 'Vegetarisk' },
      { name: 'Mastomoosir', price: '39 kr', desc: 'Yoghurt med vildlök.', tag: 'Vegetarisk' },
      { name: 'Zeytoon Parvardeh', price: '49 kr', desc: 'Oliver marinerade med granatäpple, vitlök, valnötter, mynta och örter.', tag: 'Vegan' },
      { name: 'Salad Shirazi', price: '39 kr', desc: 'Tomat, gurka, rödlök, färskpressad citronjuice och olivolja.', tag: 'Vegan' }
    ]
  },
  {
    id: 'frukost',
    label: 'Persisk frukost',
    note: 'Barbari-bröd serveras med alla frukosträtter.',
    dishes: [
      { name: 'Nimro', price: '89 kr', desc: 'Stekta ägg med barbari-bröd.' },
      { name: 'Noon Panir', price: '89 kr', desc: 'Bröd, fetaost, gurka och tomat.', tag: 'Vegetarisk' },
      { name: 'Persisk omelett', price: '139 kr', desc: 'Ägg med färska tomater och barbari-bröd.' },
      { name: 'Sobhane-tallrik', price: '149 kr', desc: 'Smör, mascarpone, marmelad/honung, fetaost, gurka, tomater, färska örter, halvardeh, oliver och valnötter.' },
      { name: 'Halim', price: '119 kr', desc: 'Persisk gröt (innehåller kött, vete, smör).' },
      { name: 'Extra Barbari bröd', price: '20 kr', desc: 'Färskt traditionellt persiskt bröd.' }
    ]
  },
  {
    id: 'sott',
    label: 'Något sött',
    note: 'Traditionella persiska desserter och bakverk.',
    dishes: [
      { name: 'Sholeh Zard', price: '59 kr', desc: 'Rispudding smaksatt med saffran, kanel och riven mandel.', tag: 'Vegan Friendly' },
      { name: 'Baklava', price: '39 kr', desc: 'Innehåller även smör och nötter.' },
      { name: 'Shirini', price: '39 kr', desc: 'Persiska kakor (innehåller även smör och nötter).' }
    ]
  },
  {
    id: 'dryck',
    label: 'Drycker',
    dishes: [
      { name: 'Espresso', price: '35 kr' },
      { name: 'Dubbel espresso', price: '39 kr' },
      { name: 'Cappuccino', price: '45 kr' },
      { name: 'Café latte', price: '45 kr' },
      { name: 'Varm choklad', price: '39 kr' },
      { name: 'Kaffe', price: '39 kr' },
      { name: 'Chai ghand-pahlu', price: '39 kr' },
      { name: 'Chai Nabat', price: '49 kr', desc: 'Te serveras med persisk sockerklubba.' },
      { name: 'Ört-te', price: '49 kr', desc: 'Med persisk sockerklubba.' },
      { name: 'Läsk', price: '39 kr' },
      { name: 'Doogh', price: '39 kr', desc: 'Innehåller yoghurt och mynta.' },
      { name: 'Granatäppeljuice', price: '39 kr' },
      { name: 'Apelsinjuice', price: '39 kr' }
    ]
  }
];

export const MenuLayoutSoulFood: React.FC<MenuLayoutProps> = ({ onOpenBooking, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<string>('varma');
  const [statusText, setStatusText] = useState<string>('Valhallavägen 120, Östermalm');
  const [isOpenNow, setIsOpenNow] = useState<boolean>(false);
  const [todayDayIndex, setTodayDayIndex] = useState<number>(new Date().getDay());

  useEffect(() => {
    const HOURS: Record<number, [number, number] | null> = {
      0: [10, 17], // Söndag
      1: null,     // Måndag: Stängt
      2: [10, 19], // Tisdag
      3: [10, 19], // Onsdag
      4: [10, 19], // Torsdag
      5: [10, 19], // Fredag
      6: [10, 17], // Lördag
    };
    const DAYS = ['söndag', 'måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag'];

    try {
      const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Europe/Stockholm',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
      }).formatToParts(new Date());

      const o: Record<string, string> = {};
      parts.forEach((p) => { o[p.type] = p.value; });
      const map: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
      const d = map[o.weekday] ?? new Date().getDay();
      const m = (parseInt(o.hour, 10) % 24) * 60 + parseInt(o.minute, 10);
      setTodayDayIndex(d);

      const today = HOURS[d];
      if (today && m >= today[0] * 60 && m < today[1] * 60) {
        setIsOpenNow(true);
        setStatusText(`Öppet nu, stänger ${today[1]}:00`);
      } else {
        setIsOpenNow(false);
        const start = today && m < today[0] * 60 ? 0 : 1;
        for (let i = start; i <= 7; i++) {
          const dd = (d + i) % 7;
          const schedule = HOURS[dd];
          if (schedule) {
            const dayLabel = i === 0 ? 'idag' : i === 1 ? 'imorgon' : DAYS[dd];
            setStatusText(`Stängt, öppnar ${dayLabel} ${schedule[0]}:00`);
            break;
          }
        }
      }
    } catch {
      setStatusText('Valhallavägen 120, Östermalm');
    }
  }, []);

  const handleBookingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      window.open('https://www.simadeli.com/booking/', '_blank');
    }
  };

  const handleNavigateClick = (e: React.MouseEvent, path: string) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const id = path.substring(1);
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (path.startsWith('/') && onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  const activeCategory = MENU_CATEGORIES.find((c) => c.id === activeTab) || MENU_CATEGORIES[0];

  return (
    <div className="sima-deli-soulfood w-full min-h-screen text-[#231A2B] bg-[#F5F7F4] pt-20 sm:pt-24 antialiased selection:bg-[#E7A21B]/30 selection:text-[#231A2B]">
      {/* SCOPED STYLES & TYPOGRAPHY TO MATCH REFERENCE EXACTLY */}
      <style>{`
        .sima-deli-soulfood {
          --bg: #F5F7F4;
          --surface: #FFFFFF;
          --ink: #231A2B;
          --muted: #655B6B;
          --line: #DCE1DC;
          --pom: #A3203B;
          --on-pom: #FFFFFF;
          --saffron: #E7A21B;
          --teal: #0B6E75;
          --tint: #EAF1EE;
          font-family: 'Figtree', system-ui, -apple-system, sans-serif;
        }

        .sima-deli-soulfood h1, 
        .sima-deli-soulfood h2, 
        .sima-deli-soulfood h3,
        .sima-deli-soulfood .font-display {
          font-family: 'Bricolage Grotesque', 'Trebuchet MS', system-ui, sans-serif;
          letter-spacing: -0.015em;
        }

        /* PERSIAN TILE GEOMETRIC BAND */
        .sima-deli-soulfood .tiles-band {
          height: 14px;
          background:
            linear-gradient(45deg, var(--teal) 25%, transparent 25%) 0 0 / 28px 28px,
            linear-gradient(-45deg, var(--teal) 25%, transparent 25%) 0 0 / 28px 28px,
            linear-gradient(45deg, transparent 75%, var(--saffron) 75%) 0 0 / 28px 28px,
            linear-gradient(-45deg, transparent 75%, var(--pom) 75%) 0 0 / 28px 28px;
          background-color: var(--surface);
          border-bottom: 1px solid var(--line);
        }

        .sima-deli-soulfood section {
          scroll-margin-top: 86px;
        }
      `}</style>

      {/* TILE DECORATION BAND AT TOP */}
      <div className="tiles-band" aria-hidden="true" />

      {/* 1. HERO SECTION */}
      <section className="py-10 sm:py-16 lg:py-20">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="space-y-5">
              {/* Status Pill with Live Stockholm Hours */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EAF1EE] text-xs font-semibold text-[#231A2B] tracking-tight">
                <span
                  className={`w-2.5 h-2.5 rounded-full shrink-0 transition-colors ${
                    isOpenNow
                      ? 'bg-[#2FA36B] shadow-[0_0_0_4px_rgba(47,163,107,0.25)]'
                      : 'bg-[#655B6B]'
                  }`}
                />
                <span>{statusText}</span>
              </div>

              {/* Display Headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[4.5rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#231A2B]">
                Persian <span className="text-[#A3203B] italic font-normal">Soul Food</span> på Östermalm
              </h1>

              {/* Lede Text */}
              <p className="text-base sm:text-lg text-[#655B6B] leading-relaxed max-w-xl font-normal">
                Mammas persiska mat, lagad av mor och dotter med färska råvaror. Ät här eller ta med.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#meny"
                  onClick={(e) => handleNavigateClick(e, '#meny')}
                  className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-full bg-[#A3203B] text-white font-semibold text-[15px] hover:brightness-110 transition-all border-2 border-[#A3203B] shadow-xs cursor-pointer"
                >
                  Se menyn
                </a>
                <button
                  type="button"
                  onClick={handleBookingClick}
                  className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-full bg-transparent text-[#231A2B] font-semibold text-[15px] hover:bg-[#EAF1EE] transition-all border-2 border-[#231A2B] cursor-pointer"
                >
                  Boka bord
                </button>
              </div>
            </div>

            {/* Right: Official Sima Deli Logo Medallion */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-square rounded-full bg-white border-2 border-[#DCE1DC] shadow-lg flex items-center justify-center p-8 sm:p-12 group transition-all duration-300 hover:shadow-xl">
                {/* Decorative dashed inner circle ring inspired by the reference design */}
                <div className="absolute inset-3.5 sm:inset-5 rounded-full border-2 border-dashed border-[#0B6E75]/35 pointer-events-none" />
                <img
                  src="/images/logo.png"
                  alt="Sima Deli"
                  className="w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-105"
                  width="360"
                  height="360"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. "VAD VILL DU GÖRA?" TILES */}
      <section className="py-12 bg-white border-y border-[#DCE1DC]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#231A2B] tracking-tight mb-7">
            Vad vill du göra?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            <a
              href="#boka"
              onClick={handleBookingClick}
              className="flex flex-col justify-between p-5 rounded-2xl border border-[#DCE1DC] bg-[#FFFFFF] hover:border-[#A3203B] hover:shadow-sm transition-all group cursor-pointer"
            >
              <div>
                <h3 className="font-display text-lg font-bold text-[#231A2B] mb-1.5 group-hover:text-[#A3203B] transition-colors">
                  Äta här
                </h3>
                <p className="text-xs sm:text-[13px] text-[#655B6B] leading-relaxed">
                  Boka bord eller kom förbi. Tisdag till söndag.
                </p>
              </div>
              <span className="mt-4 pt-2 text-xs font-bold text-[#A3203B] flex items-center gap-1">
                Boka bord →
              </span>
            </a>

            <a
              href="#meny"
              onClick={(e) => handleNavigateClick(e, '#meny')}
              className="flex flex-col justify-between p-5 rounded-2xl border border-[#DCE1DC] bg-[#FFFFFF] hover:border-[#A3203B] hover:shadow-sm transition-all group cursor-pointer"
            >
              <div>
                <h3 className="font-display text-lg font-bold text-[#231A2B] mb-1.5 group-hover:text-[#A3203B] transition-colors">
                  Ta med
                </h3>
                <p className="text-xs sm:text-[13px] text-[#655B6B] leading-relaxed">
                  Titta på menyn och beställ i disken.
                </p>
              </div>
              <span className="mt-4 pt-2 text-xs font-bold text-[#A3203B] flex items-center gap-1">
                Se menyn →
              </span>
            </a>

            <a
              href="#hem"
              onClick={(e) => handleNavigateClick(e, '#hem')}
              className="flex flex-col justify-between p-5 rounded-2xl border border-[#DCE1DC] bg-[#FFFFFF] hover:border-[#A3203B] hover:shadow-sm transition-all group cursor-pointer"
            >
              <div>
                <h3 className="font-display text-lg font-bold text-[#231A2B] mb-1.5 group-hover:text-[#A3203B] transition-colors">
                  Få hemlevererat
                </h3>
                <p className="text-xs sm:text-[13px] text-[#655B6B] leading-relaxed">
                  Uber Eats, Foodora, Wolt eller Sima Express.
                </p>
              </div>
              <span className="mt-4 pt-2 text-xs font-bold text-[#A3203B] flex items-center gap-1">
                Välj tjänst →
              </span>
            </a>

            <a
              href="/catering/"
              onClick={(e) => handleNavigateClick(e, '/catering/')}
              className="flex flex-col justify-between p-5 rounded-2xl border border-[#DCE1DC] bg-[#FFFFFF] hover:border-[#A3203B] hover:shadow-sm transition-all group cursor-pointer"
            >
              <div>
                <h3 className="font-display text-lg font-bold text-[#231A2B] mb-1.5 group-hover:text-[#A3203B] transition-colors">
                  Catering
                </h3>
                <p className="text-xs sm:text-[13px] text-[#655B6B] leading-relaxed">
                  För företag och privatpersoner.
                </p>
              </div>
              <span className="mt-4 pt-2 text-xs font-bold text-[#A3203B] flex items-center gap-1">
                Läs mer →
              </span>
            </a>

            <a
              href="/sima-deli-matlador/"
              onClick={(e) => handleNavigateClick(e, '/sima-deli-matlador/')}
              className="flex flex-col justify-between p-5 rounded-2xl border border-[#DCE1DC] bg-[#FFFFFF] hover:border-[#A3203B] hover:shadow-sm transition-all group cursor-pointer"
            >
              <div>
                <h3 className="font-display text-lg font-bold text-[#231A2B] mb-1.5 group-hover:text-[#A3203B] transition-colors">
                  Matlådor
                </h3>
                <p className="text-xs sm:text-[13px] text-[#655B6B] leading-relaxed">
                  Sima Deli matlådor och prenumeration.
                </p>
              </div>
              <span className="mt-4 pt-2 text-xs font-bold text-[#A3203B] flex items-center gap-1">
                Läs mer →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. TABBED MENU SECTION ("DET VI LAGAR") */}
      <section className="py-14 sm:py-20" id="meny">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-[0.14em] uppercase text-[#0B6E75] block">
              Meny
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#231A2B] tracking-tight">
              Det vi lagar
            </h2>
            <p className="text-sm sm:text-base text-[#655B6B]">
              Persiska rätter lagade från grunden. Alla priser i kronor.
            </p>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto py-5 no-scrollbar border-b border-[#DCE1DC] mt-4" role="tablist">
            {MENU_CATEGORIES.map((cat) => {
              const isSelected = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  id={`tab-${cat.id}`}
                  aria-controls={`panel-${cat.id}`}
                  aria-selected={isSelected}
                  onClick={() => setActiveTab(cat.id)}
                  className={`shrink-0 min-h-[42px] px-5 py-2 rounded-full font-semibold text-sm transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#231A2B] text-white border-2 border-[#231A2B]'
                      : 'bg-white text-[#231A2B] border border-[#DCE1DC] hover:border-[#655B6B]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Category Note */}
          {activeCategory.note && (
            <p className="text-sm text-[#655B6B] font-medium pt-4 pb-2">
              {activeCategory.note}
            </p>
          )}

          {/* 2-Column Responsive Dish Grid with Dashed Dividers */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mt-2">
            {activeCategory.dishes.map((dish, idx) => (
              <li
                key={idx}
                className="py-4 border-b border-dashed border-[#DCE1DC] flex flex-col justify-center min-w-0"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-[17px] font-bold text-[#231A2B] flex flex-wrap items-center gap-2">
                    <span>{dish.name}</span>
                    {dish.tag && (
                      <span
                        className={`text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${
                          dish.isWarningTag
                            ? 'bg-[#A3203B]/10 text-[#A3203B]'
                            : 'bg-[#EAF1EE] text-[#0B6E75]'
                        }`}
                      >
                        {dish.tag}
                      </span>
                    )}
                  </h3>
                  
                  {/* Price */}
                  <div className="font-display font-extrabold text-[17px] text-[#231A2B] tabular-nums whitespace-nowrap text-right">
                    {dish.smallPrice ? (
                      <span className="flex flex-col text-right">
                        <span>{dish.price} <small className="text-[11px] font-normal text-[#655B6B]">stor</small></span>
                        <span className="text-sm text-[#655B6B] font-semibold">{dish.smallPrice} <small className="text-[10px] font-normal">liten</small></span>
                      </span>
                    ) : (
                      <span>{dish.price}</span>
                    )}
                  </div>
                </div>

                {dish.desc && (
                  <p className="text-[14px] text-[#655B6B] leading-relaxed mt-1 pr-4">
                    {dish.desc}
                  </p>
                )}
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* 4. ABOUT SECTION ("OM OSS") */}
      <section className="py-14 sm:py-20 bg-white border-t border-[#DCE1DC]" id="om-oss">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
            <div>
              <span className="text-xs font-bold tracking-[0.14em] uppercase text-[#0B6E75] block mb-2">
                Om oss
              </span>
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug text-[#231A2B]">
                Persisk mat som lagas av två generationer, mor och dotter, med en gemensam passion för det persiska köket.
              </p>
            </div>
            
            <div className="space-y-4 text-sm sm:text-base text-[#655B6B] leading-relaxed">
              <p>
                Mitt på Östermalm hittar du Sima Deli. Vi är kända för en genuin persisk matupplevelse med färska råvaror och passion. Vi kallar det <strong className="text-[#231A2B] font-bold">Persian Soul Food</strong>.
              </p>
              <p>
                Välkommen in och upplev mammas persiska mat i en varm och hemtrevlig atmosfär. Ät här eller ta med.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CATERING SECTION */}
      <section className="py-14 sm:py-20 border-t border-[#DCE1DC]" id="catering">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
            <div>
              <span className="text-xs font-bold tracking-[0.14em] uppercase text-[#0B6E75] block mb-2">
                Catering
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#231A2B] tracking-tight">
                Mat till dina gäster
              </h2>
            </div>
            
            <div className="space-y-5 text-sm sm:text-base text-[#655B6B] leading-relaxed">
              <p>
                Vi tar emot beställningar från företag och privatpersoner. Du kan också abonnera på lokal.
              </p>
              <p>
                Berätta vad du planerar så hjälper vi dig. Mejla oss på <strong className="text-[#231A2B] font-bold">info@simadeli.com</strong>.
              </p>
              <div>
                <a
                  href="/catering/"
                  onClick={(e) => handleNavigateClick(e, '/catering/')}
                  className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-full bg-[#A3203B] text-white font-semibold text-sm hover:brightness-110 transition-all border-2 border-[#A3203B] cursor-pointer"
                >
                  Se cateringsidan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MATLÅDOR SECTION */}
      <section className="py-14 sm:py-20 bg-white border-t border-[#DCE1DC]" id="matlador">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-[0.14em] uppercase text-[#0B6E75] block mb-2">
            Matlådor
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#231A2B] tracking-tight">
            Sima Deli matlådor och prenumeration
          </h2>
          <p className="text-sm sm:text-base text-[#655B6B] mt-2 max-w-2xl">
            Persisk husmanskost att ta med hem. Se aktuella lådor och prenumerationsalternativ på våra sidor.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-7 max-w-xl">
            <a
              href="/sima-deli-matlador/"
              onClick={(e) => handleNavigateClick(e, '/sima-deli-matlador/')}
              className="flex justify-between items-center p-4 sm:p-5 rounded-2xl border border-[#DCE1DC] bg-[#F5F7F4] hover:border-[#A3203B] hover:text-[#A3203B] font-semibold text-sm transition-all cursor-pointer"
            >
              <span>Matlådor</span>
              <span className="text-[#A3203B]">→</span>
            </a>
            <a
              href="/subscription/"
              onClick={(e) => handleNavigateClick(e, '/subscription/')}
              className="flex justify-between items-center p-4 sm:p-5 rounded-2xl border border-[#DCE1DC] bg-[#F5F7F4] hover:border-[#A3203B] hover:text-[#A3203B] font-semibold text-sm transition-all cursor-pointer"
            >
              <span>Prenumeration</span>
              <span className="text-[#A3203B]">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 7. HEMLEVERANS SECTION */}
      <section className="py-14 sm:py-20 border-t border-[#DCE1DC]" id="hem">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-[0.14em] uppercase text-[#0B6E75] block mb-2">
            Hemleverans
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#231A2B] tracking-tight">
            Beställ hem
          </h2>
          <p className="text-sm sm:text-base text-[#655B6B] mt-2">
            Välj den tjänst du brukar använda.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-7">
            <a
              href="https://www.ubereats.com/se/stockholm/food-delivery/sima-deli/pBEYZ_HZRgWyxgSeqmf14Q"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center p-4 sm:p-5 rounded-2xl border border-[#DCE1DC] bg-white hover:border-[#A3203B] hover:text-[#A3203B] font-semibold text-sm transition-all cursor-pointer"
            >
              <span>Uber Eats</span>
              <span className="text-[#A3203B]">→</span>
            </a>
            <a
              href="https://www.foodora.se/restaurant/s5hz/sima-deli"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center p-4 sm:p-5 rounded-2xl border border-[#DCE1DC] bg-white hover:border-[#A3203B] hover:text-[#A3203B] font-semibold text-sm transition-all cursor-pointer"
            >
              <span>Foodora</span>
              <span className="text-[#A3203B]">→</span>
            </a>
            <a
              href="https://wolt.com/en/swe/stockholm/restaurant/sima-deli"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center p-4 sm:p-5 rounded-2xl border border-[#DCE1DC] bg-white hover:border-[#A3203B] hover:text-[#A3203B] font-semibold text-sm transition-all cursor-pointer"
            >
              <span>Wolt</span>
              <span className="text-[#A3203B]">→</span>
            </a>
            <a
              href="/sima-express/"
              onClick={(e) => handleNavigateClick(e, '/sima-express/')}
              className="flex justify-between items-center p-4 sm:p-5 rounded-2xl border border-[#DCE1DC] bg-white hover:border-[#A3203B] hover:text-[#A3203B] font-semibold text-sm transition-all cursor-pointer"
            >
              <span>Sima Express</span>
              <span className="text-[#A3203B]">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. KONTAKT SECTION ("HITTA HIT") */}
      <section className="py-14 sm:py-20 bg-white border-t border-[#DCE1DC]" id="kontakt">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-[0.14em] uppercase text-[#0B6E75] block mb-2">
            Kontakt
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#231A2B] tracking-tight">
            Hitta hit
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Card 1: Adress */}
            <div className="p-6 rounded-2xl border border-[#DCE1DC] bg-[#F5F7F4] flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-[#231A2B] mb-3">
                  Adress
                </h3>
                <p className="text-sm text-[#655B6B] leading-relaxed">
                  Sima Deli<br />
                  Valhallavägen 120<br />
                  114 41 Stockholm
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Sima+Deli+Valhallav%C3%A4gen+120+Stockholm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-h-[40px] px-4 py-2 rounded-full border border-[#231A2B] text-xs font-semibold text-[#231A2B] hover:bg-[#EAF1EE] transition-all"
                >
                  Öppna i Google Maps
                </a>
              </div>
            </div>

            {/* Card 2: Telefon och e-post */}
            <div className="p-6 rounded-2xl border border-[#DCE1DC] bg-[#F5F7F4] flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-[#231A2B] mb-3">
                  Telefon och e-post
                </h3>
                <p className="text-sm text-[#655B6B] leading-relaxed">
                  08-660 36 35<br />
                  info@simadeli.com
                </p>
              </div>
              <div className="flex gap-2.5 mt-6">
                <a
                  href="https://www.instagram.com/sima_deli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-h-[40px] px-4 py-2 rounded-full border border-[#231A2B] text-xs font-semibold text-[#231A2B] hover:bg-[#EAF1EE] transition-all"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/Simadeli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-h-[40px] px-4 py-2 rounded-full border border-[#231A2B] text-xs font-semibold text-[#231A2B] hover:bg-[#EAF1EE] transition-all"
                >
                  Facebook
                </a>
              </div>
            </div>

            {/* Card 3: Öppettider with today indicator */}
            <div className="p-6 rounded-2xl border border-[#DCE1DC] bg-[#F5F7F4]">
              <h3 className="font-display text-lg font-bold text-[#231A2B] mb-3">
                Öppettider
              </h3>
              <ul className="space-y-1.5 text-xs sm:text-[13px] text-[#655B6B] tabular-nums">
                <li className={`flex justify-between py-1 px-2 rounded-md ${todayDayIndex === 1 ? 'bg-[#EAF1EE] text-[#231A2B] font-bold' : ''}`}>
                  <span>Måndag</span>
                  <span>Stängt</span>
                </li>
                <li className={`flex justify-between py-1 px-2 rounded-md ${todayDayIndex === 2 ? 'bg-[#EAF1EE] text-[#231A2B] font-bold' : ''}`}>
                  <span>Tisdag</span>
                  <span>10:00–19:00</span>
                </li>
                <li className={`flex justify-between py-1 px-2 rounded-md ${todayDayIndex === 3 ? 'bg-[#EAF1EE] text-[#231A2B] font-bold' : ''}`}>
                  <span>Onsdag</span>
                  <span>10:00–19:00</span>
                </li>
                <li className={`flex justify-between py-1 px-2 rounded-md ${todayDayIndex === 4 ? 'bg-[#EAF1EE] text-[#231A2B] font-bold' : ''}`}>
                  <span>Torsdag</span>
                  <span>10:00–19:00</span>
                </li>
                <li className={`flex justify-between py-1 px-2 rounded-md ${todayDayIndex === 5 ? 'bg-[#EAF1EE] text-[#231A2B] font-bold' : ''}`}>
                  <span>Fredag</span>
                  <span>10:00–19:00</span>
                </li>
                <li className={`flex justify-between py-1 px-2 rounded-md ${todayDayIndex === 6 ? 'bg-[#EAF1EE] text-[#231A2B] font-bold' : ''}`}>
                  <span>Lördag</span>
                  <span>10:00–17:00</span>
                </li>
                <li className={`flex justify-between py-1 px-2 rounded-md ${todayDayIndex === 0 ? 'bg-[#EAF1EE] text-[#231A2B] font-bold' : ''}`}>
                  <span>Söndag</span>
                  <span>10:00–17:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TILE DECORATION BAND AT BOTTOM */}
      <div className="tiles-band" aria-hidden="true" />
    </div>
  );
};

export default MenuLayoutSoulFood;
