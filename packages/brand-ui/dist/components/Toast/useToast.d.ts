import { ToastProps } from '.';
declare const useToast: (props?: ToastProps | undefined) => {
    createToast: (text: string) => void;
};
export default useToast;
