import React, { useState } from 'react';
import { Bookmark, Star, MapPin, ChevronRight, Check } from 'lucide-react';

interface MenuLayoutProps {
  onOpenBooking?: () => void;
  onNavigate?: (path: string) => void;
}

interface TasteAtlasDish {
  id: string;
  pillCategory: 'stews' | 'mazeh' | 'rice' | 'desserts' | 'drinks';
  category: string;
  name: string;
  location: string;
  rating: number;
  ratingStr: string;
  venueType: string;
  venueName: string;
  image: string;
  price: string;
  description: string;
}

const TASTE_ATLAS_ITEMS: TasteAtlasDish[] = [
  {
    id: 'zereshk-polo',
    pillCategory: 'stews',
    category: 'Kycklingrätt med saffran',
    name: 'Zereshkpolo',
    location: 'Valhallavägen 120, Stockholm',
    rating: 4.9,
    ratingStr: '4.9',
    venueType: 'Signaturrätt på',
    venueName: 'Sima Deli',
    image: '/images/zereshk-polo.jpg',
    price: '189 kr',
    description: 'Marinerad kycklingfilé i tomatsås, saffransris med zereshk (berberisbär) och pistagenötter.'
  },
  {
    id: 'ghormeh-sabzi',
    pillCategory: 'stews',
    category: 'Persisk nationalörtgryta',
    name: 'Ghormeh-Sabzi',
    location: 'Valhallavägen 120, Stockholm',
    rating: 4.9,
    ratingStr: '4.9',
    venueType: 'Klassiker på',
    venueName: 'Sima Deli',
    image: '/images/ghormeh-sabzi.jpg',
    price: '189 kr',
    description: 'Traditionell örtgryta med kidneybönor, mört kött och torkad svart lime.'
  },
  {
    id: 'baghali-polo',
    pillCategory: 'rice',
    category: 'Långkokt lammlägg',
    name: 'Baghali-Polo Mahiche',
    location: 'Valhallavägen 120, Stockholm',
    rating: 4.9,
    ratingStr: '4.9',
    venueType: 'Festmåltid på',
    venueName: 'Sima Deli',
    image: '/images/baghali-polo.jpg',
    price: '259 kr',
    description: 'Mört lammlägg serverat med saffransris, dill och bondbönor.'
  },
  {
    id: 'tahchin',
    pillCategory: 'rice',
    category: 'Saffransriskaka',
    name: 'Tahchin',
    location: 'Valhallavägen 120, Stockholm',
    rating: 4.8,
    ratingStr: '4.8',
    venueType: 'Helgspecial på',
    venueName: 'Sima Deli',
    image: '/images/tahchin.jpg',
    price: '189 kr',
    description: 'Krispig saffransriskaka med kryddad kyckling, yoghurt och berberisbär.'
  },
  {
    id: 'gheymeh',
    pillCategory: 'stews',
    category: 'Långkokt linsgryta',
    name: 'Gheymeh Bademjan',
    location: 'Valhallavägen 120, Stockholm',
    rating: 4.7,
    ratingStr: '4.7',
    venueType: 'Favorit på',
    venueName: 'Sima Deli',
    image: '/images/gheymeh.jpg',
    price: '189 kr',
    description: 'Gryta med gula linser, ugnsrostade auberginer, körsbärstomater och saffransris.'
  },
  {
    id: 'mazeh-tallrik',
    pillCategory: 'mazeh',
    category: 'Persisk delningsplanka',
    name: 'Sima Mazeh-tallrik',
    location: 'Valhallavägen 120, Stockholm',
    rating: 4.9,
    ratingStr: '4.9',
    venueType: 'Bästsäljare på',
    venueName: 'Sima Deli',
    image: '/images/mazeh-tallrik.jpg',
    price: '219 kr',
    description: 'Urval av persiska röror – Kashke Bademjan, Olovieh, Mast-o-Moosir och hembakat bröd.'
  },
  {
    id: 'shirazi-salad',
    pillCategory: 'mazeh',
    category: 'Färsk persisk sallad',
    name: 'Salad Shirazi',
    location: 'Valhallavägen 120, Stockholm',
    rating: 4.7,
    ratingStr: '4.7',
    venueType: 'Traditionell på',
    venueName: 'Sima Deli',
    image: '/images/shirazi-salad.jpg',
    price: '65 kr',
    description: 'Fint tärnad gurka, tomat, rödlök, torkad mynta, jungfruolivolja och citron.'
  },
  {
    id: 'mastmoosir',
    pillCategory: 'mazeh',
    category: 'Silkeslen persisk yoghurt',
    name: 'Mast-o-Moosir',
    location: 'Valhallavägen 120, Stockholm',
    rating: 4.8,
    ratingStr: '4.8',
    venueType: 'Husets röra på',
    venueName: 'Sima Deli',
    image: '/images/mastmoosir.jpg',
    price: '69 kr',
    description: 'Krämig persisk yoghurt med vild bergslök och aromatiska örter.'
  },
  {
    id: 'olovieh',
    pillCategory: 'mazeh',
    category: 'Persisk potatissallad',
    name: 'Salad Olovieh',
    location: 'Valhallavägen 120, Stockholm',
    rating: 4.7,
    ratingStr: '4.7',
    venueType: 'Traditionell på',
    venueName: 'Sima Deli',
    image: '/images/olovieh.jpg',
    price: '89 kr',
    description: 'Klassisk persisk potatissallad med kyckling, gröna ärtor och saltgurka.'
  },
  {
    id: 'koo-koo',
    pillCategory: 'mazeh',
    category: 'Färsk örtomelett',
    name: 'Koo-Koo Sabzi',
    location: 'Valhallavägen 120, Stockholm',
    rating: 4.8,
    ratingStr: '4.8',
    venueType: 'Specialitet på',
    venueName: 'Sima Deli',
    image: '/images/koo-koo.jpg',
    price: '95 kr',
    description: 'Persisk örtomelett fylld med berberisbär, valnötter och färsk vitlök.'
  },
  {
    id: 'sholeh-zard',
    pillCategory: 'desserts',
    category: 'Saffransdessert med rosenvatten',
    name: 'Sholeh Zard',
    location: 'Valhallavägen 120, Stockholm',
    rating: 4.8,
    ratingStr: '4.8',
    venueType: 'Traditionell på',
    venueName: 'Sima Deli',
    image: '/images/sholeh-zard.jpg',
    price: '79 kr',
    description: 'Klassisk saffransrispudding kryddad med rosenvatten, kanel och pistage.'
  }
];

export const MenuLayoutTasteAtlas: React.FC<MenuLayoutProps> = () => {
  const [activeFilterTab, setActiveFilterTab] = useState<'selection' | 'popular' | 'rating' | 'alpha'>('selection');
  const [selectedPill, setSelectedPill] = useState<string>('all');
  const [bookmarked, setBookmarked] = useState<Record<string, boolean>>({});

  const toggleBookmark = (id: string) => {
    setBookmarked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const navItems = [
    { id: 'all', label: 'Alla Våra Rätter', pillId: 'all' },
    { id: 'stews', label: 'Varma Grytor & Varmrätter', pillId: 'stews' },
    { id: 'rice', label: 'Saffransrisrätter', pillId: 'rice' },
    { id: 'mazeh', label: 'Persisk Mazeh & Sallader', pillId: 'mazeh' },
    { id: 'desserts', label: 'Desserter & Saffran', pillId: 'desserts' }
  ];

  const pillCategories = [
    { id: 'all', label: 'Alla Rätter', count: TASTE_ATLAS_ITEMS.length },
    { id: 'stews', label: 'Grytor & Varmrätter', count: TASTE_ATLAS_ITEMS.filter((i) => i.pillCategory === 'stews').length },
    { id: 'rice', label: 'Saffransrisrätter', count: TASTE_ATLAS_ITEMS.filter((i) => i.pillCategory === 'rice').length },
    { id: 'mazeh', label: 'Mazeh & Förrätter', count: TASTE_ATLAS_ITEMS.filter((i) => i.pillCategory === 'mazeh').length },
    { id: 'desserts', label: 'Desserter & Sött', count: TASTE_ATLAS_ITEMS.filter((i) => i.pillCategory === 'desserts').length }
  ];

  // 1. FILTER ITEMS DYNAMICALLY ON CLICK
  const filteredItems = selectedPill === 'all'
    ? TASTE_ATLAS_ITEMS
    : TASTE_ATLAS_ITEMS.filter((dish) => dish.pillCategory === selectedPill);

  // 2. SORT ITEMS DYNAMICALLY ON CLICK
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (activeFilterTab === 'popular' || activeFilterTab === 'rating') {
      return b.rating - a.rating;
    }
    if (activeFilterTab === 'alpha') {
      return a.name.localeCompare(b.name, 'sv');
    }
    return 0; // selection
  });

  return (
    <div className="w-full min-h-screen bg-[#FAF8F5] pt-24 sm:pt-28 pb-24 font-sans animate-fadeIn text-[#1C1917]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="pb-8 space-y-2 border-b border-[#EAE3DA]">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E03A3E]">
            Sima Deli Matguide & Atlas
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917]">
            Autentisk Persisk Matguide
          </h1>
          <p className="text-xs sm:text-sm text-[#78716C] max-w-2xl font-light">
            En kulinarisk guide till våra traditionella persiska rätter på Valhallavägen 120. Klicka på kategorierna eller flikarna för att filtrera och sortera bland rätterna.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8">
          
          {/* ========================================================================= */}
          {/* LEFT SIDEBAR: Innehållsförteckning & Kategori Navigation                 */}
          {/* ========================================================================= */}
          <aside className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-3xl border border-[#ECE5DC] p-6 shadow-xs space-y-4">
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-[#1C1917]">
                Kategorier
              </h3>

              <nav className="space-y-1.5 text-xs">
                {navItems.map((item) => {
                  const isActive = selectedPill === item.pillId;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedPill(item.pillId)}
                      className={`w-full text-left flex items-center justify-between py-2.5 px-3 rounded-2xl transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#E03A3E]/10 font-bold text-[#E03A3E]'
                          : 'font-normal text-[#57534E] hover:text-[#1C1917] hover:bg-stone-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <Check className="w-3.5 h-3.5 text-[#E03A3E]" />}
                    </button>
                  );
                })}
              </nav>

              <div className="pt-4 border-t border-[#ECE5DC] text-[11px] text-[#78716C] space-y-1">
                <div className="font-bold text-stone-900">Sima Deli Stockholm</div>
                <div>Valhallavägen 120, Östermalm</div>
                <div className="text-[#E03A3E] font-medium">Boka bord: 08-660 36 35</div>
              </div>
            </div>
          </aside>

          {/* ========================================================================= */}
          {/* MAIN EXPLORER AREA: Filter Tabs, Pills & Grid                             */}
          {/* ========================================================================= */}
          <main className="lg:col-span-9 space-y-7">
            
            {/* 1. Sorteringsflikar: Klicka för att sortera */}
            <div className="flex items-center gap-6 sm:gap-8 border-b border-[#EAE3DA] pb-2 text-xs">
              <button
                onClick={() => setActiveFilterTab('selection')}
                className={`pb-2.5 font-medium transition-colors cursor-pointer relative ${
                  activeFilterTab === 'selection'
                    ? 'text-[#E03A3E] font-bold'
                    : 'text-[#78716C] hover:text-[#1C1917]'
                }`}
              >
                Utvalda Rätter
                {activeFilterTab === 'selection' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E03A3E]" />
                )}
              </button>

              <button
                onClick={() => setActiveFilterTab('popular')}
                className={`pb-2.5 font-medium transition-colors cursor-pointer relative ${
                  activeFilterTab === 'popular'
                    ? 'text-[#E03A3E] font-bold'
                    : 'text-[#78716C] hover:text-[#1C1917]'
                }`}
              >
                Mest Populära
                {activeFilterTab === 'popular' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E03A3E]" />
                )}
              </button>

              <button
                onClick={() => setActiveFilterTab('rating')}
                className={`pb-2.5 font-medium transition-colors cursor-pointer relative ${
                  activeFilterTab === 'rating'
                    ? 'text-[#E03A3E] font-bold'
                    : 'text-[#78716C] hover:text-[#1C1917]'
                }`}
              >
                Högst Betyg
                {activeFilterTab === 'rating' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E03A3E]" />
                )}
              </button>

              <button
                onClick={() => setActiveFilterTab('alpha')}
                className={`pb-2.5 font-medium transition-colors cursor-pointer relative ${
                  activeFilterTab === 'alpha'
                    ? 'text-[#E03A3E] font-bold'
                    : 'text-[#78716C] hover:text-[#1C1917]'
                }`}
              >
                Alfabetiskt
                {activeFilterTab === 'alpha' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E03A3E]" />
                )}
              </button>
            </div>

            {/* 2. Kategori-Pills: Klicka för att filtrera rätterna */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {pillCategories.map((pill) => {
                const isSelected = selectedPill === pill.id;
                return (
                  <button
                    key={pill.id}
                    onClick={() => setSelectedPill(pill.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 shadow-xs ${
                      isSelected
                        ? 'bg-[#E03A3E] text-white shadow-md scale-105'
                        : 'bg-white text-[#57534E] hover:bg-[#F3EDE5] border border-[#ECE7E1]'
                    }`}
                  >
                    <span>{pill.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-stone-100 text-[#78716C]'}`}>
                      {pill.count}
                    </span>
                  </button>
                );
              })}
              
              <button
                onClick={() => setSelectedPill('all')}
                className="w-8 h-8 rounded-full bg-white border border-[#D6CCC2] hover:bg-stone-100 flex items-center justify-center shrink-0 cursor-pointer text-[#78716C]"
                title="Visa alla"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* 3. Rubrik och antal visade rätter */}
            <div className="pt-2 flex items-center justify-between">
              <h2 className="font-serif text-2xl font-bold text-[#1C1917] tracking-tight">
                Måste Provas på Sima Deli
              </h2>
              <span className="text-xs text-[#78716C]">
                Visar {sortedItems.length} av {TASTE_ATLAS_ITEMS.length} rätter
              </span>
            </div>

            {/* 4. The 4-Column Card Grid with Uncropped Dishes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sortedItems.map((dish) => {
                const isBookmarked = Boolean(bookmarked[dish.id]);

                return (
                  <div key={dish.id} className="space-y-3 bg-white p-3.5 rounded-3xl border border-[#ECE5DC] shadow-xs hover:shadow-md transition-shadow group flex flex-col justify-between">
                    
                    {/* Image with Bookmark Icon - Full uncropped */}
                    <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-stone-50 border border-stone-100 p-2 flex items-center justify-center">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />

                      {/* Bookmark Icon in top right */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleBookmark(dish.id);
                        }}
                        className={`absolute top-3 right-3 p-1.5 rounded-full backdrop-blur-xs transition-colors cursor-pointer shadow-xs ${
                          isBookmarked ? 'bg-[#E03A3E] text-white' : 'bg-black/40 hover:bg-black/60 text-white'
                        }`}
                        title={isBookmarked ? 'Sparad i favoriter' : 'Spara som favorit'}
                      >
                        <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-white text-white' : 'text-white'}`} />
                      </button>
                    </div>

                    {/* Dish Information */}
                    <div className="space-y-1.5 text-xs px-1">
                      {/* Category Label */}
                      <div className="text-[11px] text-[#78716C] font-normal leading-tight">
                        {dish.category}
                      </div>

                      {/* Dish Name in Bold */}
                      <h3 className="font-bold text-sm text-[#1C1917] leading-snug group-hover:text-[#E03A3E] transition-colors">
                        {dish.name}
                      </h3>

                      {/* Price & Rating */}
                      <div className="flex items-center justify-between pt-0.5">
                        <span className="font-serif font-bold text-sm text-[#E03A3E]">
                          {dish.price}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] text-[#1C1917] font-semibold">
                          <Star className="w-3 h-3 text-[#E03A3E] fill-[#E03A3E] shrink-0" />
                          <span>{dish.ratingStr}</span>
                        </div>
                      </div>

                      {/* Location with Red Pin */}
                      <div className="flex items-center gap-1 text-[11px] text-[#57534E] pt-1 border-t border-stone-100">
                        <MapPin className="w-3 h-3 text-[#E03A3E] shrink-0 fill-[#E03A3E]" />
                        <span className="line-clamp-1">{dish.location}</span>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </main>
        </div>
      </div>
    </div>
  );
};
