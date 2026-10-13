import React from 'react';
import { MenuLayoutTasteAtlas } from '../components/menu/MenuLayoutTasteAtlas';

interface MenyPageProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export const MenyPage6: React.FC<MenyPageProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <main className="w-full min-h-screen">
      <MenuLayoutTasteAtlas onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
    </main>
  );
};
