/// <reference types="react" />
import type { TextareaState } from '.';
interface InitialState {
    charLimit?: number;
    disabled?: boolean;
    error?: boolean;
    readOnly?: boolean;
    value?: string | number;
    filled?: boolean;
}
declare const useTextareaState: ({ disabled, readOnly, error, value, charLimit, }: InitialState) => {
    state: TextareaState;
    charCount: number;
    setFocused: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    filled: boolean;
    focused: boolean;
};
export default useTextareaState;
