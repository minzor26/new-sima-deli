import React, { useState } from 'react';
import { MENU_ITEMS, type MenuItem } from '../../data/siteData';

interface MenuLayoutProps {
  onOpenBooking?: () => void;
  onNavigate?: (path: string) => void;
}

// Categories exactly matching Image 2 Option A
const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'starters', label: 'Starters' },
  { id: 'main', label: 'Main Course' },
  { id: 'rice', label: 'Rice' },
  { id: 'grills', label: 'Grills' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'beverages', label: 'Beverages' }
];

export const MenuLayoutA: React.FC<MenuLayoutProps> = () => {
  const [selectedCat, setSelectedCat] = useState('starters');

  // Filter items based on selected category tab
  const getDishesForCategory = (): { title: string; items: MenuItem[] } => {
    if (selectedCat === 'starters' || selectedCat === 'all') {
      return {
        title: 'Starters',
        items: [
          {
            id: 'zereshk-polo',
            name: 'Zereshkpolo',
            category: 'Varma persiska rätter',
            description: 'Marinated chicken fillet in tomato sauce, served with saffron rice, zereshk (barberries) and pistachios.',
            price: '189 kr',
            image: '/images/zereshk-polo.jpg'
          },
          {
            id: 'gheymeh',
            name: 'Gheymeh',
            category: 'Varma persiska rätter',
            description: 'Lamb stew with yellow lentils, cherry tomatoes and dried lime, served with saffron rice.',
            price: '189 kr'
          },
          {
            id: 'veg-gheymeh',
            name: 'Vegan Gheymeh Bademjan',
            category: 'Varma persiska rätter',
            description: 'Stew with yellow lentils, cherry tomatoes, dried lime and roasted eggplant, served with saffron rice.',
            price: '189 kr',
            isVegan: true,
            note: 'Vegan Friendly'
          },
          {
            id: 'kashke-bademjan',
            name: 'Kashke Bademjan',
            category: 'Tillbehör & Mazeh',
            description: 'Roasted eggplant dip with garlic, mint, walnuts and caramelized onions.',
            price: '95 kr',
            isVegetarian: true
          }
        ]
      };
    } else if (selectedCat === 'main') {
      return {
        title: 'Main Course',
        items: [
          {
            id: 'ghormeh-sabzi',
            name: 'Ghormeh-Sabzi',
            category: 'Varma persiska rätter',
            description: 'Herb stew with kidney beans and dried lime, served with saffron rice.',
            price: '189 kr',
            image: '/images/ghormeh-sabzi.jpg'
          },
          {
            id: 'baghali-polo',
            name: 'Baghali-Polo Mahiche',
            category: 'Varma persiska rätter',
            description: 'Slow-cooked lamb shank with dill and broad bean rice.',
            price: '259 kr',
            image: '/images/baghali-polo.jpg'
          },
          {
            id: 'fesenjan',
            name: 'Fesenjan',
            category: 'Varma persiska rätter',
            description: 'Rich pomegranate and walnut stew, served with saffron rice.',
            price: '249 kr'
          },
          {
            id: 'tahchin',
            name: 'Tahchin',
            category: 'Varma persiska rätter',
            description: 'Saffron rice cake with chicken, yoghurt and aromatic spices.',
            price: '189 kr',
            image: '/images/tahchin.jpg'
          }
        ]
      };
    } else if (selectedCat === 'rice') {
      return {
        title: 'Rice Specialities',
        items: [
          {
            id: 'saffron-rice',
            name: 'Saffransris med Tahdig',
            category: 'Tillbehör & Mazeh',
            description: 'Fragrant basmati rice infused with Persian saffron and crispy bottom crust.',
            price: '55 kr',
            isVegan: true
          },
          {
            id: 'baghali-rice',
            name: 'Baghali Polo Ris',
            category: 'Tillbehör & Mazeh',
            description: 'Basmati rice steamed with baby broad beans and fresh aromatic dill.',
            price: '65 kr',
            isVegan: true
          }
        ]
      };
    } else if (selectedCat === 'desserts') {
      return {
        title: 'Desserts',
        items: MENU_ITEMS.filter((i) => i.category === 'Något sött')
      };
    } else if (selectedCat === 'beverages') {
      return {
        title: 'Beverages',
        items: MENU_ITEMS.filter((i) => i.category === 'Drycker')
      };
    }
    return {
      title: 'Menu',
      items: MENU_ITEMS.slice(0, 5)
    };
  };

  const { title, items } = getDishesForCategory();

  return (
    <div className="bg-[#FAF7F2] p-4 sm:p-6 lg:p-8 rounded-3xl border border-[#E8DFD3]/80 shadow-sm max-w-6xl mx-auto animate-fadeIn">
      {/* Container Card */}
      <div className="bg-[#FCFAF7] rounded-2xl border border-[#ECE5DC] p-5 sm:p-8 lg:p-10 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Featured Image Card with Overlay Text (Exact Reference 2A) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-md bg-stone-900 aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] w-full">
              <img
                src="/images/zereshk-polo.jpg"
                alt="Signature Persian Flavours"
                className="w-full h-full object-cover object-center brightness-95"
              />
              
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Bottom Overlay Title & Subtitle */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 text-white space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight leading-snug text-white">
                  Signature<br />Persian Flavours
                </h3>
                <p className="text-xs sm:text-sm text-stone-200 font-light leading-relaxed">
                  Traditional recipes, fresh ingredients and authentic taste in every dish.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Category Pills + Title + Dishes List with Thumbnail */}
          <div className="lg:col-span-7 space-y-6">
            
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

            {/* Section Header with Horizontal Rule */}
            <div className="flex items-center gap-3 pt-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1917] tracking-tight">
                {title}
              </h3>
              <div className="h-[1px] flex-1 bg-[#D6CCC2]/70 max-w-xs" />
            </div>

            {/* Dish Rows */}
            <div className="space-y-5 pt-1">
              {items.map((dish) => (
                <div key={dish.id} className="group">
                  <div className="flex items-start justify-between gap-4">
                    
                    {/* Left details */}
                    <div className="flex-1 space-y-1">
                      <div className="flex items-baseline justify-between gap-4">
                        <h4 className="font-serif text-base sm:text-lg font-bold text-[#1C1917]">
                          {dish.name}
                        </h4>
                        <span className="font-serif text-sm sm:text-base font-medium text-[#947128] tabular-nums shrink-0">
                          {dish.price}
                        </span>
                      </div>

                      <p className="text-xs text-[#57534E] font-light leading-relaxed pr-2">
                        {dish.description}
                      </p>

                      {/* Dietary Badges */}
                      {(dish.isVegan || dish.note) && (
                        <div className="flex items-center gap-1.5 pt-1.5">
                          {dish.isVegan && (
                            <span className="inline-flex items-center gap-1 text-[10px] text-[#1e5f6e] bg-[#E2F2F5] px-2 py-0.5 rounded-md border border-[#cdebf2]">
                              🌱 Vegan
                            </span>
                          )}
                          {dish.note && (
                            <span className="inline-flex items-center gap-1 text-[10px] text-[#856525] bg-[#FAF3E3] px-2 py-0.5 rounded-md border border-[#F2E5C9]">
                              ✨ {dish.note}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Right Thumbnail (Only if image exists, exactly matching Reference 2A) */}
                    {dish.image && (
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 border border-[#E2DAD0] shadow-xs">
                        <img
                          src={dish.image}
                          alt={dish.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
