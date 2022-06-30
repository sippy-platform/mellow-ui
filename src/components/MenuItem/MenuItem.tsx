import { ElementType, ButtonHTMLAttributes, ReactNode, useMemo, ComponentPropsWithoutRef } from 'react';

import { Menu as MenuPrimitive } from '@headlessui/react';

import clsx from 'clsx';

interface IMenuItemProps<T> extends ButtonHTMLAttributes<HTMLButtonElement> {
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

export type MenuItemProps<T extends ElementType> = IMenuItemProps<T> & ComponentPropsWithoutRef<T>;

/**
 * Primary UI component for user interaction
 */
export function MenuItem<T extends ElementType>({
  children,
  className,
  disabled,
  activeClassName = 'active',
  href,
  as,
  active: forcedActive,
  ...props
}: MenuItemProps<T>) {
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
