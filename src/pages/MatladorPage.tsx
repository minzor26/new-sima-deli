import React, { useState } from 'react';
import { RETAIL_LOCATIONS } from '../data/siteData';
import { MapPin, Navigation, Search, Store, ArrowUpRight } from 'lucide-react';

export const MatladorPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLocations = RETAIL_LOCATIONS.filter(
    (loc) =>
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.cityArea.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#c6a04a] bg-[#cdebf2]/40 px-3 py-1 rounded-full border border-[#cdebf2]">
          Återförsäljare i Stockholm
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917]">
          Sima Deli matlådor
        </h1>
        <p className="font-serif text-xl sm:text-2xl text-[#1e5f6e] italic font-medium">
          “Här kan du hitta Sima Delis färdiglagade matlådor”
        </p>
        <p className="text-xs sm:text-sm text-[#78716C] max-w-xl mx-auto leading-relaxed">
          Våra autentiska persiska rätter tillagas färska och levereras till ledande livsmedelsbutiker runt om i Storstockholm. Perfekt till lunchen på kontoret eller en snabb gourmetmiddag hemma.
        </p>
      </div>

      {/* Search / Filter Bar */}
      <div className="max-w-md mx-auto relative">
        <Search className="w-4 h-4 text-[#1e5f6e] absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Sök butik eller område (t.ex. Kista, Solna, City)..."
          className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-[#cdebf2] focus:border-[#c6a04a] focus:outline-hidden text-xs text-[#1C1917] shadow-2xs placeholder:text-[#A8A29E]"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#78716C] hover:text-[#1C1917]"
          >
            Rensa
          </button>
        )}
      </div>

      {/* Locations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLocations.map((loc, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 border border-[#cdebf2]/80 hover:border-[#cdebf2] shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-[#cdebf2] flex items-center justify-center text-[#1e5f6e] border border-[#b8e2ec]">
                    <Store className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1e5f6e] bg-[#cdebf2]/40 px-2.5 py-0.5 rounded-full border border-[#cdebf2]">
                    {loc.cityArea}
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-xl font-bold text-[#1C1917] group-hover:text-[#c6a04a] transition-colors mb-2">
                {loc.name}
              </h3>

              <div className="flex items-start gap-2 text-xs text-[#57534E] leading-relaxed">
                <MapPin className="w-4 h-4 text-[#c6a04a] shrink-0 mt-0.5" />
                <span>{loc.address}</span>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-[#cdebf2]/50">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${loc.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-[#cdebf2]/30 hover:bg-[#cdebf2] text-[#1e5f6e] border border-[#cdebf2]/60 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#c6a04a]" />
                <span>Vägbeskrivning i Google Maps</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredLocations.length === 0 && (
        <div className="text-center py-12 text-[#78716C] text-sm">
          Inga butiker matchade "{searchQuery}". Försök med en annan sökterm eller se hela listan ovan.
        </div>
      )}

      {/* Retailer Partnership Callout */}
      <div className="bg-gradient-to-br from-[#cdebf2]/40 via-[#FAF7F2] to-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#cdebf2] text-center max-w-2xl mx-auto space-y-4 shadow-2xs">
        <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
          Vill din butik bli återförsäljare?
        </h3>
        <p className="text-xs text-[#57534E] leading-relaxed">
          Vi samarbetar gärna med fler butiker, livsmedelskedjor och delikatessaffärer som vill erbjuda färska persiska kvalitetsmatlådor. Kontakta oss på <a href="mailto:info@simadeli.com" className="font-bold underline text-[#c6a04a]">info@simadeli.com</a>.
        </p>
      </div>

    </div>
  );
};
