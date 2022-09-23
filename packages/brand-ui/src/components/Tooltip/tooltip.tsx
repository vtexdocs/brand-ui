import { Box, SxStyleProp } from 'theme-ui'
import React, { FunctionComponentElement, cloneElement, ReactNode } from 'react'
import {
  useTooltipState,
  Tooltip as ReakitTooltip,
  TooltipReference,
  TooltipProps as ReakitProps,
} from 'reakit/Tooltip/'
import { PopoverState } from 'reakit/ts'

/**
 * Elementary tooltip component that can be reused by all VTEX Styleguides.
 * You can use reakit full features (except the 'as' prop) and theme-ui's sx.
 * It renders a tooltip element by default.
 * This is a styled base component, so any system can theme it.
 * To customize this component, you just need to add the `tooltip` variant
 * in your theme.
 * @example
 * ```jsx
 * import { Tooltip } from tooltip
 *
 * const theme = {
 *    tooltip: { ... }
 * }
 *
 * <Tooltip label="Tooltip text here"><button>Children</button></Tooltip>
 * ```
 */
function Tooltip(props: TooltipProps) {
  const {
    sx = {},
    children,
    label,
    arrow,
    placement = 'top',
    visible,
    variant = 'tooltip',
    ...tooltipProps
  } = props

  const tooltip = useTooltipState({ placement, visible })

  return (
    <>
      <TooltipReference {...tooltip} {...children.props} ref={children.ref}>
        {(referenceProps) => cloneElement(children, { ...referenceProps })}
      </TooltipReference>
      <ReakitTooltip {...tooltip} {...tooltipProps}>
        {arrow && cloneElement(arrow, { ...tooltip })}
        <Box variant={variant} sx={sx}>
          {label}
        </Box>
      </ReakitTooltip>
    </>
  )
}

type Placement = Pick<PopoverState, 'placement'>['placement']

export interface TooltipProps extends Omit<ReakitProps, 'as'> {
  /**
   * The element that triggers the tooltip
   */
  children: FunctionComponentElement<unknown>
  /**
   * Label shown inside the tooltip
   */
  label: ReactNode
  /**
   * Arrow component
   * @default {}
   */
  arrow?: FunctionComponentElement<unknown>
  /**
   * ThemeUI sx prop
   * @default {}
   */
  sx?: SxStyleProp
  /**
   * The placement of the tooltip relative to its children
   * @default 'top'
   */
  placement?: Placement
  /**
   * Whether the tooltip is visible or not
   * @default false
   */
  visible?: boolean
  /**
   * Theme variant
   */
  variant?: string
}

export default Tooltip
