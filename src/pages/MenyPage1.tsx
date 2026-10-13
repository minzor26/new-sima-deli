import React from 'react';
import { MenuLayoutFoody } from '../components/menu/MenuLayoutFoody';

interface MenyPageProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export const MenyPage1: React.FC<MenyPageProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <main className="w-full min-h-screen">
      <MenuLayoutFoody onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
    </main>
  );
};
