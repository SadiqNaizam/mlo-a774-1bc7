import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A generic layout component that centers its children in the middle of the screen.
 * It applies a full-screen height and a flexbox container to achieve vertical and horizontal alignment.
 * The background color is inherited from the `bg-background` Tailwind theme variable.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex items-center justify-center min-h-screen bg-background p-4',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
