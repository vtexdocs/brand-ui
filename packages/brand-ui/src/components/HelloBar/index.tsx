import React, { PropsWithChildren, ReactNode } from 'react'
import { useDialogState, Dialog } from 'reakit/Dialog'
import { Flex, SxProps, Text, Box } from 'theme-ui'

import { IconProps } from '../Icon'
import { IconClose } from '../../icons/Close'
import { IconCaret } from '../../icons'
import { Button } from '../Button'

/**
 *
 * Hellobar is a section where you can present a specific message to your visitors,
 * without distracting them from your regular content.
 * @example
 * ```jsx
 * import { HelloBar } from `@vtex/brand-ui`
 * <HelloBar>Message</HelloBar>
 * ```
 */
const HelloBar = ({
  icon,
  closeIcon = false,
  onClose,
  variant = 'primary',
  action: { label, onClick },
  sx = {},
  children,
}: HelloBarProps) => {
  const buttonVariant = variant === 'secondary' ? 'primary' : 'tertiary'
  const paletteVariant = `helloBar.${variant}`
  const iconCloseVariant = variant === 'secondary' ? 'iconCloseSecundary' : 'iconClose'
  const iconCloseStyle = { sx: { variant: `helloBar.${iconCloseVariant}` }}

  const state = useDialogState({ modal: false, visible: true })

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation()
    state.hide()
    
    if (onClose) onClose()
  }

  return (
    <Dialog {...state} hideOnClickOutside={false}>
      <Box sx={sx} variant={paletteVariant} onClick={onClick}>
        <Flex variant="helloBar.container">
          <Flex variant="helloBar.content">
            {icon?.({ size: 24, sx: { variant: 'helloBar.icon' } })}
            <Text>{children}</Text>
          </Flex>
          <Flex variant="helloBar.contentButtons">
            <Button
              sx={{ display: ['none', 'none', 'block'] }}
              variant={buttonVariant}
              size="small"
            >
              {label}
            </Button>
            { closeIcon && <Button 
              sx={{ display: ['none', 'none', 'block'] }}
              variant="tertiary" 
              size="small"
              onClick={(e) => {
                handleClose(e)
              }}
              icon={() => <IconClose { ...iconCloseStyle}/> }
            /> }
          </Flex>
          <Box variant="helloBar.actionIcon">
            <IconCaret direction="right" />
          </Box>
        </Flex>
      </Box>
    </Dialog>
  )
}

interface HelloBarProps extends PropsWithChildren<SxProps> {
  /**
   * Palette variation
   * @default primary
   */
  variant?: 'primary' | 'secondary' | 'tertiary'
  /**
   * whether the close icon should been show
   */
  closeIcon?: boolean
  /**
   * Function to be executed when closing the Hello Bar
   */
  onClose?: () => void
  /**
   * Function to render the helloBar icon
   */
  icon?: (props: IconProps) => ReactNode
  /**
   * Props to the hello bar action
   */
  action: {
    /**
     * Label of the action
     */
    label: string
    /**
     * Hello bar click function
     */
    onClick?: () => void
  }
}

export { HelloBar, HelloBarProps }
