import React from 'react';
import { MenuLayoutGorms } from '../components/menu/MenuLayoutGorms';

interface MenyPageProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export const MenyPage7: React.FC<MenyPageProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <main className="w-full min-h-screen">
      <MenuLayoutGorms onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
    </main>
  );
};
