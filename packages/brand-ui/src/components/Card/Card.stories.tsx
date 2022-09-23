import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Box } from 'theme-ui'

import { Card, CardProps } from './index'
import { Button } from '../Button'

export default {
  title: 'beta/Card',
  component: Card,
} as Meta

const Template: Story<CardProps> = ({ children, ...args }) => (
  <Card {...args}>
    <Card.Header>Title</Card.Header>
    <Card.Body>{children}</Card.Body>
    <Card.Footer>
      <Button size="small">Primary</Button>
    </Card.Footer>
  </Card>
)

export const Playground = Template.bind({})
Playground.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.',
  sx: { maxWidth: '40rem' },
}

export const Sizes = () => (
  <>
    <Card size="small" sx={{ maxWidth: '20rem' }}>
      <Card.Header>Small card</Card.Header>
      <Card.Body>
        <Box>Lorem ipsum dolor sit amet, consect adipiscing elit.</Box>
      </Card.Body>
      <Card.Footer />
    </Card>
    <Card size="regular" sx={{ maxWidth: '42rem', marginTop: 6 }}>
      <Card.Header>Title</Card.Header>
      <Card.Body>
        <Box>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Box>
      </Card.Body>
      <Card.Footer>
        <Button size="small">Primary</Button>
      </Card.Footer>
    </Card>
    <Card size="regular" sx={{ maxWidth: '42rem', marginTop: 6 }}>
      <Card.Header>Title</Card.Header>
      <Card.Body>
        <Box>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Box>
      </Card.Body>
      <Card.Footer>
        <Button size="small">Primary</Button>
      </Card.Footer>
    </Card>
  </>
)

export const WithAction = () => (
  <>
    <Card size="regular" sx={{ maxWidth: '42rem' }}>
      <Card.Header>Card with button</Card.Header>
      <Card.Body>
        <Box>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Box>
      </Card.Body>
      <Card.Footer>
        <Button size="small">Primary</Button>
      </Card.Footer>
    </Card>
  </>
)

export const WithMedia = () => (
  <Card size="small" sx={{ maxWidth: '42rem' }}>
    <Card.Header>Card with image</Card.Header>
    <Card.Image
      width="100%"
      src="https://careers.vtex.com/assets/media/perspectives03.jpg"
      alt="VTEX Careers"
    />
    <Card.Body>
      <Box sx={{ paddingTop: 4 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Box>
    </Card.Body>
    <Card.Footer />
  </Card>
)

export const CardButton = () => (
  <>
    <Card
      orientation="vertical"
      onClick={handleClick}
      sx={{ maxWidth: '256px' }}
      src={
        'https://vtex.com/wp-content/uploads/2020/05/more.projects-with-vtex-partner-cover.jpg'
      }
    >
      <Card.Header.Title icon={true}> Vertical </Card.Header.Title>
      <Card.Header.Subtitle> Secondary text </Card.Header.Subtitle>
      <Card.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Card.Body>
      <Card.Footer>
        <Button sx={{ float: 'right' }} size="small" variant="tertiary">
          Tertiary
        </Button>
        <Button sx={{ float: 'right' }} size="small" variant="secondary">
          Secondary
        </Button>
      </Card.Footer>
    </Card>

    <Card
      orientation="horizontal"
      sx={{ maxWidth: '536px', marginTop: 6 }}
      src={
        'https://vtex.com/wp-content/uploads/2020/05/more.projects-with-vtex-partner-cover.jpg'
      }
    >
      <Card.Header.Title icon={true}> Horizontal </Card.Header.Title>
      <Card.Header.Subtitle> Secondary text </Card.Header.Subtitle>
      <Card.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Card.Body>
      <Card.Footer>
        <Button sx={{ float: 'right' }} size="small" variant="tertiary">
          Tertiary
        </Button>
        <Button sx={{ float: 'right' }} size="small" variant="secondary">
          Secondary
        </Button>
      </Card.Footer>
    </Card>
  </>
)
function handleClick(): void {
  window.location = 'https://help.vtex.com'
}

export const States = () => (
  <>
    <Card
      orientation="vertical"
      as="button"
      onClick={handleClick}
      sx={{ maxWidth: '256px', marginTop: 6 }}
      src={
        'https://vtex.com/wp-content/uploads/2020/05/more.projects-with-vtex-partner-cover.jpg'
      }
    >
      <Card.Header.Title icon={true}> Card Title </Card.Header.Title>
      <Card.Header.Subtitle> Secondary text </Card.Header.Subtitle>
      <Card.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Card.Body>
      <Card.Footer>
        <Button sx={{ float: 'right' }} size="small" variant="tertiary">
          Tertiary
        </Button>
        <Button sx={{ float: 'right' }} size="small" variant="secondary">
          Secondary
        </Button>
      </Card.Footer>
    </Card>

    <Card
      orientation="vertical"
      as="button"
      onClick={handleClick}
      sx={{ maxWidth: '256px', marginTop: 6 }}
    >
      <Card.Header.Title icon={true}> Card Title </Card.Header.Title>
      <Card.Header.Subtitle> Secondary text </Card.Header.Subtitle>
      <Card.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Card.Body>
      <Card.Footer>
        <Button sx={{ float: 'right' }} size="small" variant="tertiary">
          Tertiary
        </Button>
        <Button sx={{ float: 'right' }} size="small" variant="secondary">
          Secondary
        </Button>
      </Card.Footer>
    </Card>

    <Card
      orientation="horizontal"
      as="button"
      onClick={handleClick}
      sx={{ maxWidth: '536px', maxHeight: '186px', marginTop: 6 }}
      src={
        'https://vtex.com/wp-content/uploads/2020/05/more.projects-with-vtex-partner-cover.jpg'
      }
    >
      <Card.Header.Title icon={true}> Card Title </Card.Header.Title>
      <Card.Header.Subtitle> Secondary text </Card.Header.Subtitle>
      <Card.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Card.Body>
      <Card.Footer>
        <Button sx={{ float: 'right' }} size="small" variant="tertiary">
          Tertiary
        </Button>
        <Button sx={{ float: 'right' }} size="small" variant="secondary">
          Secondary
        </Button>
      </Card.Footer>
    </Card>

    <Card
      orientation="horizontal"
      as="button"
      onClick={handleClick}
      sx={{ maxWidth: '452px', marginTop: 6 }}
    >
      <Card.Header.Title icon={true}> Card Title </Card.Header.Title>
      <Card.Header.Subtitle> Secondary text </Card.Header.Subtitle>
      <Card.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Card.Body>
      <Card.Footer>
        <Button sx={{ float: 'right' }} size="small" variant="tertiary">
          Tertiary
        </Button>
        <Button sx={{ float: 'right' }} size="small" variant="secondary">
          Secondary
        </Button>
      </Card.Footer>
    </Card>
  </>
)
