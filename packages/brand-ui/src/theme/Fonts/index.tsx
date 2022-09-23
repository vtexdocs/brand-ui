import React, { memo } from 'react'
import { Global, css } from '@emotion/core'

import VtexTrustVariableWoff from './VtexTrustVariable.woff'
import VtexTrustVariableWoff2 from './VtexTrustVariable.woff2'

import VtexTrustRegularWoff from './VtexTrustRegular.woff'
import VtexTrustRegularWoff2 from './VtexTrustRegular.woff2'

import VtexTrustMediumWoff from './VtexTrustMedium.woff'
import VtexTrustMediumWoff2 from './VtexTrustMedium.woff2'

/**
 * Defines & applies VTEX Trust font
 */
function Fonts() {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'VTEX Trust Variable';
          src: url(${VtexTrustVariableWoff2}) format('woff2'),
            url(${VtexTrustVariableWoff}) format('woff');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'VTEX Trust Regular';
          src: url(${VtexTrustRegularWoff2}) format('woff2'),
          url(${VtexTrustRegularWoff}) format('woff');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'VTEX Trust Medium';
          src: url(${VtexTrustMediumWoff2}) format('woff2'),
          url(${VtexTrustMediumWoff}) format('woff');
          font-weight: normal;
          font-style: normal;
        }

        html,
        body,
        * {
          font-family: 'VTEX Trust Variable', -apple-system, system-ui,
            BlinkMacSystemFont, sans-serif;
        }
      `}
    />
  )
}

export default memo(Fonts)
