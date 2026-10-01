import React from 'react';
import { MenuLayoutFoody } from '../components/menu/MenuLayoutFoody';
import { MenuNavHeader } from '../components/menu/MenuNavHeader';

interface MenyPageProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export const MenyPage1: React.FC<MenyPageProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      {/* Top subtle menu page navigation */}
      <MenuNavHeader currentMenuNumber={1} onNavigate={onNavigate} />

      {/* Standalone Menu 1 */}
      <main>
        <MenuLayoutFoody onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
      </main>
    </div>
  );
};
