import { DateTime } from 'luxon';
export declare const getFirstDayOfMonth: (date: DateTime) => DateTime;
export declare const getLastDayOfMonth: (date: DateTime) => DateTime;
/**
 * Get all the days in a week. Since luxon weekdays start with Monday and
 * end with Sunday, this method does a workaround for starting with Sunday.
 *
 * @returns array with weekdays initials
 */
export declare const getWeekDays: (locale: string) => string[];
export declare const getInitialCells: (date: DateTime) => DateTime[];
export declare const getMonthCells: (date: DateTime) => DateTime[];
export declare const getFinalCells: (date: DateTime) => DateTime[];
