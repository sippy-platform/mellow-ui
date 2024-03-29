import { Menu } from '@headlessui/react';
import clsx from 'clsx';
import React, { ElementType, ReactNode, useMemo } from 'react';

import { MellowColor } from '@types';

export interface DropdownItemProps<T> {
  /**
   * The color of the button, only works when the variant is `color` or `hover`
   */
  color?: MellowColor;
  /**
   * Button active state.
   */
  active?: boolean;
  /**
   * Button disabled state.
   */
  disabled?: boolean;
  /**
   * If we have a href, it's an anchor.
   */
  href?: string;
  /**
   * Optional click handler.
   */
  onClick?: () => void;
  /**
   * Custom classes for the label
   */
  className?: string;
  /**
   * As what the component should be rendered
   */
  as?: T;
  /**
   * Custom classes for the label
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export function Dropdown<T>({
  href,
  className,
  as,
  color,
  active,
  disabled = false,
  children,
  onClick,
  ...props
}: DropdownItemProps<T>) {
  const Component = useMemo(() => (as ? as : (href ? 'a' : 'button')) as ElementType, [as, href]);

  return (
    <Menu.Item>
      {({ active: isActive }) => (
        <Component
          type="button"
          className={clsx(
            'dropdown-item',
            {
              'active': isActive || active,
            },
            color,
            className
          )}
          onClick={onClick}
          href={href}
          disabled={disabled}
          {...props}
        >
          {children}
        </Component>
      )}
    </Menu.Item>
  );
};

export default Dropdown;
