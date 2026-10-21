import React, { useState, useEffect } from 'react';
import { RESTAURANT_INFO, DELIVERY_PARTNERS } from '../../data/siteData';

interface MenuLayoutProps {
  onOpenBooking?: () => void;
  onNavigate?: (path: string) => void;
}

interface DishItem {
  id?: string;
  name: string;
  price: string;
  smallPrice?: string;
  desc?: string;
  tag?: string;
  isWarningTag?: boolean;
}

interface MenuTabCategory {
  id: string;
  label: string;
  note?: string;
  dishes: DishItem[];
}

// 100% Original Sima Deli menu data & verified Stockholm prices from siteData.ts
const ORIGINAL_MENU_CATEGORIES: MenuTabCategory[] = [
  {
    id: 'varma',
    label: 'Varma rätter',
    note: 'Alla grytor och varma rätter serveras med saffransris.',
    dishes: [
      {
        id: 'zereshk-polo',
        name: 'Zereshkpolo ba Morgh',
        price: '189 kr',
        desc: 'Marinerad kycklingfilé i tomatsås, serveras med saffranris, zereshk (berberis bär) och pistagenötter.'
      },
      {
        id: 'gheymeh',
        name: 'Gheymeh',
        price: '189 kr',
        desc: 'Köttgryta med gula linser, körsbärstomater, torkad lime, serveras med saffran ris.'
      },
      {
        id: 'veg-gheymeh',
        name: 'Vegan Gheymeh Bademjan',
        price: '189 kr',
        desc: 'Gryta med gula linser, körsbärstomater, torkad lime och ugnsrostade auberginer serveras med saffran ris.',
        tag: 'Vegan'
      },
      {
        id: 'ghormeh-sabzi',
        name: 'Ghormeh-Sabzi',
        price: '189 kr',
        desc: 'Köttgryta med örter, bönor och torkade lime, serveras med saffran ris.'
      },
      {
        id: 'veg-ghormeh-sabzi',
        name: 'Veg. Ghormeh-Sabzi',
        price: '189 kr',
        desc: 'Gryta med örter, bönor och torkade lime, serveras med saffran ris.',
        tag: 'Vegan'
      },
      {
        id: 'baghali-polo',
        name: 'Baghali-Polo Mahiche',
        price: '259 kr',
        desc: 'Lång-kokt lammlägg serveras med saffranris med bondbönor och dill.'
      },
      {
        id: 'tahchin',
        name: 'Tahchin',
        price: '189 kr',
        desc: 'Marinerat kyckling i yoghurt och ägg tillagad tillsammans som en “Rice-Cake” med saffran ris, toppad med zereshk (berberis bär).',
        tag: 'Endast lördagar',
        isWarningTag: true
      },
      {
        id: 'zaboon',
        name: 'Zaboon',
        price: '229 kr',
        desc: 'Mörstekt ox-tunga tillagad i fyllig persisk kryddbuljong, serveras med färsk bröd, citronklyftor, rödlök och Torshi.'
      },
      {
        id: 'ash-reshte',
        name: 'Ash Reshte',
        price: '119 kr',
        desc: 'Vegetarisk ört soppa med bönor och nudlar.',
        tag: 'Vegetarisk'
      },
      {
        id: 'abgoosht',
        name: 'Abgoosht',
        price: '249 kr',
        desc: 'Traditionell persisk köttsoppa/gryta med bönor och tomat, serveras med Sangak bröd, Doogh, färska örter och Torshi.',
        tag: 'Endast söndagar',
        isWarningTag: true
      }
    ]
  },
  {
    id: 'mazeh',
    label: 'Mazeh',
    note: 'Mazeh-tallrik: Kombinera 3 valfria Mazeh från deli disken för 189 kr. Kan även beställas separat som liten eller stor.',
    dishes: [
      {
        name: 'Morgh',
        price: 'Tallrik',
        desc: 'Ugnsgrillad mör kycklingfilé.'
      },
      {
        name: 'Olovieh',
        price: '179 kr',
        smallPrice: '95 kr',
        desc: 'Kycklingröra med potatis, ägg, majonnäs, ärtor och saltgurka.'
      },
      {
        name: 'Kashke-Bademjan',
        price: '179 kr',
        smallPrice: '95 kr',
        desc: 'Ugnsrostade auberginer i röra med matlagningsyoghurt, rostad lök, färsk vitlök, valnötter och mynta.',
        tag: 'Vegetarisk'
      },
      {
        name: 'Hummus',
        price: '169 kr',
        smallPrice: '89 kr',
        desc: 'Kikärter, tahini, olivolja, färsk vitlök och citronjuice.',
        tag: 'Vegan'
      },
      {
        name: 'Koo-Koo',
        price: '169 kr',
        smallPrice: '89 kr',
        desc: 'Vegetarisk ört-omelett med Zereshk (berberis bär), örter och vitlök.',
        tag: 'Vegetarisk'
      },
      {
        name: 'Baghali-Polo',
        price: 'Tallrik',
        desc: 'Saffranris med dill och bondbönor.',
        tag: 'Vegetarisk'
      }
    ]
  },
  {
    id: 'sallad',
    label: 'Sallader & Wraps',
    note: 'Alla sallader serveras med blandsallad, gurka, tomat och säsongens grönsaker.',
    dishes: [
      {
        name: 'Grillad Kycklingfilé Sallad',
        price: '159 kr',
        desc: 'Serveras med blandsallad, gurka och tomat. Välj mellan Fetaost och avokado eller Chevré och rödbetor.'
      },
      {
        name: 'Grillad Halloumi Sallad',
        price: '169 kr',
        desc: 'Ugnsrostad aubergine, avokado crème, säsongens frukt och krispig halloumi.',
        tag: 'Vegetarisk'
      },
      {
        name: 'Panir Sabzi Wrap',
        price: '119 kr',
        desc: 'Fetaost, valnötter, färsk mynta, krispig gurka och solmogna tomater.',
        tag: 'Vegetarisk'
      },
      {
        name: 'Koo-Koo Wrap',
        price: '119 kr',
        desc: 'Ört omelett med Zereshk (berberis bär), sallad, tomat, saltgurka.',
        tag: 'Vegetarisk'
      },
      {
        name: 'Morgh Wrap',
        price: '119 kr',
        desc: 'Kyckling, bulgur, krämig hummus, pickles, tomat, färsk persilja.'
      },
      {
        name: 'Olovieh Wrap',
        price: '119 kr',
        desc: 'Kycklingröra med potatis, ägg, majonnäs, ärtor och krispig saltgurka.'
      }
    ]
  },
  {
    id: 'frukost',
    label: 'Persisk Frukost',
    note: 'Färskt traditionellt Barbari-bröd ingår till alla frukosträtter. Extra bröd 20 kr.',
    dishes: [
      {
        name: 'Nimro',
        price: '89 kr',
        desc: 'Stekta ägg med färskt barbari-bröd.',
        tag: 'Vegetarisk'
      },
      {
        name: 'Noon Panir',
        price: '89 kr',
        desc: 'Färskt barbari-bröd med krämig fetaost, gurka och tomater.',
        tag: 'Vegetarisk'
      },
      {
        name: 'Persisk Omelett',
        price: '139 kr',
        desc: 'Ägg tillagade med färska tomater, persiska kryddor och barbari bröd.',
        tag: 'Vegetarisk'
      },
      {
        name: 'Sobhane Tallrik',
        price: '149 kr',
        desc: 'Smör, mascarpone, marmelad/honung, fetaost, gurka, tomater, färska örter, halvardeh, oliver och valnötter.',
        tag: 'Vegetarisk'
      },
      {
        name: 'Halim',
        price: '119 kr',
        desc: 'Traditionell persisk frukostgröt (innehåller kött, vete och smör).'
      },
      {
        name: 'Extra Barbari Bröd',
        price: '20 kr',
        desc: 'Nybakat traditionellt persiskt sesamstrött bröd.',
        tag: 'Vegetarisk'
      }
    ]
  },
  {
    id: 'sott',
    label: 'Sött & Tillbehör',
    note: 'Traditionella persiska desserter och småplock. Baklava och shirini innehåller smör och nötter.',
    dishes: [
      {
        name: 'Sholezard',
        price: '59 kr',
        desc: 'Persisk rispudding smaksatt med saffran, kanel, pistagenötter, riven mandel och rosenblad.',
        tag: 'Vegan'
      },
      {
        name: 'Baklava',
        price: '39 kr',
        desc: 'Klassisk krispig baklava med pistage och valnötter.',
        tag: 'Vegetarisk'
      },
      {
        name: 'Shirini',
        price: '39 kr',
        desc: 'Persiska hembakade kakor (innehåller smör och nötter).',
        tag: 'Vegetarisk'
      },
      {
        name: 'Torshi',
        price: '59 kr',
        desc: 'Sima Deli’s egna inlagda persiska grönsaker.',
        tag: 'Vegan'
      },
      {
        name: 'Mastokhiar',
        price: '39 kr',
        desc: 'Silkeslen yoghurt blandad med riven gurka och torkad mynta.',
        tag: 'Vegetarisk'
      },
      {
        name: 'Mastmoosir',
        price: '39 kr',
        desc: 'Traditionell persisk yoghurt med vildlök och mynta.',
        tag: 'Vegetarisk'
      },
      {
        name: 'Zeytoon Parvardeh',
        price: '49 kr',
        desc: 'Oliver marinerade med granatäpplesirap, vitlök, valnötter, mynta och örter.',
        tag: 'Vegan'
      },
      {
        name: 'Shirazi-Sallad',
        price: '39 kr',
        desc: 'Fint tärnad tomat, gurka, rödlök, färskpressad citronjuice och extra jungfruolivolja.',
        tag: 'Vegan'
      }
    ]
  },
  {
    id: 'dryck',
    label: 'Drycker',
    note: 'Varma persiska tespecialiteter, kaffe och kylda drycker.',
    dishes: [
      { name: 'Espresso', price: '35 kr' },
      { name: 'Dubbel Espresso', price: '39 kr' },
      { name: 'Cappuccino', price: '45 kr' },
      { name: 'Café Latte', price: '45 kr' },
      { name: 'Kaffe', price: '39 kr' },
      { name: 'Varm Choklad', price: '39 kr' },
      { name: 'Chai ghand-pahlu', price: '39 kr', desc: 'Traditionellt svart bryggt te med kardemumma.' },
      { name: 'Chai Nabat', price: '49 kr', desc: 'Svart persiskt te serverat med saffranssockerklubba.' },
      { name: 'Ört-te', price: '49 kr', desc: 'Utvalt ört-te serverat med sockerklubba.' },
      { name: 'Doogh', price: '39 kr', desc: 'Traditionell svalkande persisk yoghurtdryck med torkad mynta.' },
      { name: 'Granatäpple juice', price: '39 kr' },
      { name: 'Apelsin Juice', price: '39 kr' },
      { name: 'Läsk', price: '39 kr' }
    ]
  }
];

export const MenuLayoutClassic: React.FC<MenuLayoutProps> = ({ onOpenBooking, onNavigate }) => {
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
      window.open(RESTAURANT_INFO.bookingDirectUrl, '_blank');
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

  const activeCategory = ORIGINAL_MENU_CATEGORIES.find((c) => c.id === activeTab) || ORIGINAL_MENU_CATEGORIES[0];

  return (
    <div className="sima-deli-classic w-full min-h-screen text-[#231A2B] bg-[#F5F7F4] pt-20 sm:pt-24 antialiased selection:bg-[#E7A21B]/30 selection:text-[#231A2B]">
      {/* SCOPED STYLES & TYPOGRAPHY TO MATCH REFERENCE */}
      <style>{`
        .sima-deli-classic {
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

        .sima-deli-classic h1, 
        .sima-deli-classic h2, 
        .sima-deli-classic h3,
        .sima-deli-classic .font-display {
          font-family: 'Bricolage Grotesque', 'Trebuchet MS', system-ui, sans-serif;
          letter-spacing: -0.015em;
        }

        /* PERSIAN TILE GEOMETRIC BAND */
        .sima-deli-classic .tiles-band {
          height: 14px;
          background:
            linear-gradient(45deg, var(--teal) 25%, transparent 25%) 0 0 / 28px 28px,
            linear-gradient(-45deg, var(--teal) 25%, transparent 25%) 0 0 / 28px 28px,
            linear-gradient(45deg, transparent 75%, var(--saffron) 75%) 0 0 / 28px 28px,
            linear-gradient(-45deg, transparent 75%, var(--pom) 75%) 0 0 / 28px 28px;
          background-color: var(--surface);
          border-bottom: 1px solid var(--line);
        }

        .sima-deli-classic section {
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
                {RESTAURANT_INFO.storySnippet} Ät här eller ta med.
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

            {/* Right: Plate Illustration (Persian Rice, Berberis & Dill Garnishes) */}
            <div className="flex items-center justify-center">
              <svg
                className="w-full max-w-[380px] sm:max-w-[420px] h-auto drop-shadow-sm"
                viewBox="0 0 400 400"
                role="img"
                aria-label="Tallrik med saffransris, berberisbär och örter"
              >
                <circle cx="200" cy="200" r="190" fill="#FFFFFF" stroke="#DCE1DC" strokeWidth="2" />
                <circle cx="200" cy="200" r="168" fill="none" stroke="#0B6E75" strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round" />
                <circle cx="200" cy="200" r="132" fill="#E7A21B" />
                <circle cx="200" cy="200" r="132" fill="none" stroke="#231A2B" strokeOpacity="0.12" strokeWidth="2" />
                <g fill="#A3203B">
                  <circle cx="150" cy="150" r="9" /><circle cx="215" cy="125" r="8" /><circle cx="262" cy="170" r="9" />
                  <circle cx="130" cy="215" r="8" /><circle cx="190" cy="190" r="10" /><circle cx="250" cy="235" r="9" />
                  <circle cx="170" cy="260" r="8" /><circle cx="225" cy="285" r="9" /><circle cx="285" cy="215" r="7" />
                  <circle cx="205" cy="230" r="7" /><circle cx="160" cy="105" r="6" />
                </g>
                <g stroke="#0B6E75" strokeWidth="5" strokeLinecap="round">
                  <path d="M170 135l14 -9" /><path d="M235 150l12 10" /><path d="M148 185l-12 12" /><path d="M265 200l14 -4" />
                  <path d="M200 160l4 -15" /><path d="M180 232l-14 4" /><path d="M240 262l-8 12" /><path d="M135 245l12 8" />
                  <path d="M270 140l10 -8" /><path d="M200 300l-6 -12" />
                </g>
              </svg>
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
              Persiska rätter lagade från grunden med äkta råvaror och kärlek.
            </p>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto py-5 no-scrollbar border-b border-[#DCE1DC] mt-4" role="tablist">
            {ORIGINAL_MENU_CATEGORIES.map((cat) => {
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
                Mitt på Östermalm på {RESTAURANT_INFO.address.street} hittar du Sima Deli. Vi är kända för en genuin persisk matupplevelse med färska råvaror och passion. Vi kallar det <strong className="text-[#231A2B] font-bold">Persian Soul Food</strong>.
              </p>
              <p>
                {RESTAURANT_INFO.storySnippet}
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
                Berätta vad du planerar så hjälper vi dig. Mejla oss på <strong className="text-[#231A2B] font-bold">{RESTAURANT_INFO.email}</strong> eller ring <strong className="text-[#231A2B] font-bold">{RESTAURANT_INFO.phone}</strong>.
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
            {DELIVERY_PARTNERS.map((partner) => (
              <a
                key={partner.id}
                href={partner.url}
                target={partner.isInternal ? '_self' : '_blank'}
                rel={partner.isInternal ? undefined : 'noopener noreferrer'}
                onClick={(e) => {
                  if (partner.isInternal) {
                    handleNavigateClick(e, partner.url);
                  }
                }}
                className="flex justify-between items-center p-4 sm:p-5 rounded-2xl border border-[#DCE1DC] bg-white hover:border-[#A3203B] hover:text-[#A3203B] font-semibold text-sm transition-all cursor-pointer"
              >
                <span>{partner.name}</span>
                <span className="text-[#A3203B]">→</span>
              </a>
            ))}
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
                  {RESTAURANT_INFO.name}<br />
                  {RESTAURANT_INFO.address.street}<br />
                  {RESTAURANT_INFO.address.postalCode} {RESTAURANT_INFO.address.city}
                </p>
              </div>
              <div className="mt-6">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${RESTAURANT_INFO.name} ${RESTAURANT_INFO.address.street} ${RESTAURANT_INFO.address.city}`
                  )}`}
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
                  <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="hover:underline">{RESTAURANT_INFO.phone}</a><br />
                  <a href={`mailto:${RESTAURANT_INFO.email}`} className="hover:underline">{RESTAURANT_INFO.email}</a>
                </p>
              </div>
              <div className="flex gap-2.5 mt-6">
                <a
                  href={RESTAURANT_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-h-[40px] px-4 py-2 rounded-full border border-[#231A2B] text-xs font-semibold text-[#231A2B] hover:bg-[#EAF1EE] transition-all"
                >
                  Instagram
                </a>
                <a
                  href={RESTAURANT_INFO.socials.facebook}
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

export default MenuLayoutClassic;
