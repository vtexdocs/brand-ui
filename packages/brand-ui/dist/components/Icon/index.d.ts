/** @jsxRuntime classic */
/** @jsx jsx */
import { SxStyleProp } from 'theme-ui';
import { Ref } from 'react';
/**
 * Elementary accessible component to display svg icons.
 * It renders a svg element.
 * @example decorative only
 * <Icon>
 *  <path.../>
 * </Icon>
 *
 * @example grant a11y for standalone usage
 * <Icon title="Meaningful name">
 *  <path.../>
 * </Icon>
 */
export declare const Icon: (props: IconProps, ref: Ref<SVGSVGElement>) => JSX.Element;
export interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    title?: string;
    sx?: SxStyleProp;
}
