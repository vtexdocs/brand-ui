import { PropsWithChildren } from 'react';
import { SxProps } from 'theme-ui';
export { HamburgerMenu } from './HamburgerMenu';
export { LocaleSwitcher } from './LocaleSwitcher';
interface BrandProps {
    noMargin?: boolean;
}
export interface LinksProps extends SxProps {
    title: string;
    to: string;
    active?: boolean;
}
export declare const Header: {
    ({ children, sx }: PropsWithChildren<SxProps>): JSX.Element;
    LeftLinks: {
        ({ children, sx }: PropsWithChildren<SxProps>): JSX.Element;
        Links: ({ title, to, sx, active }: LinksProps) => JSX.Element;
    };
    RightLinks: ({ children, sx }: PropsWithChildren<SxProps>) => JSX.Element;
    Brand: ({ noMargin, children, }: PropsWithChildren<BrandProps>) => JSX.Element;
    ActionButton: ({ children, sx }: PropsWithChildren<SxProps>) => JSX.Element;
};
