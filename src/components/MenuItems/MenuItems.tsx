import { ReactNode } from 'react';

import { Menu as MenuPrimitive } from '@headlessui/react';

export interface MenuItemsProps {
  /**
   * The open state
   */
  open: boolean;
  /**
   * The contents of the dialog
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const MenuItems = ({
  open,
  children,
  ...props
}: MenuItemsProps) => {
  return (
    <MenuPrimitive.Items className="dropdown-menu" {...props}>
      {children}
    </MenuPrimitive.Items>
  );
};

export default MenuItems;
