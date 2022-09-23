import React from 'react'
import BaseTooltip, {
  TooltipProps as BaseProps,
} from './tooltip'

export const Tooltip = ({ children, ...props }: TooltipProps) => (
  <BaseTooltip {...props}>{children}</BaseTooltip>
)

export interface TooltipProps
  extends Pick<BaseProps, 'label' | 'children' | 'visible' | 'sx'> {
  /**
   * Tooltip placement
   * @default top
   */
  placement?: 'top' | 'right' | 'bottom' | 'left'
}
