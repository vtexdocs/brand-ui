/** @jsxRuntime classic */
/** @jsx jsx */
import { SxStyleProp } from 'theme-ui';
import { PropsWithChildren, ReactNode } from 'react';
import { DateTime } from 'luxon';
export declare const Calendar: ({ day, month, year, disabled, onChange, events, locale, headerAccessory, children, sx, }: PropsWithChildren<CalendarProps>) => JSX.Element;
export interface DayProps {
    value: DateTime;
    variant: string;
    onClick: (date: DateTime) => void;
    selectedDate: Date | undefined;
    disabled?: boolean;
    events?: Events;
}
export interface DailyEvents {
    events: Array<{
        name: string;
    } & Record<string, number | string>>;
    colors?: string[];
    component?: (props: PropsWithChildren<DayProps>) => JSX.Element;
}
export declare type Events = Record<string, DailyEvents>;
export interface CalendarProps {
    onChange?: (date: Date) => void;
    day?: number;
    month?: number;
    year?: number;
    events?: Events;
    locale?: string;
    disabled?: boolean;
    headerAccessory?: ReactNode;
    sx?: SxStyleProp;
}
