import React from 'react';
import { MenuLayoutC } from '../components/menu/MenuLayoutC';

interface MenyPageProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export const MenyPage4: React.FC<MenyPageProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <main className="w-full min-h-screen">
      <MenuLayoutC onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
    </main>
  );
};
