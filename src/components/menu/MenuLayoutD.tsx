import React, { useState } from 'react';
import { MENU_ITEMS, type MenuItem } from '../../data/siteData';

interface MenuLayoutProps {
  onOpenBooking?: () => void;
  onNavigate?: (path: string) => void;
}

interface CategorySection {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  imagePosition: 'right' | 'left';
  items: MenuItem[];
}

export const MenuLayoutD: React.FC<MenuLayoutProps> = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const sections: CategorySection[] = [
    {
      id: 'starters',
      title: 'Starters',
      image: '/images/zereshk-polo.jpg',
      imageAlt: 'Starters Featured Dish',
      imagePosition: 'right',
      items: [
        {
          id: 'zereshk-polo',
          name: 'Zereshkpolo',
          category: 'Starters',
          description: 'Marinated chicken fillet in tomato sauce, served with saffron rice, zereshk (barberries) and pistachios.',
          price: '189 kr'
        },
        {
          id: 'gheymeh',
          name: 'Gheymeh',
          category: 'Starters',
          description: 'Lamb stew with yellow lentils, cherry tomatoes and dried lime, served with saffron rice.',
          price: '189 kr'
        },
        {
          id: 'veg-gheymeh',
          name: 'Vegan Gheymeh Bademjan',
          category: 'Starters',
          description: 'Stew with yellow lentils, cherry tomatoes, dried lime and roasted eggplant, served with saffron rice.',
          price: '189 kr',
          isVegan: true,
          note: 'Vegan Friendly'
        }
      ]
    },
    {
      id: 'main',
      title: 'Main Course',
      image: '/images/baghali-polo.jpg',
      imageAlt: 'Main Course Featured Dish',
      imagePosition: 'left',
      items: [
        {
          id: 'ghormeh-sabzi',
          name: 'Ghormeh-Sabzi',
          category: 'Main Course',
          description: 'Herb stew with kidney beans and dried lime, served with saffron rice.',
          price: '189 kr'
        },
        {
          id: 'baghali-polo',
          name: 'Baghali-Polo Mahiche',
          category: 'Main Course',
          description: 'Slow-cooked lamb shank with dill and broad bean rice.',
          price: '259 kr'
        },
        {
          id: 'fesenjan',
          name: 'Fesenjan',
          category: 'Main Course',
          description: 'Rich pomegranate and walnut stew, served with saffron rice.',
          price: '249 kr'
        },
        {
          id: 'tahchin',
          name: 'Tahchin',
          category: 'Main Course',
          description: 'Saffron rice cake with chicken, yoghurt and aromatic spices.',
          price: '189 kr'
        }
      ]
    },
    {
      id: 'mazeh',
      title: 'Mazeh & Delikatesser',
      image: '/images/mazeh-tallrik.jpg',
      imageAlt: 'Mazeh Featured Dish',
      imagePosition: 'right',
      items: [
        {
          id: 'mazeh-tallrik',
          name: 'Sima Deli Mazeh-Tallrik',
          category: 'Mazeh',
          description: 'Urval av persiska röror, Kashke Bademjan, Olovieh, Mast-o-Moosir och hembakat bröd.',
          price: '219 kr'
        },
        {
          id: 'shirazi-salad',
          name: 'Salad Shirazi',
          category: 'Mazeh',
          description: 'Fint tärnad gurka, tomat, rödlök och torkad mynta med jungfruolivolja och lime.',
          price: '65 kr',
          isVegan: true
        },
        {
          id: 'mastmoosir',
          name: 'Mast-o-Moosir',
          category: 'Mazeh',
          description: 'Silkeslen persisk yoghurt med vild vitlök från bergen och torkade rosenblad.',
          price: '69 kr',
          isVegetarian: true
        }
      ]
    },
    {
      id: 'desserts',
      title: 'Desserts & Sött',
      image: '/images/sholeh-zard.jpg',
      imageAlt: 'Dessert Featured Dish',
      imagePosition: 'left',
      items: MENU_ITEMS.filter((i) => i.category === 'Något sött').map((d) => ({
        ...d,
        price: d.price || '79 kr'
      }))
    }
  ];

  const visibleSections = activeCategory === 'all'
    ? sections
    : sections.filter((s) => s.id === activeCategory);

  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-fadeIn font-sans text-[#1C1917]">
      
      {/* Category Filter Pills (Optional toggle for seamless browsing) */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar py-2">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
            activeCategory === 'all'
              ? 'bg-[#1C1917] text-white shadow-xs'
              : 'bg-white text-[#57534E] hover:text-[#1C1917] hover:bg-[#F3EDE5] border border-[#E8DFD3]'
          }`}
        >
          Alla Kategorier
        </button>
        {sections.map((sec) => (
          <button
            key={sec.id}
            onClick={() => setActiveCategory(sec.id)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
              activeCategory === sec.id
                ? 'bg-[#1C1917] text-white shadow-xs'
                : 'bg-white text-[#57534E] hover:text-[#1C1917] hover:bg-[#F3EDE5] border border-[#E8DFD3]'
            }`}
          >
            {sec.title}
          </button>
        ))}
      </div>

      {/* Category Sections: Subtle Background & Alternating Featured Images (Exact Reference 2D) */}
      <div className="space-y-10">
        {visibleSections.map((section) => {
          const isImageLeft = section.imagePosition === 'left';

          return (
            <div
              key={section.id}
              className="bg-[#FCFAF7] rounded-3xl border border-[#ECE5DC] p-6 sm:p-10 lg:p-12 shadow-xs transition-shadow duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                
                {/* 1. Image Block */}
                <div
                  className={`lg:col-span-5 ${
                    isImageLeft ? 'order-1' : 'order-1 lg:order-2'
                  }`}
                >
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-stone-100 group">
                    <img
                      src={section.image}
                      alt={section.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* 2. Menu Dish List Block */}
                <div
                  className={`lg:col-span-7 space-y-6 ${
                    isImageLeft ? 'order-2' : 'order-2 lg:order-1'
                  }`}
                >
                  {/* Section Title with Horizontal Rule (Exact Reference 2D) */}
                  <div className="flex items-center gap-3">
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1917] tracking-tight">
                      {section.title}
                    </h3>
                    <div className="h-[1px] flex-1 bg-[#D6CCC2]/70 max-w-xs" />
                  </div>

                  {/* Clean Dish Items List */}
                  <div className="space-y-6">
                    {section.items.map((dish) => (
                      <div key={dish.id} className="space-y-1">
                        <div className="flex items-baseline justify-between gap-4">
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
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
