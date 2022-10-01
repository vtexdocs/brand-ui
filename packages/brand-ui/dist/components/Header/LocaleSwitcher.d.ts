export declare const LocaleSwitcher: ({ options, onChange, locale, }: LocaleSwitcherProps) => JSX.Element;
export interface LocaleOption {
    /**
     * Text displayed on localization option label, i.e. "EN".
     */
    label: string;
    /**
     * The localization value, i.e. "en".
     */
    value: string;
}
export interface LocaleSwitcherProps {
    /**
     * Initial localization value.
     */
    locale: string;
    /**
     * Options for localization.
     */
    options: LocaleOption[];
    /**
     * Function triggered when user changes the locale.
     */
    onChange: (locale: string) => void;
}
