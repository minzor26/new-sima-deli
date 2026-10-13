import React from 'react';
import { MenuLayoutD } from '../components/menu/MenuLayoutD';

interface MenyPageProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export const MenyPage5: React.FC<MenyPageProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <main className="w-full min-h-screen">
      <MenuLayoutD onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
    </main>
  );
};
