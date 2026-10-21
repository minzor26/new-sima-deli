import React from 'react';
import { MenuLayoutClassic } from '../components/menu/MenuLayoutClassic';

interface MenyPageProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export const MenyPage1: React.FC<MenyPageProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <main className="w-full min-h-screen">
      <MenuLayoutClassic onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
    </main>
  );
};

