import React from 'react';

interface MenuLayoutProps {
  onOpenBooking?: () => void;
  onNavigate?: (path: string) => void;
}

export const MenuLayoutD: React.FC<MenuLayoutProps> = () => {
  return (
    <div className="bg-[#FAF7F2] p-4 sm:p-6 lg:p-8 rounded-3xl border border-[#E8DFD3]/80 shadow-sm max-w-6xl mx-auto space-y-12 animate-fadeIn">
      
      {/* 1. STARTERS SECTION (List on Left, Image on Right - Exact Reference 2D) */}
      <div className="bg-[#FCFAF7] rounded-2xl border border-[#ECE5DC] p-5 sm:p-8 lg:p-10 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Starters List */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1917] tracking-tight">
                Starters
              </h3>
              <div className="h-[1px] flex-1 bg-[#D6CCC2]/70 max-w-xs" />
            </div>

            <div className="space-y-6">
              <div className="space-y-1">
                <div className="flex items-baseline justify-between gap-4">
                  <h4 className="font-serif text-base sm:text-lg font-bold text-[#1C1917]">
                    Zereshkpolo
                  </h4>
                  <span className="font-serif text-sm sm:text-base font-medium text-[#947128] tabular-nums shrink-0">
                    189 kr
                  </span>
                </div>
                <p className="text-xs text-[#57534E] font-light leading-relaxed">
                  Marinated chicken fillet in tomato sauce, served with saffron rice, zereshk (barberries) and pistachios.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline justify-between gap-4">
                  <h4 className="font-serif text-base sm:text-lg font-bold text-[#1C1917]">
                    Gheymeh
                  </h4>
                  <span className="font-serif text-sm sm:text-base font-medium text-[#947128] tabular-nums shrink-0">
                    189 kr
                  </span>
                </div>
                <p className="text-xs text-[#57534E] font-light leading-relaxed">
                  Lamb stew with yellow lentils, cherry tomatoes and dried lime.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline justify-between gap-4">
                  <h4 className="font-serif text-base sm:text-lg font-bold text-[#1C1917]">
                    Vegan Gheymeh Bademjan
                  </h4>
                  <span className="font-serif text-sm sm:text-base font-medium text-[#947128] tabular-nums shrink-0">
                    189 kr
                  </span>
                </div>
                <p className="text-xs text-[#57534E] font-light leading-relaxed">
                  Stew with yellow lentils, cherry tomatoes, dried lime and roasted eggplant.
                </p>
                <div className="flex items-center gap-1.5 pt-1">
                  <span className="text-[10px] text-[#1e5f6e] bg-[#E2F2F5] px-2 py-0.5 rounded-md border border-[#cdebf2]">
                    🌱 Vegan
                  </span>
                  <span className="text-[10px] text-[#856525] bg-[#FAF3E3] px-2 py-0.5 rounded-md border border-[#F2E5C9]">
                    ✨ Vegan Friendly
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Featured Starter Food Image */}
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-sm bg-stone-100">
              <img
                src="/images/zereshk-polo.jpg"
                alt="Starters Featured Dish"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* 2. MAIN COURSE SECTION (Image on Left, List on Right - Exact Reference 2D) */}
      <div className="bg-[#FCFAF7] rounded-2xl border border-[#ECE5DC] p-5 sm:p-8 lg:p-10 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Featured Main Course Food Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-sm bg-stone-100">
              <img
                src="/images/baghali-polo.jpg"
                alt="Main Course Featured Dish"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Main Course List */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1917] tracking-tight">
                Main Course
              </h3>
              <div className="h-[1px] flex-1 bg-[#D6CCC2]/70 max-w-xs" />
            </div>

            <div className="space-y-5">
              <div className="space-y-1">
                <div className="flex items-baseline justify-between gap-4">
                  <h4 className="font-serif text-base sm:text-lg font-bold text-[#1C1917]">
                    Ghormeh-Sabzi
                  </h4>
                  <span className="font-serif text-sm sm:text-base font-medium text-[#947128] tabular-nums shrink-0">
                    189 kr
                  </span>
                </div>
                <p className="text-xs text-[#57534E] font-light leading-relaxed">
                  Herb stew with kidney beans and dried lime.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline justify-between gap-4">
                  <h4 className="font-serif text-base sm:text-lg font-bold text-[#1C1917]">
                    Baghali-Polo Mahiche
                  </h4>
                  <span className="font-serif text-sm sm:text-base font-medium text-[#947128] tabular-nums shrink-0">
                    259 kr
                  </span>
                </div>
                <p className="text-xs text-[#57534E] font-light leading-relaxed">
                  Slow-cooked lamb shank with dill and broad bean rice.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline justify-between gap-4">
                  <h4 className="font-serif text-base sm:text-lg font-bold text-[#1C1917]">
                    Fesenjan
                  </h4>
                  <span className="font-serif text-sm sm:text-base font-medium text-[#947128] tabular-nums shrink-0">
                    249 kr
                  </span>
                </div>
                <p className="text-xs text-[#57534E] font-light leading-relaxed">
                  Rich pomegranate and walnut stew.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline justify-between gap-4">
                  <h4 className="font-serif text-base sm:text-lg font-bold text-[#1C1917]">
                    Tahchin
                  </h4>
                  <span className="font-serif text-sm sm:text-base font-medium text-[#947128] tabular-nums shrink-0">
                    189 kr
                  </span>
                </div>
                <p className="text-xs text-[#57534E] font-light leading-relaxed">
                  Saffron rice cake with chicken, yoghurt and aromatic spices.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
