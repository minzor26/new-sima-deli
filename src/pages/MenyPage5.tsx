import React from 'react';
import { MenuLayoutSoulFood } from '../components/menu/MenuLayoutSoulFood';

interface MenyPageProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export const MenyPage5: React.FC<MenyPageProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <main className="w-full min-h-screen">
      <MenuLayoutSoulFood onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
    </main>
  );
};
