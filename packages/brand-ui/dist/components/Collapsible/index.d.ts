import { ReactNode, PropsWithChildren } from 'react';
import { SxProps } from 'theme-ui';
import { useDisclosureState, DisclosureProps } from 'reakit/Disclosure';
import { DisclosureStateReturn } from 'reakit/ts';
/**
 * A Collapsible is a container that allows toggling the display of content. It can be nested as well.
 * @example
 * ```jsx
 * import { Collapsible, useCollapsible } from `@vtex/brand-ui`
 * const props = useCollapsible()
 * <Collapsible {...props}>
 *   <Collapsible.Header label="Title goes here">
 *     {children}
 *   </Collapsible.Header>
 *   <Collapsible.Content>{content}</Collapsible.Content>
 * </Collapsible>
 * ```
 */
declare function Collapsible({ sx, children, ...props }: CollapsibleProps): JSX.Element;
declare namespace Collapsible {
    var Header: ({ label, prefix, suffix, size, arrowPosition, arrowAlign, sx, }: HeaderProps) => JSX.Element;
    var Content: ({ children, sx, state }: ContentProps) => JSX.Element;
}
declare type CollapsibleProps = PropsWithChildren<DisclosureProps & SxProps>;
declare type IconProps = SxProps & {
    size: number;
};
declare type ContentProps = PropsWithChildren<SxProps> & {
    state: DisclosureStateReturn;
};
interface HeaderProps extends SxProps {
    /**
     * Disclosure content
     */
    label: ReactNode;
    /**
     * Prefix icon of the collapsible header
     */
    prefix?: (props: IconProps) => ReactNode;
    /**
     * Sufix icon of the collapsible header
     */
    suffix?: (props: IconProps) => ReactNode;
    /** Size of the collapsible header
     * @default regular
     */
    size?: 'small' | 'regular';
    /**
     * Caret icon position
     * @default right
     */
    arrowPosition?: 'left' | 'right';
    /**
     * Caret icon alignment
     * @default start
     */
    arrowAlign?: 'start' | 'center' | 'end';
}
export { Collapsible, CollapsibleProps, HeaderProps as CollapsibleHeaderProps, ContentProps as CollapsibleContentProps, useDisclosureState as useCollapsible, };
