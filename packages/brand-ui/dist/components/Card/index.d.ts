import { BoxProps, FlexProps, ImageProps, SxStyleProp } from 'theme-ui';
import React, { Ref, PropsWithChildren } from 'react';
export interface IconProps extends FlexProps {
    /**
     * Icon
     * @default false
     */
    icon?: boolean;
}
export declare const Card: {
    ({ el, sx, orientation, size, src, alt, ...props }: PropsWithChildren<CardProps>): JSX.Element;
    Header: {
        (props: PropsWithChildren<FlexProps>): JSX.Element;
        Title: (props: PropsWithChildren<IconProps>) => JSX.Element;
        Subtitle: (props: PropsWithChildren<BoxProps>) => JSX.Element;
    };
    Footer: (props: PropsWithChildren<FlexProps>) => JSX.Element;
    Body: (props: PropsWithChildren<BoxProps>) => JSX.Element;
    Image: (props: ImageProps, ref: Ref<HTMLImageElement>) => JSX.Element;
};
export interface CardProps extends FlexProps {
    /**
     * Element type
     * @default 'div'
     * */
    el?: React.ElementType | React.ComponentType;
    /**
     * Card orientation
     * @default 'vertical'
     */
    orientation?: 'vertical' | 'horizontal';
    /**
     * Card size
     * @default 'regular'
     */
    size?: 'small' | 'regular';
    src?: string;
    alt?: string;
    sx?: SxStyleProp;
}
