import React from 'react';
import { MenuLayoutC } from '../components/menu/MenuLayoutC';
import { MenuNavHeader } from '../components/menu/MenuNavHeader';

interface MenyPageProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export const MenyPage4: React.FC<MenyPageProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <MenuNavHeader currentMenuNumber={4} onNavigate={onNavigate} />

      <main>
        <MenuLayoutC onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
      </main>
    </div>
  );
};
