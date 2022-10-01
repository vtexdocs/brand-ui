import React from 'react';
import { SxStyleProp } from 'theme-ui';
export declare const Skeleton: (props: SkeletonProps) => JSX.Element;
export declare type SkeletonShape = 'rect' | 'circle';
export interface SkeletonProps {
    /**
    * Aditional styles
    * @default {}
    */
    sx?: SxStyleProp;
    /**
     * Shape of the skeleton
     * @default 'rect'
     */
    shape?: SkeletonShape;
    /**
   * Element type
   * @default 'div'
   * */
    el?: React.ElementType;
}
