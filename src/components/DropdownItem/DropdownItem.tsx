import { Menu } from '@headlessui/react';
import clsx from 'clsx';
import React, { ElementType, ReactNode, useMemo } from 'react';

export interface DropdownItemProps<T> {
  /**
   * The color of the button, only works when the variant is `color` or `hover`
   */
  color?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'teal' | 'cyan' | 'blue' | 'indigo' | 'violet' | 'purple' | 'pink' | 'rose' | 'brown' | 'grey' | 'accent';
  /**
   * Button disabled state.
   */
  disabled?: boolean;
  /**
   * If we have a href, it's an anchor.
   */
  href?: string;
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
  disabled = false,
  children,
  ...props
}: DropdownItemProps<T>) {
  const Component = useMemo(() => (as ? as : (href ? 'a' : 'button')) as ElementType, [as, href]);

  return (
    <Menu.Item>
      {({ active }) => (
        <Component
          type="button"
          className={clsx(
            'dropdown-item',
            {
              'active': active,
            },
            color,
            className
          )}
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
