import { ReactNode, useMemo } from 'react';

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
  variant?: 'default' | 'plated';
  /**
   * The color of the avatar, only works when the variant is `color` or `hover`
   */
  color?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'teal' | 'cyan' | 'blue' | 'indigo' | 'violet' | 'purple' | 'pink' | 'rose' | 'brown' | 'grey' | 'accent' | true;
  /**
   * The avatar size.
   */
  size?: 'sm' | 'md' | 'lg';
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
  disableInitials,
  className,
  ...props
}: AvatarProps) {
  const colors = ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'teal', 'cyan', 'blue', 'indigo', 'violet', 'purple', 'pink', 'rose', 'brown', 'grey'];

  const getHashOfString = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    hash = Math.abs(hash);
    return hash;
  };

  const avatarLabel = useMemo(() => {
    if (disableInitials) {
      return label;
    }

    let initials = label?.match(/\b\w/g) || [];
    return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
  }, [label, disableInitials])

  const avatarColor = useMemo(() => {
    if (!color) {
      const hash = getHashOfString(label);

      const colorIndex = Math.floor(hash % 16);

      return colors[colorIndex];
    }

    return color === true ? 'accent' : color;
  }, [label, color]);

  return (
    <div
      className={clsx(
        'avatar',
        {
          [`avatar-${variant}`]: variant === 'plated',
          [`avatar-${size}`]: size !== 'md',
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
