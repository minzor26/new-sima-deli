import React from 'react';
import { MenuLayoutA } from '../components/menu/MenuLayoutA';

interface MenyPageProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export const MenyPage3: React.FC<MenyPageProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <main>
        <MenuLayoutA onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
      </main>
    </div>
  );
};
