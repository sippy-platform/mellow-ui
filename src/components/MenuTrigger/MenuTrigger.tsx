import { ReactNode } from 'react';

import { Menu as MenuPrimitive } from '@headlessui/react';

import clsx from 'clsx';

export interface MenuTriggerProps {
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
export const MenuTrigger = ({
  children,
  className,
  ...props
}: MenuTriggerProps) => {
  return (
    <MenuPrimitive.Button
      className={clsx(className)}
      {...props}
    >
      {children}
    </MenuPrimitive.Button>
  );
};

export default MenuTrigger;
