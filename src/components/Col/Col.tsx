import { ReactNode, useMemo, ElementType, ComponentPropsWithoutRef } from 'react';

import clsx from 'clsx';

type ColOrder = number | 'first' | 'last';
type ColSize = number | 'full';
type ColDefinition = ColSize | { span?: ColSize, start?: number, order?: ColOrder }

interface BreakpointConfig {
  [key: string]: ColDefinition | undefined
}

export type ColProps<T extends ElementType> = {
  /**
   * Column definition on the xs breakpoint
   */
  xs?: ColDefinition;
  /**
   * Column definition on the sm breakpoint
   */
  sm?: ColDefinition;
  /**
   * Column definition on the md breakpoint
   */
  md?: ColDefinition;
  /**
   * Column definition on the lg breakpoint
   */
  lg?: ColDefinition;
  /**
   * Column definition on the xl breakpoint
   */
  xl?: ColDefinition;
  /**
   * Column definition on the ul breakpoint
   */
  ul?: ColDefinition;
  /**
   * Custom classes for the col box
   */
  className?: string;
  /**
   * As what the component should be rendered
   */
  as?: T;
  /**
   * Children
   */
  children?: ReactNode;
} & ComponentPropsWithoutRef<T>;

/**
 * Primary UI component for user interaction
 */
export function Col<T extends ElementType>({
  xs = 1,
  sm,
  md,
  lg,
  xl,
  ul,
  as,
  className,
  ...props
}: ColProps<T>) {
  const gridClasses = useMemo(() => {
    const spans: string[] = [];
    const starts: string[] = [];
    const orders: string[] = [];

    ['xs', 'sm', 'md', 'lg', 'xl', 'ul'].forEach((breakpoint) => {
      const breakpointConfigs: BreakpointConfig = { xs, sm, md, lg, xl, ul  };
      const breakpointConfig: ColDefinition | undefined = breakpointConfigs[breakpoint];

      let span: ColSize | undefined;
      let start: number | undefined;
      let order: ColOrder | undefined;

      if (typeof breakpointConfig === 'object' && breakpointConfig !== null) {
        ({ span, start, order } = breakpointConfig);
      } else {
        span = breakpointConfig as ColSize;
      }

      const infix = breakpoint === 'xs' ? '' : `-${breakpoint}`;

      if (span) {
        spans.push(`col${infix}-${span}`);
      }

      if (start) {
        starts.push(`col-start${infix}-${start}`);
      }

      if (order !== undefined) {
        orders.push(`order${infix}-${order}`);
      }
    });

    return clsx(...spans, ...starts, ...orders);
  }, []);

  const Component = (as ?? 'div') as ElementType;

  return (
    <Component
      className={clsx(
        gridClasses,
        className
      )}
      {...props}
    >
      {props.children}
    </Component>
  );
};

export default Col;
