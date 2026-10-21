import React, { useEffect, useState } from 'react';

// Transcribed from https://www.simadeli.com/meny/ on 2026-10-21.
// Original spelling, prices and dietary labels are retained. Line-wrap whitespace is normalized.
type MenuItemData = { name: string; description: string; price?: string; label?: string };
type MenuCategory = { id: string; title: string; intro?: string; note?: string; items: MenuItemData[] };

const dish = (name: string, description: string, price?: string, label?: string): MenuItemData => ({ name, description, price, label });

const menu: MenuCategory[] = [
  {
    id: 'varma', title: 'VARMA PERSISKA RÄTTER', items: [
      dish('ZERESHK-POLO BA MORGH', 'Marinerad kycklingfilé i tomatsås, serveras med saffran ris, zereshk (berberis bär)', '189 kr'),
      dish('GHEYMEH', 'Köttgryta med gula linser, körsbärstomater, torkade lime, serveras med saffran ris', '189 kr'),
      dish('VEG. GHEYMEH – Bademjan', 'Gryta med gula linser, körsbärstomater, torkad lime och ugnsrostade auberginer serveras med saffran ris', '189 kr', 'Vegan Friendly'),
      dish('GHORMEH-SABZI', 'Köttgryta med örter, bönor och torkade lime, serveras med saffran ris', '189 kr'),
      dish('BAGHALI-POLO MAHICHE', 'Lång-kokt lammlägg serveras med saffran ris med bondbönor och dill', '259 kr'),
      dish('TAHCHIN', 'Marinerat kyckling i yoghurt och ägg tillagad tillsammans som en “Rice-Cake” med saffran ris, toppad med zereshk (berberis bär)', '189 kr', 'serveras endast på lördagar'),
      dish('VEG. GHORMEH-SABZI', 'Gryta med örter, bönor och torkade lime, serveras med saffran ris', '189 kr', 'Vegan Friendly'),
      dish('ASH RESHTE', 'Vegetarisk ört soppa med bönor och nudlar', '119 kr'),
      dish('Abgoosht', 'Traditionell köttsoppa med bönor och tomat, serveras med Sangak bröd och färska örter', '249 kr'),
    ]
  },
  {
    id: 'mazeh', title: 'MAZEH-TALLRIK', intro: 'Kombinera 3 valfria Mazeh från deli disken – 189 kr', items: [
      dish('MORGH', 'Ugns grillad kycklingfilé'),
      dish('KOO-KOO', 'Vegetarisk ört omelett med Zereshk (berberis bär), örter och vitlök'),
      dish('OLOVIEH', 'Kyckling röra med potatis, ägg, majonnäs, ärtor och saltgurka'),
      dish('BAGHALI-POLO (vegetarisk)', 'Saffran ris med dill och bondbönor'),
      dish('KASHKE-BADEMJAN', 'Ugnsrostade auberginer i röra med matlagnings- yoghurt, rostad lök, färsk vitlök, valnötter, mynta'),
      dish('HUMMUS', 'Kikärter, tahini, olivolja, färsk vitlök och citron juice', undefined, 'Vegan Friendly'),
    ]
  },
  {
    id: 'sallader', title: 'SALLADER', intro: 'Alla sallader serveras med blandsallad, gurka och tomat och säsongs grönsaker', items: [
      dish('GRILLAD KYCKLINGFILÉ', 'Fetaost och avokado eller Chevré och rödbetor', '159 kr'),
      dish('GRILLAD HALLOUMI', 'Ugnsrostad aubergine, avokado crème, säsongens frukt', '169 kr'),
    ]
  },
  {
    id: 'wraps', title: 'WRAPS', items: [
      dish('PANIR SABZI', 'Fetaost, valnötter, mynta, gurka, tomat', '119 kr'),
      dish('KOO-KOO WRAP', 'Ört omelett med Zereshk (berberis bär), sallad, tomat, saltgurka', '119 kr'),
      dish('MORGH WRAP', 'Kyckling, bulgur, hummus, pickles, tomat, persilja', '119 kr'),
      dish('OLOVIEH WRAP', 'Kyckling röra med potatis, ägg, majonnäs, ärtor och saltgurka', '119 kr'),
    ]
  },
  {
    id: 'tillbehor', title: 'TILLBEHÖR', items: [
      dish('TORSHI', 'Sima Deli’s egna inlagda grönsaker', '59 kr'),
      dish('MASTOKHIAR', 'Yoghurt blandad med gurka och mynta', '39 kr'),
      dish('MASTOMOOSIR', 'Yoghurt med vildlök', '39 kr'),
      dish('ZEYTOON PARVARDEH', 'Oliver marinerat med granatäpple,vitlök,valnötter,mynta,örter', '49 kr'),
      dish('SALAD SHIRAZI', 'Tomat, gurka, rödlök, färskpressat citron juice och olivolja', '39 kr'),
      dish('Olovieh', 'Kyckling röra, potatis, ägg, majonnäs, ärtor saltgurka', 'Liten 95 · Stor 179 kr'),
      dish('Kashke-Bademjan', 'Vegetarisk ugnsrostade auberginer i röra med matlagnings- yoghurt, rostad lök, färsk vitlök, valnötter och mynta', 'Liten 95 · Stor 179 kr'),
      dish('HUMMUS', 'Kikärter, tahini, olivolja, färsk vitlök och citron juice', 'Liten 89 · Stor 169 kr', 'Vegan Friendly'),
      dish('KOO-KOO', 'Vegetarisk ört-omelett med Zereshk (berberis bär) och vitlök', 'Liten 89 · Stor 169 kr'),
    ]
  },
  {
    id: 'frukost', title: 'PERSISK FRUKOST', note: 'Barbari bröd serveras med alla frukost-rätter', items: [
      dish('NIMRO', 'Stekta ägg med barbari bröd', '89 kr'),
      dish('NOON PANIR', 'Bröd, fetaost, gurka, tomat', '89 kr'),
      dish('PERSISK OMELETT', 'Ägg med färska tomater och barbari bröd', '139 kr'),
      dish('SOBHANE TALLRIK', 'Smör, mascarpone, marmelad/honung, fetaost, gurka, tomater, färska örter, halvardeh, oliver och valnötter', '149 kr'),
      dish('HALIM', 'Persisk gröt (innehåller kött, vete, smör)', '119 kr'),
      dish('Extra Barbari bröd', '', '20 kr'),
    ]
  },
  {
    id: 'sott', title: 'NÅGOT SÖTT', items: [
      dish('SHOLEH ZARD', 'Rispudding smaksatt med saffran, kanel, riven mandel', '59 kr', 'VEGAN Friendly'),
      dish('BAKLAVA', '(innehåller även smör och nötter)', '39 kr'),
      dish('SHIRINI', 'Persiska kakor (innehåller även smör och nötter)', '39 kr'),
    ]
  },
  {
    id: 'drycker', title: 'DRYCKER', items: [
      dish('Espresso', '', '35 kr'), dish('Dubbel Espresso', '', '39 kr'),
      dish('Cappuccino', '', '45 kr'), dish('Café Latte', '', '45 kr'),
      dish('Varm Choklad', '', '39 kr'), dish('Kaffe', '', '39 kr'),
      dish('ChaiChai ghand-pahlu', '', '39 kr'), dish('Chai Nabat (te med sockerklubba)', '', '49 kr'),
      dish('Ört-te (med sockerklubba)', '', '49 kr'), dish('Läsk', '', '39 kr'),
      dish('Doogh (innehåller yoghurt och mynta)', '', '39 kr'),
      dish('Granatäpple juice', '', '39 kr'), dish('Apelsin Juice', '', '39 kr'),
    ]
  },
];

const deliveryLinks: [string, string][] = [
  ['Uber', 'https://www.ubereats.com/se/stockholm/food-delivery/sima-deli/pBEYZ_HZRgWyxgSeqmf14Q'],
  ['Foodora', 'https://www.foodora.se/restaurant/s5hz/sima-deli'],
  ['Wolt', 'https://wolt.com/en/swe/stockholm/restaurant/sima-deli'],
  ['Sima Express', '/sima-express/'],
];

const siteLinks: [string, string][] = [
  ['Om Oss', '/om-oss/'],
  ['Meny', '/meny/'],
  ['Catering', '/catering/'],
  ['Sima Deli matlådor', '/sima-deli-matlador/'],
  ['Kontakt', '/kontakt/'],
];

const bookingUrl = 'https://www.simadeli.com/?page_id=1110';

interface MenuItemProps {
  item: MenuItemData;
}

function MenuItem({ item }: MenuItemProps) {
  return (
    <li className="border-b border-[#c6a149]/25 py-6 last:border-b-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-2">
        <h3 className="min-w-0 flex-1 text-[15px] font-semibold leading-relaxed tracking-[0.025em] text-[#1C1917]">
          {item.name}
        </h3>
        {item.price && (
          <span className="whitespace-nowrap text-sm tabular-nums text-[#292723] font-medium">
            {item.price}
          </span>
        )}
      </div>
      {item.description && (
        <p className="mt-2 max-w-xl text-[15px] leading-7 text-[#292723]/75">
          {item.description}
        </p>
      )}
      {item.label && (
        <p className="mt-3 text-xs italic leading-relaxed text-[#8B7355] font-medium">
          {item.label}
        </p>
      )}
    </li>
  );
}

interface MenuLayoutClassicProps {
  onOpenBooking?: () => void;
  onNavigate?: (path: string) => void;
}

export const MenuLayoutClassic: React.FC<MenuLayoutClassicProps> = ({ onOpenBooking, onNavigate }) => {
  const [active, setActive] = useState(menu[0].id);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    // Keep the category highlight in step with scrolling, including the final section.
    const update = () => {
      const categoryNav = document.querySelector('.category-nav') as HTMLElement | null;
      const threshold = window.innerWidth >= 1024 ? 120 : (categoryNav ? categoryNav.offsetHeight + 60 : 160);
      let current = menu[0].id;
      for (const category of menu) {
        const el = document.getElementById(category.id);
        if (el && el.getBoundingClientRect().top <= threshold) {
          current = category.id;
        }
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        current = menu[menu.length - 1].id;
      }
      setActive(current);
    };

    const categoryNav = document.querySelector('.category-nav') as HTMLElement | null;
    let observer: ResizeObserver | null = null;
    if (categoryNav) {
      observer = new ResizeObserver(() => {
        document.documentElement.style.setProperty('--category-height', `${categoryNav.offsetHeight}px`);
        update();
      });
      observer.observe(categoryNav);
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  useEffect(() => {
    if (!navOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setNavOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [navOpen]);

  const handleBookingClick = (e: React.MouseEvent) => {
    if (onOpenBooking) {
      e.preventDefault();
      onOpenBooking();
    }
  };

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('/') && onNavigate) {
      e.preventDefault();
      onNavigate(href);
      setNavOpen(false);
    }
  };

  return (
    <div className="sima-deli-menu bg-[#F5F0E7] font-sans text-[#292723] antialiased pt-20 sm:pt-24 pb-20">
      <style>{`
        .sima-deli-menu .menu-section { scroll-margin-top: calc(var(--category-height, 140px) + 32px); }
        .sima-deli-menu .skip-link { position: fixed; top: -100px; left: 16px; z-index: 100; padding: 12px 20px; background: white; }
        .sima-deli-menu .skip-link:focus { top: 12px; }
        .sima-deli-menu a:focus-visible, .sima-deli-menu button:focus-visible { outline: 2px solid #8B7355; outline-offset: 5px; }
        .sima-deli-menu ::selection { background: #cdecfc; color: #292723; }
        @media (min-width: 1024px) { .sima-deli-menu .menu-section { scroll-margin-top: 100px; } }
        @media (max-width: 380px) { .sima-deli-menu .category-link { font-size: 9px; padding: 8px; } }
      `}</style>

      <a className="skip-link" href="#menu-content">Till menyn</a>


      <main>
        {/* HERO TITLE SECTION */}
        <div className="mx-auto max-w-[1240px] px-5 pb-10 pt-10 sm:px-10 sm:pb-14 sm:pt-14">
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.24em] text-[#8B7355] font-semibold">
            <span className="h-px w-10 bg-[#c6a149]" />
            Sima Deli · Stockholm
          </div>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-5">
            <h1 className="font-serif text-[clamp(3.5rem,8vw,6.5rem)] leading-none tracking-[-0.06em] text-[#1C1917]">
              Meny<span className="text-[#c6a149]">.</span>
            </h1>
            <a
              href="#varma"
              className="pb-2 text-sm text-[#8B7355] hover:text-[#1C1917] transition-colors font-medium"
            >
              VARMA PERSISKA RÄTTER <span aria-hidden="true" className="ml-4">↓</span>
            </a>
          </div>
        </div>

        {/* 2-COLUMN MENU WITH STICKY SIDEBAR NAVIGATION */}
        <div className="menu-layout mx-auto max-w-[1240px] items-start border-t border-[#c6a149]/40 lg:grid lg:grid-cols-[245px_minmax(0,1fr)] lg:gap-16 lg:px-10">
          <nav
            aria-label="Menykategorier"
            className="category-nav sticky top-16 z-20 border-b border-[#c6a149]/30 bg-[#F5F0E7]/95 px-5 py-4 backdrop-blur-sm lg:top-24 lg:border-b-0 lg:px-0 lg:py-8"
          >
            <div className="mb-5 hidden text-[10px] tracking-[0.22em] text-[#8B7355] font-bold lg:block">
              MENY
            </div>
            <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
              {menu.map((category, i) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  aria-current={active === category.id ? 'location' : undefined}
                  onClick={() => setActive(category.id)}
                  className={`category-link flex items-center gap-3.5 px-3 py-2.5 text-[10px] tracking-wide lg:px-4 lg:py-3.5 lg:text-[11px] rounded-lg transition-colors font-medium ${active === category.id
                    ? 'bg-[#cdecfc] text-[#292723] font-bold shadow-2xs'
                    : 'text-[#292723]/70 hover:bg-white/70'
                    }`}
                >
                  <span aria-hidden="true" className="hidden font-serif text-xs text-[#8B7355] lg:inline font-bold">
                    0{i + 1}
                  </span>
                  <span>{category.title}</span>
                </a>
              ))}
            </div>

            <div className="mt-9 hidden border-t border-[#c6a149]/40 pt-6 lg:block">
              <span className="text-[10px] tracking-[0.18em] text-[#8B7355] font-bold">
                HEMLEVERANS
              </span>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-3 text-xs">
                {deliveryLinks.map(([name, href]) => (
                  <a
                    key={name}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : '_self'}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={(e) => handleLinkClick(e, href)}
                    className="underline decoration-[#c6a149]/60 underline-offset-4 hover:text-[#8B7355] transition-colors"
                  >
                    {name} ↗
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* RIGHT COLUMN DISH SECTIONS */}
          <div id="menu-content" tabIndex={-1} className="min-w-0 px-5 lg:px-0 focus:outline-hidden">
            {menu.map((category, i) => (
              <section
                key={category.id}
                id={category.id}
                aria-labelledby={`${category.id}-title`}
                className="menu-section border-b border-[#c6a149]/40 py-10 last:border-b-0 sm:py-14"
              >
                <div className="mb-4 flex items-start gap-4 sm:gap-6">
                  <span aria-hidden="true" className="pt-1 font-serif text-lg text-[#8B7355] font-bold">
                    0{i + 1}
                  </span>
                  <div>
                    <h2
                      id={`${category.id}-title`}
                      className="font-serif text-[27px] leading-tight tracking-[-0.025em] text-[#1C1917] sm:text-[34px]"
                    >
                      {category.title}
                    </h2>
                    {category.intro && (
                      <p className="mt-4 max-w-lg text-sm leading-7 text-[#8B7355]">
                        {category.intro}
                      </p>
                    )}
                  </div>
                </div>

                <ul className="divide-y divide-[#c6a149]/15">
                  {category.items.map((item) => (
                    <MenuItem key={item.name} item={item} />
                  ))}
                </ul>

                {category.note && (
                  <p className="mt-5 text-sm italic text-[#8B7355]">
                    {category.note}
                  </p>
                )}
              </section>
            ))}
          </div>
        </div>

        {/* MOBILE HEMLEVERANS BAR */}
        <div className="border-y border-[#c6a149]/40 bg-[#cdecfc] px-5 py-8 lg:hidden mt-8">
          <p className="text-xs font-bold tracking-[0.18em] text-[#1E5F6E]">HEMLEVERANS</p>
          <div className="mt-4 flex flex-wrap gap-5 text-sm">
            {deliveryLinks.map(([name, href]) => (
              <a
                key={name}
                href={href}
                target={href.startsWith('http') ? '_blank' : '_self'}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={(e) => handleLinkClick(e, href)}
                className="underline underline-offset-4 font-semibold text-[#1C1917] hover:text-[#1E5F6E]"
              >
                {name} ↗
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* EDITORIAL FOOTER ROW */}
      <footer className="border-t border-[#c6a149]/40 bg-white/70 mt-14">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-12 sm:grid-cols-2 sm:px-10 lg:grid-cols-[1.1fr_1fr_1fr]">
          <div>
            <p className="font-serif text-3xl tracking-[-0.05em] text-[#1C1917]">
              Sima Deli<span className="text-[#c6a149]">.</span>
            </p>
            <address className="mt-4 text-sm not-italic leading-7 text-[#292723]/75">
              Valhallavägen 120<br />
              114 41 Stockholm<br />
              <a href="mailto:info@simadeli.com" className="underline hover:text-[#8B7355]">info@simadeli.com</a><br />
              <a href="tel:+4686603635" className="underline hover:text-[#8B7355]">08-660 36 35</a>
            </address>
          </div>
          <div>
            <h2 className="text-xs font-bold tracking-[0.15em] text-[#8B7355] uppercase">Öppettider</h2>
            <p className="mt-4 text-sm leading-8 text-[#292723]/75">
              Måndag: Stängt<br />
              Tisdag – Fredag: 10:00 – 19:00<br />
              Lördag – Söndag: 10:00 – 17:00
            </p>
          </div>
          <div>
            <h2 className="text-xs font-bold tracking-[0.15em] text-[#8B7355] uppercase">Snabblänkar</h2>
            <nav aria-label="Sidfotsnavigation" className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-xs">
              {siteLinks.map(([name, href]) => (
                <a
                  href={href}
                  key={name}
                  onClick={(e) => handleLinkClick(e, href)}
                  className="hover:text-[#8B7355] transition-colors"
                >
                  {name}
                </a>
              ))}
            </nav>
            <div className="mt-6 flex gap-6 text-xs text-[#8B7355] font-medium">
              <a href="https://www.instagram.com/sima_deli/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Instagram ↗
              </a>
              <a href="https://www.facebook.com/Simadeli/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Facebook ↗
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1240px] justify-between border-t border-[#c6a149]/25 px-5 py-4 text-[11px] text-[#8B7355] sm:px-10">
          <span>© Sima Deli Stockholm</span>
          <a href="#top" className="hover:underline">Till toppen ↑</a>
        </div>
      </footer>
    </div>
  );
};

export default MenuLayoutClassic;
