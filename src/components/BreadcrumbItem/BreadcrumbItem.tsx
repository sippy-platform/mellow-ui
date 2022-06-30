import { ButtonHTMLAttributes, ComponentPropsWithoutRef, ElementType, ReactNode, useMemo } from 'react';

import clsx from 'clsx';

interface IBreadcrumbItemProps<T> extends ButtonHTMLAttributes<HTMLButtonElement> {
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
}

export type BreadcrumbItemProps<T extends ElementType> = IBreadcrumbItemProps<T> & ComponentPropsWithoutRef<T>;

/**
 * Primary UI component for user interaction
 */
export function BreadcrumbItem<T extends ElementType>({
  active,
  icon,
  children,
  href,
  className,
  as,
  onClick,
  ...props
}: BreadcrumbItemProps<T>) {
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
