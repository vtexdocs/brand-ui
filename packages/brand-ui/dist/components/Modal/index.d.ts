import { ReactNode, FunctionComponentElement } from 'react';
import { useDialogState } from 'reakit/Dialog';
import { DialogStateReturn } from 'reakit/ts';
import { ButtonProps } from '../Button';
interface BottomBarProps {
    children: ReactNode | ReactNode[];
    variant?: 'modal' | 'dialog';
}
interface BodyProps {
    children: ReactNode | ReactNode[];
    variant?: 'modal' | 'dialog';
}
export declare const Modal: {
    ({ children, title, disclosure, state, onClose, variant, }: ModalProps): JSX.Element;
    Body: ({ children, variant }: BodyProps) => JSX.Element;
    BottomBar: ({ children, variant }: BottomBarProps) => JSX.Element;
    Button: (props: ButtonProps) => JSX.Element;
};
export interface ModalProps {
    /**
     * Modal content children
     */
    children: ReactNode | ReactNode[];
    /**
     * Modal disclosure
     */
    disclosure: FunctionComponentElement<unknown>;
    /**
     * Return of useModalState hook
     */
    state: DialogStateReturn;
    /**
     * Modal title, does not work on dialog variant
     */
    title?: string | ReactNode;
    /**
     * Function to be run after the modal is closed
     */
    onClose?: () => void;
    /**
     * Modal variant
     * @default 'modal'
     */
    variant?: 'modal' | 'dialog';
}
export { useDialogState as useModalState };
