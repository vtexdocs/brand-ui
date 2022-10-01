import { PropsWithChildren, ReactNode } from 'react';
import { SxProps } from 'theme-ui';
/**
 * The timeline displays a list of events in chronological order.
 * @example
 * ```jsx
 * import { Timeline } from `@vtex/brand-ui`
 * const Example = () => (
 *  <Timeline>
 *    <Timeline.Event title="Event 1" />
 *    <Timeline.Event title="Event 2" />
 *  </Timeline>
 * )
 * ```
 */
export declare function Timeline(props: PropsWithChildren<SxProps>): JSX.Element;
export declare namespace Timeline {
    var Event: typeof import(".").Event;
}
export declare function Event({ children, title, subtitle, icon, sx, }: PropsWithChildren<EventProps>): JSX.Element;
export interface EventProps extends SxProps {
    /**
     * Event title
     */
    title: ReactNode;
    /**
     * Event subtitle
     */
    subtitle?: ReactNode;
    /**
     * Event icon
     */
    icon?: ReactNode;
}
