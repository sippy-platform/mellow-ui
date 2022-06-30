import { ButtonHTMLAttributes, ComponentPropsWithoutRef, ElementType, ReactNode, useMemo } from 'react';

import clsx from 'clsx';

interface IBottomBarItemProps<T> extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Bottom bar item activation state.
   */
  active?: boolean;
  /**
   * Icon
   */
  icon?: ReactNode;
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
   * Bottom bar item contents.
   */
  children: ReactNode;
};

export type BottomBarItemProps<T extends ElementType> = IBottomBarItemProps<T> & ComponentPropsWithoutRef<T>;

/**
 * Primary UI component for user interaction
 */
export function BottomBarItem<T extends ElementType>({
  active,
  icon,
  children,
  href,
  className,
  as,
  ...props
}: BottomBarItemProps<T>) {
  const Component = useMemo(() => (as ? as : (href ? 'a' : 'button')) as ElementType, [as, href]);

  return (
    <Component
      className={clsx(
        'bottom-bar-item',
        {
          'active': active
        },
        className
      )}
      {...props}
    >
      <span className="bottom-bar-item-icon">{icon}</span>
      <span className="bottom-bar-item-label">{children}</span>
    </Component>
  );
};

export default BottomBarItem;
