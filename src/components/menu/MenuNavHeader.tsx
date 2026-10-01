import React from 'react';

interface MenuNavHeaderProps {
  currentMenuNumber: number;
  onNavigate: (path: string) => void;
  isDark?: boolean;
}

export const MENU_PAGES = [
  { number: 1, path: '/meny-1/', title: 'Meny 1', subtitle: 'Foody Experience' },
  { number: 2, path: '/meny-2/', title: 'Meny 2', subtitle: 'The Greatest Table' },
  { number: 3, path: '/meny-3/', title: 'Meny 3', subtitle: 'Signature Dark Luxury' },
  { number: 4, path: '/meny-4/', title: 'Meny 4', subtitle: 'Modular Cards' },
  { number: 5, path: '/meny-5/', title: 'Meny 5', subtitle: 'Selective Images' },
  { number: 6, path: '/meny-6/', title: 'Meny 6', subtitle: 'TasteAtlas Guide' },
  { number: 7, path: '/meny-7/', title: 'Meny 7', subtitle: 'Gorm’s Editorial' },
  { number: 8, path: '/meny-8/', title: 'Meny 8', subtitle: 'Midnight & Gold' }
];

export const MenuNavHeader: React.FC<MenuNavHeaderProps> = ({
  currentMenuNumber,
  onNavigate,
  isDark = false
}) => {
  return (
    <nav
      aria-label="Välj menysida"
      className="max-w-6xl mx-auto mb-8 pt-2"
    >
      <div className={`p-2 rounded-2xl flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar border ${
        isDark
          ? 'bg-stone-900/90 border-stone-800'
          : 'bg-white/90 border-[#E8DFD3] shadow-2xs'
      }`}>
        <span className={`text-[11px] font-semibold uppercase tracking-wider px-2 shrink-0 ${
          isDark ? 'text-stone-400' : 'text-[#78716C]'
        }`}>
          Sidor:
        </span>

        {MENU_PAGES.map((menu) => {
          const isActive = currentMenuNumber === menu.number;
          return (
            <a
              key={menu.number}
              href={menu.path}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(menu.path);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 shrink-0 ${
                isActive
                  ? isDark
                    ? 'bg-white text-black font-bold shadow-xs scale-102'
                    : 'bg-[#1C1917] text-white font-bold shadow-xs scale-102'
                  : isDark
                    ? 'bg-stone-800/80 text-stone-300 hover:text-white hover:bg-stone-700'
                    : 'bg-[#FAF7F2] text-[#57534E] hover:text-[#1C1917] hover:bg-[#F3EDE5]'
              }`}
            >
              <span>{menu.title}</span>
              <span className={`text-[10px] hidden md:inline font-normal ${
                isActive
                  ? isDark ? 'text-stone-600' : 'text-stone-300'
                  : isDark ? 'text-stone-400' : 'text-[#78716C]'
              }`}>
                · {menu.subtitle}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
