import { ReactNode } from 'react';

import { Menu as MenuPrimitive } from '@headlessui/react';

import clsx from 'clsx';

export interface MenuItemProps {
  /**
   * Custom classes for the label
   */
  className?: string;
  /**
   * The contents of the dialog
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const MenuItem = ({
  children,
  className,
  ...props
}: MenuItemProps) => {
  return (
    <MenuPrimitive.Items
      className={clsx(
        'dropdown-menu',
        className
      )}
      {...props}
    >
      {children}
    </MenuPrimitive.Items>
  );
};

export default MenuItem;
