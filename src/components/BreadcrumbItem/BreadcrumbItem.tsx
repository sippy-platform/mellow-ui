import { ButtonHTMLAttributes, ElementType, ReactNode, useMemo } from 'react';

import clsx from 'clsx';

export interface BreadcrumbItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
  as?: ElementType;
  /**
   * Bottom bar item contents.
   */
  children: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export function BreadcrumbItem({
  active,
  icon,
  children,
  href,
  className,
  as,
  onClick,
  ...props
}: BreadcrumbItemProps) {
  const Component = useMemo(() => (as ? as : (href ? 'a' : 'button')) as ElementType, [as, href]);

  return (
    <span
      className={clsx(
        'breadcrumb-item',
        {
          'active': active
        },
        className
      )}
      {...props}
    >
      <Component href={href} onClick={onClick}>{children}</Component>
    </span>
  );
};

export default BreadcrumbItem;
