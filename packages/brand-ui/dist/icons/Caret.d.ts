import { IconProps } from '../components/Icon';
export declare function IconCaret(props: IconWithDirectionProps): JSX.Element;
export interface IconWithDirectionProps extends IconProps {
    /**
     * Icon direction
     * @default 'up'
     */
    direction?: 'up' | 'right' | 'down' | 'left';
    /**
     * Duration of animation in seconds
     * @default 0
     */
    duration?: number;
}
