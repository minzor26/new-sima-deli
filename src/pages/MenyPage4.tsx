import React from 'react';
import { MenuLayoutMidnight } from '../components/menu/MenuLayoutMidnight';

interface MenyPageProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export const MenyPage4: React.FC<MenyPageProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <main className="w-full min-h-screen">
      <MenuLayoutMidnight onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
    </main>
  );
};

