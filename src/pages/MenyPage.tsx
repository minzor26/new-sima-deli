import React from 'react';
import { MenyPage1 } from './MenyPage1';

interface MenyPageProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export const MenyPage: React.FC<MenyPageProps> = (props) => {
  return <MenyPage1 {...props} />;
};
