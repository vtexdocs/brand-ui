/// <reference types="react" />
import { InputState } from '.';
interface InitialState {
    charLimit?: number;
    disabled?: boolean;
    error?: boolean;
    readOnly?: boolean;
    value?: string | number;
}
declare const useInputState: ({ disabled, readOnly, error, value, charLimit, }: InitialState) => {
    state: InputState;
    charCount: number;
    setFocused: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    transform: boolean;
};
export default useInputState;
