import { ReactNode } from 'react';

import { Menu as MenuPrimitive } from '@headlessui/react';

export interface MenuTriggerProps {
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
export const MenuTrigger = ({
  open,
  children,
  ...props
}: MenuTriggerProps) => {
  return (
    <MenuPrimitive.Button className="btn btn-default" {...props}>
      {children}
    </MenuPrimitive.Button>
  );
};

export default MenuTrigger;
