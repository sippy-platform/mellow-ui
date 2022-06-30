import { ElementType, ButtonHTMLAttributes, ReactNode, useMemo } from 'react';

import { Menu as MenuPrimitive } from '@headlessui/react';

import clsx from 'clsx';

export interface MenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Active menu item
   */
  active?: boolean;
  /**
   * Disable the menu item
   */
  disabled?: boolean;
  /**
   * If we have a href, it's an anchor.
   */
  href?: string;
  /**
   * As what the component should be rendered
   */
  as?: ElementType;
  /**
   * Custom classes for active items
   */
   activeClassName?: string;
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
  disabled,
  activeClassName = 'active',
  href,
  as,
  active: forcedActive,
  ...props
}: MenuItemProps) => {
  const Component = useMemo(() => (as ? as : (href ? 'a' : 'button')) as ElementType, [as, href]);

  return (
    <MenuPrimitive.Item
      disabled={disabled}
      {...props}
    >
      {({ active }) => (
        <Component
          disabled={disabled}
          className={clsx(
            'dropdown-item',
            className,
            {
              [activeClassName]: active || forcedActive,
              'disabled': disabled
            }
          )}
          href={href}
        >
          {children}
        </Component>
      )}
    </MenuPrimitive.Item>
  );
};

export default MenuItem;
