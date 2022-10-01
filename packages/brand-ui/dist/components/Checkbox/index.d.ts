/** @jsxRuntime classic */
/** @jsx jsx */
import { SxStyleProp } from 'theme-ui';
import { Ref } from 'react';
import { CheckboxProps as ReakitCheckboxProps, useCheckboxState } from 'reakit/Checkbox';
export interface CheckboxProps extends Pick<ReakitCheckboxProps, 'checked' | 'disabled' | 'onChange' | 'onClick' | 'required' | 'state' | 'setState' | 'value'> {
    label: string;
    error?: boolean;
    errorMessage?: string;
    sx?: SxStyleProp;
}
export declare const Checkbox: ({ label, disabled, error, errorMessage, sx, ...restProps }: CheckboxProps, ref: Ref<HTMLInputElement>) => JSX.Element;
export { useCheckboxState };
