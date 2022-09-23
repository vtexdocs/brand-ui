import React, { ReactNode, memo } from 'react'
import { ThemeProvider as BaseProvider } from 'theme-ui'

import { theme } from './theme'
import Fonts from './Fonts'

interface Props {
  children: ReactNode
}

function ThemeProvider({ children }: Props) {
  return (
    <BaseProvider theme={theme as any}>
      <Fonts />
      {children}
    </BaseProvider>
  )
}

export default memo(ThemeProvider)
