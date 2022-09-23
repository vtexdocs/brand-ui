# VTEX Components Icon

Elementary accessible component to display `svg` icons.
It renders a `svg` element.

## Usage

- Decorative only

```jsx
import Icon from '.*/Icon'

function UseCase() {
  return (
    <Icon>
      <path {...} />
    </Icon>
  )
}
```

- Grant a11y for standalone usage

```jsx
import Icon from '.*/Icon'

function UseCase() {
 return (
   <Icon title="Meaningful name">
     <path {...} />
   </Icon>
 )
}
```

## Types

| prop    | type        | description           | required | default     |
| ------- | ----------- | --------------------- | -------- | ----------- |
| size    | number      | Icon height and width | 🚫       | 24          |
| title   | string      | Icon title            | 🚫       | -           |
| sx      | SxStyleProp | ThemeUI Style prop    | 🚫       | {}          |
| viewBox | string      | Same as `svg` viewBox | 🚫       | '0 0 24 24' |

## Customization

Use `sx` to styling the icon.
For further reading, you can check the [Theme Documentation](../theme/README.md)
