# VTEX Components Theme

> Theme utilities

## Components

### ThemeProvider

Same as [`theme-ui/ThemeProvider`](https://theme-ui.com/api)

## Hooks

### useColorMode

Same as [`theme-ui/useColorMode`](https://theme-ui.com/color-modes)

### useTheme

Returns the theme object

```jsx
import { useTheme } from '.*/theme/hooks'

function Component() {
  const theme = useTheme()
  // ...
}
```

### useComponentSx

Combine styles of multiple modifiers within a component.

| param       | description                      | required |
| ----------- | -------------------------------- | -------- |
| id          | id of the component in the theme | ✅       |
| modifierMap | selected modifiers               | 🚫       |

```jsx
import { useComponentSx } from '.*/theme/hooks'

// sample theme
const theme = {
  components: {
    'sample-component': {
      styles: {
        bg: 'white',
        color: 'black',
        ':hover': {
          transform: 'scale(2)',
        },
      },
      variant: {
        inverted: {
          bg: 'black',
          color: 'white',
        },
      },
    },
  },
}

function Component() {
  const styles = useComponentSx('sample-component', { variant: 'inverted' })
  // console.log(styles) => { bg: 'black', color: 'white', ':hover': { transform: 'scale(2)' } }
}
```

## Utils

### mergeSx

Merges two objects deepply.

Same as [`deepmerge`](https://github.com/TehShrike/deepmerge).

### get

Same as [`@theme-ui/css/get`](https://theme-ui.com/packages/color).
