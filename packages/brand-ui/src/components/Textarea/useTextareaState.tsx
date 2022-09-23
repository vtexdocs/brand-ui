import { useState, useEffect } from 'react'

import type { TextareaState } from '.'

interface TextareaStateModifiers {
  disabled?: boolean
  readOnly?: boolean
  error?: boolean
  lengthError?: boolean
  filled: boolean
}

const resolveTextareaState = ({
  disabled,
  readOnly,
  error,
  lengthError,
  filled,
}: TextareaStateModifiers): TextareaState => {
  if (disabled) {
    return 'disabled'
  }

  if (readOnly) {
    return 'readOnly'
  }

  if (error || lengthError) {
    return 'error'
  }

  if (filled) {
    return 'filled'
  }

  return 'default'
}

interface InitialState {
  charLimit?: number
  disabled?: boolean
  error?: boolean
  readOnly?: boolean
  value?: string | number
  filled?: boolean
}

const useTextareaState = ({
  disabled,
  readOnly,
  error,
  value,
  charLimit,
}: InitialState) => {
  const [focused, setFocused] = useState(false)
  const [charCount, setCharCount] = useState(
    value ? value.toString().length : 0
  )

  const [filled, setFilled] = useState(charCount > 0)
  const [lengthError, setLengthError] = useState(
    charLimit ? charCount > charLimit : false
  )

  useEffect(() => {
    const length = value ? value.toString().length : 0

    setCharCount(length)
    setFilled(length > 0)

    if (charLimit) {
      setLengthError(length > charLimit)
    }
  }, [charLimit, value])

  const [state, setState] = useState<TextareaState>(
    resolveTextareaState({
      disabled,
      readOnly,
      error,
      filled,
    })
  )

  useEffect(() => {
    setState(
      resolveTextareaState({
        disabled,
        readOnly,
        error,
        lengthError,
        filled,
      })
    )
  }, [error, disabled, readOnly, lengthError, filled])

  return { state, charCount, setFocused, filled, focused }
}

export default useTextareaState
