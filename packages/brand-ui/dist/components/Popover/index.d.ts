import { PopoverProps as BaseProps } from './BasePopover';
import { BoxProps } from 'theme-ui';
export declare const Popover: {
    ({ children, placement, visible, variant, showClose, sx, fixed, ...props }: PopoverProps): JSX.Element;
    Content: ({ children, ...props }: BoxProps) => JSX.Element;
};
export interface PopoverProps extends Pick<BaseProps, 'children' | 'disclosure' | 'sx' | 'visible'> {
    /**
     *
     * @default top
     */
    placement?: 'top' | 'right' | 'bottom' | 'left';
    /**
     * Show the close icon on the top-right section of the popover
     * @default false
     */
    showClose?: boolean;
    /**
     * Whether the popover position must be set to fixed or not
     * @default false
     */
    fixed?: boolean;
    variant?: 'regular' | 'small';
}
