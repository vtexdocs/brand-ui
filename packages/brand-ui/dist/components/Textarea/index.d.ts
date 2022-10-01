/** @jsxRuntime classic */
/** @jsx jsx */
import type { PropsWithChildren } from 'react';
import type { SxStyleProp } from 'theme-ui';
import type { InputProps as BaseProps } from 'reakit/Input';
export declare const Textarea: (props: PropsWithChildren<TextareaProps>) => JSX.Element;
export declare type TextareaState = 'disabled' | 'readOnly' | 'error' | 'default' | 'filled';
export interface TextareaProps extends Pick<BaseProps, 'disabled' | 'readOnly' | 'value' | 'type' | 'onChange'> {
    id: string;
    label: string;
    value?: string | number;
    helpMessage?: string;
    error?: boolean;
    charLimit?: number;
    sx?: SxStyleProp;
    darkMode?: boolean;
    rows?: number;
    cols?: number;
    filled?: boolean;
}
declare const _default: (props: PropsWithChildren<TextareaProps>) => JSX.Element;
export default _default;
