import React from 'react';
import { MenuLayoutGorms } from '../components/menu/MenuLayoutGorms';
import { MenuNavHeader } from '../components/menu/MenuNavHeader';

interface MenyPageProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export const MenyPage7: React.FC<MenyPageProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <MenuNavHeader currentMenuNumber={7} onNavigate={onNavigate} />

      <main>
        <MenuLayoutGorms onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
      </main>
    </div>
  );
};
