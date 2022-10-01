import { PropsWithChildren } from 'react';
import { DisclosureStateReturn } from 'reakit';
import { CollapsibleProps } from '../Collapsible';
interface AccordionInitialState {
    /**
     * Key of the current visible section content
     * @default -1
     */
    visible?: boolean | number;
    /**
     * List with the keys of disabled sections
     * @default []
     */
    disabled?: number[];
}
interface AccordionProps extends Omit<CollapsibleProps, 'visible' | 'toggle' | 'disabled'>, AccordionInitialState {
    /**
     * Function to toggle a section with the key received
     */
    toggle: (key: number) => void;
}
interface useAccordionReturn {
    props: AccordionProps;
    states: DisclosureStateReturn[];
}
interface useAccordionProps {
    collapsibles: number;
    initialState?: AccordionInitialState;
    animated?: boolean;
}
declare const useAccordion: ({ collapsibles, initialState, animated }: useAccordionProps) => useAccordionReturn;
declare function Panel({ children }: PropsWithChildren<{}>): JSX.Element;
declare namespace Panel {
    var Header: ({ label, prefix, suffix, size, arrowPosition, arrowAlign, sx, }: import("../Collapsible").CollapsibleHeaderProps) => JSX.Element;
    var Content: ({ children, sx, state }: import("../Collapsible").CollapsibleContentProps) => JSX.Element;
}
/**
 * Accordion is a special kind of Collapse, which allows only one panel to be expanded at a time.
 * @example
 * ```jsx
 * import { Accordion, useAccordion } from '@vtex/brand-ui'
 * const accordion = useAccordion()
 *
 * <Accordion {...accordion}>
 *   <Accordion.Section>
 *     <Accordion.Section.Header>
 *       Header Section #1
 *     </Accordion.Section.Header>
 *     <Accordion.Section.Content>
 *       Content Section #1
 *     </Accordion.Section.Content>
 *   </Accordion.Section>
 *   <Accordion.Section>
 *     <Accordion.Section.Header>
 *       Header Section #2
 *     </Accordion.Section.Header>
 *     <Accordion.Section.Content>
 *       Content Section #2
 *     </Accordion.Section.Content>
 *   </Accordion.Section>
 * </Accordion>
 * ```
 */
declare function Accordion({ visible, toggle, disabled, children, sx, ...accordionProps }: AccordionProps): JSX.Element;
declare namespace Accordion {
    var Section: typeof Panel;
}
export { Accordion, useAccordion, AccordionProps, AccordionInitialState };
