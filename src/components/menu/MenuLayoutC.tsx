import React, { useState } from 'react';

interface MenuLayoutProps {
  onOpenBooking?: () => void;
  onNavigate?: (path: string) => void;
}

export const MenuLayoutC: React.FC<MenuLayoutProps> = () => {
  const [selectedCat, setSelectedCat] = useState('all');

  const categories = [
    { id: 'all', label: 'Alla Rätter' },
    { id: 'warm', label: 'Varma Persiska Rätter' },
    { id: 'mazeh', label: 'Förrätter & Mazeh' },
    { id: 'desserts', label: 'Desserter & Sött' },
    { id: 'drinks', label: 'Drycker' }
  ];

  const allDishes = [
    {
      id: 'zereshk-polo',
      name: 'Zereshkpolo',
      category: 'warm',
      price: '189 kr',
      description: 'Marinerad kycklingfilé i tomatsås, saffransris med zereshk (berberisbär) och pistagenötter.',
      image: '/images/zereshk-polo.jpg'
    },
    {
      id: 'ghormeh-sabzi',
      name: 'Ghormeh-Sabzi',
      category: 'warm',
      price: '189 kr',
      description: 'Traditionell persisk örtgryta med bönor, mört kött och torkad svart lime, serveras med saffransris.',
      image: '/images/ghormeh-sabzi.jpg'
    },
    {
      id: 'baghali-polo',
      name: 'Baghali-Polo Mahiche',
      category: 'warm',
      price: '259 kr',
      description: 'Långkokt lammlägg med dill- och bondbönris.',
      image: '/images/baghali-polo.jpg'
    },
    {
      id: 'tahchin',
      name: 'Tahchin',
      category: 'warm',
      price: '189 kr',
      description: 'Krispig saffransriskaka med kyckling, ägg och yoghurt.',
      image: '/images/tahchin.jpg'
    },
    {
      id: 'gheymeh',
      name: 'Gheymeh Bademjan',
      category: 'warm',
      price: '189 kr',
      description: 'Köttgryta med gula linser, ugnsrostade auberginer, körsbärstomater och saffransris.',
      image: '/images/gheymeh.jpg'
    },
    {
      id: 'veg-gheymeh',
      name: 'Vegan Gheymeh Bademjan',
      category: 'warm',
      price: '189 kr',
      description: 'Gryta med gula linser, ugnsrostade auberginer, körsbärstomater och saffransris.',
      isVegan: true,
      note: 'Vegansk',
      image: '/images/vegan-gheymeh-bademjan.jpg'
    },
    {
      id: 'mazeh-tallrik',
      name: 'Sima Mazeh-tallrik',
      category: 'mazeh',
      price: '219 kr',
      description: 'Urval av persiska röror – Kashke Bademjan, Olovieh, Mast-o-Moosir och hembakat bröd.',
      image: '/images/mazeh-tallrik.jpg'
    },
    {
      id: 'shirazi-salad',
      name: 'Salad Shirazi',
      category: 'mazeh',
      price: '65 kr',
      description: 'Fint tärnad gurka, tomat, rödlök, torkad mynta, olivolja och citron.',
      image: '/images/shirazi-salad.jpg'
    },
    {
      id: 'mastmoosir',
      name: 'Mast-o-Moosir',
      category: 'mazeh',
      price: '69 kr',
      description: 'Krämig persisk yoghurt med vild bergslök och örter.',
      image: '/images/mastmoosir.jpg'
    },
    {
      id: 'olovieh',
      name: 'Salad Olovieh',
      category: 'mazeh',
      price: '89 kr',
      description: 'Klassisk persisk potatissallad med kyckling, gröna ärtor och saltgurka.',
      image: '/images/olovieh.jpg'
    },
    {
      id: 'koo-koo',
      name: 'Koo-Koo Sabzi',
      category: 'mazeh',
      price: '95 kr',
      description: 'Persisk färsk örtomelett med berberisbär, valnötter och vitlök.',
      image: '/images/koo-koo.jpg'
    },
    {
      id: 'sholeh-zard',
      name: 'Sholeh Zard',
      category: 'desserts',
      price: '79 kr',
      description: 'Traditionell persisk saffransdessert med rosenvatten, kanel och pistagenötter.',
      image: '/images/sholeh-zard.jpg'
    },
    {
      id: 'persisk-te',
      name: 'Persiskt Kardemumma-te med Nabat',
      category: 'drinks',
      price: '35 kr',
      description: 'Aromatiskt persiskt te bryggt med kardemumma, serveras med saffranssockerpinne.',
      image: '/images/shirazi-salad.jpg'
    },
    {
      id: 'dough',
      name: 'Persisk Dough',
      category: 'drinks',
      price: '35 kr',
      description: 'Traditionell kolsyrad persisk yoghurtdryck med mynta.'
    }
  ];

  const filteredDishes = selectedCat === 'all'
    ? allDishes
    : allDishes.filter((d) => d.category === selectedCat);

  const featuredCards = filteredDishes.filter((d) => d.image).slice(0, 3);
  const remainingDishes = filteredDishes.filter((d) => !featuredCards.some((f) => f.id === d.id));
  const half = Math.ceil(remainingDishes.length / 2);
  const leftColumn = remainingDishes.slice(0, half);
  const rightColumn = remainingDishes.slice(half);

  return (
    <div className="w-full min-h-screen bg-[#FAF7F2] pt-24 sm:pt-28 pb-24 font-sans animate-fadeIn text-[#1C1917]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#947128]">
            Sima Deli Stockholm
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1917]">
            Vår Modulära Meny
          </h2>
          <p className="text-xs sm:text-sm text-[#57534E] font-light max-w-lg mx-auto">
            Välj en kategori nedan för att filtrera bland våra autentiska persiska rätter, tillagade med saffran och kärlek på Valhallavägen 120.
          </p>
        </div>

        {/* Category Filter Navigation */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar py-2">
          {categories.map((cat) => {
            const isActive = selectedCat === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer shadow-xs ${
                  isActive
                    ? 'bg-[#1C1917] text-white shadow-md scale-105'
                    : 'bg-white text-[#57534E] hover:text-[#1C1917] hover:bg-[#F3EDE5] border border-[#E8DFD3]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 1. TOP SECTION: Featured Dishes with Full Uncropped Images */}
        {featuredCards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCards.map((dish) => (
              <div
                key={dish.id}
                className="bg-white rounded-3xl border border-[#ECE5DC] p-4 flex flex-col space-y-4 group shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Full Uncropped Image */}
                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-stone-50 border border-stone-100 p-2 flex items-center justify-center">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Title & Price */}
                <div className="px-1 space-y-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="font-serif text-base sm:text-lg font-bold text-[#1C1917]">
                      {dish.name}
                    </h4>
                    <span className="font-serif text-sm sm:text-base font-bold text-[#947128] tabular-nums shrink-0">
                      {dish.price}
                    </span>
                  </div>

                  <p className="text-xs text-[#57534E] font-light leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2. BOTTOM SECTION: Remaining Dishes in Current Category */}
        {remainingDishes.length > 0 && (
          <div className="bg-white rounded-3xl border border-[#ECE5DC] p-6 sm:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <h3 className="font-serif text-2xl font-bold text-[#1C1917] tracking-tight">
                Fler Rätter i denna Kategori
              </h3>
              <div className="h-[1px] flex-1 bg-[#D6CCC2]/70" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 pt-2">
              {/* Left Column */}
              <div className="space-y-6">
                {leftColumn.map((dish) => (
                  <div key={dish.id} className="space-y-1 border-b border-stone-100 pb-4">
                    <div className="flex items-baseline justify-between gap-4">
                      <h4 className="font-serif text-base font-bold text-[#1C1917]">
                        {dish.name}
                      </h4>
                      <span className="font-serif text-sm font-bold text-[#947128] tabular-nums shrink-0">
                        {dish.price}
                      </span>
                    </div>
                    <p className="text-xs text-[#57534E] font-light leading-relaxed">
                      {dish.description}
                    </p>
                    {(dish.isVegan || dish.note) && (
                      <div className="flex items-center gap-1.5 pt-1">
                        {dish.isVegan && (
                          <span className="text-[10px] text-[#1e5f6e] bg-[#E2F2F5] px-2 py-0.5 rounded-md border border-[#cdebf2]">
                            🌱 Vegansk
                          </span>
                        )}
                        {dish.note && (
                          <span className="text-[10px] text-[#856525] bg-[#FAF3E3] px-2 py-0.5 rounded-md border border-[#F2E5C9]">
                            ✨ {dish.note}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {rightColumn.map((dish) => (
                  <div key={dish.id} className="space-y-1 border-b border-stone-100 pb-4">
                    <div className="flex items-baseline justify-between gap-4">
                      <h4 className="font-serif text-base font-bold text-[#1C1917]">
                        {dish.name}
                      </h4>
                      <span className="font-serif text-sm font-bold text-[#947128] tabular-nums shrink-0">
                        {dish.price}
                      </span>
                    </div>
                    <p className="text-xs text-[#57534E] font-light leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
