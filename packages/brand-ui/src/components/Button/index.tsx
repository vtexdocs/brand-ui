import React, { Ref } from 'react'
import { SxStyleProp, Flex } from 'theme-ui'
import { forwardRef } from '../../../forwardRef'
import { default as mergeSx } from 'deepmerge'
import BaseButton, { ButtonProps as BaseProps } from './BaseButton'

import { useFocusHollow } from '../../hooks'

function useMeasures({
  size,
  icon,
  iconPosition,
  children,
}: Pick<ButtonProps, 'size' | 'icon' | 'iconPosition' | 'children'>) {
  const iconEnd = !!icon && iconPosition === 'end'
  const containerStyles: SxStyleProp = {
    flexDirection: iconEnd ? 'row-reverse' : 'row',
  }

  const iconStyles = children
    ? iconEnd
      ? { marginLeft: 3 }
      : { marginRight: 3 }
    : {}

  const iconSize = size === 'small' ? 20 : 24

  const resolvedSize = !!icon && !children ? `icon-${size}` : size
  const iconProps = { sx: iconStyles, size: iconSize }

  return {
    resolvedSize,
    containerStyles,
    iconProps,
  }
}

/**
 * Component that handles all Button variants of the DS.
 * It renders a button jsx element by default
 * @example
 * import { Button, ButtonProps } from 'brand-ui'
 * <Button>Default Button</Button>
 */
export const Button = forwardRef(
  (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
    const {
      block,
      size = 'regular',
      variant = 'primary',
      sx = {},
      iconPosition = 'start',
      icon,
      children,
      showFocusOnInit,
      ...restProps
    } = props

    const { focusStyles, focusProps } = useFocusHollow({ showFocusOnInit })

    const { containerStyles, resolvedSize, iconProps } = useMeasures({
      children,
      icon,
      iconPosition,
      size,
    })

    const renderIcon = () => icon?.(iconProps)

    const blockStyles = block ? { display: 'block', width: '100%' } : {}

    const mergedSx = mergeSx<SxStyleProp>(
      { ...focusStyles, ...blockStyles },
      sx
    )

    return (
      <BaseButton
        variant={`buttons.${variant}-${resolvedSize}`}
        sx={mergedSx}
        ref={ref}
        {...restProps}
        {...focusProps}
      >
        <Flex
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            margin: 'auto',
            width: '100%',
            height: '100%',
            ...containerStyles,
          }}
        >
          {renderIcon()}
          {children}
        </Flex>
      </BaseButton>
    )
  }
)

export type Variant = 'primary' | 'secondary' | 'tertiary'
export type Size = 'small' | 'regular'
export interface ButtonProps
  extends Pick<
    BaseProps,
    | 'sx'
    | 'disabled'
    | 'focusable'
    | 'children'
    | 'id'
    | 'type'
    | 'name'
    | 'onClick'
    | 'onMouseEnter'
    | 'onMouseLeave'
    | 'onMouseDown'
    | 'onMouseUp'
    | 'onFocus'
    | 'onMouseOver'
    | 'value'
  > {
  /** Size of the button
   * @default regular
   * */
  size?: Size
  /** Button variant
   * @default primary
   * */
  variant?: Variant
  /**
   * Icon of the button
   */
  icon?: (props: { size: number; sx: SxStyleProp }) => JSX.Element
  /**
   * Position of the icon
   * @default start
   */
  iconPosition?: 'start' | 'end'
  /**
   * Block type
   * @default false
   */
  block?: boolean
  /**
   * Show focus on button before any action
   * @default false
   */
  showFocusOnInit?: boolean
}
