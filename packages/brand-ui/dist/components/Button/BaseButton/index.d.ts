/** @jsxRuntime classic */
/** @jsx jsx */
import { SxStyleProp } from 'theme-ui';
import { Ref } from 'react';
import { ButtonProps as ReakitProps } from 'reakit';
/**
 * Elementary accessible button component that can be reused by all VTEX Styleguides.
 * You can use reakit full features and theme-ui's sx.
 * It renders a button element by default.
 * This is a styled base component, so any system can theme it.
 * You may configure your `buttons` property of the theme object.
 * @example
 * ```jsx
 * import { Button, ButtonProps } from `./BaseButton`
 *
 * const theme = {
 *  colors: {
 *    primary: 'pink'
 *  }
 *  buttons: {
 *    'primary-regular': { bg: 'primary', px: 2 },
 *    'primary-small': { bg: 'primary', px: 1 },
 *  }
 * }
 *
 * <Button variant="primary-small">Small Primary Button</Button>
 * ```
 */
declare function Button(props: ButtonProps, ref: Ref<HTMLButtonElement>): JSX.Element;
export interface ButtonProps extends Omit<ReakitProps, 'as'> {
    /**
     * ThemeUI sx prop
     * @default {}
     */
    sx?: SxStyleProp;
    /**
     * Button variant consumed from 'buttons'
     * @default ''
     */
    variant?: string;
    size?: string;
}
declare const _default: typeof Button;
export default _default;
