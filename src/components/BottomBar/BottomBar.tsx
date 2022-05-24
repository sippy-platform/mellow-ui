import { ReactNode } from 'react';

import clsx from 'clsx';

export interface BottomBarProps {
  /**
   * Custom classes for the bottom nav
   */
  className?: string;
  /**
   * Button contents.
   */
  children: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export function BottomBar({
  children,
  className,
  ...props
}: BottomBarProps) {
  return (
    <nav
      className={clsx(
        'bottom-bar',
        className
      )}
      {...props}
    >
      {children}
    </nav>
  );
};

export default BottomBar;
