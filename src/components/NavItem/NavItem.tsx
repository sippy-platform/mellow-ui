import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import clsx from 'clsx';

export type NavItemProps<T extends ElementType> = {
  /**
   * The type of the element
   */
  as?: T;
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
} & ComponentPropsWithoutRef<T>;

/**
 * Primary UI component for user interaction
 */
export function NavItem<T extends ElementType>({
  as,
  active,
  className,
  children,
  ...props
}: NavItemProps<T>) {
  const Component = as || 'button';

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
