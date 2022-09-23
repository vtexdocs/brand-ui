/** @jsxRuntime classic */
/** @jsx jsx */

import type { PropsWithChildren } from 'react'
import { useRef } from 'react'
import type { SxStyleProp } from 'theme-ui'
import { jsx, Flex, Text, Box, Label } from 'theme-ui'
import type { InputProps as BaseProps } from 'reakit/Input'
import { forwardRef } from '../../../forwardRef'

import useInputState from './useTextareaState'

export const Textarea = (props: PropsWithChildren<TextareaProps>) => {
  const {
    filled,
    darkMode = false,
    label,
    id,
    charLimit,
    helpMessage,
    readOnly,
    disabled,
    error,
    value,
    rows = 7,
    type = 'text',
    sx = {},
    onChange,
    ...TextareaProps
  } = props

  const ref = useRef<HTMLTextAreaElement>(null)
  const redirectFocus = () => ref.current?.focus()

  const { state, charCount, setFocused } = useInputState({
    disabled,
    readOnly,
    error,
    value,
    charLimit,
    filled,
  })

  const helpMessageVariant = `textarea.helpMessage${
    darkMode ? '.dark' : ''
  }.${state}`

  const stateVariant = `textarea.${state}${darkMode ? '-dark' : ''}`

  const labelVariant = `textarea.floatingLabel${
    darkMode ? '.dark' : ''
  }.${state}`

  const containerVariant = `textarea.container${
    darkMode ? '.dark' : ''
  }.${state}`

  return (
    <Box variant={containerVariant} sx={sx}>
      <textarea
        id={id}
        ref={ref}
        placeholder=" "
        maxLength={charLimit}
        value={value}
        onChange={onChange}
        onFocus={() => redirectFocus()}
        onBlur={() => setFocused(false)}
        disabled={disabled}
        readOnly={readOnly}
        error={error}
        type={type}
        rows={rows}
        sx={{
          variant: stateVariant,
          ...sx
        }}
        {...TextareaProps}
        {...state}
      />

      <Label htmlFor={id} variant={labelVariant}>
        {label}
      </Label>

      <Flex variant={helpMessageVariant}>
        <Text>{helpMessage}</Text>
        {charLimit && (
          <Text>
            {charCount}/{charLimit}
          </Text>
        )}
      </Flex>
    </Box>
  )
}

export type TextareaState =
  | 'disabled'
  | 'readOnly'
  | 'error'
  | 'default'
  | 'filled'

export interface TextareaProps
  extends Pick<
    BaseProps,
    'disabled' | 'readOnly' | 'value' | 'type' | 'onChange'
  > {
  id: string
  label: string
  value?: string | number
  helpMessage?: string
  error?: boolean
  charLimit?: number
  sx?: SxStyleProp
  darkMode?: boolean
  rows?: number
  cols?: number
  filled?: boolean
}

export default forwardRef(Textarea)
