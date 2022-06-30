import { ElementType, ReactNode } from 'react';

import clsx from 'clsx';

export interface NavItemProps {
  /**
   * The type of the element
   */
  as?: ElementType;
  /**
   * Whether the element is active
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
  as = 'button',
  className,
  active,
  children,
  ...props
}: NavItemProps) => {
  const Component = as;

  return (
    <Component
      className={clsx(
        'pivot-link',
        {
          'active': active
        },
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default NavItem;
