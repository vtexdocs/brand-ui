# Brand Calendar

A  ` Text area `  is a edition control for a text box, and works when the user wants to write a large text in a free format.

# Detailed design

| prop       | type      | description                                               | required |
| ---------- | --------- | --------------------------------------------------------- | -------- |
| value | string    | value associated with the text area| ✔️       |
| helperText | string    | additional tips on how the TextArea is expected to be filled | ✔️       |
| label      | string    | label displayed in the TextArea, also used as placeholder    | ✔️       |
| onChange | function | the function that handles changes on the textarea value |  ✔️        | - |
| rows       | number | The number of lines of text visible to the control.                                     |   🚫       |
| cols       | number | The visible width of the text area, in average character widths                                  |   🚫       |
| charLimit  | number    | maximum number of characters in TextArea text                | 🚫       |
| disabled   | boolean   | whether the TextArea is disabled or not                      | 🚫       |
| readOnly   | boolean   | whether the TextArea is read only or not                     | 🚫       |
| error        | boolean                             | whether the TextArea is error state or not |  🚫       |
| darkmode        | boolean                             | whether the TextArea is in darkmode state or not  | 🚫       |

## Usage

### Basic usage

```jsx
import { Textarea } from '@brand-ui/TextArea'

;<Textarea 
  label="Please enter your feedbacks here.."
  helperText="Help Message"
  value={value}
  onChange={onChange}
  cols={3}
  rows={5}
/>
```
