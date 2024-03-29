import { Menu } from '@headlessui/react';
import clsx from 'clsx';
import React, { ReactNode } from 'react';

import { MellowColor } from '@types';

export interface DropdownProps {
  /**
   * The color of the button, only works when the variant is `color` or `hover`
   */
  color?: MellowColor;
  /**
   * Value of the textarea
   */
  trigger: ReactNode;
  /**
   * Custom classes for the label
   */
  className?: string;
  /**
   * Custom classes for the label
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Dropdown = ({
  className,
  color,
  trigger,
  children,
  ...props
}: DropdownProps) => {
  return (
    <div className="dropdown">
      <Menu>
        <Menu.Button as={React.Fragment}>{trigger}</Menu.Button>
        <Menu.Items
          className={clsx(
            'dropdown-menu',
            color,
            className
          )}
          {...props}
        >
          {children}
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default Dropdown;
