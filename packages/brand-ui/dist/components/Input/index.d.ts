import React, { PropsWithChildren, ReactNode } from 'react';
import { SxStyleProp } from 'theme-ui';
import { InputProps as BaseProps } from 'reakit/Input';
export declare const Input: (props: PropsWithChildren<InputProps>) => JSX.Element;
export declare type Size = 'regular' | 'large';
export declare type InputState = 'error' | 'default' | 'disabled' | 'readOnly';
export interface InputProps extends Pick<BaseProps, 'disabled' | 'readOnly' | 'value' | 'type' | 'onChange'> {
    id: string;
    label: string;
    value?: string | number;
    helpMessage?: string;
    error?: boolean;
    charLimit?: number;
    prefix?: ReactNode;
    size?: Size;
    suffix?: ReactNode;
    sx?: SxStyleProp;
    darkMode?: boolean;
}
declare const _default: (props: React.PropsWithChildren<InputProps>) => JSX.Element;
export default _default;
