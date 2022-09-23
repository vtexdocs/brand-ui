import React from 'react'
import { Icon, IconProps } from '../components/Icon'

export const IconArrowRight = (props: IconProps) => {
  return (
    <Icon {...props}>
      <svg
        version="1.1"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        xmlSpace="preserve"
        fill="none"
      >
        <rect fill="url(#pattern0)" />
        <polygon
          fill={'#142032'}
          points="9.3,1.3 7.9,2.7 12.2,7 0,7 0,9 12.2,9 7.9,13.3 9.3,14.7 16,8 "
        />
      </svg>
    </Icon>
  )
}
