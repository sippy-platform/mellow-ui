import { ElementType, ReactNode, useMemo } from 'react';

import clsx from 'clsx';

export interface AvatarProps {
  /**
   * The variant of the avatar.
   */
  variant?: 'default' | 'plated';
  /**
   * The color of the avatar, only works when the variant is `color` or `hover`
   */
  color?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'teal' | 'cyan' | 'blue' | 'indigo' | 'violet' | 'purple' | 'pink' | 'rose' | 'brown' | 'grey' | 'accent';
  /**
   * The avatar size.
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Custom classes for the label
   */
  className?: string;
  /**
   * Button contents.
   */
  children: ReactNode;
  /**
   * Optional click handler.
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export default function Avatar({
  variant = 'default',
  size = 'md',
  color,
  className,
  children,
  ...props
}: AvatarProps) {
  return (
    <div
      className={clsx(
        'avatar',
        {
          [`avatar-${variant}`]: variant === 'plated',
          [`avatar-${size}`]: size !== 'md',
          [`${color}`]: color
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
