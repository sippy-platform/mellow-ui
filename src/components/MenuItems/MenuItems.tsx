import { ReactNode } from 'react';

import { Menu as MenuPrimitive } from '@headlessui/react';

import clsx from 'clsx';

export interface MenuItemsProps {
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
export const MenuItems = ({
  children,
  className,
  ...props
}: MenuItemsProps) => {
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

export default MenuItems;
