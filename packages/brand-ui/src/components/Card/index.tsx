import {
  Box,
  BoxProps,
  Flex,
  FlexProps,
  Image as ThemeUIImage,
  ImageProps,
  SxStyleProp,
} from 'theme-ui'
import React, { Ref, PropsWithChildren } from 'react'
import { forwardRef } from '../../../forwardRef'

import { IconArrowRight } from '../../icons/Arrow'

const Image = forwardRef((props: ImageProps, ref: Ref<HTMLImageElement>) => (
  <ThemeUIImage {...props} ref={ref} />
))

const Header = (props: PropsWithChildren<FlexProps>) => (
  <Flex variant="card.noMedia.header">{props.children}</Flex>
)

export interface IconProps extends FlexProps {
  /**
   * Icon
   * @default false
   */
  icon?: boolean
}

const Title = (props: PropsWithChildren<IconProps>) => (
  <Flex {...props} variant="card.noMedia.header.title">
    {props.children}
    {props.icon && <IconArrowRight size={20} />}
  </Flex>
)

const Subtitle = (props: PropsWithChildren<BoxProps>) => (
  <Box {...props} variant="card.noMedia.header.subtitle" />
)

const Body = (props: PropsWithChildren<BoxProps>) => (
  <Box {...props} variant="card.noMedia.body" />
)

const Footer = (props: PropsWithChildren<FlexProps>) => (
  <Flex {...props} variant="card.noMedia.footer" />
)

export const Card = ({
  el = 'div',
  sx = {},
  orientation = 'vertical',
  size = 'regular',
  src,
  alt,
  ...props
}: PropsWithChildren<CardProps>) => (
  <Flex {...props} variant={`card.${orientation || size}`} as={el} sx={sx}>
    {src && (
      <Flex variant={`card.media.${orientation}`}>
        <img height="100%" width="100%" src={src} alt={alt} />
      </Flex>
    )}
    <Flex variant={`card.noMedia`}>{props.children}</Flex>
  </Flex>
)

export interface CardProps extends FlexProps {
  /**
   * Element type
   * @default 'div'
   * */
  el?: React.ElementType | React.ComponentType
  /**
   * Card orientation
   * @default 'vertical'
   */
  orientation?: 'vertical' | 'horizontal'
  /**
   * Card size
   * @default 'regular'
   */
  size?: 'small' | 'regular'
  src?: string
  alt?: string
  sx?: SxStyleProp
}

Card.Header = Header
Header.Title = Title
Header.Subtitle = Subtitle
Card.Footer = Footer
Card.Body = Body
Card.Image = Image
