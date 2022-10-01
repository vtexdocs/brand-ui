/** @jsxRuntime classic */
/** @jsx jsx */
import { SxProps } from 'theme-ui';
import { PropsWithChildren } from 'react';
import { LinksProps } from '.';
export declare const HamburgerMenu: {
    ({ children, sx }: PropsWithChildren<SxProps>): JSX.Element;
    Menu: {
        ({ children, sx }: PropsWithChildren<SxProps>): JSX.Element;
        Links: ({ title, to, sx, active, }: PropsWithChildren<LinksProps>) => JSX.Element;
    };
    ActionButton: ({ children, sx }: PropsWithChildren<SxProps>) => JSX.Element;
};
