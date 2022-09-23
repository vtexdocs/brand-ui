import { useContext } from 'react'
import { get } from '@theme-ui/css'
import { ThemeContext } from '@emotion/core'
import merge from 'deepmerge'
import { SxStyleProp } from 'theme-ui'

/**
 * Hook to access the theme property
 */
export const useTheme = () => useContext(ThemeContext)

/**
 * Consume and merge the modifiers from a component
 * @param id id of the component
 * @param modifiers modifiers map.
 */
export const useComponentSx = (
  id: string,
  modifiers: { [key: string]: string }
) => {
  const theme = useTheme()
  const prefix = `components.${id}`
  const styles = get(theme, `${prefix}.styles`)

  const modifierStyles = modifiers
    ? Object.keys(modifiers).reduce((acc, curr) => {
        const style = get(theme, `${prefix}.${curr}`)

        acc = { ...acc, ...style[modifiers[curr]] }

        return acc
      }, {})
    : {}

  return merge<SxStyleProp>(styles, modifierStyles)
}
