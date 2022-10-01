import { PropsWithChildren } from 'react';
export interface ToastProps {
    actionText?: string;
    onActionClick?: () => void;
    closeOnAction?: boolean;
}
export declare const ToastProvider: ({ children }: PropsWithChildren<{}>) => JSX.Element;
