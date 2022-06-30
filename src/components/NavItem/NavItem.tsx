import React, { ReactNode } from 'react';

import clsx from 'clsx';

export interface NavItemProps {
  /**
   * Custom classes for the label
   */
  active?: boolean;
  /**
   * Custom classes for the label
   */
  className?: string;
  /**
   * The label attached to the label
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const NavItem = ({
  className,
  active,
  children
}: NavItemProps) => {
  return (
    <>
      <button
        className={clsx(
          'pivot-link',
          {
            'active': active
          },
          className
        )}
      >
        {children}
      </button>
    </>
  );
};

export default NavItem;
