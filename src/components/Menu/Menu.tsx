import { ReactNode } from 'react';

import { Menu as MenuPrimitive } from '@headlessui/react';

import clsx from 'clsx';

export interface MenuProps {
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
export const Menu = ({
  open,
  children,
  ...props
}: MenuProps) => {
  return (
    <MenuPrimitive as="div" className="dropdown" {...props}>
      {children}
    </MenuPrimitive>
  );
};

export default Menu;
