/// <reference types="react" />
interface FocusHollowParams {
    showFocusOnInit?: boolean;
}
export declare function useFocusHollow(params?: FocusHollowParams): {
    focusStyles: {
        boxShadow: string;
    } | {
        boxShadow?: undefined;
    };
    focusProps: import("react").HTMLAttributes<HTMLElement>;
};
export {};
