import { PropsWithChildren, ReactNode } from 'react';
import { SxProps } from 'theme-ui';
import { IconProps } from '../Icon';
/**
 *
 * Hellobar is a section where you can present a specific message to your visitors,
 * without distracting them from your regular content.
 * @example
 * ```jsx
 * import { HelloBar } from `@vtex/brand-ui`
 * <HelloBar>Message</HelloBar>
 * ```
 */
declare const HelloBar: ({ icon, closeIcon, onClose, variant, action: { label, onClick }, sx, children, }: HelloBarProps) => JSX.Element;
interface HelloBarProps extends PropsWithChildren<SxProps> {
    /**
     * Palette variation
     * @default primary
     */
    variant?: 'primary' | 'secondary' | 'tertiary';
    /**
     * whether the close icon should been show
     */
    closeIcon?: boolean;
    /**
     * Function to be executed when closing the Hello Bar
     */
    onClose?: () => void;
    /**
     * Function to render the helloBar icon
     */
    icon?: (props: IconProps) => ReactNode;
    /**
     * Props to the hello bar action
     */
    action: {
        /**
         * Label of the action
         */
        label: string;
        /**
         * Hello bar click function
         */
        onClick?: () => void;
    };
}
export { HelloBar, HelloBarProps };
