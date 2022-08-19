import { ComponentPropsWithoutRef, ElementType, ReactNode, useMemo } from 'react';

import clsx from 'clsx';

export type ListItemProps<T extends ElementType> = {
  /**
   * Show a label around the list
   */
  primary: string;
  /**
   * Show a label around the list
   */
  secondary?: string;
  /**
   * Show the list item as active
   */
  active?: boolean;
  /**
   * If we have a href, it's an anchor.
   */
  href?: string;
  /**
   * If we have an onClick, it's an button.
   */
  onClick?: () => void;
  /**
   * The color of the list item
   */
  color?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'teal' | 'cyan' | 'blue' | 'indigo' | 'violet' | 'purple' | 'pink' | 'rose' | 'brown' | 'grey' | 'accent';
  /**
   * Theme the item fully
   */
  fullColor?: boolean;
  /**
   * Disable the list item
   */
  disabled?: boolean;
  /**
   * Start icon
   */
  startIcon?: ReactNode;
  /**
   * End icon
   */
  endIcon?: ReactNode;
  /**
   * Truncate the label
   */
  truncate?: boolean;
  /**
   * Start action
   */
  startAction?: ReactNode;
  /**
   * End action
   */
  endAction?: ReactNode;
  /**
   * Custom classes for the container box
   */
  className?: string;
  /**
   * As what the component should be rendered
   */
  as?: T;
} & ComponentPropsWithoutRef<T>;

/**
 * Primary UI component for user interaction
 */
export function ListItem<T extends ElementType>({
  active,
  primary,
  secondary,
  className,
  href,
  onClick,
  color,
  fullColor,
  disabled,
  startIcon,
  endIcon,
  startAction,
  endAction,
  as,
  truncate,
  ...props
}: ListItemProps<T>) {
  const Component = useMemo(() => (as ? as : ((startAction || endAction) ? 'label' : (href ? 'a' : (onClick ? 'button' : 'li')))), [as, href, onClick, startAction, endAction]);

  return (
    <Component
      className={clsx(
        'list-item',
        {
          [`${color}`]: color,
          'active': active,
          'list-item-colored': fullColor,
          'disabled': disabled
        },
        className
      )}
      disabled={disabled}
      onClick={onClick}
      href={href}
      {...props}
    >
      {startAction && <span className="list-item-action-s">{startAction}</span>}
      {startIcon && <span className="list-item-icon-s">{startIcon}</span>}
      {primary && <span className={clsx('list-item-label', { 'text-truncate': truncate })}>{primary}</span>}
      {secondary && <span className={clsx('list-item-description', { 'text-truncate': truncate })}>{secondary}</span>}
      {endIcon && <span className="list-item-icon-e">{endIcon}</span>}
      {endAction && <span className="list-item-action-e">{endAction}</span>}
    </Component>
  );
};

export default ListItem;
