const textAreaInputStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0px',
  position: 'static',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  resize: 'none',
  outline: 0,
  width: '100%',
  borderRadius: '4px',
  justifyContent: 'space-between',
  paddingTop: [6, 6, 6, 36],
  paddingLeft: 24,
  paddingRight: 16,
  fontSize: ['12px','16px','16px','18px'],
  lineHeight: '16px',
  ':hover': {
    border: '1px solid #000711',
    boxSizing: 'border-box',
    marginTop: 5,
  },
  // Label styles
  ':focus + label': {
    marginTop: 6,
    transform: ['translate(0px, -24px) scale(0.875)'],
    transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
    fontSize: ['8px', '12px'],
  },
  ':not(:placeholder-shown) + label': {
    marginTop: 6,
    transform: ['translate(0px, -24px) scale(0.875)'],
    transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
    fontSize: ['8px', '12px'],
  },
}

const floatingLabelStyles = {
  top: '0% !important',
  fontSize: ['12px', '16px'],
  lineHeight: ['16px'],
  marginBottom: [3,5],
  marginTop: '8px',
  position: 'absolute',
  width: '90%',
  left: 24,
  transform: 'translate(0, 8px) scale(1)',
  transformOrigin: 'top left',
  transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
}

const floatingLabel = {
  default: {
    ...floatingLabelStyles,
    color: 'muted.0',
    backgroundColor: 'muted.5',
  },
  filled: {
    ...floatingLabelStyles,
    color: 'muted.0',
    backgroundColor: 'muted.5',
  },
  error: {
    ...floatingLabelStyles,
    color: 'muted.0',
    backgroundColor: 'muted.5',
  },
  disabled: {
    ...floatingLabelStyles,
    color: 'muted.1',
    backgroundColor: 'muted.3',
  },
  readOnly: {
    ...floatingLabelStyles,
    color: 'muted.0',
    backgroundColor: 'muted.3',
  },
}

const floatingLabelDark = {
  default: {
    ...floatingLabelStyles,
    color: 'muted.2',
    backgroundColor: 'muted.5',
  },
  filled: {
    ...floatingLabelStyles,
    color: 'muted.2',
    backgroundColor: 'secondary.base',
  },
  error: {
    ...floatingLabel.error,
  },
  disabled: {
    ...floatingLabel.disabled,
  },
  readOnly: {
    ...floatingLabel.readOnly,
  },
}

const helpMessageStyles = {
  mt: 2,
  fontSize: 0,
  lineHeight: '1rem',
  justifyContent: 'space-between',
}

const helpMessage = {
  default: {
    ...helpMessageStyles,
    color: 'muted.0',
  },
  filled: {
    ...helpMessageStyles,
    color: 'muted.0',
  },
  error: {
    ...helpMessageStyles,
    color: 'danger.base',
  },
  disabled: {
    ...helpMessageStyles,
    color: 'muted.1',
  },
  readOnly: {
    ...helpMessageStyles,
    color: 'muted.1',
  },
}

const helpMessageDark = {
  default: {
    ...helpMessageStyles,
    color: 'muted.2',
  },
  filled: {
    ...helpMessageStyles,
    color: 'muted.2',
  },
  error: {
    ...helpMessageStyles,
    color: 'danger.base',
  },
  disabled: {
    ...helpMessageStyles,
    color: 'muted.2',
  },
  readOnly: {
    ...helpMessageStyles,
    color: 'muted.2',
  },
}

const containerStyles = {
  width: '100%',
  position: 'relative',
  ':before': {
    content: '""',
    display: 'block',
    height: ['16px', '16px', '24px', '32px'],
    position: 'absolute',
    top: '1px',
    left: '1px',
    right: '21px',
    borderRadius: '3px'
  },
}

const container = {
  default: {
    ...containerStyles,
    ':before': {
      ...containerStyles[':before'],
      backgroundColor: 'muted.5',
    },
  },
  filled: {
    ...containerStyles,
    ':before': {
      ...containerStyles[':before'],
      backgroundColor: 'muted.5',
    },
  },
  error: {
    ...containerStyles,
    ':before': {
      ...containerStyles[':before'],
      backgroundColor: 'muted.5',
    },
  },
  disabled: {
    ...containerStyles,
    ':before': {
      ...containerStyles[':before'],
      backgroundColor: 'muted.3',
    },
  },
  readOnly: {
    ...containerStyles,
    ':before': {
      ...containerStyles[':before'],
      backgroundColor: 'muted.3',
    },
  },
}

const containerDark = {
  default: {
    ...container.default,
  },
  filled: {
    ...containerStyles,
    ':before': {
      ...containerStyles[':before'],
      backgroundColor: 'secondary.base',
    },
  },
  error: {
    ...container.default,
  },
  disabled: {
    ...container.disabled,
  },
  readOnly: {
    ...container.readOnly,
  },
}

const focusBase = {
  borderColor: 'secondary.hover',
  boxShadow: (t: any) => `0 0 0 ${t.borderWidths[1]}px ${t.colors.focus}`,
  outline: 'none',
}

const state = {
  default: {
    borderColor: 'muted.1',
    color: 'secondary.base',
    ':hover': {
      borderColor: 'secondary.hover',
      cursor: 'text',
    },
    ':focus-within': focusBase,
  },
  filled: {
    borderColor: 'muted.1',
    color: 'secondary.base',
    ':hover': {
      borderColor: 'secondary.hover',
      cursor: 'text',
    },
    ':focus-within': focusBase,
  },
  disabled: {
    backgroundColor: 'muted.3',
    borderColor: 'muted.1',
    color: 'muted.1',
    ':hover': {
      cursor: 'not-allowed',
    },
    svg: {
      color: 'muted.1',
    },
  },
  error: {
    borderColor: 'danger.base',
    color: 'secondary.base',
    ':hover': {
      borderColor: 'danger.hover',
      cursor: 'text',
    },
    ':focus-within': {
      ...focusBase,
      borderColor: 'danger.hover',
    },
  },
  readOnly: {
    backgroundColor: 'muted.3',
    borderColor: 'muted.1',
    color: 'secondary.base',
    ':hover': {
      cursor: 'not-allowed',
    },
  },
}

const stateDark = {
  default: {
    borderColor: 'muted.2',
    color: 'muted.2',
    ':focus-within': {
      ...focusBase,
      borderColor: 'muted.2',
    },
    ':hover': {
      borderColor: 'muted.1',
      cursor: 'text',
    },
    label: {
      color: 'muted.2',
    },
    svg: {
      color: 'muted.2',
    },
  },
  filled: {
    borderColor: 'muted.2',
    color: 'muted.2',
    backgroundColor: 'secondary.base',
    ':focus-within': {
      ...focusBase,
      borderColor: 'muted.2',
    },
    ':hover': {
      borderColor: 'muted.1',
      cursor: 'text',
    },
    label: {
      color: 'muted.2',
      backgroudColor: 'secondary.base',
    },
    svg: {
      color: 'muted.2',
    },
  },
  disabled: {
    ...state.disabled,
    borderColor: 'muted.2',
  },
  error: {
    ...state.error,
    color: 'secondary.base',
    label: {
      color: 'muted.2',
    },
    svg: {
      color: 'muted.2',
    },
  },
  readOnly: {
    ...state.readOnly,
    borderColor: 'muted.2',
  },
}

export default {
  ...Object.keys(state).reduce(function mergeState(acc, st) {
    return {
      ...acc,
      [`${st}`]: {
        ...textAreaInputStyle,
        ...(state as any)[st],
      },
      [`${st}-dark`]: {
        ...textAreaInputStyle,
        ...(stateDark as any)[st],
      },
    }
  }, {}),
  helpMessage: { ...helpMessage, dark: { ...helpMessageDark } },
  floatingLabel: { ...floatingLabel, dark: { ...floatingLabelDark } },
  container: { ...container, dark: { ...containerDark } },
}
