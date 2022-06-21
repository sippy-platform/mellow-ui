import { ReactNode, useMemo } from 'react';
import useColor from '@hooks/useColor';

import clsx from 'clsx';

export interface AvatarProps {
  /**
   * The text for the avatar
   */
  label: string;
  /**
   * An icon for the avatar
   */
  icon?: ReactNode;
  /**
   * The variant of the avatar.
   */
  variant?: 'default' | 'solid';
  /**
   * The color of the avatar, only works when the variant is `color` or `hover`
   */
  color?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'teal' | 'cyan' | 'blue' | 'indigo' | 'violet' | 'purple' | 'pink' | 'rose' | 'brown' | 'grey' | 'accent' | true;
  /**
   * The avatar size.
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Enable border.
   */
  border?: boolean;
  /**
   * Disable initials.
   */
  disableInitials?: boolean;
  /**
   * Custom classes for the label
   */
  className?: string;
  /**
   * Optional click handler.
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export default function Avatar({
  label,
  icon,
  variant = 'default',
  size = 'md',
  color,
  border,
  disableInitials,
  className,
  ...props
}: AvatarProps) {
  const hookColor = useColor(label);

  const avatarLabel = useMemo(() => {
    if (disableInitials) {
      return label;
    }

    let initials = label?.match(/\b\w/g) || [];
    return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
  }, [label, disableInitials])

  const avatarColor = useMemo(() => {
    if (!color) {
      return hookColor;
    }

    return color === true ? 'accent' : color;
  }, [label, color]);

  return (
    <div
      className={clsx(
        'avatar',
        {
          [`avatar-${variant}`]: variant === 'solid',
          [`avatar-${size}`]: size !== 'md',
          [`avatar-border`]: border,
          [`${avatarColor}`]: avatarColor
        },
        className
      )}
      {...props}
    >
      {icon || avatarLabel}
    </div>
  );
};
