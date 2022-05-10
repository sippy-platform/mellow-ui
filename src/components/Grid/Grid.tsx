import { ElementType, ReactNode, useMemo } from 'react';

import clsx from 'clsx';

type GridDefinition = number | { grid?: number, gap?: number }

interface BreakpointConfig {
  [key: string]: GridDefinition | undefined
}

export interface GridProps {
  /**
   * Grid doubles as container
   */
  container?: boolean;
  /**
   * Grid definition on the xs breakpoint
   */
  xs?: GridDefinition;
  /**
   * Grid definition on the sm breakpoint
   */
  sm?: GridDefinition;
  /**
   * Grid definition on the md breakpoint
   */
  md?: GridDefinition;
  /**
   * Grid definition on the lg breakpoint
   */
  lg?: GridDefinition;
  /**
   * Grid definition on the xl breakpoint
   */
  xl?: GridDefinition;
  /**
   * Grid definition on the ul breakpoint
   */
  ul?: GridDefinition;
  /**
   * Custom classes for the grid box
   */
  className?: string;
  /**
   * As what the component should be rendered
   */
  as?: string | ElementType;
  /**
   * Children
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export function Grid({
  container,
  xs = { grid: 12, gap: 3 },
  sm,
  md,
  lg,
  xl,
  ul,
  as = 'div',
  className,
  ...props
}: GridProps) {
  const gridClasses = useMemo(() => {
    const grids: string[] = [];
    const gaps: string[] = [];

    ['xs', 'sm', 'md', 'lg', 'xl', 'ul'].forEach((breakpoint) => {
      const breakpointConfigs: BreakpointConfig = { xs, sm, md, lg, xl, ul  };
      const breakpointConfig: GridDefinition | undefined = breakpointConfigs[breakpoint];

      let grid: number | undefined;
      let gap: number | undefined;

      if (typeof breakpointConfig === 'object' && breakpointConfig !== null) {
        ({ grid, gap } = breakpointConfig);
      } else {
        grid = breakpointConfig as number;
      }

      if (!grid && breakpoint === 'xs') {
        grid = 12;
      }

      const infix = breakpoint === 'xs' ? '' : `-${breakpoint}`;

      if (grid) {
        grids.push(`grid${infix}-${grid}`);
      }

      if (gap !== undefined) {
        gaps.push(`gap${infix}-${gap}`);
      }
    });

    return clsx(...grids, ...gaps);
  }, []);

  const Component = (as ?? 'div') as ElementType;

  return (
    <Component
      className={clsx(
        {
          'container': container
        },
        'grid',
        gridClasses,
        className
      )}
      {...props}
    >
      {props.children}
    </Component>
  );
};

export default Grid;
