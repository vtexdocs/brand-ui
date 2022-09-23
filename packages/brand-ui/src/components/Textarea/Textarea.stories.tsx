import React, { useState } from 'react'
import type { Story, Meta } from '@storybook/react'
import { Flex, Box } from 'theme-ui'

import { Checkbox, useCheckboxState } from '../Checkbox'
import type { TextareaProps } from './index'
import { Textarea } from './index'
import Input from '../Input'
import { Select } from '../Select'

export default {
  title: 'beta/Textarea',
  component: Textarea,
} as Meta

const Template: Story<TextareaProps> = (args: TextareaProps) => {
  const { ...restArgs } = args
  const [value, setValue] = useState('')

  return (
    <Box sx={{ maxHeight: '100rem' }}>
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...restArgs}
      />
    </Box>
  )
}

export const Playground = Template.bind({})
Playground.args = {
  helpMessage: 'I could go on and on and I will.',
  charLimit: 155,
  label: 'Please enter your feedback here...',
  id: 'company-name',
  error: false,
  readOnly: false,
  disabled: false,
  darkMode: false,
}

export const States = () => {
  const checkbox = useCheckboxState({ state: false })
  const [valueDefault, setValueDefault] = useState('')
  const [valueFilled, setValueFilled] = useState(
    'Problem-and-incident tickets are useful when a problem or service interruption is reported by more than one person.'
  )

  const props = {
    darkMode: checkbox.state as boolean,
  }

  return (
    <Box>
      <Checkbox {...checkbox} label="Dark mode" />
      <Flex
        sx={{
          backgroundColor: checkbox.state ? 'secondary.base' : 'background',
          flexDirection: ['column', 'column', 'column', 'row'],
          marginTop: 3,
          padding: 3,
          width: 'fit-content',
        }}
      >
        <Flex sx={{ flexDirection: 'column', maxWidth: '44rem', pr: 5 }}>
          <Textarea
            {...props}
            id="default-filled"
            label="Please enter your feedback here..."
            helpMessage="Idle and filled Textarea."
            value={valueDefault}
            onChange={(e: any) => setValueDefault(e.target.value)}
          />
          <Textarea
            {...props}
            id="disabled-filled"
            label="Please enter your feedback here..."
            disabled
            helpMessage="Disabled and filled Textarea."
            value={valueFilled}
            onChange={(e: any) => setValueFilled(e.target.value)}
          />
          <Textarea
            {...props}
            id="readonly-filled"
            label="Please enter your feedback here..."
            readOnly
            helpMessage="Readonly and filled Textarea."
            value={valueFilled}
            onChange={(e: any) => setValueFilled(e.target.value)}
          />
          <Textarea
            {...props}
            id="error-filled"
            label="Please enter your feedback here..."
            error
            helpMessage="Error and filled Textarea."
            value={valueDefault}
            onChange={(e: any) => setValueDefault(e.target.value)}
          />
        </Flex>
        <Flex sx={{ flexDirection: 'column', maxWidth: '25rem' }} />
      </Flex>
    </Box>
  )
}

export const Contents = () => {
  const [value, setValue] = useState('')

  return (
    <Box sx={{ width: ['280px', '540px', '635px', '635px'] }}>
      <Textarea
        onChange={(e: any) => setValue(e.target.value)}
        id="text-only"
        label="Please enter your feedback here..."
        value={value}
        helpMessage="This is a basic Textarea."
        rows={7}
      />
    </Box>
  )
}

export const CompareWithSelectAndInput = () => {
  const [value, setValue] = useState('')

  return (
    <Box sx={{ width: ['280px', '540px', '635px', '635px'] }}>
      <Select
          id="default"
          value={value !== '' ? value : 'carrefour'}
          label="Default"
          helpMessage="This is a default select."
          sx={{ marginTop: 5 }}
        >
          <Select.Option disabled value="" />
          <Select.Option value="carrefour">Carrefour</Select.Option>
          <Select.Option value="coca-cola">Coca Cola</Select.Option>
          <Select.Option value="motorolla">Motorolla</Select.Option>
      </Select>
      <Textarea
        onChange={(e: any) => setValue(e.target.value)}
        id="text-only"
        label="Please enter your feedback here..."
        value={value}
        helpMessage="This is a basic Textarea."
        rows={7}
      />
      <Input
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        id="regular"
        size="regular"
        label="Regular"
        helpMessage="This is a regular input."
      />
    </Box>
  )
}