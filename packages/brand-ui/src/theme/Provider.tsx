import type { ReactNode } from 'react'
import React, { memo } from 'react'
import { ThemeProvider as BaseProvider } from 'theme-ui'

import { theme } from './theme'

interface Props {
  children: ReactNode
}

function ThemeProvider({ children }: Props) {
  return <BaseProvider theme={theme as any}>{children}</BaseProvider>
}

export default memo(ThemeProvider)
