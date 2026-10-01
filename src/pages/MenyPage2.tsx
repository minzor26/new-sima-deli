import React from 'react';
import { MenuLayoutLuxuryDishes } from '../components/menu/MenuLayoutLuxuryDishes';

interface MenyPageProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export const MenyPage2: React.FC<MenyPageProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <main>
        <MenuLayoutLuxuryDishes onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
      </main>
    </div>
  );
};
