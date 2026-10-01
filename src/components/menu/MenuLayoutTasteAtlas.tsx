import React, { useState } from 'react';
import { Bookmark, Star, MapPin, ChevronRight } from 'lucide-react';

interface MenuLayoutProps {
  onOpenBooking?: () => void;
  onNavigate?: (path: string) => void;
}

interface TasteAtlasDish {
  id: string;
  category: string;
  name: string;
  location: string;
  rating: string;
  venueType: string;
  venueName: string;
  image: string;
  price?: string;
}

const TASTE_ATLAS_ITEMS: TasteAtlasDish[] = [
  {
    id: 'zereshk-polo',
    category: 'Meat Dish / Chicken',
    name: 'Zereshkpolo',
    location: 'Sweden',
    rating: '4.8',
    venueType: 'Most iconic at',
    venueName: 'Sima Deli, Stockholm',
    image: '/images/zereshk-polo.jpg',
    price: '189 kr'
  },
  {
    id: 'ghormeh-sabzi',
    category: 'National Herb Stew',
    name: 'Ghormeh-Sabzi',
    location: 'Sweden',
    rating: '4.9',
    venueType: 'Recommended at',
    venueName: 'Sima Deli, Valhallavägen',
    image: '/images/ghormeh-sabzi.jpg',
    price: '189 kr'
  },
  {
    id: 'baghali-polo',
    category: 'Lamb Dish',
    name: 'Baghali-Polo Mahiche',
    location: 'Sweden',
    rating: '4.9',
    venueType: 'Most iconic at',
    venueName: 'Sima Deli, Stockholm',
    image: '/images/baghali-polo.jpg',
    price: '259 kr'
  },
  {
    id: 'tahchin',
    category: 'Saffron Rice Cake',
    name: 'Tahchin',
    location: 'Sweden',
    rating: '4.7',
    venueType: 'Weekend special at',
    venueName: 'Sima Deli, Stockholm',
    image: '/images/tahchin.jpg',
    price: '189 kr'
  },
  {
    id: 'gheymeh',
    category: 'Lentil Stew',
    name: 'Gheymeh Bademjan',
    location: 'Sweden',
    rating: '4.7',
    venueType: 'Most iconic at',
    venueName: 'Sima Deli, Stockholm',
    image: '/images/gheymeh.jpg',
    price: '189 kr'
  },
  {
    id: 'mazeh-tallrik',
    category: 'Sharing Platter',
    name: 'Mazeh-Tallrik',
    location: 'Sweden',
    rating: '4.9',
    venueType: 'Recommended at',
    venueName: 'Sima Deli, Valhallavägen',
    image: '/images/mazeh-tallrik.jpg',
    price: '219 kr'
  },
  {
    id: 'shirazi-salad',
    category: 'Fresh Salad',
    name: 'Salad Shirazi',
    location: 'Sweden',
    rating: '4.6',
    venueType: 'Traditional at',
    venueName: 'Sima Deli, Stockholm',
    image: '/images/shirazi-salad.jpg',
    price: '65 kr'
  },
  {
    id: 'sholeh-zard',
    category: 'Saffron Dessert',
    name: 'Sholeh Zard',
    location: 'Sweden',
    rating: '4.8',
    venueType: 'Most iconic at',
    venueName: 'Sima Deli, Stockholm',
    image: '/images/sholeh-zard.jpg',
    price: '79 kr'
  }
];

export const MenuLayoutTasteAtlas: React.FC<MenuLayoutProps> = () => {
  const [activeNav, setActiveNav] = useState('persian-food');
  const [activeFilterTab, setActiveFilterTab] = useState<'selection' | 'popular' | 'rating' | 'alpha'>('selection');
  const [selectedPill, setSelectedPill] = useState('all');
  const [bookmarked, setBookmarked] = useState<Record<string, boolean>>({});

  const toggleBookmark = (id: string) => {
    setBookmarked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const navItems = [
    { id: 'cities', label: 'Stockholm Cities & Regions' },
    { id: 'persian-food', label: 'Persian Food (Sima Deli)' },
    { id: 'gourmet', label: 'Gourmet Products & Mazeh' },
    { id: 'lists', label: 'Lists & Top Curations' },
    { id: 'restaurants', label: 'Best Persian Restaurants' },
    { id: 'events', label: 'Food Events in Sweden' },
    { id: 'map', label: 'Swedish Food Map' },
    { id: 'reviews', label: 'What People Say' }
  ];

  const pillCategories = [
    { id: 'all', label: 'All', count: 30 },
    { id: 'stews', label: 'Stews & Warm Dishes', count: 10 },
    { id: 'mazeh', label: 'Mazeh & Starters', count: 9 },
    { id: 'rice', label: 'Saffron Rice Dishes', count: 6 },
    { id: 'desserts', label: 'Desserts', count: 3 },
    { id: 'drinks', label: 'Beverages', count: 2 }
  ];

  return (
    <div className="bg-[#FAF8F5] p-4 sm:p-6 lg:p-10 rounded-3xl border border-[#ECE5DC] max-w-7xl mx-auto font-sans animate-fadeIn text-[#1C1917]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* ========================================================================= */}
        {/* LEFT SIDEBAR: Table of contents (Exact match to Reference 3)               */}
        {/* ========================================================================= */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="space-y-4">
            <h3 className="font-sans font-bold text-sm text-[#1C1917] tracking-tight">
              Table of contents
            </h3>

            <nav className="space-y-2 text-xs">
              {navItems.map((item) => {
                const isActive = activeNav === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveNav(item.id)}
                    className={`w-full text-left flex items-start gap-2.5 py-1 transition-colors cursor-pointer ${
                      isActive
                        ? 'font-bold text-[#1C1917]'
                        : 'font-normal text-[#57534E] hover:text-[#1C1917]'
                    }`}
                  >
                    {/* Active vertical red bar */}
                    <span
                      className={`w-[3px] h-4 rounded-full mt-0.5 shrink-0 ${
                        isActive ? 'bg-[#E03A3E]' : 'bg-transparent'
                      }`}
                    />
                    <span className="leading-snug">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* ========================================================================= */}
        {/* MAIN EXPLORER AREA (Exact match to Reference 3)                          */}
        {/* ========================================================================= */}
        <main className="lg:col-span-9 space-y-7">
          
          {/* 1. Top Filter Tabs: Selection, Most popular, Best rated, Alphabetically */}
          <div className="flex items-center gap-6 sm:gap-8 border-b border-[#EAE3DA] pb-2 text-xs">
            <button
              onClick={() => setActiveFilterTab('selection')}
              className={`pb-2.5 font-medium transition-colors cursor-pointer relative ${
                activeFilterTab === 'selection'
                  ? 'text-[#E03A3E] font-semibold'
                  : 'text-[#78716C] hover:text-[#1C1917]'
              }`}
            >
              Selection
              {activeFilterTab === 'selection' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E03A3E]" />
              )}
            </button>

            <button
              onClick={() => setActiveFilterTab('popular')}
              className={`pb-2.5 font-medium transition-colors cursor-pointer relative ${
                activeFilterTab === 'popular'
                  ? 'text-[#E03A3E] font-semibold'
                  : 'text-[#78716C] hover:text-[#1C1917]'
              }`}
            >
              Most popular
              {activeFilterTab === 'popular' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E03A3E]" />
              )}
            </button>

            <button
              onClick={() => setActiveFilterTab('rating')}
              className={`pb-2.5 font-medium transition-colors cursor-pointer relative ${
                activeFilterTab === 'rating'
                  ? 'text-[#E03A3E] font-semibold'
                  : 'text-[#78716C] hover:text-[#1C1917]'
              }`}
            >
              Best rated
              {activeFilterTab === 'rating' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E03A3E]" />
              )}
            </button>

            <button
              onClick={() => setActiveFilterTab('alpha')}
              className={`pb-2.5 font-medium transition-colors cursor-pointer relative ${
                activeFilterTab === 'alpha'
                  ? 'text-[#E03A3E] font-semibold'
                  : 'text-[#78716C] hover:text-[#1C1917]'
              }`}
            >
              Alphabetically
              {activeFilterTab === 'alpha' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E03A3E]" />
              )}
            </button>
          </div>

          {/* 2. Pill Category Carousel with Red Active Pill and arrow button */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {pillCategories.map((pill) => {
              const isSelected = selectedPill === pill.id;
              return (
                <button
                  key={pill.id}
                  onClick={() => setSelectedPill(pill.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#E03A3E] text-white shadow-xs'
                      : 'bg-[#ECE7E1] text-[#57534E] hover:bg-[#E2DBD3]'
                  }`}
                >
                  <span>{pill.label}</span>
                  <span className={`text-[11px] tabular-nums ${isSelected ? 'text-white/80' : 'text-[#78716C]'}`}>
                    {pill.count}
                  </span>
                </button>
              );
            })}
            
            {/* Arrow Button at end */}
            <button
              onClick={() => setSelectedPill('all')}
              className="w-7 h-7 rounded-full bg-white border border-[#D6CCC2] hover:bg-stone-100 flex items-center justify-center shrink-0 cursor-pointer text-[#78716C]"
              aria-label="Next categories"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 3. Section Title: Must Try */}
          <div className="pt-2">
            <h2 className="font-serif text-2xl font-bold text-[#1C1917] tracking-tight">
              Must Try
            </h2>
          </div>

          {/* 4. The 4-Column Card Grid (Clean Editorial TasteAtlas Format) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TASTE_ATLAS_ITEMS.map((dish) => {
              const isBookmarked = Boolean(bookmarked[dish.id]);

              return (
                <div key={dish.id} className="space-y-3 group">
                  {/* Image with Bookmark Icon */}
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-stone-100 shadow-xs group-hover:shadow-sm transition-shadow">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Bookmark Icon in top right */}
                    <button
                      onClick={() => toggleBookmark(dish.id)}
                      className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-xs transition-colors cursor-pointer"
                      title="Bookmark dish"
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-white text-white' : 'text-white'}`} />
                    </button>
                  </div>

                  {/* Clean Dish Information Caption (Exact Reference 3 typography) */}
                  <div className="space-y-1 text-xs">
                    {/* Category Label */}
                    <div className="text-[11px] text-[#78716C] font-normal leading-tight">
                      {dish.category}
                    </div>

                    {/* Dish Name in Bold */}
                    <h3 className="font-bold text-sm text-[#1C1917] leading-snug group-hover:text-[#E03A3E] transition-colors">
                      {dish.name}
                    </h3>

                    {/* Location with Red Pin */}
                    <div className="flex items-center gap-1 text-[11px] text-[#57534E]">
                      <MapPin className="w-3 h-3 text-[#E03A3E] shrink-0 fill-[#E03A3E]" />
                      <span>{dish.location}</span>
                    </div>

                    {/* Rating with Red Star */}
                    <div className="flex items-center gap-1 text-[11px] text-[#1C1917] font-medium pt-0.5">
                      <Star className="w-3 h-3 text-[#E03A3E] fill-[#E03A3E] shrink-0" />
                      <span>{dish.rating} · Rate It</span>
                    </div>

                    {/* Iconic venue provenance */}
                    <div className="text-[11px] text-[#57534E] font-light leading-snug pt-0.5">
                      <span className="text-[#78716C]">{dish.venueType} </span>
                      <span className="font-medium text-[#1C1917]">{dish.venueName}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </main>
      </div>
    </div>
  );
};
