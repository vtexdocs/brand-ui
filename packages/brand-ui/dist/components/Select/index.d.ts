import { ChangeEvent, PropsWithChildren } from 'react';
import { InputProps } from '../Input';
interface OptionProps {
    value: string | number;
    disabled?: boolean;
}
export declare const Select: {
    (props: PropsWithChildren<SelectProps>): JSX.Element;
    Option: (props: PropsWithChildren<OptionProps>) => JSX.Element;
};
export interface SelectProps extends Omit<InputProps, 'charLimit' | 'prefix' | 'suffix'> {
    onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}
export {};
