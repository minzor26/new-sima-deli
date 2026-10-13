import React from 'react';
import { MenuLayoutA } from '../components/menu/MenuLayoutA';

interface MenyPageProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export const MenyPage3: React.FC<MenyPageProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <main className="w-full min-h-screen">
      <MenuLayoutA onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
    </main>
  );
};
