/**
 * Hook to access the theme property
 */
export declare const useTheme: () => object;
/**
 * Consume and merge the modifiers from a component
 * @param id id of the component
 * @param modifiers modifiers map.
 */
export declare const useComponentSx: (id: string, modifiers: {
    [key: string]: string;
}) => import("@styled-system/css").SystemStyleObject;
