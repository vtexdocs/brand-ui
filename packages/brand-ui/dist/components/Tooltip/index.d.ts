/// <reference types="react" />
import { TooltipProps as BaseProps } from './tooltip';
export declare const Tooltip: ({ children, ...props }: TooltipProps) => JSX.Element;
export interface TooltipProps extends Pick<BaseProps, 'label' | 'children' | 'visible' | 'sx'> {
    /**
     * Tooltip placement
     * @default top
     */
    placement?: 'top' | 'right' | 'bottom' | 'left';
}
