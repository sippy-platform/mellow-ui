import { ButtonHTMLAttributes, ElementType, ReactNode, useMemo } from 'react';

import clsx from 'clsx';

export interface BottomBarItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
  as?: string | ElementType;
  /**
   * Bottom bar item contents.
   */
  children: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export function BottomBarItem({
  active,
  icon,
  children,
  href,
  className,
  as,
  ...props
}: BottomBarItemProps) {
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
