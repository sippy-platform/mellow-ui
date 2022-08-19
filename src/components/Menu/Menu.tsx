import { ReactNode } from 'react';

import { Menu as MenuPrimitive } from '@headlessui/react';

export interface MenuProps {
  /**
   * The contents of the dialog
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Menu = ({
  children,
  ...props
}: MenuProps) => {
  return (
    <MenuPrimitive {...props}>
      <div className="dropdown">
        {children}
      </div>
    </MenuPrimitive>
  );
};

export default Menu;
