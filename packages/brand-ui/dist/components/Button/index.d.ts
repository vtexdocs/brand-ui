import { Ref } from 'react';
import { SxStyleProp } from 'theme-ui';
import { ButtonProps as BaseProps } from './BaseButton';
/**
 * Component that handles all Button variants of the DS.
 * It renders a button jsx element by default
 * @example
 * import { Button, ButtonProps } from 'brand-ui'
 * <Button>Default Button</Button>
 */
export declare const Button: (props: ButtonProps, ref: Ref<HTMLButtonElement>) => JSX.Element;
export declare type Variant = 'primary' | 'secondary' | 'tertiary';
export declare type Size = 'small' | 'regular';
export interface ButtonProps extends Pick<BaseProps, 'sx' | 'disabled' | 'focusable' | 'children' | 'id' | 'type' | 'name' | 'onClick' | 'onMouseEnter' | 'onMouseLeave' | 'onMouseDown' | 'onMouseUp' | 'onFocus' | 'onMouseOver' | 'value'> {
    /** Size of the button
     * @default regular
     * */
    size?: Size;
    /** Button variant
     * @default primary
     * */
    variant?: Variant;
    /**
     * Icon of the button
     */
    icon?: (props: {
        size: number;
        sx: SxStyleProp;
    }) => JSX.Element;
    /**
     * Position of the icon
     * @default start
     */
    iconPosition?: 'start' | 'end';
    /**
     * Block type
     * @default false
     */
    block?: boolean;
    /**
     * Show focus on button before any action
     * @default false
     */
    showFocusOnInit?: boolean;
}
