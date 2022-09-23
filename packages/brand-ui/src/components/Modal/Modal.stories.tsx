import React from 'react'
import { Meta } from '@storybook/react'
import { Flex, Box, Text } from 'theme-ui'

import { Modal, ModalProps, useModalState } from './index'
import { Button } from '../Button'
import { Input } from '../Input'

export default {
  title: 'beta/Modal',
  component: Modal,
} as Meta

const Template = (args: ModalProps) => {
  const state = useModalState({ animated: true })
  const { title, children, ...props } = args

  return (
    <Modal
      title={title}
      {...props}
      state={state}
      disclosure={<Button>Open Modal</Button>}
    >
      <Modal.Body>{children}</Modal.Body>
      <Modal.BottomBar>
        <Modal.Button variant="tertiary" onClick={state.hide}>
          Cancel
        </Modal.Button>
        <Modal.Button variant="primary" onClick={state.hide}>
          Accept
        </Modal.Button>
      </Modal.BottomBar>
    </Modal>
  )
}

const TemplateDialog = (args: ModalProps) => {
  const state = useModalState({ animated: true })
  const { title, children, ...props } = args

  return (
    <Modal
      title={title}
      {...props}
      state={state}
      disclosure={<Button>Open Modal</Button>}
      variant="dialog"
    >
      <Modal.Body variant="dialog">
        <Flex
          sx={{
            justifyContent: 'space-between',
            flexDirection: ['column', 'column', 'row', 'row'],
          }}
        >
          <Box
            sx={{
              width: ['17rem', '17rem', '20rem', '24rem'],
              marginBottom: ['1.5rem', '1.5rem', '0', '0'],
            }}
          >
            <Text
              sx={{
                fontSize: ['24px', '24px', '40px', '40px'],
                color: 'secondary.base',
              }}
            >
              Get in touch
            </Text>
            <Text
              sx={{
                fontSize: 2,
                paddingTop: '1rem',
                color: 'muted.1',
                lineHeight: '1.75rem',
              }}
            >
              {children}
            </Text>
          </Box>
          <Box>
            <Input
              id="default1"
              label="Default"
              size="large"
              sx={{
                width: ['17rem', '17rem', '20rem', '24rem'],
                marginBottom: '1rem',
                marginLeft: ['-4px', '-4px', '0', '0'],
                marginRight: ['0', '0', '-0.25rem', '-0.25rem'],
              }}
            />
            <Input
              id="default2"
              label="Default"
              size="large"
              sx={{
                width: ['17rem', '17rem', '20rem', '24rem'],
                marginLeft: ['-4px', '-4px', '0', '0'],
                marginRight: ['0', '0', '-0.25rem', '-0.25rem'],
              }}
            />
          </Box>
        </Flex>
      </Modal.Body>
      <Modal.BottomBar variant="dialog">
        <Modal.Button variant="tertiary" onClick={state.hide}>
          Cancel
        </Modal.Button>
        <Modal.Button variant="primary" onClick={state.hide}>
          Send message
        </Modal.Button>
      </Modal.BottomBar>
    </Modal>
  )
}

export const Playground = Template.bind({})
Playground.args = {
  children:
    'But if I just showed up at your party, would you have me? Would you want me?',
  title: 'Betty',
}

export const DialogModal = TemplateDialog.bind({})
DialogModal.args = {
  children:
    'Want to know more about VTEX solutions? Fill out the form below and our' +
    'team will contact you so we can understand your business needs.',
}
