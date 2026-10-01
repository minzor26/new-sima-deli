import React from 'react';
import { MenuLayoutTasteAtlas } from '../components/menu/MenuLayoutTasteAtlas';

interface MenyPageProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export const MenyPage6: React.FC<MenyPageProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <main>
        <MenuLayoutTasteAtlas onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
      </main>
    </div>
  );
};
