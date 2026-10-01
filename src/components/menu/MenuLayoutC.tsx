import React, { useState } from 'react';
import { Leaf, Sparkles } from 'lucide-react';

interface MenuLayoutProps {
  onOpenBooking?: () => void;
  onNavigate?: (path: string) => void;
}

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'starters', label: 'Starters' },
  { id: 'main', label: 'Main Course' },
  { id: 'rice', label: 'Rice' },
  { id: 'grills', label: 'Grills' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'beverages', label: 'Beverages' }
];

export const MenuLayoutC: React.FC<MenuLayoutProps> = () => {
  const [selectedCat, setSelectedCat] = useState('all');

  // Featured 3 modular cards exactly from Image 2 Option C
  const featuredCards = [
    {
      id: 'zereshk-polo',
      name: 'Zereshkpolo',
      price: '189 kr',
      description: 'Marinated chicken fillet in tomato sauce, served with saffron rice, zereshk (barberries) and pistachios.',
      image: '/images/zereshk-polo.jpg'
    },
    {
      id: 'ghormeh-sabzi',
      name: 'Ghormeh-Sabzi',
      price: '189 kr',
      description: 'Herb stew with kidney beans and dried lime, served with saffron rice.',
      image: '/images/ghormeh-sabzi.jpg'
    },
    {
      id: 'baghali-polo',
      name: 'Baghali-Polo Mahiche',
      price: '259 kr',
      description: 'Slow-cooked lamb shank with dill and broad bean rice.',
      image: '/images/baghali-polo.jpg'
    }
  ];

  // More dishes 2-column list exactly from Image 2 Option C
  const moreDishesLeft = [
    {
      id: 'gheymeh',
      name: 'Gheymeh',
      price: '189 kr',
      description: 'Lamb stew with yellow lentils, cherry tomatoes and dried lime.'
    },
    {
      id: 'veg-gheymeh',
      name: 'Vegan Gheymeh Bademjan',
      price: '189 kr',
      description: 'Stew with yellow lentils, cherry tomatoes, dried lime and roasted eggplant.',
      isVegan: true,
      note: 'Vegan Friendly'
    }
  ];

  const moreDishesRight = [
    {
      id: 'fesenjan',
      name: 'Fesenjan',
      price: '249 kr',
      description: 'Rich pomegranate and walnut stew, served with saffron rice.'
    },
    {
      id: 'tahchin',
      name: 'Tahchin',
      price: '189 kr',
      description: 'Saffron rice cake with chicken, yoghurt and aromatic spices.'
    }
  ];

  return (
    <div className="bg-[#FAF7F2] p-4 sm:p-6 lg:p-8 rounded-3xl border border-[#E8DFD3]/80 shadow-sm max-w-6xl mx-auto animate-fadeIn">
      <div className="bg-[#FCFAF7] rounded-2xl border border-[#ECE5DC] p-5 sm:p-8 lg:p-10 shadow-xs space-y-8">
        
        {/* Category Pills Navigation */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pb-1">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCat === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`px-3.5 sm:px-4 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#1C1917] text-white shadow-xs'
                    : 'bg-white text-[#57534E] hover:text-[#1C1917] hover:bg-[#F3EDE5] border border-[#E8DFD3]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 1. TOP SECTION: Modular Cards (Only for Dishes with Images - Exact Reference 2C) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCards.map((dish) => (
            <div
              key={dish.id}
              className="bg-[#F8F5EE] rounded-2xl border border-[#E7DFD3] p-3 flex flex-col space-y-3 group shadow-2xs"
            >
              {/* Image */}
              <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-stone-200">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title & Price */}
              <div className="px-1 space-y-1">
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="font-serif text-base sm:text-lg font-bold text-[#1C1917]">
                    {dish.name}
                  </h4>
                  <span className="font-serif text-sm sm:text-base font-medium text-[#947128] tabular-nums shrink-0">
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

        {/* 2. BOTTOM SECTION: More Dishes (Exact Reference 2C) */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-3">
            <h3 className="font-serif text-2xl font-normal text-[#1C1917] tracking-tight">
              More Dishes
            </h3>
            <div className="h-[1px] flex-1 bg-[#D6CCC2]/70 max-w-xs" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 pt-1">
            {/* Left Column */}
            <div className="space-y-6">
              {moreDishesLeft.map((dish) => (
                <div key={dish.id} className="space-y-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="font-serif text-base font-bold text-[#1C1917]">
                      {dish.name}
                    </h4>
                    <span className="font-serif text-sm font-medium text-[#947128] tabular-nums shrink-0">
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
                          🌱 Vegan
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
              {moreDishesRight.map((dish) => (
                <div key={dish.id} className="space-y-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="font-serif text-base font-bold text-[#1C1917]">
                      {dish.name}
                    </h4>
                    <span className="font-serif text-sm font-medium text-[#947128] tabular-nums shrink-0">
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

      </div>
    </div>
  );
};
