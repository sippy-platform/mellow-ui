import { ReactNode } from 'react';

import clsx from 'clsx';

export interface BottomBarItemProps {
  /**
   * Bottom bar item activation state.
   */
  active?: boolean;
  /**
   * Icon
   */
  icon?: ReactNode;
  /**
   * Custom classes for the bottom bar
   */
  className?: string;
  /**
   * Bottom bar item contents.
   */
  children: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export function BottomBarItem({
  active,
  icon,
  children,
  className,
  ...props
}: BottomBarItemProps) {
  return (
    <nav
      className={clsx(
        'bottom-bar-item',
        {
          'active': active
        },
        className
      )}
      {...props}
    >
      <span className="bottom-bar-item-icon">{icon}</span>
      <span className="bottom-bar-item-label">{children}</span>
    </nav>
  );
};

export default BottomBarItem;
