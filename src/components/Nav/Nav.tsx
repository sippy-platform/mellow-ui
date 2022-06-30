import { ReactNode } from 'react';

import clsx from 'clsx';

export interface NavProps {
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
export const Nav = ({
  className,
  children
}: NavProps) => {
  return (
    <nav
      className={
        clsx(
          'pivot',
          className
        )
      }
    >
      {children}
    </nav>
  );
};

export default Nav;
