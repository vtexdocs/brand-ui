import { SxStyleProp } from 'theme-ui'

import buttons from './components/buttons'
import checkbox from './components/checkbox'
import collapsible from './components/collapsible'
import header from './components/header'
import hamburgerMenu from './components/hamburgerMenu'
import tooltip from './components/tooltip'
import card from './components/card'
import input from './components/input'
import popover from './components/popover'
import helloBar from './components/helloBar'
import localeSwitcher from './components/localeSwitcher'
import timeline from './components/timeline'
import calendar from './components/calendar'
import carousel from './components/carousel'
import modal from './components/modal'
import toast from './components/toast'
import select from './components/select'
import skeleton from './components/skeleton'
import textarea from './components/textarea'

export const theme = {
  breakpoints: ['40em', '52em', '64em', '80em', '120em', '160em'],
  colors: {
    text: '#4A4A4A',
    background: '#F8F7FC',
    muted: ['#4A596B', '#A1A8B3', '#CCCED8', '#E7E9EE', '#F8F7FC', '#FFFFFF'],
    focus: '#FFC4DD',
    primary: {
      base: '#E31C58',
      hover: '#C81E51',
      active: '#D71D55',
      washed: '#FFF3F6',
      contrast: '#FFFFFF',
    },
    secondary: {
      base: '#142032',
      hover: '#000711',
      active: '#0C1522',
      washed: '#F5F9FF',
      contrast: '#FFFFFF',
    },
    success: {
      base: '#79A479',
      hover: '#719471',
      active: '#6D9C6D',
      washed: '#E6F2E6',
      contrast: '#FFFFFF',
    },
    warning: {
      base: '#FFB100',
      hover: '#E6A30A',
      active: '#EFA906',
      washed: '#FFF2D4',
      contrast: '#FFFFFF',
    },
    danger: {
      base: '#DC5A41',
      hover: '#CE4A30',
      active: '#D65138',
      washed: '#FDEFEF',
      contrast: '#FFFFFF',
    },
    bubblegum: {
      base: '#FFC4DD',
      hover: '#FCABCD',
      active: '#FEB9D6',
      washed: '#FFE0EF',
      contrast: '#FFFFFF',
    },
  },
  buttons,
  checkbox,
  collapsible,
  header,
  hamburgerMenu,
  tooltip,
  card,
  input,
  popover,
  helloBar,
  localeSwitcher,
  timeline,
  calendar,
  carousel,
  modal,
  toast,
  select,
  skeleton,
  textarea,
  styles: {
    root: {
      fontVariationSettings: 'regular',
    },
  },
  fonts: {
    body: 'sans-serif',
    heading: 'sans-serif',
    monospace: 'monospace',
  },
  fontSizes: [12, 14, 16, 20],
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 600,
  },
  fontVariationSettings: {
    hairline: "'wght' 30",
    thin: "'wght' 50",
    light: "'wght' 65",
    regular: "'wght' 92",
    medium: "'wght' 120",
    bold: "'wght' 170",
    black: "'wght' 200",
  },
  lineHeights: {
    small: 1.125,
    body: 1.25,
    highlight: 1.25,
    action: 1.5,
    subtitle: 1.5,
    headline: 1.5,
  },
  space: [0, 2, 4, 8, 16, 24, 32, 64, 96, 128, 160, 256],
  borderWidths: [0, 1, 2, 4, 6],
  borderRadius: [0, 1, 2, 4, 6],
}

export interface FeedbackPalette {
  base: string
  hover: string
  active: string
  contrast: string
  washed: string
}

export type Theme<T = unknown> = T & {
  breakpoints: string[]
  space: number[]
  colors: { [key: string]: FeedbackPalette | string | string[] }
  components: { [key: string]: { [key: string]: SxStyleProp } }
  fonts?: {
    body: string
    heading: string
    monospace: string
  }
  fontSizes: number[]
  fontWeights?: { [key: string]: number }
  lineHeights?: { [key: string]: number }
  borderWidths: number[]
  borderRadius: number[]
}

