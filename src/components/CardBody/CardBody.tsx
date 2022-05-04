import React, { ReactNode } from 'react';

import clsx from 'clsx';

export interface CardBodyProps {
  /**
   * Custom classes for the dialog
   */
  className?: string;
  /**
   * CardBody contents.
   */
  children: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export function CardBody({
  className,
  children,
  ...props
}: CardBodyProps) {
  return (
    <div
      className={clsx(
        'card-body',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default CardBody;
