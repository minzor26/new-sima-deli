import React from 'react';
import { MenuLayoutFoody } from '../components/menu/MenuLayoutFoody';

interface MenyPageProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export const MenyPage1: React.FC<MenyPageProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <main>
        <MenuLayoutFoody onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
      </main>
    </div>
  );
};
