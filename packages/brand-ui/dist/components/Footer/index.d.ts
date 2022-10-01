import React, { PropsWithChildren, Ref } from 'react';
import { LinkProps } from 'theme-ui';
export declare const Footer: {
    ({ children }: PropsWithChildren<{}>): JSX.Element;
    LinkGroups: ({ children }: PropsWithChildren<{}>) => JSX.Element;
    Link: (props: LinkProps, ref: Ref<HTMLAnchorElement>) => JSX.Element;
    Group: ({ title, children }: React.PropsWithChildren<{
        title: string;
    }>) => JSX.Element;
    Extra: ({ children }: PropsWithChildren<{}>) => JSX.Element;
    SocialMedia: () => JSX.Element;
    ExtraLinks: ({ children }: PropsWithChildren<{}>) => JSX.Element;
};
