import { useFocusRing } from '@react-aria/focus'
import { get } from '@theme-ui/css'
import { useTheme } from '../theme/hooks'

interface FocusHollowParams {
  showFocusOnInit?: boolean
}

export function useFocusHollow(params?: FocusHollowParams) {
  const theme = useTheme()
  const { isFocusVisible, focusProps, isFocused } = useFocusRing()
  const focusStyles =
    isFocusVisible || (params?.showFocusOnInit && isFocused)
      ? {
          boxShadow: `0px 0px 0px ${get(theme, 'space.2')}px ${get(
            theme,
            'colors.focus'
          )}`,
        }
      : {}

  return { focusStyles, focusProps }
}
