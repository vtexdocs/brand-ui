import React, { memo, useContext, createContext, useState, useEffect, Children, Fragment, useRef, cloneElement, useCallback } from 'react';
import { ThemeProvider as ThemeProvider$1, jsx, Flex, Box, Text, Link as Link$1, Image as Image$1, Label, Input as Input$2, Grid } from 'theme-ui';
export { Box, Flex, Grid, Link, Text, jsx } from 'theme-ui';
import { Global, css, ThemeContext, keyframes } from '@emotion/core';
import { get } from '@theme-ui/css';
import mergeSx from 'deepmerge';
import { Button as Button$2, Disclosure, useDisclosureState as useDisclosureState$1, DisclosureContent as DisclosureContent$1, usePopoverState, PopoverArrow, Box as Box$1 } from 'reakit';
import { useFocusRing } from '@react-aria/focus';
import { DisclosureContent, useDisclosureState } from 'reakit/Disclosure';
export { useDisclosureState as useCollapsible } from 'reakit/Disclosure';
import invariant from 'tiny-invariant';
import { Checkbox as Checkbox$1 } from 'reakit/Checkbox';
import { Input as Input$1 } from 'reakit/Input';
import { useTooltipState, TooltipReference, Tooltip as Tooltip$2 } from 'reakit/Tooltip/';
import { PopoverDisclosure, Popover as Popover$2 } from 'reakit/Popover';
import { useDialogState, Dialog, DialogDisclosure, DialogBackdrop } from 'reakit/Dialog';
export { useDialogState as useModalState } from 'reakit/Dialog';
import { Info, DateTime } from 'luxon';
import { VisuallyHidden } from 'reakit/VisuallyHidden';
import { useSwipeable } from 'react-swipeable';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
var styles = {
  textTransform: 'uppercase',
  fontVariationSettings: 'medium',
  borderWidth: 1,
  borderRadius: 3,
  fontSize: 1,
  cursor: 'pointer',
  position: 'relative',
  border: 'none',
  lineHeight: 1,
  '&:focus': {
    outline: 'none'
  },
  '&:disabled': {
    color: 'muted.5',
    backgroundColor: 'muted.2'
  }
};
var variant = {
  primary: {
    color: 'primary.contrast',
    backgroundColor: 'primary.base',
    '&:hover': {
      backgroundColor: 'primary.hover'
    },
    '&:active': {
      backgroundColor: 'primary.active'
    }
  },
  secondary: {
    color: 'secondary.contrast',
    backgroundColor: 'secondary.base',
    '&:hover': {
      backgroundColor: 'secondary.hover'
    },
    '&:active': {
      backgroundColor: 'secondary.active'
    }
  },
  tertiary: {
    color: 'secondary.base',
    backgroundColor: 'transparent',
    '&:hover': {
      textDecoration: 'underline'
    },
    '&:active': {
      textDecoration: 'underline'
    },
    '&:disabled': {
      color: 'muted.2',
      backgroundColor: 'transparent'
    }
  }
};
var size = {
  regular: {
    height: 48,
    paddingX: 5
  },
  small: {
    height: 32,
    paddingX: 4
  },
  'icon-regular': {
    height: 48,
    paddingX: 4
  },
  'icon-small': {
    height: 32,
    paddingX: 3
  }
};
var buttons = /*#__PURE__*/_extends({}, /*#__PURE__*/Object.keys(variant).reduce(function mergeV(acc, v) {
  return _extends({}, acc, Object.keys(size).reduce(function mergeS(bcc, s) {
    var _extends2;

    return _extends({}, bcc, (_extends2 = {}, _extends2[v + "-" + s] = _extends({}, styles, variant[v], size[s]), _extends2));
  }, []));
}, {}));

var styles$1 = {
  marginY: 0,
  marginLeft: 0,
  marginRight: 3,
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: 'muted.1',
  borderRadius: 2,
  height: 16,
  width: 16,
  minWidth: 16,
  appearance: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ':checked': {
    backgroundColor: 'primary.base',
    borderColor: 'primary.base',
    ':after': {
      content: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 8' width='10' height='8' fill='none'><path d='M9 1L4 7L1 4' stroke='%23FFFFFF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>\")"
    },
    ':disabled': {
      backgroundColor: 'muted.2',
      border: 'none',
      color: 'muted.1',
      ':after': {
        content: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 8' width='10' height='8' fill='none'><path d='M9 1L4 7L1 4' stroke='%238B9299' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>\")"
      }
    }
  },
  ':disabled': {
    borderColor: 'muted.2'
  },
  ':focus': {
    boxShadow: function boxShadow(t) {
      return "0 0 0 " + t.borderWidths[1] + "px " + t.colors.focus;
    },
    outline: 'none'
  }
};
var checkbox = /*#__PURE__*/_extends({}, styles$1, {
  container: {
    width: 'fit-content'
  },
  error: /*#__PURE__*/_extends({}, styles$1, {
    borderColor: 'danger.base'
  }),
  errorMessage: {
    fontSize: 0,
    color: 'danger.base',
    marginTop: 2
  },
  label: {
    color: 'secondary.base',
    alignItems: 'center',
    disabled: {
      color: 'muted.1',
      alignItems: 'center'
    }
  }
});

/* eslint-disable @typescript-eslint/no-explicit-any */
var headerBase = {
  backgroundColor: 'transparent',
  border: 'none',
  px: 2,
  py: 4,
  alignItems: 'center',
  width: '100%',
  cursor: 'pointer',
  color: 'secondary.base',
  transition: 'ease 300ms all',
  '&:disabled': {
    color: 'muted.2'
  },
  '&:focus': {
    outline: 'none'
  },
  '&:hover': {
    backgroundColor: 'muted.3'
  }
};
var positions = {
  right: {
    justifyContent: 'space-between'
  },
  left: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end'
  }
};
var sizes = {
  regular: {
    fontSize: 2,
    lineHeight: '28px'
  },
  small: {
    fontSize: 1,
    lineHeight: '20px'
  }
};

var header = /*#__PURE__*/_extends({}, /*#__PURE__*/Object.keys(sizes).reduce(function (acc, size) {
  return _extends({}, acc, Object.keys(positions).reduce(function (bcc, position) {
    var _extends2;

    return _extends({}, bcc, (_extends2 = {}, _extends2[size + "-" + position] = _extends({}, headerBase, sizes[size], positions[position]), _extends2));
  }, {}));
}, {}), {
  content: {
    mr: 2
  },
  arrow: {
    center: {
      alignSelf: 'center'
    },
    start: {
      alignSelf: 'end'
    },
    end: {
      alignSelf: 'flex-end'
    }
  }
});

var contentBase = {
  p: 4,
  color: 'muted.0'
};
var content = {
  regular: /*#__PURE__*/_extends({}, contentBase, {
    px: 4
  }),
  stacked: /*#__PURE__*/_extends({}, contentBase, {
    ml: 5,
    pr: 0,
    pt: 0
  })
};
var collapsible = {
  backgroundColor: 'transparent',
  header: header,
  content: content
};

var brand = {
  width: 'fit-content',
  justifyContent: 'center',
  gridArea: 'brand',
  marginLeft: [4, 6, 6],
  marginBottom: 1,
  '> svg': {
    width: 'auto'
  }
};
var linksBase = {
  display: 'flex',
  height: '100%',
  minWidth: 'max-content',
  textDecoration: 'none',
  transition: 'all 0.15s ease-in',
  marginX: '1.25rem',
  '&:hover': {
    color: 'primary.base'
  },
  alignItems: 'center',
  fontSize: 2
};
var links = {
  active: /*#__PURE__*/_extends({}, linksBase, {
    color: 'primary.base',
    boxShadow: function boxShadow(theme) {
      return "inset 0 -3px 0px 0px " + theme.colors.primary.base;
    }
  }),
  noActive: /*#__PURE__*/_extends({}, linksBase, {
    color: 'secondary.base'
  })
};
var leftLinks = {
  display: ['none', 'none', 'none', 'flex'],
  gridArea: 'leftlinks',
  width: '100%',
  height: '100%',
  marginLeft: '1.75rem',
  links: links
};
var rightLinks = {
  display: ['none', 'none', 'none', 'flex'],
  gridArea: 'rightlinks',
  width: '100%',
  justifyContent: 'flex-end',
  textTransform: 'uppercase',
  '> a': {
    display: 'flex',
    minWidth: 'max-content',
    textDecoration: 'none',
    transition: 'color 0.15s ease-in',
    color: 'muted.0',
    marginX: 4,
    paddingX: 1,
    fontSize: 1,
    fontVariationSettings: 'medium',
    '&:hover': {
      color: 'primary.base'
    }
  }
};
var actionButton = {
  gridArea: 'actionbutton',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'flex-end'
};
var header$1 = {
  display: ['flex', 'flex', 'flex', 'grid'],
  width: '100vw',
  height: '5rem',
  position: 'fixed',
  top: '0',
  left: '0',
  alignItems: 'center',
  justifyContent: 'space-between',
  gridTemplateColumns: '1.25fr 4fr 2fr 2fr minmax(6.75rem, auto)',
  gridTemplateAreas: '"brand leftlinks search rightlinks actionbutton"',
  backgroundColor: 'primary.contrast',
  borderBottom: 'solid',
  borderBottomWidth: '1px',
  borderBottomColor: 'muted.3',
  brand: brand,
  leftLinks: leftLinks,
  rightLinks: rightLinks,
  actionButton: actionButton
};

var open = {
  position: 'absolute',
  width: '100vw',
  height: '100vh',
  left: '0',
  bottom: '0',
  top: '0',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: 'muted.4',
  marginTop: '5rem',
  paddingBottom: '5rem'
};
var menu = {
  display: ['flex', 'flex', 'flex', 'none'],
  flexDirection: 'column',
  overflowY: 'auto',
  paddingY: 4
};
var links$1 = {
  height: '30px',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  transition: 'color 0.15s ease-in',
  color: 'secondary.base',
  marginY: 4,
  paddingX: 6,
  fontSize: 3
};

var activeLink = /*#__PURE__*/_extends({}, links$1, {
  boxShadow: function boxShadow(theme) {
    return "inset 3px 0px 0px 0px " + theme.colors.primary.base;
  }
});

var actionButton$1 = {
  zIndex: 0,
  borderTop: 'solid',
  borderTopWidth: '1px',
  borderTopColor: 'muted.3',
  paddingX: 5
};
var hamburgerMenu = {
  display: ['flex', 'flex', 'flex', 'none'],
  outline: 'none',
  border: 'none',
  bg: 'transparent',
  width: '5rem',
  height: '100%',
  paddingY: 5,
  justifyContent: 'center',
  alignItems: 'center',
  color: 'primary.base',
  borderLeft: 'solid',
  borderLeftWidth: '1px',
  borderLeftColor: 'muted.3',
  cursor: 'pointer',
  open: open,
  menu: menu,
  links: links$1,
  activeLink: activeLink,
  actionButton: actionButton$1
};

var tooltip = {
  backgroundColor: 'text',
  color: 'primary.contrast',
  fontSize: 1,
  borderRadius: 3,
  paddingX: 4,
  paddingY: 3,
  boxShadow: '0px 1px 18px rgba(0, 0, 0, 0.14)',
  margin: 0,
  maxWidth: '16.5rem'
};

var baseCard = {
  display: 'flex',
  bg: 'primary.contrast',
  flexDirection: 'column',
  borderRadius: 3,
  boxShadow: '0px 3px 9px rgba(61, 62, 64, 0.25)',
  '& > img': {
    padding: 0
  }
};
var media = {
  vertical: {
    borderRadius: 3,
    bg: 'primary.contrast',
    '& > img': {
      padding: 0
    }
  },
  horizontal: {
    borderRadius: 3,
    bg: 'primary.contrast',
    '& > img': {
      padding: 0
    },
    maxWidth: ['100%', '30%', '35%', '35%']
  }
};
var text = {
  title: {
    fontSize: 3,
    fontVariationSettings: 'medium',
    color: 'muted.0',
    paddingBottom: 2,
    paddingTop: 4,
    marginLeft: 4,
    marginRight: 4,
    justifyContent: 'space-between'
  },
  subtitle: {
    fontSize: 2,
    fontVariationSettings: 'regular',
    color: 'muted.0',
    paddingTop: 2,
    paddingBottom: 2,
    marginLeft: 4,
    marginRight: 4
  }
};
var noMedia = {
  display: 'flex',
  bg: 'primary.contrast',
  flexDirection: 'column',
  borderRadius: 3,
  header: /*#__PURE__*/_extends({
    fontSize: 3,
    paddingBottom: 4,
    paddingTop: 4,
    marginLeft: 4,
    marginRight: 4
  }, text),
  body: {
    fontSize: 2,
    color: 'muted.0',
    alignItems: 'left',
    marginLeft: 4,
    marginRight: 4,
    paddingBottom: 4,
    paddingTop: '12px'
  },
  footer: {
    paddingTop: 3,
    paddingBottom: 4,
    fontSize: 2,
    marginLeft: 4,
    marginRight: 4,
    justifyContent: 'flex-end',
    position: 'relative'
  }
};
var card = {
  media: media,
  noMedia: noMedia,
  small: /*#__PURE__*/_extends({}, baseCard, {
    '& > div': {
      paddingX: 4
    },
    paddingBottom: 4,
    paddingTop: 4
  }),
  regular: /*#__PURE__*/_extends({}, baseCard, {
    '& > div': {
      paddingX: 5
    },
    paddingBottom: 6,
    paddingTop: 6
  }),
  vertical: /*#__PURE__*/_extends({}, baseCard, {
    '& > div': {
      paddingX: 2
    }
  }),
  horizontal: /*#__PURE__*/_extends({}, baseCard, {
    flexDirection: ['column', 'row', 'row', 'row'],
    '& > div': {
      paddingX: 2
    }
  })
};

var styles$2 = {
  paddingX: 5,
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: 3
};
var inputBase = {
  border: 'none',
  borderRadius: 0,
  width: '100%',
  p: 0,
  ':focus': {
    outline: 'none'
  }
};
var size$1 = {
  regular: {
    height: 56,
    input: /*#__PURE__*/_extends({}, inputBase, {
      lineHeight: '24px',
      marginTop: 4,
      fontSize: '18px'
    })
  },
  large: {
    height: 72,
    input: /*#__PURE__*/_extends({}, inputBase, {
      lineHeight: '32px',
      marginTop: '18px',
      fontSize: '22px'
    })
  }
};
var focusBase = {
  borderColor: 'secondary.hover',
  boxShadow: function boxShadow(t) {
    return "0 0 0 " + t.borderWidths[1] + "px " + t.colors.focus;
  },
  outline: 'none'
};
var state = {
  "default": {
    borderColor: 'muted.1',
    color: 'secondary.base',
    ':hover': {
      borderColor: 'secondary.hover',
      cursor: 'text'
    },
    ':focus-within': focusBase
  },
  disabled: {
    backgroundColor: 'muted.3',
    borderColor: 'muted.1',
    color: 'muted.1',
    ':hover': {
      cursor: 'not-allowed'
    },
    label: {
      color: 'muted.1'
    },
    svg: {
      color: 'muted.1'
    }
  },
  error: {
    borderColor: 'danger.base',
    color: 'secondary.base',
    ':hover': {
      borderColor: 'danger.hover',
      cursor: 'text'
    },
    ':focus-within': /*#__PURE__*/_extends({}, focusBase, {
      borderColor: 'danger.hover'
    })
  },
  readOnly: {
    backgroundColor: 'muted.3',
    borderColor: 'muted.1',
    color: 'secondary.base',
    ':hover': {
      cursor: 'default'
    }
  }
};
var stateDark = {
  "default": {
    borderColor: 'muted.2',
    color: 'muted.4',
    ':focus-within': /*#__PURE__*/_extends({}, focusBase, {
      borderColor: 'muted.2'
    }),
    ':hover': {
      borderColor: 'muted.1',
      cursor: 'text'
    },
    label: {
      color: 'muted.2'
    },
    svg: {
      color: 'muted.2'
    }
  },
  disabled: /*#__PURE__*/_extends({}, state.disabled, {
    borderColor: 'muted.2'
  }),
  error: /*#__PURE__*/_extends({}, state.error, {
    color: 'muted.4',
    label: {
      color: 'muted.2'
    },
    svg: {
      color: 'muted.2'
    }
  }),
  readOnly: /*#__PURE__*/_extends({}, state.readOnly, {
    borderColor: 'muted.2'
  })
};
var labelBase = {
  color: 'muted.0',
  width: '100%',
  paddingRight: '3rem',
  position: 'absolute',
  pointerEvents: 'none',
  transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms'
};

var labelRegular = /*#__PURE__*/_extends({}, labelBase, {
  fontSize: '18px',
  lineHeight: '30px'
});

var labelLarge = /*#__PURE__*/_extends({}, labelBase, {
  fontSize: '22px',
  lineHeight: '32px'
});

var labelTranslateRegular = {
  fontSize: 0,
  lineHeight: '1rem',
  transform: 'translateY(-12px)'
};
var labelTranslateLarge = {
  fontSize: 2,
  lineHeight: '1.125rem',
  transform: 'translateY(-16px)'
};
var labelSize = {
  regular: {
    defaultPosition: {
      left: 'auto'
    },
    translate: /*#__PURE__*/_extends({}, labelTranslateRegular)
  },
  'regular-prefix': {
    defaultPosition: {
      left: 56
    },
    translate: /*#__PURE__*/_extends({
      left: 56
    }, labelTranslateRegular)
  },
  large: {
    defaultPosition: {
      left: 'auto'
    },
    translate: /*#__PURE__*/_extends({}, labelTranslateLarge)
  },
  'large-prefix': {
    defaultPosition: {
      left: 56
    },
    translate: /*#__PURE__*/_extends({
      left: 56
    }, labelTranslateLarge)
  }
};

var label = /*#__PURE__*/_extends({}, /*#__PURE__*/Object.entries(labelSize).reduce(function mergeSize(acc, currSize) {
  var _extends2;

  var sizeName = currSize[0],
      _currSize$ = currSize[1],
      defaultPosition = _currSize$.defaultPosition,
      translate = _currSize$.translate;
  return _extends({}, acc, (_extends2 = {}, _extends2[sizeName + "-default"] = _extends({}, sizeName.startsWith('regular') ? labelRegular : labelLarge, defaultPosition), _extends2[sizeName + "-translate"] = _extends({}, sizeName.startsWith('regular') ? labelRegular : labelLarge, translate), _extends2));
}, []));

var helpMessageStyles = {
  mt: 2,
  fontSize: 0,
  lineHeight: '1rem',
  justifyContent: 'space-between'
};
var helpMessage = {
  "default": /*#__PURE__*/_extends({}, helpMessageStyles, {
    color: 'muted.0'
  }),
  error: /*#__PURE__*/_extends({}, helpMessageStyles, {
    color: 'danger.base'
  }),
  disabled: /*#__PURE__*/_extends({}, helpMessageStyles, {
    color: 'muted.1'
  }),
  readOnly: /*#__PURE__*/_extends({}, helpMessageStyles, {
    color: 'muted.1'
  })
};
var helpMessageDark = {
  "default": /*#__PURE__*/_extends({}, helpMessageStyles, {
    color: 'muted.2'
  }),
  error: /*#__PURE__*/_extends({}, helpMessageStyles, {
    color: 'danger.base'
  }),
  disabled: /*#__PURE__*/_extends({}, helpMessageStyles, {
    color: 'muted.2'
  }),
  readOnly: /*#__PURE__*/_extends({}, helpMessageStyles, {
    color: 'muted.2'
  })
};
var iconBase = {
  alignItems: 'center',
  color: 'muted.0',
  minWidth: '24px',
  minHeight: '24px'
};
var container = {
  width: '100%',
  mb: 3
};
var input = /*#__PURE__*/_extends({}, /*#__PURE__*/Object.keys(state).reduce(function mergeState(acc, st) {
  return _extends({}, acc, Object.keys(size$1).reduce(function mergeSize(bcc, sz) {
    var _extends3;

    return _extends({}, bcc, (_extends3 = {}, _extends3[sz + "-" + st] = _extends({}, styles$2, state[st], size$1[sz]), _extends3[sz + "-" + st + "-dark"] = _extends({}, styles$2, stateDark[st], size$1[sz]), _extends3));
  }, []));
}, {}), {
  prefix: /*#__PURE__*/_extends({}, iconBase, {
    mr: 3
  }),
  suffix: /*#__PURE__*/_extends({}, iconBase, {
    ml: 3
  }),
  label: label,
  helpMessage: /*#__PURE__*/_extends({}, helpMessage, {
    dark: /*#__PURE__*/_extends({}, helpMessageDark)
  }),
  container: container
});

var close = {
  position: 'absolute',
  right: 0,
  top: 3
};
var content$1 = {
  paddingX: 5,
  paddingY: 4,
  position: 'relative'
};
var baseArrow = {
  fill: 'primary.contrast'
};
var arrow = {
  top: /*#__PURE__*/_extends({}, baseArrow, {
    filter: 'drop-shadow(0px 4px 3px rgba(61, 62, 64, 0.25))'
  }),
  right: /*#__PURE__*/_extends({}, baseArrow, {
    filter: 'drop-shadow(-4px 0px 3px rgba(61, 62, 64, 0.25))'
  }),
  bottom: /*#__PURE__*/_extends({}, baseArrow, {
    filter: 'drop-shadow(0px -3px 3px rgba(61, 62, 64, 0.25))'
  }),
  left: /*#__PURE__*/_extends({}, baseArrow, {
    filter: 'drop-shadow(4px 0px 3px rgba(61, 62, 64, 0.25))'
  })
};
var popover = {
  backgroundColor: 'primary.contrast',
  outline: 'none',
  boxShadow: '0px 3px 9px rgba(61, 62, 64, 0.25)',
  borderRadius: 3,
  maxWidth: '24rem',
  close: close,
  content: content$1,
  arrow: arrow
};

var base = {
  width: '100%',
  cursor: 'pointer',
  borderBottomStyle: 'solid',
  borderBottomWidth: 1,
  borderBottomColor: 'muted.3'
};
var helloBar = {
  primary: /*#__PURE__*/_extends({}, base, {
    backgroundColor: 'primary.washed',
    color: 'text'
  }),
  secondary: /*#__PURE__*/_extends({}, base, {
    backgroundColor: 'secondary.base',
    color: 'muted.5'
  }),
  tertiary: /*#__PURE__*/_extends({}, base, {
    backgroundColor: 'muted.5',
    color: 'text'
  }),
  icon: {
    mr: 4,
    display: ['none', 'block', 'block']
  },
  iconClose: {
    color: 'text'
  },
  iconCloseSecundary: {
    color: 'muted.5'
  },
  content: {
    alignItems: 'center',
    mr: 4
  },
  contentButtons: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 200
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 1140,
    px: 4,
    py: 3,
    mx: 'auto',
    minHeight: 56,
    fontSize: [0, 2]
  },
  actionIcon: {
    display: ['block', 'block', 'none'],
    px: 4,
    height: '100%'
  }
};

var labelLarge$1 = {
  pl: 2,
  pr: '3.5rem'
};
var labelMobile = {
  px: 3
};
var overlay = {
  backgroundColor: 'rgba(20, 32, 50, 0.8)',
  display: ['block', 'block', 'block', 'none'],
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  top: 0,
  left: 0,
  zIndex: 1
};
var optionContainerLarge = {
  position: 'absolute',
  display: ['none', 'none', 'none', 'flex'],
  flexDirection: 'column',
  bg: 'primary.contrast',
  width: '11rem',
  right: 0,
  top: 0,
  px: 5,
  py: 4,
  mt: '5rem',
  fontVariationSettings: 'regular',
  border: '1px solid',
  borderColor: 'muted.3',
  boxShadow: '0px 20px 25px rgba(20, 32, 50, 0.1)'
};
var optionContainerMobile = {
  position: 'fixed',
  display: ['flex', 'flex', 'flex', 'none'],
  flexDirection: 'column',
  bg: 'primary.contrast',
  width: '100%',
  zIndex: 2,
  right: 0,
  left: 0,
  bottom: '5rem',
  px: 5,
  py: 4,
  fontVariationSettings: 'regular',
  border: '1px solid',
  borderColor: 'muted.3'
};
var baseOption = {
  cursor: 'pointer',
  my: 3,
  color: 'base.0'
};

var optionLarge = /*#__PURE__*/_extends({}, baseOption, {
  ':hover': {
    color: 'primary.base'
  },
  active: /*#__PURE__*/_extends({}, baseOption, {
    color: 'primary.base'
  })
});

var optionMobile = /*#__PURE__*/_extends({}, optionLarge, {
  color: 'secondary.base',
  my: 4
});

var baseLocaleSwitcher = {
  width: '100%',
  color: 'muted.0',
  alignItems: 'center',
  cursor: 'pointer',
  fontVariationSettings: 'medium',
  fontSize: 1,
  bg: 'primary.contrast',
  border: 'none',
  outline: 'none'
};

var large = /*#__PURE__*/_extends({}, baseLocaleSwitcher, {
  display: ['none', 'none', 'none', 'flex'],
  ':hover': {
    color: 'secondary.base'
  },
  height: '100%',
  justifyContent: 'flex-start',
  borderLeft: '1px solid',
  borderColor: 'muted.3',
  optionContainer: optionContainerLarge,
  label: labelLarge$1,
  option: optionLarge
});

var mobile = /*#__PURE__*/_extends({}, baseLocaleSwitcher, {
  display: ['flex', 'flex', 'flex', 'none'],
  position: 'fixed',
  justifyContent: 'space-between',
  px: 6,
  py: 5,
  bottom: 0,
  zIndex: 2,
  label: labelMobile,
  optionContainer: optionContainerMobile,
  borderTop: '1px solid',
  borderColor: 'muted.3',
  option: optionMobile
});

var localeSwitcher = {
  large: large,
  mobile: /*#__PURE__*/_extends({}, mobile, {
    open: /*#__PURE__*/_extends({}, mobile, {
      color: 'secondary.base'
    })
  }),
  overlay: overlay,
  optionContainerLarge: optionContainerLarge
};

var timeline = {
  '& > *:last-child': {
    '& > *:nth-of-type(2)': {
      pb: 0
    },
    '& > *:first-of-type > *:last-child': {
      display: 'none'
    }
  },
  width: '100%',
  maxWidth: '100%',
  event: {
    pl: 5,
    pb: 6,
    title: {
      fontSize: [2, 3]
    },
    subtitle: {
      mt: 2,
      color: 'muted.0',
      fontSize: 1,
      lineHeight: '17px'
    },
    content: {
      mt: 5,
      fontSize: 1
    },
    icon: {
      display: 'flex',
      flexDirection: 'column',
      width: '18px',
      minWidth: '18px',
      alignItems: 'center',
      "default": {
        width: '18px',
        height: '18px',
        p: 1,
        '& > div': {
          backgroundColor: 'muted.2',
          borderRadius: '100%',
          height: '100%',
          width: '100%'
        }
      }
    },
    line: {
      height: '100%',
      width: 2,
      backgroundColor: 'muted.2'
    }
  }
};

var baseCell = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  placeItems: 'center',
  color: 'secondary.base',
  bg: 'transparent',
  borderRadius: '100%',
  border: '2px transparent solid',
  width: ['35px', '44px'],
  height: ['35px', '44px'],
  position: 'relative',
  fontSize: [2, 3],
  pointerEvents: 'auto'
};

var weekdayCell = /*#__PURE__*/_extends({}, baseCell, {
  color: 'muted.1'
});

var activeDayCellIncident = {
  cursor: 'pointer',
  backgroundColor: 'focus',
  color: 'secondary.base',
  outline: 'none'
};
var activeDayCell = {
  backgroundColor: 'white',
  color: 'secondary.base',
  outline: 'none',
  borderColor: 'muted.2',
  borderStyle: 'solid',
  borderWidth: '2px'
};
var hoverDayCell = {
  cursor: 'pointer',
  backgroundColor: 'muted.3'
};

var baseDayCellIncident = /*#__PURE__*/_extends({}, baseCell, {
  transition: 'all .3s ease-in-out',
  ':hover': /*#__PURE__*/_extends({}, hoverDayCell),
  ':focus': /*#__PURE__*/_extends({}, activeDayCellIncident, {
    pointerEvents: 'none'
  }),
  ':disabled': {
    cursor: 'not-allowed',
    border: 'none'
  },
  ':active': /*#__PURE__*/_extends({}, baseCell, activeDayCellIncident)
});

var monthCell = /*#__PURE__*/_extends({}, baseCell, {
  transition: 'all .3s ease-in-out',
  ':hover': {
    backgroundColor: 'white'
  },
  ':focus': /*#__PURE__*/_extends({}, activeDayCell, {
    pointerEvents: 'none'
  }),
  ':disabled': {
    cursor: 'not-allowed',
    border: 'none'
  },
  ':active': /*#__PURE__*/_extends({}, baseCell, activeDayCell),
  current: /*#__PURE__*/_extends({}, baseDayCellIncident, {
    cursor: 'pointer',
    borderColor: 'bubblegum.base',
    borderStyle: 'solid',
    borderWidth: '2px',
    color: 'primary.base',
    fontVariationSettings: 'medium'
  })
});

var monthCellIncident = /*#__PURE__*/_extends({}, baseDayCellIncident, {
  current: /*#__PURE__*/_extends({}, baseDayCellIncident, {
    cursor: 'pointer',
    borderColor: 'bubblegum.base',
    borderStyle: 'solid',
    borderWidth: '2px',
    color: 'primary.base',
    fontVariationSettings: 'medium'
  })
});

var extraCell = {
  incident: /*#__PURE__*/_extends({}, baseDayCellIncident, {
    color: 'muted.2'
  }),
  noIncident: /*#__PURE__*/_extends({}, monthCell, {
    color: 'muted.2'
  })
};
var title = {
  '&:first-letter': {
    textTransform: 'capitalize'
  },
  color: 'secondary.base',
  center: {
    '&:first-letter': {
      textTransform: 'capitalize'
    },
    color: 'secondary.base',
    width: '100%'
  }
};
var header$2 = {
  fontSize: 3,
  textAlign: 'center',
  marginX: 3,
  justifyContent: 'space-between'
};
var grid = {
  width: '100%',
  py: 4,
  columnGap: 0,
  rowGap: ['10px', 0],
  gridTemplateColumns: 'repeat(7, 1fr)',
  alignItems: 'center'
};
var baseEvent = {
  width: '11px',
  height: '4px'
};
var event = {
  leftEv: /*#__PURE__*/_extends({}, baseEvent, {
    left: 0,
    borderTopLeftRadius: '48px',
    borderBottomLeftRadius: '48px'
  }),
  rightEv: /*#__PURE__*/_extends({}, baseEvent, {
    right: 0,
    borderTopRightRadius: '48px',
    borderBottomRightRadius: '48px'
  })
};
var eventContainer = {
  display: 'flex',
  px: [0, 0, '10px'],
  position: 'absolute',
  bottom: [0, 2]
};
var baseCalendar = {
  bg: 'primary.contrast',
  borderRadius: 3,
  px: 4,
  py: 48,
  maxWidth: '22rem',
  boxShadow: ['none', 'none', '0px 6px 10px rgba(61, 62, 64, 0.25)']
};
var disabled = {
  opacity: 0.5
};

var calendar = /*#__PURE__*/_extends({}, baseCalendar, {
  disabled: /*#__PURE__*/_extends({}, baseCalendar, disabled),
  header: header$2,
  title: title,
  grid: grid,
  weekdayCell: weekdayCell,
  monthCell: monthCell,
  monthCellIncident: monthCellIncident,
  extraCell: extraCell,
  event: event,
  eventContainer: eventContainer
});

var slidesContainerBase = {
  zIndex: 0,
  height: '100%',
  width: '100%'
};

var slidesContainer = /*#__PURE__*/_extends({}, slidesContainerBase, {
  transition: '0.5s linear',
  crossfade: {
    '@keyframes crossfade': {
      '0%': {
        opacity: 1
      },
      '50%': {
        opacity: 0.75
      },
      '100%': {
        opacity: 1
      }
    },
    animated: /*#__PURE__*/_extends({}, slidesContainerBase, {
      transition: 'none',
      animation: 'crossfade .5s forwards'
    }),
    "default": /*#__PURE__*/_extends({}, slidesContainerBase, {
      transition: 'none'
    })
  }
});

var slide = {
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center'
};
var navigationContainerBase = {
  zIndex: 1,
  minWidth: 'fit-content',
  paddingTop: 2,
  paddingBottom: 2
};
var buttonDirection = {
  previous: {
    left: 0
  },
  next: {
    right: 0
  }
};
var overlaySlides = {
  "default": {
    position: 'relative',
    height: 'auto'
  },
  overlay: {
    position: 'absolute',
    height: '100%'
  }
};
var buttonAlign = {
  top: {
    alignItems: 'baseline'
  },
  center: {
    alignItems: 'center'
  }
};

var navigationContainer = /*#__PURE__*/_extends({}, /*#__PURE__*/Object.keys(buttonDirection).reduce(function (acc, d) {
  return _extends({}, acc, Object.keys(overlaySlides).reduce(function (bcc, o) {
    return _extends({}, bcc, Object.keys(buttonAlign).reduce(function (ccc, b) {
      var _extends2;

      return _extends({}, ccc, (_extends2 = {}, _extends2[d + "-" + o + "-" + b] = _extends({}, navigationContainerBase, buttonDirection[d], overlaySlides[o], buttonAlign[b]), _extends2));
    }, []));
  }, {}));
}, {}));

var navigationButtonBase = {
  cursor: 'pointer',
  border: 'none',
  borderRadius: '100%',
  backgroundColor: 'muted.5',
  color: 'secondary.base',
  boxShadow: '0px 3px 9px rgba(61, 62, 64, 0.25)',
  ':hover': {
    backgroundColor: 'muted.3'
  },
  '&:focus': {
    outline: 'none'
  }
};
var navigationButton = {
  regular: /*#__PURE__*/_extends({}, navigationButtonBase, {
    height: 64,
    width: 64
  }),
  small: /*#__PURE__*/_extends({}, navigationButtonBase, {
    height: 40,
    width: 40
  })
};
var indicatorBarBase = {
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: 'center',
  marginX: 5,
  button: {
    marginRight: 5
  },
  'button:last-child': {
    marginRight: 0
  },
  marginBottom: 6
};
var indicatorBar = {
  "default": /*#__PURE__*/_extends({}, indicatorBarBase, {
    position: 'relative'
  }),
  overlay: /*#__PURE__*/_extends({}, indicatorBarBase, {
    position: 'absolute'
  })
};
var indicatorBase = {
  height: 16,
  width: 16,
  minHeight: 16,
  minWidth: 16,
  padding: 0,
  border: 'none',
  borderRadius: '100%',
  backgroundColor: 'muted.4',
  cursor: 'pointer',
  opacity: 0.5,
  ':hover': {
    opacity: 1,
    backgroundColor: 'muted.3'
  },
  '&:focus': {
    outline: 'none'
  }
};

var indicator = /*#__PURE__*/_extends({}, indicatorBase, {
  active: /*#__PURE__*/_extends({}, indicatorBase, {
    opacity: 1
  })
});

var next = {
  small: /*#__PURE__*/_extends({}, navigationButton.small, {
    marginRight: 4
  }),
  regular: /*#__PURE__*/_extends({}, navigationButton.regular, {
    marginRight: 4
  })
};
var previous = {
  small: /*#__PURE__*/_extends({}, navigationButton.small, {
    marginLeft: 4
  }),
  regular: /*#__PURE__*/_extends({}, navigationButton.regular, {
    marginLeft: 4
  })
};
var carousel = {
  position: 'relative',
  overflow: 'hidden',
  flexDirection: 'column',
  width: 'fit-content',
  slidesContainer: slidesContainer,
  slide: slide,
  navigationContainer: navigationContainer,
  next: next,
  previous: previous,
  indicatorBar: indicatorBar,
  indicator: indicator
};

var bottomBarStyles = {
  justifyContent: 'flex-end',
  flexDirection: 'row'
};
var bottomBar = {
  modal: /*#__PURE__*/_extends({
    marginTop: ['1.5rem', '2rem', '2rem', '2rem'],
    paddingX: ['1.5rem', '2rem', '2rem', '2rem'],
    paddingBottom: ['1.5rem', '2rem', '2rem', '2rem']
  }, bottomBarStyles),
  dialog: /*#__PURE__*/_extends({
    paddingTop: ['1.5rem', '1.5rem', '2rem', '2rem'],
    paddingX: ['1.5rem', '1.5rem', '4rem', '5.5rem'],
    paddingBottom: ['1.5rem', '1.5rem', '4rem', '4rem']
  }, bottomBarStyles)
};
var title$1 = {
  padding: '2rem',
  height: '81px',
  paddingX: ['1.5rem', '2rem', '2rem', '2rem'],
  borderRadius: '5px 5px 0px 0px',
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
  borderBottomColor: 'muted.3'
};
var backdrop = {
  width: '100%',
  height: '100%',
  bg: 'rgba(52, 52, 52, 0.3)',
  position: 'fixed',
  top: 0,
  left: 0,
  flexDirection: 'column',
  alignItems: 'center',
  display: 'flex',
  zIndex: 1
};
var boxStyles = {
  bg: 'white',
  borderRadius: '5px',
  boxShadow: '2px 4px 16px rgba(0, 0, 0, 0.3)',
  outline: 'none',
  margin: 'auto',
  position: 'relative',
  zIndex: '100000000'
};
var box = {
  modal: /*#__PURE__*/_extends({
    width: ['20rem', '40rem', '40rem', '56rem'],
    justifyContent: 'center'
  }, boxStyles),
  dialog: /*#__PURE__*/_extends({
    width: ['20rem', '20rem', '50rem', '62.5rem', '68rem']
  }, boxStyles)
};
var bodyStyles = {
  maxWidth: '100%',
  overflowY: 'auto'
};
var closeBar = {
  paddingTop: ['1.5rem', '1.5rem', '2rem', '2rem'],
  paddingBottom: ['1rem', '1rem', '2rem', '2rem'],
  height: ['64px', '64px', '80px', '80px'],
  paddingX: ['1.5rem', '2rem', '2rem', '2rem']
};
var body = {
  modal: /*#__PURE__*/_extends({
    maxHeight: '50vh',
    paddingX: ['1.5rem', '2rem', '2rem', '2rem'],
    paddingTop: ['1.5rem', '2rem', '2rem', '2rem'],
    fontSize: '.75rem'
  }, bodyStyles),
  dialog: /*#__PURE__*/_extends({
    maxHeight: ['50vh', '70vh', '50vh', '70vh', '70vh'],
    paddingX: ['1.5rem', '1.5rem', '3.5rem', '5.5rem']
  }, bodyStyles)
};
var modal = {
  bottomBar: bottomBar,
  title: title$1,
  closeBar: closeBar,
  backdrop: backdrop,
  box: box,
  body: body
};

var container$1 = {
  position: 'fixed',
  bottom: [0, 3],
  left: [0, 3],
  flexWrap: 'wrap',
  width: ['100%', 'auto'],
  wordWrap: 'normal',
  ':last-child': {
    mb: [0, 3]
  }
};
var dismiss = {
  bg: 'transparent',
  border: 'none',
  display: ['none', 'flex'],
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'center',
  mt: -1
};
var actionContainer = {
  display: 'flex',
  alignItems: 'center',
  width: ['100%', 'auto'],
  textAlign: ['right', 'start'],
  justifyContent: ['flex-end', 'space-between']
};
var action = {
  bg: 'transparent',
  border: 'none',
  mr: [0, 2],
  ml: [0, 6],
  fontVariationSettings: 'bold',
  textTransform: 'uppercase',
  cursor: 'pointer'
};
var text$1 = {
  fontSize: 2
};
var wrapper = {
  mb: 3
};
var toast = {
  wrapper: wrapper,
  container: container$1,
  dismiss: dismiss,
  actionContainer: actionContainer,
  action: action,
  text: text$1,
  backgroundColor: 'text',
  color: 'white',
  py: 4,
  pl: '20px',
  pr: 4,
  borderRadius: '4px',
  width: 'auto',
  minWidth: ['100%', '300px'],
  maxWidth: ['100%', '480px'],
  position: 'relative',
  display: 'flex',
  alignItems: ['flex-start', 'center'],
  justifyContent: 'space-between',
  flexDirection: ['column', 'row'],
  border: 'none',
  flexWrap: 'wrap',
  wordWrap: 'break-word'
};

var styles$3 = {
  bg: 'transparent',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',
  height: '100%',
  appearance: 'none',
  border: 'none',
  outline: 'none',
  zIndex: 1,
  fontSize: 2,
  cursor: 'pointer',
  pl: 5,
  color: 'text',
  fontWeight: 'initial'
};
var option = {
  fontSize: 1,
  px: 4,
  fontVariationSettings: 'light',
  color: 'black',
  fontFamily: 'sans-serif'
};

var container$2 = /*#__PURE__*/_extends({}, input.container, {
  bg: 'transparent',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: 'auto'
});

var arrow$1 = {
  position: 'absolute',
  right: 4,
  zIndex: 0
};
var select = /*#__PURE__*/_extends({}, styles$3, {
  disabled: /*#__PURE__*/_extends({}, styles$3, {
    cursor: 'not-allowed'
  }),
  container: container$2,
  option: option,
  arrow: arrow$1
});

var styles$4 = {
  display: 'flex',
  backgroundImage: 'linear-gradient(90deg, #E7E9EE, white, #E7E9EE)',
  borderRadius: '4px',
  backgroundColor: 'muted.3',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '200px 100%',
  marginBottom: 2
};
var skeleton = {
  rect: /*#__PURE__*/_extends({}, styles$4),
  circle: /*#__PURE__*/_extends({}, styles$4, {
    borderRadius: '50%'
  })
};

var textAreaInputStyle = {
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
  fontSize: ['12px', '16px', '16px', '18px'],
  lineHeight: '16px',
  ':hover': {
    border: '1px solid #000711',
    boxSizing: 'border-box',
    marginTop: 5
  },
  // Label styles
  ':focus + label': {
    marginTop: 6,
    transform: ['translate(0px, -24px) scale(0.875)'],
    transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
    fontSize: ['8px', '12px']
  },
  ':not(:placeholder-shown) + label': {
    marginTop: 6,
    transform: ['translate(0px, -24px) scale(0.875)'],
    transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
    fontSize: ['8px', '12px']
  }
};
var floatingLabelStyles = {
  top: '0% !important',
  fontSize: ['12px', '16px'],
  lineHeight: ['16px'],
  marginBottom: [3, 5],
  marginTop: '8px',
  position: 'absolute',
  width: '90%',
  left: 24,
  transform: 'translate(0, 8px) scale(1)',
  transformOrigin: 'top left',
  transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms'
};
var floatingLabel = {
  "default": /*#__PURE__*/_extends({}, floatingLabelStyles, {
    color: 'muted.0',
    backgroundColor: 'muted.5'
  }),
  filled: /*#__PURE__*/_extends({}, floatingLabelStyles, {
    color: 'muted.0',
    backgroundColor: 'muted.5'
  }),
  error: /*#__PURE__*/_extends({}, floatingLabelStyles, {
    color: 'muted.0',
    backgroundColor: 'muted.5'
  }),
  disabled: /*#__PURE__*/_extends({}, floatingLabelStyles, {
    color: 'muted.1',
    backgroundColor: 'muted.3'
  }),
  readOnly: /*#__PURE__*/_extends({}, floatingLabelStyles, {
    color: 'muted.0',
    backgroundColor: 'muted.3'
  })
};
var floatingLabelDark = {
  "default": /*#__PURE__*/_extends({}, floatingLabelStyles, {
    color: 'muted.2',
    backgroundColor: 'muted.5'
  }),
  filled: /*#__PURE__*/_extends({}, floatingLabelStyles, {
    color: 'muted.2',
    backgroundColor: 'secondary.base'
  }),
  error: /*#__PURE__*/_extends({}, floatingLabel.error),
  disabled: /*#__PURE__*/_extends({}, floatingLabel.disabled),
  readOnly: /*#__PURE__*/_extends({}, floatingLabel.readOnly)
};
var helpMessageStyles$1 = {
  mt: 2,
  fontSize: 0,
  lineHeight: '1rem',
  justifyContent: 'space-between'
};
var helpMessage$1 = {
  "default": /*#__PURE__*/_extends({}, helpMessageStyles$1, {
    color: 'muted.0'
  }),
  filled: /*#__PURE__*/_extends({}, helpMessageStyles$1, {
    color: 'muted.0'
  }),
  error: /*#__PURE__*/_extends({}, helpMessageStyles$1, {
    color: 'danger.base'
  }),
  disabled: /*#__PURE__*/_extends({}, helpMessageStyles$1, {
    color: 'muted.1'
  }),
  readOnly: /*#__PURE__*/_extends({}, helpMessageStyles$1, {
    color: 'muted.1'
  })
};
var helpMessageDark$1 = {
  "default": /*#__PURE__*/_extends({}, helpMessageStyles$1, {
    color: 'muted.2'
  }),
  filled: /*#__PURE__*/_extends({}, helpMessageStyles$1, {
    color: 'muted.2'
  }),
  error: /*#__PURE__*/_extends({}, helpMessageStyles$1, {
    color: 'danger.base'
  }),
  disabled: /*#__PURE__*/_extends({}, helpMessageStyles$1, {
    color: 'muted.2'
  }),
  readOnly: /*#__PURE__*/_extends({}, helpMessageStyles$1, {
    color: 'muted.2'
  })
};
var containerStyles = {
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
  }
};
var container$3 = {
  "default": /*#__PURE__*/_extends({}, containerStyles, {
    ':before': /*#__PURE__*/_extends({}, containerStyles[':before'], {
      backgroundColor: 'muted.5'
    })
  }),
  filled: /*#__PURE__*/_extends({}, containerStyles, {
    ':before': /*#__PURE__*/_extends({}, containerStyles[':before'], {
      backgroundColor: 'muted.5'
    })
  }),
  error: /*#__PURE__*/_extends({}, containerStyles, {
    ':before': /*#__PURE__*/_extends({}, containerStyles[':before'], {
      backgroundColor: 'muted.5'
    })
  }),
  disabled: /*#__PURE__*/_extends({}, containerStyles, {
    ':before': /*#__PURE__*/_extends({}, containerStyles[':before'], {
      backgroundColor: 'muted.3'
    })
  }),
  readOnly: /*#__PURE__*/_extends({}, containerStyles, {
    ':before': /*#__PURE__*/_extends({}, containerStyles[':before'], {
      backgroundColor: 'muted.3'
    })
  })
};
var containerDark = {
  "default": /*#__PURE__*/_extends({}, container$3["default"]),
  filled: /*#__PURE__*/_extends({}, containerStyles, {
    ':before': /*#__PURE__*/_extends({}, containerStyles[':before'], {
      backgroundColor: 'secondary.base'
    })
  }),
  error: /*#__PURE__*/_extends({}, container$3["default"]),
  disabled: /*#__PURE__*/_extends({}, container$3.disabled),
  readOnly: /*#__PURE__*/_extends({}, container$3.readOnly)
};
var focusBase$1 = {
  borderColor: 'secondary.hover',
  boxShadow: function boxShadow(t) {
    return "0 0 0 " + t.borderWidths[1] + "px " + t.colors.focus;
  },
  outline: 'none'
};
var state$1 = {
  "default": {
    borderColor: 'muted.1',
    color: 'secondary.base',
    ':hover': {
      borderColor: 'secondary.hover',
      cursor: 'text'
    },
    ':focus-within': focusBase$1
  },
  filled: {
    borderColor: 'muted.1',
    color: 'secondary.base',
    ':hover': {
      borderColor: 'secondary.hover',
      cursor: 'text'
    },
    ':focus-within': focusBase$1
  },
  disabled: {
    backgroundColor: 'muted.3',
    borderColor: 'muted.1',
    color: 'muted.1',
    ':hover': {
      cursor: 'not-allowed'
    },
    svg: {
      color: 'muted.1'
    }
  },
  error: {
    borderColor: 'danger.base',
    color: 'secondary.base',
    ':hover': {
      borderColor: 'danger.hover',
      cursor: 'text'
    },
    ':focus-within': /*#__PURE__*/_extends({}, focusBase$1, {
      borderColor: 'danger.hover'
    })
  },
  readOnly: {
    backgroundColor: 'muted.3',
    borderColor: 'muted.1',
    color: 'secondary.base',
    ':hover': {
      cursor: 'not-allowed'
    }
  }
};
var stateDark$1 = {
  "default": {
    borderColor: 'muted.2',
    color: 'muted.2',
    ':focus-within': /*#__PURE__*/_extends({}, focusBase$1, {
      borderColor: 'muted.2'
    }),
    ':hover': {
      borderColor: 'muted.1',
      cursor: 'text'
    },
    label: {
      color: 'muted.2'
    },
    svg: {
      color: 'muted.2'
    }
  },
  filled: {
    borderColor: 'muted.2',
    color: 'muted.2',
    backgroundColor: 'secondary.base',
    ':focus-within': /*#__PURE__*/_extends({}, focusBase$1, {
      borderColor: 'muted.2'
    }),
    ':hover': {
      borderColor: 'muted.1',
      cursor: 'text'
    },
    label: {
      color: 'muted.2',
      backgroudColor: 'secondary.base'
    },
    svg: {
      color: 'muted.2'
    }
  },
  disabled: /*#__PURE__*/_extends({}, state$1.disabled, {
    borderColor: 'muted.2'
  }),
  error: /*#__PURE__*/_extends({}, state$1.error, {
    color: 'secondary.base',
    label: {
      color: 'muted.2'
    },
    svg: {
      color: 'muted.2'
    }
  }),
  readOnly: /*#__PURE__*/_extends({}, state$1.readOnly, {
    borderColor: 'muted.2'
  })
};
var textarea = /*#__PURE__*/_extends({}, /*#__PURE__*/Object.keys(state$1).reduce(function mergeState(acc, st) {
  var _extends2;

  return _extends({}, acc, (_extends2 = {}, _extends2["" + st] = _extends({}, textAreaInputStyle, state$1[st]), _extends2[st + "-dark"] = _extends({}, textAreaInputStyle, stateDark$1[st]), _extends2));
}, {}), {
  helpMessage: /*#__PURE__*/_extends({}, helpMessage$1, {
    dark: /*#__PURE__*/_extends({}, helpMessageDark$1)
  }),
  floatingLabel: /*#__PURE__*/_extends({}, floatingLabel, {
    dark: /*#__PURE__*/_extends({}, floatingLabelDark)
  }),
  container: /*#__PURE__*/_extends({}, container$3, {
    dark: /*#__PURE__*/_extends({}, containerDark)
  })
});

var theme = {
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
      contrast: '#FFFFFF'
    },
    secondary: {
      base: '#142032',
      hover: '#000711',
      active: '#0C1522',
      washed: '#F5F9FF',
      contrast: '#FFFFFF'
    },
    success: {
      base: '#79A479',
      hover: '#719471',
      active: '#6D9C6D',
      washed: '#E6F2E6',
      contrast: '#FFFFFF'
    },
    warning: {
      base: '#FFB100',
      hover: '#E6A30A',
      active: '#EFA906',
      washed: '#FFF2D4',
      contrast: '#FFFFFF'
    },
    danger: {
      base: '#DC5A41',
      hover: '#CE4A30',
      active: '#D65138',
      washed: '#FDEFEF',
      contrast: '#FFFFFF'
    },
    bubblegum: {
      base: '#FFC4DD',
      hover: '#FCABCD',
      active: '#FEB9D6',
      washed: '#FFE0EF',
      contrast: '#FFFFFF'
    }
  },
  buttons: buttons,
  checkbox: checkbox,
  collapsible: collapsible,
  header: header$1,
  hamburgerMenu: hamburgerMenu,
  tooltip: tooltip,
  card: card,
  input: input,
  popover: popover,
  helloBar: helloBar,
  localeSwitcher: localeSwitcher,
  timeline: timeline,
  calendar: calendar,
  carousel: carousel,
  modal: modal,
  toast: toast,
  select: select,
  skeleton: skeleton,
  textarea: textarea,
  styles: {
    root: {
      fontVariationSettings: 'regular'
    }
  },
  fonts: {
    body: 'sans-serif',
    heading: 'sans-serif',
    monospace: 'monospace'
  },
  fontSizes: [12, 14, 16, 20],
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 600
  },
  fontVariationSettings: {
    hairline: "'wght' 30",
    thin: "'wght' 50",
    light: "'wght' 65",
    regular: "'wght' 92",
    medium: "'wght' 120",
    bold: "'wght' 170",
    black: "'wght' 200"
  },
  lineHeights: {
    small: 1.125,
    body: 1.25,
    highlight: 1.25,
    action: 1.5,
    subtitle: 1.5,
    headline: 1.5
  },
  space: [0, 2, 4, 8, 16, 24, 32, 64, 96, 128, 160, 256],
  borderWidths: [0, 1, 2, 4, 6],
  borderRadius: [0, 1, 2, 4, 6]
};

var VtexTrustVariableWoff = "data:font/woff;base64,d09GRgABAAAAAcFAABEAAAADz0QAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABEU0lHAAABgAAAAAgAAAAIAAAAAUdERUYAAAGIAAAIUgAADQQ6yz15R1BPUwAACdwAAB2DAABWJr0519FHU1VCAAAnYAAACFUAABNAUBReY09TLzIAAC+4AAAAVQAAAGCUJ13lU1RBVAAAMBAAAABzAAAApNOrtiBjbWFwAAAwhAAAA9gAAAUk4r41bGZ2YXIAADRcAAAAZQAAALxvSE5/Z2x5ZgAANMQAAD4HAACs7KUC9PxndmFyAAByzAABPcEAAoaoFGE5UWhlYWQAAbCQAAAAMwAAADYcwv9qaGhlYQABsMQAAAAhAAAAJArFCctobXR4AAGw6AAAAyoAAAegqPYqoWxvY2EAAbQUAAADtQAAA9JnkDwQbWF4cAABt8wAAAAgAAAAIAJfAItuYW1lAAG37AAAAl4AAATSgndcCnBvc3QAAbpMAAAG8QAADHa8lIQrAAAAAQAAAAB42mWWe5DVZRnHv7+9nL2xF2BVYmUFXZEFWTZguYSClxwLUmdMhlbJhMgmUhtnaGoqyz9oyNJwMLDAgRjLskIsgcWJuESNEioiJDf3Crt7ds/ZPbucvV/O0+d997DR9Dvz+/3e877P+1y+z/d5fq8CpWqc/nutUYpyuW9ToMXawPM5vcRzs+p4NqiT52V1IdHHLwh+EDzD80fBszxfCDbyfCPYzfPt4LhSg3NBE/oD9I7xz7X8Sz+swwxHnldf/ztzB7+rZ/5ffkTm6iuYr3R+DPAvVWncsiHrUaFCjPotpimWYD1VIbvs5wZ5T0RaNmwDGmPGKnut38+ZDSGV5le7NX5ULs9rTiCVa4PsCPFuZF7K0FirtTijPN1oB22YUZqyLcrcFIs4zd6DQGk2kFzNxC+NeI09hxO6nQVlu5u9Q7zTsdGcHOVYi3KQ6rFLmuvle7ijLnbijevapJZhZ2XUv2EfWwbrY51ddkd5F/onb7+j32ffRT6oLKeFKIfZ04OGTr+awdyAtWlKctSuycxLmWg6y7zTNNe2O4/wsciOk3tZt9XpM96CQzgYxaDfxWi91qyZo9j3jch57J1/dVjN9XMjnoaQGQZHh37VyIq/skf1pygd+xk+586/YZ9zIgeFTfq8dbAr25brq/Zvouq2h/UFrOTj127NMX95G8NEJXtTczyet9n3NMu+qxIwfksVHqeYvUt8qdiI6XqrB9kc8h/RNOtVkffnA+5G75+TH/RzLW4nPtZqnJ3TPSPue5yHiCrDmvAijkeTwbMMjnajNa5i/LtIPsJaZF3oLWZ1Jlk8q2uJ6Bb87QHRiPKI6O/gFtMsbDSjuV6zecZZicLiNOuEpS34mu7t4pO18YvClVIymtxhrehtJJv5aEmwq0EL4Wq3qxyL2Cn7rR5gb75jGO9Mn9cuaqjR7bWPNAkNU6ydfF7P+kRfQ2l2irmYfazpZOZWVs9g042GvPdRfOy3Q8RWS/S7nF3NU0WiL8hMxIOQ4tTA13U3PsBb60M2rKW2336uaeC9xE7aL7WAPbNsk92lezVTFX6ugrnZVm1PaRm5DCURd5V85Sr0MQ6CZJn90w6DWI6dRyLkK6iQtSGwb6NbpCPVh8/FbsR6HB6+l4h4Xi21PyTe0CPMrbMPEzHmmmlSgZVrNdZd9ir1FXKelfQgTFVkglAeoyIL20+1zOrI6dvkv0c3U0mdIBz3dXge7s7G97HEu1yfRcciq7EtxOWY02pP6HNk74J9ZAfJfJrttib7Nf0hUBa212o+jCi0hisj3Ud+h2DQ+3bGNmst3l9HjGH0R+hdYTcmH4/j30HYFcarDhXg6WX7F9a2aCF+j0PfDjLYorvI6ota6qt6mMwXcJcQRRfyXSqjOguIIxMW5dovtNguaD5+HdZUMtqHf0/ofvhRgPQz6IrrU0T8RX3JOmDmP2yl7iDKW+1c4rieBtMb0Xy7KrEZJuKNrPbbATi5SqtBKMTsfWQhCnZ/S/xR36ETZdm2xFN8zfKorSOJ3cylUOYn7K9o6SOCGntN5Yymg8eP9X1GrpPvIMo4bIrYt2F7B10hSo5cVibg9WPku52ZOvhXjvfl9hu6RYPjBrM/0wJyWODz7DsAchvZO0B3aLafkOlO0DxpT+OBq7xL7Fju5/bbBO2Fa5OJfpW+iY0GeutbehCb++xD/Fvne/0n9jw2+vGv3eZqBR2jCAZk60nwjLFnpR7C0lG8/6F+xbdiKnLP6x68uRm51SDUAG4NtgfEo8R9ySOZAJkm20C8/T57X9bXyP27yD1O5cV9bFvR0q7x9pqt9915BVnaQURt9NWL9pxWgW09fT2ia0A+kmR7u6YnR726hg6RrhLWxyC3lzq9QJ/NobYG7ROVjlQIbJnu66McjwaI6mG9jvX38OdlsG9izeVoCf16DJFuxb8ez/b1qmStDka8qkX05xLfmdrgxkL2btM8u6hJoL3N1jM6YVXgXAmSE8lEGr9crJ22u6naWuycsdepmQTxHqBSFqOlFLReooJgOXEeoqdF+T70s3o7tTDJj5Yxyten0ZNuVcEMduyjalM0g75xkbva9/Z2dLSRmUvMdDJaw/Ms/40qar6CEN01YOZjz4AWsGvXTdjo8B39JuJ8B07F6TRrGB2xb9nvOMlxmrNX+A14TrUh0UDuGvy3IEydX2cnOJGF2FFCFENkoRXNHcg00v+Lyc9jnp2rYHYpX8oq11/Qctx26lF3VrI99JJKzo9lthe5B+F6GSzZ4jmZx+lnM1+MDDozvvtvfqodoRNux85E+Pys7iffjeTzT9RzMwjXkZk59FSH81Y6Vxbd6ZBVwN2obgDnZdqHp/tB6BU6a4Qshelw5cRXzOhV6qCTWFwPz/bx9uJzKf8mwM6dWgKvY9Ziu5jr4r7sR1G45vyTO2+g5WXYxOkEnEEDDrUmV9uQrbY/Uzl9uhONlbDnrB6hh1aSbzdy1x7fi1vsGBF14k+HnUTW9T+Nnuvy7ACxnqRXTrXzxPUX2Fht7xNDt+6Fa1X0/YB62AQaBbqFXvSmPem/W9+AQzvh83jQr2dHPn38UVsHUzr0gDZQrbs0g8xyc1ZZwOrCK194mJRCR6W6wLzG1oB9APP6YVMBHseSq9303dP4eAM2XC9+kTiqqYIImpd4rtWD0HJkBzgJHAWT85ydWu33WOPESAY3oTmXt/NgEXrnOc1gOIgHIavBmwh1ngE6k+BzEbmOwcQazghxvhy9YFKN3DEsHdVDrL4DI06Rtx6iPI3sSnjmvlvTwKIeJoTRfqc/+2TTQVYwU8vZNB3vtuPdMey/QLwDMK7TjuH1B3wv+XqToxg2mjX+P68CK38AAHja1VwNfFTVlT93JplMZiYzk8lMPiBgQMQBhQJFTC1NEVFj5EuKSi1lkSKlQFlEpCy1llKWpWotq9SlFClbKSqLLLpULdooSJEapCxbaLSsUKqpurGmYlPLim//5//e3EwggfDVdvN+9+Z/v84999xzz7n3vpeIEZGQ7DArxDfsquFjJTrj5jkzpavkIF8cR/wsT8pACV5+05UVMuSKy8dWyPArxiAed+3lN1XI5BGjhlfIrDGjRlTIHWO1dMnYMddWyDKvvZGwpDzsk4gUe9gvBVLi4RyJSqmHcyUmZR4OSFw6eThPCqWzh4OSkHIP50uRdJGu02+ZPVOePL34yzfPni61pxlP//J0een0YsjWh6BzkAOkcshlXgCjxRiDSwYM/PihgfGRTaM2jq5CfpCSmpszMmcmWhXLMNQOSE/pK4OBh8tE5AbM+eYCc6HpbS41V4gxl+pM8ncS7fGzwE0VBnvqb2d//zniM12cPf0TpgK0osoN61zhNCo3vqe1H1+Dfxg0oZB68Vb/qVrmNPWfJGfhx2no1+y803+YBPonzwY9OQ0qHOs5+FFZdbju3v43nFFfe/o18/d9CJv6T3IOt/TtNCD9TP9hyFvrvNvvdaaPYh4P97/h2Hl0vndmfJDGa/49Z9R+/8l1y6ltuw50eRJWS54ZbC6HIl+BdRAwI8wI5IwyoyRorjPXSb75rBkvIXOzmQad90kMtT+FelXm09D9IWYI8OVo72d7t7YPtSch/wvmC6A12UwGrVvMLcBTzBTgL5ovSo6ZaqZKrvmS+RLwNFDPBfUS+QhPnsk1uRIxARNAWZ7JA62wCaPviImgTYEpkAITNVGJkhsfuYmTGx/58JuRZiR6Gm1GIx5jxiBWzvLJmY88hclNmNyEyI0hNyFyo9YmgvXt67JK13WfTbC8hnZIPEvRG2nk+N7Ucn/IPwnyKaBcm/sMdI70GXdK87i3zwSnts80Z0efcc4hpA/0mXBa+nC4zywNJ7clfaa11fa0+jzFsdp27YzROXp6fJyqnTttvg+f3ty0+1OY4wPNDa3t4anLwGk6fk47MHcda+PDuuOiMH6D3QpWaAzrqI/pg5V4Kfyk2oYoa+SxRi7XsJ+r12eCJoh6+SYfKzBkQliNup4jXM+G6znA9Rw2MdDNId0c0g2BbidQT8Cnd5MeiD8tVyK+Wq5BPBxPjiyU+1Hr+/IQbMgG2YT4x/IMcn4qzyHeiscnL8h25P8Zj8tZgJwFyVMee42YIlMEDrTviOlv+gMrB/m0Mf4si+e3NnESd35G7QR2DQFweWdRRdnIsrW9dOfRnTuPiFTJ5DYfH3gfiEc3GwtQ/26O4zk8YdC60TnSS2Qc488yvonx5xjf4hztpRbpTWdv+qD4You0r9gT8WmwoRe5Wpp+m+FI+nXnLQ/rbqQh/br8jf04Bzz+lM8tCE/1SjtbEivJ77b0BlrELel6CaQ3sw78t/NUuh5j2+M0YXwN+N3o7k4YDqD9q4ne54TX5padEPvdj3AAvDSeyEun5x2/8tJ7WqwxaGBcrvXD+HRMZ2OnBXmdukU4uX7oXLU1jjOSa1Pb/ercn4hP56PEUPBT78lxXoaO5qmu2zKVqYZ30ttZdgbydT5IP99ad3ulM3N3sp3zidZfRpbUgbMk13O1k8/oq10LzWeBp3qs9cZEP6c53dob7k0M6jCNPyYGt27rzk1Gvk4j+jiclaf2ZjPyTlHemXnk2DdBr9Z6NukthAe8sgda5pp6+lD7+uHZidezdyvUU09/md6ZqAaN+jOXdGLkidaW7TtLR5w3EmOPq7Mli7c3Eje1SWcHZP490FrS0d2Vq/sM0APnaGIiQ1P785Ntj9r9KSjddro28ST2co+14YcSUxAeOKEveAX2p6G1z8i2ufRtB7J8QWMrnWvxGVq2V32l5zs920N71IYNb+VvmrL8TdMJ7FHTiW0Vwyn6gg7N1Ul870ntaPaa8Xg8lrezYa8y89mWnjlPJWbw93eyeFF9fj8xW/yJVvsBtRv8/Zj3+xfQkUze3sSdzmY9rXs25TeJRc6G9Epde04txvZoeopza9s2wfkZ6OyAbXrmGB5PIK9267zj0rB6483/MXmvn8y+0d7qnrS5A3vCppY+bH6d19em1vunNmls8erWtfBn8zBiZxfmI8uucD3V2zl5G3br7bZog149w6GT9F/f2o+djl1pZWOy/Zby2pie0cq2deimwZXrcfmPeXLZmbirPbnavdRTXl3dp/8a+qdzVZtlB2vpZ2dYnd+cNQc/SCx15qgPRpu61rbA2aW3VWi7xdqy+rbWOsZw2j5Q15HdIza21m3i7aW1mbV3SnRh99vpb0+2zFqtt8L0D9vU7TrPB6oPxjnI6qvK+VC2frnyJVYZ39n2vo5yzdbXxvZlc+wazDpLPNBaF1p0McvXv56RJ3lra+2o3VqHffq8UzuHUl8OefrVRt/H2ZnG9tce92xHO+6HOnRm9kkewiVAl8pgnOqr5Eq5TK6WGhkqw+V6uUpulNtltPwJz9+jZleEME7wETw5UoDHx3sOvxRJMUpK5DzkV+BJ8eYjVy6Qvqj1MTwB6Sf90d8A9BdEf5cirkSvBei1CrHekYTRdzXia3hTUoMnn/clxTICXITkOvAUAU+fQ6/jZbLE5BY8SZki0yQu0/EUygyZBY5ulTngSfnWG9Aa3ntGyH0Jue9O7gvIvUHNIuAUHn1zVYFYuTdZ3FeA+0HAlZZXw/scA9rXIke5NOSygFz6srj0k8sAucwhlzFymUsu45Dw7XK+zJUF0km+gaeUt0N5sgxPoXxXloPH78kK5Ot9UZmskR9JuayV9cjRu6My3h3l8e4oT57H00O24CnlPVIe75HK5EWpg6Relv/EKPfIq9JZfi0HIdnf4Okih6QB+HfytvSW/8FTLI3ye0ilSf6Avt6Tw+BEpVnC+6gy3nNfwJuoC3kj1pM3Tt1445TmjVM3c425RsK8d+pqJpiJch5vn7rxJjvEm+wQb7LzeZPdizfZ+bzJ7mWmmxkSNPPMPMyVSHyBamsR4yTjFONCxsWMSxiXMi5j3IlxOeOujM9jXMG4G+PujC9g3JNxF8ZRvR/LWao3VDnbctPgotS1BMWLnXo5pz+0Qm8VVzuvFPeQoYH4Ob/J+hn6OZf016X2OXsxHg1q8f8rUEwZdkq9z7EeLh7k7Ckeetr0t6C90mlMveTUoY9nins4zcWR09/FFPdrtWvfHijX+cj05VrX1L7Tot3G6dV5iLJZ7Hpc7/euM+B/vytLyMLl9dHUNtCtloJAd+cx2091iwcs7teySwEv2l7r1rbkt7yXKx7qHIC8t50l3ThcPKj1jg79d5A2eW088Q0R19Ax8nfqAum2+u7YDVKL3Fo87Ql0t0dx6VmR0y566yCs7BARM8wMk1za1/bffk6ABY2KMYPhvfLo59Xbuz9hSziUeTeYFbJ//N6j3zHok8fvF/IZcuHTNPikp7cvUG9aSN9ZSK/pp6cspKcspI8spHcsoXcM0Dsm6B3D9I559I5Besd8escQvWOc3rHYe2uifjGHfrGIHjFFj+i+R0m18x4lRf8Xof8roOeL0vPF6Pmi9HlRertcerscacaT9HYQ6vNSkEEv+obejC9k3JnxRXybklZvEa/CTsFgbNSWeCenOfaa0xD3MRyOB7kfMfBrPkpOpaay8FEKuZSCn+PPyexeIgeVbkFFQT346eXucWMbnb2xrdwjN8Selb/RH+dwbKNrkWLPKp/geyux8v9GrKrl/UdsmNZ1dsTWOXsQHkO9vUgrbojV2PcXR5HfnHmPATp1sSfRZrTzVGyrWyN2wzkbi/JzBH2qpzlCvtaRj/qWcR7X5mhsfItVbpmnbHxGPJ0hHfC9leN4KyO/M3kX8rerh6f+E5vketDj5cI5b2O+mX8otvj4O6jYKuoLfnfsHUes9VdFnWL3ObWubDHf6zq2gznFuQjE7uPveGwm+3s6Nsd6hja9IPSmvflOxub/RWxLxtPHPd5P9pP8K6pTe19z/C62QHXjr2qj61t0tk29bse2ndU5PFm992P3nIt78L+onN+C/zh2d7rp1G3mcfOha7eDut2WDXI+iC0/mVzbs11t2cf27JHns9d15ET0l/Yz5E/3Uf7Ymv+vHuuU5aj7p2P8vu6/TkOvt57qeu6obeH+7izsTY7zXUc7ThN70GfP5h7s2Hk61Xk7B3Zp61+VAR92GnNFfdC38BTK3bICZ8I18rB0l3V4espjONFdiBPdFhmEs9zL8kn5hbwjV8m7OK3dwlvpufJ1nJr0i7Rc3qAanBQX4wSlX6fl8rwY4Hkxj/eoPp4Xg7IWfeSD+mM4henZ0cezo0FPtYj1m7ZceR69Gp4gIzxBFshOPEXg4mWcF3+B02SUt6kxninjPFMW8kwZ521qgifLuDSC4xA4fhd96SkziN4+yfOfe6sd5ikwwhNxAc+CCZ4Fo1n3xXGeiAt5Is7lidifdSIu4giTPBGnOcILOLYUx5ZudS7WO+LirNNxmmMr4em4lCMp40g6cSRlHEkOR1LGe+ELOZIUR3IBz8vuXXuIJ+U0b4c782vFLvx2sivviMt5R5yX9VViHr98Ps9cba6WHrzPyOdX0AF+BR3gV9AB3meczxvknrxBzuNX2kHeI3fjV9pB3iZ34z1yBW+QK3iD3F3vOnhC78H4YsZ+xn0Zf4xxP8b9GQcZn884zXgA4wLGH2ccY5xgnMd4IGMf43zGfRgHGOfyfqCU31Z2BVfeV9lOnVTyzcQfmfaJnxJyZWM4Vv4VzwLhX+0YCfItRhrzPlg267eY5ifmpyh4zrwouebnpk6i5hXTAB1BXfM183WzwHzb3Gu+YzaYf5fzxHSdj7AI4V6EVQgbEGq9sANhD8J+hAaEJpEuOIt0mSc+350IyxDWIf+ImPNyEKIIXRH6IlQhVCOMQRiPMAVhFuo/j7APeL4Ey1eXw7tE7oks9Fb+AKmWMdD4GdBlwXpd6uWvliehk/sgjTJTA53SG/BKyvETiP2mlFIk8j3CvQ+QGeudWC5jnZe9XTcQ6rgln2RJiS0p8T3qlQzWEvmtecHr7VPsrYq5Pza9pTfrDXHTvg1YF5q+3Ctv9Fp9mq2GZs9W51cxX6ZzI98yGfkAIQc919ibt8nHzG05VnaV/k2A+DC3dSjQ+SzSb5kR9CuxKvknWI5vYd3/I1b8QUjtEFbhfukmvvKVCGsRNiJA8uW7QXsxfh/0wtsI7yN8JL4usEBdEiKd70JYgb6XYiyrEZ5E2ImycoSeCP0QwE+X0QgTEaYhzEGARnRZgnAf6h9C+AB4pfidEeYd6EwF0IuZURpda37nRt9VnqTGUFKfYe4XzENe7ljmXq+5H7n2UnNvYO6NzD3AWdbcicy9mblLzNhoOVKN+Q/kr82ndhFdZlGNRWMtmmDRVIvmWdRC5R6LniTanr8vv4EH8yoE3gaHeiNUZFB+s83jLWAonl0aIlch8BGaEJp5HKo5Jm9fqCHk0lO0yKJlFq2y6BGLnrDoWYt2WkR6YfAW5rulMMYRHmgROQ33bpXHL+/CkFh4anh2K/RS+JdhvmcmWmjRfRattGitRRstet4il8r7CB8pikQRuhOVWjQcYXxkRmQh0QCL3LyhrUqPReAoQl4iryLstmi9RZRVZHurUnJVMKXgzYKh0WC0VFHk/QwqyLEoalGpRWmLKi1yqQwHusHmzSKaX3BXwQr2BitZsIloG8IuotdQ7wOtF60UifKWkyhtEd9BRIfbUtjU6BqLpljkvt68y5ausAh9RmuJ0Gf0w1jgOFRPdMjmvZdBsTmxRbFp+L2GqNyiiy0aZNEQi0ZbNNGiFirLiMBVjFzFPkTYZVG9RW9a9F4Gxfn2LA4+4j2JJiMMsmiIRaMtusmiOURYTfFF8a0euteiVRY9QbQHYT9fRlcXjiscmEHxRos+tKUBi+IWdbKo9/FUCqssopUqhIUq5CorhD4XUp8LDyLss2i9RdTnwu2tSpu4cdEQT1Qk+rWJ7kusTJAK0RCLRlt0k0WTLZpp0TyLlljk0sOKSjxr0XaLdlvE71sSR0SKcoqS2ahodtEdRbTFRL0tGmjRMItGWtTSYpxFU1uXloHfspkWkeciSLaI9r5orUWw+kVNRUeSIaKdFrl5+1uVEiUxt8keyb7JYUlY9CQ9ThLjT95n0UyL7iRaYkvBQXK9LaWsUpNSM1LjUotTKxUl91nUYFGTRUeIQqlkqkeqb6qKbUdmSluoZKE7iNBniuNNoc8UZyYFzUlxZlKYj2L+Bbm+V3XfhRIlLepLVGlLMcLiRywaZxG1pHiJLV1uEVZ7Mdd5MaxvSbKka0nfNtHvLfoog0pWlqwtgfxKthMNs2isRRMsmmrRPIuWWNRC5UkirKGSg8pVaT+gpgxyX+8SxS2qsOgqIljb0vEWTbForkULLKIPKMX4S9eVHvLQJou2WVRP9AE0lmeJMniCssqy6rIJRKUWVR6D2tB27Ejn+MdJKAUrLFO5Sx7kHyNzU/d4aIa4eTUyKdmEvd4R5IVSOpczvNqDpTq1WhF221Ve7bkyEBSB7G73Fq3tG2DTU7zWI0ANnku+yPJ6W36rpv3rbHo2yw/aHf1tbP+08p5UHzaH6fngriq5GWjeR4ew/VIdvt0tQcse5O4fLM1BXpvrQUOtyqVMTwONrsm5iux5YZrtdx53/t+1u9F/4PTNZ8tvkptipO9k+kqVX/JiD00SN69GxsGyKLpeRhY9AZSvMk3q2vq6126wDEwOB/qU5fWrHH/Mpu9wa1q+vsZ0Z8txZ1uygCWz0UclrBmQkyNdsecCsjKZbel+w6sNmRTpSBYyPdmeuybbc9dke+5aRJnU6eiLdFH8E9Pf9usJz0U1MibxBNH1Up2oBbpOx1ykElzi1R4sfWGpgfTMznbft1wtduvYMf0juYrb0cZtybdYconl9xKMNol9L5CtcxepbVV+E+oRlrJNmjV3KrL93s2ai2zLe5i+19zvzf63Ofv3sn1PW+s7TD9ouXvQlvwzSx7Vngthw+R+pqdDFgMSejqcDh7SoWpFaOOOYLqlM11XS0Jz72O7jaSje+sHMnNsou58+mtMTuEQbw2HCtW6/gvrPMI2Ot/LvTaD5VXsD1xt2M3Wt9seb7ecf29BRk/Wez2MkB9iJ+L3F1tpreCafdOmv890V0tjJWmcb6mfb0seZEl3W9LdlqxiyS0ZnTA/ttSXuSW25g9cDq1WTuKK2WnLv8vyO3T8cR3HvzKtFitNylW67uN3KlJNCG5VZFuvZu2vsLXuOx5i+hN6P8HWn0DrvnGVeKVanojuxNe4dUhtjiJL7YcsmWjHO9GW/IglF+ttAksu1nWLfa7fXKR0eUJ6xK2j6zhYrsiuyYutXVpLzXyYNb+vXMd0l/EY058HzdniohqZGisF6qZ6wsutDaxzP9vo6fnfvTaDpSr2tCL0NtBtbefiUavxbnqd12YuaKiv+DfOxQ/sKNezfKgd/1BbspEl7yBNufouUj6iek/9hFuisyQuqpFkdLwi2+/jrPO4jkXPNPIfTI+x/Yyx/Wxy7USmH3Mb+9Hd7ZNuie3nEu2n4H3Pqritf0w78Gf2o97rKbapttQWk5qeRDa7JUot2h3oMqvJ1WpjC/S8/hPWucxq7tNMr7Zcr7ZcP8OSa30/hYbpWn3OXTe+zTK3wEWPy4zIPqKHZVJklnLJ2vrl/jav9lKpLogqguSqwrOYVycDI78EutCO8VnW3mLTP/VabwU1PbvXMl1nuawDtVBY1/AOa4OTngQjHo2fs2QUOVIt3elZzs1SFdG10011PF/PRS+7JaDZI7TLsw0ujZdarC3vFeqYbtlZ/MJNW5ntZnqHb4iEjPrY/6QutnjO/2L55cpT+A6k97k3jeBpSng90eMyPryQ6GEZEy73bh+rw3ob+y7b6fnjV167pdI3vNG7q3RnepLlba9bRyWVj/2b/JLpIqQr83WNF6HXvuFBRH/CyHVfVeT08FrXu7WV85Ba4VeYLrZyLrZy/rXnt4Z41mA/rcEe5n4Vvc3Inw+0RnkP6T7wgFuCkY4JLSd6GOODV5AbWUf9/2+8OhhfaLci66fvsuN7zaujHGrOfzN9OMOhHIbNCvnV577ulpBj5fANctjA3Md19YT0HPA207epV/QPUJTx63JbxubJbWYxaOgM/I61X7Qz+xbTy22b5bbNcrbRfv+H/b7Jmo22ZSMlu8ZKdo3OWFB39O+4lkulkq9nzXeZLsO8jclX31EGXqt9i3mDjdUVTAC9YGewibVfUGp5Ov9/cFvbfsp0deWrvvyeJZ/VfoJ659jMdD/M0LpgM9HDsjq4VP9nBeuohfwT6+j/U+h7jN792S1Bv8m8Bayjb2x0Hj7gahhFjvR0csTrZ6kMDb6tSHUzT/ei/SzdL1q6h73aW+Hh1rPOnzy5vke5vk/qY0ld/0/VH1n/DTveN7QkoDuh/3Up2ZJ+LPkl8IdtluhfxR5lSW9b0pslajc/YklQJZP3iP77G1ePrCYcwHz1yNvl6VZI9JbEYZ0DpDFer+VJo5ev1h2R0Tc5YgLM5Xsf9im+Z+QylYbJY3tHLVgOfJ4JujVJH6c943PT5vcePb6LMjnMvdXel+e7aePdgZsQa4VJ+1d2xe3TXvzvoaTQLWEvWj9CuX/TXUc637l6u/+4zouBNE0BSz70NXv16fJNnL1WqrwCOBuaFNMx9SaBJUTwJgH4L2lgHZypTTHrBCDJUGAR0iVem6VSGVD7F0PvfXNV/2PWEq634yzyatd50k5QU0I67pzXkE6yPN/ObT5LtqGklCW3m3elhnLvzPQq33NIYddlyt1y33+4725MVy/9qPvuxpy3ILPHdSXAvxgxnZg7nFQ0l38pYrowN6JrIKea+wWMPld76e6WQEJdc6cQPQxZM8+OsZv7bolt4L/M+WyTA2pD/UeA+rAE68Jc4JZAluncSkX2/JKjNiunlnne2jJ8o2miC47Zq0Mibjn/msVcyN5/rrY0dyHSfZi+33KXZvrujM0zvZheaFZ4VPits7nIm6dMrYuthe+Ro/7vq9a2HbLeJeTXdzK/Pe7dpQ/2Y/lx7y5fMb+VqGkw+rYZy8PcgXkyZifCPoSDCE1YPLqA4l5Aua8HQl+ESgTdR6o9eAl4OMINCBMRZnHRGWik8a1AWIOwAeFphK0IO/m1dhzju8pK8SrrAy5ZIPyWO8N/EnFXqdY3uGY7ODeojd/mV3yDq206id9ZzbebmhrNd1yjra28jvIJgkZa62VWrIyinD/G2qOwrpNKR5bpCuc8uG+o5x7DTVr//sw820qaP/OkGaE0S/hfkLLLdkKiEdYoYY3uvMJSL6G3PO6bWJwl9fTghY2eZPXvMtQf6/2MfrWiN9zNag3VDqjGKZ8Il+lfKCDAMxq1gZP03R928xtMCGiVecc0Gh3neto3fRt1Fcf9GabVz13NdCem1SpXM30NaERlu8oT6E15Fmg+UCd5AuhaoJ7yiNsXdhSrgB5EXzfJMr57fMRHv+Xg/OG7jOgxO8ufJf0rbPompv02/Tmma9ByuGTQGKLRQBOI5gNNI6oAmivi9bqQaBa4u5fUhoHW+d6b7ykyS+bLIrkXK+KHOFM/KTtlv7xnfNgdpk2lqTbjzEyzyCwz68zzZrc5aJp9AV+5b4Cv2jfBN4c9PGxuQHvIFdwukxVA34RF0XfofucOIP07Qb9TCKvyhL6nda6BtdohTxNtllrMqI5is1mO+dVR1GEF7VZ5YnXsAzfax1LomLZ90Jfx7COpj69Sm9fB6u3h2F5g+mbKTWtdyVq7vH0o7JxUQB/6M/01plW33e8rnvdud+BJRDXo40w/BW7dt+1bvbSW69ngGqY3Iv0ay7cwvVh9Cfu+llS3M3e37qiYO5y5LzL3UdiE19n2Z+77aX/ma4MrWGs6c3+gJzTmjmPuV5h7q5766GkGMv0NtbAc3SVMf4JpHd0gtvqSq0FspT/js9JK+/Os9WXXWtjcGuZOY+58PUczdwJz/565FXobxNy/Y+4sbySDvdwRzJ3J3FmYJzf3C8w9uED+D1KofRUAeNqdWH1wVFcV/523L283myUESAqEEJYkhBBCgFBISmuBECLho9BtyndDQiAtEkLMl6CItsYvQESkWKEq1lBDhI7DYFvRflhRByGd2uk4tUWEanXGQUUs6FhK/N2zj90NWfvH5sz9vbvnnnPvffece855gUCQKn91DgND34JVUbmoGqmNdW1NmAkb/OvrwxA+/EhHNgpQglmowgN4CA/j4/gUPo+v4pv4Hu6Eb86qeUGsmTunOojOuSHiMwvnrArit4uXLAriZmjJ4qAUVHNUllaHFgZlqzu3IAUZGIMJmIbZWIBq1OARtGA7voC9OIguV85CAHcgiEKuNQcL8SDWYiNa8Wl8EV/DIRxRuaHwYBCGYywmYjruQTkWYRlq8TG0YQe+hH14Ek+7M9pIxQjkoAgzMBeLsRx12IR2fAZfxtfxLXzflUvCYIxELiahFBW4DyuwDo3owGexE/vxbXS7KztIQybyUIwyfATzsAQrUY/N+AQexS48ju/gqDujl20UxmEy7kIllmIV1qMJW/EYduMADqPHlfNx1izkYwqt8VHcj9XYgC3Yhs/hK/gGvosfuCsnYxhGYzym4m7ci/kIYQ0a0IxPohN78ASewjEcr6trbLPTEsP6utYN9ogEsX5zs52dGK5v2rLZzk8MG1rq6u2ixLBx48N19tIEcUt9o71KsVaxoal9c4vdmBhuaVnfZLckhs2cwt6aGLZ0tDTZOxLDVuMznQnixqYGe2eC2Dplqr03YSyxDyaI7eta7a5EsbnV7kkM24ylfpgYMqZbbKJtjP6yGDvNr1HENEb8FEbcQYyRg/lrCKPMMOaADMbg4YyaIynjYTQey/hpdBzFJEVbMVMxS3G0Yr5irqKPGsJYaTZgeuPYC+/Fq5ismM0IWSs5lmXtti5a73lSPSFSrWe/56KT7ZQ51U6Ls8856bzp3PTme5d6t3t7vBd9ft8MX4Uv5Nvr6/a9nBxK7kl+3V9CWuHv8O/0v5nipMxMaUrZGwgE8t339/Hda1Ak23CN8f86c8tq9g7jCv6Jy/gb/o5/kHsWv5GFskhK5QGplgdlmSyXFVIja6VWnpPn5Xfylrwt5+X3ckH+IBflkrwjf5Q/ybtcoYjNYl6Yxfy2irnjEPPaEWaOoyYy40f4NV6TcqmQKlks98kSWSr3S0hWympZIz1yXH4sp+Qn8lN5QV6Sl+Vn8or8XE7LGTnr2szH9irtU8xMUcn4X8OM18F8socZ9Gnmk2dwAs/iFF7EK/glV0uSwTJJcmWkJLGfJsWSJ5nisD9EJss4GSVe9ofKFMmXLPGxP0ymyngZLcnsp0uJFEi2+NnPkGkyQcZICvt3yJ1SKEEJsD9cpstEGSuD2B8hM6RIciSVu3yf7QbbB2w32frU8EIQsdg8bDbPipKUh3qWydRB5vFH3Lc1ditT2413OenUyEK+yzNnbU7YzPcrnpF6N8/wBYq+JL+gn3IV5nDTEJlH6ONC69ziWErt7P8b/2H94Og8fq4TXrNYPbi/dlaMttAj3lUdO7L2aZ7GGTmDFDnLfQUi/mduUBJMNXaoH0/0PhmfoYdEdpCnO7DU3ubdjUaByna7I5nKzYyOyDwdL4nOnlThaob9P4t7mkQ/mEybT6V9p9GW02m35/UU3qdNQD88ztXtyP5mcrUAI0AxJRzWkWXwSBU+kLv02Wf2LjNj+nebvrEw9W7gpoStm8H6JsTz3Y+TeB1XJEDfKqfft8lueYr36hzv0lXLttIt894p9p6BZHE3bNCoZLzpz5RrHEjkGwm/veB2omWELTpDF6UKbydyzXiy7e9P0kmNzhjtBiR7Lvcn8syoz/NqLMl8Ss+P0SyixIlYIseMeT0HoiRplEyLajE6eT3bo8TfZsTxrLtFOE+p8zEapzm64BbhtPKTPCVhYlQStqj0AY5lhYl9w7U9jiFWwcIWlWyEbV01pHfLA491wbrAmlnYolKV5J+zzvFpOJZ1ilW9sEUl8sjtMRnC3C3rYNjP9Ql+KxiPrnKzji+sYW0l76Q73n+khrf/shyMO1ZOn3yNtCPuaB699oRSbdxxm/d5n0uz40nIO3CkOULZcWVehJd5JUL4b1ypJ+BjNI4hvBFXrpnZ8+ZtdCyuZCVv8xsD6LG4spmsB7rj0LJ40syaAX59xKOCGAuWxmiF4+ezbvws1Ig9UlhdMN+Wcp+xkrvdqJfpyoqSibi5eluiEbTWXS/8K8SKIjaGCr8PzbphjYk6h8W8aUYKBozMYp6Ojc1+N0vZ/VZ0+q7rTpI0e0Xj6wLkkOeIV3ySLH5JYZwbJKlaUQysJ/5/LWH2Ho7G5VIOP2uGCkbuxRJCgPXCSgw1NQOGacbJ0IyTqRknqBlnLPft0zkK9S3TeVsr+f17r95Erd7kHsboBXJULWlb+az4st3aDW4dsxy9+hzO71rz3IRLzAo+9wQy3Td26ANXNRP/i9itNtqv65usUcizv2X1Ee7sk1TmccUu15MKXZlbo9dcflgvyr+heD3mxNOYUd3qTZ7T6tStt6QnRirA+dq10jNZqUzrslhrHlRP/UuMRh4r4idx5EPrvcGm/viQqi2aQ7PVGuma52fQ5+dp75jbs5ixu2/L0rms1cbx/o9nnpzAemsia6vSmCxdxcjov01nG+9SJqu6LFZw2azWgqzMclRHVNJoSoxOKvdwjad5TU/UVu/voP9HrWy8f6hawcIGvN3vfxXh/5K8R+nl9JFNkd4lt7crwtvl8nojcr0Rud6IXK/Kibu2pWtfEUfX7lLLR29lg9rrUeWFvcrkyXDcNRpI750d5vvxELGctbLBtYq1inWK6xTrFdcrblBsUNQK8H9jYHA0AAAAeNpjYGESYJzAwMrAwdTFFMHAwOANoRnjGIwY1YF8oBQELGRgeO/AoBAN5TIE5CSWMhxgUPjNxDzj3ykGBuYZjGYKDAyTQXKMb5lWACkFBl4AaokO8QAAAHjaPcw9DoJAGIThd3ZR1p/CwtJYUxMOoL2Fpa0JiZgQGjfBM3kSjuUHxTdTzFMNQiQK4GgLjdL46rICjG3uFNGnH7IKwjs/e+2JHDhR0XDhxoPWHixacZ5n8ZraXXJ1J+7uDV/3lp97x7Q4EqyWP/qcDEwAeNp9lGdwVVUUhb91bgIISBcx4PPwkICAIbQkRALSA0rHUUB6FRBCbwoJTXpJIk1ASgYMJYIUA4SOoEgVCFEk70Ws+EsY/eMk8RBlJjM63jN77zv7nrnnm9lrHcAAnosqLquohoRWcDWZREpQiYY0Z7ZKqrKqq5bqqL4aKVrx6qJ+Gqkxmq1k/Wqqm2hzwdz1QrxSXlmvklfXa+bFeKleupflnSrXyrfAt9n30JaxVWyY9Vm/DbeRtomNte3sQJtgZ9jFdqtNs3vtfnvQHrUna/pr9vcbf3l/JX+Y3+ev74/3D/IPr33xT1NY6NgskcSyRaVVVT6Fq54iFKXm6qzuGqDRGueY7ptqjum8yfHwSnilHVO4Y4ouxpTomB5YbGVbzdaw1jE1tI1t83+YJtvEIqb0IqbMYkwVizENc0wqYvqS/30KHzzKBeMKyzzuFBwo2FKQWpCSPzS/W35cfuzDOMjLfPQlL/7vHXlhLubkRQYf5pULHndrZTA3eA+COcHrLp8ILg/kBrYHkiGwOJAUmBLoFWgGd3JDf3OTdF0yFGVCTFVjTT3TwESYpibK9DZ9TYKZa+a70W8zaY/OMTvMPpNpsv5NbTJcHDaOylwy18xNV7P/Y9f5onyxWOdcsffH/5VaO73EK0k7tEtjnYK6qqNWKU591EKd1FKttFapWqO2Sne6fJJyVOZpN+2a1KaOU2IkjYlxemxFZ16lCz14nTcZzgjGMJYJ6uEU0FOb1V9XmEoSc3mPpaTyPuv5gDR28BEZfMwhTnGGs1zgMl9xh2/J4zt+UjcdcAraqOlq43S9TIlaqYPao0vay+9O7ZvUVxnK1j5tUENF6qrStFvtdVsR/KFRToExilU7SjovhVLG+ac0ZanIs1QjjOo0oC4vUM95rCVteZnWxNNGyXRkEP0ZwEDe5hUuMYtpzGAOM5ntXLiA1SxjBSvZyiY28yGLOMgRDvMpJ8hUCsfJ5gY3ucU9TvMDpXiHEKbzBO9SnnnOxQupwHyeYjFVWYLPqaMGq3iOFJ5hOX7W8DzrqMVawtnAi2wjgu3UZyON2EkT0mnGbpqyiyj2EM1e5799tOATXmI/cRygPcdox1E6cZKunKM75+nGZ/Tkc3pzkV58QV+u0YervMEVhpDDML5hMLcZyteMIpdxfM94JvIzk7nPJH6hA1m85rzVj+u6ocu6qRzd0jUdU5ZO6qzO6bSO6ojO6LhOMZogI7nLWwRI4EcluJtggsZrpiZpmiZqqmZosmZpuEZosIZqmIbokA6rg6Zop1ZoqeZqnhZquZZokbZptdZr3V/wNDI4eNpjYGRgYBBgYGJgZhBhYGcQKE/PKGGQA4oFAPEJIGZgZCpPKclg4AcyjaCYgZG5OCevhAEFMLIwsgIpkF59qAgbVD2Mzw4kHJH4HFB7YHxOIFGBxOcCEquQ+NxQN0H5AAr9C3wAAAB42u19CXgb1bWw7owt2bJjW5Zl2fIqy1psy1osSyNrlyzJtrzJ8hIlcRbbWUliskBCQghLApStDUvZoWnLktI2j0JLW0JpS9sALf+jfZSutAW6vL5SoC1bofHov/fOjDTavLTwvf/7/ho0djT3nnPuueece865m0AsWJ9oBXeSpQJSIBKUCOSCBoFW0CEwC9yCfoEASJQSqUpm0cpUVgr+tlrgH+i3SsY8Lfh36r2K4r5TWS0S+FuEv7SAO+nv/OWBB5Sbr9zcotysfEB55QMPBAKbA5uVvZvhH/f7A/D5QDj8wNZwM1l6rob848LU3qjR+J92uTG697VAy0mlWhm+orW1ZXvL0/BPpXqhS2lUKo0CgYAQVMPHPHEKt0AApCrSQqqkpFUpA5f8dfanNT+Z+dsJcJQ4tRAnLlu4DP5OjIzAeiRTj4zhehXpNUnKIhPxq38QP3hDOgjCPS/cngWnNgNOi8Zqqaq2dNngLyEf4Lf6/O5Wra7V5c8Aa/XZFM3NCpsvC7Y0o3WURa7SWtLIpB/ZNL1p9YAqkkXr/OioQFDAwouwva3KprbbZumqllUJVby/+Rjm5bW18hq5/Ika9COXZyAK1lXJ6hTVMoVCxvxegs8qrdXCB//JwA0HM2nfLhTweOHCcMozeJHR2/Q3AZEBJhoKIRiJuqSsZPSVFLeYsgiFMthjfGh+/1CP0WTQdanTYdIXOLs6AiXVVJOmOcnbA0vzVgvFoVujakGI+Hi+2dFtbe/o6uqQ1tRIq2prM1qgNre2mtFHL6+UyOWSSjmfL7MYrzoLq1aDMIlUNoRcXo1kEbWRj/fC+raaiupSiVwYFjsMNZraytpVFTIwIHRkUOCUVJSUyBsDLolkVWlNfa+Nw09+neUpJMkCoOpLLICC+EUSpYz7rxrc/Jl4AX28F8RV4Hv0zaCHfhrMYwzXLVx4x8jIHcSpkR+OvDGCdDoOHzshTCVqETQxDMdUqT+UmJMiWTUWVqXEIrn2+Q3xwbULb/ePhPoXQNG+3cPe0YmrjtHvxocpt9s7ZId1hybGrFEJUTzVP70dYYb0A4Ep8Q5xkvgSxCUobNGgbkKsqpaLDATkHOokxDQbJS8jwO7pE2OxmzcNHYmVryntWe0Ibe9xbA86pp2iNSWTx0rG7929+95x157hCnes3X94PHY4YJjulY0f9MA2YTxQD5QCzdKYGAu0OLpLoFFaBCXxJrJQfLxtS+OViqBNkauoJVAPsnZmEfTkemx0EH4Zy1/n0vhFUGIp/E/cz5RFpEVFkRVanCKP0lNVU9Vdp2hqVAYaHQqdqd1WH16EvpclJc7Sckllefn8mqZyVb3BmuTVJKS1cxl9xLeRi1PXi2y6oqlpse76c1NdXRP6sPL/eSj/YoEMyr+EZYFQBU0HYgzkjCT+syOfm5r63BHRlmNu97Eth4hTo7fv3n37aMR3YGLigG/hz0g3q3hwavNB0kJNzYR2NzicBfC/oQmFMDFtUJ4QzIZ8MAErR5lwQX9yhMqAThZhefkoaAaY5kYIswTBS9mkON8QMcaH4X0jbB8erfilAdJJXhX6dewV4HrE7xh3IK2+NL0+yfEkBWIwyQ0MhYyxOpMXBjfq88m4Ix0IJAWP9lxfNcLxnh2R0qjJM9rzIF+dNdgzCF7LGuVT7Z5kR4E8mHjQf87qBAf1lQz5z9kH2GPgATmNHQa23chT4Oq6GC8hjXfWtB6nH0BOAlP1PSQmqC70D5qxnNSm1xWleQc8KGKec4Bh/Z7nFCT7oATCZHxsJM8SzmeJx31gL/0JcBcajIC+vx90RSLMmPQu8TDxCOoznhWSi/BgzjNCSggEagY4tP6Tq6duXrvvHsXaqh3R8A6Ha1d/YJYCGjoBLEM3iMc/tXvnp8Z3zFWHhwKHYhOH/ZbzYrrh5rmbRhmZxfggv1XQ918WxgzPdgn8W5Le7iKUEH/gub6YJpLlgW15NIkouSYlaSL4hWgpwk76Vmk6lLUKVXk5AEC1CHVvXaAuaG6sUzU3V2lqAAnsPL5NQhqNy+dbcsxYimusgizGs9eSSpOUtSMpWUN+kZKVN6I1vvBSPAh+gV0uJG92JGsFgkpY5+FknfL0Wmp+zYXniHv5tb8BtQYIZiDmr+P6WLZn8GvIm3EoyC1QpkhBESv1yH7OxLdysRQ2mUQiAcvV4XIlyXLYxs3EH+eHM79jxwcU5ZVBm0ZCWuuYGtI8tmwmrskVr+S2X5BewVnYlyRjNyAdaZD0SXMFIfBsVeJ/UPvT2ols1EwccLEMa5dKMd0uzOekFZiJf5ENVRgTBMtJE3UsPyVMuXTbMxOvTYtHMuwNEFQm3gU/gvXhOCpHNSkK14OaCmFBEfzv2f0gToad/pE1rvPEc+uk4hqZxOeNDoFnaHtkB8XJ0RYIowC2CdJNaSlgAUgsAAXuaasHW89feCsOXPQ7QWB9eVIEdrFCsVdPzyGZikPdTdVvyoBQmK2omUDpDM3MRLKQQx1Z21/AyjLmnQpbWTu4HtWMRlHbIqgM7i8RahtXihndUVE6zEpoNMrIKMnCfQTXUaTqkNkNwRDOphPPwAK/zUUziXnF0cyDXZgHNv0/uYAv5IHN44eURzd/REZAr65vba2HH5bSMXVdnRp9EAwVD0YJj19WiuEs3fQyWy00PDrEyCDC+yqsw2iSVCVlYkIVjA3jO95qf3PHegdNB+h/wAiT7gXfgB17nFaDny8cZeteyvlqFiBC+AAlia8GN8qnhumt1RDbzwsJPaxkLVw4m+z3S1P+QqqWFPdqsuoxpmd51TnHjQ9Dmg4j6csmwYCU38aHxbpv2I8g2TY0psOS5+jVJNgrsnqWBzxHDxOCKJvPYP0VHp4uysYqvEioisbB1Yp4lN6j+HFIVy1fo1X7tqVDv621yqVDBsC1rtEq4PFjlskqpPEjb1aBx6GixZIKfP6/mp1UYMbVL0N9K0e2gx+HoTE0GQawAyzYt+7miYmb1zHP4HYHDLzwEw6cu3Z9apx5RgOHYzDaYp5IrjEO2N8IR+vSWLAk5UcFBSs/OuJeLGTpOLVL4+RGwrxoI6wcLoqazf0xuCMYd4eAWkaL8+UD81Fza8ZguwhV9+cYgv+JPsH5w3zknA8H4MUYgxOLBRk425YpCapFxWFD8OCh71Xt9i4hEmzMyLXbhWlQLUMukP3Nh9sNiEXQfgnnQU3QbnD61blcSUjmRvNhvj7pmOQngH4xMz4yJf4GafkKK5dL0iLSUhSgKDl07vPz/w7PaAvoabY5O1T0d1vzUzPRubUD3NoWbu/ppOeM/L6YxfT0LIs3+XKs+aj7RF7buEjH3c3ZycqKNDtJvgf7sVHQnhF/dKcFIFa5UEjxQ+HR6LGhoSuiO24paHJtcHhnKWrWt+6iJuFNh3mhLUPG0VuGdh0xBo9OTh4NHr4ncutRMZcrYcZqGxx/pGyeBlmKVJZWEn/p6PHjR2+5JTYxETtOnNq+cdO2Ubezx7vwIDu+oLoSlOOi+DleDAaNNidxzVtuOXr86otfit8G6zrdo9s2bdp2G44xUF89kZTjZehNIUlJ8/YK8Pze+8f8HXAtEFnoBdanWsP6Q8yoK1GSFinIakE8Dga+tvZJWvL85OTUxPPPX37llZdjB9ZNfwc0jTidPZ6RrRs3bkH+MoLJ+qS1rM+QByrJ+KnZoK2s15oJHnwPmZlMHMrFcHBZ4FxobubFZJmoCAsebBj/P8Uj/eLtyeHnZqO1ZXu9mdgXfpfDCQYCfeIdIgxlhInQtVQjwZAA1bZFayDSI3YkJfJGAidVei++sWSy2DpqG1yni3hJITm8yeI4L7zj8pJY6VjEN6wMe8d3ugIHSnbuqfKE60JUm6lWDECpLuKkJowzc1WDnm5Tq14hXtU+4vdvMEOZx7TAPjAKuldIDTMhsFySPoGmBpZJFjdPkKKNWiFtyUmD5ZLXw00fLJPE5FyCPiFj+3JghTQuMrGwXKpHc08xLLMNOecb9FBPmPYEVtqeHMmu5TbkRLouLbcFf8sVY8IxAI6XN0Jdb2JbUM01wCqVK2HYB8NNLatRD3WMKITWNb19HbOjX9HQR+JE+VPiiflu13ZxpWRdZ6+1w6smdIBoXLiPOGWn39EX98TtgbWdOB6B8Ak7F9uj/BSe9RXE6acJZqp0A8pnkWnlSnglU6Xp/WimgKlBv8DkXdh6rH0sT9XTcsLN1D3KT0nB+m+zyXZYH8omh1fJw5tf8FhqPsgpVxyCc1/NFhwWH5nEp+DhyyEYLKKvZ9tQjOH+nHYT9esmPD6jfsWxZCqLBNZcdE18w/jYuvEbxJcdB6fpiem1a9aDL9Cx45fh+BfWhbyUoNnh7NqMMUuBeBhFT5lgiDcYu5SCVZuTEi5GSoGjz3FhUQ6YqbkRDDcC4TawXn8mlfninxSm1syIJwvhO7nnSpbgD45rUmgGUSST3RYUwJBpsOrycluVwfJpLkLJyfZkTgTDdjE+Wg7ISN5SMN+DkUcmOBJweU00t8LIU1MuWOlZTh5UcyqqyAT+y6y5FkzvgeX1ado6jBS+CzOWYWRz6Cc5VmIA3jokAfJ0VFILCUTsKguoapcRl6EFB0AA1Zc8xebGmHK4LFq18evPbbm+/L7ZR6uumXvo0Gcq0bTQ1cShhRuI/VBTQwtnMB9xfRyvVmVDwLFpJpg1jGeYBiqV90rBk+eEh7UrE2RhygxmguXsIQM3grP02hyQ82hXJqbfZ2fw0zFmZ/OX4hHSrkw0TzLZ+ozGMGuPAJ4juZHtMyADGBawAgStGtTRr+z9vf73e+iXQf2eV/Uvg3k72Ee/ADrpG+wwlmqjf4phFEMYsxBGMbLVLAgJKE4Itr2k+8XmBACt4Dj9EJiij9K/QP2Cy8M2FAvK+DUY25mqth12Lr8q27H8+pKM+oy9TIF4gu3MDDC4I0kWTgT+ljHjGgcpb34oBTnTPqZhyDUNs0i7sU1MgSZhh6UTjDsLoJidcLL5YyvAE29Aq5T1gFsk9IXgZXq+BNxvI6zSqG/hufoogxPXSeaPebXwrEBaVfoFyPBU/ZQepWBI02Fw8/5pYLawPE9B4rLHKVjcXDofFo/PafDeYqeneJS9wp8bBIIwhPl3VoalrEaQjEaEG8/7Y9vvdjSub3S+H/iHo5E4RUvAmygrv/AWUbJwFNe3J94Fr4G/C3TsvJLNhrIwQnZyyWZlbKlIix1WmURlVQmFL0XWUlPUQwUn3T5ze3esM+TqGigeLts3uXF+kJTsEPcHLL7mopqAvLhF16qiJrTdoYDdUh+e2LWV/sUdI5OIFxgv8TjEq18BZijmoiWwd06sP7gkBYTj2muZPknRYVsJHWkT5UtQBPr8bpUOz5MvSZcpGtSZTLpgNJ0208p4hE3BElSdmFu9eWyic3JZvNqO89wMPQ9CeroFvhVQlM+kLEHhWKYbtiSlsdy255+TNTigWJagsMNxcP1y+Jek4cRK5R0aiCVouAK6Z0uSMAndNURDHavrK5F1eZoLtwQ1n025dUsRxXfzONn6wYplS5LH9Vuq5zK8wSU52JFznS7Xr09AugMr04g86eUl6O5SqKpKK0vKpAWuYmOLXFVdXiUukwJXoWnpJjirpKWraltC/mpZWVlTa8TN2n9yFsrEKJ96pciWlmhG6yJVKAtLJdOwVSKlNruRKvY1ygswLfl6ExiqLmj0G4yBFnW/hQqLI8Xdk87+OYuwa70vMGsF9AUNp13+rjZrTB92mX1Fq8vOm+qZMkT3si1SCGX6kLYt6vCu1lu6qjpDGs/eEeHYfqd9R7+oXARqi1u1La1dkxZ9sLdTPzppXB8YmdrWBvtmEMYNSrxmopnJYqhkKhgvWNJSyalgod+zupqIRgnZOr9ro71nLhocj4VCsXFxdOQWOHZ+KzjYsy8Wu9A9uGnN1PT01JpN2C+BOCrAeyi7m3+lEF5lrA/N+wL7++IXlI6IB5ymgfb2iJEakIwUuzeJnfvHohe6105VuHrax52uMY3bU+aMdSCfAcGHtqtR0LIUBjQ4LoZlDxoZ82BiB0Q+Ps1S+JIJwkVwDnKjTD6838WDC8IrY/loXwrvIkm/RSgJ5MzH5KPrlVx5PYY3p3PMy2T3Bd9zXoQqbglxXv4EeesnEf5ynjwn8TOrN1QZ8lzumumhNjj7pyuwVE8YOXl2XxiL7esJDAPfQvyW0VGePJMYhxrHu83I65BavYRMJCL5i6bNBkJryT0Vc80N7bduNNaG9vjdMxaD31HfPHte5OJLb/KfHzYN6NoGjMaBNt0AeNfXUWny1lctPOW6YCy8yynvC81cPdEx8tNL44fcg/qY3Qh5NGC0x/QCjqYfEI/gdluW0/IcybJ8zAAHMxYL5mMO+EyOfBpD2wDbJ63LoE2KXP58xGyFY3le/C/hdXkIH4D2WpM5L1YlksFwIstwC4VANbTD2rNrKDjTBehjwFVd0ODtNAVVyqDFMSiOlO0Xu+YHRw6HenYOiorJAjeytoYpt2OsDVrbvjFW7gC0CZoMuV8MKzZGS2G+EVmkRbGn2SWGBsOyaUgaqKXoaOes1OK0pGzVymlJBuhL0fL28mhhnHKSpeVBSEuXwLN8avIF+UtRJ830yRenMpYzT8rQfBrT/M9QvCSVmzmrujh1mbZ1xTIOO3RJWnpQjLBUXwp4fDmxMhqQPVmKhj9Au7I4CZNcPrcnUcfal+5l05CR5F2KmupUjLAoURl5YAL5WGAPHAfKUOZOiqVBLsd2VaJCfPj4hK9CWyFSqNo7onvAEFE3MFJQGCzRWRZeAw+Gw9heKxJOohq8DiOgAJo7L2RIl3OeLOvHCqFWtGiRj46ETsa9pWysBJI8i864zRaLTIWn91QixhUpOXDxyDjQaMeHonMmW6WmqkpTKSoVNkhrakO+RkW1YpVSWmOSrVt988V29ON0OtfuvfDi5+WVxo5iWSkIUbu+53CZLAVCYXOtVqNva2wA6IcQFatq1frCgtrKigr0b7c/FgePmvR6k7mjw9w3MRraMCqVkoCU9LYPrEZroXCboWwzbd76EbY6YwPBh8CDkWTy5MPgBrg0lV/h+PIey5edHyVfRNrqlK2lUJD1YTBHnu67fBgcIqK55oM5Xp1mebX5I5ahpKX/EJg0zA4GH4r83JzKvgLBIHy8Rnwez0Yk40poiyRMAyWDQ2T5mHdqOur3ev3E5+ln/cGt2+mfgHZPKOShX8Q2jUzCqMkDBVm2NEi3AyIbGNGALDiBshCCr8B+yrnfYTyqZZkBXqelhCPZGID3SXwW2kV2v8d4FJWA8EZRQ6HtSO1vgI7deHQCem4YhonxzxJ/huXEuFzGfo/x6FdZj4Yrj/0WaMEFv4V+yzL2e4xHq9GOYPhzI/sbQ+pHPkWdjPEt0G/BP99+IvEPWO8L/Hai9N94tBiO3izdeAxKfACf5+AYnbbfYzz6OUDgYoPcugMiUZekoyGbEjJtyEzRJUqOjekUnnslbTAkEt9OODH8MrRKQN6i1fL2gvAZKWttLW1o1rdFlR47pwhFkRK1mZAt/MbqqycSafMJGC6Sg7IsqDxIaRCY9iJd+Bu7N2QV2hmitsjQzhALSUlll1eAVRfQa6J/fd75wRfG3yig8Y4dUGShny2ANQYTJK9uc2btHHsm+ADpjH0ZmQgWcq6DgPQK7krtbxqMsvubeuDLoqz9TYPR2fT9Tbi9/XjvSDUrL9lUDkYdOda3/TbnnrPuBCn4PKaHhSfKBW8uG16ePTOIvhiGV56tXYPRg7ytIaAyuTGEQOuGwSr+XhvSSsn2RG9+mdkeltwLAuGTIvA+inlhKZmFDXkzjVfKFkZByZDXP1EEikf8kcmox2r1RN02mxu8vs3q8TqowJpx+svA1e0JuukXgM3h8TjoZ5O4wGsQVxUfVy4763EFguD1Q9gyvgg6kmaW5QeaA+DsbDYUKTRsaZBi2MZlQGMMHh9efR543AaTdOpWJY1hJuDHmWkWnLck2fZq88DOseEkDU1vupxkIVvIKYODiQiLV5UPb7pJSMP5VMo+ZOF7DBsM0E1/izEYHP+egLgM+fojb448De2X8mbEs1lszs6Ac3GXBsY8y9uXYgrt9fv3hkJ7/P49IdOATjdgMg20tQ2IXReMjV3gYp4oiWWP6ZknlyfSQHlZ5ppmJIx5MRXgtEk+bOBNZm4zHedK9qXkw7sxmZpYDDcS4gIW94Mfwr6UfNRckZWKyEcVIcq9L2WlfYLC/XzUTOMwfxG+JHnC4dMuTwpUi0mCZ2L6wGOm9eOL90i6PJxY0X6UfJjHUEohL8PFeD8KyiVwerXy/Sj5MO/ipQ/yEUD/InMNWU/iBdj2un9qP0o+Sq6x+OsBqeg0tzbQ/2jMT828eqIVjLY4VEY1/Xktvy+e+BD2o+Sjbi7/VGF+aflLtoXEtJJ3sv0YXsZ+jPSskUyUJy/NEu7b5nRu83GEwyf4dt82yj7j6d9OsQmkRq/B1Nui7rPYw+JI2c789A969g1HD3jtO/oLxYXF7rSJw3CMGeNChBK8x8yhyJPjDnMUCZoilFC8CBW6hbLxXvdcj32jq39NBXFnKDYeDI7HzhCnrgwPMKn6vtX0l86hDD3K1AuSOLh5GohDYk7HYc7AUTURYlGsq0hiIOfoB6diDIrQBP0YHwUes0JEOWwHXr1VKFGxE7Tc1IPVIkmbEfkmUWLqM+JpTXfvuIyI/onDA0ad4QZmYnMgfOVCPA0P43vtgn0vZUdpD8Fk3ZKeV1mbXbuqbpWotLGsfwy8fm2Pv44kYgQ5PkC/y47zu6DNkzLnh2RBYL2uNCg12PFKg8TFmRjePIZXlxteyutKg/lC0u9Kh/s4m9OH/jfbTk1OuKKcHlcairlMpysN00LudfZtiXfBLyBe9oQO/lYBbUuevQLMZgEg9s66CiYL1A6Nt7e2s3UShqBat9a82h7dKx4TBaxGR1Vrw6g13LlHrIl0V2m7aw06eX25cBUQ1lnbOgOtIyGZ2aJtkdWWFZQW1ViNo1OMbGGaiDOQJuuKqcLzPsun7FbkyiyXOsLJ+N4p+npWTF9yTmj5NKo5t2fZdH6PdeUxrTK2fwdXTOsiE93Lp35z7nnv5bbllZz7FFC7SLZdwZW3K8f87PIbdH/GhO1yW/JW7jwAHIdLYRzP+Cdaa5LdVmZUY6NYK7YGiFomkSsE1jqzRN5WGxrasM0Sava6Yp1RomNtaGb31kniwLx9RlwkGhGLw3ZnuE/jbNbbJ7vpJvAHsWvKtCYcmigQCndMwnEJ06CA8hwnLkKRP0qJSiiLTAkRUswad0okfN3t772X/r7aWFtoaVJ16Es7xVYfGLKFjaVar4kuUCnKBkuZfknBUuSDhk7Zyob4JnTosoH+mpsXQnCvJgUQbls+uDn2/GWjKcnovWyUhDPXmQgKqEcbcbtM+fDnV5dsMvKsBsmmJp/8K6D8M3zOyw/RcvhxbEl+5JZbX+Jt8DJ4HeVEALPKQJW2LQK8nJ4UoaU4GAYd9IsoGAZobRGGweVEckLRImueBumLbOI3A1ovt542BbM+D0w1F2amwaX/wssSZwPHOWMG9oPYr9LnozhfGJmGzZi5gj0b6brca0mXwTMUJqZhm2STyFnNSraJgVe/SC+osnpiPxv75WZYen+cWIRedBhURl/QTDY7A+oGzhb4EnWs7LXkgZkRyqVBV6aluDNwLBjSAjeOPz9Ydp+neb1peC/LWPOZA3t3rkWeAFlS8B5sryi564R8+osb7yi/a81/QCDd4DlaypUjngdv5toDdNflExc2XbrlcuW+ySv2XtR0MXiTbgc/oTvAi7QE/IhmzjzG9XFMKM25Z0eUCcWPlDEDEtF17bVpsHLs/+EyPZnwWjgdzAFzO3MuMgP3cyvd/5OJ6ZuZCpiJMZJj/8/i/IENysRyB1K87Law50sDGvcp2hWq1ZIWuVyqlFKUhYTeyCfvrX1mx+3yH9LNZ2U3bz9bfdsPG4Dg+zX0O6BE/gP6g6oXcH9LYQxWAGEUwxGAEkF6tFIL+Ph5FS+u/gxxci396pl3p4giejsAt6E9YgRTHup6MZohSdVALjOvlhB2Kr8m8Rqny6n6koz6uDd5MHawHZkJh1nHz8B5kNv7k4KUr/d4kC/K6Dg+BpLMbTPztBv1GA9yDHZWBr2QxzAuAj+FPM7Y92MGfVL6DLiOPlMO1urBzQ2DFvr8lkEGH64D8TFnRabv+xGl1UwAyOxUdRxl8uvn2fOTBiPI8poH5vGU/8/AOr34np80eP/FTtPx4DnS9/wsYmdOXjVxseayLUeUByev3ru/6UCa9H+PdnI+L0BnV5axngtrSKHL8rjDGq2ukzSXiVvEFjvRt/D9upoiIedbonrNZAzWk2bVxNNkvOofR5t/+SCYjb9JOFMYvyILDl8EeeAodr4qDSSQpU40Q3DlyXZVZtNnpWQ8eM+8nA5pipnYIgSlCT+eVxVjb5w7bUuo4tNVqm6JKj3GbWxHHSdaTUTdwu/RbOr7/PUBCBaaSxWnQWJr82qhfHkjRN7Frm2qRuNqjvVN0oxJ5Iz1TluTs8iZK5/oNRnz3STGV5PElw9bBoYN0WzIeN60EMEo/gZ7XjgaGzpS+2W5PexS3lE1mfstU3tqa/Gu9p2pA2uCWVsxuX233Fb3hc+wZ9fk2aNZD64DiLca2E7GMeFt0MjYnyHD/sXhNmufe7RgoFkpl6qNrQ3yhsK+oj5rbygCyhzgunatUS0q7igiK6UVkm5NY2ODTFquNgYC9xiqGxlZRDjXQZyr0P52Bivba2kuyhOhdR0D+uC69gF9q17f2trZCa4bDRkCqpGQoVflNWi1nZ1arUGQdicCKRAyu/3USrL6bxf+FQaWOx5DzBgh8J5lGCERc1CGtfiUdSsvG1stFKG7HFCYwiZkRUIYlssiz15wfv8VU9EjYTA//8wLRmcjAPqY3bHaDECT3zpI1Nx6eO6GgYGPzx66tZYYHGkYnh8d2tFt3TE4umeofgTHIyFwDsq6nMl4Jjdnc+6aViXxRYd6A4PREVDR67RGV4EzxCn6N05/0A6UtPSGWF+sj/4ac/Y8jMnPg7DKmawhf783ZRYJ1dzZp1Vuf7RJJWldVdpCx6P/SYRQ9HQF/QmVAum0GMk8OMWeAWyBtmEBnynUkDeDzWYpQE3fVrt9ax/zNPub+iKRvia/ePDugwfvHmSew65D09deffW104dcjE1eDx/biYeZsynQmkgoTzAUBDWVNXMDxaNbG+3ERHVHlzBY3BtaiDJ1YCgJ/hvS1CoQUDbKQ3AkyLVp1KHIEQ4YSqtZv3HWGXRQI4UjpHuT1bOh271htcJapwTH6BFXp3ZybnuPLex2V9RVVEm8k23mtU7f/rlojVnRPozwtUMe0BCfgTvTo5p/BD+Xwxdpca4Dx6wUm+wo33xQPCweDfaPTE9qNeZAc71dF4wIB0nnloBnnXkmXjC/1b1LPDWp9PSG7U7vcIutscHcEPIpUGp+2NS7saRaODvqi6PlBdj2EMyeVaUVBs4Atw5YJDIZ2NZOP6cA36TrwRrfA9XgDpIe0gXNcBirqn4A1e2CslEI67ZktgERLoVwKFKVYh0o27KvcKQwHB6cmBw0D1U5WsFm+n5vK1G72une0O06XzwXq3IEp/pDY811VWDtcDv9gq2L2tLbd56D0Tk9xCcmvgR1icmFanPt+pBDHUpxLaXgjDgpg9ONjbWOPWPx+fKx0n6zbUgLQ32SJAoto53ujTbnjoHw+FBvZ1inDoiNev0lgxd8dnJ1v6yLcl84WdZQLpaXEvZJg3U2ENphH5rqdY+qe9vbezVYhtAmrncgP9CZp1CrsXshJERPkKE9vavoQ+Brc0dEB//6o6H2Yf3H6Ifvw/qlxW36MvbgLcmVfKI0nWDzXGlbF/ihVc38sckRon+A2hoMbrUP9hGjk8fOH4yNRyKxsUHvSKS3t39YvHVteFYiLZt0UJNG4yTlmCiXVs6E124dDNrtfX12exCE3T0ml8vU40a81uK+ZXkN8CQXN2XC9DPCDztAK0/NdshbknvQoPiCihXwmvjSipjNnF8ZWvb5lc7YRX7/RbEx9BxzjGg0Iw7HqEYzKh6/Z37+nnHmOdx7eGLicC/zRP2JHIdOxo5YeHbkxcqa2X7h0OZGHzHRqDMIQ4wZQTakALxGPIZO80TLSpc2IqtqSvfv6w32UCPCGOmZsXk2WUO7tkmUkkZwKR3pLZGVbJ7f47SFPe6Khoq6Vd6pdvM6V+/h+emyxnLtqIBvR4zLtSPLNiQd484lLIl+wCxKmpJ/25KV2ZL68pLFbAm0BeCVbFtymuyd96+ij4HTmw5xtuRq+uH7/5+2JZrEe/hs53/BlpSvxJY8siJmo1jlAzAJrmFWv8qzbUmSO48Z+3W6fiN8tvVDd1Cn0ei0QuMaj2edybTO41lj9A06naOjTucg7sMu+HwLXJVpP+6XVniMxZZeqR2Ei5qUhd5CdSt9mM1tjUM6GtLtB6u8WHeRRikKiwsHJ63qZq2hMETqw+2+mGfvhAiU0U/bSSHR6fYq6xt1rXKdVeHt7hgb6mjuZXycetjOaQi/Hbcy01ak+94ph+NrgamCvoJOja6TMilqO/TqFnUb6QexXv9wn0841N8REXYbq+sbm2vr6xyNNbL65sZKg9tm0NkKZaRdr7aiVKqgDOJeC44i2yC3UlaKMYBSZBt+AeSn5TBO+PIv3cL1VY+D7zc4zLAxr1etRzkHWG8rOI5zI1l2Aca5KipFsfAZKl4UFBqbVUa9rqGjzF775z9StcSqnnZqqGNA2NNWXdeib2nW1cmrfupTfh3o9f097Z4WbA9kmL5roP/HzGnksgdVcmgSRLYc2c1vGLwymaRtyObqFweFbfVNHXIonqJir8kxEh/QGjo0GqNBqFDU9umD6w16vaKmrt7eXlQpFpYUlrupgNXb59E0NbS2NDVp2L6Cjyhsd5r+C0U7gSVmENHvgm5fjAxcc4GqyW8Y/OoEs46lKvE+iINrYZSjRrkOOV//02bM+KTzlz88NrDGQZGmrvHewITFSFKONQM6PYx59HqtskPX2qptFzkpHSWuKrKozE6nubWrqEoMv3A6lQpFS4tCoTzdWFdT3yCva2RyTR9AelieSnPrfbcWqj4lZFNcSa2HJD28HJ6Ca5bN1H/r+b/1/N96/v+FnoNWMEk8yui5dIV6DlrzKDrUc9AueIuJB6S59bw9TdNxfhh+Nw5pgbou/ed0HczmV3aUT2sF0xB+O27ph6froHUpZYe6DnGvZfx9aX5dB60Zyo7pNsO6W4nTSN+l/5q+g9b8Cg/1HdP4KCubH4m+g9Zlyybqr3YQhe2G+i7Np++gna/xUN+BCsShX8/qu/Qj0HegWrbCQ32HPI0nefqR6Dvx6L/1/d/6/m99/7e+Z/M0MQAfgNkvqAIW8FUwH6FvYu8rgL44WYx1thytI+TrLQnLLuZvp/TagyH+aBEdTVN8+icI+WI+OaQr8QHxKktXUzZdhRn6lEkLmOMpWA7kwmydI1EcAHEiW2FA55GswF7kImlpG9KVTepSVoV+KSf1hTAeeJ9UY3uhFngFg4LVy7EbmOwVa8ui1kbDtGn30hqV1ywxbVyBR43shifxd8GTgovQ2CPnTTMfZefei1Kz7UCgTnxCcC8sW4FWdPDXOZYT6v4SZkljRTnRuffj3OpFmbaOHMVjJ8YDnmLWRMizdkWnY63PxA4iKToITMfj4JsQVj1ntVhYGVQdZuHs5VMHvBwsOppJKInoJEowP+Tsfqmcq2PSlhn+gEXzFPv7O5nkZ344fnB7dSnSQor4N7mVzpa2skDOoCnN7/AWPaC6Q5CX55i6eCEIj6Z4pHS2i60Lemgp8XBaXX3i7+B14hHYvu70ftCiYwBTiXykrBQvmW8SmoUtaET5gIU9oOhSmdQNPW2dYUkJMQkkEu9Ul3/GWtWphmbXZAbJ1v+nKuCoVfWoFMZ6vb6xQ2Zpa+9p6ByzKh22Oli0JdiKznlO9IB3wVsMXYDXHjkzkcFtIkLbiESp9C1lspltXVb4B9AtlzDw1goowzoiOAP57UQ6QuWQ1jN8HYkITgIx2JRZ9qF2m60dfk7adTo7+uD7TMAacB1z545US8nh/yKtRYR+4b+u6bio9DHJw80l1pLm/6j4SulB/RYNWNN8k9poCcrPnJEHLV2aG5vuxWd1QGkSEIf5d39apGidkIVUs3d/Bu8P3PdV+KEPEtsWvkxs467/fLy39/1exucTJI4CLXEWjXcyWPNXkV9dQfaf+xp+1wffzTPvClWkBVqrX0XgW0Ye4fNJOOYsLY+vZ8mjNfEueBePVx95v6cwL7PfrYkLQSXkKVrBpuEtbpU/HRoeDg2ix3WDLx6++MeRyI8vPvwi9uULEhcKXmHrMPMNzLF5ooL8deoTe4CQ+A+BP5ljYWpardyMBSNHchl3iAoD0lrNLjLHPhBl66Kggp4NeIsLC4ub1a3KokJRkTdQoS5RVTQ3oy8DVmugSFRY1NRcqSAKCLH6hLenoqNK1ikxGIphEYOxvL2qrq3S7i0k/UWqpvI29M7jLakq9rqlbbVSXXmTWgiAnyxEdKsg3auSdGut1V1ydtRkSKZkmlRrVC0iqy21Lh61QiYTplozJ1GLIU2KyuYmRDciFbejuUJVoq4IeBHdylY1bof3BKQPAKG6qVwnrW2Tur3FVSVej6RTVtVW3qQqgvR57ZVtdVXt5UamYQb0rqOix8v062WCc8z5/mg3oAp+rE9feullpM6/sNbPrreDZV5hy0AXRgI/r8AyT1/mJx7wYxhnoGy8sZhshLJl4wyE+cZishHKlo3HoGy8878gG5F/UTYeg7Lxzv+CbET+Rdk4C2XjjUzZcKTLxlncj5my4WBlQy94FRiAFtlKClpePSBexec45vs+LniJGAIK7vs4ePsljwfZY8GviR+COvS9Fa19+uGv3W7GTj8JfpNYwHYarSz9TcCLadcBF/TZL0ffoyMndYAALmb9PhBEgY0Iggu4d1HwNrB5PMw7AbBDPBeidxKMB9ghon/N34N1QS+uq8yurcr49/f50H64COhMRNCfAd8EEainGI807cgtL2HJ+Pf9efEQpxZFRMAA8Fngh34Tg2eJ9jyTFw94dlE8QBCAfu0Z3J6s1pxZjGABrvssrPsIrptBUWAxIhAfdYJaQgl+DCMidCu3SK7SUir8JJRnz8585zsX4Cf48a9+/etfoQ/mPayj5upILXKRiqLwUw+Lzpwtx89kFUbWIB4whOuwWMAQDzJTBsIFUaYMRWkhRD0uUsvh9YBTwMGdVyOFvjP6b6RitPwS+IHvBAkB+jC+GzgluIGJ4aVsKaYEvtvu48ROshHDacO7Aa0WGcl8MoJXlVXJWCcZ0yV4fassHA7/6PkN8cG1C2/3j4T6F0DRvt3D3tGJq47R78b33XUX8e6ddy4cGabcbu+QHUIamhizRiVE8VT/9HacRxCm0YD8Nrz/FrB0qFZGzwFIz19CodDVeWkijkOCxHfdtQzSIEW2xHPgfeJ3+BxqjUCgXvT0Yy2kVgJpBU2B89y+3cGJ80uHi0P2zpBWF9Lb+kuGix3rqoPB0axDjz1udOix8ZFHwOe+8YQAxeSmxMeIk2QzjslRv5jTV17JRQaCh5w5H5qyiCzwQ3LbpnZPnxiL3bxp6EisfE1pz2pHaHuPY3vQMe0UrSmZPHa2Klg1CD+NkqDkBfgpGb939+57x117hivcsXb/4fHY4YBhulc2ftCz++vwh3j7PvgjgP1VJegnmohxvKaUo4/PGV4umOMQCT165Nyj34XwA2qpObdrzm6fdbnmKG9ME2hr69XEYvtN55/r2msy7Oqcp9Wmfcb9tjm/b6a7e5PfP2fzjQ109ra29nYOjAFwvmmXpXOfiVbvtMwbjftMOK47QdSR6FR9EzobwII2SLHbc5n9uTn25nLXIxYG63d/rHSsuGtA3xnUaPxUZIPBNuubOlo+UjzucPR7ghPb7e5de8gT5/ZsmYqq9XZFs6O1w1xbXGoe6LJPGcf6lVa7q7uzW7yqbTTg22Bmzg9E52r9Fcc37NknVEvSXcl/UDL8/LkrZpwZdETK0FHJkl6l1eez2ry+RiCk4+CyHaYNgU3bDVYgXnj2Ir833B/w9gY9gX5wRSi08Dwe8NCdau8SEWgLmV5a9ORutLFXKSqEHzA3cvlQ3xUTE5dIgsINLv+aTtt0j2eNtKfuEno3eFBIbwR3CdHFojvuXT0+qO9zBS+Z2HDUHQqYB2PginD4ZnTgKJH4IDEA/kJ8mTlxRd4CnR8sppQUxdOMo4bX5pFlBB6nqxQ10lp1/SricLnerVc3KRU1SkUJIMGhyq7eMnDiq8J1RU2eLhF4yRVuLBsuK2/TFRQX0Jq+9UZiKx7ECwRVsL310BevFVgElMAJOc8tb4aoqtjcFRPKcwd7c1v1EG22bpYPOFYEXV0d7i6VXVsEwETFoQ2O1aaWEU+7O25uGfaKTB1uq8qmFqF3++kHiKKFvxNF4O4aq9aglnW1kaICyYZ1jV6D0qotodc2egxKm7akxqYxqKu7Owrg27lpQNjtl9jtkG4d2pMFZaQQ7xRC9xuRMPSUYguITjBD1Fz77AvnvfQj2rrTGIeeHZgHDvosfROIeDw0XgKP/kJ9Dm0U+BM+n02E1jtTXGt4nnL2wjtmqaJSpmwHO+lPos+gT15TX2/Z6F29q2g18NtazLUKRW1N7y5vLzhK9z4eDl8fDtO01AvjRZ1pwGSdMm0Za/SEG831Km+7zt7UPawvrI4yuVHoLYBz7P4U9pQ3LdZJC8psa61qSKJatiteX+/fTE3HbojfB3z0t4APtuu4umujb+2x0LnYrlgz/GDbWAQFTAbhob3erF3G9/WmLuxlTI9KggYOLfwUsr/DZ/q2Uod27t9vcDU2ugxzt27fvh04du7cSZwyzQ7snh9t8JjNnoaFB8GuQOAI9z97fzwcB05B2WqA/QM4JGgQkqkoFjUF8J2F0/S5vt54+8zmPvDpzxRpzJddopcDI30l+DSojSosOp8vEimRRkzTMwr6afDVSIS9P/hj+D45FXf7sATv9sRbuiWA+Qf+GoqrRSSJ/2Vkgiota7V83wReTv1NnBqapG9fVQoG1Z2GhUuQaAxNgu2rSumvwC+IY3iNYFJG2hlPuHAF0rGEZICqcPiHS4oFieZoiNbUvZYWdq8MktU/x+lniJqFPxI14A+0AjwciZxm7sKEskNeiefEpLl2d8JOkSspi+yFK+fOk942fV/NtpmrLrip8nr6/9zZQAgU92ZeiAY6oZ+AzmuqhbTI8V1mWPssEnYDj4TLG/35hc1fbPr8zAv0W+Ap2gOe4t/UNTs0dN8Qs4fKKTgC3iHsjE9GISmHdT9w/QM8fgQ8QQe/5WL3TDhhjPIOuIiLQ5zgceDi3o0IbgSvEiqcO9PC/2DYIJKLtIc6Tt7Tds/Jjk/f1Xbnje333tV+18n2T9/VfjfWL7VgI1FCjOF8bR0eiXNmlguRbNbImppkvA/9d/CHjU2y6qamalkTuAY90b++wNCD2vRLSOvP2Tax/IAU02Hw+C9drqeYciQsdx1sewfXnxRkn5YtfekbjtcvZWpcB07Sm6JMNXTGznHIdxMDWS1XWwtlg+BRQA+B5473PdRyW/g+Zt11p+A41D1cTo0sRSFVCN7H+4+HAHj0+NdH7wvf1vIQQ69RME4AYoalgoWKJMvEQqYt4L++BaFfH75jlP4FpCOjDocBzR4SgiQWQBtgva+P3hG+vuWhL7vYNg/BNl+ebDO6X5Xtdcihf6COH3K5DvH6nhBMC34FfgxehT1lxD2FT7eCkX/qbCsY9GvzfA92y9rqWpRVbfZuo0yjVGgrFeY6hbEx57e/KikpLW52NZWUikukMqes8lOZXyDeTgMtpOcGpE9gZViBNhseIThfQIFvCxYYeVFDk4tHn2vs9GkQo86e/bidPf+nV3A9eB08h/uevbut9/ToF/vubfn09dj66+if4b0HghGSAJ+DMj7M+JharcakTZon5ohlL5HK0iv5XjJz9Ioluc0JRoFClEIl1hmGPCohAG19BkWHgmozjHbAUbWooLmrz2Ac7jQO0SOdg52GoU7DgKWZLCQqFQZrg0KvsHU0dXfWCUWgALTYhkZ0PiN0D+y+GpPKYg84AAFKC/VWjXaEske1uhG7fUSrtXUUCMkapaGh1qyyUPWG1qJiooAwONrx/Ooz0E96EvtJAtGiXpJYVruIh7SIe8ToZ2MixL9HGHnHSnY/GTgYp0/Hv0oozpBz5+7Bn1pocFHuIwTYO/bkVoC1SEnB33AsUMPx7EfgBfqwCCjonxDghjNd4Ho1uL2rv4q+toY+3hzC/niIuI8sZTGSlBTNIEMrLQI9Zwe+ogTkGP0afc8J8gyhK1k4R95+rge8jbI4gg91Xx2+qwqPNTXI0ypc5pUuwLDEbS7iZdzhUoj25hJ/Z9fLNEGddy6+akbKzKrmX1Vj6G9r6zcwTy3z08xMm27K8QpMtY92W0f1+lFr92i7x9ltdbut3U56F/ILxDnfwd6CNBdsTqOZmxP+p+n+MNt084fTUE/u5kN5QZsGf0vMMTkd5ItLYdiqtYjkQPDoo6ZHH1VdeVXNVVeCTmCjv0+/4HnznXfeZM+mO0D6iCMCN3ufO7/FWGSx5PIPq0su3EiLxqDN5R8XD7576SNrtz669/wvzsQH7U4hWRahuiPqthGbxb+KHG9obOscuXFu/SdXR2/bFrxYazg83mW3dVkcjmvnTp+//0uzsZN7913o9Ln99mk7td7eTc28194WH5m9MhC9devMTdEWmUdRD4ghtzPc53ZFuPzuu8Qo9BG9qdXbvE1W2LICFYAvkjE14yeWEVw4Jcem6333FnfXgMNMqc0qjaXDACMj0LOT/hsAemODYcxsGGgz+Clzj2bYE95mLxgrcHR2zIvbJt220e6merVF2WiwalsC3QVFBfSdwAqNdJe7V22MtKv9WvOAqblB16Pu8UZv3NQ4epOx0yRg9sDcRAziO1PLkaWTshPV+JR5CehubLj0xI1HV2+LzxMv0tTxY5ceP/cnsvrcn9i5YRfRi/dMj2bsjkqmD2Qa/qFebFfhPTWLnP2lAk58c31swD+iHPCN7XSFLl+7Yau2z101NGNx7IpP7tD2eQrFhUMzJu6W+9iAb7ip11kc2+W6++h3p1bL/NZOXaNGXlyiCVPmQIsa2PRqvbyYLGkNWM1DHSDmMqh0smLIpBJdwAy/Yeq0NajlxaBEHegeGkdjgSnxDvEG1u8mtI9yqR191OJ5g09s+vSGDZ/exDwHLxkYuGQQP/utk2bLaqpvWtwvsuqVloZGi7KdKu4v2VSy7uTmzSfXMc9g/+Wx2OX9zHPEuM7vW2/uD5V26Jo8er2rXq8v6RuCMfIqIAVfw3dhIStuR54zO1fCSwjKLGjieInmXLPRaG7TyfQaeZ2ipn6csvn3OGd7emadzhn4dBijRuOoyQSfUXDg95qWZm2BrkwqXXVmg2jLnG2D07nRZtvodG6wtehHu7qinZ3Rrq5R5r4uGWglW9gxVo7WHTHjK/wtV1Fw6JLgOEVy3cT3ga9v3QHFgTUx/cfM1xlwOHEEeGBE/RQ4/qc/wb+30H8B5fTd7P45cBWYwvsvl1hz+e32oFYbbGeeGpNJAz/gKl2orS2kY54uyIhu9GHm3k8JTrJ5Yeiv65XjQTYvjHCeAvpkfhlFWPDzNVjiiWSpZH75vERA8CTxBoKDxurzJp4kv3BugqE99Y6ZTZKQuMTExJPgk/ROQgWuoQ8y+O4F3STB4mO96OsinwNF8MVm+u7v+HyYx/xyJamSaq40jGfYGlGf70ZUidm/ejmex1Th2B27MazUpy7ygGzkfAGikR6E5H1NBL5L3xrY7r54s3ZoUzTUt7m7ME4Qo58gtgYi8oXrxJ1re6fnpeaSeNAX8h1Z02ysbJGc/9nV+LwgKK/fY/fM9uTstUwdY5OCScvB6tdf8ginoTsYsurdxR2i1gZlh15ZrxF1FLuBNK+IGnudjt52XXFdnamtvbOxQdRhFBD0i0R/4mfEg8yapHzXY63OvLW8P8eBNyCxhXBAWOjMlzRIM9zpHLx7NxJawgTLonsnBOg6KZ3j4Hr2ron0d5RF9POJ9Qe5c1DpLyTfiZi3KNP9M/ZIMFQKlwOJGaBL/Ay8h05EyXE+310ZR5bqcp01Rz/O4oKYAHvWEP04e+oNe6FHZjnupBwdV4w5EgfQzxAaXGYVw5vUZUEPJy/6ITTJS3qIRD2hhOV/kN0vfH2/MuNoL0KZ4yAvQH+WMENYT6A8B5n3POUr8h6bnOP4eAB9/kEI8wS+xwUqFP0TQLCXgEDeE5D3BMP77AuA9Bl3ObyXi/eJmQSZ+FnivxAM0ZL9l/uMWfq3CVkCBpGo3fnPSHwo54mIr2UffwgS3kQdhrcKw+Md9NadPNrt9+nnbyM+qSAvtqfxScXwCZqqSSijf2XeUTL67y+DSeY8HkALEs/CehIcOfHO5KYtaWdvUxknbBMCHdEPOjh9zneu1bll6TOE5RDcxegzH9JsDn2GZU2CnzM6i863+jlPn9PeQc7rePqM3oEJTp+5c9/vy9JnXC7M6JiU1UVduiqmleEuoQDhdEVkYWmAndFF6TJ0EZZXCn7H6aI0jy5evSxdhLDMYD2jiyD/2ebkSpSRbdMgaGf0kV33wN3JA98lZKCB0QN5Xj24a9l6AOHVCb7N6EH6JdlfyacHaJx5LfEzMrLCcea1POPMKxDWZN5x5hXeOFNM/A6WjUEPEo0zVosucMNB4nfbhYKMd+gYr/fQXTfMPTf0ncl3xexbFXr8Nnjw0PeqdntxMeZgL0A/wZbljxNPbJretHpAFYEF50dHBZnlkuMEW4yM4WJonHgJl8k5TrRqsWy+5LOhptp8eJx4DpY/sMJx4rmc48R24lUIa3bxceKT9W01FdWlldXCsNhhqNHUVtauqpCBAaGDeFVSUVIibwy4KitWldbU99qw/XsPwnSl2b/3WPu3AcBxCRxIvtsADgMz825hd+JviVPEVzLt38LnPaMtoKfZ5uxQ0d9tLevc2gFubQu393TSc0Y07yhajj8Ty7hXK+edWiRvPlmEb4XkViKsZFY5uMx55dtvJ/58330Lh5Y1tfx/AQ/XWu8AeNrsvXdcVNe6N772nj7DAEOv0psg0kSwIB0VNVbs2GOJpmg0MZVhxhJNjKnHlJvk5OTm5Oa9N6elmWoSu9gRRHrvZYDpZb/P2jPAHpgROPf9/feb9dkzm2HP2s/zfb7rWc+qGxEIIRbiIMT7nmhD8BevDI28EuB4gBDxT4TILriwDiHORwhxn4PrliDEP4WQMBwh0X2ExFyEHH9ByPlJhFxWIuS2DiHPqQh5b0bI5wRCvvBb/w0ITYG8AuC7wEyEguAITkcoFG4TFoNQuBCONoQik+CoQWgq5B8DeU+H38W/DeLANQl9CCUmw/HfCCWlITQDvk+G/yffQWjmQoRSQJ5UkDsV5J6dDcdPCM15FKG5nyOU1oDQvCqE0uUIZayBw4RQJlyXBffIWYpQ7icIzQe5F4Cs+WcQWvw4QktBpmUXEVrxNUKrIJ/VRxFaC/fcAPconIPQplkIbQYstoL+2+B8O+TxKMiwywehPfMR2vslQk8ADvufRujgHoSeIeEoQujZWDgMCD13GqHnSxB64XeEXgTdXgbdpLkIFcO9ZTcQkg8idBTud/wlOPoReuU8QiduIXRSh9BrLQid6kHodbjuNFz/Buj7JmD3FuTz9jmE3gE7vbsLoT8dQugM4P4e3PeDQoT+A3T8+DJCfwasP2tC6HPA+gs4/z9gl69Arn+A7F9D3t+CvN8BFmdB9h9B35+/RejXLxD6LQ6hP8DOF64idAnyvALYXQMsroPdbwJGd+CzFHAoexWh+8eBQh0IVQLOtSBTE+jXBufdgFUP4NMLtuhbDgdcrwCsFYB7P3Bt4AeEBoEYg58ipASc1MAVjTMcgJMOfquD++pUCBk8EDIGwwHYmPYAg2MQQSQhglyDCNbniOA8iQieHyIEsYgQ/hMRDisR4eiDCOfvEeEC17i5IML9d0R4liLCuwYRfpBHQBkigrYjIrgfEaGnEREmR0T424iIuIGIKDiP/gURsVMQEfcFIhJ7EJEMR4oBEbM8EDEb8pybgIh5yxGRMRURmcmIyNqAiGyQJfccIvKglC2A7xduRcQiEhGLNYhY8jQiHilAxFK49zLIcwVcuxLkW/UuIgrSELEaiuBq+N1a+N+6vYhYHwoH/G4DHIWg1yZnOO4jYjPIt9ULEduEiNgeCQf8/SjkvRNk3g36PXYcEXt/QsQ+kOkJ+P+TcM+nQK/9g4g48D4iDsL3z8xHBHCTOHwRES8EwgG/exl0lb6ECBnIIfsSEUd2IeLYUUQcB1lOAH6vHkLEa7MQ8Tp890YfIt5KgaMOEe/A559Atj81IeI9+M0HIMeHgM1H6xDxCfzmz4Djp48i4i/w+Z+g6+eg/18Byy9B/i9B//+GPL4CXP+eCwfk+89FiPg6HA4dIr4tRsT3nyDi7FJE/PgsIn6G3/8C1/96AhHnWhDxO2D9B+h2AWx/CWS71IGIqyBrSRwccO8bgP/N84i48wIiyiCPMhUiygHD+3CfB4BBJVxf9RUiqh9HRC1g0QD5NJQgohGub4J7N2fDAZg1A0dagFdtJkS0v4mIDpCv6wEiek8hog/40AcyKABrBeA+CFxUg+3U/40IDXBAUwQHcE0L8mlfhQPuqUuH4zM4QB49yGPcjwiKjUj0LiKJ/YgklyOSBX+zvkckexYc/41IDheOhXaOrYzjbTguWg6N9cEHFy8sQKTDVEQ6vopI548Q6dKBSLd/ItLjKCK94Hsf+J3vOUT6w/dTTIgM/BqRwaGIDPk7IsPeRGT4IkRGwLWRT8MBeUZBflNJREYvheMBImMg32lucHyIyNg5cNQgcvopRMbDvRJ+R2RiLhyQ10y4V8rniEwFmWfFwAH3m+OFyLkGRKZD3tlxcMC954PeC0Ge/L2IfATkXwb3WwH5rGxBZAFcU3AIjlJErgYZV4N8a3zguIrIdfD9hi5EFk6B4xdEbgIZN8G9N32ByM0n4OhH5JbNiNzqgchtwYjcvhKOTxC5owiRj25H5E6wxS7Adhf+hHvtfh+Re+4j8rFiOG4hci/kuxf02gcy7XsWkY+nIPKJJYh8EvJ+EnTeD3Lsh+uf5sMB9zwI1x1cA0cdIg/BvQ6VIPIZwPFZwOnwZUQ+B5g99xwinwedXihE5Et30tE5uoLG7+nDZ/gdfxZxkBfU6Ww4CFy3w4HreBIVoR6prAh9ht9W4TcNfmuBN/wLX/gFlHj4hOoafuEPvxA3//iPB01Cqryt7R//QD9Iiwk2u5g1b9GieTL0SgblR0VxTxd36V+rrc2g1lJri9IpT+kxlrGvzygTz3xyf9IcxMno7T14EB2EnzY0FLMINzdCJr7ZG4v6z5NBbDZBIAX8y9OzmCV88EAoS0dyh83VUVGHdaXx8TNnonXwz5qaYlaJk1OJzKxZKMgJHooOG0JAznCQ04UpZ+PFa9eahoTlYWGRTqeT2xKY+ORIBrWL2kWcQbToPCw64nK5chem+DPn79gRP6QDD+tA5+jC1EMQ3NnZYqUM0EEO+kgY+rD1BQXrh5TiYaWQm5uznNZrJuiVBXrNBL1mgl6poJcvU6/b9ysrGxoqb1/+7bdLl64OKcjFChqNOimbArkpKaEz2rQN/8xXv5779tvPz7ySRR2G9CT1FFFs1pqLtWax9FK2Br+khJ4l82XqPyMqMCAiYvqMWZmZ+QszhoDgYiAMBo6ULRAKhQIpwTHIfJmQsB3c3JRKPdvBxWVw0DCEDRdjQ5KklD3Q1NQ0ICVIEpvdhwFTgr9INGtWcsL06Oi1a/OG8JJgvEwmoZubl7+/v5ebm9BkZu5UQC4RkIM4C0UAcuAzkDsTuYbS679+dfPugBVmYEIp0dZmkxfk75++nk49wT7+1odfMDACZkgJLy+5OxMcUXRaYc6s+DArWIYyd2fi4eHV1x/mrG22YomccHLCNHFj6M8ltxZGuC1MGdKca2GKlIiJkZtLwVrQeSPoDMEBygedF4POnkydFy5csmTJwoX5ubm5+fnUKmol1gvSSjgvoJbTqaBoCBFfjIjJpDOxTCYT26SFdy19zoLvRvNpMZ2RmJJQ7nSSwDmf4tKJ7xAaFRMTExUa4OfnF2DGzhdjR1G45mKzSZKgKIqgz1kkomSeTDBbW9vb21tbW4EZrfmoGEmRnE5SOC8GB4ZTcZGVO5HyKaNBr9cbjaZivok+NRgpeRgT+R4N3FPT01hTU9PoExYdHR3m4wScdRqyhC+2hIMD26Tu6+tTmTgODg6c4XPMzlCGdZalRUREpC3b9uyzz27z5HR3d3M8o9LS0qKGrOWLrdXWZnDwiY2N9XEwtrW1GYfPzYwNA+tFg/XCLD5s6mgfdvNGa2uXlcOVkuBybJZszql3L178LzTie6UkeAKZlQeLjNXpPK1ho/OzcmGGAB+fRityShF5BLR3ZGj/TGBYWDoqKrJyzVLS2c3N4p9DQDeIwuHTrFsY6CZh6lZSUlZm5Z5VbLbKpmbEP/6RQb1MvVw04pyFBoNQJrFyTvCy8s064LFMwlQsJKR5uNDxsF4e3d0e2KxChmJS1vbtVq5Z7+Ojt+iEffOCh/nmjz758MMPP//7px9+9NFHn/55SDsB1o7P5SI2R8ohhUIOmzdaz0fospRMzaFy6JRIhVAJVBqVRadZVKJZdz7WPdDf09OpmMN3dvcNCrL20HueOXDgwKHnVm9+/PHH9+0agkOC4WioaWnr06uQuqex+n61tYf2jATiJk/39/Px8XGRDEEkwBBJ3HjIoJdy9KoBrUE72kNPoyoqKu7fCwsNCgqaNsfKQ3cPGgQCnhBx3P0CQwPMfM8H/JYBfvkMbxVmVbfdvXfvXuntm9evX79pecff3LHyTxwOi8PjcDhcDpvD48E7i8Vic7g8m9zxOvPhp59++sGZt0+dOvX2mXfg/Z0zH8A3HzJ8kl6v1cOb3qTX6LVatR4ZjUakV2tlYVYES4qPj58xIzk1NXUm/Z5Mf5M0hLIvRlmj0WlUUHkqNXp412rU8K6CT5mVH2KJvby8HFha8CxaFhtKKagAVSHLyg9xOJRO2dPTo9RRnP5+lc4EV5h0qv7RfigxJjQ0NDoxNT09PTUhIS4uLiEhISkpKcHKD+n1HLHblClT3MUcvUjkIHZ0cnJyFDuIzHZZYqlFIHyGcxbYiEQRTLtcuHLjVmn5g9rW9vtl5eWlt25du3Lx3A8/XC+5bO2cuDpVD3hCtVRMgFYOTi4eHh7OHA45unbNpOn+kuTY2x/+5f/8/dvfz1fc/fXvX3zwxklZLhT056kDkDZSm6gnGaGklMsVihwdHYVSsRF8lrK/t7OzUwFWk0cwzZQ6EyBJmD4tPNwzIGza9BkpKTOTZyQnZWfOHTKUPzYUlEa9Xq1W67hcPvCHK3BydXV1hFqJK4uwCl7YPD6QjGUyhoV6ioQ8FpfNFYjFDc1qaw/JFbj4BAQESKRifX9/f0dTdXl5ef3goB7X6eFMa8XHTY+bPj0uKdnFNTA6Ji4xPmH69Gmxy5emDdnLH9tLq1UqekC/fp2OlEgkbp6+YDwfZ2eu1myxOIsnigOLxYHFoB2FvKkHAwOdnQ1Ckai2trPz7NmBgV9+GRg4exZ9I5VzhUKkJEllMU+r5fFMJh5PjvQ51DJqHqQ8SDlk17/+tZhaAQn+NH1s+hj/y/SN6Rv6E/4uSje9CxmpVEhkMomKeTye0cjlarVyb46nv39UlLO26VZ2dmTknj3h4Rs2hIfv2YP2w/Xgcwd1ukF8Yw5HrYYbe5Mx332nUOjOdXfX1ioUzc3ffdfY+N13TU2oDa53dkZhSmVYMS8urrPT1/fWLTmhu5cBLd93RUFBCS8EJy9ZEhy8dWsG+hP6E7F7N/3J2rEDrYXfVlaim76+N4t5n33m63vjxoYN8mG/8wSgtdTidxZifvf0OKiqq6tZU3t7A1gdHR3Ocb29KT7ALKOjkxb+1jtqtSQJ7aIiiVgsNrLBQej5fD7PRAwMDBQLHFh8IURGPBH5CtHXl0vtAK8dSKckKp/o6cmlHqHmUsF0iqcWwzeL4YoIiJJwSqS9/FTKhU5p1DZ2Tw8AlU4J4HaQv97Ih8AI+Kllw83FxQIWBf6XoMCZvOLr4bF4/fPPP793p7Pzhh1w8uRGZ+dF+/DJM89AnSx4+eWXN8+XSADIdHTMLD7J0hsM4JAFHIOCFl9HOfB5pJEn5L8S0dp6owuKa/MlDqe8TavVlv6Nw/nsqx9//PGX7787f+XKlZILPN716+g6ZHXz5s02NQ+KSmNjo0boD96mWGDSD/QO6HSaQeUrEQsXhg+eP3++1Z3Hk3TDSRMUnuCoxMTE5MjICPBKSbPb2wsLUSRkNX/+/HhXZVlZGZRpTePNs2fPQtzGhiYqW0CyT9B2WwB22w52WwN2W2ixm2tTmwJU0Sq6Wu5euvr777frmrp1xQ66nubam3/8fv3y7Rp0QQpFV8jRkwRYU8/iizkq8LRKwI8P9xKYVBDOsWXp1E7uyZsA8a3XFlCPUgspN1OXqdbUbOqjXKn51GPcN24BUtdPzad20//sMbWa6kydlBuVDyWhUhpEEP09JlcJQRBioUbBdhKJRB5uVE8PZKk0ioQmPSETLp43BTjjnZy78qks9Ao6DTFskcPTazPi3cC8nsl5aw9moWPoCHoNvU4eXgf2ekMaRFEcPkeHQ1Vl493unj6lUqmi+AL8cnCSuIhIShbSrwHPxEaDHc3NzQ1TpojVfS2lYKm7zX065ykBdc3t3VCWQDKpP7Sr4JPFZvHdpkKIFCkh+iqgYn2gMPE4JCELcULKwcFBDcvJOyIq6OxPdzQuUwv2799fEOmkvv6vb0OCAz2RP9aVJEwmBDlxHFzb7n4NNejZJsJ//ubNm/ODeYNaijD7peVgsf1gsS1gseVgsRV2LSZhWIzX0dvLB7OFjW82usU9UdMtHms6aiu4t6mQ1tFGDBvfiHQ/wGQMyTu8bsmmF16YT1szbHxr0ipFjm/RZtOlS79PzKy4zyFyfMvW309MTAHzho1vXrqDYqTN+QLYeBfYuABsvM6ujd0YNm7q1/K81AN3wczB45tZJ2XrdC4uugmX0qU2TB1HLaW2UTJqD0QSBdRC2uDB4xucK4WQrKeHO6nSKzy87lBBVsicvKUbaLsHj2/3YR2jx7f9jZLB/l9LO6mJmV9OKBTy6PHtP3tebaPPNLUAKBA8PgXcpGw3t7Y2N3NJfxFY8E9gwavAgpeABS/ZZUE4gwWkc7B/UKiPM6FSqQRufLZIzHZxZEO8TQEv4sbnhcmkHkBsaLNzSRyxQ6MfGgJsNpdtmjBTttpgynJqFbWF2gUxZwG1gMqGCnmmJaXA1Rvh/xup7dQiaJ7FUbF0SqfZFDc+myIjw0O9vKFh5e3uBpGcFPTicHgOkimRk+KX3+F1BbsPPfPSS08/thcad4eeWr1xx6bl+3bv2LJly0aacXHjM+7+/Xt3K2pb4NXe3tvbK+UPAIY6lbLpvmzu+Bx8UH638u6NG3fqu7q6qm7WNVy8WHmtpASuKbWwMubhrPT09AukDBBfUGyRs7OzlM/D3YxGUugpmzs+VzUNVy9funjvQQW0B6+XdDWxhUR3jwHaFySwN2589iqVarW7Kw6mhCIAHZgDpy5ik15p5vMW4PNx4POTwOetwOetdvnsxeDzoArEVg32A9b9wOBp4zMYmnImLgjANeGm3AQ5u9IGZ9dRG+AnOG2A8zXUEjqtoXk5bXxeCgQkMgH+JkQKJsVER6je5kNjc/6SlWvWrFlJc2/a+NxTqxFlgqrURFFq2fTx2VbXDdzsrrt78eLFuxZ+RT2cX97eYjTQ1tY2gMTesunjM8ppAML/AafozMzMaODQtPE5pNGQYq+goCAvMakxs2Y6sCYHWDMPWDMdWDMd979qtbquB6WlpQ+6dB31ty9fvny7vgNaErekMjafjzQaqZDFMmgRD/s9lgxaBsuoJ8Dt8ExNOFE8OH8CmsHLKSdTH06UE5y/TOL2AdhWxnbxRO09UqHR2NGGvDyg9WqUsSSS5A3Z6BT6iE6nWBuSc7Zmg3P+kE6vsrfm0M2Bz+Hn7fUqiQuWwc1J1dhKy+DJ47U0N0FM39Tc0m1wDQ4OdjV0Q8jfCpcTBKIoqfDOnSoFcgqNjY29I/Nsb5/i4+Xt7e3lMyVU9/PHH3/8sy4UwnoxXM7iCXmkVLhjx5IwYft3H3zwwQ7ZcN/ZUkAqz9J3NhP3ndlGysGhpoaBliMDLewxJowYq7lZqczAwxxFTOAcGcAB6fnjgsfH4JlMGzZYAejIAFDV1aWS+doGsbe3sZEBpCMDSPeuLneZr20wKUqhYADqyAC03s+v3tIjOQ9QXWfpuZkNqM4DVANso1re3KUTdbRcZCArYiA7HI1MFF2iuTmd2swpeutf779+NJ16zgpjEQPj4XhqPJwdMM4HV2UGz859ZL0V1iIG1sOCBtjGezhUsk1eOjYKsI15cPjFq4RbTR8DdxED9+EACP3/jP7/jNF4/DmSMf7si8eftdpLlwiipIQgLl1Cf0gZnViAXAaVS+USLS0ZUBFuoD/h76J0aq6U0UcllkhWrHByyslxclqxAq2XMrqjxDyeXn/9ulZ7/bpOh0xSRs+TuL09KqqwMC6usDAmBgVKGR1LaHgEZyZjBAePcrgwpe27e/++wkpkesTFrtzER7IMXKkT7yJrDejRHLkLU42knK1bY610MeftwlSI9G1qqrXSSgaNQxemYhW3oqPjrLSTksPj0TGg4Wx6RhVjVJWp4fXKhj6iruonrKRgSEnEdCejFc3Ef1N7ea9+/OvnH7x51KyoYEhRNOwv3JnKbpgTJQielpyJ9RUM6TtyG3emzp3tEqcqBd/PSu0juOC7M/VOnFle6RLWS2DVBUOqo1GlPBr0nwP6R1v0jx5t4d76ByU/VtVJrY1MWEZ+7dmZPPfJa+nUPvbRN97/fLSliaHxZab+/MjZ6zNnxgZb23voNlbqO0naO6cI+mtGqe/kZK1+ZfnMREN7gNja8oTV+PI60P5R0H4JaL8ItF9kjm9GtF+9ev369atXr1mxYsUa3LmyxRKTboHzbdDuxmlbEcYmcJgbdgeYbYC1mOaKCNyfK52c4JxLsenEdQiOmDp1akSwPzSv/M0oBg7TyO5IszcT1qYmaA01NTXV19c3vfxSJpLixH/p5ZdffPHFl62wLrYzwMxEvlUB3lzRWlVeXl7lOiU0NHSKKx5d4GNLBA5ZAtkdYQ5jmifcFZoeruEpixcvTul68Pvvvz/oMrm6upqwuQKH2Wp3gNlsvySwXybYLwnslwT2S8LjBEz7VddCEFxbXVlTU1OJreQ2bCWrhoo9Gju8ewbC5DPvvn3ixIm3zRZwG7aAVRPDCvWk2PDw8NikWWlpabMwyG7DBdqqmeDNxNYo9PLyEhr7oDrqw3i6DeNpFfh7MzHkdUJrsZMXMmvWrBCMm9swblah/IgvT3yYL6+qHBzUWhXzYnr03B44nFffPn/+r6NKd7F5VJ6JRli0Wu1mzTXzqDxTfaWXq2uVVYkuRuQRKz++SKnTrbIqzcX0gPzwfKkZlvlSoaBdKB6PZ2pXUQG1OijnMMwAekDebkX1t79lUC9SL5orWodho5tH5pnqJcALa+cw4rXpoXmmdn5+NbS7chg2Kj02L2Gqd+9eairWzmHYiPTQPK1dCmi3HLRLAe1SQLsUcyw2ot35i1CCSsou/37+/PnLdAzhOKznqKF5Gxo/QnuhBdQj0M7GKZdKpvDgWQGdFg+FG+JhFEaN0TPh2Pn0k08+eeCZlRsfe+yxPTswMB7DwIwepGdCNMDGo/MirUalUvV0Y7Ach8EaNUrva1XLcWpra2sqo6dGREQkZmIAPYYBHDVIPxKBhY6NwAiir6+8vK+vrAyVQhDHEwp5Rikyyjg9PS0tanUGBobAn9lUNg2HjC0WCsUsKWLJIPpycgoKWrcOH2gL/GtApRqgfy7GY0t6vU6n1wNueviXr0LhGyNFMTIxHivy9Q0I8PUNDkbe8K+f3d1//kSKPrFIisetdzLmE+Tj+QTVPeA3DQONpbfO/fy3b27cazZAgUM9Nbd++effz92798svv3x/Hv0gDeFwDHrShN140/WSRoVCYeKYDGwneAkhpjAYCBaLI0undnCPXlOr1bdfy6P2UBlQU3WYNJSQyqB2c1+72t3dfe3VRdQOIISzqcfUbWrFlZ+pDifKB8+ENN2XStm9HUZfr2IvFwcOnm7k6UE0NoAR+3ViT093d2eJjzwsKdwVXK04aPryp/bu274kNdYT/nSPnjl3ceH2rZmZ+/bt270EHYSs2AK+RlnsVX9P39fb2zugR2IJ1CGkorWzs6XlgZKUhw2qTbjWM+p6W5uD/Dna7nsXL1680aAwOXr7Um1tQIYOJWqErCgTxWYVe+n0wilJSUmRTpSyuqSk5G4H8vJqb6d0BnmYq8iIu7e43hLPkK/PtjtPLQDqFkzz5DRe+aOBx4uKigrzQ1MgK4NWr9UVe7kGtJV88cUXv7QQ/nkbN25cHu/c3h4bG+7BtUQTe8Ber1tGDnaBvXaBvRInYq+G9q6ugYGuhoo7d+7frwTrhU/EeqOmQ07Elovt25Lawy56483jx/OoZ+HX66l8SJlUFrXSysh+do2MRk2tTJyIzWdGBwdFRcXPnJOdvXhRFoMBfnYZgEbNxUycCCF61RRVV9fSqzYaa2tbGfTws0sPNGryZuJE2OJGdXf7+Xm5ScTi2bOjGNyJsMsdZGuu59PApD8Dk54CJu0HJu0HJqVMhEmVVc2VFRUV5fctr/LyCqBT8kTopBZwuAKBSCwWO/DwbACtVj0hTm16CKek1D5qL3WAnop7mNpPPQ6ZbKbTdmoXtRvSHrpnZYRgMfYJ5skXCcDQgAHF5vD4fLhIljIRlnknhtEBWUJqZmbmnHlzZ6dOY1At0D7V9IpuhcpgLObrlX29FKXT6mUpE6Ebt6tuEGxjGGiHuLOpo6OzU8HgXIx9zs1xjAz3k0Ata+S5+0cnJc2YMUeWMhHiOYTGeEIk7uQxBf/p5eXp6ctgX4x99t0wVJRWtynA3oqO1oaSa9eu3rDUPo8CB18FDm4HDm4HDm4HDsZPhIP1jdDaaKyvbWhoqAXyTZ8I+UYNG4zPujUP82TAuUN02gvnu6hCOu2y4lmYfZ5ZxfXxEyFYamJ0dHRi6rysrKx5DGaF2WeWVTsgfkIuzADSGnobIOJvYJApzD6ZrNoN8RNyXxqwmcYtLi8vL45BnzD79LHRzvAE3gQBb7yBN57AG08cX129WlqK5xu1tl68iK5Lj7HYAgFblkW5QRJSQg6eHqTTZeDpRGAmDVzAJQiuzOEQvPBUHw6nsJCe7nOMpYOCKBP7+tbX49CKolgs1AZfe3R0eMjE58+npuKwKikpIAAFw9eXAgMvmX1qAMg1DeQKArkCQK4A3EJgylVZqVJh2XhYtnZ42ZaPcHbOMOlNerOcPCwnLhMyZ6asLNZTT5nl5WF5Pfh8iPaZMvP5VVVYbh6WO5yiwmUSpuzd3Xl5WH4elr/Pz6/PrAMfdBCADgLQQQA6CEAHQqMpRiAJp6urqQndghMXF2dn/GMOn3/jBiqDk9ZWiIazpMfMFnKFXFwhF1fIRQK5uJpzkXIdFSqVE+Qlp/vZhDjDvnvff98Gucrp/jkhzto1NCNDDPlbrsI36RPcuXMd7nQUkXIhvtlgZ25uPtxRPtLT5g139bbwwh3u6m25q0BMaToqdKYp+MZDHT5ifG+X/tpf7zd2afDthzqNxFiCVp7PrCAPMYGFGP4FlsNIlVc4qOtKQJTjuENIjGVR9S9f4smeFYnFGer+oSXKZcx3xqMLsy0SORw8ePjw4YMHDz311FOHINZ/mZTL5fBBFEkzcZuQepGU4lVFnnZ7elhY/HxqI7UF3BROW+B8jaU9tUb89OEXXnjh8NNP7N279wncb+5ptzPHH6v7xx8XLlz4448/zp0790fhxs2bN28sLNywYUMhqH/Edq+NPwbjHh4Kr713FX58lXBwcXFxIFTgfVUAjszTbieNP4YsI9bT0zM2Y8WuXbtW8JTV1dVKnndsbKw3QCjzHKdPBs+MD2HMjA+xoCqmJyEb9Vo85IzhE1k5fQmGrK0DfFRHW0tVVVULBkZk5YslNPvwBAOxqzcETN4AgExk5UolWPFODfyp6ay5fft2DVZWZOUJJVjBYC7oyw1OW7VqVRpWSjR27NNuKdFpXVw8QYEjdC8GXUpqWjw8tCDwEbr3gy4lbGFZ2QC2kPkqLFcj+IqrINARRB6hS8lOZ3f3J+H2R0b6MZh3dWXcFRrQBIFRY9HdFgJ8V4K4eROjxKI7JQT4rhJ4YVRYdB+EAN9VKCzB5UHGorscBPi+fX0rV2KtWSM9DBFw33C4b4SlHzjCcl+nQVV/f7+Bq+nHw81qLAFnVIeCK+0nVEDc7uouDcQug930YJB1J4ErFk8EMa6bp6+GwPOzBVhQ8ag+AVcschkeo1H2VOFQ9vYtLDxnVBeAK1ajMA63ArgFq5YvX164Dyskttnix7OJU0G3WNAtFnSLBd08ugZBYEoM5Nd0V9y6dauysrKmBZr+jhwOMhImpNaSUGSoNimrUQktZYfv7wNvjX1QgO5++3aupVivo9MB4iOUTs2XSh0qz3//+29XL1UODAxc+5uU/PpKp9wjwR8KM1sCovrG5+3Zs+exxx5bn4legKsDZ85PzwwPxHMQpkyTkrGBYrmHwkDA6+KlS5fq+vi+vr51dXVNXagVrlZ3tbdV17RV3wCCc6Uk16iXewQJcZFav3bt2lRf7ZUrV+bOnZsSjcLhao5Q7B0WFDKnoKAg1hGu5rNHvDDu/fABLHws6x8dlQpFVSfuArlZ01GNmqUkeJJjiJKTKnV/BrQFs1m4EySd2kxcv5ROLQaXmC4lHYSiY4iQO0p8AnZvk0gcHTPT09LQWikp8fc7ShAcuWNVXw35M67wvHWX7qDLUjK4tuEowe6RC9clrW/c0d6+fr0qJB3JyJfQ41Lys9lJRwl1hKUtnQ5yLgI50+nFnyyUDXIGWclZV99RB+F1VbXlVVVVMyS6G4VstWbsqOP67ad//uKrr776618+fuedd977j48++vhvaFhFN8JmwyPISm1RmGegl5dXYCjE7Emx8dOnRQcMISEgOLbaEc7W4LQ86CkWq7oboclW09TU3Nw5BJc7u8dmq2AUhO4vzVq+Lic+Pn5u9qLVq1evyM3NyVkwhKq7OuIhcb4EkPYApD0sfk4CSAswyGo1xEODUGcKBHK6F6yxMYOKoqLA/GHwrVot5+B+rxkzMvCgQlE6OmK+VoC1IoiODtQFX9y4IRfgqMbVNSoKhcAX69bJh/vhgizxmLelH85x6L5O/Wq1s+Xm5lE/pgSc/vIffuhAQ3KYxw6ZwnBcQtLTHdCQSOYcHIfk6uXfvl1iEQ6PFjoOyafqnj9/sUVIxhjh0JrVuYzeV79hSZ29nYBlIgfLSyQSY7kFAgHqMGigsoOKmdKpe3p6uro6ZEwtBB8eP3bq7bfffu2VI1nU83R6mSOTy4+8Y9ZMADWbr4MTBDbcYj6LL4BbODr6yph6usbnz81NS0vLXbhs3bp1K1evWrEsx6w1vj+DdgoL7fyGMKj87Zsr4PJuX/7lX//619lffz137iJGxB0CxnSXmKmB7iJwQyLvoOkpKamp6TK/IYjS12zOnzlzZtbC5dAQWLtoUX7+Ixgw93XrUClZ+6CxB6opQt3X3Xbn9u1bpSO912n28OvuUXd3dna2d1he7e2dGD93kN9WGWYC6PrXt9587+OPPz7z9umjR4+eOPX666c/MUPnDtDZKrVW2MXkpmSkpqZm5CyCKOCR5UuXLEq3iV3faOy8TP1cKO2OHD0OmqBWMLKGsLNVVIexM7j58aBmoLiO3t7e7nw+jycaws5W8Rxe9TvDUndNtayhdB/CzqDDM/EMJvxCfVK5Iwju5OTs6gHRm4ers5MVWrwTb33yySdvnijOpA7iRK+Lng4/Aqz6+ztamyHoam7t6LcCSZybBXVKdu78JUuWzEfPm28hFDq7SHx8fCQuzkI8Mm1Gpb4TmtGd9WXXrl0ro4UBOEgSfFp5eXljt4qUuQ/hkJMUEhKSlFOwc+fOAjQNrgQAursJpwDwXwFORLdZcx/LSv1AS03lM9RPjzXv6dFqMU2AH4h0cSatNGWrVL29ZiJwMRF4rkFWSrF7epRKs6nx71vVfJ25nx6r4eICcoM1ufARru30NHfTY7GVyh07sL24IO45DfuaxX8GgZzTQc4okDMI5Awyjzy5ND74nz/++Pbbc+V1WoiXfpIWE0KhjGMwcDhGo5zs6bm3gNpG7adYpk5IGkit1FPUHlZ/fT1KN1XA5dOmyTgdHdOmdXVh3+a7asnTWegkpDPoDPfFBdvCnZxAhw/hQhLU94SI3t1dLuHxLnTqQxsagoJUjQLt9euoHS6orpZxXF3d3V1c5JL29h1uot+Sk//4o8u7yz0nBwXABXl5Mk5VVXl5Tc1IlBBiGSPxHtolQatlt9fVdXU1gApQ0xYTDyplREw01qUuhxJQPpAcIHmx+urqQAcdXJKZJSN+/knuIJEEPL1//1NP7XCipS6Gf7U0ywgPTzw9pdzZw6OmRlAK0SzO9t33ZMT2LXhyyvLWhoYFC5oXLl2KEqTFGehjdEaWAZgdlg+3NBIsI5pBlpjVhSklu7WriymquR6wKS+44D3UYkgvFjElN1ctEqb42av270+z0mF4WsqIIhrJgwf3GNpYJqWMKNTZMHdu5iitzFUOGi73Q/NSwiwzL92ZutX3qtjug323htRjxUSPTBcZoyIJKmZQK6gDrKOfv1aMp1jtG9GT9fNPI7NS3Ji67l2U6p0wN3f5iLosD0+rWSkjKtfX8jh3Wk0uDK2H5qSMqJ2zoL07dCbhOkrzImQ9+x5Hf2tA+wxL9JcD2gcyte9T6PpwldpteXV19QwB4Q5A2Iz+RmPCBkzexs17ztFXX331iHQ+tOwP0OkZqIpfgPQi8doIj90BJVt1SgATsNC0uFTwYqlzsxcvXpy3cH5udsoIdgLAzka9EshEUdjXpIGmAlJ3NzQ0tPX09PYqhwB1377FZv0SyARYEhXvB01qN98QaJVP9ff38wscjbWL/VgQ19RLGOPMGXicWaVS3r5yBZpiRg6n8u7Na9DOePDgQVVNZRW6CpIB/11+QH29qLGxquzC2du3v/79zr2yMoi2Va05gDVeTjAF0jSWvrX1RD690CDNsszAn07TqDnUOuIEeGxvM9TOALW7O8dQfzs4uKyFcAgOlvkKBF7bCgs3bVrB5vMDs5euhPBj06ZN23csDkTP0PBKXR4gAPjGzdo2A3XrlrcbNVhTKfMVCit4Ekl5Oafy9m2FygjnkrKysnv36vpQHY2r1CUXAbImE8EPSY6LS44JD4+Lk/kqFGs1KtX69bpVq1f79zV0q9Xq9evXc36v9UeLLHhKia3IDGkGeh29ItqxLD46MTFioFw5dYaZx4ss84uWWuYX4fViEUwet3T0KpQaPeILtWqNBto3XR2t9ZWVPd3tDLdVbHfdsc1yngn1yl7qsIP0+Ol3Pvjrf/3y/WfvvFa0gDpEPUntAvQ300P8mVQ2tcrK1RXbXYAczmR4bnZ2dvq8ObMSE0NjEmbNyczJyc7KzMpY9sjCEaL7gR0etgKZSfiBARXU58r+7i43V65Oq+pXDig1BsPt0haGIym2u/44gkl+Hy9PD08PD09ff62O5+Lq6ePl7eHh5p46M2x0GfAebwUy7htcD5bLAstlD7U/W/vozqu+1pry0tLS8prWmttXr169XdOqoIdhFeiWNADqRhNcC4UL3k2I4+TEJxClUSgUGgoRfCd6UcSJG4DMjRNLqZ1UNsRuZXQygUl2gmHYlqEMNpzv5J28Apa/chL80HWplN3Vhrzcit3dvFBbF1Kp2juA8vQoBupoV8kCs2b4QOH3mZG1bN+LL764b1nWSrxudt/KrERvuMo7kQ56pGyhAxpUFbNVg8hBWMwW8JBWXcxWqpFAJA/qV1FsNptS9fc019XVNff0m1wAGRdTf8udixcv3mlBTfTYAyKJYncCNKRQScn9PuQciQchnFHf/RJZkBtHPTg4qOa4hcTDt/EhbsbSs2fPlhrdolc+8cQTK6NRJORBAiymYnfIALLZtCnPDzWd/fOf/3y2CfnlbbL4o0fACni/u8WW8oN3VAgfzwraqvp6HZgiZDxTDC+2nLg5uBZzZFNPUCvpFVQ7i5iW8bZtGXqRZdh41skpOHBg3rgmMkcb4ePZSe1cUVE6vrHwUsrw8ezVUp2SMpdhNG/bRhvZ5WmVZZ3sCrDbUovfixrPbpqOxnvnm9sFYLrgCZiO7vX/9wrTG7kQahdCLbSa2ko9Rj1jZUIvuyakByAix7Oid+qivSvmzxu/rA3Pbo0az5Zsbk2dq6n17vjmpPdZihrPnm1N2ekCVYwPw6Redk06Ml4iB6u+B1Z9Caz6NFj1abBN9HhW3bx5+/btmzdv2bBhw5Z8AHsPlByc9sD5XrwrGaS9RWDzmePZ3O5oy79XhPNNVfAlvR4BPqtM5aZ7dCp3GNCADJoBXD30WPndabapYXf0Jno8ruBVe2q8uK6/X5mPTkMU8SadXofz0+gUnU4XjUckO1N3U8ejVVULANFSdbukpOQ239Xb29uVb8RLFhk0m2abZnZHj1LHo15ioEAgCEzMWbduXY629ebNm61aUWBgoIhBxWm2qfjwvaaWAjcfY9QUSyZSUzQ3GY3kRCpt8zZS/x7PMqiN1A7inXfSqWeLJlCJm7e1GreuSJ7D54eN62LME23HrSs6xHz+7fGdC94na9y6Yi3J420dv4Jn7qWFV9wftuzythJst3oifqXtGsTwHdeuXm2ZaFVvrjj/PSMugLB5PVQYaRA676eepQd/9ky05jd3Ikwdz6R5O59/ftW8FTt3Zk8sBjDrEz2ecQeICxcqAnLxdn0TiQZwT0X0eEb2FISGzh7oIgjPiUUFzJ6NJZY20SLGmouw8azd0NDVNRE704OjkzMx32LioqIMvMR4Ikalx1tDx7NnFrweYkkBbUnzZPGw8Ywokdxl1v7ets1Hj/CGjWe8hobc3PHNxtgXbitY7AhYbDNYbDNYbDNgP308i926c+PGjfsNpTdu3bpVehdsFzae7UYNK/97BXUxtZQqsCzMWUzNpRZBgd1Ip5V44JJhWx/btrUetY4dz8jbnsSTOA4sXbtz585HtzzE3K5mc48a7p4+nuFbNdAk51LdXR0dHQ31DAr42qbAqHHy6eORIVQF9rlZ4ufr5eUVmsigRYhtWtja964Q+PG8ZabgBuDHBrDvtPH4ETXN0bPVdO8m0R3uAuyIHo8d/mEqY1I2NTA/gk1NkhtCCzeuX/jkjRzKxTRoajB1mwYpEXnyP63iuyDblCg7/8dPgaLw2a6xV2/IQsZjBMvRPzIHnUT/Celd9Cl6nYx2ewgvJGZezMmam1Xecfnnjttpc2TTxmPFFYWmjtNLVv5a+c8SBieCbHNCU91yRfmgT9AivK+XTRuPEfzatLmXzzmnPCifv5nBhyDbfLjTUbj4x9+me7z/l+lzzGw4DGz4T2DDs8CGZ4ANz4I9Z4/HhsrappaO7j6lkcJ9uh0tLfW1VWW3bjU21EwoPLPuIBONdJD9e04kF1xHAbUNWij7qeeolzlH3njri09PLaJepp6hJzCvo5ZDVbEQfpJJxVCx1LwJBXbW/Wuqkf61WeNGBjk5ORnpc2cnJYVNS5w9Nys3Nyc7Kztz+dL8hxArwEysUf1wHEY/3OzxaAatEpVSOajo6nR14Wg1SsVg/6Bar791t3kCwaJ1l13nSJfd7PEY6O7qInGRSFw8vAaVpNjRxd3VTSJxck5KCGTwcbptPo7q13Mf3a+HV3y+BOzcA+xcbYk1Y9Q6PIPToFH11LZUVTV19an0QBS9StFRVdVS21dV9eWXTU1/+1tT05dfojPSKQRhNCIWC9p6jiHIiH9L0xLv+NHdqCQYy7fTqRe5/1EO6Jd/nEe9RC0Et6Og+JASqD18+V/uQ9Pv/l9keKEVfGlSmQzUIxSP4pk2QaIgHYSEP+FvoFiSVMhm93Uid2e45ex09F6RhMSTmBwlqLefIIjB0q/b2IxF4YGuzgLglcjFffauVatWZcSEePJIkuR5BCesWrVsS0xBQQYeTCRWrsxAJ9AJ+hP+hvbmdSmEOFwBUulAqV/SqbwiiVAsEokoA+IQIDQVk+9vYKwxD9Qb8IYnhNFg5BAOQMae5nKo/subuzUODgTP6OAgFdy5YzLduQNtZckwdVxVNcg9Mjo6OkiMBmrpmc2BQtnI+vQYIUcPTNGz+abajoYGo9/UtC3PPPPMlnnRbg0NHRXG+vqgoIKCyMiCgtBQpIRsWSxkNBa7ei9F1z8+c+bMP+pQwCO7du3KQ1+3yEavbccjbHMt+2kzRtYHKi9cuFA5YDCoyn788ccyFUmi36QyR57QGWrIiIgIbwcT0FlOb4H4NPgC84a2m6mnic5O3K20HUyI03bqKXpLEypNKher2qHJWlFRUT8oAA+AVz6vzF2zZk32QqEwa+nGjRtXLXZ2RoVwG73I19/fPyQkxNdBp1Kp8MLnysaWlpbGyrKySjI0NJSsvH4ddcCVhEkPXuTSpUtNJq/ExEQ8zDZlwaZNm5ZEFhZGcZuamsiAwkJUAFcq6ku+//57KPud1Xe++eYbc19OrGXlLHNOnOew0gYDDcP9AXqPyN+kEq67uztX01FZWQlxSL/GxOUeG6sv/c0IJtuop4e2fUyTSnRQKAf5fmFhYeCb3fkg/DFPi/ZLs4TChdmAR8ZCelvHQqkET1cVGbpB866urh6D0MHhmOcwAnCCMWmppPdt7JBKTNeuXWsj/VJTU8H7c0jKZDrmaUGBG1VYGLkEcFkWSW/NWCCVVEAmQNGqqiowpyvqrqg4NtIy2cUYrZlQy+TirXs3J9Iy6Wrs+Xd7ELJMvVQoFWBqnUjbhOVGKsYfCNiTgf4HfUscGr99YvzhF2L89olwirJm/PZJWOMl9vjtE7dzfenjt0+otN3TLO2TBMs87hlgtxlgtxnm1bEEcfFO5Y329rPf/POf//z6bHv7D/j1zT/QFakcvJWUD/UDD2mgNMsIE3WEnhSYRc2miqlDVBw5MHA8Gxr5aXR6lHV8YOBYNlA7mU47iNPA6gjz5DJ+b2+vCuGqvZhkkaYjvniqyYFN63ar1UnrDx06tDZJrV6x4cknn9yzCz0rlTuo1YgHF4vQAHjSYraR4PJ4eC3s9euekooKodDolZCQ4G2EEx3gpDOiGvgR1C3era2tRsdA+CeYyNHF2xsvhC0sLGtcty0kJBScTTM7FDxH9ubNmzNCUD78SKVCP0G90FF999tvvy1m99Tf/uknC2ZzALPVgFkaYDYXMEszj7Dbw0xRWlHRbxs4uo9JPin0yNN/fTUD9wITH9uFkV5ILg+0j+XsRbt3z7ABKJ8GlB7bCbQPqnmChj1k8ahIoH1wCc2KFWtsIMynEWbsJZlt2Xk6B1DOsMxjCLGP8o2qRgVZX/2zbaClIxMvxkc7dwRt6jR1kPfOF5f/9tkHr9uFWzoyAyTEPubbsuKco5LmLrABO4eGfVjCEPvQD08UsYc+vYdRiH3412+iWLMWe0bZsACHtsCoPU5wzPcUWGEdWGE9WGE9WCHWvhWqa1qroaKreGB5VVRU2jGIi615JpMqCW6nbU8+tmMkF1sTUGLt28t3RkRcZGRkXNLs7OzstIx5c2dPt2E6EW06GzNTYu0b0dY8lbH29KTtaWvSSqx980bMy0uAymVqfCqeapCYmJCQbMPSnrSl7c6bxKsXiyx9EjvA5o/i1Yu9OqOBw+bquh/cvn37QUNPn6K/dwACI9Ko7m2quVfZraCcnZ31A4ruTrxhSD16gFcvKhQ9PUYnJycRlzJC2KLV6iiTzoCjL5LrwAYLmYw8BzYLUTgnjowv+6pb3dN6+eOjeVQhno4IKQOCoReplwRF0r/eBLyu/eVkDrWLSqKmQkNgLrWLd+q/y8rKLv8XNDy3Ayv86JRK7S5Kp1yl0hiKwyVwNNgL9Sbi8QQCR3c3sQRP0OWatHi3UEcen4MMmp5evUonj49xRwI+y8E7MG39+vWp4rbW5ia9k0AgcJ4SueDRRYkZaVP9oY3gO3fz0vkFBQXL5kG8JY3hhlAqJahEaQVuQgEfHKhCSRr00LqoKeMJ4XoWz6DSaIwSZ1BTHt+pYLGvlZQ86OD6+vqKSABFQ4qgbWFQdDVUVLs4GQbqIDStrKutK6uurm7uRvVSLxAXaRS1N2/ebNDwPX38/CDSdXNyFrGLXUmOUwAEsf4Ohp7eni6lekBtImTxnqRKuX3r4sQQA7QlOrzTM3PygrSAt8E9bGrqIraBHzYPCLM42nF6HjAlJRSlSqdTlL7FcRqerjpVoqq4DsHJhcu3yytbIY4l3SNbr3799ddX6wcdfAIDfLy8XbiUmS1PWFbuPw5s2QdseQLYkjxZtpjqW1oooEziZClD11X/G9ostKYN9Sb1DF6YQk+pmjSBzKMVyZNlUXLe9u1xk6eSeRAjebJ8Ujndv3/33yAVrtiTJ8urjvo5czKAXImTJRcjEjgEDHsHGHYQGPYUMOwQMCx1sgyrbO8zOfV0XAWSxU2WZMM18/+GaHmjiGa1PyKmWuykqDYSc6ROlm6FadGi0Okp2ZhxsZNi3EgUlTpZ1tVWc1i3mg3O/wbx6JgmdbLMy57f1hWSjFyAfHGTJZ/1jNoPgH+XgH/vA//eB/59APybN1n+NfWzKRbX0I+XKXWqOlpE3b0tg30ttbW1uKpMmywlH7Lb9f/DSpRz7MS7//HmSdz/dpg6QO21pH2cj9489uZ70hzqKQjPttHpoJnEcyZH4odsgT1vsrSOmJU3/5FHcubMnTdvXl5mZKwoOS4kbVYyxFKxmOlzJsf0h2yIPW/SHnegV93b0dGDd+DUdBpMooYGdWtbG4RufQ8vDsG2isNDNsueN9lCEiBQ9PZ0GwgEUfHggKtIFB0f6eYeMnfu3CgoN2mTLTfj7aR9CkrSf0FJOgkl6VUoSaf+nZLU0TnY0dbW1tJqebFbWtqgCM2bbBEa3QAhcQvk/2Hhcf3za6++9d5777156kRRUZH8+CuvnHjfHFTMm1whGdtwQZ6TLx4eccHR0E6Inp4M5SN1zix2SvJUXC6SJlcubDR1Jl0e+D0NKqCHSdlZV1fX0tXF7u4eeHhBCLdVEGy1jSZdApwj43xBR1ef4GnTpkX5+bF9fQOA+vMmS/3RrSlyZGUA7snYCqxfBazPBNZn4vnQd6qbWjubKm5Dxuf/OH/+t5sk8O/q1astVXehGJTeQ9elEoIwqKDZiB8txePwWJReLxNwxRTBIvBm5zLMy2dYH37xf95aSG2g5lFBdIqhllFPQ4qloljNzT09C6kISI9TK4HHofSmHG7w90Jw1yIpj802KBtw/cHjsvVaNcnhyAQshc5ohJuw2TLemoWpcV4hWXvwzu84ychHV6/OgPL73wK8YP7FF5cv3fVSJpLhRB7citLRSanEYDCxvMEqKk2vQtWrZGGx+xt0fQq1WqM3yIJa6upr7lc0Gz09Pd0deTxv3fXrPN6DB+UVlXjROjQdq6VSJ4Jdeu3atSatSeDsaPKLjZXxfUSdvQNqrc4oD4qbm55X8EisAPdxi4ODW7oLC9vbU1OX5cxLz8nJyUwBA0qdTOqpubm5kRJO+/1awY+ffirjn2t28/b28HDly4f3C/AatV+AoLVVoTCZKipQuVSGzLvYnT599KhWm4FXYtAPHZMheuc6wUx4cbm7dqHHhy4VuLpWVJAkvXxXhuid6gRlZfn5Gk1UFAqCrxg71A3tpRfA3Etv6O7z5kkkFgnYRqAnz0oK4rXXMvCzooalYbOgOtCOSJSUlIG+Rl8XWSRjGxWQsUw8JN25c19/bZGQHUPvyywekrISj5GYJWV/0jhlSqONZzYGWHamkAxJOxxbmyUmjMNhokXqTHoVyxaO9O2vPzh9LJ16flhygjUcx0qGpN+aOd0pMnHOfIv0jOwkQxo0NQj59zoI92Gc6RhRMqTFnPS6Jt9YjdCiCfHJqF6tPNCm0LI/dx5ok4f7Foe0GR2pMQI1s35OxodEX0w7cY6f/NNHb72aR71MPQclcp8lPc75+K3jb71fnEPtpx6FOgOnQ8OIOLEeEhSFDGEUnZa/aMWKBekZWVlZ+bkxCbOSIjIh2ElOTrCg5mR8SAQTMoSjXjNoGOztHSDxc8z6CFZrqwHPIejoUFqQdYp5SLgRMoS3J9He2tI8qNUMDg52dYpYIVGBDmLfGTNmBFks4PTJQ0IDs01SwSbzLOunUi1P0PQbssnoOh9X+WZjuBptLnVmWMH101Ovvf3++++/9fpJqVR65JUTJ05+gIbQdmXZ6hb0G4LZJyl8ekRExPTEWYDz3PS0ObNiLfjyjLaWOQ/hKh5o1YNALF0fBHmdCkV/v8YCqGuMzXXOQ0jyAyNdoeYVufiEhYUFubm5unpaIHT9xP7as6HnGycAdpGWJ167tvSA0eAufS2VJSUlpaWlNVCnsDgcpJVyjQIXFxeeUUpqEXj8V77v6ekBo3/7Sh61ESoQnELptA5o6SKVErc/kXI/vDQwMHDlQyhNt+XC/GRgJlTPc1bty6FX1p40VwLEZqgD3oZf+KVIuXHeUE15xkmJFD+5q9LEw12i12u7jXBviAM68KAX0dsg5dbdAwHL6qREQ6/clTfYjvs3C+Odus6dO0dzaIpUijjFXE78hg0bEjjFiGP234mWcdh0y5MO40Brr7FaqypqatRjVeeC6nTvEUP9/NHqU29Rz1LrqfXESWQTCHOHj100yM2rd2WgI+gIscw2LOYuHK+x2Jg7aWwAhOeYeo3FqK48IWHmWKAYOzHg8jUf0Mq07PecjEf6xqKlbK2781tDC3csYBwzYPSyi4dRhvzmneIMaiv1POvo6x/YgW1oSyq7yAk2R+cXvrRjHb0ngy3ghhaA+I7FjsWprnUxttyxBR+917nvWPwaatJmsfrC3WxAaLXv1S7LeMg+QHGtZQ6M/1gUN27ED1/aWLh27drCfGgs7LS0nHfSWzeaN8DZXTQWYx/A2O5aDQboK8YQFVFsenYMHz6RSQ+/w0nv4OkXEBDg5+kCzSIXG8bw+eS2/e3Q7VrHYTNutAgAeLiUl48+RX9Gn9Hpz3D+KfqETp8W2TSdnSUX0WMNWdnc1dXVXHkLAsFbPBcvLy8XnkGtVhvGGNanodf+1unRY609zQdagD7T5q1cuXLeQP2VK1fqBzhQ33JGW9+bM5Fd1PH+HHMe7oMa6qF9Zdv9mtdHPKxAcaSvnD37oe2SZN4z3K6huJvnL/HxmWm7DJlXONhwPu0OPN4tW6UH7ytuw/msMBDEhrElp5ixTmEu4LQYcFpoWR09y3a5ab5850516+VLlxrtO2yzz2QAtmhMYZBDxLUV0gucdz985ZVTD/Hd4zrwtYcz0GvoNe7OZTsOHy54iBc3i+UzFs1+dP78/Sk5rq5SO/4cu3T/sahKWFOmzOhu0esldvw6c2UAnseRDvjOBnzjh542NRbf2tr2dtvImrdGewgLic8+w+t/99uICLjgROh5/XZx5GxeBS8b6HFT/MzT+D3HAufsfGesD+dCUafn6nuORayqKj19NFag6chObbmWOQUbAKUcQCkLt8THolRdW1lZ2dxbXwlS1NeNxYsPeI2acc9AbtUYOu6gHqOb5E8DJZdTW6AJsJ9Ou6mtNtDkAZrWM+kfEm29kAOt8iN0Oo5eJXbvz0RFOJEvP2cDbWdAe9Qs+qCxuDcpRSIRy9DRDoF2bc0YC/DBAqOmygeNtUXQAORZcsXby93dPShutFWcOMjWbHg822AH2GebpXYtwKuZxtqnqQVccWtTQ11dXYPlHX/TbLs+tftQ+Iex3evk6++8886pk8egyXDs5HF4P37yFHzzup061O6D4u3aznvzqpXLli1btaoAgoTV9HsB/c1KG4bzAcPZfYC8jZqzTwcKa/ta4LylDz/WWdGHd9Pts1lz2n2cvI1Y3Ilf7MZzcvfz83N3dHTAu2o5QqPQ0UbF+fDnykssezVKLDunueG+l1ITv/be335oQN9LiwmD4Sj7dUPv8XczwCr+dADuLT0pmMsm01OefiIRHYBrpkw5Kggm/1BQ03pv0Q9db28/yi3TvRgfX785HR0toh+cHhx81Hq3oQjmbkMdBjcN/56xovFiY/v5zm5fVAs/wRGft7eMEIvl7PeUD07LF1I5VJSpxlRuetX0hOmOqY9KpRLpRYnb6buCJ2+Q4S4Ifq6b74Kluxc/9XQG+hB9ytn1QuGaGWDQb+EyFkuK9zEivv1WLmGzz92tZP1e3mz64axDS9VX6Be4oKlJStTVyYiMDLmkrm1ZimZgYSanN3dtvzgiHcXCBdD8Jvh8GXHhgnz4CURpltl7UZYnEHmM0aixrY0YpZa5sjLr9oht3ag5VBD9LJ2kMVqaK81RqnJpVdfuyUDH0DFixRidzbf0GK24+dHF1trjCtFjNADdTfPmZY9CgVkDxgMWeYDFLMBiGmARj59nMxoLStFRda2rz3k0HEOtCTMiy+0ggpe9R1Mi8A/TqRT8KIvRuAw1a0ZBw6OhmbYYOFnE3rlhRd5YcIYE8B6NT/9gyQ2i695voyCi2zHeozHq7czPczYmBo2GyfrJTZsBqX2A1FbLk7iX45bgaKR27nzsscd27ty1bdu2XflQVz1l2Rb8KTg/YFmHfqCIiaOPWGz/+U1mYAtsA2v6L9P/mP5Bp/+B889Mn9LpM4dzFy5fvnzh3I/ff//9j8gKbR+Fwn67ZRT8zjT8AgHUatBoAeoK8qGl8hf0OZ3+QrdbPqXTZ0WjDWOnsRI12kxXSyFkKL366w8//PCrigB3TKg6W1paOplm88nIsN9KiRpty1kR4FgjZi2ChuQi1FNWVtaDXCIiIlyYtvW5cAE9fG33kIeIf5iH6OpkswWjioS5cfBwD4EHwHCYnTOmJJibJaPsIKTtsHCpn1/qmAJgvt0Y73Bfr1L9Oor6uBEyxjtsFjg67h5Fe2b7I8zi+8Mse4JFYt/PamoifQabf6sYVN75sXkgAN2TFhEGUkpAYEdQWimhVMrZmiNHjHULqGeo45SXSU89Rx2mOOAZj1AHifvASSP8RETgW0oJI++4hD8rVauJjHp8R0zMrt1zZ5vQXrigHwq3kYKLBFJCwJNLjDod8U3poOTSjRvXPJT3/oEuw0UKVynR2gJltV9KBATIWWqxmJOOjjisCqzatGL5plphxmGoz4qIlBopERokJW5ESon6RkuZxrvO+YJ+Uyy7zvmBfqLOTiRSd1XUDQygOmkREkmxq0MiOef11029RW9kgBru5NGj9KBkEVIeQUo5NzOTZC1OegY8FZmfT29LVIR8sJWkKEguIgj0y71e/pWLF9EV+AdAVF0tRWo52dVlhJ/wYsNKH9m0CS2C/1VjjyNFlSP7zU0F+SItdS/uoXRmyEfXUUwhLTuXWkv6diagj5+79CpDZnNtxBCcl5+ft+bgwYxR0ptzdB5RoYNVUnLJSg9c8VhUcTCrou5ZsGCJlT7MOifKwqpYC6vwExBdR7Qarm2sFBty9Uzd2EePfvsuPaD3AuvY6Q+Z2g3VKQwFhfn5vrOXPL5qYcaM0ToOZe46oqZae/suV/HA2mJ0/WFR1cmsqla5apkPb260tbZWvV9rLM+UXQv6LrTsKeQ+ou8E64wRNLxF9msMJjzE0aP5FAHlTkAnDkWYDHANTgYHL//AwEB/L1dwl67DwHkr7VcPDCTF+flqNTQv1Gp6XUU+ehO9gd6m0xv0biKn6fRmkTXMdmqFkBHQb1ZAs6Ti5vlff/31vJ4Lrp6r7+vs7OxjGMFbbb82sFgmwGyZ7HgfH5/47AJAt0CogYw1Qr/4+Hg/hqW8K9EE9pYPs18CzXUAk6hml8w0A+/o0eITP/zwHwx6mh29deFLSRMKI0YR05wZo/BVQwPhvBUlsV+3Lnx7XL28DljRkfHUOn+LR8Hjp/5D+2zq9b+cGxy8fl3IuXEDZ85iGdVqKctICgRyAj8fN53KITo6cJMihqi9n0FFUpHQBPeHK40sgUDKYpnUarmDSPTkYx4ezz3nOeUQXuYjtc5IzOHMTnZ01Ggu3lCpkB7++SAsIUHKimy4cUMuVig+/GttraPj2vkuLogF/1z+r7/+Vcr6Mn3tWovXiLDsqR5l8Rr03ptMyTWVdXXaUeJbng07VoccrAP1OvU0tZpaTRxDo7WxbMPJVGnZ1pdfzh+jl2UrTqZyJs+6uspRGtLbcTKVvPizl5f/KE0Z4w6xlp6pOEsEglfLuTO1vdfYoRG0NZ0fUZiDxWE8J3as0lm00hupF9mn//6nV2XpeB+qEb05WG/GtpxM3Q+vzQ2ft3DFJqb6o+7nzoSgtVksut/N9hqFgnl7TiYMgaHnL1MuVT0jSHAwEqN250y2rLfCo5zJllEYbyYaza3NzXDQCxdHEHGmJbR+7qYdOvOOvfLWW2+9cuxIpnljbOIIkxLONDRWj4bwsqJGPh5QXkY/upUJkVkA60dwMmHSct3c3Ljartra2q4RqJwxVKMewsnEbPD+77//fn/QGeJa5xHcnGncxj5VYqj9HsJsv+u6ta2118qufPNrdU1rKyHCz28kqqpkHKXqu++0WjnZ31m7AIrGAVOPqdFUZeozGU13oT5ax9KW4t2Cb8DlU6fKOC3NCxY0N8udxQKvRdmPPffcC4cf3ZAeIXakn0RTTOj1eP/h6dMHBuUSrvP1Dq13eX2gR0cDnywrQa1wgZMT3ic4Lw/vE9yj2xvoUZr3SHOrKFIf/MhiNBcuyMmRcfBjEvv7R+rSvaBNgWXnHtzXNbUDj9EjSnn3jhYvGuxvrrh5HV43W3QQK5O6Nvy0hdLSO6UV6Cre6M1ggOiATekIZCKQo6Ojl7fAycFgMKh7tTo8mcxLCpWekCPjfXdTqVRWX/gjA0824P16p6ur6+5vf8mmDlo2+NgoeP2vP7UpFI3f/0Wea3k0A97qci21mTgD/MmXSgO1JoOehOaTgEto8d5bNed+XDAFhPQMcHWBCjY8U0qeP18jn5oa6+HhERXtX1jo7oZnoEWlroR4YFd2SqyL0Msrce6iwsLC7du37VwKobE0kIcEIuPAwOCARsfCdb/IXXyuDVTo7WhoxCtW7khJLy9P+VQWi8PhaLo6nBybSm9AMVGzJe7w4gzU3L5hNCkV3Y2Njc7OLm4S1C6VTdENKPoNob5eAm3bnTt37vc5cv2io6PDpjjxIGseR0pCbSuf2tgKpazPOaGtMzVn7dq1WdN9VPX1VVVaR/85Wc2tGvfkZcuW1dc3VNeAAaWBJM/BSSIhOnSUyGtqSkpKMI/l0AXGaVI7OUGZ0LZJSaNx0OLjN4B1D1jWTeF9PQrxuqkJW7e/qa5vUhY+9r+xMHnmy5P4ET1fTMrQx2MnbOj0TY9lTsLYx2MnbGwdelA7YYNLiZ4eeeyEjd5VkzJtEoaXghsxl+wDYPvXwPYHwPZPgO0P4CcQTtj23YNqtcmk6m6qrm5sbJkUC6TIIGWDnxaQcCb/31BCdObjby5e+vnnrz4+jfd2eoZ6lnhlwuzgAjuQUGiC+hS+gPaISShLmTBZ8uclz8jMzMt/ZNWqLZtXT5A2XKANUqlIqPIxHlKCVMlSJsyibqXRWFPT3K3U66urmyfMp2KhuqenzbyGTy1PmTCxhMrGRrHYQcjncuPjAyZIMQlQDED1mzo1Ji4uLmbqVD+huVbcbtlBaKtlhym8Wi9hwmzTKtrr79QaBZPimZzQaP5X9GKduf3Fu/gZ9/Iv3zo7Ka9zhODz5QkTJtO0zJW7l6/MypmE9zlCNDXJEyZe3VBVD3jGqruT8kLHEyZMluq6GTO5ejfhJD2RlJg+3eyN3gV+fAn8eAf4cRT4cRz4kTRhfjz66J49ex59dOfWrVt35kND/knzAzDg8yn6maQ47S+aKHt8MXsoSk+xwaIcinYP9DkbvptclLLCmlHUGcqN8rJMvveCcydKTCcnh+i4xMTEuOjwkJCQ8AlzTYR9GDTvEYGfZSumjEYjRZ+DckZZ0oQJ+H+5ew/4NqqsfXhGvRd3ufdeE6c4zT0hvTdSSadugMCy7Lu7GcuQ7AtL2YUAu7QAu/QaSCAhpDfS7MS99yJLlmTJ6tJ8547l2FZkWwb2//5+n2Y3yLI8M/d5nnPuuXfuPQf+jER/DEMr+0Lsdew17J/U8RrKFgPcoOP1/R7Kk4+8HB3NYcCvCSFQRcep92imQ57tsWYrmyEab668dunSpWt0EQTuIrpJp9PRTB6JOAhEjLHZpLkPJWEyw1s2due9PNtjZSf4ATR+CTOXLVs2U11/4cKFejUOqALCnkk9CHlEtZruHYEeTHqj/R2MO+/ld6Kwvb84CutSWAz/76Iw5uuvHDp15L8Vgq1ZlTTtvxOCNVmxGs+7THB+cs9DsPjOuqkTcHzUSG7oGdcTwPwWYH4TML9lYsx39fV5yjwbMW/n8+3yX8f+999TM/Gesc9G7olrtXLlnktgIbw8lAAbORqj1WqUe64DgQCG+p7ogI38B7OujjkBIVRVzZrloRDYVKCUkMBzKgHVA/+HMxp/dMLR+DfffvXVV8fPH/3qm2++Ofqdp5rgIk24rBCakDrm39W7PUX+mXbgwAFUgGonuY++/5lnnskl/4fadumZZDhIMiPXFXkelKfPzsrKmpUTEpuZmTk51UMVSZGKXJYbeR6UGzmhoaF+Yjsq1NWn9UhZXKQsl6VJnoflSyPQ/gjjvLn5+flLN08kLHdbOfMg6O5foDv5sLgr22PdKXs1Go1aiTY9KJz/ok9oqokNCGkOjFYkhiABo9EGQwWc9qs8lez1d97/+OOP33vnX6+++uq/3nkT/n3znffgk/cn1HcVDdwaHbNjDocNY0JoxcRsDnm25/5swbx58xYuXLR06dLF1L+LqE9oCybQzxXRaJijiGbH6EUIH3RTeLHngZTKSKPKtNXU1LSqED+9qJySEljyOJCi0WxGFDz1GW00tVpnRPsurUadegKBFJ8B56PzwdwCpDweB21h4aGS6byJBFJstlQWnpiYGCGTsv39A2SBQUFBgbIAf6ea/wZq/gDU/Dyo+X9Bzc9PSM0lVa3t3Sq1wQEDR213a11t9e2bl8+eZVy5fM1TPYcgPeO41QzC7behp3ogGC4H7fphMun4r5K0/+uv/fP9z4+cOHX+2vX68kvnzvzw5X/e/uerzz+fA05X/oLHug5BLpYkWWilCSIF2ZtRZ4DQut9qdZAT0PbM3MK8vNzcnJmzpk3LTE5InZQ5dcq0rCxGTvZsD9UdgpwvjltQiYR+K4MBQqOxeGiXFI/Cy3ORM8FGTfo+ZWsTGCq8rBiDC4MG3GAiPJJ5CJK53c4U+MhkMp7FYgBmutrqKisr6xSKfvsEhB4dHuAjFqBFPLX1eqHYNygkMjI6OoaxZuV0D6UegqQOYNjQ7msr2skbH5+SkTlt2rSMqCgvxsCo4UPQehNovRK0/hFo/TOk9VYNet6ra+2wfPL1kRNnz9+oaWxsrLx+5cL33//4/akrl85dunbt1u0rZy5eOHMKvbQ9vf0gDmNPaxN6NUi1GF+I0UljcyNYe09jLXacyGYw7GaLUW9mWq1CAdq7RuKkxQ68GDs7e20oK6hJ/2OpEq0rpYN5wDhSpzDYWUAi26oW8azwdzimsRSx+MEZUszKkLMvVwLddRfP3U9uJBc5qhwXHGcctxwmUkLGkPc4VX8PGU4yHSrHRcdPjhOO845Kh47kkknkWvIBONBuxBVkIilyWOEvvx88yEXkRvapcmRV5/893Kpe+ujHxk5t6/F3XymkCvsMHP+Df43lOL4giCCLw45zuaDAPiYbzITHt6m08F96QICQXpTS1aRZkh8CP3N5ZitolC71ZVqQdTWeOjI/DBAQCEPQhjhpxpwjpfpizlxkQfEJIX/cjX2AC/A4PAkPhi6kG6vCfsQ+p44fgDgV+JFQPBH+741zMQvWgZUCrc/DgR7q/xu7hMYs8Pcx1BGLx2Jv+f/e1xt8Z3DcnB1PwmthdmagT4Asd9tjhdhLzuVh72Fy/F4sB08jCBaDxiY1vVbCy2HQA+S9KgNfCPdpbFKojEUpIin9h8s9YIlWo4O0ms36zvY+EvksvkTY2NPd3a3UVHXDr3uOv5HkRyvOtqINpDajTVnj4LAc/ZrWMpBtZbtST9pv3q5ubFfp9PreXq26q67kGryut3Rra8FoG9QWNCdBM0oV1ZfOY3Zjb58Cqc3CwUqJbHT1vp5uRbdGY2UFxsXFhYlwQ0tFRYVaFChmwNXBP8QFsEBVNCaEhN7eUi8xpm28fft2g57NDk0WJycHCf058HuTTpkc54PLeaqeAVMtU3yRR5WgeYr31tGbOjAu/fWvX0V5CR+YWtdQeg4tgKi+fftWWWVNLZUGruNWVt7q1atnJ0ra4b5v9LH9M7PaO1oamtvQdk6zDTsDUqGxhT7+fnQ+n+1Q1NXVddm50sTs7Oz4AD4HpIJzfaICBShLKR239PX29jjokmCUIDNWQld1Q6s7tQEcVONNFuEbOLhCpxBseQ3Y8lznin+URTBYZUBKtFjsdgdD19uJXFFjl6oVGt6k6i+i6bFbBMAD7kHu7+cnga/a0H54XIpSBqvVajOGS+Wi939oAWNAKSdUbT++/3IBeT9VA3MxuQt/8XAB+WdyOXX8mfXuKbD3M9CJ5BGg57br1+X+gYFe4BtpDJvGwNDrVTYxdNcS3KCXRybHCJkMhkjEZnMlYaFRs9euXVuYkTRr5cqVs5LDwPGFYNsI6FnQogv/6GgxnJDDYTBIG3SGDNTdOOCtPLK+8urtsjIWq6zs9mWgoB7ArKvXkN7e3rimpbS0tBVrJggaCzVQoVACwRAWOhxYaWk35pecnOyLdZfKI+9dC33RDqUS1SDasHvPDuibNm2M5oEAuNHZ27Ztm4PlwUlsHI7cv7UVbVJn0dFJ5s6NwprOnDnThEXNld/Jf7DSWZFyMP9BuKLPDG7NoFUqa6vLqjp6VNCR0W1aZdPVWzVVtW1YBRHKZKKYwIq29Pb1m8Bh22h0atc1TyLlsphyzhuf14DpVf7npULycfBqc8g8ciH5JOflj26pVKqKzw8Vkn8EBnLJWWQhuQWXAwWTCYKh0bB8xUXefC4TIgemyIttQGGMiUOzWYvDZ88Ih7479p5lW//wyJ9+v7ZwWgBA7J2eu+Khpx/+3foc7Ek4AZvZrzYUeffc6jUA4CadiYuSXWBWEZdWHN5P7Thw6NTtra0+UoeupxrkXq3QMUL9Wtt79agcfRBpt9nRixsYEQVwRwjsmjpgpba5s89WHM6zdLe1tXXqcHFM5ulznczggo0bN84NZalvnJsyKSkQLbUPorN5fLT9ji/R1Fy+fLlSz/ZNB0tJDWIyaE7l3+Ncq1XoXKu1AFCPHgd1ZUONwgPkD0wMeZr83yjLFf7++AQcjB6HgOlrt88Yj4SD0eOQQOe2do1LBPW0MHocMnrqpyWPS8jQk0FUaek+Z6Wllc7abvHjcFLb2qOj9Vde9YCXYvRwZFxu5g3nhpSTe9gvv3/tuxf/s398ep5BD37ix6HovkUzYmbNWDh/PJqewYODi+PHoaq1jc2t62BLEF0hY9GF9aLa1PCSx4/D2dTJDXXCAJKLeAsZizcskWAkJlqtg3OKTwF7LwB7TzqrM/we2JsxDnuV7cY+g1ndjkp7N3TXVze1VHe2VkOcXAZ8pozD51hJviZkgb7yN9/59JsP3/3HC2gnE1F05MM3P/zi0LP55NPkU+igsh0OcR/ljvuxcnXNGEcSkwpXrLz33mXz7lmwYMGKxZOzcmemzi/MnT17dtYwkUS5E8lYebhmjKMdBm5n2k0mGx9CRpaZJ9BomP0GNBpzIDUljammMbJezBhHX9729taWZk2/XqPRdHWyybCYYA7XPyMjIwQpLmlMxY2bJWOjc9XQ8Hy8yeNosFMBAYiisw29QHWJ46jOaDQ4WEAfy2EwTlBnQvkb/zx8+PA/33j95Zdffn2EpsLdagrG8RgaVDowGkOePI6KCvJnzZqVX1C4aNGiwmG6CXerG6PRZLYgqZhNRnnyOErppwHHtP6u2tpaqmOIH1MbPj4cay+MjnutHB958jhq4Ckg4FbwEmfOnJmI+I8fk3+HQyiLnjx5coxM6HAyjvasrneJYCNbuhCG/d3NzWVl5eVVVRC6Xm9obwC/Ug8DDYhSsduEAIeYFRoCP3r7+cnFgAyEsDiGsmGRJE0q5773XR1wW3PkvaL55HpyNTVwQzHrGurYQnvmMJGHVpWSa9ny985rtdrzQGkBIWAwDBoblTKFGxgoF1+/3g5RrAGXQBQrtqkgip2cFgJERs/OXbB+/YYNq1ZB6Lgmdxo1uJ8aKxaLY7GthAAlXKGiV4YU3Z5UyoUo1jYQxDKYEMWyWUz04gr53iKhsLZWKBT5cLQOoIrUNgF/LVgTQfAg5CQdQFW3QoHaiFNRrC+Q5kdFsT1d7UBPY11DU21DQ8OaNQ0N9a2doQwYLtBDs4Cp6VjhwEnoLDZK5KyVi+12s5soFmV+KHZWP9kDPOxB6ywaG//18Zdf3vwBUEdaUzc03jx/6fzFKy1qthqVOqipr/z57Nmz1xq6NTawSVMndoEI8A73CooOCPNmMoV+Qf5BkZGRScmRkUFCO+FLSqL4GBOw8woKCQ0JCQmUBfmJ+XJ6aekPn+TBmOLP5J94r732WTXQVv7xmwcLyL3Azlw4VtDlX936qIDcR06njlW0/a/tL4Bf5lDHOi7x2uflyGK/AApTCLYPmzR09GkdhEivNvP5aNKR5HJpDhbh69Ao+6yYxaJWmgVogCEWmJVqizyDRgtMWL16zax504KQlc5fuX777/Y99uTmOcFxC5966qldy3KXP/T0008/uCx3UgCMVPwzsBxMTrCVZpwXKBLTCBFPQKehfbl+EvCmXZ2Er1nX3dkHlgojY7MBJQwz0xikUT4pPHxeslTKjHWQNLR7l+sn9QsMCAqJ8BJfrYM29JkdHFl0dLQ/pu1EpVJqtVgfweZ3Kep+VvZCi6xaRS/KYaQwC4U2PY3wtXW3qG2gi8pWhVUik8kkVkVrZal8kkQinDpvnqyfNKtAI9XXb1y99ON3xy41tqk2F8TGxoaLmb2Xjxw5ckXNDMqFgVheMMYj2LjYjvU2tjQTIpPeZNSCa+3oY7GNfTjhyxTH+rOwhQuneZkVJadOnSpRmL2mLXTa8UOgn787M4c8CPp5EPQzZVw7vnip5OL58+fPnnO+zp49jx11Ne1IV9PuNPcbzGYrQGoz6uEOu7s7J2LtLKe1ryCXgV+fCS7/HurIJWeTWWQadUwmp1FCyyLn788h01ydgp+rUwgSiIUcDquIQ+dw+WjfcJA8c1w3seyBjTs3bdq08/69f/jDHx5/ct9je3eAqIpdfYefq+8YlppJ60zNNGVcb9J86cTN5ubmyhvnf/jhh1MXLly8eA075uJgIl0dTI5XcmK4L8rcyJdFpE2fnpWVI58yrs9Zt/ep7UuXLt2w7YEnnnji0R07tm/fjT3i4oYiXd1QGa2xprXXCJcyalRdt0pLS8rkI6pCLgFlLR6s9D2usk6evHTp7l7C21VKOhzX/RLtoNjyaaSa/W66DG9XdfDtdr48dlw9wLv1d3cd3q7001gsmjx2XMIDAmpq7upCvF0ZjjSbI+Wx41La1bVo0V1dibcrhz08Xo/TH6wC1u53ZoUc3IUbX1WLJnu1ne3NtyhrP8fjffTdsXNl9d0mIEhbX3H95I+nj1/HfiJiIZzR9xtNKG8ZHYfhAZqcF4lZVEUtuxHNEFm6ujRMOfeDM53AXcv3/zowl9wF3A0ca8jVeG1tPvkEuY3cTD7Me+H9HxqAt9ZTH/wtn9xObiDXkbuobXYLCSJKoxeE+KJJWj5JZwK+DEYfnQU/i/14Bv3AZC6/2Cs7xRfok03OW7nrQfR6qKsrB3vJ55G92xfOTJWCbrlR0+956LFd2/OwJ+CkPJ6t3wSfmvRWU78eFXLmYw74uV9tEgjQ/FyToq94fxyHCyTSLDplN7h+VW9vSUlMQlwgy6younnzZqMRF4eFagwk9ABEFI3D49HRxBqbJ/by9vJSqy1MGTjyUCHd3FpeXq4SyvjF8UKWDqhUk0xJ3HT0mrZu3Y0rlyqMoqh7gMglyV76yxenp4RjYXBGksYe2DHMYdAd1r4+sdhiVdbV1SnpQp9kiNoSAvgM53zLOueuarQ37l7g814UmXvIZ92Nn2smwOmBX8Ep8/lvX/3rNxPg9eAovAa44TV54dpUj7k9uD/JM2750h6Nx/xS0zbJHnLc35k71WOeqWmcodVFvweu7wOutwPX24HrdA+5vnq7trWv/dKJCfBNzetMnPPCQc7J58nfs9/9pvb829+9OAHmqdmeUdgPdsP+6pxUWXpq9myPFUDNAO1P80wFPUqxtK1XHICUEOOJEoZmhNI9lEPO7K4O/0iuN5JEjCeScJ0hQrp4yqmLzaCLbRPQRWvt7as/XunUTUgXQNCv8AX052u/eTeH/D3jhW/fOjchYYAeJyAMWWrO6jk5aRkTEEZbm8fCkEpUPQEiVduEXMRBTzXR0T0nR8wI8Z6Qmxhaff13UMSHoIhXQBFyUEQxGjV6qIhly1atWrVs2fJFixYtXwiM3euszXwvvN9IrV1YR27cD3qZ46FeRl15PXENLRvmW0LJSDKWOiLhvYz0pw6ZYMqM2bNnz5iSnpKSkj6grmRP1DX6sutRJBfqRnLd3dSwpxvNGy4E1OXYs9Qhh/fFWBF1FO9Hgkz2RJCjr7ren+2ZSrv6zGZzX1d9VVVVvU9YTExMmA+XgbZcg2pneeTORl9y7aGUJ4VxOJywSQUQRBeYOiAC7jDxwsLCeBjS9iyP/N2oy62HxrhFzlpAg2PcTA/VXllTW1tbgwpFlpWBpid5qOkRs5W/whcKn//o46+++urjjz589913PxyQa7pHch0xhzmKRMPdSHT6tPT09GnTs3JycrKQENM9EuKIec39kz0Tn50XEBDAs2taW1upSCrdI8GNmOfM9FBkPnoYE+l9MgsLCzORrtI90pWbec9fE0/fKmtr+n8WT7/97pWT/6V4Oi/HP+q3j6e1AmmPx50ltWLf03g6Q9Oe7XFHOWy1Pnqq8RhwvXn4Uw1Pub5VVwdcJ3rINbVS/1fxffbsSy8N8B3vkX+glulPgHSUexyRHu+ZP0Cr9D1lPiSksRExH++R/VNr9D2lvrm5sBBRH++RvQ9bn78XuD8I3D/m3C1L1Y/zkPvLP1+8eLGk5trFy5cvX7sKKkj2UAWu2Tt/uR5Yz//1xddff/3ZHPJJ9jMvHzp06G/OXRwJHolj5IL8UVQS6UYl9z3ywAMPPPzokrU7d+7csQXpZZJHenFZj79/imfK0eD+cKMcQ79Op+tRIA0leqQhl9X4Uz1Uk0v2UNDVJI905XYlfrIzU0wyKCzJWa3cx2i0ahXNzV1KNap9Y3Q41GqskxAwTGixJVUfnKQTmBElhfIpKfn2o/+8eejFtz85DrdVYrEcOoT9jcAj/OQsHO03FkcSGBf+J/eJj0+fmrVo1eKCzNSIiIh4Fmv5cmwFIeCgRXo0XAMa62kg6CqDQSX34fEMmj6NqqOpsQ6CQh6NBrbZSeC+3kVsBxkRHR0d4k/Q4+z2OLlPTY0+PDohIX163rwVK1bUmEypqVgygd9UyFm00itXrlQqCPoZNvvMwHzw9871q2ehvT9Ae4+j9atakwPNTNppEANa1XWons2PV5QOBpcJ0azZgl7cQDRFzyH7dYq2yu8/PIvq8HQ3wDcbunVcBper69IWeWlUFRVnS7R9uj6tprWkpKQeu0FkazTqPoNOp+/TGWyAh0WlNhgMRpPJCNGZwWyzmY1mk8HQbzI5WGw2tUCdY+xSa/z8JFy7Xq+3sblSPwaDdJiLeEqlGaIBsFzcQWAMufCda0BIb3ObGgzvwjtzyaepx11zyWUwEHow6Jl/vHv84uWfr16vaOjs7Ky+cKW0srKyuubWj1++QxSST4INz6aOffhheR5YNhxC+eFTDQ0Npw6fhr849dJiMheOVeR6sPHfkXvJfWizO4mWz6I8Y0VgyzOIbD7fSyyNiI2J8aHRASibnSX2DwgODY+OiY2PT0yID/EVMRh0ptgvINDHWywEn2LFaDx+f7/OLoCXkG3X9bPZdJawSOjrywAkABy7kEWH2H0WBClMaZi3EL6XMmfB/fffv2nF4sLs6YmRYUEBvixpcHBwQmBkCHoWGBQcGhY1edbSRx55ZNnU+atXr75narQvnDA6K9Hb2ztt2QMP7N09F0Y472OfAO+nsVPY28wtW7bMxR4lsvX6HpW6vqKmQmGxogEMaVF3drQ0N9RUV1VUVtQ1dXWobA4GplP3Kvt0/ahODxOjmfRSqZhjM5lMVjZHLCVJcBNFwt7ehtKy8sqqm9+f7jCR8my9DbTdW1Zx6+rVq439vNDQUFmIVNtcX9vU2qWwWnCw2a6Sygp4NbS3K1RGocwMyPcaGFFRUQxD9/XA69e79Wixs62+rc3SW9ncqtT29SiVSh3WRWR7eYWEh0ZGRkT580wQi5rEgZGRkeFhYaHoFRwkC/CX8IRCEYuGHlhoNKASrZ3D9wL3Q0ri4+OlNFJZTnjRSFRvIyEhWCqVenn7iLk4rThbYIAhGe4bMm3lypWpflh1dXUfXyCS+ASGhoaE+PrbW1paDEEhiRCWpsXEJianTZ6anZeXFx+Eoy0eQZmLAhctygyhgztTqGbNyswKMKiba2rpBQUFydgcIpvDYdn7tRqdieWDqrZESsg+9NKhV1+fqkfj4PG5XIEsLCouLi4+PiExMTEmzIsTGxvAtcAFrAFc/1iBgC2UwGCvuVnPQgtfhSFhLKZgwMpvYwycBlbeAFZeBlZe8RtaefhdVm6GETCPRzNr0Cqcvv+qzY/MYvF/6wC4Ra9++uPJI0c+ePXZAiqV3cPkI+Rf9v/GTkEy0im4pM74L7sIb+QiXJJu/KYOQzLSYbhk6fjV7iN+VPfRrTWba2qau7VGY3V183/VmYxMBfKrPUv8qJ5FDOGrl5dULOTzp06N/i38TOyofsZdtpEG8Dos8Dqd4HWawOs0/YZeJ+Yur2PoV6KM5xaz82WxmP6LrsebkREWFRkWFhIUFBQcEZ2SkpKWlvF/HIH4FBGvHnrxr3/960uvvP7ee++9/c833nj94G8dlISP9D9lrU0tnZ1otaWys6OttbW5uey/7YQCkBPateje5evXr1++eO7s2bPzc/IK5q74bT2Rz0hPxBR7i3kMehGHyZfA2IrFZv56b5QyqjcqV1s7YVTU2NUHzsOo1Wo0it/MJcW6cUnYsfar1ytblGAayoaKy6dO/fTTMfmv9kwpo3omGW4Wwa37Udv+MLhlEe+3cE9Jo7qnJHt4TLCUA66HI/byT0lNTUsa8FElMP4xgY+qAR91C3zUrd/QR4XeHRmhlaI2swG9/ovOScAYMdP9f+uVhEWvvPrmm2+++so/nn/++X/81u5INtIdjZhf/y/7ISnyQ4sWgp4XLlq8atWqxb+tA5KNdEAj5vJ/teuJHdX1dPXDbfd3oR2Dtb+Zzwlz53NGPDL41c4mdlRnI9HU1dVpJOm5ubnpv4WXiR7Vy7h5MpHmzN+bBv4lzVlryc8CATtmabx28ssvv/zss8/O3GxCFWA+IfZ70enp6X7gfALCcTxFDILwTynmaLVKZU/H1e8PFTqLgu5FB+vFL2/29vaCQW2FP7TbfXx4IA/ZbJJMDwVfEpJe7CcS6XQGM1MyddGiRQBrbmogehi4jroO+AowjqrzOK7WwPBBpy72Y7Gqqipqu9UG0FZmZmYQ34Aer7Gps/f3I9fVbyVJK1rsJrQW+ymVe/bs3v3g7598+OGH+/v7vZLn7dixA9tIfb2uzgqX8gslSUXliRMnyhUDT7inO6swTndW9poOaAS6RYPP9/VFiPi7QQSj1hmOAgtvABab7eefB6DxdwMNRq0hDHSLD1oHiDDyd4MRRq0WDHQLlM32008ILH83YGHUwsBAt4jZbFu3ItT83aCGDVsDiHJyRzkz2sY6c3JL0b5UqwPuzYHq/JhMmJGQ80c4fylEZkpVL7XtWNne3q7EauErI/ykVCyGYYIE1QOXeslkMi9URZQ/wuFI0f5QpRnuzqxsvHXrViNWQ+wXgWhHGLFUodi2LY4NdsSOm7du3bp5KB+3CCQ3wjCo1nChNVxoDRdaI4TWCKE1TNQaaMEBJrpnuM8DTHRncDcHmOj66Jq43V7MRJdBp8bZ7AFdCeFsQjibEM7mC2fzRRWCqLP19TrgjM9x0RnNNTeMcNbnuOiszOh0Npz5OS46M5UadODs1JowLroCx7JqvvMqQ7vyfOFKvnAlX2ftBCqTOLoSmzSqm1R8f7jaQbTURoiuGG5s//G2uYUDVz2I1sEI0ZX72LJUfxkHFRw+iNauCKm2DaYGHLqLg0J0F2bb8pWR/umxw+5kaMXITGeGaFTJbQ7czRxUKQ/dzdZt0Nlt27p57dq1m/9Bdb//ePm55557GenDf2g5x9DSDjpa2kFH97wQOu8/UAtyUfmK3ztz+MEh3LUHTrpn147t27fvQCryH1pwMbT4goYWX4Sgdp79+cqVKz+fPXH8+PETm3aC0nduWoNeSF3+g2sk4I/og+8daI1ECEKjGT1f6G6uhv6r2oyDDeJmLRi1FqETCKwOLmnoG7a8Ab2XhyDIls4Alz1j6fZHH310O05N++O+0O/5IgjBwjG1muYdNWXKlGhvmnr4e/n/D+1sVMswW/kD+kf33dTCJ7GvnZYRHtqPY0udllFrsJZTpU7sdurpLmUZ81jW1VghpUfqwSx1JS9nlS5UId0PruQ3aNEGQxGCiz7wNBVdjs0uL0fw0KnHndRFJfBCcNCpZ5TUpakkYdB8FjSferxIXVuvX7cONRcC4uFPBrOdtWuyh+0bD3NlTdMHIjLR9Cj7jl6Hbko6nEOXB31hroyaSQjBDR39KLqyG1ADJMP5Hfl4LsyVbJ8IiDPDo3G0vMKfol42nHqXZ21hrkKo7AIDMajr62pqam6VIlx8XGTh8vgszFUkG1Ph9tmMVSuXLVu28UGEYbCLZNw+EZsFyM5yVi2dBcjOQlkR2Dwhk25HFTaR4TNGjGuMBMdsNmLo4aKaEKv7jOYRhhIsCkqYEh2ITA+iqX6GWgOjHY26F8WnWD3BodFIA5xXWUmIa7qttBEWFKzhGHvMdrZYLIa24AYxiJ4tEkv8/f0lmB/Bsdsd6Akl358Q+wlw+wjTCu5RakxWKiU99NaVTT0meGfqaSgtLW0AOAO9vHyU3d3desxup3NEXiMMLjjRl+fHZ5oVCNNtm+dGM0BBjOgCGCcUYEuIQMB13tKlS/PT2eykcC+OmzgwGlCMBhSjAcVoQDEaVdRwQXEkcnSEnFzigtZIhOgIIbnEBZWRSNAREnKJS+uhxSKXFsslLq2ElolcWuZsTaCzPkggtCbUmV1f3Fl1vrwcNeV8ae3169g1AveWHsAZtGdodKY8F2V/paMMGDnkn/HGylwUq+3PIX9H4GzGAczxrDh6454NG1Ayi52B/vffj20l8En7DuA26TPiHmvgzZvovv3pjZWVWBXB4NUBXsU0v35HMW+hN23vXpR5gr00B3uBvm8f9hTBeOM0DA+LaaXSwRX3eXDHS5x5JdDOyHvQzsiRd9zQ2NUAnQVaWka9amrqhhpBeLkrHT9qy7wbfr5SAr3XzauXTp48eebCxYuXKrGh1hZ5uaskHzkSAl60XxgIOywKDXpS0lOTE0OHUCFYbkrKR45EiqdpM/F4PMyoGphsVqv7h8DzA/Awd+XlXQD127dv+rJ1+WlpaTPzFoDelxcU5OfPG8LYDzDGRq82PzzO4wLu3IFewWLB9BDVodEi1gJvRPDCgofivANMdAPYMuIAdRbvYX0LqgDpDWfhobMI1Hq9EE5VTNUj4aHzmRvOnEEnLR6o1ovOLImYM4cHp3d+C12jj19WdhMu9CxGK+aha1m0ixYthwsWD1UjSYerpjurkWQ4d9MGoKu2tfe2AaRNzc5XU1MLdoOQsxQ2kxk8VRGHtBihp1EqFfIAdEuWjnYljDB7OlthWFvf3NLSqsN64Ptu9rkFUEgECnxBZ76y8ISEhKjY6MhwH8wXvu9mq1oAakz5iS/PlZeXXz37/eeff37khx+OHz8NYye5l7sNZwzU2D/lYa9ib2EHafv27VuI7ccOYC86cw0fwv4Kx0FUIHZ/DnYOTuJuK9lQFcXh+GQM4mMy09BWcZTriHrp9QbgSO7WhNgIII5eZykSmvu10An0oFkEHAiUuzUSCiANz8YE0TK5aIemt5+Pl4QB9Mrd2QQFEEPR0Af9j0XbCQbe0tXV3a0G7uVe7vQfgAAKn56TBLYXlTgJJR5ITk5KSgNtyL3cCf2uqDHKWTtPSk0UQg/F5lBZ3vhYJMR7arVGZ0ATfDqNWi5FrS+rB49bV3bt1KlT17Dr8BWJhMNE82J0CCbkUtTgiFCIGsIiopAesFj4Sm+v3tAPEUG/Qd87EDWevARhwqWT33z44YffYO/BV4KCxCwb9FM2ljhITml83/YVK1Zs31eAPePMJv0McPwGfLWpSU/zio6O9qLpm+R3WZy30+K4cNfGvj4IO9QQqNUoumpQSKZQKCE6wkrhoxjfiDQ5F2WGk0oDArAE+Kiiw9gthyCoslIkghF5FXy0LMo3V85tabn33vb21auxGfBRg19k98B1Fzur+qKVnEvhukvR/kQLylFA03TVl964ce30iW8/+uijf//73x8dPQt9940bN2439KD5k/eJovDERH+U4c7HR4imegU4LqWbzWauH1gAA96Iw9BsCir/e/mrQ6upFOV7yd+Ri8kM0sehpo4+dJB+8MmSgQkF8nF0sF79+gY12+JoIcB7+6MJBa+ICAmaV5hGklNCi5hRBSQ5M7QID5lZjItEBBdnBUZOWrF02YqH5oOJvYEdpY6T1PEu9jfhU5s2bYJR0fwp4WgMk4OdhROrVGj+QdvUhCYeOq/heFlXEbPtMo7f6CrCFaXFsVT3XVZVVV1H1Ztubmtr8/PzEzrUIGzQCdPUheZsuon9kXa7Wo02Shv7+03wH6udJJmypKQkH4wk+eiN2Fgcq1Ru3rxly7aHH9m9c9eeXQ8/QCVxUkricwbeiONz0ZzOSjgdmuvSwY06FAoUlQrZJKmthqFdA5zXiN5U6Qe8ZgowOA0YTHGd8cKtraVou+zRo0ev1XQgxr4litiDszsEK0Uy9nzX8x9fG5zvKmIPTukQrGGzXVarA+MMzuYUZIYMzHYVof9Q8zgEy2Wuq0OhhmvCaFGCaRBudmI/FxAzDkzfQB/rc2eua+vWLVv3DM7ciGMLnHNdYN63b5uoWRuCNWKuC3nHmc5qmtMAh2mDc1134VBz7XKVeywOjjbJNYDF2fdfOz0aHgcD3eIxe+OebPeYHAx0iwlb2KkcDRdqriTQLTY825qFo+EzNJuSBRjlA0ZZgFEOYJQDGIW6xehKaXWzpvXCD+5xojYZjYKVaACrZ7443X3rs3NvjYYXtYEt1C1mu5ZnJ+ZmL1viHjdqY1qoW+w6u/jCJgXfxxU/jhO/oV1noW5BXL3Cbk2eFhrvCiRncHrwzpayO7uENwOaKwHNNc4qUQlu0bxdVn8bfOfNEufr5s3SkcAGOoHF3HXZowAtGwD6xvEfTl+8ePHUiWMQjHz93dGjxy65Yh44OA3rroNPcMtBYsHU7GnTpmXnL4CPFi9bsmjBnJF0iAanaN3EAAlu2ZEae0ipVMp2oMLl6v5+g8HmSlTgIFHuAoUEt5y5ixxc6AscpG/UaGIRMLkFmFwETC4BJpcAkzFumTx38cqZUz/8CD/DpydOY0eGs+g3yCIEmWKJRMJ2GAwOnMUZjUHBAIMvvvnJ0X//Sz7X2f8NfOFJqjbc5uE0+g3SqNNpOnt6euov83hXa5Q6eYxbCjMXzUybnbsQfkZJeWageutD9PkN0icQCAN8fHwCYzMyYoIkAnmMW+7EEp/gsKhI+Bk9NGNgjpG8+Q3yRqcz62tqatq1bLbeTNLlMW45mxLuG+EnYcDP8On9y7H1I/nyG+TLbDZNz8nJyYz4/PNgCCwGuNrmzLKEaursAK52oH2cbrn6/vTV66XllQ0d3U1N1aVXz587c+LYV5988vVX3440vohB2sZIYTwKg+EDDH75zYkLV29X1rW196saa6tLL/109JvPP/jg0L/+42qKEYMcjpGKON0tndPn5GVnz5kze3pWZmZGQmxSWsbkSZlTp86eNWOkYUYMMjtGguF0tyR7SeDXOGnWqKhi3NB6qV9QRASdKXS104hBvsdIHZzulvq8OVMnpSQmxMXFma1eSSmTs2bm5OTl5e97dI2r1UYMqmCMlMBDWZjWOrMpFjjHjREDOTZ0XS21pSjZT21LzdWzZ89erWlRmAEMswK7QIQxmTQMp5HIHdJwjMbk85lADjTTaIefmXw599CnKJ1P9aeHiAJyFTmNOlbhxKG55F/INWQ2dawh/8I5RCXwKf8c6E4miBCDjuRzB7YX6AyYxaLRkCIRA+UOJTUaizxierI/UO+fPL1g3c6dO9cVTJ+35aGHHtoyb3qCF3zLKwHbizLqkTidBvdDo+MkidlsdCZuJ2GMTdpxJt0mjzBbqZl6q9mohWtrjWZmAAwpAphmVc3NmzdrVFgfUcQjHXaUF9pmd5CEuLS0TuMQhEMsGi5waOpK5REiuhYiWi1dJEvOyspKlolM5WfOnCk3iaLnbdy4cV40FgI3gp4YMKncrmh35dy5U/zp6tLTp0+Xqun+U5wZmBY4+8L5wMFC4GAR8qDjcdBZXd7uCQ8HPOWBO8jD4aIc8KDveETHgZjx6EhZtC7NA0oOxIxHCUvQ0XMXLV6utGAQ5cWMx4ymZVYGYid8bHawO3kRVgBDu4Gh5c6R3ioUrYzHUG9HQ8Wlsj6HJywN7Hj3kCneIFOX3/kbygr/R/rh//3KI7qohAsJ41EWmJa7Jjs3fZIHtBWjh4IJ41En4Hd1eHO7Gj2i72DCePQ1t2XN5JEBIs8oHHoCWQwsvuqsXLEPWHwCWEwaj8UNG7Zs2bJhw8a1a9duXEjuIndSycQfgP/uIneT26lj937geNp4HI++S91D3tmDvC8k+aSY9KYOMbxnwXnQwRJExkGPFBcZEhgYGDKgiJixFTHqnvSk8VSC5lKUCoWis7NTsRB7BtA9QB3F8P4ZwBgdz+xHGooZW0OjbkHPGk9XrSq9Xq9qRTmgqsSB4eHhgWIK1Lt0Fueqs1H3nGeNJ76UQLjJwJTsVatWZeuar1y50qxjAtpMJMYpY4tx7JpeqBfY4OwFFjmzXY3bC9Q3qnt+015AMKix5/529JPfqAvIzw2I/k26ACVb0DF+z4xG+vJx+4DknqYZHvTQxJ1nxkuc45zBHMce9QGln31ys/nChWZPOHrOU44kgxz9+60X3z9y5N9fesTTc+P6/czCPakzEpZM8YCr58b1+Qxee7c0kWbwyOdTkzPj+n2fqFXzb7d6cT31+4MzN4i5bU7mPLes+k6U1DJqPNYGVgpMNMb68stc8k/kn/ZTxEWMTRy18GBcI0ObThFxEWMTRy1ZGNfQqAxyrsR5uxJHLXQY19Dq6nJyEGMRYzM2bH3ENmeNu/uclV/vA77SxuPr52uXL1++VXfjMvz2xnVgLmY85lz3SnvIoXCQQ3f7o4HNyLHZHLnyIm08WjfeDx/veWj+iq0wILwXEZw0NsEuazPSxqNaSwsICJBwjQboSpV3B9i+rqS7rNxIG4/+8L5r165dvRzg7+PjE56GhJA0thBcFnZQitjszEu2w5lHYRMoImU8RYjEZrzdWFNpV0pQDJ40nh74ErUxdTYPz421Gz1WA39QDXptyblCcgk5lYwmE8gMspB2vHRAEAljC0LfVl/ONbBkDt+WLnn0eHro7qaJnirAXsDewF7DDmFyuoyBRJEwtigY4pBYi4iu52qD/eQp40mixUHrZfSRbTc7rrfeJYjAu9y3qq9aV6d0tOKtxSnjqSGQzJ1z46LDv6w8dw3SQsLYWrBw199z8ie+7f3Pp+QNKOFpUMKLoIQ/gBKeAiX8AZQwczwlXLheVdPQ0tajM6hUHQ1VpSU3L58/eezYTyfPgC6yxtPFGDNbnqokdFAlL7z8zw8++eboiXPny679dPz7r/7z1qsvPy+X55JPkE9Tk5agl2lj62WMya+Z46knPnVSWlpqakp8QnR0hMwvKCwiKjI6NjYlORGJaNrYIhpjTmzmeJKSigVcBuYwqZVUITcOmy/xhYCdxhDcJbAEV4GNMU82czy9xUcHB3hLxHCjjc0mqbcsLCI2Nj4+4d61s5D6po2tvvHqaaEK1Ned+QheBi2+ifbj9PcbURb4/n6tqqurS6XV9rY3NTW192r1driIXV9y4xbcftm1CzdKrlIvjeark6cvlVbUtra3tzdVcSrLrvx84UwZdo7IBmUCIxhaUYbWnt6lTCZ4YTulXIzNYdFwKimIiInKk4m5GGKOZTeqjUw55+8fI51Wffz3JeSfyRVOoa6A94fuHmICxuWf73KoYWCZ6UyQPJmUgNRaHN853h46wNFFO35yfOr40HHMUeVQkXQyjpxBHfEk7uhwlDg+gu8ddnzpuLk/x/EKilD1JI+DimWJsL7+u5RNROn6GF4i+D2HbbI4SCq1CAOVNOJwHb2ouJaDG8Ip5q7KCwOVh+euvL8A+wf2KXX8Q/LA9MINu3fv3lA4PcmPx+P5JeVhJ7D3MIL26KOPboVR6bvYF9gNzIwL7xwi7BXsFXwSLsG9cCbWi7Vg5XeKbR3FbmEdWD8uxYPxQJyLNe7Pwf1RWOwAzaD1JX2kgDdgIjaKWBsyEQgXGRazHS2K0+p1fTqTicfjo4y+HBrJkLKhizUbdZbibIUGPTO3axTd7a2tre3dCi1a7ObQKlorbty4UdHaqUGFD/S96sYBkVwrKaGzGTZ1Z2MZmFNFC6dDbbeVltdht8cbDBWhHNro9ziDweaLhrKZyGj96qby8nIlU8gqntTR0QF2BP+2VsNn1a0iS/XFixerLaLI/DVr1uRHlla3wO/hTpur0DP927cVinxqEmQ7+RjvpX+fqOvt7W04fviZXPI+civj7MVL2IlhQyuJlN5vGDAvze1z587d1lBDqyiLlcHjwe85dPCwOrXaaLQoS3766afr3TZB+oIFC5IlNrpzBm4e2No6sLV7wNbmga3NQys70ZMLkqlTdTUij9DZq3I47HZV0+3bt1tV+iJaP3aLwPSoTh9KT4NKXaHiYH0mtIUJxx0oETTGlg48nlC2/vT+iwXkLmetq/vZL79/rlvV2/vu8IpXh8/09PScoipeYTQiJDraF4DlSRg2B6oSWVlJ0+u1DG+BQMAjNXp5JJI2R+wXEJm9du3a2VGhAVIxm51M1bxKCuFyuWHYNgJzEPAWRyXxbDYTyu/T09DgoNFwmxUsjoHTaPJIqt7V9Zr6gXJXNZU1N26XlWlwb29vUtNaWlragjUTQi+7HblEVJcdhFAkFtFoMNLqtKOHDT72rlJ5JFpVc9/GXY88uB1VY9yze9uWzTt2RHOBdF70nG3btmVjeYSQzWZrNAz4F2IwBl4klkRGsufOjWO3gVttY8c5Z6xHZcNO095hoxck6YYNvd4+jA0N2MTdbPR2nL6LjR712GzMnh06jA19XZ0bNlgCnyE2xEK3bGg0pmFsdFdXu2GjvKTuDhvVJeV3sYF5EdAxkkNsSLlcN2xs37JniI37tt7FBsYmeFyucIgNr7g4N2wscM5MLAA25gMb84GNqPLystu1HW09BhQZKdqbr6FJsqr2+lu3bjW0q4GBPuDDS28y9eqBBgbKlQ4f8gUCQgCEsDFUEM6B41J5AZUUfTW5jnyI97/vfI36kboj7xSjGksDWdKBDfw9+WBBDeLwYEGNPMKLVlnZbQc0HTaGhAdo+kZHEwLgRUOiQq7eDK1eHrVhw/rVC+cWZMeATw/JmJq7atPmzatWTc1fv3594bSBohrbCC+HRtOrsw2QgqwFY7EIgQNNVjKAGasNp8mjhEKRl4jNYzOYVDkhpi+VHl1LSiQSh7YFHGsTUMPwotEkwiIZeE0SEaRRKOx24KbLyU1nqTyqoaGhqbW5tqYBfF57R1dnO5UaPZQOHTkjdDoEFllADoMtkYg5RTKcgdhhs5k6tOTobnaSgJ0kYCcJ2EkBdlKAHV+LxeEgmbhB1d1Q3dqp62egJUYtRJE4NFSMURVaTEaIPMiIYl8tRFTKttsnv/j47ddffuXt986ihUUvwFclEgGDKnFHojgwMqvYF7pREuf4J05NDYuelpk1OwrNbabCVzkcJgJF7BMUADql04p90UPMypJbtc2tKk13e21NCVpSpCD2S+12qZSLoyXy1tS0jIyMOEGxr1K5bt26NSuXLV21cXVe/owpc9GCogXwZTb7woVWFGc4zG/886233vry4+I7OwnTnDsJp0Cbp0CbZe7abOtVWNy2+6DMXbupRUTu2n5Q5q7tobPnh7tt/0GZu/bb6fUto2BATVDJ3OFgUc6dOQoWQzNQ05zrzKaN3Pt0Nx49Oivdi9lZ6xYTauVQiDtc7iwYcocNtVooxB0+8yaF8yPDM9LcYkStFQpxh1N9A06vaMJ5CCvvu7EaWikU4g6wwjxVT3CcKACB5n03aC7rhNCTtxXOJ2+rnLOu8e6QM1voZgiM+w3OF8ThCMQoVxDdrhKKcQcqW9dnBgxNeg04ZUWvWq0hEL5Rrvi6XRkU4w5vJcuEo53DTIGvr6/YSyISEAh6f1fo3a0LinfHhLu1wkBKjBtS3K0KinfHj7tFQUBVjBuqRl0ThGoK/cWlptBknclmtzFYFqUS1XLt7ulGNcVVapT/xKjpbm6orlMoURbE/p6mho6O5ubmLqyekEHfxKSzWHRUrdRhopaH2h04l8eiy72NVj212pYNP7KYNJzJwnE57/AX5XqTuufWkQ+g79pMHbvIJ4X7jx49dux8LVr7c/rzf+WTD0P0+hBEr69/fQkGXs23L764P5+8f6D4L47m8lYTGQwgmssi0SYqq4XGQZdhszhcDouFQ6PZdjrNZDLB/YES6KTdqDMx5JMzk/yAT7Z/XGrhpk2b1q1YHhYWHh4agOoDhcelzl+0ccX0lEgh6qv8CuYvXbZsWR62jsiAkQQLM1lNEA6hyukGvdVqAWnCqB4NrC08Ohs6TAztOmSSNDqHz7LJJ/fo7HTGjWu1vXobnI/mcHC5MPBB4YJNreqsqRfxrVq0H6tB0a9uRXux2rAGgkiFWEbfUVNVVaWwC4OCg9AWLz8hV8iFkMfGYUpQhr4AtlWjUWt1+r4+S/HkIA4MZ7duWZQeaoaz1bYrzGaTyaCBoBkLSczfsF6p80nI3rp164ZVSzOno31G00EwRKrdYnN4p4GIwrkOrRIlre7uVmn7LAxAk2d09FRUVCgdLImvrywgQMxhFd/JmnnAmWn5UVDOo6CcaRNXjrG7vX8c9fi7Uw96/SYKYj77/Rt/O0qpaMrEVQS3S8qnTVxJVIf3i9R0YNrE1WQmqxuQoiZPUFEYqVJB8yYuK7597SIkrckTlBZGJiSQ8ju1Ll921rr8w+D84cT11dFrcAixlopxNBY0msZwGPP9Gp0VDuqMfJb8I/uDo42X3/vhH5Tasn6Z2kijkZTPnLji7oQQv0h1xSjGmDlx5VXX2MlbdXYWUt+0iapPRZIoI6xKPnPiClyz0mFLmR6WgFQ4baIqTCBBhxZLwoAS3wIlfgtKfBeU+DYo8W00ezhxJTarcRtGN1NzOV06YWerQtmqVbVCPNAwjjgj3YlzjNKsv4VbDHr2k89/OP3dF4ffPPQivF46890n3/34wSsHn3322dcp+WZPXL4j67diIwq4Zk9c0cFps2YXFMzImJSZmTlrmjAkKikmYHJaUlxcXBSIPHviIh9Z6RUbUeo1+xd4XUOfpU+l0mIwXrb2Ckm8vd2i6Onp6urSIXOYM1FzGKMibPbEDSQ9EC3mEXpJoTVMhjA6eFZeVkxs5pIlS2Ygm5kzUZsZo3AsZUUvghX9B6zoJecc/Mu/zIo6u7SdINZWqpZsG6utrbW1fRzziXVnPu4GF7+F3fg8e/6rL4/++OOP3339+fvvv//hp5999vnJX2owI8crjIEByy+wFH6MfzjIKzwahhOZqayMtJSkMDCR6RM3ETfjnV9gGXxtuxmMAjehvfDdLJTiyYBMInuiJuE6VqKhwdIvMIaIrNxkuFh00uQ5c+bMYKWkJCenIyvInqgVuA60aHdGWtucT8ZRhYEtoP8taK2EoqdXozGqexrhPE0qVVN5aWlpdVMttBbt8jT3VFcg3Ex8xdWrV8vbsEtEACpHih5r4Az0OAl3oI2xfQBFOOEVHx8uRivy6JidATwii5BzvjldWll58cQXf8sbWALJeOXmzW+eyxtIxSJ8/bt2tRolcNPUnjtx2Pkp/fCPJ1/OJx+kjj/haHPTdoLws6IyqdDBcMD58EUCDk/E5XLjIwipzJeDCn0yWRJvoUjI47JpxWkp8THBwYkZsxbu3r07VyRKWrhixYo5KagqoUgkEocmxM+aP39+akZG7vr16+dnYvfB+Zl8XyFaj89gYHi/TRLoxQI30mslxCyOWITSJwlpqME0/Nm0mur6urqq2mY9fMPc2qpH9WpJdT+Ms9GTNA6m76iurq678WMJdK611ajCoh/OAOd++3aXmS2TaTQmOtc7MTExlkXQcRqTWcQDII16g8lutTmK09asXrJyZWFGNBtctSAnJ4YJqMombR3YvahoIKcU3nvvvfNj4mYvX7581RpsLjo9NnV2fn5+JK/v+nUut7es9PK3337b0E7QL1+4UFMEfTRLJGHx+Wyec/SUCWrIBDVkghomgRomoV3OrZ29vb19XV0Oslep6QNWOlsbejpR3lgGek7VR4iNRpWZL6XTNRZAik3i8oBzt1paWqoOH7ZaDV0NtY2NjWXnv33jnW+xvxPAlVUpJMRcrj/f2AM2ZgZZ9ZMMeUCgH5BQkJQEmIojk+BMAi9ZanwYNpVAj6oxGrqOjREQwuNRM7h83CYPMKHd9M319TSamG01Aq5tnZ21rWpktd52c5jdHhcnYahajcbeNohvqvDigOxAsILYbdvMZrZEzHv88cf3/W7P5vVzsVXwF0FTytjsM2f4dJTPbtWyxYsX5zucz49mDssMMhOQmTkGMigJzB1wvF3BMbPZZnnwKAApFN9/PwSStytIbLhrefAoQIGnCBgCy9sVLAeN5pAHjwKYt3d5OQItwB1omLdC4S0PHgU5KqcXoBfgDj1M7+2tH/A09wKC9zortK8HBNej1dOjICiRBkrgPgVC50sgEA0hGumKqCQyNCwSrUOIjQkP8fHx8fKSyJNGAdhdN3gH70hXvPs7ujtbWpqgc6hvaW3v6Ojq6pcnjQK/u117d9iIdGUjUCKQ+AYFh4WFBfpIRKGhsoBAedIo5JQe+/QUeOBLP3378ccff/ndd0eP/oi4inPLVd/5hrpbl04eOXLk5NXbzQqI7PrkSaNQt/LBxzcvWLBgzaade/fufWjLls2btyEm49wyyZvuK5FFp0ATU2KjQjlsNmtwvR2ardsDzO4BZncDs7tRLbdRmB053Bgx2rhDcKgrwWMMKiaNwvPFK+V1pT+f/P6bT+H1WX3pxdKq01998N577w3zQaGudI8cCYwYCEwahXXf+ClTZ8+enJiUkpIyJd0vODpUmhwfHR4eHjxEfqgr+SMj+hEB/aRRNGDQqY1qhaLXDn2LqcfmaGkxdnZ1QZynQVKIciuFMSLzSaMoYmo4h8VkeAf4e3t783mJkXn3ZCclz1i1alUOEkaUW2GMEWJjIyx/vQeWPzKQHoijR7d8d+HyaJbfdO3qLQjhSq9fOXXq1LlLly9fqR7D8t3NyY9m+YxQiQzkIgtBqbHjEpGIhsj3cyXfTaw6muFzelsMgKgDxhlNTR0wBFHpRjd8dxP0oxl+XPa8SaGhoYkZWQUFBTmTJ0+aNHV0wx91lh5lP5jhmv3g+PHvvjvyQ2mrhqoX4+iquXHs2DFqz2dJiYJGo3U1EazbGmhV9+3iQvJ3cOyD4wnyaf6rH/2s0+k0Gk3ZsVfyyMfQsX9gB6dSaUApIs4RrJIWGEm1lhT7LViwadO965bdEwlDAfidT/RMiHqozZhmMwaXjp9FsKQSCEiF0mKgICYmLtLfG8VrEG2p7MKEhATMTsD/aDDMKeJzaHY7rRt8rIZml/vt3WuD8Z++vQNsEwLFxVMDUBa8jehxOi0zU1zE13az2SHpixYtmhTCHpYfJtuZAWEqYDEVZUBwiwVV09gtHgfHxYMxLAvCXaAcDHQLSmBWYbB7YA4GugVG5NOrGwaOaDg4aHtcoFt8/Lnb1w3DSDQcI2x4DoR5zhwIM5zPMUPdonSn6qtbpKhHkuOixek+/cUzb579tHQ0xKgHoqFuUWMHp+Ynp4aEuUeOqsMa6hY9H29Nb5BU0zkGggdD3SLI4W/dlhGbPWUMFIf2oj3krKg7fNwW7hZJD6uljsA5zIkzNuqes9HBXzIAPplMppOZ1JEO7+PIGOqIE+Tfs3Dhwnvy58ycOXOOKzFiJzGjlzpNdctWZSWMrNCyyLKyysce3bdv36OPPQYhzWMj2RM72Ru9aGmqW0p7+lGf0NNUW1vb5B8ZHx8f6S+AIaNgGMVRwykedXNYqlveV+XCmC931a4//vGPuwI5ACInMDk3Nzd5mA6ihutgnFqjwz3RnVwsbpVBVYP8pZ7osy8qr07QE6WnMqUT8kR6sU/vaG6a2qXl3hWt9GLfN5q7HtqPNcWZj2XKsDUV7n3RxcPvnK84frzCPVbPj++HLv701fmysoslo+H1vHsfFDFpdVCc38xI95g9797/CLxUWtkknmMM/0MtRnHvg2Yu+ONeCy8rfUwfNOjNpwKCBYDg1PGVhmpRjkCPP+hhqP1P48utpOTtt13h4w96C2qHk3vNxcBrJH78QS9AbWVyL7zw8JaWYQCKhwNI7VpyLzw6fffuYciJhyM3bH/SAmc8vMC5Xx9lPIl2i9vb77755pv/+eq9N99+++33Do9EUDiIoMs+pHGxZL74Kpzu+Rzyf9jPvQbn/8fzrsAKBoEdudko2i3Ck3NmzZqVnR+eACPDqRkjsfYdxNplV1G0W9SlkdOnT09P8PeDMbyAPwx/6XD8XTYQRbhl4vFCGFmHBj34AHzyeA5WtH8YLbLhtLjbLYSqrj7gHK9sdvatqW75qaiqqamprii7detWmfNf9Emle09RRHNgtCIx9DcYlUd6ICU0bXzGAo6dOHPmzPFjR1DKw2Pfwr/fHjsOn5wYzaE4r0TH7JjDYcOYaNsJZnOM0nvGREdERMTExAIFcdS/sdQn0e79ThFKe10EjoRehBqBLoUXx7slFOf7+fnxcJQf0ojTYPhDw3H0R6P0m2iyn8pubbTR1Gqd0QptsRp16lH6zalpcXFxqVNn5efnz5oyZfLkydAPgganjNZvstlSWTh0tREyKdvfH8b5QUFBgbIAf6dVSoF1f2BdOjx7dI+dZzC0KGxYJ1GE2+3PMr6zKj86kks+SN6Hfwzob4SPudxnuVFMXmza0qVpMIoqwn19n+X60i92tDGvn8BKiP1Mu72jw24v5taY709NVG3+C7YWPmSzMzIGc7rHwLUnwbVj4NoxcO14lFGx3s7u7aoy9jSdv913q6Pbjk7FBeFALESSEBrhgYHFzBNW1efHn7mH3EtOJ+8h+Q4LOZVcTj5LPopuz9EPf+FwoOVuZjOEO3hFRbE0mYknhuUlL89/8IH5S1OzA7HfUadFm5NQNVYC5/OLpTJ6qYKUXK/pE9eeF+l7bsOwcz94WZPJarVYrFYCF4uLeRrzzjlpoocX5MqezsGKmdJZM3dhj8P3mDCaZTKFQiaTwF97baCFqc6oJBVamOrMn+nr2kJVY22PaytZgYFotxBNPlZTn8kld5H34vK7m8yqqMBQunW5r2u7qcQiLm1n8flI7Va5rysANlpdsysILLEYcyiVDrkLElyERJBw90ZXNFivvYYxUlMHc+eg/nOBs/9EY8YstMrVFRO9sq3ueo2J4YoLz4kLzWIZCxvax5/JC8hH4cMt5DPkI/grd0PEc0LkYLEccpkrTHeSebhAxXNCZW1stMplrnDR8IY6LtlQ7goZzwkZRYkLbEIEm0C8Y9eUxPwsV+h4TugYkyc7d0/tAPQece7pXOOcVQpyRe+++3bu3Hnffds2bdq0bSH5ENjtQJ6vB+H9w+T91PHwfldsAwFbHLdTNWzZOKpWZKPes+CzQaxX3401+bFD7dA5jNShg/cKRxd1KAQsvkgk4rNwaDZ+NwNsYMBqtTnIIg5V1siK1vzTSYfNKg9y5cPDtBkubAUCW+jUqGIcuhL0CtR7C1xKnuDKXnUrXKC1+saVK1duMCXgwyVMS39/v8WVzUBgk8m0GzUoqZzRAa7fcee9K7shiN11hampqYXrHvjLX/7yQKhAr9cLQtMLCwvTXdkOBLZ1OrZ/TFZWVow/B/pDzp338jv+ZM54/qS1vV87nj9Z6I5H6I4fpf3zhYm4EypJhcfupMVOq3PrTsA43LqTtX78nW7dCRiF/E4fkj6sD4lBfUh7vw4X03AdS2dSGGgOAaYl9uMWksCZ4OjpMBpy2IqhF2N+8Kmt8903c8h5NP1H7+WCr1hEf/NwB3Rw+fB9Fk7gVug97BYCevFi6YL0VLp36vR7BVHA5cxJgdgm+JINTkpnoi8QuM1RLLV2GWmnSs59b+nrNB+7UPITdhz6PH+23d7TTzD1XXa7wKdYykkUW/fMve8JnSyJ//SGebuxvfClmj42O0ZMMH1j2WxVXfFQFvZwaF04tC4QWgckYnydqpnEWrpulFqAZZqDD/2SQEBgDjnr6luf2kxfQ0s2kqvwM9COZQSN1g+3p9cTGE3Omjw/m0HLuicX248V42FYDnaQoNlV8PcmE8Qmcr7NwsGvaRXCigtYJcHl6MLs9tpau50j5xt0Buvv0+OqFz2FzYPfyC6y2QX5bPZgtvjQYbnvIwazxQ/dp6aloXfkvR4Yca/MM85lnyPu98CI+2WGZa7cMtX1ng+Ih+6ZWlhZSQiG7hvN24mHbp1pXD4Xbl8wdPtDuapinXsvkp06SoAWeA+1wKjubCypt7JHtoLKPzWiJfQzjUc/yCH/yPj794cvuTaIyiM1olHcsIip92yae8+0LNeGUSmivIcaRzpqq1m22lt3NfCg91ADDeYly8J8UqLuauTQDNo6aOcmaOcmaOcCaOcC5EGG2rljx549e3bs2Ll169adC8EfPDKQGxn+i6q+PUQde/cPRyHAMeps2SAySxAy5BkykowlE6kjFt6HkEHUESLImpObmzsnKzMjIyNzJGYoTh5lSmwEjoIwrRbcpVZL1ZBZiD2PPYe9QB3Pwfvnsf+lDpTvfBjIHPuoM2JRQ8BXNEGf01Rx9eLFi1dpQm9vbyHN2NfXZwQiIoaIGHXyK2qInby0gICAtLxV999//yqOoaGhwcAJTEtLCwS2IobYGmeea7ilRQJ/kSMtraPLpB/b0t774PqZ8SxtwT1hSWNZWqOFrB7pIah5qWGmlov1Lx3pKagpqIE2hEAbEqENIdCGkMEKSzZbXZPV2tpKd1RVYWXEfjrNodMRdAdNKCzGDYZccje5GVcqc9FCMFyhQa3ZuD+HXAHfRN8hqO8XC7nc7Q+KxTt2CJg7d2KPwC/tDOhk6HQ7i1UsZDAiArjcjo7r1RoNpodupSswOdlu9+ssLS0W6nSH/93WFhy8Y2NYGOYFv5x+5scf2exrMxcudPqICKePiBje1wy/b3Vzvcrl3g+Odu+MI68c/BpzbcBB6fAGUMH6yEYclA5vBEfUpXJpCDXNJR3emJ76ackuDRqazUqANk2HNiU4I4pU5A+Gt6mho9fANNXccGkX9RDBTdvyqJKQT7Lf+brm3FvfvnBXA6lnGL7DG7kmNy0wIy1njktDqY1UvsMb29UtEDX3CHxRg/lDDR7aOOU7vNVTJzfUCQNILmo5f6jlQxulsLtm8wafYMmGt1+hglOrUODZ2TmEgQS1CBtR9WY0ogUffvTll19+9OF/3nnnnf8Mx0OCzoSNqH4jGw5M1nRwiNOzZoBznDEEjgSBg42oeyMbjpKF7evry7aompqaKGn4DUNqRMUb2XC0eIqKigoFL3HmzJmJCDG/YYi5qXXjduTeYmfrO6uMHbXnb6uud3XS7hq5i0TFzKNW1YcnqCHbbHIxFX7OJNdQw9kP3IzcW1qKpelMdmZE/uTleQ89umhhRn4M9iR1WhRqsljotBZLsdSHXtqGSa43GsW1V7z7VDfuGrkHBRXzlOYtmSnCXQvyAh7PwSDSypq2AXuICi5RYImmhgj8o4+KR1TziRrmZyWALlXIp0/V3d3VocA6CTqOk1aCY8G5zjVgkrqegV5I0VR98/K1Cuw0QWcw7Ab4jhVtxEVrviRsgAIt2GPzJLLwIDEWT9BsNlYRxwZfZXDQEi9JH22gjk99W1dHV68G6yYI3KAm2G0N5eXlFVV4sSTbX4l2Q+/Ys2PbvWuW5mMr4BsBUwj2qiWLFy+el+8YytWf4oxrEqEdyci+Xdohg7Fe4J3GCO40BpUtKvZ1adBA8ZXBVgnutApDtVh8XVoWlr54sWyweYI7zRs4sUsTa/UnT35/VzvlEDb5ujRV1ZadXXBXewmqrMvIilYznevW8tFOe5dWUwmHqWwsYMkhzsb73Gl8d7dChWqdalSKbnmwCwiXS6H7Lrl8+siRI6exb51Y+NzBwt9fLODByJknEPvLg10wSUmMjo5OSkmDfj0Nyx6AxucONJ2dKnWv0WjsVas65cEuEF2raG5urrh25ujRo2ewUwNI+Qwihfn782kmAMpE4/vLXTF7YsfKlSt3PFGAPYu9Rh3PQjB0aABCn0EIsc5OKxcVjpBxrZ0D46tkQDLZuQ87yVn1xMcFSZFIJnMjnx6ruUfu44KcVqtQuFEP38r2lfu4IOXtDaPWu8TTYxU45D4uyNhs39/RjuAOIgX+3ClyHxckWltXrhwUj+BOy0/oyIvyu1aDZkKLM9GaRwZjoMUOh82lEhpdq+tuJCQ9vTq0ImhYfxDAtQ6W9BK7VECjM+n9LYSkusuC4yP8f4CZOVDii27pd6l8Rg8Lj88gJGFeNNvIqmcBWuOdgmcuFc/89H0Ovt1OYwul0hG+P0BkHSgBtmGmv0ulM7/MzARfNjtCJuGw3Xj+YEAnGNAJBnSCAZ1gQEcwDJ07iDAoROSCYSjcaTmDarlcMKy1d1rIoFooFwxrFbSEN6wlcsGwu4c75g2741GeNa1Ez5qMRqtW0dzcpVT3w+0aHQ61urm5ra2lvaOjo72lEb2g2xAwTNSzDug3LCSdgPZgRpdCkF4lJd9+9J83D7349ifHr1+/XmKxHDpUSP4PHH+g6mr+kVZUVDSX/CNVXnNgWcAfIFTdQ+ARfnIWNacmjiQwLvzPpX5kdHx8+tSsRasWF2SmRkRExLNYy5ffd9+OHdu3bdiwYdv2HQ8++OAO7HEY3FFzoLimv7+/p4GgqwwGlUuZyWgez6Dp06g6mhrrqqqqeDRaY6NKdeLE7SawxabbF3/44YeL2BkC9/UuYjtItJY/xJ/wjrPb4zDXWpQ+NTX68OiEhP+PvfeAj6O69sfvzGzvRVrtqvdmWbZkW7JcZMkV27iAaaGFJIS8wCOBlPd4PAgajYwhQAqpLy+FhJIYEjAkAQLEGBs3XNS7rLJqq+29Tvmdu1obYUNC+OT3frz/3zOSVttm7j3n3HPO995zz1m6cv2Wq6++eigara42mZoxvJLuWZaXl7dsz9fXozZ8kl9H99FEu52RkJ0nT57st9PGd6TSd9DFhSvRhepbK1LVpZacj7v+UC5NTKDhD+XMvg/jxQbhW/PnfPW5S4i+z/whZAbEext4WR9G2n3mjyDmJQSkMAH3fRjBzOZm9D30vRb0wAfpQ2H67Junx9dSuxIeAHpcC/R4EHtVPbxsrPelN6y/+tX+/a+++v3vf/vbzTh4hXjyyebknusnn7wqGcxyvbASzusAqV8hNAjpwmJ43ApAWwvPtghfB1JU0K0Eyz6cXIfCK1xSGN+43CwLPpQIXB8hRhOhUJvou6znkR/fIVQBQn+M3w/nr/hfCQbBwNfDmcvncv/G/Rtv4k3c49zjyUd4zn2R9bN+7k5uBzvFhti97L+ws+wM+zX2O/C6ldvU0sTeST+GgGsULhzAgQ8bg9spCRpwBE1w0keka0Vk08pvfHXZBrR//iTuu+8WNASnF3mJWqIWuZGbKCaKk4/wnNhAfJP4BrGcWEZ8gbid2E88RXwJzqeJZ4j7iH8jGlqaiN9Cl3Nz3++yWByJ4C7743BPAe4tpwm5tG1xIXnEJyz2dIhE770XCAwPj411dz/7bGfns892dfV2dQ0+8fvTc7967rmn3Wf+8Ch6Ci46N/cwqqJRFa7p4HBkZXV00ITPSBOzMzSR5qeJvLw2SV/8wZqaidua0MNETU0zeg49R+zZ04yHCfGVr3wGvQjnJJx/hhM/vgznT5OvPkeUojB6Bz1IIBREAfjbgl5AViITTHYCbl5Y+DA0Aj3VKn3mmayss2dvvpkmVo7SRHEBTZwtp4mJyXnfbw/I0+5UtRice/dqnAVi0oMLKviOnwjGYEj4prvfhaN90suTfMw9PXD06NHXjx4/2oUO0+ZEIgLOs8DHwNzF8NhjE1oKx9K24tISAplIDAy4Eky5zQ1P3XMnT8xgz8VjH4SLHB2emg1E4sGZiS540vnukVPj6K80bUmu/SKSwkWEBUGYG8pQUBQlIgmylTCWADfke8vLspVKpaVw+5X5OMA0p3zltm07dzZUFhgMalVh1Zarrrpq09atTdXoBjqrv3/c6vZ4/HO2OXBFpqambK6ROVzP1e7xt0ptvQMDp08P9DPlSgncJezKNNtHu7u7p4NyXNteE3cN9RMiPuIDE5WTk52bgfx0Fp4JisXjZLpKLop7pqenIxLCkJ+fb1KKRa1SmY6i0tM1FFMeiwQCAVEmy+UUwZGdJo1Gg0GRxpSfH4zy2uyqqiptPBaOoUI60+32haJ8POAOhuMsnodPBOJ+MGGgZBhp1ON2U5TPzVzIebJyQawgXh1LH8fVz0Kz4904P2P/eOfBgwc7x12tpAucQDBK0GJGh6kokslISgTGBOgrY7K6xjBfhrqOPf/886+e6nr397///btd48DAcfQsTVMhQSpt1cmFaBzh4F85XEkhhFgma0kWTqtRuGT9DTfcsGv1kka8XWhJvkqlyke30OLe3jFHgG3VRR3WAaDvlMMPN/Q5pgaYLFaAViCOxcsmkQSrLS8v17J4mXsORYH1PMcm184SOOva4KCTVYHxULHOQSZLQQAx4yJFWmFhYaZOwTkcDk6RUVlZmYHSabHbDaLEt+rikaDXnZYmithHRkbsEVEac2EN25xaw9an6hLLhP7pNzV/GEVv0AyAbZIhE088ul7IFiaE5cS3AYZnwOuBAM/IxM319whfX4W+mfyglJGRBe2eN1bGkQ9e6OgoYYh4DzZvt6GHqTNl6EZ4devWX87f+YupyjDXpjT2rdgbysiwWh3gHE6fPvjC4+vnfQLy0R/9qFn4vPB56tChPz+xPjmbeq/q4ecPdniQwFvffuONZO3QFgMlFsVdQbyxPCLwQWdCJKYA8mfkaBRKHiw3p1BosjOoNoXV+vTTZ+BDw7995GrQ+U2g6UuFEmF70tuogROv990oNApLhSVCtbBRuFvxyLPdLrdn7OBvfgP3yoF7JXlBGPTAeL2RYLHvQOsS8YjPQWgAFGlJhy8aT7RV5OSYTDpw04xlNXUbd+zYeeWWLevXb926e/uGjZvW1dVUZhv0Oq0+IwNdCxfF60Sk4PaAUHhcApmcXtXZw7xIzgKLA/6EXMSF7G0Vdns8LlYoFLr09KzS6urFNXV1W7Zotfk7v3L3v15TlY7OvXfqtMOYm4tWwkW7O7uGPIEowimsYgH3YFdnN63rePuINSAqWrlyZbE4YD16qKNNNTq6Zk16EIZhUd2ub6wHrPMw2kveUFfXjB5Dj6WVlxsVapXSvKhuw013f+Wrd964ZQu6H65+++133HltQx4eAPL8huvvvOP222ndQ3dtK+DOvfrss8++Nsrlbbvroff3iq1PoYMLOZqSsTH+GTAa3X19p0+fOTvlEBS4LutpGrlpiYM0mUy8g5EHgxEY/Gww6GYkyWCXo7/eCn7KfEKwPXDiXas3CV+Qtvz85ZGpyUng01U0ktGS1zsBRLW/zshPnJiDsWk9flzGWJKxLMVrrrr77rvvuOPBBx/8989dsdxsSktDX8K+kaQyC1iWV8nIb7ihADjbcNNNEcaSDFOZ8nNqnOMLtKw86B3HW/HQNK00cFx07Pjx45NRjqNJv59vpUDFGRhLMvqkMY+CQXfNNVbrhC2htjSsXbMG7aCVMqk0ZwUoiKU5YFfJ6eloKzU3Pn5+XQhTa/MCajVjap3u6O/vHxoa6jh95Njbb795CE/S8PyRI2AfKLzjgZYnNzrIpXg+BRQHijK4XsfXxQzDtLS0bBG+KXxRuE24RtgF57XCZ8UdHWfOsGwzUO4mcHO2Y3CZcMJVYklwiWdcgIYIKLZ0WU1NTUlJSXH54vo1a+pqDQYJOPXl5aiJ1uJ9C0ePJrcryJR4Cmb+zpaIKEmr4ckZ95zHE4ny/OnTJOlwgHqgVVyM45I7EfoGBggalzEv5rhiRrRnBZiXTak16kfw6rTigfvv/+YtodCtt8bjzbj6agv6Blwga4VUmtxxsGXDBp7GFc/3S6X7U9RrBOpdCdRrWhCr2ZKtsmRnZ2coUAibu9kgCs6Mjo56kRYc2UwVQ4vECpVW3mqU61QKMTjeGr1KHANnT6UD3aY4cHgcBuHEkQO/bFk/X1VK1PLLA7+g1ycDsb4he/LAWZfLNXYkGWJFi+LhGCe0GgWAu3EUi/k8MRkudhrz+mNMXm2pCWxCemlt404wFDsba9ftueWWWzbX5uKYo1J0O3xfICQKaatRqpAQApLLDUZJEMxPWKLXyZmWbI7FKQ3xjuZkLj1kqKirq7Og2ffee6/fDT2hyIQ/3GoM+xMkhdrbh9wJNfBPDSatHb7Ne6xWqwe+rQda60lkO/qnP/1pGBVv3759VQZ8Gycn5luN4GaQBNq4sUYvTL711ltWwVC7MUXfLKBvXmodIgvom4VXV8GZAKgpSQJ8pkUei/MKs0VFCUKb6rnnfvXcoe6Bw8/+/Fe/ShKoRR6PCSJCwDkZ29SNjatX1y2rql3dWF0NvW+RS0ZD6jSVlIDvKsvLs7L1UlWaJSt52ZxlVRbFlJcTidqU7e1um9MxPu10NTXBW53H/vyH5zmei0bbLlSK25PKw4+x7HaMZU3B8b53cf3BGAkQGoyDUqkWx304ae7RqThlKV/U22tiWgqgLwFljgTvKVcr1QatQkFhna/Pl00TTj8vkkr3Frhme//4yyeeeOK3fzkDKimMN6APH3z9hSdhuP3wly++2TvR3yz8u/DvhGu+zwYpEVPqNWnAZWOOJh6VZetFrUqFXqmgbKPTQXAV95bqzcbKVbt3725uqDHAIEvLycmpalixvKGxsXFRgV7kGH951y490MioBBgwGxQlQAASc/G8SvWsj21Vhv2cd5ZF0ZlRlt1bLDFXL20C5JgtAs98eARnDRQlHUieV9o7OttPz2o0EsZoHbePcSSXBiKSTcVDjmgUXAYlB56c0NXZP+Xo7Nxb7Av4RrsOHTo0FpEvXbp0WT9ovkEnoS2GJ01r12+/5Yv/XlzsY4wbGlcVmSJTna+88srhka72njGnL96qJPkwYcqoWnnVrddcs/f9nPv3pXLun4+ZVM/EkUSMwnZcQNoupXOlUbvNZnP4QhzBUyIxkfA7nE6nNxhxgnNpszHVYjFnDyOwFwYZ9okloJSEaMCfdAE4Yj7eiCdFEplcTCBKzMhe7wgjMtr9px+tx5XJha9IfvCHkydffmrvelCNcKrafvNqvyAm+JnDLz3FrJ8P/qGePPDiYxtSwT8PEE/Nj/BszqTAmZdDCSkuLE8QpESdjGZUkaRU3KoUK4DWhMALpIhsW7qqpizDVFqzevvNN9+8dV119Zadn4ERf93mVeUZaoulrGHtxt2gCW657ao911133e6NWAVke4dH8b5FMR+GkY9T5iQCLj/2AZUGItGqTIBHzAsEngPh26rN+nTtOWvCWNrQ0FCJk7uZFy9fvnyRWRGdnTYY9QqRiMQRW6pk6mmJjqGzxIr4DDiYszEJaAFw4zmN0QLuRHWmnCAYJSmWKGSSeBQQDNfWstjVZ21cms6P/vWvfx2JCULYegZUTY+dzapvHhsbdyVEZjAOwkxYDhrWIGLobEPJ4mUbN24s07OgYwGLxKcmh46+9tprZ85N2SOtYCX8wEidXmfQSVMzz0WpnIXlqSrRZXh9Nlk/XKU+ezYri4QROg6jXGd45105+FjaDJow6NqahYeEh4gWMF93gXw04zV3wuPZKOCM6MmzZV7feN1bNkbwQvccTbi9bdRdd331q03o2ypD8MYbVarNt956yy1J1SOW7t7DRyIiUZQmpOI2LVBxed6wlyA4rpTCeKFFbu1f0zDV0RGNDtJEv7VN+/bbhw+/VGMuLIzFukpKSkuZFkJajEvd3y3OW77c41kFAPN8L/H82s2p+TWcyfYK6GVhlNJIJXKK84LcuwLhUFQtdrkomdxs0UljDjBWc35GLxbHSJIHWRcnE23EQgKticW4uEGdxAUJjgT5/lNnIBoPdb/8nVSeBMkPXj0TptxTOOH7N6WTE95zp1/+zQ83gsW6LXl+k/jveXHWYuWFQU9cgnMzxL04NS9l4nnoslIjjkXbihsrC82atOKG7bfddtvGJUVqUWHFddeV1dU2btvevHEPvHjDViy3WkLG4fKGOjkef4RSSasBg239XAme5kzEeKKtUKbSp1knQ+KcFStW5GoIr12tTSQ0k9NTE3ZHEAebEWKmVRMPToKWcYszFi1aZCL8tHrJEm0sFsTpVznAvW2FsdDszNIllvjwm2++OcprK1ZMWMXi2aLCQktGYbYeLKyEY2gth9LLwdO1kO6urq72s1Za/eabI2/9dQ4Uv86gEgnv54FrA77cA3z5CvDlq9hjWE6mJ7f3Fpl53+DYxLmAOLsUgFdOTm5BUXV1sUHM4+g1RyjqhocQqUgH6TeKGAOMWZajJv14djIq8CHQR3Q+J09P1wohXxinC5aICF7AJSBEOOlvKELKVEpGuf+vA9MBGOgTr+3/4Qbg2JeFO4Vv6H/89GsYekZCQa9rZqbn1f0/2AhS/vnk+e/kT3///fXCHfiUP/7b14dgII+8Nc9SCRf1jMzKFK0VSoKU4+jt9ASvMJjLa1Yt1iYrqLOhGIrHHcgIvrVKQ/q8caZ+SSE24bGYLL+qec+1N9+0tbEmDSNkMWhRltJm5yzZ+bnPfW7PmppNt95667a6CuisWF+CGS+RKtJLLCTfWuG0y5Qw5sUii8VkzkhPjwWRRqNRiCkSZ/mXJ3DCCz7GS0Qss4JHiTgHPPW4WZbil9QYEmOnTgMSOHP65LF3Dp8etbtDeOIEiS1VVVXGhKPnxIkT/X6GllAU70WhQGsFIchzQW+lCZx/zhmQ6FUiLqn44wKFOjpm4kaQnwIN8o90MCtk4lg4CGgwLlOnZef39LoE04r169c3Nzc3Na5tqF1cW5UHiEMjFU8ePHjwHGtYtnnz5hVmhl6GITgpx3pebpg4/Ze//KU7pjWYjBpogUSGJVaiQBxaty6Lcp89e3YkJEpfuo65ELNRApKVtyBmQyWXoLnu8ZycubmIVAafwyM4FqNJhSvaJn3jreceb9vrB2UGFop6/NXX592HZJZhjBXCafI2zapVG6/cfV9R0Y4djUX5WHOJ8YpQ8hrTgTaVWmuwFKQDoCQDI8NwA0qkSF+yhCZzcuRtqhPvdlrHuq3W3Nzi6mXwZiRsb3/tNZr8y2Hr+7sF90Kb/xXa/GVo8514NNRqgDQqEanEfhOO1AGfJ8CzQYfDEUD+mZkZP9JkZWWpUQiMdBAp09PTlcwysVhCEmB1CLHfGwS5Cnr9YpISS0lSgkGsCAcn8SKFgiQpwQ86KCBQJKM90AXDwHr8PStOiX3swM82gh81X/vuIeJHP9kgPDivv8gnDjyxHjANnLLvHOgCoe4+8IP1wr/gU/rdAx3giZ6ZHwyKKA/+A8fH4ZatRXC/OMclCDEfBSUVYvEcl5QN4ilyTob38HMJnpHVZsPLaQX52tYKeX7txs/cfvvtezZtvurzn//81tpdd955547aDBCz9NorvvjFL26rzYQWZ+FxUCNORHiKQKQvEAfJiAd8JEFQfCQhBhQuJZMpcUiZCDqMpwSjMQo63KLESfwlUrkM4Bs0kAWVEY/gpXyeRFlggjLRzKlTp2aQcfHixSbkAFXmZGiFEI/F41Kl3qCkWosopUGvkMbj0biAOjunwxJghiQ80+l285qsJUuWZGl4N9NSm8C6SkpyoCniJOIkwE2REMM7L0So/+WXXx5A5Tt37qxAVvD5x1ABDI0cuBOp1Wk0bleQJ8jWIpLgg063RqvXkqiurlDLgjvGagvrdDpu7hw4BufmeF0KKWC9+u2L9OqKNIPA4rUIH2sqWr1iWX2BNuoOJRcBA76ZGS+pNRXDmK3Iyy6FhzyDQgAyETpmBS5/IOJztRSwSE5SKpAfgD9Rp9NPqnRKCiQpwSGKZMNhH4cVnkohxEJhhnz9mUc3Cg/AaEoqTWXL86+fcUYjrlMHn6e3pvy6O5MB3veCYfxP4T8NT7zw+lk38NN+8s8dwOLeN/bvS22tIfc+m9KulExfbImGWytCAo8dQadDTIbdtoH2Y90+XAgjIVJKkUSSjlzAxKCf1+okTP2yputvvuPLX/7yjevrCrRqidRSXLPzs5/97K233HrzjXd8ds/mTcvS8HJLaU0OGAlzVcNu8BKvWpvUrrGwY3iWJ1sr0kzREDAvwc7O2m1zDodUhfx+fxiEmwABi4pVQC0S5IwVMSucdo/XBcMxwbrds843/zLgUeaBu4ctWHFFea4KsSH4rss+jWdG+z2CqbCw0BhlMCAndUipbq0QiIgVSxtBaTLS1HFPkMXUh1FNcGjp0kyJCzD8GIz84qXMimhCqlBh2BINOKfGqxYZCfspuO7bb7996PCR42e7z/ZM2O12fyyRAzq3SOQ+88Ybb5yyMaBVsYERorHWiqgnf8UVV1xRLfN7HO4AodIkYnhmNBEhRMThwzO8ES+EqThn52HmQj3h60C+NqbqCW/E9YRdEawLE2HXJE6af87qsvYmy1y4IhQMLyqCBnB1PI1GzOOyF1FOrNWKVSotPMdeUAyJVRoVI//pgXMwCs8d+Cm9UdgjNCTPPQT9U+xZ3pgqVHKj8JDspwf6YEj14YqoSwG522dQpqk13QQjFlfFts0iixmAV4YZ2eZiTEHD4nSwfqbqho23ggq5dWPDFV+45557vrC1oVIPHdVXoq/BNdItwvRca/rctGAxgQyZLcKMDVpqnxUyTBKmwBfASe65oM8zCz7xrNeHjIATDYJvsvP48eOdk2gKrpGAvvGt6Ty4ignU3t49k9CUAsIr1SRmutuZApUCQV8FuUprAdfdolX533v11Vff86lKd4B931GKLHCNgE9Qq1vT1WrB50dXXVWnE9wnX3rppeNOwbDyqgUxiTkXxyR2d/cNOBHvHhuyWtEwuNVzVk9MIFhAaW3qM2eOnZmJxmdPHzl4EP0ezwUQIjGZmgvIzraYtXKxypxdVISW47kAiiRE83MB6rQ0qVyESIlUOjSEJuDNnNV1FUUsokSiNrXTqRTLJFEkV1x7LWqENzvPvvHiCwvmA65ORfBeDS29OrWqU0YmnDNdfwRk2z2DZ17ZICiiqG92tKejo+O1MZbQWfKOHiWRiC6RipGgjmvzZGBVKI1KpU+fL/QhTitUefU8CaBELRIxZtfc5NhryWmB10/DOA3ikj4jB197/rvr5wGJ5AfP/vVY70j7PFZxJXeFleBcgV5KpcLulCFbnYiRmVqcLk6ikctIx7TNGwgEWJYpy8y0ZC5du2fPnub6xeDBIgMo+UX1y2rqVq9eXZIuROxTr+/cmYlupUvUSomIcsVkBNaSLqFgUbo9iDOfJcLINx3wuqbGEwlobplEacoqXItnCSj/EBw4ukdMkgTg/7hi5syZk8fHFAoJYumS4ZGxsfYAlzBgY0LGwk5/OJp0OiJRguvqHxyznjqF24jzgg+0A1Qci6nr6+sbcImXITdlKIObbN6865pbPndPSYkNSegS8LrWFKX5x0/t37//rYEzZ7r759wRXFomHhAsRc1brr352mvhihf27/xnqpY8rtL3hQ+ZMcj78BkDl+/ClMGSjzVlQFCfdM5gQ2rD0EPUzz/BrIFKrJCCl3x+2qAmNytDymlMedVr166tKVYqq2rXrlu3rqEiV8sH5XJjfkH5CninacPG5Q3A/7pydCXcwjM4jHdCEhzGc7jOgxD24dlzQpNGsq3gnMxvF+K5ONe25OPNG1CyjztxoCLFEvn7Mwc1+ujw7JVrS7RevJYFI0QSGD137twMq67YtAtwbUJlqQVbsFgRkeVBCxaZkRl6YCxbWr9t27ZFBn54eNhoNMbGx/sOHThw4MSQdS7cqiISPuec06M3GowGWdv7cZX1qbjKotQuBP3kpNU6otB2deXkIBAQK+jFS+YPNuK6mMmgh3sJztsMLsC9hMu1EXT7g/NnC15KuGT+QH/NNTfc8DWNZ/dukWjxrl07d6IvY12lbGwGcE5RLE0oJW3aMjgMZyeVSq/XEp6fFr1o8kA/Nma19tVbtm2LxfybN2/Zgsrp+emDbwn/uXD64AOzB9elZg+2/a+ZPZBdVWk267TlW+6YX1x6WH/7ltp0WXH1ffdVLV+xavOOrdd9PfUO+R+fR03o23BVlkzgEnhaKV4LozQaWk1RwnX3VoBQg3cjk/yzZhKKVcTszIaN1VoPeDp+Q/HaK6wzixa5GpYtq1rW3Liyrq6uMgNV4gahzCWbNm3KI23H8HGOVj//fM+Bl2dwcZk0tTg1l/C11FzC14BL9wCXvoZzygfDcpUaUHCGyj99prsXho8uE0RbrzekZxQWmiUx/xQMjLE5pxUe5sK8XKfTSaNonP6o2QST6f/9bIJc/3dmE8oypQQHpk2cWbJyy5ar9zTXVaiTW0UEggrzUoOxYuPVV1+9aVll47XXXttcXaDExdpy0bX0iliMlGpz0tkwfHtygpKAVWJZo0Fv1OkMQXcMtKcQYxOxmM+Hgi5ckyIQEeI+pl6hgsEAcp6Iy2Raxeq1uVJH/8DAwODgQG/XmbMD9nAcL1TJVfqSlStX5kkj4z09PZM8SqM/fEbB5vjbMwr1+RZSCOESOZaS5Vt2BAPSjEWbd+/evQt0wpXbt2zavGvHVpCY+pJsDvgaSyvfdN11121ZjJbQK2CEIJFYbtBDX/RZU6fA/eoRzNmg8yWxiEoHJJZpDFJKumtXqcIP/uu5mDKvcVfK68pLVfkpBBnLAxnLAxnTKGRkyDao11utAbkcb90T42mL5JyAJ95GPv0MgOU7hc8I/0bYbOuTSX3+g/wltkxb4KN4H2JydsEgbRNt3Lzrs3c1oZ/JcnO/9KWrly5CD4FWIigaXBKa1HnjbRqpXJtRkI4z7vr6+lCYXjDFkC1r0/R0jIfCYHubmzft2IMWw9tB/8zx55+nyT+8MpTS2V9JzTLcmZpl+FeMDZ1xEJ+o142tZDzgnB4FD37Mbhvv7+8fc47iPLLOOF5Ic04AV8edEVwbD/z5/83zDPV5eJ6huEjfmqEsrt/2+bvvvvum7VfeeNddd+2uv+arX/3q1fXZrZrM+h2AF3bV54L05qO7aVqHizFSSKC8/uQ0g9/bmkNxeJZBIpGRMTy1QMrxDUlciCZC4qnr/6lZhhVKAiBRQiMnvF4vp1AqcXVOk0aWhUteKacPA5JTLgUntkbpOX36tFNZuWXLllJkAvKROoNO63IGLswzOFxavUFHooaGYh0LxozVFTfo9bxtGJDOsI3XM+9HAD4GsnTvQp3rtPf3dEMnTva4E0a1Uhub7Th25syZ9vazp04ePHhiaNbN4pilSBDbqYjd2g8+/6AN69xEghRRXI4GJ6GQEST2iel8+IjdRyi1CpzmL46rtyZCIS8rw3n65AAdQwz52tOPbBL+U7hb+FzyfEix/7XTjkjY+d5f97dsnZcX0MN4N/k9oHXvF+43PP78a2fwDMHciT+1g1z1/OV3D6/HTohwL9n2zN+Yaoh4/vZUQ0X16p3X3HDzzTfvXr00R6OhyLS8qiuuv/7666697pqrP3v9zg3rqzDg1BUuymhVpJUt3wZ6aXs91rxSKR/zTTpEChhmOXlcPIJXQ1xuj8vrdasMOCckIRWJpVKtFqmMGKKo5YREC5pXptYoYahZMlXgxw72h9UVa9esWbN69Zp167dsXlOZmwm6W6eUUR4Y0iF1zvKmpqYaU1Lzfthsgzn9b8821GtNi5fiLT5LTIqEzbp6TblZNDc2NgaIeGJyymafG7fO2O32qMJYCyamLktqHxwctJFY84Ljg9hExO2Bvnims1fg0o+Ebco6PReXyoM4Y0vU745xsZdfHgpramtri6ShicMvpyRtbWqHRGNqh8RaXFvL5sQ6xe+0TY2Bmh+dtE3hwAebG0aeE3XSYL1EAiEiW/WkiBBEciAxgYPPADVImRxvVGYwGGRRr20A1PzgnHcCl/Xz8lqtVsBZn0VgeESiVr1IJMQTiCCiAq5RKhWiBJNTYMaxLCpzQWV9Y2NjXUXBIjBrlQW4LG862kBnwecMGdllS5cuLcvOMEgFqVSfkV1eXp4FT5gWNYFrhYoIJLB4kp1WGCorK43I1dfX52YkAIlAocRa9bEIRwmR7m4PpywqKlJynm4mJ8skxXVfTVn51eC4LynIMsKV0rIKQXMUoxU0baGUcCd8ZOiV4I9XZOslfr9fos+ueH9ePOvieYNgMBSOcaFAGMQcxcGjZkMCAd6CgKcG3O450Pcy1mWbmUFjdAv0BgkkEORhNUEolJKAJypWCAKSwveWrW6qqSwuWVRb26YWBH/A4wwE/YH2dtQPb+bmFRXmszyiKLx5MRq0e1yBaKyqCiXgzVhgasqWlWUxmea9uaZUJhIcS7IO2tkE7czDcH1uDOTYBhKKK7AmAvbJyclzvZ7o0FAMddNZOGOCP6FUimFQa9ILsrBnI9UqfZNxkWhvXnZWpkXqBKfU6oroLBYT6XFPgCackmfIjx7Nxp3TEqRIqVWqcb3SOB8MJ1qlcpVCpxHi8b15Dtu0tScOtNXL+cnhaVtcLpGlp6cn2t/5SW6uA6nprEjI5xmN5xSUAkOrcmurF4NqLsrOSEyMKxR780jExkMYvinCkz0jIj4YCIfB17M6/WA34E1aN2UdHxsYjYgNpaWlmticI9wqFVj/rMc7NLQ3j5IoNdlGvMZnzl+xTsaz6rwawKXbPnf7XStXUqiRziqvWFS1OEcp4fBsChEmjPNyYK5dU1iYigC4OTVzdzPQ9Xqg641A16oEpdAowN8N+Xy+MAGOYgjn9wkjqUSjFKJ+l8vl8ePo0UAwhibpSpL0ez1hrMNZXOAWPAccvCIIlMDhEgo4Hp0iKXCfCZKpckTVOoM2bh88cuRI/3QoNDcIJmTIntAaNJrwzOC777475J7rOXjw4HvnUB9Nqwg5kUx8weMrtsp5EY6EFxGUqBUuSrbCDRCxt2rcNjt+snPckwDN5wafZMaDvRP3eMdp26zXE8Q19oZ8cfgm70fTdCUgElaMS1IrlDpw//Pz83ML8WT30oZ1DTU1NeUlWcYMYxoOpeeZqnCAjbZ3z4RkmZmZ2jDoYQWQUcXN9feGY2w8ArY1xkcDQBRvEEVo2izXqYOgfjy8GC4NqkemMcF41XHRNrlYBpg8xgGQaqtqKNSpt1/RuKzUYrFUr9u4sbE6JyenYlnj1u2UMnPF5ptuuumaq9ZsxyGsTehOmi6jjJlmsPJpapwsNi0tTSml8AYDf3K132zQ6TXZ2Zlmo/T9/X94vas0tcOxFCPxsbHR0RGHb3bW74/COJlEThhpBOrrE3AZAHErItr0oDdHOzJ1HR1G4wugqgdRLx7/7LpGEHlANdj3bNNXVS0qaY476ur8/oySkqIicC21XJq+YZUuNzc9HfwLfRrH6DMyTCb9bNhupygVrnWAPHCpiGvNGv/MjFg8SxOuSJve5wsl5iyKxYuBUtXVS5eifFoqMZSwidycHFqcVVBQYpAs2BVzRWrV/opU/dkiV4JjuUQ4gCF2MBKHZ2GbDYxAwOUN4EzLUzPIRutJkiAlAuY/DiHgoo4wDQoJOZIOLsgXIpmiwYE4+BLjvaf+/Oc/n+izhgQUP3SI5SRSYW64449//OM7vegtQJ9hQFIgimE+GcqhpGgVEC8jDef1VxKxeFtRyapiCynLLa1ev359TXmeUWFJb2w0GbUqfUFBIWjpmhIYmwU8b5SZ9KBWMnRKzE2RecmSxYtr1ZoMYLLWmKnhmaJ4lE30DtqjSuAwGXKMDMRZv58bGR2dnJ5ww9iMsCgILeI5v8NqtfqRCiQoK0dDqwoLtXg3HUlyWGUXpSUcs5WlGWoKVD9SZ5QsckRKS6PlhUXFZYtrAWJV5AID6ZyIIE3Ly8vTSAnQF4JMkZUVjYpISoZzumukey9kDb8jlTX8DuDBHThruN0LpguEkY04Z0ZGhoZmXCG8sITVc5xVxu2TMBwm5ibgr9WOrb0PoMJSkkzEEjFvBC87c2wEI8yo3y7kVVSvXFuTgUuuCGISnPNkpXNKpBQztY4wqTDCcJEFnOOd753pmnaEFSY40tKMBqMy7hk9duzYqHv85MmTAE9wuAvOuywhBDYSE4tbi6MhHkf/qeRcLBwJumwRrJqkAk6VBl0X4Yq1kQRTa1JRQnKPjjaveMWKhpWl2ZoEhioBn9vhsMU1ZnDRC81lYOHLM5VYHYChXcrzYoXWXGQpBPWxtGpR5bJly8oLyrJJv2N8+ISkpKTErNeC7KnVKqxF1EqCqeUQj6fMRYkIB4TIz1NwTlzQBFyWocGhjnGnH7jAEbqCggIt7wKY5UYx6A2JS/bGY63FlFyfideJyIRzoKdvZMyDZxkElkBjYz4eS4yM9Y4xtWYDhXDteFFaRklNLS+oTUVLwJlatrxu5eqGlStWrISWFpokwBVJWiH0rAiV062LCUqlMWG3Qa9XYmngVBmWTItZr8rTgz+kU5MIkISSgncIpamYeT/bS25qjR2j4VyMhqUSiUKWwHNQMrUKUXQLKfDCw6BpNP0DJw88e4gkX3zxzfYO9Aca5wsnSJImOTG8m5WTV1y2lmXBYKoV4C62KOSWRcuWL1+ypL5c26ZJzzCqtQAIYjHvzDQiMPCl5GlFRTSZm6lo08xM+aVa8EIqK8vKKtAimpYr5KwNHAqPK5TCvV+G1n55Ae7Fq+vLbE5Q5077nBvssMs2OTExYbXNTMED+JIgvpM2F0iC2zYJHu6UzY0X7cCvzCYIgcDpN5LhoHxyY4iASPwq6B06abhUZLJuaHKTIS8wy7yE2WxWJHA4SjryjuOQUetUH5jCMe8YuCDjXgTGA3knASiNewWQZQ7ckWSlLjCtNAnkBPtHcbQR7gGvAeMFHIVKwSNB4NBTsLk0Iphlery3kZDKBDw7pM8Dp7M4K7ugoqIiV1+MBVmPoKtInwu+aYGegN6JURFdw3ESmcoIPC8oSHqtBYWZlgyDSibhRCK5HGsEAK+i7Ox8XL8BJx7MZloUuBiRhEwWvqcVuOQpzwp4woY2p+EUy8gJDq0D6QCEwk2Bmj7gm5IgUCKeSAB/pFRrISVVKuS4cBAirFZPXAweuTjusUYihNIAqsmoJCLMMpMS5I7Sa7HQqk15IMCluZmV9fX1BSYKd8BUBv+XmRTwttRUAgOyAFXRNWDg9Olms4iS6cygJ806GSUyW9L0YiI/P8OohYGoNWbkWyw6uRivSMh1FuajNZ7bNjAIenh0ZMLpZ8F++B2TYDdH8R7M0ZEzo+4QdDviwcYl7J7Dq4NY44GOkIqlOnmSOSI5RnbgGxAT/V0njrTP4bA2IoEXCnk8N8axIdBFAdtIz6mjR4/2Ofy8Ok2vigVsOPTmxHvvnTp9qnvKg3D1EC+Phcg/BbKSrPUJhg7ATSLRWixTklgJByOUVCFXGc1ynMosRkiRWCwncHg5S8rFjDKvorZuFV66KDXp6WKW01rKMKRbv37jlm3bdqwuywHJMuZoQHjVWZU4BhZrvJqaypL8DJUpOZNIicQYh2hkxsVrN+665ksV4Idl5ObXVFcXFhZB6/ILi6uZWhb0XBh4x5Ms6L7BIQ+rzsEZP3Nz8/LzKixqrIPZ6Bwu2ZRQgd5TJjUejweXRNpazEU8OFbcxYvTyqsqiwv06mTtIgGBhiRDYP+jIl0BU6szlZQvAq4Xp+mpSLiyIssgxsHQoaDf6/J4AwG8NVJiKASxLkyTJAW+nJaCqsuy6DQSplip1GeVlZXl6cTgtIqUOi5ZqECbmQ0aUm+Bd7L0kuhlFHoZhV5GoZdR6GUUehmFXkahl1HoZRR6GYVeRqGXUehlFHoZhf4/R6GNn2oU2t09POPwJrDJ8TpmhruHh6cdXpxtAZ7830ShWWNjVrs3nAwhCnvt1jGZLOGdhn5NexOyBVHUGIfmpnBo7j8Rhyp7pFrwz6IxQSLpYf4hIKocG+g6cuR4PB4NhcaYDyDR9Skkuv5/AxLNOXXy6JFXzvpCOFQG+cGLwBEfXkf7n/80OtrTw/xfx6I5UsBaKtY+PZLMzNY77p8Xhog+iyDGxpgPR6M3//8CjXZ19XYM4jiv0bGp2dlZrDzCeMOzSG3EBVXZmGfWMWsbgYHY9SlBo5Uwov2xCIhyAHv8I0B8+4wV0GJfZy/eqBHxebwusGQR/0xq1PyP41FFp21arZny++fmPDQ5bev85HhUMe0TDQ9xLDs2FqdJkW/6I/Dotv/NeLSra3bEPg34wzE1ZrPZxgacmAeSCasD1MDkrNva9T+MRwvGxvpGZwLQDdcMDlIdnZ2Lx/v7JyessyDdDtfMBa1xsYf2L5cxaRKTdnUNjk46Iy5c7EqEBHwjcCq9fcfe/tNLPx+CvjmnJ7t6eycmcGbHyYmx3k8zJl2KQ9usDhf2rBNerx2LxIgjHI1FwYzxXuiBxzkxRlEhuxXeGbeHqItQaX4Kleb/M1GpquecS5DKZBSlZCd7mH8UlqrGxuZwJGc8fvZ0T0pTXsalfwOXdnYOjYzPOlzuUCjpx4bCbpdjZnxkqHNg4Ny5EdA6I+fODXi9wWhym3E05P3U49Lx8SlvMBKZtM568NaviGfWOhmJBrxT46DU/clcqv6wEI16bFMAfqZtnijz0VrvMi5dKhbzsaBj3D7R1dXV3T8w2NHRMWwdmSX05qLy1RwQw+EPglcYDkfABQiGo+SnGZcuxbsAoh7XNOag3e6NgyTzninrhHXS7hnBpa0c7liiv3/ai/M3x73T/ZeR6WVkehmZXkaml5HpZWR6GZleRqaXkellZHoZmV5GppeR6WVk+qlApnKQDjlIhxykQw7SIQfpECv271egP9L7xLlcOAOlwT9hd4wAN2ifmK/XDyAt/JMtyapB9fS+5FVugat8Bq5yK1zl5lQ2nCULUZno6adFz8Hx48cfffTRH/16/4HfPvf8i7976iff+973vt3682f37XsOtXwQt/1tILRkIarjRnrDWo1aFR8DG9o7bqdUKnnIOtHz9ttv97MK9vXXtahrAe7b97cg0pKFmJALIdnE6PDAe14Yx1IhONg5POoVWB6Asu/oa0+kpU2ASfggavzbQaZLFmLKXo3tJduMdXzYCWLjHTn5xmH71NDgyEhvb++JrgFweW3I+kHU+TexVdlCSJpBmKpWrFzbtHMTqJL1267+0r2rllavu+oL99577wPr0Q/Qj9EvRHfeuQLdcxFy/dtBqh/AtTjHWfP5HGcX8/rJJ7///e/+8pmf/ezZZ1/4MRzoVx/g7t6LvPeCi9nZ0dHZeURNHTkikfwSzMlpdGIhAy/26wsuZlpOTrap1jFSVjY5KcMuFsq9iE2XxkcWXMwajwca9fbZw4eHh6fegQMd/wAz9l6MCAoupv/atc1bVnzxuv/4D/Cn77//gQfQv15E7I+KrHw8lVuKAQo/ABT+L6Bw9T+Abl2PP+7aiDMH4i39wn2SfU8wzHe+88MNF3IQo0f+IfjbdhG31v0DaDjYfdp1/PiJE2+I4m+8wXE/gm8cQbjm3ceCyA9fzOl1/wBkHu4enQGtGNSdfEMsfuedGQBXfoTYfwxHXyoo6/4BZB2qlrVrtRqNfMxttcLISFbAQrMfF25fImOV/wD83oMeRvegvei/0e/hPIBeRc+gHnQU2eB8OXnOwelAjpYmNPyPIfVLBTcptx0gt6+A3P4Z5PYVkNtO7JH+fZzr//73/cy+xx57bN/etke//e1vP8JsFL6VLMP2gPAgwdDbQGbnn31LYOD/+5LntyTMI9/97ncfTX74/uT5kIR59IknnngENQn/+rGg8ydwfNf9fbQ99JdXug91AjYeOnVmEHrYcejAz372s9++8qfnfvKTn7xkOfTSz3/+8wOHOsBh6zj0x1/84hcHDrWDWJxBL30MkP4JPOh1fx/XL6+qX9dYU1ZWVr18RRU8LG288tprr73qiq07cRoOS+NVn/vc53Y1LgYxX9y4/ZZbbtnZiMut1aLdH2s64JOEL677+1MI/kXi0+CF4vyAUilYZCpZMYkQMOV4ykJlVIEapjwgwm7KCJ1Ko/zgyAaR6GPMPHwSr/7vT1ZsXXbFrfd/9TOf+cyXvvn1O2+++eZ7798OOn6+jOe3USv6FvoOjFZ87pXc/yUYxF++fyN6LPXSY5L7vwLfuQteehT9KHnuhZH7vY81//FJwi0/uk6kOpl/ik2OFhB/mpYRIpxAUCoi2tTnZkB1TJ/rBSe/F70J70VDAbvdHghF29TpBpyaLD0DWpCBKuA9iUyKE4vJJG1qbxxULzimIErTABVpWdAxAZ7QhCPYpjbgxD2EoSgJ8YvhvbTC2o0bN9YWpqWih8uhleWpbP3lqTrGBsEnRAE8hPy4bCXgYg4Ur04jxcnDxdBhMUFRUqmGMcQ8c17QwB7HLE55Nj7uQR20zhcGVef3Qstdfr9jZtrHGERm3gDK2pRmysrKshSXilEZrRMZjWZLciuIOV2nK68SMQbKb4vi4vGJINzWF46EkI/WSSa5RGBuAqRxwh1C4K3AfRs354DtURes2LFjR3P1ohy0ltadKXTOsmllMCxLjIrgUN+ZFB+WQQ+XQQ+XQQ+XQQ+X4Qo8C/nw0TxpXcAey0L2fDSrWhdwzbKQax/NwdYFzLQsZOZHM7Z1AY8tC3n80fxuXcD6C95oU2onWhPQZR3QJTcGRjkSjSUXki6VgjCdzbJccvoKFzm7VCJyB62gvCYGO8GR6bxUOl6jswHmxSJutzsSY0WXSkquSg5+lUKlSUtL01wqNVX4/qQIUIqKEpHspRKUG8JVp4SQHWO5S6Vpis4G3OKbHR4envUB0LtEsnKBgAQm36ZNm5ZfKmUraDrzAhXRpQJ3Yc56W2rOehvQ9Taga8mLv4fjDy8ewEcfqJoeXC8Jjg/I3gsfIXsLxbDkWDv4GGePHXz55ZcPdg6BEzbYefKtt946+QGRfOYjRHKhdJbUVJeXly+pWQYdWFZcAFQsLC4FzV/6AUnd9BGSulBoS945BR7fqXdefeGFF14dsILutA6cOXz48JkPCPCBjxDghbK8HTyfQ+il5HkI/reiQPK0Su69bdeuXbfduxGU/Q+SZ6vqA7LehCY/QtpbL9F5+cCh/NR8JV4pKcErJV4/IuNY8OPxBEh9AgXpvQvorp+e7e2/aNjvXUBNfaF5UX6hBSiXWYgnpCrRRnhfplSbTCa1UtamV2q6ei8a0GgA/yzovt5p3bEhQxaNRmUZpXV1daVoMY1q8Y/MkFfV2NhYlWf4kD7gPKlFyT6QyD/felzyPRFL9kFgcQ65GCtAH/p7Z1MKbBp6MpPsw4I2FuYvMs+3vjATemJJ9mFBH5W9XZqFqgn6QJSXMzJVeh5O8J6ugh5s2GGdb/t8P6AHxNmzjMw90QMS0TPhXpAz8FFo/1eg/XdD+++G9td5QHRcbo8PH1NTfaeOHz127FjHdJDVpZszwO8kAK7ZJ0ZHR4cHh4aHhuFnNBpFQzSdd4FRSK8gEE/EoxGMI3wBl9sRFlFEq5YQwuFgKFmAL+D3SfSM9hfPgdP57C9+9Mgjj/xo//5f7t2UzBn4meT5JTXz4+eO9IxNRsPTPa8/9ZOd4D3fIDQnzw3w379cyAGXTAtMPvkDcJ3roCEXqIU8Yf+03cOlmU2gxCgvZUh3DdrirVqp3iSJIXb+CEU9TF39cnByVtQ34JTA9fWrNmzZuXv37u2rq8pz1SQhk2cuWl5b07ht586dV++GPzt37NjZvLIe3QB3uzAGkQxxcoCWJE8AYzKrjZFIcWO1rlUb9zqQ0QAf0ml1WqVMxtT5WbxK4Z8FNTKrVueUL4KbVxcpYnNnTx47QZFI4GLhEC7NF4xEwpEw/AQHBvCqU94FQUUjk55gNCFTmsph8FXkWSzpGglFMBpKrtYDaNNotBqt0j3C1Gl54AKvza+pqcm32Sb6+ttB+jrtpK5y9eZtkeBkV+ecIMssLi7Oy8H1SHPzcitWNuAEgnnv69mymjK9SpgcaH8DdOirR4ajwujhLg+j4aJzo9PYNLmcrpipjLlQp+DBVJ0CnD/wHixXDixXTgdekZwLh8FhSwf7ogjNjL539PCRkZGhwWGrLVkrTwBEA5gGCazVCnK1HABMIootYoIX3CFeIHixVIYz42tUBn2aHMAQ6G0eyeVKBYwXlVql1sTcjPm/vscwzPf/69cvvvjir5944qcvv90NFrD9j09974pkitbrhT1Co9AkXAX/f8v441+9NhoKhQKjZ+E4c+bMG888nZSl5SSpUGvNZrNWrSCNKl2O2Sh2251gXwWD4HWlV2Tifb0Jn5OV40rw+FArjExdQXFlZWVRATDFkldQkJuux/uD1TlVS1dtv+763QBGikvLMjVgJiUyXKFRqVRk5BeANC3n+Wg4aZrDUT7MEyGf28kinPR1qsMhlQ4d6nCDpyzSGHmH040Xg9yeQDjM1JFRIG6UVENL1bOz/adP4oy6nfaEsnRRdZXPHwxFgHh4XhsBEAQoyPEoOxvkCYirTMuFtuamKYWibJ1SKooE5/pPnTrVNz4zY/fFksQV2LDf7cUKwevzBvVFTJ3UXFFRYZaGAR+GYdg0rdsCY2JTVZrEOdxxOq9w2cZNizM0AHn8kWTuzGgk6ho9ByK1XC4PzfYfPXq0fzYktw5Yo5yitGbVLgBlezZX6xWLttRnYkik0ucvKgbTl5Odk60LWOelKje1woVjZ3LPx85c5Dcq5+bsLtxSr8s+x1zszSszMrQqBTgXCpU2g7nYn1fOzro8uHSw2+OaZS726JUYX0VB0KOkEr57kY8H303ILaB/LfLEbMrn/dD2xvGKTSyeXLIF+iv9/kAkWS09EvAz6rFprHTHhkAIh9DbtJLj4oIEBEwixDlGrcKjWq+SgsDIUAatDIXCgFFnZyc9oRCjngmB8IVm+vByBTpFK0tKjJIo8CcqMZYw6nwpCIgkf9WePXsaUBOtnJ4mzTXbt2+vMZPn1/mrU1m/q6G91dDeRbjmL8dpMljOJBLxvFNCOQISKqREAi11eYUIj9yjtHzUjfgg8rhUckY5PP7MU5HIL1780+9fOdKMtTJx6K0m4SHqkTfnC31IC9LUFqUofyktX5onUmUZ0gukEiZdMFTWyuQ1xUUaDVlZRSgKl+qL0XJaGreJwpLoEL7JcFQciM3GTRYmPSJ2TIq40UjU7ZHNTYlYq088jWy0NN9EmLW8sYCWFxh5bRaXkc8RjMEyPTkQImenrfk5GZyyNDN9LtEmtSlY54SxooSWl1QYJ7xapa27fUEu4KoF+05xLmBp3BMmJvpGZmlpTw9J9vejfnqfKE5RcVz8nRElfv9s8LlmUClXkU/JZM3CZmEzWIDkY0uTsBM+K+E4Ca75zugVOcX6LTfetoPjvva1WOyuu9C/4EvFYnECz3boCZXtHP5l2bk5/Ium6X1SSzBowb/wtnvJevyrVFZX41/UAG8PZWcP4d9UD5SpNREN9EANPdBADyhtIGJkWgiFok08MjrQh96i94kXUYFMpKapfIUinxFLqKFzaJxuIcLhNnFUe0Ut4DlqPBwenx996g+5qlhIZGQBIKHhuoz4bE/XafQ8XNfFl6QjM1w3H7/czQp9uEopXJcRLw6cM6ESuO44zt/+/wUf6p7UbPcHfKhPbOvEYhGRnKwjROJgQiSWipRqjQG0eprBnJGJV35wkINEq9XrwAAajAZjmhD8J9k6Ou8CBcGB02SZ9JTTZoeOcDrO7TCWmSWt2pjHHpfi+sf4UMr0n9zS0XnxaAxPNkfjKIqoSMDr5km8Xj3T5ZLLzx3u8rZqJbp05HLDh8Ds+ELR6Ce3c3TeBdai4hy9SiaOhuwDp0+f7p+YnXX445wArkwk4PGByfL7/L6QofiTGzk6zzl6FuDg2VEnGmwf9ASJnPKazddcc822tSUyorCxWg9OmiyjMAuEIs2YZpTaB5kLMRyZIEuZIEtGkKVMXLVRgiuXEBKNDEC5TINOg7oQKMQSbdoz48DG8TNHB8ERGDyKOuEdgkOU0KYN4OIEfECLnROZFmXOf4eD7ySSxasT/fMHStDf10o56AInXbrh2muv3bAUrYYPk4DE+baPbtPBd0+ePPnuwWOnOjo6Th2DNrWICBbu/JhWhSPcoiqRDzxbnwja1DJ/58e0SizGBmVZNrjB2WXQppb51j6mKp4/UAJsb4JOtkkZnZmZiSqXN27durVxObSpRcQrUIh8LNmmtlRNgDZo0z5o0z5o07qwD+MWd8A/f2BOepNYxh+ORGPAIRwqwXLYn2HnS4AKHI41ikcDLI6XomIRuDVtokTgfisRyXMsEuEieyQhYVmuLR/XnIjGE1zS2wQpIxBBSCmRJJkhHyRb8fC6znMw4O1J1ywAV8bF8ZwOO7x2rvPsiWPHTnf04qIww3iV2xEKOZPhCjjwqLfjdLIGAnX8LF5cMvG4ND0Sy0SUCLFcIhoXcEJ5qi0f30gGdl7MCSxPENASikC4/BdOS46Ph9dZTHq9Xq3EZcRx/Qg8UOVKNbxmsuCSzZlZeM0/J9MAr2iVShU8pFky8UtZeXm58AEKBkwRtIHE2c5RIsom6QDwhkguI7Tl41vFEmw8ISdEJKYDwQkJrJew5yZXyOUPr4tI0s4fxgv/YR0oiQQcNpvDMTN1/nCxrBMeJpNPZp1zszY4KLsfQDm9JhYMgb7HFQbUCBR3ghVIpFLjUi8EUQJHbka6RiEBRpAicFQRHwh47baJkfnj4XWF6tj5I3r+MYp5rS6sWLl69aq61U1NTevW4YqFK3JyljcnD3hp9YrlK3ENGKq+DGA/vUaOs7RTiXgIh+ro5WIgRdDjDCdl6ASMhK7hUYfPC/cXEmKCRCJdmrmoZDGYn/q6+vqH0UfLrBhX5CAJQYaXPgAyJ+EoReGwOy5JWQQ8ICmRWI7xnEo5T9/kIVOrNRpKowCZZfIVyqQIyiUS4FRSMJMimpTwKBaLNhPHshJom0AmRYonkRIkG0Rqnds3T5uAxw6KbnJyYnx8vPu993pwhdgpeGXa4QnEYhGf29rX19fb093Z2YlDYk7DY3dPb18f1WcFmWXyUwIYAYvNIoLi8UI5zwqcGMQ1qfrbYGhBf4V4NJEUKZFMjGCQsXzbOhyLI5WCrMokWFwVWrBtGdjoGQx6OX5JLMP1lhUKNbxiMmNxTVZeg4dMs8lgoAxqkFkm/zx5sNwnBJyfX+BJESFPxNkEDkKJAB3wShgBmD1JBzaaQElBb1s3MTNvaTxOXxAfIfh1jow4gucPv8vl9bqmJ7refffdI++eP46e/4d6twtkllmTkr4Jm90bCPBI4FkRCRyRKDTpGblYaJPSi+PxSIFNgFOC1CoYrODdhIKxtnU6JVaDsTjPRbAWSx58ejqHMU0AK7cIC2A4LteVNDQ0rFy1qmH+OP/YQDWUgMwya5KyV1+/uKTInKYTgRITJ0AmBK/PMTrcBTJ7Iim9YacnCNQQy/U4EC0UT1BShd4gT/k2JpBZE8isCWTWBDJrApmVs2x7u1Ta3g5aHylpUTyu1ysZeSjU1zc93dcHGh+FaJFc7nSGGFCM6ekSSXo6aHv8WQBeCvisSBSNDg1FoyC6+LMlJR0d8Fm/f/36pqb160HZ41dPnqyqCqU82jRoRxq0Iw3akQbtSMPt6OC4o0c5rgPaIVYq9fp4fK98JJFwOhOJEWiFGPSrUy7fK9eJxWlpYrEO2gCfw0UO98ojFFVQQFFY4cPnOjpKSvbKt4K3CS7nVrg/vFZVdfLkXnTZKl+2yp8Wq5x12Sqft8rln36rHP8UWOV3PwVWOfdTYJUHPx1Wuf6yVf4nWmX5gvkozfn5KBZsCKD9feJI5Jln0H/DPzLZTTehL9AoOfkGouxyIR9NGRwOAwPXW7QI5dPU7PLls8zfu6r1/FUfO3/Vmz5w1ekPXLX8A1fFc2fGi68aizkcuIYiiF0b4XY3C1cLV7c0CU00RRIEyYj1+hUr0GYaD1meEUulp06hLriHywX3mJv75jfRrTTVt3hx34J7qOAeeriHFO4hhXvQ1KuvoldpHEtFMnQz/y7/bksT/y69j25GB9CBliZ0gKbwmgWzj9I5nTp46Kmq6llwRT1cUZ2a8VMnrxgMAoERBz9wRWGnsDM5w4ko+GFojB2zz79LTU6iSRqVwg882bIFbaHRc/DDfDSlEzDKkB8InEj87nfoafhHJLr++vcpLRa73SgAtwmFshmg4JIlmNLd+fndf4vS4bDNhkZTlA6Hm4UbhRuh1bvPU1ouX7wY1Z2ntEJx9iyYOSo7EoF7+HwPPoi+QlOHLZbD/yRKZ4bDmfBwyGw+xPxD8T9zHzP+55WPGf+z8mPG/9g+ZvxP80fH/1wcj/EZvIcwOBME19Btn8U7fCamp/2XdnmULriky5fSoGiw/WQH2MH2U8f/+te/vn3oUPulRHmSLriEKJdSqShjkb6ktLS0oqyiurq6qr7BfCnZttMFl5DtUjoWnTt9uAu6NdR7FlzIUx2d7ZcS9jBdcAlhL6U02t2MfoR+If7G9u3bb79vM3ocPZM8f4r2olbDNy7lQxP6KV1wCSc+IlJmK3BmK3BmK3BmK3DmGsyZucic1+PxBMLJTSrRqGPUOToNnqDNgYMXwaUfR+foFg2OK1RgP1uuViqlUvriF9qKhqcdye08cy4wn2C7p988eurdgwcPHj15BoBOb0/PUfRnuBD2pQUCiCMSBIlSRV/8QltRnrJEDxBFrVXjRMsCl1ubu7K4qKgovzAfiJ5j0NWgFXAhnw88eye49mBBgyMD9MUvtBW5eFkUnnpDrAgnF4gljg9Yu44cOfJeex80dLCnuxe9BxcqkiuNOSWLFy8uMeslbIK++IU23VYRW7Jz584VBWqcuDQto6QJPUXetOeBDejZ5Pm4/L7br7zyyhvu+soDwJGfwTVfmJjp/MtzP/zhD3/3xpHBQIS++IW2D+63vSK13/b6jzlWztEFYh7cPDgTCRaAFc+LL3mBKRrqeK8TaN9x+gTw4dA773TEvXYfcMfrtAEBxicmvMASiVSFKS1pVVMyGcEmpOefS1LPmSJTpa4Y/Kby0nIgyqK6lRlUBqcHRzDdmJ6ZmQmutgg4IpmLRsFn5lrVXDwUUuvnzj+XpJ5/rHHyHi1ZrCguzNTJWtWy9OyymtrF559LUs8ZdFUz+jH6pfibQPMv/sdm9ESKDf+FHkaM4ZvxdVtygU+awjrg2folVblJnkh+OPfHF48Mu1vVzqHON3/9ix+efy5JPZ8fI2XAkTLgSBlwpAw4Uob1sy1s8wBH/ACAcIB5xI6N+SUjwNA/MTsOWHJiei4QCPi83gl06lKBbzMUaSswEtMb9SqVSkMRhWjRpeLcZnAL8hioK18Yb3pA4ECDNbxEWNsMG/hw3hVXXLEkSwqjOKHR5yUHx8XidontKTtve1g3GwL1CbKFV7Bcrjj0TScncalZHG2OWJ4nSTljCNqnHKAP7DPWgYGBoeFhO3ROR8kwzMVlHQEjctEIxRhk2aQpIyMjM4kRcsor5dA7nR9Xz5ThWrQSiudNmX7GIA7a4/Cc5MIYq0cB+wfeZ/0FVhv89etMeDk7s3rz5s2ryopN0D3dd6de3H+wbw54Mdt7+tWf//S7Hx41UIBX4fMq8tQZarFWHOACKItWigHpUeL5v4z6e6e/95vR3zw/8/xb0bfQPlpJcSC01PxfRl2TWZMny1tqWZorzUUNtDIQ4/lYYP4vo375Ny+7x9y9x3oB/cA4Ijge/AoANzTBcwz6VhP6tfJb5dvLK66s6A53o6/ThJSisRGjaIKSfniL8YqomtWINKzfVJ5bblIlW7ygyYw6Mr1/OvLmuVPfPXXu18kWL2gyo5Zl1mTK8uRZtVny/GSLFzSZUYuO9x0XGceffuVpsJJ/pknuQpMRz0hC28u3h7q2rUdPoQfRU9S2MmgzKb3QaHD6km02QJtzoM3p0GYDtNmAV83F6xYF+o8gghbjPQrgaRHPF6zne4S30FmSRr+mN/HrhGx0jjiErEIhI1r6bE/uF5rQky3gmIgFSkQKHCNNUXIwSUlMQ2mKdLlJ0mGioQstMEALDNACPbRAj1vA+jHdcAt4RJLQH2nkTUwruLk4jmAExRmpLA/TB99TghIJJGGkIiOmCdyzhRI4TmiThrowGeCWLZQIhmzb+36g+iL/GIfZk0VFhZUoh35MHgi4nO3tJ0+gt+CJVBWMF5Zp04F7j8kFsd329tHnf4degie8t7m2Kvert6HP0o99wDf+P6x9B3wcxfX/7O3e3u31KunUe7NsybbkbsuWu3EDjDGYjoHQAgmEUJKgvZUx4BDSCJBQgkNCt7ExxQQb3AtykS3ZsiTLkk71dL3X3f+b1dmQ/BLCL7//7Wdu98rOzs68ee/7Zl+RfdurEdcMKtgmKa4V9bCbSFwjt0mK6xpzboR60ER2U6ME8CkN50vh/EZsd8E1og3s2EhJoW5p6jcp1C2FuhsBscNfnPjNgN94/Bb7zjPwr+jv+K0Cv13Eb8XfeYYL/+VN/HYNfovgt8HUGevhjCfhjFvgjPWpzBHVHo9UiovLpQoBjCMr3e48ErifrsbtnpYZi8WSGi3mhnFNNAqjOwjDQ5LQdiOP1Gp1ksJ8GRsk8gSwXiujIuUKYDQypeQZ5oUXGhtx8XgWCXcIC4V8casVrgBNbJGwSpgtFIrbRGEFfLMC/lEm6MVtMhwvFCoFg7jNEW6nXK6BATRXYODyILUSrBGYst8fT+JUtnjRgILGqK0MKfijCUKIhCLPFNXWLl2KS1raivVPPPHEfXfpdDfcAQcP3qjTLb8fH/z0p3NRI/Pkk0/eskQPwAek1SaoPxpFFGuk8O1JyDhwWLyqkvCKtxcTVHKZJClTyJ+pDodPnsRlaOiEA5SOgcNS6blhQAut26TSN7f+/e9/3/PZp3ixuPmgTHb8ODoOVYOylsEaM9DJkyeHwzJAvHjFWJFTU1NjZfi43+2PxSKB4DPVanVZGS7LlpUGDhw4MGSWyfROOOiXy2SFFZMnT55SXl5WC6+ZIyM33QTqWSO5cCE6xBoPIZBIE41BwOkajSZiO7lr1y6rnKeAPChGQj172dv7BaCDe4EO7k1FBZjq88lkuITDCgUu35MezgADA06GPU+/F1EsFh6ADXTDS3vmgw/++Edc/j9SSRoLFEImEECD70Uq46ZNW7ECl4yMceNw+Q8ko/iGZO5jgVhICkWjTd+LaqaOju7fj4tE0tmJy/ekHtDxM1gyA9ls7PeloqlZWXV1uMRiZjMu35OaFrFASeQhtHAh+7+hqlVAVfek/LuvAqq6CvMjgpQ05RK0wEd5kAwg02Q0KUHhiJDgJQUFnZ3xOEFwpXidl4hj646Q2xeCLosKKAmjJ2PUoIdKZDabzCWRuDlmx/5R0P0Hv3j3t/OF+4TbgF7uV/zuvT02bNGy/8MX5ws/FDYItwh3E42vzRPuEu6i+/vfe+/Pfx5LSk153HSa1mpSMlIc20xjkIUCOHGyXAISab6wFn2APhDWkgq7neFyq0sYoBX95PlX3Hfvj+9ZPKVCBR/pgpr5G350z50rp8xDz6BnZCrVwoWrVwPXz41E+KTb7oXxG2oZGvWBojvsQyRecA1KyURkPnpFuFq4Gr1CeiQSL1dKyPSA1DSSBEDPrAwGRUcBnNsjSJmXM+oKJYNBULeygkGuFPqLIkU7IF1BuZiiwkiFbTiP/LArSsoGGWYQ/pfJlQoJvNgdDAUJWvHe9s64qf66666bl873fvK+UqOhLZY2eFksXKlGozenpZmwtp1FeOCyHrkxf0pDQ0NNsUGr1pTHYuUejcb9TfyQ38OYPgpjek+KUxj7h71A3lGvY/DM4WP79rX09Dtj1uyYa+Diyf37jh9p6ealOqa1c+jimbae7qSgkIMEm0hRCmlcQgD/iJNytTTk8XiCMP2wYx/Dh0K8lCKKigiipoZgAPTiws2F8dsMHDZ86rmlwp3CMsHEO/iL/ADvEYzCEuFe+jengFSO/2qdcLf4o4sf4nv4UcEkXCE0CY8BLTwGDGaVsADKKmEpMIgF8M1Dwg+EHzbO5QdwfgGfizfqCYJQKyJeSqtUKtNMggtbpwaTSgUfJ+izZ2lcAIrjCBgJTrGiPhcYm2XKojU/mg808GsEOEX18HXzJppgjNKnLL7uJ/PRJrQRNKPnDY9dP++aNXMXXrduwbxVK+fOvmLZLFHCTBQEqVwaw8/hgrYzTheO1RAS5OLqvUqrNyglQmLJkgQuXqAWXLjJvohocBXADyr6cnPVYc9gK3CHMwOemC43rwd0/6T/+DkyevpCzH+8NeA8fAL5WLgzNh+7qQJ+pUi5qbKurq5cT3jOHz9+vMPLy6QSArW0sIoDB1CWIGThwk3WIrz8HyG1lrKKgl1fnI4YKtf++Mc/XluuDR//6JOiwvz0A0cSEVoxZ4bOtGTBidO0BJWxxQQhIbDfAkFIVcbhMzu3bNmyq5/IWXLLLbdcUSgLRAUCFRSwioIC1BmLdeIyRmE3A4U9ChR2G1DYLSkfovGE2oSjHimJsHN0dNQVJLAfuydGyPXwtUpvKc7wDg24ej2R4WxjRjZXpVLpNZII9njwxyRqvUqr1Umwj7XHHZbotMqQoKMVsoTCHTVKFEyTYtuusyDAzn6+7c1nGoSf4I18+q/bXm4Qfoo31aY3tu1uHx4ePjTic9gWw1eNwo+F+4UH4ehh4X7K6e06LzKU8fn5ZkCzIHIGXDFEm/NzcpQo6QNdzpdEypyLYce5oZ7RiLEiW26Qqy1c9eTxudD+3KrJMxevWrVqyYzJc1avXr1o2uTxeWazuVRL69LXrbrmpmuXXHmzTpZRDmxlfE+PHWo2ADMwyFDM3mOzjSKRdehlaNSWmVdSkJ5Tknu2f7TrXJfLy40X4oJolicQ2MhPIAVtQUFBhlwIDXV3d3t8ak+HtJC2qyy8J2yKdnPjsSF8LCGuXMRjoQjf0TESo9NBfUynYyMdObQ9mYlsAh3rsqt95wJcuRC2A8cYDQu0KTc310QL/V999dVpt6AdX19fn6UTkMHjEgg+EGIlvFLNjacoUD81OtC2dWqaIKiFCyukgY7m5uaOgLRioU/GBMJRRi4zGBkZk2b6JhYNRqlPAEX84FIsmjNnurrOh5MJoGNfx4m/79ix44s2VwgH4+G9I8f37Pl099cDYZ1OF+k8c2D37t37T6FdOAKXRCIIzrMXHdhXTiZTSHDeC0JACgboNGP8BC2OsYNkBCHI1EohJnDq11773e9e/swR9g43v/sSu1C4CfgG3m4SHmGeeru5s7Pz2LsvbJwvXAc8ZrWwTr7x5e2nT5/+fIt1AXw1R9yuJRqBPMQEQzxP06bp40x4MIIevy+QJGmVVkHjOEWuls44NF8L7eLDI8O+MEFzmuuvv+OO5bVqucZQVr/0pkcagJHApnzo+kXTK2Aka5auu30+2gxcx4qszIY1cysqKmat/sGT89Hz4tZI3A4c5sWxO4/FhpvPuUj8dJFRaLRyio8l8dNktTq9olIHzCccjyYoucHEAFfmJmF5Iw2S1KlTZ4Zpy+S5c+dWm3gcYIBPRKNENFZVao71Hz582EYiQnxkiZRsDX6OBiOcRvu6oBu6nFFZWibQhdaEPeKFiCOYPmHChDyTEHC5vIEgMAGuur09Ozvp8wVvun6GPtH9KfCJT1rdOO7UBZvTx1OSt99uDWYANRXKVFoMoTC+rMG2CgyTWVo0BTudLyzRhS+0NJ84frqrz+5yuUYGW7986623jvTHjGlmvdFi1jApffUqoKVbgJauSWGSa4CWKlRSTPCEwpiRlZ1dXJyZmWkwKI2wMypp0G1og4GmI5HiYpTHKhUKOZHwwzWYtDTWzDDwsyIzk+Y9Fy9e9CfkmX6C8G9iPj5gA0pq/vQNboHwpPAL2B4RHjE0NjZuemPna7D788cnnE7n8b175+GIG8TAwDz8B1Aa78arCLEYbdbr9Ya0NM7Y2ekggYkx2fn5+Tm03y+PxeSbKmbV5oBsmrJ4+brr1q+/9dabbrrp2kUNK66//vpl86qBN0ysrr7nHpPp1lvR/awSL7MHYtAcSqlkM1wuQQjZcfhNzEkdgWgoGgxGkdPZVOH0C4CCov7REVtf34cf9vXZRoY7u/v7+y92ngVkeba7e88eheLDD9HHLMsQlBzbUUScTi5NKiVRa6tbXjBr1qxCuas10+/PROfPN1X4nMNweu+QNwTDdc89sVg0ES4yQF8bimbAsE3LzHzkka6ue+5B17FKg0Gn1WEuz+DYWQaDRqMyXHPNZJ0b6Mijm3wNr9PxyHDJB/BKGMcNKc11NYzjWhjHsgtuTBYhv6u392KvzT7q8AH8Crtt5060nj7RrNO9+iou6ARrxuIPxWKYJPk4nvuxqIQQrCrDuGw9DshGhMLhECd/5pWTgNzObeEWAoqcKNQI44QqYYOce7sTBMuZ1+Hr24QpQrkwXpgh3Cv3+TZuxAUmezFbQlE+BzLrARiB8OExuWr4CF4/DHeOhCiYRoKCYRQcs3RhCXDD3PnXwaTdinaibWiH4ue3Lp1QXFxcd9WtP5uP/gJfb0N/Zu5NS7vlxrS066+FGf0pW5JIaMyEww3c3e8biMBlXM64TIFhbEWOOgH0SisSCQVX5vIkcYCyoKv36EG/y+4ZvXDq1KnWbnsoFjx90efx6M244PijVDiINGprlrFk5jh4VaTxnm4cVmhvlxMpbTalcXTUyJUpfcPYkscnfP3r3x/4Ml408Qogu4VlOZG9n7/+ak9fXyzS1xcJod/j2HbAXEkrWjYX/UpT6/3888/PJaSGiQsXLlScnCs8zuxCIYslhBHrGJ9fDmN6M4zpym9HvFRjNq3RaYDc4zFCiCYBaEZBm+IFXtBrDUa3Oxzm8kFiwR+UCnPFeCcvB5SNxOBXjn5bb0+hkk8ILBI4FfAcr8vp9wz19vzqqaUgw38ME/MxPPPEKfq48LiCe/rpzZu7BryBs2fn4egh4jpOPmDUUYw7ogrll8d78RIr5guBntMtp07mKBJjTiQlKq1KpVYoTWlGw/RpUxdde9Ntt11/w5rlK1esvGJ5eWUmo9Veey3I8CKalmq0Wq0peerrcUpMEQQO6RySZ2blFx6zE7TJbDZxRCzBKoUkoTSaTJZMs5qx6kgUD3mh750DQ85gXp7bzakoiv4aQN/xsx0dMb5JX1VdXT0uP81sNLjDiCpMJgu5ouw0s1lv0eNEk4FAjMKh99LMWcUVVVUTJkyrG1/scmk0nBqm5qKlS5fOnTx5Ek0InP7Q3r17D7f19Q8Np6uE2C8/+eSXY2P0Mxij38IY/QLG6AkYo5/BGM2MOAAD+OUwACqlSiWhFVoSe6D6vHZePhYAIFORhY36qah3dMQ+MhJwhyQ4/AgARG6mjJYIANUCXm8U+5T5QMBAFXKalvGiDVAEo2FCzmAHBzWNjbjUgCdCAalcLuWM7/7h2WeffeWdDw919gLDcvfs2vLS0w3icP7CvPH1z3buPQ2C5Ozuv3x0EMh+99a3fgcy/GepMEf3Cz+TvBqNioohiDxxLw64IcrLlSAYVWoNNiZiVPj5cjEfj0pETxB8p/Kk6H0QCgTxKyxRKRQqUFjj3OwFi0A3nl1bbMKep7o0RX7JxHnLli1bectP51TnmkwmXXIowwyIrWjCnOUrlsNr8dXzNZprrtFo1q4F8pipT7dkY2MesxZb8Miw3ZqER5Rco8dXZqQoFo16vQ6H3T4aSkppKc1IpfFgMG4CkuJm6kqBCefTSRfw8N5es14hIAILf8YQieFFiETY5W3ft29fl4/MKC0vr6gIRiNwfhwXzjJoj1FZVVVVJWlyUDPjGLAkADePDg5acwmK1qZnZBiS7m5gyecGfP5giE8gUyxmoux2ipvZ8TUArc6AvLgOG9ucOD9CaQsqKyvzEq1BJw7MfJGsLKkDGFFI+9qP4nh+E0t1fr9ajQtnydH4ug99+umnezs8vmAE6+NSUqZR6jNz2DwgkHhgdHg4bKqYu3LlyvnlOmALfgH5NRp/2GAIj9FmKdDmeKDNeUCbpZeiAB80nXFWdRcUyGTxuF5fViaVco1IykqlSAJckSPFd+1XRz9/6YMtFy4cP97dfeTIzp3zMP2IpNCICBaUIopFFDf2zhSbV99aNmX58htuWEyYiD1ECXpC+Ckf4H/Ie/GCbyOSs4QcXcEPoiRK8oPEq3yQ/zn8Swkk50Mcp19gG+98SxIMSiS5uf39+/b19XF4LViaRKKdyZi1iT4xbWDSE8uHhszm3t5p09atMxrhXwFWGkDNRUXNHCm+j0nDO+HOH0lF9bwV7vxuuPOaePzkSbF4QXVxenGE9EjQ33u668ypPneEBqGjoAkg4ZGLfUxLSxxdYOeDSvMj2B7UPvyTnzysUeKVFoVKydCk1UyCQg4slZer1KCZ6wvS5BSpVG5M8/vfflssnYcOHTrRPgDysm/f+y/PB7X6bqjuId1L2/a0AXs4c/iLnTt3ngrJe0WoQ/hBSq5nF6OnRET7FOjm98P2Q6UPGzkq07LyMtIVVjPl89IwAfXAQbJ15GivAwRdMLixRq1et04sBbW1tRNKMjUaTfaURTc88Mhjj1w7f2ppdnZ2xeTZCxYsqNX5br3vPjW6h10s/HxsQ38c25RwfxQRsPf3Dg+HrGY+O0OA+/O6fKPD7iijAeKHqb6xhgE4IhZsHKpVK4ELoYDLa+/LyZX7bCcOHjx4+OhxmA9eo+Wsx8MgJ2usValqKyWSyo6Ldl8gnBSAwgSrOeZLpENjS/U0igVGL7S02/p7T5zYWDM6WlkplkFgVD39ww6HI0zJdSWVzUdH6XQc8n5SVRmAgXEN1xrhX8jCLkDPoddhe054lHj22bnCo4rxFTlpaVqZEAomObPU33/mk08+Odhhc1Km/OrJ0xeuXDFnTsp+qxooZQZQyiSglBqglBqgFKyC5lryy8ZPmjhv3pTyvMzM9HRcOCuDXbsTwXg8HGVphcmkQApFk2xkpLd3uOfQi/OhO38BA/dD5fMHe+Lxs2dxERVhKxMCidZ74PPP9w+wMkffifaQo72Py3A4BIFR5826YuXtty/SupzOmhpcYNJYGcwu8+vmzJloYmXm3FxzZlFRJpcWDu/efXL3ieFI5PPPv9j9hcOxfz8u0DTb119/fSFpMqkpVqZoP5bAhUuTydauza8rA0SdmTluel0iMWECLvB/5ezZs8uFkRFvgpWNhkyMoCjP4S6vU+I4lFdCn6xK2WKUer3aBF5a8WkDAQM/AHreAG+IxbxeoBEoI6kXxxUSYccgvEAKeJyuQBAHcup3ufpdkYjr0p5jc9/a8runn376z28lk2++/uJvf/vbF19/MxzWan0+XJ55RgQbRGo/9vCoMBkLYcNtm8026Azw2OoV8YEAH7DbA5f2XLnLlTf12jvvvHNBhddbNWfNDTfccHV9VTjs9wsCLqtW/eAHuOAHUYWUTKGGWkAi52WbyQBuqSotTSUBmX1pz5Xm5PQ4cbhSf4/D0cMXTZ48uYjvsdksForCJTtbEHCBG5coDVmFhYX4WbfSkFEG/0STVKpJmYFA5qU9VxqN9nlA6aUFR2mps7cZYMWxbufs2aGQyYQLSRqNuHAcGTr78YupFZcsUOffe/vDLw98+eWXaONHH2086PcfvLRP8bx6GLWrUpkSGi5lSuiIRoPuQbwiEcQh0bKyefzYPk4axY8owTYqpLm5uRkMHwA8x9IY1QV4oYn0yeU+bq7wU6XL1brrhaampvdbsXHgg8KDkk1PPdUgAoYnyDdO9LfOFW4gUj+J+lqjIt7X1zcMCACQFUtjeKWWkE2kJhLRcHnX6/VZlfWArGqy8NOB9etmQjcVK2Oyq8SHBdlwuvdbDWLgbcTLS0DPZcfalFcG+NeQCwwgDZBwV9fJr/tFx8yh1rP4I07eoMiDs0KMMRdUa1Y7YUJZRb45zWKxMGhcMjmOy3sVJuzJHW+++eah3pGRefNOd0kLCgqy8urGl+GPaALU8Glzc/OR4+29HR0drLajw27vOXN8//79o+iI03lkbJYsTmVPWAz9vTiVubskGnVg/3e/F4jA7R3BOhqvlHi9XgrQmVxOa6JDQyjMcqrwII6Moe/pHhoaijWpmEzRIyG/EJpJN5Eu13NNDSAxYFM89fSzOJzfr0fOnZsnLBAWqP66Fajg/ffehte7WxqEpcJ6YT30/CSolcmEBp8/l6oGLlJaWlpekbpIiV6/YumKFSuuWLoYXleuTktPv+OOigmAQ8dhnFxdUnrLzTejR6Aa8RmNRkdhfASNSyLRZiSBbd3ophKZbPDU9u3b2y/0i7pspK1ty5b9HSA4W5qB+x88sm97ayt6B6pJrwUu0XZqdn1dXZ2+SWVvLikpGVezfy8wKndTychIzrz169ePLwVFPj8jO15S8thjCwGWyOpmNcBr2aK7Zs9Gt0E13XtB+Zo0/dO9X331laNJVVgPOtiJw0vrATldiuJzHYzFHTAW18FYXAdjsU7MZPG/kvVa7Kb7vUS84b8X71pssP+9JHrV/06aa3FAw+8lwKv+d8Jbq+rvV30vwV31vxPaGntenv37y+nslO1T6bci6CkxSmeYcBgXrhHUI4R1INHsV/rxx++9ZzTOE1YIK4jUfgy/ylQqZElLs4hWI9JJ8Orvn4caUSOR2ouYVRYMotb+/lYPizycMifHZlOpAgFc4ELLlqHbpky5rYpFVZzy0KGZM4uKLlzABX47fBi93Nz88nEWpSwb66DlC1IIYwG0fBJ+6icPqlUZFctuv+++uWiT5oGrZ0wv4XlBu3bDk0+in7NWQqtlCbOZUxgMyJZ6cdJjkpG9uzYtAUBaJ0wSGN4ljBcWCU8Kj1HbEomeY/OFGiGXD/Phxrm8H+oYGWEJQNIKrxflpl6cxWSzF6cX1F259GdPLr9qUq2BopLKtRvWr0c3wxkkKYZQIOEMhiWYMWPnVu8Hf93+whLgMpOFBmEOnxAswu2AdB6hnpVImnfNF6YKJfwIPwJXHU1dtb+fI2fNQmUsUVbGojLO4o/dPseQPX++3rNsbTKzakEsVpA1eeKKFWgxnKHTgXog5xTPPouwsbposH7ZJgxH66v8lj2yLBaT6yQoEGZlEdDTcAEtQMkSajXLKNGoIIzigsc/OPLeR/OEnwj3klu3ut3z8PIGkdqnNJngRiaIgC2WSL1eUJ2rq2n1ooLVN8+dS1E33ICLqL0UskQ0yjIVqMvn6yItFpLT5+QYzgTpCnd/f0lJZycu0IgoS1y4wDJhlDE8nGHq7zdx+lOnXNfFlFsNNTWdnWVluMD/2lhi9myWOYPCmZlhSUmJhLvsx5CR8qe45McgwwZuJJlMcjKsFcIHnpPv2LF1a0fHU0+lQplcvFgAfyA5prq6trawsKEBGi0bDgSGnW63k5PpdB6PXB6JcDJ4k8MHHSfr68vPx7OGk0Xgp968vN4UhlB9y25dBW1Q4Zgd2JOMI7EZF0eMjuIe/YnYf6R4WWlJSX09XJL0OBwejhQvRYqXIcVLkGL1l+dwfsqi7PIcJpMxRBMxJCN5CacUKCJJMpIEQfJxTtXW+XFby/ZfPf3+5ue3iXerrChGvV3xc11EYZmUU1fX1NVNrJk8cUL1pFp81wLol/GEhGIJCcUpg+p0dVBQ+of9Cp5TqoJI4RvyK1FInc4pDcNtA3rClVGV6xc45aCeCOSNt7gI7UBbqidmQVvnp3KNzYK2zoK2ZvFiiCcc0AG/xGP8So6OwlzNyskBxpwz9i6V4nUR/KKkYs9ZduwEXX7nju0ffPDBh6njD+F4O0HME24WbhZ7NKu6uqqyHNhkeWVV9YEDe/d8sWvXri/27D0g9nROzYTKysoJNTVTpkyZOLEajqsnTsLHWu0118DtZx08eKz5eEtLy/HmYwdLS8dNwFk+qieMK7WFwzauMVOqVCqlCCcyiaNvHefmApMAMKakUTQaRbRSTxDxoEc0To4T4kg2ZoYANoYQTrWiQN86xmsVXFYkQmnSodXpGirS3W33J0GeJf32bpfJ5PqGtvP+mbYxXYm0JfOEQh6NyaS5TF//QGey/MzM/L6urj6OwbSWojdZT1dXj4wkZUDYmLJFEi8giALh4kWockwoYBLvyszsGiopGeL+QY78Aw0mGRW63Bql2mJRX26RtPVPL7X8q1YpVSdOqC63TF0xfnzFt1qnxPd+uYVKLTEcutxKpXlkxHy5pcphR2b65dYqj9bVHf3HFv9LPyuLJQMgXno6MrCyGEV6knQ0yjFe79YPvN7330d/YWVEOKKUCxIJB3qSVqfRwH/zWFmClvriVDzOMUNDo3aAhUPIwcro3oQ6JzaazzEOR/+AwzE6CjBalpzkVTSTc77kvsPfS/SKisaiYjuiUTrpISmO2REO79gRCu4Q2yGRCHJlJMwxerkcQIdOL7YjDq3wSWmOESeJhJCK7cgfjeWoE70c48fZdmJxv9iOL+eQzQrvpFQ70lM2nlnfGkErtq0UhGRSpeIaSWyexYFIaVK1tf32N21tv/51W1tTk8hAGslQCLoZoF+Tety4qvHjxtXWjhs3dy5m9N+cpyRJWio6V5J4vKKtbpQV6TbKh4bkHPwWT3zzm3YBmd1pWN3iKipK0brlX7RPKZoYAI1RwSDFYc6oUIhCT7X51KnNm0+e2Ly5q2uz2EKOZJhQiIUWcurpNTXTp0+dNn16cfF0rLB+c54So9VkPJZMyuVJaKGxO5KF3K1yaGLqN+A7Y79pW1YbOrPJBS5o4jdzoPif54DoL3xJ2ii1ZrNWFwrpCKmUuDwr/1HyKG+89tob6/z+unS9Pp1TY8L/lgRSjgKBRSgqkoRh4ZSY8C9LIiVmKpelkRIT/mWJpMTEr8rOVgUnT77k4XcbtPcH0N47oL0boL0bsFUm9n5OJuJ8OJyIYddfihJdjFX/7nuuNBwOx8T1cxy6PCp6vmLX7zAOmC/mrMHhEkkJR0EfSAiu5vU339r+5b5Dx86fbz68/4sd7//l9Zef27Tpl7//d9+LvVKdmZlh1ID6ZDDAm86UnpmZmWaEHYxWyItteoLw5g/DyOEcVLEkN3HuTADHRQVF2dmFRWXVdXWz58xbvGTJ4sX/7nvo3Wy/H5QIbDzlx/bxLic2j/eAhgO3lBCsWgLn0gp6Pdglwx+PhLhqUA8QCV0Dc40iSQLBuWK4t3/3PVedkZGeJnpmR8UwwGIArKg5PUOjUatEl3a3GKATR7lzu5VqDVcNBJSUJOIBnNQtzscThJRWarVM8t99z1WDrDp6YN++fUexO41Kb8J2G6rmky2Ac2I4PmdsDmgOsxsWLlmypGF2EqWQUi3QwzSghylAD7VAD7VAD+n/dtxxIjGEV/z5MZdfTALYxS7JZXznSKbTNHbMiWLz9Gg0gbDfnESAHWf5jpHBoUnF+KMMj33foxFsKRQnEc+l/9uuhgmk02KTS40PL2X4/Nif2KfR6bn0f9t16QMDvRfaz549e6EA8EZ+STnoyCX5PbaBb3nF/g80iQM6i7oS9qHFqXL6Ofmf4HXw4J/+NIYmdRcv6jCk4Rhs7VhTUyviKs38+RqtQqHlZJWVGg00TcPJgtAk0RxKdvFiYWF3d2EhJxvt7R0dnTBhNNUGbQpNYg9FLbRBi9vgIQidNKiIck3AE5vk57dt2/SbXX87JV6+CbtGMsWTJ8+dXjmjEq7cBMi7SSbNHIjnM5E+OIUkm2SJr+qpk+rAZPgYiY15j7wKV2qDK/0NrvQmXOlN7D/fMLMyMyMzK68gK82oxnERNLr0nCL8KiyunFQ3e9EVV1yxZIFBKYbQUOiNaZa8vIJ8gzF36vyFMJxLtAtnzagbP658XFVFZXFeOugqbCatUzMywMQ4GKJUwJMYMw2pkAhFrID4hCjskgmBknJZIEEoKj/fCL0ZiQgyTIFSOaWF6UNLmuaDCrdAuEV4Qrdp01Oc9Tcf7DveA9PpzN6tv1otphfBD+x+LvxM+KFwm7BcmC1MEMwCLW5mYZx2f8swDOVwy4GPX/v1xiar9Ro44yfCjaCf1QoV8A9G3ArhItgQ5z7hp8Jj8PtDoDk+IPxC8vsdaC6fZOsVCpkgkLRah2efnMFR0ZRiSAilWqnFj/kYRjE21fGTedjJsQc9STI4vqmSkePT8FPIeMTjDEsUXP261Usb5i1ZturK5dPLC0xQmyVv3KKFCxYurJ+7bPX1d9z940cfffT+m4tyAAnI9bml0xrmz5lTP2fm1GVrr11/5w9/+EPNbevX33jtquVXrLzqmtX149Bc1MjW0/jRcijocniDwWAgGAKdXyrDNNrV7cJRPbyRRBLhuZmIRQMwf+JEIgYsnuTFqAmJoBr7yFN8PDOnqCRTTXP1bT1uPMFGh13OocHuc+fOdfcNig5GQ8PDve1njn35+eef7zna70ridIC+kcG+rrbW06c7LvZ2nj/fA4hJ23m+7czZltNnz3Z0XLjYi/aw9cCDA7G4oNDqsZEMGeoDFD6IHeLsDr8Y9wA4KBY4gUA4EhY9mrx+f6D/3MnTp093OsKMGk4zqYCYJFKaSoa4es+IbWigv7e9rX00zgNs0ksp5MQVRqO+UMDtx/FKkpFkFBsiBkIRrz0AKg9NMwmP04WXYLQjDrfT4QsMDw7YRlxR5GLr4/EkDr6g1OJFXldcidcDdEajyZSXl54OfF5JShkpMCRKKZPgK2aYNRolDLWloKAgVy8Nqt1ut31gxN55/mzbxdF4ao4vgpm3GmbeIph58y/lMRrs6+mxDY0MAYNpPdPRfvpsW9vp061tbefaz7Xbh0cdqJ3N+08WCpwqGIpEgoFY2DU89MJz84CCHyM2Ns7Dj6zUGzey7LPPP//b39ockTiwjp+xef/JJIErkMqkUpqk1FqVctLEmvrV69avv/qaFQsXL1q8YGFBkVGCbmDz/pMpAleg0ZtMRr05r6y8fPyEioIc6Ll0k1aBU/8Q0TjBIBP7T1YI6n+0QuCAH5lMugwdTsrm90dJuRj+JLMIWPj48VNrq4qQnv1n+wP1P9of/GsPLRwpVb1vX3Pz0aOnTycS772H3mJRgCUCuODYOZx6795PP43Hfb5QaMcO9DaLJCzOtghkxyLQpwsL8/OxOUlurlyOHeaxqxMuY+dqtdg++uLFSKS/H3WxAPkJAy7iMhjx8MPzgAW3EXV12AHyD4RMNg9FUKRxLhJY8QEwLtCet8baXpDKUFsEbS+GthfjyEEeT3u7x9PV5fG3tw+4uro4KgBiz9AkjcXx3OcAkR45Egq98krIf+QIEXnlFVFqEBKCRe4mKYFEP3q9QjF1qkKxYYNK29AgyDdsADlCJQ1IiDdJJQGMjTmt0VhUZDQShO1CLGa3EQRHGZxybQErr6qqIAyg+xo4rcvV3Y0NZB66r67u4R97vRwlnyrxf8TK33jjtaR83c03y//nKBTAnVTiUSiOChNyr76tAsgwgW5hqQCh8vlgB/OJ4dRfxAIf7X/x6U/D4UAYNbGURInw0ptEXJJUu9v2DPJujyCX7/kQho9KOiOJBOwUkYiCk46aHfs6t88VnqS3U5TDjViWMsQ9JhPs9B6PniMyps5FL0nun1s7D/0KPUMEg/PQS+gVGIenWUo+uRwUCEq+u7x89zdYqgFaXwutr4PW1+GMGHFs6OAbvHjmzJmzZ5ubj5/oH8X2oQp0igVOQo9KQPfnRzkG2BmQfSIQcHG0H4cJP/jGUpBba8XtathuhG29cLus8ZXtXf02GwzXAkwM9GctwJRPfsYxR46MwCTrO3xYzllU2MaheNaV999//513/vznP//prUtqM3DasYdZFGbpyiyQGnmVHLNuXQGwqenr14c5i1QKbez3JQE8dXYCO2ECnp42+Ar1skpDMhm5iO0xI8kkK/H5eCsZ9vsNnMXtvuuuu+bkkV1dXWvW9PX1DsfVlumzZ83CAYnlMllO3VVXXVWTI5OxkoGBiJUc6em5lDd9HfTWD6G3rk1lzMY+0ZWdNg+OHeTsunB838F9Bw73OKXOI0eOnGzvbDvy1VdfHesacuFUWqEBtJfVSaXqtKx0/JhwXFVhYZY6yZoFXZFSXJAxZOXk5uTkZFqy0rRKjvnThxeg3vMf/PmXC4SHoRuXwbaW3LTz7PsLhEeFWeK2TtL0p6YF8OMCcbuB2fin7eehbzt2iBa2rCbgjipxzr+4wDASnmbNvMfhi6NYzO2IqsSMNaqowx3jKudPTpfJZIULV11z870P/vDH18/IKFr88MMP37Z89oofPPLII3ctnz3BBONjHI+egGoVKlLC4HA7OrksMjzEmqP+kSEfCocFShINATcPRSWUEOYaKwgKB+9RZhgzsjNz8opM+uPdIEgCcaTIKi0ttUj8Izhn5AU/jt+riXvtLqcdXlG1OhGQsObESJ87gVpaztnscZ3FYtHF7bZzLVBtDBuVd5w42Xxk9yefHekZcN28sKysrEBHu4/u3LnzmIfObli3bt38HKSCaiOBSNgLwmHQR8vCPoI1S7Wl6TS64oqphqj91JdffnnKHjVMvWJsRjwGY/wYjPHjMMaPwRg/BmM8GzoQhwHmBSTBSiISoi6XKyLQOp1OSv/1r/Q77/z1L3/5y1/ffufd97dt2/bBu+/85aWXXtryzocAJbahd1g6PV2nYBRSq14KO116UZGakQNLkzGqoo2WqN/ndwH+cME+ilSqkM8rGqMHVdxsm5MA2iZctvOHoK5D520dABk6bA442TFwYHf3niNdw8PDXUf37HzjhRdeeGPnno8/+OCDj/cchj49jN5g6QSgoiQirHrQN6KxhNsdTGLvLmky6N5oAY1oLIAFRSR5BLKIwIKfIaJ+bnauWQrDKDXlVuAkoNMrcksnTZpUlpsG0C9tavWMhuXzJ4PKMblh+bU/eOCBB+66dvmaW2655ZrlC2bMmLEA3cFmqVS4JtHYnmAMepXZrMdm1DGBMZg3wrxNBv2RSCQQTNJSxDDwEbtaJ2mGm+3wAeuTCz7HYAfcxflBRxCYTNBhA2XH1mV2fzLoiMIXUcdgT+uxY8fO9Ay6Qdq7B7EZ5wV0mqXjcUQI8aRVn4wLBIq3twcEOYB+Rgi0w4VpShxCCaLgwhcuRCl1eXm5hope4GbTVBy7wVG0XJeRkaGT0TGgxBhtBABktJAZE2onYRPzikm1U+YsWrRoTl1tOfytvHbeqlWr5qGVbBZ2nQPVMo7ZZwK05pwcdcLe1tZmT6hznlJIpDLsXweTQcIqS0vTpH4YZL80rTTFW3YA3e0HujuQyvv2GdZh/i909/bbb26xbNny5ltvv/Pe1q1b33/n7S0vvvjiG29v27Vr11YQ/v8tUbLfRbD1/xeCbfrVlq3U1q1bnm9aLjwu3IUfbMN2Fxw3CU+MPQ4XnqCbnvvDH/7wHPC3u/5r8ma/i/Tr/y+k/8SPb7ueuv762370xHL0FHoRvSZuf4DjJxCXckJoop946O67734I9Jvf//cThf2uSVT/f5lEew60dFg6OloO7Pns/S1btrz32Z7Dra2th/d8/Pbbb3+M3v2vZxj7XbOv/v8y++6+66a1xrVrb7rr7nsfeuKJJx665+4bV6xYcePdjzSgJrwRj0Bfc//1DLV+x+T9Hysdl1dUBUpACST4BEEjcM+rPjr50dbfbN3xyo4PD3wo4tbn1dXG6tora2sW1UzKnQQo9XmlLC6LSqPUdGn8cIIjAjwr4wP7+Lo6fh+n9J/1qyvVkeGIPAOQp8JUXm5CDWkjI2kNY214BdpwHNrwCrThj9CGP2L+ccaGc1B7Oo7t2/G3v/1tx+dfgBrx5dHjZzpBR+w8fXTPJ5999tm+ffv27t32pz/96YP9zZ1RnDNr6Myxz/72t+3H2o4o4fdDbThwZQ/agnVxCS8kI6JGC6pZLCYBGsO+UYmEaEwrzc5OJHQ4+V0kEcXKuT/OSxTYdUMDOlEiwcTHXKkAFXPyp/52HpjC6T81LhduFSYIOnErEGqEeuEKHNFLWCM8It/86i7AUp+9snm18IhwnQgqrxaWiNsMYZxQImSLWy1U8aTsD4cAFDS/3nSFcC9go1rYGoT7gHfcD1Xh7X6ae+2LL77AaoOMrTca5dAYNyip9jARhHnkHhjAyypwc6KSnsAqe58LZwlC4s2EhXgEz6qYP8kYQyEmHAqKfw+Cwj65Ig0QXN6M+Yuw8dl9G35wz4Y7NqxZ3jCpoqKibslVa2685eabV65cee2dt2zYsGHN/AWzioCF51TXzbt6zZorG+pXKW+G3+dOAJKuRg+w9U5nhKSk+uzsbKOMxGYaOo3GPBZBUy4uxWRnKxS5OnyEaI0RbgVRDAJVNSmjwk68dKMQ40HCi6v3hAQxTEvUY8OJs2O0Tm8wqzUKbElNUjJNuslohB8GR/0whKFAOGi32WxDTq83gJ1YnYIS6ifc3cAnulAfTtsmJfmxddR4DAdwxNEXRUcyREqs2MuQLXY4oAp3QNDh5W9GCDtwjtJROU21tTmRAfpEz9vbuHoZ4cWBPf1JRRbwD2l8pK2ttbWjo7MHzr7Qdrr1zOkzZ0DXMGvFYKFK3msH7BjkKVqlVMqlxKgSoL4dmUG/TgOglx2LRRISEjeJIqV4sRP0Al5c/kWCYJUkvV5WE+LxXQPbx49vBQlrxBpMcNQfmzrVgkaOHz9uJzOnjs0oLmXbj6NycjCjmvCM6neCOpEMu0f6u8+fPz/kxS5qGoOOodtO8JTBosIZ7yMBn2cEbmzQ7gwSMAQxZ3/LoePn2s+0nb3QCBCFTePjYRyoP5YkpUloZ4JHbtugw8Mygz2njnU5eRJ60gzQWRKPBLy+YBi+IClaSdMCsTFj93EcXsZ+6ov3X/rlL3+55f1dJ06c2P3ee++/j4P33Z61/cP33tl9srOz88Sn7762mWXZ3733VUsfSIaTO/+wSHgAZtFVwnLY7hB+Itn4HsyF5dCguLO3s3vYF6fktAYIBy/FZ2YYdSyTmVNSnp+TplVJrWkkTSlVFI9dHL3QCYloIODleaGpPjsdp/xVpuWU1c6ePbumqhgoJm98VUXF0iXjJ81dNLkMCLmgcsLEKdOmTZtUWZihAYpJL5m67Jqb1l23tKE6uxGtgjZIDTkZeH2VltIJUJjCIY9zaMTpZhm77fTXF23OUDhhJYQka5BIabnaoKegqwmVqaDUKJBN9W5/giTFB3M4M014uAPodd/fd+87cFLnHOpqGwpjh77Rgd5OHCOo68LZ4wcPHmwf8ssM2vaOEbfPhwfGasbRfgFuUYw6B2R8tl6pz7KY9Cwzadqi5VMKTToFibuBVpnS0oEeg/3Yqa+vw+YCydZUn2cmxx6hUzywE7WloqGhYdKEidNm3gLMxDUyNOIDLVSfUzodBFjD7JnzV6xZs2ZmmUFIxFYsnlxQVtSIE1Kkwa3LlIxcCA524eTrHQ4+IyfTBEMx4ooAn3UM+5LWtLh3uL+n1zYakpsrAaSMk7nbz/qVkpQ9XE7qGWTOt3L+6Lu7fWExz1h4aKi1tbsbnWNZKWC0k32+zfqWlt27sbrZtfvIkY8+eucd9CL8CM2cnKvdrM/MnDAhA+jcMsFimTChuhoUZVaK0zr2eTbred4xagfZ6B09cGDfvqefRs+zjXQJKF+LSpWb9bGYSYHw8qciOzsjY8YMVAS/vgcTtsxEjUWZeRvaeh7a+j609W/Q1rfxLIv5w7yUiPEYVzqcI/YoDremz8rB/nByn30oEBGj5YVHhoZw9kapRIIIUEe1SmnC5x4ciekFdV5enkpK0RIJXuylkIetDwSiEiGCE1cp5IzWaNQydGK4ZyTux+FXM6F9eq1aEgnQNIni4bFFWwmZFONASygaebQeT5KnGfygNC7Q6sJ8Tvb0+xdHes++u3GhcKcwU9yWCvfKnt12AU4+98o8wKsPyN6Fpp7e/uKvrwSp1CBUi9tC4UHhBeH2VCiPaTAnHwb59rjwhOz1o8BW9v/Rij1rx4E4rAApdrN841+AM331xkZ2IQDiKsEobjcRv4HZq2DrCSJJ0kmMBGOxhCCRqRiJ2pKTg21PJFI+Gva73EFfhOD5MIBkimGUSq1Oq9bhFFQUn5AqtAqFhpHTJGC5IPTs4CA3Y5o5XrysMG/S3LVr1y4q4Y3p2JGuZtWaKkDX5Uvu+dHN16xfv/6a+RNXY8f3OWUlRYVV40Gfr25Y/eO56NemO5bddd+1i6qqqmZe/eBDd9/z+OOP3zAFIJiVVfF8yZQQfjzJhyVStj5k9yS97kjU6wlTIQ/MPJlRjSNHqzUqiUYnRq/2O3yxSBxmb+8poxoILQkiBicqUjOCJIJA9g4FkqG9hztsUZCeAKKBRVFUbOh8Z8uhQ4fODo+MdLdio8RBOgNIQkPG4gJiDEDNKOgZvNCbZkT68MDXX3/dPTBg6+/o7e2N02iAnWowKMiIu6+vz09osLEFfhqanm6srMyQS0Iuh8MZjCdJlWFoCGZgYXEpjt2bYTBpaauJkpvya2pq8oA/ATMJCygaTyS5eoMu2Zk2bVJarKOjw64ax/hgvHAM8Um33nrr8nI6kT1jwYIFUwtyw8CXLsT0BpOZH+np6RkVlJqcefH+ET1dsnTp0pmFakUhToRcnANTqV4mc7UWz7766qtnlpmEgNsXHLnQ1Xr0yJnW0bipqnb6zGmTxpfn6WS1k80SR/uZU6dOnmw5095rx9hfP+7cwU+0n3xywhZUmDIy0sy5ZTXz5o9JvkdhTv4S5uTtMCcfgjl5O56TX520A/ewn/xq5+u/+c1vXt/51Ucvbdq06aWPvmrxQW/6Wo6e7gFK7zt9Yv/bf/7jX7441joM0Gno9JG/v/bSn9/6HD3HshTORk9YKQIH4rJSAo8k+JME8fApFkGMDBtyqHAKe7kCRfBUFTYxWz7rgdnU89mWZ/BC11xxWy95ZsvmBcJt4qLYMuE2/eYtH7cDRGv/+LXtLQAeTm57GTsa3yhcD8DwDoX1lQ+OQrcf2/baU/NB7t0C8+1GwgqTZyo0KhpBcpmVkslRJGr9h08cIp6msFOsYBVDqj5dX5qrw2Ast3TifOx3NbF00gLYL5h06fuKIguIvqyyidPnz1u7Zk5VvgpOVoIiedXaefMmobXs6zn4sTKPE6/FQMdU4HDtwFBiERx7HGYxV0/980uPI8+U6alwL2hhvWEyiSPH+xMCmZa7dFamxHsahESLV5LRsAxUVCRnnx/f3m4LImUOqFY5ShS0tTscfsBAShwwOyu3YtasWeO0hBfnjzrv9HgdXH3gP7zivgHgw7ZRV1ymO3i4L0jljh8/Pk8eG/z6kFYpR8NwVwDLsOkY3LxS7sF2DgGeonB2RINZHknFSvlpyivrp0BVjwJV/RSoaobT6Qlgv0HHUDA4OAzwbnQwFAp4QrzbG8BhRrxup314eNjuhD2On++G7/GDIi8aZfMI7D6okkspHP5bwSh1oGoQBKMktFrAEVICMJRUxuAnOvgjjvIBihyj1nKTe3r+vh3U2c+Pnzh3bv/nO3fu/Gx/W9tHhz77y5FzPhhp3zmsc2ze/MquI5+/9txzz7322ZGzHivpOQtaZB4pxvonYOCwnh6JY4hJkjwPwj8YTpKU1UyRyXAQeFwIPpJAASR8DkW5GTpddiYwKZUAAMickZubazHLZMUWY5ZeReJ86yq9ORuU3GyT3pAHIDnXpNdK4GISLapg84KYEPmwP4QNnZJwM4B2gkFJPOj1+kMAWqxmPh4N+r0ulwc+CnAXAPlDHhc3Q6GI4JhBwSQTCknxU15G6vfLKK+LlGIVQS4lCQzneYIcs1rE9i/4JUERdhoGtLyEVqoYBt8nhUMUgdwQvcJxAHOsz/HYqTIWE9ep8Au+j8e4GXK5MRNwfdWU3Pz8DCNcyZBRVCRRFxcAdgLCVxrTs4qASIuy07PSgVIyMtNN6YAU000og80Degi6HS7nyMWLMLFHhgexUjLUax9qb78w5PDFrea4zzF0Ac96nPYTO+/jA+cYrY0DWpuUymhdncpondHV1dvr9zc3b9v2wWuv/v6555599oVXXv3rh1gd/zn7LNwQDpvN88Fgk97lGh42GPbvv3ChbeuOTU1N2K/sZ/TO7YPnz6NfssAYWERYiawsThqL5eTE402qsrKKCrl86dKVK6/82eML0ati2M+3YNsi/cXP1qxeDU3ZwqJmlmjGj9Rg393Nypub5XKbTSZr5iwGw4ULEonDEQh8ebJ9aOdO0GSP2QaOHUOfw+UqWFRhJXp7OalOZzDodE0wFjNmCMLUqbNnz0Ws5M4bF85DT6Gn5MuW3fSDK9c98ABc7TkW2VnCjq8I+/R0Vm63OxwdHU6nfayPZkMfzYY+mp2ycZ0NfZQzZiQVi4SDOL48qB4B2AXCOAJvFDlZuqurZ8QdiFv1cZ/b3tvV3z/iFm2Q3MP9XE7PIA7h6h3s6Tx19OjRU509OI7O+Z4hLAjQVyxdWppjNBgYq56BXXapxaI1pGk0mjSDzsLlSGkxby89lvcAkyKONSGV4ucHSMHSBw4cO9fnjFn1MUdf+7EDhw+39rmB+Nx9rYe5nGBMzF0SDXoBvgzavUHs5J8MukALc0E30Hl5WUatkrJKKaXWmJXHAgBMAziQpmWacnTyBNBaQq5LL4JJV5iuU0JVCh2OH2tGuSx95sx5m92DL+yx286fCYfddswPB+zu8D/Fa2e+HSkxEY3xKITjtXtHgmLgdrlBLUNGMZz4gBONwEHQV1+BprCb/mUkRx22sEwCXhFrCrObmYGL52xibafggypNrxRrTIcPQ0NHTom1NrObielT5iKOvl+s/HF281gbNf/URjEmOWgpaiTF8feRkpPa7W1t6EtoltlcXo5mixHmT59GHXDQ3z9uHNKycD8o9E2sTXXKwkidirXJ4Pq+XecmBteZqnczg+tN1Y3NLWFUkYJj8EVSF9rM4At9+2KbvsP6NAASIpFwu0EUIJql6CTIVI6x2XoAMDQ3o/04IhyVodbp1ByTna0DEV1cjKrG/gts0ouzDbS344KfZ+ezVH4JSZbgfAWzZuGCJrLoNZZ67UAkcuC7sqleasc3bZHTRp3OiP1GOfWl9nzTJnmGSqtVxXk+zqkvteubtslpPQh93uvlOfWl9n3TRnl+hUxWoXO5dJz6Uju/aav8tT8fO/bndomkPdXe5am4IMtTEc+XYy81Zzh86lQaQdpGgjCtfS5nDCZecHCoDSevOI9z0fcOIYFtRG5WEg4HrBlY4CSIaDAUxssZsljQDcyfj0aSTXOFeqKrax5ekCO2H50rlGg/PDwIPKBl63uHgCWf+PD3y4QfYQN32G6Efy0Tlx6WC3cR2MouC67BsBKG0Vkzkv7B1vahwc5ORwiDoZBdqdGQzqEw0VSizc+/6qoWWfbkUiM0NE2fZgQZll1ZgV/jpk+bMmVKeQmqZnFsT4lSmWfNIBmdOsOUkZ+mU2EbE7VZnkgg4C2SphKfIPh8rac/AmknoitP15EjR3oCYRL7hJ081dLS0ulCn0JdlaykqiqtKY1PIj4rXR4fws8xBkcTyWTEOeyJN5XkDQ8XFKy++kdyKbajjySKZoOuVJdlzsThqO/5wZ133nlVmehA0s1K3n232ZqBkwb5XF8dcalK8XOFidVZNG2smlaqTmntj6VyeGJ89DiM1aM4lkRQNBWNh4N+D8A+jz/oA+XD4QoEIwmcwiUawqFOwqGA2+10AQwAFBEN+V1OtzsAlEjrdBoRB1UDDlJodGMfL+EgjU6tZuQy4LJSHESPJGU4ooRaBUBKzc3Ye2oUuOvoqb3bsfvnCzv27nz5mWeeeXnH3hNDwO+HTuxrxQZrX21/+YWXX93+VQtgs5a921956fcvYXH6JEtfAkPV/xoMxeOxhJhmKcknoNFEMiamUAY4wWUCVgAUojBmZIvwICsjBwf3LsvLMMqtOTKDWQciQWvKLCobV56TpoG70abnVFaVFWej8Sx9CQ2pxtCQx+MNRRO8NQ+4aAhnSYlFw5iacfQvQQhHIj6fLxAMBf3czASPs70AFIqFcQgLnA9KDPiQEDNBxTDOwR9x6Bo5kcCxoUNxJGfgM+Ck6f8JDmHwhisUCAoHm5bwmGrgIrzAzVTQ2MaUpxUaHN4/Tatg8NqsTK5QqgG7alQAcaVSBrR2jd0tKDOgMywqicuu0WmRiaUvAaKyMUAEQAgnQhdzv8JrtL9/2OnDYGqo5+L58+cHHX5QtkLekf4xPj4dqG5eygJkMlDdNKA64he/aMARtJDV8ItfPAna+5PPPA0o+Olnnn3qqaeexWapcQGUOUEq4NuKiccUfMddIawR1gk3iNs6OF6F/e5gW6W898GHHnrowXvvvP322+/kZDDqYhgOVo1Zy1hIDgLxSS79wAHQ2oEP7d2798DNN4FufNPNN9944403czKccQp73LBqjHwJ8Rg6mOTU+4+DZnR8/2cfffTRZ+6YlY65+y9evNjPpctkQtQHbMgbxbEy0eVjTrbhyhkzZly54ZEGtBlvkkcqM6x0RuWsK6+8chaX7naTxoK6uroCIwUaCXX5eKzHsqDHslIW/lnQY1m4xxKClQYSwy9s0h7icWYimg+FOQLUSjoaweH2whxAC4mYygl0X4ojQNUE1MPAxGTwWWNm1jH4M0cM+Ky0b6D966+/bueUJpM87gIA7IrLTRxRa7LSpto1d9xxxxpOyfNqS/HkyZNLLGp+rH0yaJ8sFbdZCe1TYi8ulwcluE1k2zkUgN24CqSCXU8cdXAs4XJx5HIluh4OKyv/fR2NEp+L5zY1SnrbxF3eOAne0T0DXCPU0QS/L58Hh5WVY1a5CqhDCXUoU9nhsMymPV8fdaH+/qbNpM/e5WEJX4LbLIspJwSQ2xSHQ3+0tR1ZvGNV4qY1EfNWA8SlHkG6+ili7ezlK5R9K2p8BVyhAt+phFRJrAoxYbyoMfFNtD0RAQDLW+VCDGe1dzjsHCkP+GNWJQDGoaGhUTewCYKjs1LpBeSknFGqVBpNFkf61YLcqpSrjKCZpFnSzUYZR8e9Tm8okbTKQflyCzh9A9coGexwWZUhJ4492t3fPzAwyhlmayvKcgxyIFR5Wm5VXd2UKbM5kimoMFmVKiO2fyk0m02mDM7QyQz22oM8SDc+HHCDCD7X+c2TRS3coTZlQ23E40BHPMPnBykdtoCONDXS5w6+8tH5fcPwUS6Hj+ayWSVlaRnwEfq5kRa6OmTJrjNihz7dSJPrrq/InTo+1ZPV1U3/4zqX7cWHPRGklfS3j1Use+XgOTSyv2Pn2GVls8rMKN1cWgwfs7ObZB2dPDpzgZdxIIUpF35xsuuvlaCJs4rGcyBNqcrKeLzyG5u5S9m2MYrKxzMolGQZmLAh5+Cgw+HmcIRiCjv+S+CoSd3uEhCInfaju3Z9uH0fJ1EoeFZcm4mBNqXg1GkKAM5qQ1pmfn7VuEIO1GYJoDyQDTRLSEIc4YmwTG8v3BHP9/QMc6wCCGEYBypwucJNRJmBZSorK8pKiopWrpzFqRWK7MrKqpqamqrKymxFCkvVQKtroNXjU5xysjjveatGSIjrN6l33orTDklgglu1OK/2mGDgRaHAEaGYVRMN+YAx+0J+eAdhZUWxS/8nEaANPoGwOakUJXiOoEirhhKjB9DiuxS+wDmOcBx5qySJSCuu3gqnE03EaNBqCIz2YgAn5hkErdhut49y6RJJIoyZny+ckLjd/jCWffGw380RWrnVINOagbjNGg1O+qARYQLmnXpLfmVlZYFFL0tPz7BkgmTKtGSkj43gtJQPxjToi2kpqcG094w6vcEwTzOsOuod7bf1dp47dexYy6lWzkIQII6xmkWJ6p2UEaEGzhzAWT7ffejU2e6+IbcHReyD/V2nj+7d/dm2bW/8bTtnEQSawYbCVCKBOzHsF1cy4iBbAb0rNDhpF0NJWXUy6AvHk3hJUcLIaXw9UYoH46AVYmt9EKVqtUK8HoZAQiwUcA30sWrRgVNCK3VpaZGYhLMkk1KVyWKxKGKxEAzPcH/XuXPnuuz2YJKzLF04e3rtxJoJEyYgiWVS7Yy5DYsXL1267IlHb+QscJlEDIBRXCIBBad8/MTaqVOnTiwqMlAp6lGmuOG3OeqYu3VSqQSCwWndSeybD3w5HI+H4Zt9+zhS2tUlhcMNGzhSUVGhGOv9Yqir4p/4niyZ8OP0k8QmwHcCZ5iYV1SIEzdmZWUXFANiqK6eyDEX/QEn8DuXL2SV4lRxoUHO0Grr6RsaGgFB5xga7LfZentbOaZCm2MCmjDpGKuUBnzImDlaqjVqFUB+cqlSp8dZM6Qc0+7j7UBufUB50hh22nNyhk8Hvj5+rs8BneHoPnvkyy/37PmUY3KkSQMwvEyjEnRwvd5g0HCGccn8kmy9yB61hvTxEyZUj/sm00nFf+brqoRGAVoCzkGvVzEwB/jEv+TrhvRv5QIBWCVXKNL/I2P3fBdjn8oUFaSrJDDfJbqM0urqmpqp/5qxn0icb70w7AWp7rUP9TV//fWxEyl6+FczyDLglyJKlvT3A1BzhEeHXJ4huJGenp4+ToOJH1E4hb0EOw6xckHM4ElTPGexO6Mo6OrtwnEpT54igvZgor/1CCCpdk5TXl5aDNM3M9NiNun1elaOn9XKVPrccs5y0ScAMkoGsCGDEOsZdA13hnwu4BmDnKa9ve3M+Ys4lM8IJg5W7sfYJBQEeWAREhEU8fvDNF5wDUhlo6PI48Wx+KKcJj09O19EQgKlBFbCymU4MFxSAn1uqcnEGE5t0GMjLao4e1bD9JLS2pUrV87gNAC5w2Yj9oNSYIsHuD/sRqfm45f8APNSunce9Fge9Fge5r8SyipXmGhxjks5qZymEbADKcgHKSXjCG/YKnd1O7FeFHRxVH5OerrWKpXrzFkFBRwRhpNJWb8T31iQU/d1D4JmF0Jhl+1C+wWOOG+3yiNenIa1q/UMJ9WbZCgRZ6XxkD+aiHLEmlIAFInlVyxZsmTN7ZzaGUgwjEyBpObs/OK8fzPrFZdnvc3rtaVmfY5WmwOz3jY0ZBub9eJ639isbyTy8lL64bfx1DccRKmE/+g0TThKAUcmHBEaTpTJOHIwJIvC4RdfcGRxeMQMhw8+yJFHCfWlzHqX/ECL/sFqCdl9Z4e/PuK6QLgBrTLDnrIpZGxGXsjDkSS6eHohqPELhcnCNGGusIY42sMpgwPdZxVhWaaQZhuBi1hKFqLn0V/Rh2gr+gD9kajJAozKpOcH5EkXOZqm45T9iPLQAWKwZfjkAKdUhBO25GBI7lQ6FZwyCzXUnzwsZLSdbbgWEDG9duHnf5dH//zupPoxzjAz5Zc/JWWvPusftBXTv9BWkJz9L/QV9bf1FfQl+/9aO7+gNo47ju+d7g4JoT/AWX+QhQXG2B3bYYwxrQmhmeLYTsYmk/FLxpPxZKbTvjllksfmgeWu5sEPnT60nfH0oY1jPzSTjge/dJpmmjpuihMMhTrGIWCDTLBsDDGSIHASp/x+pz39AQnQTKTRsNyddk8r3e738929/RUnFn8xYiG76faZxcqYhVynJVJLGaMW8iK5SLcgl9x5AUGovSAjFysjF7JKN7KLlbELeUY30ouV0Qtx0438YmX8Qr6gGwnGygiG/IIWYJhcR9WMaiMiw4C67BORYsiXkECOIfshgSRDpqjBMiKyDDlFszRTKLceAWgGc+sRgGcwtx4BiAZz6xGAaSC3NNUIQDWQW5Zrcn3aHSzqtck1lNyiDG0s0SSZoBdtJtyQ5zAWD8MbcoeuAxzRABz4FinNQE76Oq1kETArWUyhHcYKMowBSISmKcDKKID8iaY5wMo4gLTTNAlYGQmQcZpmAStjAXKW5tNAbokZt9WkAaNEKMBm8oBRIpyCzSQCo0RgApvJBFBilgpsJhVAseu4IATl1kO59VBuCMqtZ1xgz3IBeUrzycCVTwbkGl3PBq58NiAHaCE6sGfpAH9IG/jAnuUD0kULE0IzG3VqyrmbpiAhgHBfoSUxAq/hJy+FEngLNH1FOUEuwAnkHt2cFOQCpEB20i1YoY2tsdgGtdIGtdK2jhVc+axARuhmtBAoTgvkL3S7vODK5wVio9slBlc+McD3uBkzBIozA/k13ZoazLamLC/6rTF0wrjBMjREhmg+OVhu3CA3KGMHi3ELXA49FPo+AsWVJ1wNm2nPQHHtST6jm6nPQHH1SZ7QzfRnoLj+hHZmMwUaKK5A4areWoPWMeeijt3tV8c0aHlGg+JiugVUaHlGhWJLuFGHlmd0KFmihZRoeUaJkvu0kBYtz2hR8nNaWI2aXu+hErxeXdd0nJwg6MbggpG2wLbter0gvkDwCHgh45xbzkijLNrE64V6Nxx6EF29Vt1IJtdSanGjtwKnpYJIWdZFaJnETHorozcSSVbUwLVZU7EWiUTWMmlWX4Wc3h5ogSVoVKHz0BV7NApqCZtdfTmqcPHlXmk5HoWsoood+ieC80ChibEpnBMjRzpln88no9MLv0EMzZFKrXd6/X4HiUEGMeLwK1yzp1fyNHeBTupS7ACbDh+GK3HwK8oGJWJnrQMXeYQ381Je0zSFG/gfJQAVPMZ8FtyecDhl7gmLoFUUSvjfCL90yfKvYLtblovn22N5GIlwgMPwbrXH8s3AAJwE5qsKtU2nTvkye/zh8KTSS3hVePqwo6MTtsuyW82s3eOFfL3MEfZiT6BPz80tk+mpqWQ6C+P8VNvC48HBWSLFYqwY4zOoNuu+9nYPkfftE/OOvhO+evUfZO/SUhiLVqB0W4Pn0KGTZNXpbEifAs2eRzW7X6M6z1WNzk0Ozi9WAk5BtlwkovZIU7c//GxkfBY2wQlwPh9sCh0+09bUWJN7FD8+4dIeDisq53LBv8k3Xq9zHmuGI2SZcgcOqBvi1LtMh3VyLkoqnz0dVIgGikWrqtKUsg9vT5FHE///r2KMU0sLC5JSduZwiPgbDh7NPW5inCe3w6sOKHZxUS17/Y0k+fErcqNCZCrIciQiZzWV6bWG8r1WYnqt/Noa5JvCZWkpp60pzG2dzbitFkuCCtiIrlAuYUm7rVar2xPYvdtwW5NJkQpGvFnKiUnTbX1kuq3Yh1MhNjMzE8MbzhXDb21q2r+3IRQy/FZdL5dlXzAY9Mlyub5OTTVvw2/14qT+MuhaJFEQy3ASCc6YF6Wyoo6rN5FYTWBnpidWEqur3yVwQRaS+G61qOfqhdJWcHB6aQVDsQHl4MQ1+KsUN15FQE68K2tJS4nQVmg6LkSjYVtR1HhNJEQHBg/a4RATdnuFA6evOR0VdlYrrVArrcw3ajV9o/lFXPiHL3NVEmhTkisrsUVUr0vxZwqVtOUFvHsFGBQnXbmqPR6PWxR51X/lbx99+vno2OTjOaLNjg3f+Hv/X6++d+mSeuGP8C4JrTVnOXWsYQyR6LcIoVBZqr8+FArtDPg8LhexOj2+2rq60K7aXcGD+xsVv4TBS3GhJUmy4rgyTrOudkLLLyn+Bw/CuAb//a/ukVR09pvw/ekH0zORyMefjEJptiqMyVtJHQkMDTczCQJqOh5PqP66XbV4V3RtfQPhnP6a2rpdoWAwsPPFjgOKH9c4WkCtqmk8CIEd3gBUW43bLa1u6bkuC8Iyc1+MsCB9Fg06Oua5eubnPcxzTdTUJPJHYnJXs6Hc6KjSiaE38AlvUVWlk2MPhRrLiRr7l+CJ++Nx2B8gURLlAvBvNKp0krtcJVdJ7uavzdWQ68n86KDT+0j/cpibb6xS7ME9y2stx1Kxk3uFlGK5/Z8//+6lVJUe18P6vB5P2bmLVxT73Zuf/jNkb3y++rnP4RNanMF9L0HvhzPS/kDeI7/l9kMn1N75QufYk4GPn4x0tCv2W4srU+K3/Nf/+rp/ELqaydlbS+PPbLPl9xKK3fqg44WBT9w/GR87+aZiH31y7vRH/27yXLrc1J6jK57PGUNGRVn92pmzZ8+eee1VkCSvqhdAUlxQe3+Gy3mn3iW9KAtMHybryVjQk5GookI90mPGQjjG0979NiiKt7vfOn/+/Fu4opPpv2S9GN4YPf7gen9///UP3r98+fL7x7tOnz7ddfyn+FC8phMDR1vMtG44MRPwIwTJfmdkZOROPNkrJeNGqGscAUl7L9EcHwbTivTOORCM5945RvrI741nH7fH3Su59xw9ceLEURw/5qt3HzlypKEaGConnf6Ou6G2+qC2FKitbqitbqit1ps3h4cHB8fGSo3h1cJXVfELPL9QWhyvymvXrlzB1w8Uy6tF1zQdmnFHafG8qjo6Xn4ZXz9ATK8WDF0R4/lYaXG9Wr3exUWX6/HjUmN7taRmZlKhVCpUWnyvwxMToRC+So3x1aIdP64NadpQiXG+vgcuKbbEAAAAeNpjYGRgYADhwLraeH6brwzMzC+APIbbDueXQ+g3aX9z/zNz7mUuA3LZGZhAogBOvQyOAHjaY2BkYGCe8e8UAwPn+b+5/z059zIARZAB4wsAqfYHnwAAAHjaxdVPaJRHGMfx38wENJhWjWm2XZZUk25M6oZu/mxIIkaxajASrSbYEKJVSqFoE6Gtf8CklLY5eSlFL3pUeuqhJy1SBBFBKP452PaQVgWlNFhyChJizNvvO+9bze4Kya2BD8/Ms887877vzDsxU9qnZ5L9RpWL4SaI59RvLytbZJz8uCqex53EhTT42myeu+TuqtwkdRC9JhkExGVxe4JYhlW2XuX2OLWhpNcdx367wsca10H8vcAVvefjI+ZahJIB4iD1g/E1Y8T5PlWmyFXy7+vNIj+RX0j4nv9UrpA9z/MeVmmRz9U+n+vUNtuqtsVwZ4gD2mE7ubbQLuzHrbjdsjAzqiqbVjLPOsZfJ6cn2oxe7NKT4B9iuc89DZ7Sn6FtNRlcDZkZ7QjpL6/dNPvYYtrId6jBdfkx87XG8QPuZRHcTWL47JF2M8LYL7RYp/oiOX77QslCzLtpQSupm3iJCr6pBPu50FI15qHWvM78oS0+JjSpspD9jPf+oapKb6vS9Ctljivlv9nv2K8dzP0l7ayasQ85vI0qNCGDDVjrHVXWjLFXW15SV+7HCOtqzSdKoAlJpPCq+VqNZkivmcO+X0F71f9Vp+5gu6vmvqe8lGtXo2bVqT+U9nFaabudOBux1TxftXJh2/Sp21wKv+Vg2qyXzLC64pqcqfRKTD1z1asm7ifz8m/Nyw8oYw4x1gW+7TuMdR97VGdPcw7R12OlzbcYom5INZzHm0O2h5oecidUhzB26hfck9zfETMVYT2kGWxDM2bxPTjbNUpNj/yfP7tPIatW+yN7I8s53cW9lfItHGPNs8GMz2WZe7VqiWuw1Ka45gGiXJk75/fTG1gf24n08z77Ew2034mF+cHYEbzrmthn14Ibdq/fX2n+h2S4l02cs21uuRIlJ5Ug3+OGuTfWmvOv1h5RxlVx3bhecX2s91fK6DrvZjfqdMg7QBv2InX3lZTmfpWCj7A2MvcD8SDxcuwG/RTxPH6LfvO/PyRujHJz05DpVZ2usR4mNoLh2AGUYQysr9lK7QRezF8amTuLn2P/zf1xPM9+Fm2I3JJwXf4FaVZhHAAAeNqFwutLIgkAAPBpGp9pjY+szGycyszG8VGZjeZbs9FqnEdExBFxSEjEsRyxLCFHREREHxaJRY4llpCIiCVCImKJkFhCliMWiQiJJeKIiJBF9sMSe//B8fsBADDznxTwAfgH+FFlqxqvel2VrfoGomAMXAJzYLnaVr1aXah+htQQCf0JrUG7UAF65ul5MV6St8o74BX4EH+Uv8X/VwAKUAEu8AsmBSuCD4Kc4ELwIJQIMeGs8I0wLTwTPovkIkxEin4XrYj2RLfiWnFMnBIfiSs1kZqlmnzNT4lfsia5lSJSt3RampHmpZVarPZV7VEdv26i7hRG4XE4Ca/AWbgkq5VhMlqWkp3IvslhuV0+K8/Kj+XXClCBK+YUaUVO8UXxpJQrSWVSuazMKgvKSr2qnq7frL9TYapV1UWDpGGyIdeoalxuzDXeN2mbJpv2mh7VWvWsOqd+ajY0J5s/Nlc0lCajuWnRtsy1bGiF2nSrsfWwtdj6gqgRPUIgNJJCMsg+coaUdVodoZvQvdW91x3orlEQ1aI2dBZdQw/Q2zZNG932ru2iHWr3t6fbCx2SjmDHWsel3qDf0J/qy536znDnfGems2hADH8YzrtsXZtdV10vRqMxaTwwlruV3e7uue797iLGxyxYAtvBTrAbE2jCTXOmt6ZDU8H0iMN4BE/gf+Fb+Dn+bIbNmJkyL5rfm/Pma4vcQlhWLWeWRytgJazT1jXrsfWrTWKjbPO2rK3SA/dM9ez1lHoqvZbehd50b6FP02fvW+q77Huxq+xh+7J9y/61X9Nv70/1n/eXHWIH4XjtSDs+D8ADxoFXA8cD9wRAWIh5Yp04dQqdqDPpPHCWnD9cBlfCtew6GgQG1YMzg7uDR27I7Xb/7dF4bB7Ks+DZ9lx5Kl6ld9q77817r32AD/VZfG7flG/Xl/eV/IR/07/jP/Jf+h8DkcB2IBc4D1wGSoGHQCUIBuGgNmgMRoKLwY/BuxAYQkJEiA0lQguh9VDmf9yEjeFE+HAIGCKHVofOI0BkKrIUKUS+D+PDvw2nh4vDz6SG9JIsOUMukrvkJ/KKfIyCUU3UEaWjmehZtBh9iE3GNmI7sc+x+xHJCDmyPdo+6h3NjkFj6Fh67InyUnPUOypLnVAXVIkqxyXxcDwTP40X43fxMs2nDbSLHqUT9Dqdo/P0PSNkLAzJTDAJZonZYT4xBeaaeWIBVsliLM2m2HX2kP3CfufEXCOn51wcxc1wb7gt7oK74u7HwXHD+MIvN6lJNgAAAAABAAAB6ABsAAoAAAAAAAEAAgAeAAYAAABkAAAAAAAAeNqNkrFv00AUxj9fkpK2AYpg6lDdQsWS1M3YsLRVK5BSVJUo7erap8bCsY3tRM0/wMzKwoSQKnVgBYkFMTIyMiNmRiY+X17bVAKErfP97t73vXt3ZwD3nU9wMH36bFN2cJOjKSvU4AtXsIKBcBV38UK4Rv0r4TnOvxWuU/VeeH6GF3EbH4UblitwqvMcneOLsINV51RY4ZbzWriCh865cHVGU8Oy80N4DqtKCddRVw+E52d4ESvKFW7M8BKW1RPhO1hQgymz2BWVCTu4p14KKzTUG+EK9e+Eq+QPwjUsqc/Cc6zhq/ANar4J16/26LAi9V14gfqfwovU/xJuoFGpdkPfxH7oBZ72k6E2p340ysNxGHiB0amXebrf2zlq6e0knWThyaDQZ7rttl19PNH7kTdq6c0o0jaS68zkJhuboFV6mr1slBfN/u5BMvTi9Zbrup3S0bkWbNrotSk9nTJZHiaxtsY/WMpUg6JI8421tbQsxE/QRcg/zSDmN4SHgE2TEwzZG5ySI4yQMzpmC6zGMJaSMqvuo4cdHKFF3qYzxYSRECf8bwvOnbG14dqmccyoxj6zesxbejbJEfsrT25Hhr1hP+Y3oPJinSb7zNZUkPvYpfrAVuxxHwdUnzAa2frW6XPt27lcs/OPTM2ZTH27ernzhCM9k+v//BfrlTsqeCo5NrDGN73ce3nOf891lak8nVU2j1TYqmJyYe8kwZ6NZHhOt7H3k+CQdHGah/beCvJTu3JMfsQ+pCfiN6a2x2hJ3UvXnj31kDmH2GLGiKMt6/fxDI+p8Kzb/w38+ciqAAB42m1UZXgbVxY9p1FGkR3bSZmZQRXYklWWbAUaJ2kdO05ScMfSWFIymnFGkmW7zMyw5S0ztykzM2yZuU25u9/ufstdzXvP8vj7qh86975777vn3fPeYA2I32+rEMHv/Li69jcFW+MFroHnMIBbOYU+ZHAbzsI22Bb/xW/Iciq2w3fU6Mf2MDgNz+NFBvASG9iIHbAj/sHpbMJObMbOeBmv4FX8C6+xhTOwC4KciV25Jtfi2lwHXyCEMNflelyfG2Cwxup1vIEc3uSG3Igb42zcjjsQxU9oRRs34abcDDFujq/wb27BLRHnVtya23BbtOMtvI083uF23J47cEcksBt34s7chUHsjj3wA3fFQwxhT4bxDSOMohMFtmIFTCxnG2OwUMQVSGMW/kfAZhyz8T3bSczBEBNwUOJuWMnduQfmYl/8k3tyL8zj3ujCuyhjGFXugwqTTGE+O7CAnVjINGdxNufgS+yH/TmX+3IeuzCCboziUByGMc7nAi7ElTgcd2IRfkYPerkf92c3FnMRvsZ/2IOT0cdeLmYfl2AJjsBROBpHcimX8QAeiKVYxoN4MPt5CA7AgfiROh7kAA5iBt8yS4ODzDHPApdzBR7HEzRxGS5nkRZtXIK1sDbWwbpYD+tjA2yIjbAxh7iSDksss8JhVjnCUY7xUB7Gw3kEj+RRPJrH8Fgex+N5Ak/kSTyZp/BUnsbTeQbP5Fk8m+fwXJ7H83kB/8ALeREv5iW8lJfxcv6RV/BKPIy/4m/4O6/CTLRgE2yKm+HD1dgSV+EpnIgmaFgTe/NqXoNGTMfBOAR7YR9ey+t4PW/gjbwJM3gz7sLdSPEW3srb8DSewT1YhXtxH27ETXgUj2EqGng77+CdvIt38x6u4r28j/fzAT7Ih/gwH+GjfAzH8XE8Aj+f4JO4jk/xaT7DZ/kcn+cLOJ4v8iVcgGb8gl9xPzbHmdgCm+F8nIdzcT10XIMkzsGluBgX4Vq+jAsxDc/iAWyFAE7CCTgVp+A0HMtX+Cr6sRrH4Em+xtf5Bv/EN/kW3+Y7fJfv8X1+wA/5ET/mJ/yUn/FzfsEvcQY+QgdOx6d4D5/jQ3yM9/EBPsFn/Ipf8xt+y9X8jt/zB/7In/gzf+Gv/DP/oiUHHGPY8CeLesaxLX/SztmWsaKhI2uX9UzGsMpaZ0avRWrg2HpZSwuvIV2P+9OqNC1L/RWrEApHIg2z6ym+OQO645+r8uZ686IxrUvPVMqG1iU2VqspX1etWlsgQws8oda2KWkr17QwX7FyulMpmnql7F+othYZ6aTWLeu6PXVtMW2RWBVuJNzuYjidSPt6auS0Hk9qLKJykk29k9r0qja98gRTe52CldP6xLaNfZmCk6kUB01jJNCXLRiOUSqUtL6cow8bjUsngtpSsaQtE2UNyyYGPT9YKoUimi4V0VUzXSmSmUjMSkUMKYUxIYWhaoxJUkQbchNS5GunDRSCpp0xe7rn+QuqouCpiETjSoa4ZspJml5xOnymK44lQ5ZXnNgUoyaOPWlq9iRxUpoj6xyvOHGt5BUn4Su7opS9okRVLNVUmbR9ZXx7JUpFiFKVolQ9olTrolSlKKMeUUalKGNSlLH6vKZWg6FQWDNdacKNchrCDrgzUKslUy/lha0tFxpOV2OUzuL+nv50/5KgWcjp4hDRRKvEZEJiqsM/Zjh20BzUamdwoVx1vWnlvGO4vn/QrjgCC8MiXiqMuPFS7aZYrmEUcvmym2AVxAbuvpFQe0hhWGFEYVRhq8I2hTGFcYXtChMBwS9r2cVpLkNhuBxdo0GydM2A4Cktl6nIc7mKPMlWmJKvSBSMhSV6WJWiI3oIw+3hGqqHa8oe0nJ7iDy3h8iTPYQpe4hE0cO15HniYi6hUCqhMKJQzSWu5hJXc4mrucTVXOJqLvFEo0tBNMqXWoyRjKkXs3bVCmb0kjFzZcUolQu2VV9pHtIdwzKNwbJwW4TrCJoiPFB7G8ZEWLgT4Rmuv8Io1xNmqoWJFHmMZGdjfnQob8imjYaVde+ntIt1Wx6hbZbEkLoiITWCkLo6IXVlQuroITWSUFJiZLxejSQUUxzG6xMK1UhDKRFPR1VdalZTxjZtq1iTvKw7o76sbeV86Ypjq7iqS3b6zIKjq0XVPKVIp1ST5Pi6IpMc17dNKxYs96tTMjI1PZr14pDhlHQrK15tc8YeGpVDLFWGSvJNygPVMB4Q34aMXRwIiPfvWiqWapTYEdTNslqLKOxQGFOYDJQLZtZbrb4CYVURUZmRuELFINqmUK1H26crhkJH5cTlFapzlW6dsDc15XUiXqfD68S8TlLuVz+CN9bqcaJtXkcybB6na+mOY1dbsrZp6k5wWHeSZjkU/j/UK7csAAAA";

var VtexTrustVariableWoff2 = "data:font/woff2;base64,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";

var VtexTrustRegularWoff = "data:font/woff;base64,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";

var VtexTrustRegularWoff2 = "data:font/woff2;base64,d09GMgABAAAAAGl0AA8AAAABNPAAAGkTAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP0ZGVE0cGoEoG4GzMhy3PAZgAIkeEQgKgrBMgegkC4d4AAE2AiQDj1AEIAWNMQeadFvKC5ED1sa2Q31FpSBy2wAYqrXOntUtYYyrxtw2zrpkawa4qEBuOitwHogaR78/F9n/////f3JSGTJMg6S0wLap0+nv9RCV3DRHCw9kH73nxFh67+uKLZE5JnKPRK7T+/QIN8oVV7FE4CasxCcW2VAw7566j6MjNngca2SWBNrA2iseU30URYXDdpnHRNp8UtVzfcjJeS57m0Yh7M22QSUqUan0NRcIjvkOx1jhEb7kzeRg0525O5VK/zQ6/n7+tWWHZ38n0sSkmtRFXaUnBheb53BMErV822cQedfPjX+7PxczEEzT2RMq3uhvCrLqY03bEEyimk7k3HnyRGcSk4oleqjARU/hIA2uj3mhDdLuF9ioi+oCgXtZq+93UK//bt5M/FrN99x1WNlG1FSbsBmZWe/q7HU78MA+EMVHubgucCv4TyVVsgoox+bUSFZOnnz553n/+v/GXLuu6reEH7XMlED0gqhBRfQ7P09u+t7//wZ3cMAxZIUQREWSKMUV3RmNZGybdGQOM/aabXWI5qxBLUAIEDwECh4ChABhIy5YMA8QTFpoC9SoUQ29UkrFaKn4ae96Fb/25K9nnH7vvFNu9p+beUX1KxErOq9Uu1+UKkUl5jnREHHihDhHFI6gC1n0NgIR+Of/j/idfd8f6jWM1EwRjMvDbASLIMKIAko0/W9gniX9bvG5TfYhVJ29yeQDUNlcEy7RiJtJlFHDvp/LjXJPmNDdqUYdqSK4n/B8DJBylVWAqk5UV1VVVTEItLbdveDWxJKHoo2SCDlByORnRC1l04bUnw0hPJdOREQUgliIPAYAqnCFi/MRFzSP8h/jKPEvO/tZTEqlCYYoKJJ0oRSZV4JJNFS1gSAPPBwVibK7nOqaTF/aPD/8v7/bmymXTbGuBqH9qBSHdl6vJgEgJiLg/271aWivmT0piqIoiqIoiqIoiqIoiqKhKIqiKIqipX1+3CeP9Ad75z/c5oFglGAURVEURaG4uVOk2SEmwIME08EWn6TYEgAaJjd11vZdOYDTkvthBSSldgjlEI/wN3pfbBtEYRCFB/f379T+HDtZOEdqFhkuyJYdxVFatdXsZB9m2/zI2z9p96/AFHCcAgULslXEzUO4nHOYdoBK7PJA8lMwfqj296Zapd3EUGYsW6aotSedCmt9KOmMNZGxIfDe7250/2400DAC0CIBkZI/akVSWhqMwUcDVKMBcmA4kF9jrUCO/DhR47l73pjUmZCze5VvvFl03mb5ReFF6QWRJf77vTW7p+5GXNcIRcjqeUdIbx5k9VmHS0FNoUP0QSgkwg6rRugVEmlwEiMREiGB/3/2+1bn/Y19pvyLnqEkC8VrGNGNjznNJIol8VCIoqFTLU2IhEZJLDIlEEqHYHYIRy0ADFqaYK9K738tW3ZnHim1WomyyyflZtSCUtObH3kUIVocCkn3DFVdTbiUHMKdUWfECWcWnn/3Ossh77KjeupwKBOw6q+VzoSxtkQY3K9EyAqJ0WgcRlmsmlN/QLtaFbqWx4eEi9AP+wGWOL7SRlZY9/VlTHsfIHRgeyFH0V0M1D/Hncj/9zvJbgst57qOuuqoykY3IrIRY4wYI6Ke7v7//zA2XfAOZhUoFSrwL2OL6qPSQ8JIUFTGNrj7NAkPd4Uzie8m30lnbYldVdgQ00FlK4/fQGchvUkI8MO7zrQCwI9vmZa+/Y0GgbMA7wKGjU8mVE4YquhvqK56UHMtoA46QIPMgGbZCG22A9rlJ/Rv0WF+GWEpGNEqYoVVIQsbYTRslPGwiTaGTbEpbIkDkZY5H7bHhUgvgLA3PBQDBgjYa2kGcrNPW0dQHve1UXBjgK0QBUIkEm/8ZU0g8abEo6lNJNyWeCHcnr8l3IW/Te/mEO4m2mSvDqSP/VkpmP92M3A9voqq4Y9u7ZB0KDfPnicQqdySZSmvqtrqI0RUnie7D/dXR7O37q176UVy5A0f/2LlXjydAQO63tNt3pnnfLr93f6Bv+AeT6ECtNP5Z/dZ+QSUUkZYVWF58vytoebyIe8Gox08hR0KO3LeRjpzrmoUA2Vvm7fH9PDc4g51DTzWNvOvXZzbIR2v7FpcgcvJKyppo9D6kVU/BuYCczAdM9BNALJ7feSpMitxv1aQpDo+3NP6Nr1HCGskOI6fvqSc8v1/IcQJVxSt/RVJFpjkMjTDH9KYqG7K3U6tRg5v+UxxV6WU1/iFUE+LNShaQ/upjLlmpEHz+Q6FIiIwQunxDAgjntpqFOGGvLSyydpi2iN6kvQ1vztXE5ZIzZJQ8yTWIvG1TEKtkljrxNc2SbVLfJ0Tq8s+cQg3baMvwlA6xiKsSolgmqVyUFoNx7TpdFPUGVBdCugl0dFL4kJQZrB9lAxdSqwDie9gkjuU1K4lsSPJ2I3EdSwJHV9DGsiFkekZGKkJfs0rS7b62mqvp76ptJWupVyFSlY1ajVpjhxoP0jKevFLM/wcqJru9DelJaXllGTwOELBM7zfJpA2zHMbSw7Z+WkuNWRwcjgeq5d9Fu+kY1V4phPVj4FvJrdC/qQRnOURzxF5Xa5lr17fWIX+qyoJUj3QfpKFH5sjW56N4NGxUYeva9LUPbH6jcewLUU1BC0iAjIId15C9KYhHEyOFYa9QbqP8KLIou8LYsROAgKKK/F8nN/IQiBIIEskSCJLYZTKJJ1WBlV2KykvjKrciqqrQVQTlYf6g6g9pmerMchwvJGtYJSJWh75y1b+aobwA+FXqrta/n8t3dsoHm2C481OdvQYUFzJK0WlzCoSwaoSyWpSnRpSS2pTR6LoVKKpK/WoLw3YiLGMI54EFElCmRQEpBEkgyxCNMUZzXFBLnq0xBVbSxvmm+tIwSBwFAZoJCBHA2KsF8UhVzzyJaAwoiBgLDAZgyVj0UktNqmlJWPMxFcpif0xnsrjMgaX42655oFGDucYZiy1UzJnT5b6kzlHEls3HhWqmkiATj3+v6xAClst2tiF0Ut2SD6NFeafGGqHAcccPAKC0uQorylUZltXhIbQtPNTns1bRWTbfJlt8QQ5woltKV27JXVbRUnhGJhX+RKBPVv0533+4+xEsRLlWWChTd71TEjFgGgDzZwNYZUj5/iNgf2r7l7NphRg8oyyWAIRBU27NBcBRUhrB5BxAjdWQoC34bJt/5kYlw2ftiRw2TrSQ4uQYMDVza0bq9UshCRDXJeH6/UzcK7YtURyo+TltLESn+Wz9tQWoG2yYcusBadPjNCuFSuc8zaDKvlYMEETiELuiOrbQM1ZALSay2QmW3SGMRcVVK2S1dKaTQJyPjacFXbxGUdcglApXAOMyeVvYxwABNAs/I6OCXuXwSiLGCiRtpAJozQI2pqo9A8Bxpqt67lRjeq3xfczIrkFpmFSp1RjKR2LKiVLhuzX9NfkfRtMO3Ur90dqar3cBB+DPGpfBTWQ6/Bb/hIRJQusxPQr44Ap2V+79J9w75KscYsYcNv3cH60U4fKuyLnPGaM/KLwTZctLVF3Emscbm5IYHpacx2hksp2+xCDwyyF1EBu2GSNveQXEyzMi3aeRGbZn1JJM4W0TIBCFXm0lIO7uZ9I9SK1oP1Jl8hXpK5zismB7aaxIQKWiyw3kTr4UyXwszANmZaq6Q6MfCge8P12PzNiXmW9k+olSw7hQjYu+t9C/+kClKYWgkWPn0a9VLrJau6gkCjDoa3IHxVMs43IXNZdFgsqAZZJlC3zOJgmaNqjMLgY/kGSDyzK+A6Z0EJI9lGVLkKfYb0YSdb4uNJUBWXKiwhGnRO0+xPUk5uHw1ErLyiOSjUnSARPKUNqZ50EzrYVgtV34GE8NwgIuyn2jY2WlER1go8wIuRVIUeN4yXrYghpldh05638kLWSMik4ON7IYTkGm3L5ZH5lVZGbrSEPnRRZeEHmvVjdLGi1UMFO7cS6qSQLsRxxyQrch1i8VTo2jYzBU+yMgfZpi+yhl4x3gmG5w27XAd7Rk1hvjbjgbix/dvOkYCyGK9Tao8xbMkp5e6+/UB/J/bY76qnBwiKhiel+wsSyCAxOGU46JYEXRxDfioJ+oxMiS6CRyCqJJJlWCkUpeqnM0hikM8qgyhwmO6ERwIxcpEYZixmnJ51JuKAPS1fyj2WzzaNXiSNCARYWFp7XfhdU32W91y8Q2SXMFcw1zA3MLZw7OPdwHtB5ROcJnWd0XhC8InpD9I7oE9EXOt/o/KDzi85/ZAWGOnIQ2EUCUiwgxQekxIA2qUDbOGhVGQrKjJIZSZ+1N5YNohwiRlx4OYNmG4lDMpWQTCUmUynjabUcygxWFcmQoDeWiCh11HXbIFq2RwMnAFz2p/9FgGuL5UZaL8SSBF3XV0zDGcpGi08wtePVEXoUjzHgGCWgwCW2X5pKWJJmlmm7STR1u3sTQQkCjRi1KHZ97zHsksE7d1agXFTxe/6KBYFx3dV5SfjgvJByV3A26AWhlHOUXhrmC+0msDknCkD32aSd6jqLiexEAq/wsCalE1kEhbqqac1qGnCJwMRgz9JEhOnUs71TyreSseM6jZIFQLrW9GivBZcknBtAeMlSiFSIRUajwFTSO435RZi9JK+35cUp52lXJjKxCuBy77wgst0i8GD6CynJLSheiLNHt0cMvZI5PerEJ0q0GH6xAvy+vaQ48Yz+3x0KSZAoSbIUpaRKky5DZod5ABCCERTDCZKiGZbjBVGSFVU3TMt23H++WCbIerNN0b3BiOV4UQYaNBw0W3grXAsCHGTIo4gSalFBA5gQcAgRkKLFipMgUYo0TDwCIlIHI0f5MbBed4FNzw2kMSWvN9LyHXt/N+wqC6JXppI+pKkDF3i+dReF6hI9S440E0xjESIsXmkBhOickGQHJ8YVghRcboLai9G3wh/aj7wTZJFVxneE/8CqG4xBCoca8KBM9fRRHR1mHhfafpjwwe6EeYxVAuVdQ4da7dFo6qqpFyh1KbaMLU2BEzU7C4qy3DYnWWh+8AUdOhYDljUzfZ2gTmgjp6+KVDpaKHi9ReTTqDby5H4Ka9cthHL32XesniTG6+vLUKsbJJzdRUaxuYgKt37MK5Ti4Go7CbuV8w4HmUSQjkxPYEAZCdQL48OJyAKUTasMRX2oLU57VF+8gVrq+s/SwSYiGgRENAodaYWxIlykm8r3hByDfG0L2RjZ2LY0Yfsk35aMT/KpCUQa4cNfkK6v6RgTcF4c2O7egnKgik5RZ+4vYgZ6Lq/O8wBnf+iQOAMUVgm84JzUD13Dpgj7fNpuoXSWwAsWZ1IP0InsnUaUt/GwJlunkUmwgVUtawZ37hJLDPYsLdPZTp7yTlXOlQI9TaeWSwCka03nvLITwQIIL1kKkV5LWWXXeq0sgD945yl7uylbgjw4UqGY4TpMehl45/saiHBaX5LIEZsw4CK6lPLNNvnlSaR/EdNEMBLdKqRIAUWJA06qJY8xFVnzzb+/EuxXTxCIRCVBYTI1tD+BQqGyARXH/1MaBxFUY+Ssq2Lg6G23vy9CAEghh1Kn9OpVKvTj9jxAwzqJz6BN9GAU7IJyIyBFzm8tadlxSssnZ1YMwyqlWjUB/vC86GXsuqIHKOm3X2x3Wm90BXKIHUBR5rvIG0ca6HYxnnmlDrbpCZA6xhHHXenVw9qvp439LO3sx1Jshs9Z4vuc6Mkl9ZDQExwDuaBulDheqkwdX9GOVOI77+JE2u6GRXumTI65VcWxasuOhQ1c4yAlUGj59H3Sto1QD2lczv32GFGQwNSVMM1ne8Wlx2o2crKJKotNtzbibKbynCu+zjfU2I2Y3T+jP/MjqUNeughK1VGNI48QEq5WIjQZnbrDISeLVVxJfNd6Rg310fRGlOI4Ep5DW1q2494oD3urK/30BBedpCbsS1ke1KZMQTeApsLCusQ7W3jME5fq5CizEvr17HymGergxS1dbDk33G77HeUxUYVjrHcLqHnxoE/A4vuR94NkPEU6Vx4vFwoTVCCqSKMSpjKqCklVsmoD7zWFzWohZZ10aoOiDr0/W4O//M3oH6q6jOoxWdhaLLIcZwXBypd5q6wl3G4qWuZiRRaJ3fYx2A9GBxAHGR3GOYpzHOck3mm8s4O3A280DeEu05nouutuutlvE427NO7TeIh5jHqKeo56SfYaegt9xXzH/MT8i/kfUeiYDgkDQjSgiwvoEgK6NAElOaCkCyjpA/qMSZ8lGQrrRYULr0iRI1FIxmKSsfhkCpVMoZOp1KRUMumLS1LVkjFhL0pMXDKykf1ItKUJW/6DaCscStsaR5JuIl253pm4duCfztA559Mg5uNwIkkkkbS0JDo6UfT0ZAYGPkZGMpWKv5trUeGqbjSCgh4DFowMHhWTZv2reJNWSQXrxTO08cyHCYaxEoEHfxM9X82D3sbf1BytBWwQ/Nh1AE4EnLJ7vEq6G5/FxLa6MQyG602LVtAbexD8EPwQCZJx0v5y3Y1nFe1uVKt0d2MbAeT2HgjCAQA4HA7N5XJperbfU/XHMQ/au/348R/cD8GPX/84RwXz2oc6A8jXPtoZwL92faKeBDpUSj8VeqfqvZ77Rj4YMGDAoJEcOvWMJoroVDWaxj+a6SIbAmkmjWwUpJk6soGQCoG0qyD1NMJhtCJSd+dPvy7SSCyd6miAXjo10gDJdColTVTT2ZnBhxYOGS0csnJPxmK/xNJY5//RELTxbw3GEg1p6HxnjB9Umbv74V7vzHrlbVmv6O00N61t6Eal0RlMFpvDJUYQJuD1bIlUJlfg/09etUa7xw/CKE7SLC/Kqm7arh/GaV7W++P5en++2VyhVKnWGq3Oabc/ZM7GgqSoE92czt1lZvh/hYhIkUMBNSijDvVoFCpMuEhRYsRDQUuVLgOfkJisWCYHj8Hkt2dy1JJjjjvhpFNOO+OsUpbd6ci0jgF30Rgl6wRr/YRbD8qd5P7p9pL+arfVO676K90JJRJqE6I2n/oPSmNm8eYxBIRAQAgIkXIkDAEOjXydGnG+LpGNlEbI4t1iCAQUuQomPzYe4CFFBkJU4h4l1lEaIYMgKBkeQyAQCAiCEAgEAoFAJDeAIRKAQCAgSBCIhEWk/CFlDilnwGAwGBwiPKI8B0hpr0R4OEQ4RDhEeEUq3ihAlEYkHn4/CwPOwwURsJ3o7Mi1T7Fxitwg8gEofr0vH+G7zpeBtclu4S9YxdAuS1AXaGkAzpSlHAC3UV1t4H4aA4/SThe9DADgBcaYBJQNO8wYzJvmULyt2JMjKPfMbzkW9O/Y1tnaJHPZAfQdxt26RptW+/8wjeZa6NCocRvN2OR1BC0FJegWGCm95TEqCvWDhkCjoAnQNGgOtAhaAa2DtkC7oAPAZ4EvIy4hbiDuQU+gV9AH6Bv0H4wAJgKmAGYOc4R5IkVHKhEWCrejWQ03loEBHQl8ZtFhexDmy47aXVCCgq0SmF1zZ07/5a1pM++s4SA4XPZnwsdGHJJOIuKcfm0kp7eWaOFiDR/tHRgsN8DHnyCVRYkAe+AcqUHb14XfRbwB7sKfgdbPkz23r94uB5x8NTj59k9+WD/Pb/3utnPiv04K9gzgtP0eYH+OnK8ukku5ws44+Tobv6Hg8C2C/e1yl7pXHnDyw7Z11+/W8bRjnjNeBMtesWf27J7bB/cC6jPLTu2L+/omdnNXEN1Uv09R6xz3e3/eDmbUzZFsc8xw7Bz3W/gSIpYUmZLkoZahMojJWrdRTty9vGh+QWERJB4JJJVVfNiqXQ8yNF/fos55nij4P5FO25yQwYmo2GXobj179+2PYnUBShZNmVJRtWlebau34dY11dY5u9qP8Y4jS+O0yYW6mts+irre9yQuGXyf04/7D3MhXQItdvEu7rA+fmg4RBTjomNhVa9Vl36jJs2YNeegBcedddF1hI/RRj4HEG3MneNXgEebG/xwEzZuPgFByTKUwcAjoWJQplqjdnaDPJQvEIrEEqlMEam9b2OJtP3ZzGpxIeXpvFWsV1qEKVxEKErEcu810gglUS2yRL2GrYumbLUr2u8dS9HpuhBd1W30UVQD9DI5iH7xQ0G4O9e8EQhucBm8QMmGOEMiEN6QEw1xEqVAOlmQtfpa66q/0Sababa5DrbQ8c52sesRNaMbxQcyQnmFucCQ8YwfNzCDWcyB8VjAIpZMnjJ1mukzZs4ye465mGcU8y3AwqWrsWT3fbHmyLWx9tiJ2HbWZth/MSEW+3cIRxzL6NMYM44JUzDLAiyz5sUVrv34XA/7qKd6q1/8JegAFl+AK8cfoQzil2Qw/sUPBXJi1/0RGG5ymbzAyaY4UyIwHoYwzRwssgLrbMFW1+NWd+F+jz7pGc8+54MvfByf/eLX8Xs3p/Gz+QFeHe2hcIKQ+QARUAMQA2IBcSC+IlTEiiQ5JTVNekZmluyc3HDR5Mx8RdWN3ZVVjKytdmxims7NWqlhEM+27beNxELQJA2CITgIgVAgLCKAyIgGYiIVkNo0x5bewCHDR42dMHnazHnmn3LqoTIIFzkwDuQP8h/UVb3RQAqHImk8NJlmQLEUD4UoDcqhIqiC6qAWaoXW01ZoF+1HR3USndHZunpQF9p37Vuvl9CP9UFH5Qt0tYj+xUDcU17WdIbKNY+crChjjPGYZKoZVsaq17j22dng8LGTbcf8pavt5O77rmgfrG2PsBf2Jfat/QR7w/7Zg4g4A4gnAOIPICEZiSXoPARDcPkRirAiEJloYpIKqU2z2NIbOGT4qLETJk+bWS4gV+U28pHcy0Beyv8C42Qh/6GuAOoNgAZSOBRJ46HJNAOKpXgopDSUoyJUoTrUola0XlvRrvYXRSd1pnrdxrrQvmvfer1Em6X1WfmCGvob+pcBmLvjruMxDLFrNyxl7z5Y0f5jYLxJpsIMK1s11rj22bHB4WOxzTPnY/OrN2LLdhm7aR9gd+0R9sK+hFNOnEmOU/GsEOQtxWs/Ahhahh7bkuZdwxMCoYRSQQX6o3rYlCQm7bJPP+CNN1iwrdjNho96yMOEM6fdTGuxD1piPngk8lhFtPE5A8sJufyg3uvgeorAPIjZQa1DtdUqmS1bTs28YgoCBF7yEi7cysyDmRHAF0ZexaUuFdI70mfTlxYVHePOHsyM07lCTvdAwMtAuCn/t2ej9grJWEig04YuhN0ZM0x7Fqt7O7e6EyzxWnZGi3fNfLtR70RjpztDE2eYJXVLqcFD1z/HhwVza/K+DwxHMFfDbaCgCnrPDTedjW0K0aOQ/ESp9cGYYsdHDIegsNOhOvgJScnW/+C9Z+9/CHwnxjsKad6hWv2XUp+5RDJP5pfa1ZxMrVllc6GIV/k3r4ln0YyQRN00wUVFA45Dia+MpyxRTY0l0V1YL+rHL9FzfCZo0m+pxdMElsR2JF21lMlbLtHMeRK/slWwFdVtApdtS2KdbT19KZPUXqJ+PoLslOtp0eBtAPm/aeNnqr/j1aQO1fp9lvWuOSFflQ9Fd7Bb7bZKN8r8onyg6gd8GL9uDSDTAprBAaFDLNKpFMI2neVgQ6cfOMAkDS9tOSE2bpL5nhZj+SMK246dVmuWk8fOiZlfnfGhpaxCH284difdz47mbPtKzXISPdncvxISE3L1ijNrs5WGVzJNmICF8IxblogXjc1pTmjDDRiHixXSMmeTtV/yjUVnsVLiXWSXFOqQ397yeQglmeHgfi9kObgwTMBseMYty8XFJWf+81ZDyBLvojwyjnpLts8q5fGiOgjG1uFLy1daNUWYaeoY5uDvMIFmwRn30jMfXgwRydEHk9jHXCWeLemmTGfr6uW6IOM0x9eLmW5n2M5uMgIX/ug5W7Iv082gm+27XJAvU7oHMBMzMdP/LEm5lAbwovRV04NSld79ymbVt9x0SWizau/xca/b0d4EgoulhBn7Wnhu00UUGjDKl1EmLqfmP2qdLVsUcIVXvJhhdrtUz+zkskSGH6qYf8e3EzI1yNwBPxQCBYgpJ9686BTuNQn4cSGDAlUw+xntG0WleZTEx24e8sQioq6ilsQr8Q2Q2sLgbv+9BCd/905x+s6kffrzW49eSs/UZoqpExtG8V1TqXy0nhLKg3MKQQbPIG2UyOaIjxB7IysKNWoY+dP94Ltbk7bk1RXMOlnSu6+4zntaS/ZDqERBDU2/jTpbFV52w1u9N9/7cbHKi5bkMmsun01OsaX8edZcKG7l49FhNPIaicXMp3CxdOx63g0ZWoSb/Sm8NTG4LUOpH5vKrxxyBlNhX2NssLWgnT2i1SfA5AOi8FFXf5b1SXNRPiEdeo5cEGfckfVJc4dXeffgBvVMz57KjiZ8vHzP7hYjtA+WAuBAUQYfKUUIFdAILbB8xF6+3GNk3Xp6dHqM2MMpGMHzqmKIYXhxDGISArfM4yzJqmzItuzJoYMngK+234ZuoR7kWfsG8wnxY61gJxYphljjijf+xB1MjJb2L+ZEKj/G/JRbw8zB9vrjRpqn+7gRad/iacfMX2JVhsh+b55f7BxpnQ7plj4ZlBEZlymZlQVZljX5TD/lsy9HcioXcq3fQR6dazrnpv/dF+gXDIr89st4oXQnB0VDpX5OiRRmaOZpEGnn4Vy030P1Gg+/1pi46W/osA7fRwqr+ojsr++kh36GGGWCaeZYZIV1ttjlgGPOuOSGe5545YNv/ougiAqaQ4PnYmiRyrRmZvSaZTvmxNjhGBvfms+i4XPHhcHn8+DO1g3z5gvbG+Nc6Q9wFTPhYlgMhzp3+c4WZgYD7NCXTr5Z5SqU6FA5cO8ZU1Ekxb9rs73c5EVCCxyKEJUl4DFQR0S3vWnxcmIlmYZjJqTWrl3xuzHqPB5YgVsbnescbnXvbsy/++Hp5e3j6+fPLkmCvxtw2y1Y/TvW9lWf648195eDtfGU8r80JDItHeUXsmh6NoHWwjmedJaby7Pe+FwE4z014q35ea6F2Yn37cfhwUw0uHz++79x9dBIGlw/TGmJ50dULMLL44qM4fVxOhJ4e+P94ccTWlnhU1d1J/gys2MLnsJnc4XFP7VQqaV9au35nBFhCgYRcjAaFlFyMUUeZsnHvK9xWPR/ILdtkdbMbcavQO/yHsbeTdGPGUHj/KxzZPQqsHgUo6ru4N/FFStHuapIRRKV4ZMjSpZoGWKk8SslVrKARMVBCaWZu38H2tQ/2wC0ANoBdADQIUBHkKClDnoYZoIZFlhlk10OOeVXBCVURYiXAgOPhEVExcSqkc2gdWbs8I7jLrqpjsaSGWYVDE8UYp3oQU/G5IVAXYsCzYl4YLfWrI8vAuwG8cAchC9tIdDBos0uO+3uuHwhv/whgY4ErI7z+svzHlqvLs4/wqRniOesV4jXpNc/ktX7A58Mn0GfJ74o31rfBd9v/ZB+PL9mv9kaeN1Ww3F5pBVvGEzJa61nyVltwKSf3sgC9XoNVV+AYGr82QNRSbCymV47an66AbiDCMwUEawK/jwEBVxBBDRzTt5TsyWkP2TOy5uPG27zQr7XFjjJpJEFtoMDrrZ+YZKF5uP4MZdZPhfyv+Swf4h+FRkoGnsmvlG1f+qDFyL+teO/+uDGo0kSc2zfobAjmBMHQqLiYv4XtO1WqdKkO8K0nNkcGfrUPl+4kgzyAFFDGSiBhkzLQOUTFJIlR0WVVVFNTfU11EQb+QbeGSY3gMl93/9v6LWPPiehjArqMU4+nAJ4hYoUIygBIaJhMLMYNRG6xiIoQ1iehvL1MMQEc6ywzibb7LLPIceccs4lXP20uassFVf/evepinRcA+rSPYRMXAPr2n1V2bgGafcACY9rsA4P1eTiGsLmkbp8XEN1eqyhENcwXZ5oKsY1XLenWkoR+S2GTJAZskBWKAKyQXbIATkhF4IycQE3U47UPreSUSAq5IDAVSCisioILAUpsICYES7RHkI5DMbXQv6AOkxEUPDEwC1oWXLhSaQ9GZuLb8hQt4dVLo8Ps54866yZSuacKlXsLwnW4J19yy3ee0X4/rk0qoxQMLpuCjH6YBLWMKOFelZwWaja29Ozsmoeq8bT+GhCmwjiMv/nazpc5LrXWxdda9fBplOXbt9FEDv7x2pDgtJQWl5xCJ6iH0oVof9GLQ2ZDtjbIs5rOu/8xUaZWdlQMr+QDOVV97em2ulhkDGQFyBITW5uLiQKpVCRN6XbXjJnJ4kWlKacqv7UWL5uBtTYAcvcL0kFnjRuKwmclYZPnFLKqKy2hlrrQpjJy5zNvaw79tyOOljkVUJyG+7LU19LeSs651qOZVzx5mIkS+CR28fPElZTXcgBljmRi6sjxtwJ/klLnpspCmQDS5Upt9jCVh0w57jIWyArWMpPrWENVU2QlHEQahOZk9FPoWa+XubFmLKh3PugqHqxPuoVbe+YsLbjTkNwMeTL4Ad6pMghPZnvILhabF6+2K6Wq4Wa1VVm+giTutlsXTL0TK0ojZAVu5TbMEbBVzzAwoHjX61VP9jKhW9o4Fp+4A03QUZAa7VR1h4ivxnQXIcVj7jlpWkSRnXSZ8Wjb/tI7djQfkaseCJ70WRxZPwoU1Y8qX0/rZz9s2kWrOoEl8ilnppXT4WelPxLK88b9HmtkAU9V6+EcteB+PZrnlW3ioHkqK+4a0CETzn3gUJqhnRZ/Smcvjuo/XcFoyJvb8f2X3rZiCes42A6Nkg50qdhu6NH4eDkkiVnHcfA7gtmlJ2IMXPxtTJqtVL9tS1OUWexX1hI9w9lfdkfa0bKRoEdK7docYhkZS6nCXkcy9dT8klI1IcmAZ+cvUMVu0KXP4IdfLMHcXowiP2GPukvK71FQQaHjxLnpRyDW5n5IxMEXBPxQEX1+wOvbWlEtfZHVIZQBRSyIYZe60yoAp0Vm7PT5vCY3/T5V9YHYcD1yn+9PsxknUa17ltxdrsWbdlDA989iAqqUkaEg9S6nuLzFJKU6/eRjoW2o+cIEFOxBwgkEGqENH/3PGgTBA2d1whPXTqWaE+n3vPuxLwflHXAKHRUPMSjsxQ4KhYkZsp+uZz2/Gn/2EfEq9bbOLuu7uqgnKJ19fQNDAnrUYnHWTZ0WwWhilRT19DUalgBM5Jbw+x75OvzjXD3PiHl1KTnkknlE0My4uI4XYhJ4Zf+0/6PET62h406PvPrzK/TVmeOB5cpkE1ISPstzGdnVgUb1YY44owaReC22/GhBxQqOeDA696OgPwt7E6PYy0O8PyX0Bk3RLDeJO8N4GsD+sP8F7gEHbCABVwEAuZ1UQhcBJsegSfJwQnqlweaREqQLR8Dl1q5KnZTvpvLJn9uDbMuUC1VV/LCrZl1aF2+f8+roX1X/9VT7FtPgifNUy5WH1sf2xE7VvvrSC3XpSOsmLdYvXjn+Mdet7e4Nxxfmvjev6TwLXAJC/JGq2hoeQqwCOhY1Zry7Vw8+XNzeitAD6m60Cs3Gn+BH/Dgv3jmObcn3pP6MTfH9taeOlTHFj+If8YbOPyDx3BfgMtISYRHDh3YsyPoP1+7+10084JWo5z88g/OFaXYWnjwU/jnMX6M5QHg2+VbtrHcMz4J8Lm4D7lmDn+TZRrws6fePwX40Q9A4G39CMKDgPAo0PkY8F4eZZz9XwIOwhvMEXgX/6Hr+3MPAX7pMcCvPfXM86YVD+bsoFtiYGcj3a6JIZAHOKPBfImgx6pWc77iCerU/xbjyRqNBvRi6wN6VQC92pRp24LeYrsdAfR2cwH0bnvtdyB+JAACsXcM8bYfgshD43EKA125sfc9QVHRMSPQiU/oyH9bTyiBiCTykzHZOr3BCHr6X9QxQlDtwA/jKMmKvKyauu2GaZzX5fl4vUleVZ001UyrauphoQ7atLluWjfXCLPaWeeCf5bVQve2mrUNx67y9YnVCrsM1ES7dkiyO/B4fautsUGGmh7AUNGjQuU0ZTvb18Gu1mLiaVao4gjV9aycVV1yiDEGG2vUUIKOG0hY4HXDiC9esz3vLrl1LBtGTr3Kg5UVaHuLAPovYP0DrLcEV/0EuMFzALgRwB6A1yJ+fdj9jJONRxD40YeNq8K4XJoPQdzQrHeRVVvScGldhg/3WCj3PIMvtoTrtInutpw2c5UZfiBgq7C+Eb5kXrnZ6+ubRZzlsJ18hqlSBFtyqTZKUgwlJqyIIRScDnhNCZqWwA7yQsJ9W5Qmuwi9SkTToU3MBrVkXwTtoo0+6Uest7/QEYmtDygZmCINxS2czzuJiAIvAQgEFrwWc7DyKEcbniIcwbOfVPfbTem0hDbhi0iGAbbwm5ieyB2tPRFYRWlOysZhKGd2a1GdYCFfA7d2qT12XZuy+WLrAQ0DzjPV1TXdttefVfQHHiPx8nn0LfBNLvr2wFIKam0FVGB/xtbBuYZKqVCq5f5KPGamwBk3htw5XOuYSV85/N1auEdGS4M7QqNnUnPGTf7CBGPlQrnr1tbde65hFyxVc8bNYXfmav9b8U+sCzgLuwa/R3z9F+8zKM0Z11u7KIIbEh1dQE/eGJzkSuqWialOvUq3mnfYcRc7ezsxLbpCByGwLjXinNg9F63YbMTiX2xcFIUlIrXCYenMGGPFyUND5JJRAhElULx/c2TH7DGHuc3rU+NHUjk//O0RNvFcPA8FE2diCnMzsimfcfv9z852O96NsR1fSD+paqf3nDvQl2drFKhCf/eaHZ7Cbmrk65prneMWryRiMJGLSHTh+KJZQ4/+cSYRcwCB9LbdrMnc0D5GezRX2+dqgMkWcYGb8IoeTFGt5M4QpcBd6bRzzcGd3Ov+o8gFpxPH43M9DHvhi/VY5xnn1PGVtF3XwnZCd648Guq2ajuOKwMtL9AGZ98CQx4GbuQ+CZM4ySZJOQ7Jk/iU64mT18AFp/XGiKrvYvrbVWlZpF3oSA8UHWd6QffblzY8HsyEvt4u/e6HWrWtCTO/hc0WJx0Bd/8Pwpd2KxIw8DIkhMsAo2Ig2QAwQlBU0GmYBXW3KkadgdaU5aNhV7EclQKbFEte8RsgweeRPg/5XBZKw+y6NgexAMJqVemKxCqSaGSomPVi5v4X0qkaA4nruyXsOoDsPxK2njiqAIt8PhshW0l4MwTocWnQKumdmIYpXz6nfHVrhEy0jEcEsvcA0kV2Z6IvVZE+UKEzWaBqWUpzXJpCUpIgVcWVSSH/afep9pkSX2j1rFQsPAYCQkJGTqISeEuQ3om4BpoVzrMktfKpsDqOJPNkhGg2ZOr2uYZq9wqVJNoEA5cl5aS8bdW8jt1jcLOaiqSOmj29e3m8OPaWNknBaIwhEvxV9hd33aUSvjSXnMsa6LGw2IsmBOdcXdq3lG2CIZKWqKrOs06KuTNvvD1JMsOA/aM5aEJ8UFByRBMAvc1Pe75wPFV9CGp69AwlV39e8474EZcJWFcJs35ERvrBH+nsjGXZ0nahoQCNnoFmiq/cxgI0oOtSUZe3Mf8It02+TRXvFED8sxiTXpiN0JHer2h+VVpudcA8dnDrYLbkM4ProgxBjgwjULnqWWvNiNkIwW1kJPNgpqBblJ6MBqxrfWymNtPix3h0Df+cxthetcCAD83/DaTEtIemQMn0HFoG/CbNNZQekOQUv6vymLhRTxa4fQsSnCoVxD43DaesgMdRTo0JRq1nG1bSomw0uXm8OhoOP/VTdVzyc+XHk4dAO7HAEclJkyKbI4TS/LAU6pavA3ulwN8I6H1VaanPHi9D2Z60dkqgUalFrn2CXlH7gVS1Sj2VEhvRAlRDtYS/B6TWqJCd5Tqco3pu/gbI5U/QwlaGshbZWc549jmRojRe3ZaRJhjoG2hKupyBarhAY9m5jJBrCb3eSmHPckgZ/MYiJFPbtm4weVFfR+9SNj3Nub0PFEJFIFLJYJzKDMQnVpsAjILhgEQBPZmAYDcvGA9tZZCsy9OrUPDcqgMMlKI0Idcl7pcLxVina5PTIHriAz3I4Icjdl2AllZpb57ige3g+Sg5HPQL2zS/FKfClDNl4v3mpkNRurg/3AtT2IWUuVeA5XlKc3HGweJc+IJawF3GmWuC2BMZIPUZTDY1I1G4NAU8j17t7m+CUaFWQk26/SanXst6WxUIp/Fdae0AeeWpoopcn/I7SlPsgY6z1yJuSThdMcyrHTe4X88HSiFc38C25+WGDXvWbHg90YtiPb7BE+GuRLOke4IlHtuA36CpTct9AIfNFmW5+Rsgl2npSlKCtGKpWUqMJN2aXpOx8d4oJwQVIPiArSL1IPylrBYJsvIF3FRG3Dbu+wGzysF2UHoeTpYP3kI+gAsstkZ09TSAfA4X8eaR8MLqrOMj7L1+Fe4voe9IVAo6w65i3uaMJ+NdUN7/2FUl4B5UPyIslBzYW3AHsRs3t/fTYsqUGRNWXM9AU1z5muoLvxBv6K3Iu+pNOcj9uX5dbNmFhDAGxaozIIjBB4hkPaX5MtR39wQPVRFVpXuWZD1daexhdQmoNnEiXCpzy9JAwtjiP25AfAMxFRftaBL45HMiaHIPTd5NDiCrOjY9qIvkbWpWIqPyne9tBzYLScr9GqjRBEJXWT1RJYgNUs1gRxAOXhJNgt3S7BfbtlpcR4wjVku3RQqP3h1s8WWg5oPMMAYDBweTdbtc+7rO25RPGAJxxz16DteBgHYM8F3OmTXQIc2Sajc7BPJ2lFRk/4eDaH1TaPjlSU92ql4+dvSjXPfJs22rcVg7B55tulOoxN7FrGpUTllSncBiLUHul+7069M5n0emAB2Edh3B9YUxVNz1gUXFwqtfMNuQ5L1oZ3dQ2u3OaXfK6be5+IvRSaskhWP20idvBUG6mPK/+UpOznxnb3gXJY5h3ssYcntSx44WREsMhrmTfgCHwv3IgWhfUA0XgyXRsuKN+RvwGv8i4teFXmXEGjzN/Tahl6mu/s8p8Ukhj9nBfTW1DCXChNpUEBuMIQKNCmT6UwdhimrZVMLwQzuilSV98xXlx3InRkI7dWIKSqGEZtIK9N68EjPyYR/Jdvvv7o+ku/6nhpCvnPRK/Dx4qO4xwp52Qu16dIqdStyOdV+NJ97Q6k2pXxfytRaReHa9pXQYMN8Vx+3yRm8gF+DWNT3UL+78UQP15WRTR+immZyT2mwJc8+NRZPUrXQD5csHJEFAi4h6FXq7XsC2qDFaSfKNoZAcn2FHkpLxxzPus6C3e5lKsDRu8aI5+gmVSqxq/R9++9KlhORs0/Mrxc+23A/3Fw+k9wV7na34KZtbg+uMNCmo1old9Nz9pPgn47g7dgo0HfDo5pRcVwUd0OHxmD0AyRfcRuRdYaZT9ksmsBU6FOJSiMfAx9XcD+WUA8swGoHBENp13z8kxr7BN1aVQN31Bbc9rP9kPWbYvpRUXiYXoz2NjRQfi9PAicodrSOc6/E+6sg02sxkN9Z+17dbOHUhXCk9n8kYaB6871ZcFa0IvJS36xPxxZbQ+/GN+vObnsftdguknrDaWHGXiR3cu4sG8b6ulW6UgwjIXL7YoAQzCWaiQjmifTEpupxTSXIwcWWsQUalW6OevNUEY1QA888nQPpWpnovB20tLgEu+hPWFO9nPYVA3uUdsQMvTs7kKa4/bzYphkb7Rwz4wcHSdUgbrj3OhYJKcjHTy20obC92REsCtVzEUpB6VqsgxV9/m19UNs9Vv2ix1BkbZVFRbzgyNX1c0n/zC563dCueYwgKOa4r5KhVWjhP+ahkJsiRU4Mwk93t/bFQr4Pj9OTcbUG+PDM4hfqXnDnOVXs04NgTN8R01+rqjTg6zlzYIo5noZXJNlhpjsCI+aHA3gwsrIvj4jeVWzXJaPfyzDwumJVxHrQbdai6F9V332WxA9zVWjgC3eAJEgwmc01VhofvraLaHxMuVk1cC+AgvAevX8IrGmAiOgylIYGdxpk6FTxhaXou+meIpO5DUal3eZgC59F+I1yiknKSg1fCQDmPlVAc3/161PZlpOy9JYVUlVz1hJFTD55DRf6Nfuhz2E5lzy79EX6aZtBgaxApSgvUaW4HA3cPonnkIWjshUzrnN5jrSSc+caKKyNXM3lSRsictAU4FYg+hdGrZawRqUJzeFo3TLtIv7ClcfbywnL4voKjR3VDkJCdIE37g5wgHslnRiWu7L7G6/G6cVh739bgpkCsbTXae+zpdeucmvBLNEXG2I4JlMIalr6xpQzZUSciRqmwtiWOuZ26OPq6rEOWJgdUsZwkOayK55YaNwcBZzHmK3AViqxN7LFuxRoFVyGOQNBqZeXUmYP4NcQvgC85SB3I27xUmsoMm9guXRK6Jf/fP+G0DQu3bwsQ87mWkKij9bVsHF9HgiVbWX5cBj+xC+sw0kfkoQzc1KXowwYpqkPxid+oojhBLr4XEDZOAmRMKS0rm7rpOMUep7JaLrDaP3mRVfxJb6E7GNpbwhsMMSnGszIiFU+LgNKeCJHLkW1Zps0hhDUkpynBsZxTxtChmVNCmmn5kQQH5GdH88NOcR0DWXHMdg5OtE3Idy7/AwBWCDYwpxCKz7fos/IWtEdSSma8nvM7DznfBNhLgBGXMhOMPyqESnbGxaWSSdcc+jjgWBgaGRAxTLz7CQuU3KLs+/hNtrhkPSnmNNHvXi+0o95A83htq9aXPY7A3I83ITi6EtJwtR7AaJ1ghumsnddwisZDC2acFagbxRf6SftR/flbj1l1wxwWOdNc4tLwD6jEAhg4E1MnkxcS8bYQgrS7OXpwBnDboHWPNDdD7C9PIYNjhD4CS7PJuKVIDsnG0lHryr9xjnomBgpMMcZ4zHVexohyNMeWLzsU77EaYi3Cfa0vdP+dLIXaqKHauvYZGabJv9DzCzq72UCzeRjWOdNA6e55+oRHOJPP4G6yCHU/5RPmejgt3XGUJfFnBtx1OplsVz8dsBEZErsRs9r53xeTjg+eeqz/4adKtM8M6IaRNL/mZcIl1UaEzsQkiPycnMw3qmjKxaO1pWi87w49pY1Z8eRjn+iCuEgKou90IbNsMZcENyeyTG/YGZQS23z8lpJvY7rnns9wm7U2CjxwMKJ4zC/5I3XOEjBuwQZdIioT8o1KssVxm/n3gqj3sm4+Ic+dPKy70+72Gktvek3a6LCfvgnuKlU9vvOm9GSNkLoa8ZEgPZ584DGsiq/WLCYVKPeDbL9aKom1hGKh3GnDU5+4r2mt8jRSK27m2Vat9UaziSkz77xSnS0bg/pQiC6QH9Wae/CNFfAFNeojYfJcpkYpIObKbaYf8kTkxoeR7BIjBAsaD64HtJTa3MBUaXKBMpS12TKfmgCOPWSIjfQqiUfWxRnU+1+36qCLR4W6yW4grAOjD4Ta2DbF2cCPoL0DHBOo/25zW8VwymKB/4JGgIcGjKPi65UMGkRPkriBN0zPp/hE3wHn/Z7RUkW6r1vXmBzT6a6GdwPZfKofyGsaxGtmsGZ+p202KUjFybG3xjjGpBBUZ+c+zB1ngcnEc2rYFTKoBegyuvw1RZJEgyBDHXG/t9DKP0x/8DdWv/ad7jjlJr+9LTkUHSjuD+O3tjREemXXALk32CfgiAhFnjrZKazcq5v4mnqXKZUalyhNaxegEV1oQhOcs0/MRuuTyZlNvkdq5fMNBGM/DhF2QrYfkHd5/6fguN+0LXmqtyibI4czdg4/JcP9IAOgNfcgQdk533Iv5imUzqBR9Y95gl8LEC3Gt8+cEWDds2mVSjyWH+EMh3P0IuSUQ12og3ip0FMY9vhNwaelVIb40yCJOaziAljZynONetcqrgHYWrBqaR1jQpokC+Y+t8ERBRu0CekKLql4a/StlAPddNHsp+nK3dY6lUPLCbDKMtTUBMjnuQTaWDzSnJAoWlcXSleNMThE528ExDwQwqb/aecVr8Un4a7bp5cEcjnejDyjoeTNVG7S6OMdd8d7q3GKbA9keTLXPaiE0zKUF4TX3XQIW7VP5kLsKVbGaz3l0XmCCzSuIWnFoSZfJnzVsZEujY1sSeLfydy7HgPN30ylh2GdfJfhCskSJuwAoX3vT6Aj8qIqfKHwae355ofH1DusbYKdpeR11pJscLfd7crdWlryY9FjFpnC8JgbmyWpiySlFaoPU69D7uApoCH6Vm0/d+gFdUH2j7IMpA39tz/3x8Xvmx793uepw9ZvuXo/i368N6K3nhSa6GthtBOJjuVwWHrstza1bJ7T4/4q8vihY87VM8wKtOdh6purUSjt6ftLmSspsujCw7N3+9S3+HVxgMtg3IE4YiIp7mAcKfEgzVJxMH4wIQ4VN6jd3Iovt8VCI9otwy0Zij8w3GDBxYfFZVoEcQ0HFhoONsTyLZmWQUVRkkbNiFzZzMH+SyLfr6vDjuKpOBqehgM9DmzgW9nct4cjQ/0fzImkpVnG4TWnmYEcj9TMGEpemmEeSFpkgDvMMUNpf3ZfOZYOA5+jqtpqlUcFq1LpUSX3Yqnigywm2C9H14xxdWaBdz2rnuFZyvchyuKslLZPy0OMktIHdCH8uuLk9m+/8pjMwGSBvyTr5FoBX2EYVxj4AtlxToWD82fQTE0OO5FVh/XdseYUehD7GtnwpQR81WJpab7PLbHo7ToViaa4R5VtsKjZNJWwmMgUU1KmDycLXFsVMZ5jHbiMfHI6Izn6vbiEl5zvqSkHrzo5CXGUPHohz8MhcJxPZrE/fRNOQmbyISbznq2D+QBIxidfWtZhY94L8LOfeJxPO22ce6CWUzyQIK2lMtqYbWWq2uH44t5Mj3GS5zjAdZwjnjtPOu//JeoCCdA686B4VFEaLwPfsCs7CqR+5sxxBjM88Hm4XDwVB9iDfL9fK/JAn9e99sOm9iP32heOH0MrRqG+0TGonzLkOwrQDmheFcxu9fZicz0tRHBGkixdJG9RCM6QStw3RdwNzy2G8nPoeDyMLQ3EwDWdBpmuwapGPvzrcD2ZvE3GB2brxtgJ/UB5haVF5qmQxfr39JHppDy8rFCAEqHINFJm2rl8ApnIk0S4StuNFk21jo0tFIOlOyw2c0g1VISjf8tVbHhMewIwl1XVbWW1ffZ6c73RVSgNzYeIRCpXSKfwuFRdFTkkXqsXhyL/SLOA3JOq+iZLlb2z3F6kzOXvP2E/1yGvlvrR5Yg5EjaTw++154q9+HpNQjWRLSAVUVmEEh6XADG5oEAsOYHVD7Zx3ea0LrtbIGUjGLTYMu2aXktNda9FU0xQHSBhuTmS9rLbHWWSnDzuwe+KiQWZOCq+AE/D4zJJBf1R4yxiXj6HPMwm5+eBGzIsf9+J7uXF78+frkBsIGMzXoOeXJmn0KAlq+qazFXdneX2/qoSPtfO4haS0wW2EtUUQ9X/fpOAfgKehqPic3H6bxR73VM23tjJ7u/rn2bfOA5+2nKcdBwcJx4H9C+XoZ3qc4D99JMMRN1Wl1XyLuMSkh/mpxBTn9pCVaGpD0KI9VS+sdEoyM0Q0bVU/yDkMM9fQy+Mnn/v7sLi4wfvzN8552hWNLMLzrlBLuHddRxhi0yqaOVZwqpcTYo/Bbg1qTL+RsfmmYlTx7dOH13c1mPIIagxW90ychh4XDY5IzOX3JxLA2W12XPB2XPVXzmGKbwa03OwUu3E8RTJGNq+sl7PefjzA3lM3u6HBz/YTaZjMaVrnGflfGwrFS+eBybvtYfOso6cXd+wfQDWbAqOObHPWD/W2dG4Vi+qMHsZzXD/rn3jIPne/L1Tywuc5cVEMaj2c3oLzJfnL8k111NkKS+14K2jZ76IFcaizfOgwUeSFj+z58TEupNnD+w/dm68dktpuMkcEUTW05mmxnFbd+to6cngC8BnSIJ53pwjzYlCArj0iQa+9DI1GFQh4fpwdGDRn3mFVAbtQ8uH1T3t4H8OW0RSUE/H40Ku8NuyT2gKOO0QEBX758FM9LujTfPl3qcM9LN6L+N8Mwg5+at+Xl7h5GyYN4KfvUKOnmPc4LTTNsPlxvHfELrcgE8jIHY87h2oMJn7K/pag8ymstadrS27WgBboiiiUgtI3F8oaOX4uD+J9u/xifitYdyAPSWzkLESfRa1ztY4fhk4Et9JrNkRFmJHmOdf9g6WG6b7ort2v97dBfDe/5oe6cN8ZCoSlyKEcgu4GZqAxqBq0UJ3mbWiW+djVIT7MNiFlCJqVgaGlCH16wppl2hNE3VgjUN8X2qW3hcDgVfbUFfvKcsJiVTEYYmE0hO6U73jXYAgWJap+sRfOmrBkrW5yDrn6F0fOho6kL441HQwphjlwHu57T/533zbiuuya+ffov8knZc9wG9tpzLrfh2KL439/0gjQOnLPeoVbwj1QSrFQ/Bv3wcpH9Dsu+ygZusawAdfOVI+LP0FTgPU9/eVsIe8RrzY+0vAA9ZDxkPwPJPYPFEKEH8YaqxlyfIZ50COWUBlyGiUpD+PQbBNk8HOrU2ZxJx6aZQvtU6IOkHXWIt7YfNLSRTA8LKlzDpvVM9rIGcYRc6EVA19nV2tI82CErZaLmEpoBK2QiLjaADayzo00GUbH6mRNyp8ZQpYUEM9ma+SKwRScjmyTRHgq2zVAQ+NumWkq7O+T7kROeFcop5Xb3AO5vLZSbgCvee/8UrkHDX429Pb18niJKKqaNUwkyTEj1EvVDR0DDe12TfWl9Z3PcmuC+36L4JABC9Dkoc4Q3vUe6wcaxpbzKWknnVnKFHJg0BXppQWE8Ub5O3ft0i6A5ZCSZiEQ/1dce20RnX7JyI4jRhMceqP0jOrpFLkPRoq5qVvveshP5kOW3ayDIsLZ6vWJBXoANzoDHejeeewwD7NYXmBS9Rwz8KtbE0a/lLzUTywF0SDSCSIjvoJGfmTf4F6VQ26C6JAJBJERf+Ee9v3J8i9eI+Ra8TpIepYPo0Efnr95MbTaNe6I6+jzmvmNX2f3OwC+zTzGrBPs6qyOh1kFRMgfrHVaYQNQQyBVCRQE7LbsrO6cdmagtx2U0Vurz945N0ukSN9C7cwmnT8elzRZ3gw43VvbPi3sZF7oyO//ZJL4WnEEp6aQuZrDvI1YO85zbx60DlpnV3dOtzV2dCvoklpAVInDruXJZfK2eoSAkcjkwKfnWqOc4BUQqWrGvo7u1qHNd1J65wH1ckHQUDdw+L/riBb7wKTUYgFSIur2hJHYXIZwFVjaJO48XTBPjUNBefQcX75fJ/x0CpKFV8qrON40lTBPvryVHJcVMcww1v6b/VGFL9OCtx/T1rwERzOgUh5JIwY14OhutOLx9Zy10YnPAYDP6hX5V3OUSO9C7cxmnRbQ/FneOCZNbJoPvDDxn0/VAL/+qr12q5Vm2HYPNxmW9Vqp8qmqgHhjwt/NPWf7DxZe+LN8psm+1LHUgPwbLBxwhLksHBOX/vJDG6eRJhjhLuzkVZv0TC4V0GA4JFVETpxjDhKi4ysCCMVB/9O25I0YENE1kSk/4sjJftlhEXWRXQMJJ6hJYGVi8ojSvDuTIZfMgn3b3pEZA3CNpC0hfZ7cDEpLLICqRHHiGO0EZFVcIgQkEQ7kzjQERFZB6yomLqk6BQtKSortj45EpNLdAMN/o7/vqJ6j/l+LfL9GmxBSAO8+Bot07OT1KnwrO5vrLEOynw3sWZonkqZF0cG82+wEthquYIjI2RDhSBrNY/OPSCSLjMYsGe5sfc62OIMMU3UUKGVVZk9xPoY30JydiY+xV8r/rlaGnyAPZQLbnwgFK+KxOWT5Yn7b0sLmzUi1lukUjKVhox0VSjZHIERwGxlcyhENvtyAjaRAuYdVUdFm3hL0iXutRgtSzAws/6srt2QCVYsyjHlEeVmJdjTcbeIUsjp0VrLe8Q+EnnkR9wcShEtBZ1KSZL7dAS1s/mVMzFfFlFxHLu2stwu6ebuHIlcSE1JSiElyXw7m08tOjuPw1A0ZNNSeb5cTb6KnMz1lSgxoImK2QEP2x6OyYFrkIiFy7B1AO4df/NmVoCvneT9Ddt2/oXlDfWzu/74IlzDFpZXmQzWWhFNzfCi8Px9RaIMHLUfD2UIAuRcH2+GhgMOHRsb2MOJdb41iVpTkBwunhq9CrnjitI2s/xbaBkxP8SdD2r5X1wseHmvcuX5yovK5Rebn1dAruISoPpqiez9knWJ5U6vjyk6Wk8rc8n29Umv6KEbDbMG4wajcdZoOPw8++N8JTFdECvEfaXNdLe6REARmRDI5HjSPUHhAKnsyElmMINI/CQJfTcR9Tnnc4DrP3+OlNDC6Y+NPzDHSMfAZNUNGq7oq4eMgssRkWnRifPxrNAiGYECCQm5BUYz8PheO5SF05TQydKcLA68ko2eROQZEUWIpB3hoeGxdC49KEZAoBK5eRlFoDwTEkyUgslz4nkNCkfB28jFuSjNqnLEyY9bQsnPYfB8yE7AN9810W9XwlXw7one9za7brD1XEL2Re/M73PXUtKp2CJyRPVyHi4+GiqMrAJnFovHxAkudA9Pcqk32D1CVfHoNBWXSlFxaXQVr5RE6UxCr42LX4tOAl+/WXleufx8+UXl1hcXnlc8PVoF+G1x6k/rOBJYrHCwyx3HO7HFORQR5XbO3QAar7Z9czsYsh+FelM+LdCOBGZoqryETGx4XLx+y+09seFjTPSuhWHJS9bE0jyU4ZRweeiuVxUOTkif6MxZ9jw6P+b8WQC7hR5Sl1dwE0sOuocxuCrE934b73qXmxkaCgg6IZHUsUYr3ZHTklrMHlj2nkhwWK35BYj6QuKeDbCk+oHmp2ENX2i1Ck1daai79YvjD92AzYj4aUawXRcvK4DFx7O9beY1grzQfYhex/3/6/Dt8LAdmHVhGC2su/j68Ydq5XsyCI0iygJZLA56OAg2gi5HBXyBPZyGmfdSK7+8yV8009DrCEwuf8DWUT+bfgnWBJvhfo0To1avixs+TUmnYQst4uWEMPZ6bD+z80AU+40BdV8wxyrd7QHTkpj1Gyj5giWps7u7mHkNuQIxQxfoEOt7gf8LDGcP3xEGb4687Od2zW2kdnmWlBtZkspqB5Cn3H+tWujvdlli0dSpb74KKJbXI0u5Tru1xMSOZDvr1L3MWnatKTHmfinzn8ywZwAsWC0LTCnVn5tiXnP2C1N4fOze13Sxr2on6+npcXdqUrRqO0TwZBZtXXj201t+PD9o6WUsviqQjAu1CZOJ+xZZSayNcIfbFiYT8MvALbCU2a0/hI4tmz888ezsD9u3b978AejfkEXma7fvv0w3bmRmnCOmZ0FCXX5nCzv78BOT4VBLW2kyWR7Ri6J4GRr9xZIg33oPJzBCFIfg9KkumtaqlXQI3mJF14DxL7RapVYQ0cDVsktHrzTwf8FPDmeTsP+CaltUsMR9zB9rop8m49fl9JrWvv7ym0MV9tZp87z5cuvOtvBr2a2A0mnx0ZbxdU2l2jyuZE9SCZWci5ORdFwKoNExqZtwLf2vNF/cuWOsktOKxQLw64pggtg8MXY9LX/hJq+UtUxAtEkZeWahjDISw4RON3sqb/SPvR/WR1mhwDFOxOciv2hnCPIck4SZ5QPYNjyOH/ZzoQWJaTvc7K7K+x9rI+NSs1jZqWlBrECEHT0MCxpBl6HSN4Av5dg+/xAvs9vCWmugSRLiQysXS7emjUTQeiAqS04nD95ETMCQ3+WZfGVaV192mURMURP/Te8ZMzV0Pc9uCOp+G1FCOl/JkOudGPagrVeT4u6CIxcVAb4Sq1bq+tE+eSHF+/kTblH61PTV/XO6EeDbFcEE1DLRdNLLz8kCjozX/RuaQlXf3tfS0T1VX3Y4vxaeKVwpbaltgj/6ehQvEy8vlEv0hjARsuHal/p6csz2MLg6BmvCUNHYUQcyoeaJUsnKH6XMpkyiYPLoB3FXdIYJCSnmhczSqelURFVYTmZ6DrxaFlYNz8mAZjS1/kvLfT0jZHLDycHhtdWVo0O2mna7sYRHRGlB2oRWu5RP7ET99tVA3q3OxFXZME8tovOlgwIZTQTYWdGX3ipiLfEf40b8QlLAdhv+nYWnqBA1T3bjLVRFobCp4oTijCWzUE5UPLjmn3k35uiwaL1f1wiV1zZrstF4sxX8BYUn68kv3y/9s7Sf0t5S/703j0PHryIG5SfccvDlpQUircU2Omyl12LIUiyVSGmxjY1YGT0gi5TzlfDVUWLikevewSl6Y99N1Heu+QSDvEyoZaJs550YjaJntSz8xwbT3Z66cSK8Nv1kD7hFDd8EBmHWhsF3tPYJ3OxgO0Llml5C9kpp8wQx6Q6yizPfRLnfJVQ5OYBP0ZjUYphYyIUfjXbdn1gx1lFj+ErTS+mzmOBB9zj8Bvq8cG+Z9qR79op9y3dl0VMGBLkT8XQmHmrf/VTrt+X7k2CbiXIGUw6t3RWu7WU5We50iwz4+JwU/nknzQO/dGRJ0Pt7jIe+jhhUYonFFMArSrsqa0P1f5/XoA8dwVf8mpKTpHmL5AqP3GKIvtWvfYn3xwXg3+Jcp300l8QSMFcYQTafivlCApYA3kUHSnRU3F6PBRZXVu+ukkI5Xi76z0ClulquBcS4SLR1Fk2dqkZLPgwOoyYxMPyOg/pj2KzYOIRbdrokIwM5l8iEGWSCrE7tUU6scJj5bL0aF9ALkOoyyfZSnWimN1PVrw2aXsLlNx50D7ccAiAOr5/eNqGS7MW/UaqX+GhcTBQyALf1rYaSkLlowq0sTY9wqZyscHpos47BpyG5E/YDf3oaeDbwpvZoPsp5X2oWLa7Kuam3SWMK+akEG8AU16wgnzv3TuVEvLOrfpvx01NYOxHPYOIhO501/48TMml0MyRnsOQlm2mXqUhtcIk8MQJwOb+2xBnFSr4exd99PDaZhMiPeKtfEJrFERIgP3F+xzgUyv31yfXzFg2qLcIysb/lLYb9RmKSqsxVUn4xZ+KldVJA+IPDnXm6Bkmj0xhyRhW96h2XqGEAe+NJ93TLIUR3A0FlD7qHdDrkiF3295qSiyoIKWI/buU0yuITLptCa5581VucSNpa14LDq8T0eatPOfSBbLIku+umsFnQGrdRKfMzSxz5FzlunFuHmJAZg5nJgqj/4eyKts4jJz0SeMVSzmXtkQeDzWeE6Y78psnITJKOXmeQ8bI2DVYmeuqmppq/j6lU50/qiwmUfAfS1rENW9hL397C5qiQKI6O6Gr+XIwUgpsXORHC9m5qNTwiXNTnqQGx5PZWT+6KgGlmoNAIrIRgbIKodH0/cPpkIT1dMqZL6hj0Z7MzKJqz/Es6qtMPPgIc1CjkuokzAxbHPaePehR5i1onKYF3jeUh/enfQ5Zk9cdKv6sUPDqZmZjvxe+IWyNKpz9Xv7OeQwFNGBGzuuBOkw3fCdG+RxG/oAbX1brTK6mkujZ3133I/1v2m8ySrAlT2kSJZMKoDkJpF1dzVS0F9u3tu84xdp5r31Fga/CFX2wmwp29nP2uqarX/1WzXnUV5P/s7x1scTu8thKmFwf70spFqom8tnfMRVDlyPBvIyOVUGnx9lk9gVDZ0vk8oymoyykcIi1aKJVIdcWicuLmSYnT024v46+ZEH+i9PpKLqHAbF1tab8FxC2/iDvdTcTeoI/WjgxxSR9AJki0R31lhKZ8t1St6Cf0hgkpXlYoC7+BtJj89gYwvmBJ6+zuXgPKhKEZmuXmTR+6nSnJxt/U9dVWun4wx6ndYxERX/0kN/+FNtx4Pwh2ozEvEdyfZZvFcleSjsv/NqikMNws8DCKXGmNI+NLwE4cdaOrE9g4Rl1g3cUlCRGTY2O3J8Q4VLsBqUQK+7ovDBV9lFDpfbGfGPzqtVJwIcX7qUaUc2GGzJMal5TaXAAiyVtH/KPDqd7TB5NdsFmxCfDQrHRxZgaSRShrn8RKgBTHgVbP+th9GeaMfnb/s4NMvuspLAQ6YaTW0SO19FpBwmPw2Hscguc0g5NSp9IFjfwOYKFTy95LJSaiiKlpgayg79HlqFL69hCczREmfpjh42QQiygLYmlcYK2osuCQVlTrqEFnaaYvmozfNPUWeHq5ffaEMb2hgYf7wm9+q7pMpcEmDeKhILD3Ypi0+GYw0G3Xth94mXB8PhepedAT104zm9PVIITpawi1J9bNw9m+nUTeDf3v5gkNi3LNuip2z0nhRErXR5ZlX3OHNa31krGofTtcze1fs/YUzcrU/GxLOwZlkU7Nkd1i3ZEF+DCtZnx/2bXI6ail9IRm5wSYrZnwFP9Fd8SAXhdIDt9BOqIbCK+RVxJDh4ybgxJTKcF8edkoadu2UDmbTUb/IPYD24EokTgju4w4LZzdt/+iiq1r7UvrTjlx50kCq/Ovj4Hfg8yuvcMttr3nOLYyQw8Kd5CvIR9AjwpAmfAItaj3vH2zv0p7WhtnUg+mXLRR8/UDDFZ4Kro2rVmsbti1vH7fVyvGCanNdIMzZfxqWgIK0HwNKMNFjcDxpbcPuL3g7mr9AqgCLrRQBy/i83NjQTUo2/ejIOkSD7ozyq4BY82oYFCWJqUcHTHtWt1SyZ1Eq0PZ3guDy5wxzWC7HUn7faS+kS7YrLh4OBz0ZOzJwQ05w7dM8XZP6nwkCdXMzNy3QmG4G9ART1FLfjdhz4+UumwSZtuxn1mgTPiVY5jK2evOArFPpR84f57x/6nte/o7N+0FG0BL7UwNwvk96UMVlEzoAzWgTtkoFBmbQQ2ohQYYiWB92vOT30+N+cdHEJlSQswjZR+cU83ZeDReY1TCY/D2msxqqfRoojdum9/WSm9b8dyex+S9PKNr+x9M0wfqS7iWfuUs67GAyC+Sf9xYw4bX3ipCv5QNaJhq2KZiyS4+pfyimrnl0m35mz7OdavHehnDETvC4Nvru7WYRPqsQ+6HXJNPB11X/NroJ4umcvtzE8xo5Zq6K0plkLsOISomlmAH7nikTT/JFJvnvYChv9xo6d4EivaS065dp6XtZvnwDf0NOPP4LO0suOjAN0xiooIjkcT4OEI6H5iW8HK/Jem8dDc6uzPElReMyihs2JmDREXsPJwymQtgZoE8MzARn8YH1GM7FdLS+dkbspCvUUiIQqDQ+ux73v1KvE5AzhfFlaRzk9cxGDya01K1N4U3dVSdUQhyL1K0Qi3fvUAo0FF0wm8YWUgGD3YoOmQdikqZxDQ2jhYTBsfmx0pqWx2iXRaTIDcPVVfro9axEtk5QOfIjX2rKtZXepsbo1szEZXLL5afVa48A1OIiGIFE5QdwqcUOBPDkFdcVFRNKqr0OkVlFZmFYuILE9mMRHYhHiTtySnOoYqofdsddW2b/oj6Mi2fQS+AVGxygSy/gxnKvBQdfyg+ZhiNvfhp+MMfyMeDxiI44H50ARvKh+Q0qnyfVl+pqBB1wlR0xFKhujMGwJVFK4n7o6P6aceKZkBkORWDIbAEp51FMieJYOkwCPyZjiQVKPBMhrIQR6Ijz+Ex4sJBcSGmcJM1jo2IqI6JrY5AsGkI1nrsBkYvFmC7L3zFKbqClIzwPYWarpjAUJXqyHni92il/FrCUtH+ONS+mKgGcMbt1JpnRvkJK0Jobp6k2nFUTsU7Qm9J4HH353lRCmfmayAOOy90QzFCmJslYNHCSgJHEk9APh8594to+EVw5tJ5sUNLH/1A4f+4KI+Ip3E5PfwKXp2DrQmouZho994QaZicO79PjyS/IzI98m6brSR2WETNw2siwqr+yd4Fudr4RjgOMS8cE422/Z9IU8FmuIeCZuv0G2T41BoCIjb5NDECpqzcb90Hyb59DO8agX9U6/ZW+c9IS4I3moJDl6uGfEehPkoetQwcO7MuElLHiZS+G6CAL1XDjJ5OuZFRWIYtP4sz/7rM2Bpc0g++GaZxBYkFOnIxsVifWCDk0uNjqYVUItVCxePwZPCjoctIn7+99kBfdlikyTQYbqTN31rBw//4Y4J7rWtoay6ptc5os5FvsJYateXsCrTZeeMwbThb/dfPpkIKVIyHMNl4YhGU+9cIbQSc/JCf4iWsUQnljc2BbZmsZJ8IhE8yMyOwo7FNwbNKfFm8pJBmU0XorlU3xqoPIsLnazfmU/i2cgxEAmnrSxCaeQ1UssgXTB0vqbta/R6+7nwYeIiGaBjP4FAvDI2Y2XVA+oXOUEwrLuRPzL7jh/+rl5IgEotTQiJLQceRXXiAx5wo4lc0+rdpYFFnbqvKqVRp5sO53C3J2l/Ir6zz69LCoi9c1VhpZBkIVfBd+Zhjn3SfHR87zEDi2M0Zx7zL5NIRmz5x9kT0/xoopM4i+H9w/wrT7KQCR4Rh0LF5SAtjIkRMRPHITqcMm7bmiAItxqfHMzWoLgdvrw12pA3RW/ZGr2mkNXLmOa201vygje30EVNC/SPchuYvSwfLqq+qoD9mQHUrlB15t5HDzX/V443WZrrHsw0oYQGuIzwLygoHcAfEbipSFTXxekzv6UfkPrKTOfIlD96IEVgOP+wM4ucz6NNfcnP0Wzf7wNS5bEFTQ+jO6qC9wobf+cS2sTk7e6CdM/awe3B47RFhNoLpEFcFGAO284wtYhDv+FCod1GEuYmMvA/zIxsju8BPOKn5FysD3/8LjTIo4abR8b2ZuRsw3qFrVSKxTkPFKwhnHZKSQopWs1+nphZKoHOz4pIgOC/fkiiCsOJGVyyZbepLaoxKQllowGM7XEWfJo0K4zXehSvYLPVcjdDjB9bfyXkIrJ1MwneUyiOHcves7zY5OtlO5qa3rTlBIvjpMWk7pesl0TVdXBISdcTp2U6PSP+mCUswW9Cyu3eKc+O45sYU+92bxPeJIM10c0pz8zind6q3DawZ9l8Z5kT+iQwMkvKWT83FHoE3x6N+wr31dD7Ng4zkwSz27cvlw0rNqgZkV27207Kycl4zD95zRDnK4F7H1zNPrg/zMkQ7mq+cvnhaTnuN572KBvFkTQZSHo78x0sQ6eVMu00r1l0Y6Zt/R3F58NNt5C51SwVtj/ArUUh8q7mnjBaG/d8i5Xzd7+jAtzvo5/RIdSSPTgKhK8tO7KsxN02AxqbGdebexB7nNpU/QptzYm+ZgMg07NLTECGOni/gGADHkdmEU7d2+G3EShJsMySfkkPHamddBFQaDzgrUtIrWW9dZvn499TMJptMbcIovzpVk+JtQultQfVsTNGEhZ3X9fz1ZLrTvyOyZL3XB5+XM2CmJoQqbstX5NibsIRX/Pw60GTT3GhubK27gdpWHsa0ljDpdIPLhyoypGwYsHU0DCohOfnFQFIJXSER0xW9bOkCWwYcEVbTXZhPIwWJ2ElzjzubzrivbsQ8eqLj3pYd5e829TvOy2IZvkGb/MT3pGbpAygoOiWoVtca0X1CX/IECwcJDCEJEJkighzOcwZhaZQUMJxDeflE1HZ04k7GTheXSXDE67fRJ0UBZnaS6uf4Y/8B8EkCni3SjxrhjGZvDw7b00QC55XJ8uO0I1s/K7N6Sr19cglQbvTVDQ2pUgXmhmq7jXJ9k1WbEiOp1RoPgNLq7iotrXIP+Ydi7yfTSLn95vN7PHukhuu4vbZay1lx4g6bzV5EwLGWP6U9A7l87YoBe4OlYbgc7tneTeMKaObEHKq+ihqSoDNLEcjf0k0A1yxvaDZbe1r2FSryBPtO9CzbFDXNckX4HDlngaBnmcRLYOioInIWFtIyfI6dZe4vUyRdyNUOtFwfvcuuphJZExg2nypRFmv6LLU1EE6Rcn2nqKW05Rx3Q8Jn5tMK7o5ekJ9JxnvYEQo5r7olP/oOf7qSI53Zzv+wFG++UUNS1zdZrPbOir4hK9Ro7I4r/EMEnbkIi4uVSM8dWffrHMZcPf3RaIlJOq8XX18U6oND+/zXxoGUONM3mdLMe4uDQpr57pPhIPF/C2O54l/9EMN1iuR8Z44zKJP5f/r/wZlsN8j0PkeVNdUqzwZWo9KjenjvWRyVFpYUs4i5eEomx68KZlFxBvp2NLAaeMtppXGDrDwrMR+T1vunLbhBYrf9WepllvYRQ33bGT41iUW+NkaQQyR/H7EJ59PM8C5zjU/xaWAEzDKgoEFTcFh9YtW+TrVbrnN/vFdW7n+b1F6E5njeUfC9FsbScGo3toU1Y1mpvhEI71RmTkjbeIeVfQbGjM/dGrU3wI0R5A1H+nq7Mf+K3bmTACKGdEOV6ZCY1W3uLTPKaqyK0A0fUteLov3soew4jrYkoR87a+je9uQOW1BQzCICsl/0hKo0IiKfiGwHH0fojHaW1PQcIrkITybnpC63PzqZF6NLTumMzj/3AKYGPb8HZdC5yKWXfc13jwMGbyIKkrjGUbCkS1YDb4hjl3Z3INaSSMB9cSPwaQIXmqfVIIkHshYohfI/lDSuweWwoLLgkBZUG9j0co0gL0hsHQFJPcI/DWPSy1hlYFUtrielt8yi1ilsf+XQvZJmcus6wHa8fMH4D8WA4iv8nX/Rt4r+izJ98fV6r+H/XoLmVas9cIzsgbw1cvjk3cUFrmq98K/86vJ7SD1Atw/8E/iP9DpLn6rzi2D+FVjECLI7I72wQiHiW1tgsspyV2SyAn5Kr+isCZY0WdWZrEKTVcxk5Zqs4ifLV0njtiiA+/NI5BRUXMlOZxqe4AJLX8p0Zpl15Y2juLmZFJLmY5VbS+5aiyKrOzEZp3G71Q/yFlpzt8PzsaTLgO+eqrTA0Csyh8oLd9p1tdBszjj6xGlaSh53X1VOiOxnVr6HQYfgn4ySRlzu5JaifMyl3+racw0y+6DL9a8cn7cST65Xcheu3LPISH0X5454cG7/iqnbP5kxfkl5yUJQltZqf4trTc4SaoYd3smqftnF8vHleZvqcrcYfYEo+ZfvEU4+avhFT1Zt7ZX0MHuK/PXUI1x9vdWYO4+PJZQxu0rdInr+KgvWhpH8AktXcPUz19EzwYXKYwsL1n2sg4ckw7KijhGubuL9Hea5eZ7VIL+xsqpgoA6MsYxp6pXMLBdvYtKC1bFwMGtIuR//b3b9q/qCzYiw1+m5TS48opIA8IXb/sllGguWWi8wkCvEy2cw7zIYQFxaH5SSM4SFklSYsiF2D4zMDie7ljrJkYok+3fzEmdeiJ1Zdd9Vnaby+lt4/KCWN8omPq8t+e6ilDtuPHmwHxSruNjyQwnymhUnqzo5UANIVTQLdrlHXUulTFd5dRbe2pPVMIUAx/nNh52RO3t2eihWRZkAFAQaYN0tNdV+2JuU0r/i01lnmWq+mFk+bAUv5//mTGFnNO/Hf1TGwI3cEWzehadP8e/kv658dsvXVX6teKf2bpe5NbB+8L/QU/yU30M/4+vyo/5xk1vmdE/dWVVqQl62aU6W16yefgM8Wlbo7Zf3CvAB8IkH/g08HbgFgHlHeXM2cFq2/2V7w1dbAX5gb1vzZShwcmm5oyjdb2D3jCKc3CoqCM1Fzz6gxla17oGelK3qlAYXX13WKnNVm8UE/3RlQV5RSJyNk1VJXqSDyee0h3iVt4HC/8Ennlml3k1Y/xSx2MUPr6SpyN3wkVNnz0qBhSyuC+ckz0M3yYYvMZtK05RrzLlWWmX9K6eIckNWNi5rbfKZ4gPt1C6Z32xJ98ksNIyCn6gne7I0nmMqiqs94yQXGnT+Sco1ucXPmgLjBcFJKmpy9XXRHu1K5O/p4ELfo/Ad0JWY197anqCY2VjVORuA99OSXZ06UhyfPynYGsyX6j6u0K3gTROlT7Mi57T5f7xOhU1DIei/KpMABggCN6Ld0+X6KLTRPawzvZFyeodQsndx1e7dUTvvPaDrlfeQcZDeY2xK8Sftud4z6CefP4tnzr0LXHp3yRtodm29A7Yd5F2grELvDizrfe8B2Naw9xA8K+fqj8A6T6JwpwHwMWB6kTk3L6EU7aVKRfAyvjZ5OY4+8vK8/eEViRPHa9ozvTL3cHjtOV33hgC32LV5EdSd0ksguPP3UnCtV14GgbXby0FwSbw85Mxp6OPJj6TNDkchklAim2RiVkjdvyaRxDBSaNUKHYQY25ogRtMq5sgTR9bOODq5pLP8ePpCJtcgd2JNeO9JEgrZZI/AtPE/5DlBIFrblCTxidLZHTEHaBMqjem+XytJqFSBYqnGokp8spOj9ZlDJIl5R0euApt9EI8l358N1v86CwOlVyjRqqapBmCQfPNs4EAi01a3qwJhGvYHfA6P0jNBY4wAKufK1U49wL+a582C6qhBEagZNqRtVVwoOVM1ByWCrsJhenJNIVWHkA+w0HGjejalkpunotJ5rThox28YtQ0ulxlemEolOFol1QxCkyMdl+40SLEFpXK0bqKgZFaidXtIydx27DxR2X/TPlWojDYXICqlUADMkYoQMAFMr2ZFZSMoc5R7ErkqxcF7YuzaguAIzR0Ig/NCaCSWwowk0RBiKZWg8J5OgMqNbbqK02Qn/n0qAQ5zpiId9DKkhcasy4BGHqSBoNIsIrYK7UvBR57ajSXGneSD2Ad6GTCPZuT1zmzDfEfNG1fBdpPKbcFTkYelxGtEl2RGN7qZ5hpbxTrFyfom5tIslXqQkVA87v8QRuO/34BbcL7tjdiHdO7+V2z22rDJf/ztdMj+knFPDJgOHZioGHXNi+zD/uWd/6PZH0fevbVoMm+wvF96+707H3z40Tdln378ydHynz5/cO9+xXc/jFkrq2qqa+fqGuobm1qaW9u+bbd1dHZ3nd3TY+/t+351Weu5bbvjrnsVbQweZIiRCj1hZmEVwcbO0SLXkUsRbkXTglhx4iVA9cv1boCWJNkaFIIXz+iRx90lCz9FBlauk7DpADqMfPh0futP6l//eeJpD6CgoqFjYGJh4+Di4RMQEhGTtDspGTlFzzy3LCUVNQ0tHX03PHTbHXc9cNP9XmJk2rMbIgUhGEHw6hvbpLnZtWjVhoTuS4ddj159+g0YNGTYiFFjxttks222O2KLrY4a5JDhVre2Y31kon3229Ok9TYgDYE9key62RZbbUMckmWnXXabU9R915sc5EBxg3htfqYc02IzzDLTe0tNMsdy400x1U4HHNwXzeN0wQrqIFucM7YIaQCVEGIXsjhjpEJUxI+oKtcjaCYgXQkmS/nkrC99xXEDmIV20m9+9W//9X8FFToDiRDya7PHVZXu16xMRt0QQi6iOyhPyXeF4wEchKd9NwbUAqGqxZMwkyfKtXEkaqqJCMvt755P4XiHyWqhh4vAXCDxE1CRLeMk2bwMKlJwkQ5O0tdSbxln8efjuNwHgMiOaXMeqiFLbp5fFGdT1V5kLGkS25Mq21aub3eKJBR3qY9tajEISTVUsciuh6x4d3Cbwqw8CytUSBRVPds7qeI9yZ7fVaap2bZ9l9QWsfiNKgtUZNc2B49Zm50XZYUJiaI6B0/xzH5FcVWpPCsasecumiVeRI22L4JfGG3V56T9Uql1apO/dGHCJs03kpOzw+Rqm6Npfhizg8+KqqVlfA7sRoufUlWti+AEmYZ9JdudhsNneTQLtZ5xZMT+BbmpHaWFcFlmKIaTNBlWAC2mAUFPImOpn42iVjKaltXdRHN5K7ODUW/eukaN0/qbSCXB+5v6aEQPgTmPqXxErmc98olENJEyAIRgBMVwgpS2j3MRKEQDtDokspNZ1lZhBMVwCe0VACEYQTF8HKefrDFJbx8Ju5kVaYfePkPZTiaEUczEzZW6mlHRDWCcINV8CmAH8UPEFEjcJj3cBNt33d2lAeLX2+fHKygcDg48hS5oqjuuIfqs7Avsk0jJUunH6YsWs6Bu0QETEhM5MZGrrs+lhI74GUeGGA+fUNaPKzqxiPwbZXOPy1yMjAsDZVqcaT7ERcX4yGHR4rhwYBIw6vXv+e/k7z3Y+qzT+3UOIaZ0AqTN/H9Qr0AXaKypJpQJv1M5WROoRdIhbFGfTkhKBSjYthDo/2ggU/0BMNeqmopHzAMBqEFIVCdcQMKdACGQyCIS2RYQghC8Z1sAzgMQBEgIXEAgANgQIBEgELiguua9ieXPQguKfdD//ijkNZrzQ1bDd0eBlcdF655spoY/csXDYJKDNi+dSyp1f1UO7WMm869cTZZ8SRXXRpKsUhJ7DS7HWr3frWC1abvbECx0+xlNErxGG+cfxRbep65u3n/2PZ5/su5j8aDFZR4znPtuQvLDN7O9krZsNVxtWE09SZ2bd96DamfysM2kHvc4XJX/9whmPQI=";

var VtexTrustMediumWoff = "data:font/woff;base64,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";

var VtexTrustMediumWoff2 = "data:font/woff2;base64,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";

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n        @font-face {\n          font-family: 'VTEX Trust Variable';\n          src: url(", ") format('woff2'),\n            url(", ") format('woff');\n          font-weight: normal;\n          font-style: normal;\n        }\n\n        @font-face {\n          font-family: 'VTEX Trust Regular';\n          src: url(", ") format('woff2'),\n          url(", ") format('woff');\n          font-weight: normal;\n          font-style: normal;\n        }\n\n        @font-face {\n          font-family: 'VTEX Trust Medium';\n          src: url(", ") format('woff2'),\n          url(", ") format('woff');\n          font-weight: normal;\n          font-style: normal;\n        }\n\n        html,\n        body,\n        * {\n          font-family: 'VTEX Trust Variable', -apple-system, system-ui,\n            BlinkMacSystemFont, sans-serif;\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
/**
 * Defines & applies VTEX Trust font
 */

function Fonts() {
  return React.createElement(Global, {
    styles: css(_templateObject(), VtexTrustVariableWoff2, VtexTrustVariableWoff, VtexTrustRegularWoff2, VtexTrustRegularWoff, VtexTrustMediumWoff2, VtexTrustMediumWoff)
  });
}

var Fonts$1 = /*#__PURE__*/memo(Fonts);

function ThemeProvider(_ref) {
  var children = _ref.children;
  return React.createElement(ThemeProvider$1, {
    theme: theme
  }, React.createElement(Fonts$1, null), children);
}

var Provider = /*#__PURE__*/memo(ThemeProvider);

/**
 * Hook to access the theme property
 */

var useTheme = function useTheme() {
  return useContext(ThemeContext);
};

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Credits to reakit
 * https://github.com/reakit/reakit/blob/master/packages/reakit-system/src/__utils/forwardRef.ts
 */

function forwardRef(component) {
  return React.forwardRef(component);
}

/**
 * Elementary accessible button component that can be reused by all VTEX Styleguides.
 * You can use reakit full features and theme-ui's sx.
 * It renders a button element by default.
 * This is a styled base component, so any system can theme it.
 * You may configure your `buttons` property of the theme object.
 * @example
 * ```jsx
 * import { Button, ButtonProps } from `./BaseButton`
 *
 * const theme = {
 *  colors: {
 *    primary: 'pink'
 *  }
 *  buttons: {
 *    'primary-regular': { bg: 'primary', px: 2 },
 *    'primary-small': { bg: 'primary', px: 1 },
 *  }
 * }
 *
 * <Button variant="primary-small">Small Primary Button</Button>
 * ```
 */

function Button(props, ref) {
  var _props$sx = props.sx,
      sx = _props$sx === void 0 ? {} : _props$sx,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? '' : _props$variant,
      buttonProps = _objectWithoutPropertiesLoose(props, ["sx", "variant"]);

  return jsx(Button$2, Object.assign({
    ref: ref
  }, buttonProps, {
    sx: _extends({
      variant: variant
    }, sx)
  }));
}

var BaseButton = /*#__PURE__*/forwardRef(Button);

function useFocusHollow(params) {
  var theme = useTheme();

  var _useFocusRing = useFocusRing(),
      isFocusVisible = _useFocusRing.isFocusVisible,
      focusProps = _useFocusRing.focusProps,
      isFocused = _useFocusRing.isFocused;

  var focusStyles = isFocusVisible || params !== null && params !== void 0 && params.showFocusOnInit && isFocused ? {
    boxShadow: "0px 0px 0px " + get(theme, 'space.2') + "px " + get(theme, 'colors.focus')
  } : {};
  return {
    focusStyles: focusStyles,
    focusProps: focusProps
  };
}

function useMeasures(_ref) {
  var size = _ref.size,
      icon = _ref.icon,
      iconPosition = _ref.iconPosition,
      children = _ref.children;
  var iconEnd = !!icon && iconPosition === 'end';
  var containerStyles = {
    flexDirection: iconEnd ? 'row-reverse' : 'row'
  };
  var iconStyles = children ? iconEnd ? {
    marginLeft: 3
  } : {
    marginRight: 3
  } : {};
  var iconSize = size === 'small' ? 20 : 24;
  var resolvedSize = !!icon && !children ? "icon-" + size : size;
  var iconProps = {
    sx: iconStyles,
    size: iconSize
  };
  return {
    resolvedSize: resolvedSize,
    containerStyles: containerStyles,
    iconProps: iconProps
  };
}
/**
 * Component that handles all Button variants of the DS.
 * It renders a button jsx element by default
 * @example
 * import { Button, ButtonProps } from 'brand-ui'
 * <Button>Default Button</Button>
 */


var Button$1 = /*#__PURE__*/forwardRef(function (props, ref) {
  var block = props.block,
      _props$size = props.size,
      size = _props$size === void 0 ? 'regular' : _props$size,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'primary' : _props$variant,
      _props$sx = props.sx,
      sx = _props$sx === void 0 ? {} : _props$sx,
      _props$iconPosition = props.iconPosition,
      iconPosition = _props$iconPosition === void 0 ? 'start' : _props$iconPosition,
      icon = props.icon,
      children = props.children,
      showFocusOnInit = props.showFocusOnInit,
      restProps = _objectWithoutPropertiesLoose(props, ["block", "size", "variant", "sx", "iconPosition", "icon", "children", "showFocusOnInit"]);

  var _useFocusHollow = useFocusHollow({
    showFocusOnInit: showFocusOnInit
  }),
      focusStyles = _useFocusHollow.focusStyles,
      focusProps = _useFocusHollow.focusProps;

  var _useMeasures = useMeasures({
    children: children,
    icon: icon,
    iconPosition: iconPosition,
    size: size
  }),
      containerStyles = _useMeasures.containerStyles,
      resolvedSize = _useMeasures.resolvedSize,
      iconProps = _useMeasures.iconProps;

  var renderIcon = function renderIcon() {
    return icon === null || icon === void 0 ? void 0 : icon(iconProps);
  };

  var blockStyles = block ? {
    display: 'block',
    width: '100%'
  } : {};
  var mergedSx = mergeSx(_extends({}, focusStyles, blockStyles), sx);
  return React.createElement(BaseButton, Object.assign({
    variant: "buttons." + variant + "-" + resolvedSize,
    sx: mergedSx,
    ref: ref
  }, restProps, focusProps), React.createElement(Flex, {
    sx: _extends({
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto',
      width: '100%',
      height: '100%'
    }, containerStyles)
  }, renderIcon(), children));
});

/**
 * Elementary accessible component to display svg icons.
 * It renders a svg element.
 * @example decorative only
 * <Icon>
 *  <path.../>
 * </Icon>
 *
 * @example grant a11y for standalone usage
 * <Icon title="Meaningful name">
 *  <path.../>
 * </Icon>
 */

var Icon = /*#__PURE__*/forwardRef(function (props, ref) {
  var _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      title = props.title,
      _props$sx = props.sx,
      sx = _props$sx === void 0 ? {} : _props$sx,
      _props$viewBox = props.viewBox,
      viewBox = _props$viewBox === void 0 ? '0 0 24 24' : _props$viewBox,
      children = props.children,
      _props$fill = props.fill,
      fill = _props$fill === void 0 ? 'none' : _props$fill,
      svgJSXProps = _objectWithoutPropertiesLoose(props, ["size", "title", "sx", "viewBox", "children", "fill"]);

  return jsx("svg", Object.assign({
    sx: _extends({
      minWidth: size,
      minHeight: size,
      width: size,
      height: size
    }, sx),
    ref: ref,
    viewBox: viewBox,
    fill: fill
  }, svgJSXProps), title && jsx("title", null, title), children);
});

function IconFacebook(props) {
  return React.createElement(Icon, Object.assign({}, props, {
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M6.02069 15.3333L5.99967 8.66663H3.33301V5.99996H5.99967V4.33329C5.99967 1.85903 7.53189 0.666626 9.7391 0.666626C10.7964 0.666626 11.7051 0.745339 11.9699 0.780526V3.36628L10.439 3.36697C9.23864 3.36697 9.00622 3.93739 9.00622 4.77443V5.99996H12.4997L11.1663 8.66663H9.00622V15.3333H6.02069Z",
    fill: "currentColor",
    fillOpacity: 1
  }));
}

function IconInstagram(props) {
  return React.createElement(Icon, Object.assign({}, props, {
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 1.44133C10.136 1.44133 10.3893 1.44933 11.2327 1.488C12.1433 1.52933 12.988 1.712 13.638 2.362C14.288 3.012 14.4707 3.85667 14.512 4.76733C14.5507 5.61067 14.5587 5.864 14.5587 8C14.5587 10.136 14.5507 10.3893 14.512 11.2327C14.4707 12.1433 14.288 12.988 13.638 13.638C12.988 14.288 12.1433 14.4707 11.2327 14.512C10.3893 14.5507 10.136 14.5587 8 14.5587C5.864 14.5587 5.61067 14.5507 4.76733 14.512C3.85667 14.4707 3.012 14.288 2.362 13.638C1.712 12.988 1.52933 12.1433 1.488 11.2327C1.44933 10.3893 1.44133 10.136 1.44133 8C1.44133 5.864 1.44933 5.61067 1.488 4.76733C1.52933 3.85667 1.712 3.012 2.362 2.362C3.012 1.712 3.85667 1.52933 4.76733 1.488C5.61067 1.44933 5.864 1.44133 8 1.44133ZM8 0C5.82733 0 5.55467 0.00933333 4.70133 0.048C3.40133 0.107333 2.25933 0.426 1.34267 1.34267C0.426 2.25933 0.107333 3.40133 0.048 4.70133C0.00933333 5.55467 0 5.82733 0 8C0 10.1727 0.00933333 10.4453 0.048 11.2987C0.107333 12.5987 0.426 13.7407 1.34267 14.6573C2.25933 15.574 3.40133 15.8927 4.70133 15.952C5.55467 15.9907 5.82733 16 8 16C10.1727 16 10.4453 15.9907 11.2987 15.952C12.5987 15.8927 13.7407 15.574 14.6573 14.6573C15.574 13.7407 15.8927 12.5987 15.952 11.2987C15.9907 10.4453 16 10.1727 16 8C16 5.82733 15.9907 5.55467 15.952 4.70133C15.8927 3.40133 15.574 2.25933 14.6573 1.34267C13.7407 0.426 12.5987 0.107333 11.2987 0.048C10.4453 0.00933333 10.1727 0 8 0Z",
    fill: "currentColor",
    fillOpacity: 1
  }), React.createElement("path", {
    d: "M7.9996 3.89197C5.73094 3.89197 3.8916 5.7313 3.8916 7.99997C3.8916 10.2686 5.73094 12.108 7.9996 12.108C10.2683 12.108 12.1076 10.2686 12.1076 7.99997C12.1076 5.7313 10.2683 3.89197 7.9996 3.89197ZM7.9996 10.6666C6.52694 10.6666 5.33294 9.47264 5.33294 7.99997C5.33294 6.5273 6.52694 5.3333 7.9996 5.3333C9.47227 5.3333 10.6663 6.5273 10.6663 7.99997C10.6663 9.47264 9.47227 10.6666 7.9996 10.6666Z",
    fill: "currentColor",
    fillOpacity: 1
  }), React.createElement("path", {
    d: "M12.2705 4.68941C12.8007 4.68941 13.2305 4.2596 13.2305 3.72941C13.2305 3.19922 12.8007 2.76941 12.2705 2.76941C11.7404 2.76941 11.3105 3.19922 11.3105 3.72941C11.3105 4.2596 11.7404 4.68941 12.2705 4.68941Z",
    fill: "currentColor",
    fillOpacity: 1
  }));
}

function IconYouTube(props) {
  return React.createElement(Icon, Object.assign({}, props, {
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M15.8667 4.80002C15.8667 4.80002 15.7333 3.66669 15.2 3.20002C14.6 2.53336 13.9333 2.53336 13.6 2.53336C11.3333 2.40002 8 2.40002 8 2.40002C8 2.40002 4.66667 2.40002 2.4 2.53336C2.06667 2.60002 1.4 2.60002 0.8 3.20002C0.333333 3.66669 0.133333 4.80002 0.133333 4.80002C0.133333 4.80002 0 6.06669 0 7.40002V8.60002C0 9.86669 0.133333 11.2 0.133333 11.2C0.133333 11.2 0.266667 12.3334 0.8 12.8C1.4 13.4667 2.2 13.4 2.53333 13.4667C3.8 13.6 8 13.6 8 13.6C8 13.6 11.3333 13.6 13.6 13.4C13.9333 13.3334 14.6 13.3334 15.2 12.7334C15.6667 12.2667 15.8667 11.1334 15.8667 11.1334C15.8667 11.1334 16 9.86669 16 8.53336V7.33336C16 6.06669 15.8667 4.80002 15.8667 4.80002ZM6.33333 10.0667V5.60002L10.6667 7.86669L6.33333 10.0667Z",
    fill: "currentColor",
    fillOpacity: 1
  }));
}

function IconLinkedIn(props) {
  return React.createElement(Icon, Object.assign({}, props, {
    viewBox: "0 0 14 14"
  }), React.createElement("path", {
    d: "M13.3875 0H0.6125C0.2625 0 0 0.2625 0 0.6125V13.475C0 13.7375 0.2625 14 0.6125 14H13.475C13.825 14 14.0875 13.7375 14.0875 13.3875V0.6125C14 0.2625 13.7375 0 13.3875 0ZM4.1125 11.9H2.1V5.25H4.2V11.9H4.1125ZM3.15 4.375C2.45 4.375 1.925 3.7625 1.925 3.15C1.925 2.45 2.45 1.925 3.15 1.925C3.85 1.925 4.375 2.45 4.375 3.15C4.2875 3.7625 3.7625 4.375 3.15 4.375ZM11.9 11.9H9.8V8.6625C9.8 7.875 9.8 6.9125 8.75 6.9125C7.7 6.9125 7.525 7.7875 7.525 8.6625V11.9875H5.425V5.25H7.4375V6.125C7.7 5.6 8.4 5.075 9.3625 5.075C11.4625 5.075 11.8125 6.475 11.8125 8.225V11.9H11.9Z",
    fill: "currentColor",
    fillOpacity: 1
  }));
}

function IconVTEX(props) {
  return React.createElement(Icon, Object.assign({}, props, {
    viewBox: "0 0 1181 433",
    fill: "currentColor",
    fillOpacity: 1
  }), React.createElement("path", {
    d: "m465.558982,2.363315l-374,0c-29,0 -47.57,30.83 -34,56.46l37.41,70.84l-67.82,0a24.94,24.94 0 0 0 -22.06,36.56l120.33,227.75a24.94,24.94 0 0 0 44.08,0l32.68,-61.52l41,77.62c14.43,27.3 53.52,27.35 68,0.08l187.46,-352.76c13.25,-24.95 -4.83,-55.03 -33.08,-55.03zm-168,150.72l-80.83,152.14a16.6,16.6 0 0 1 -29.33,0l-80.05,-151.5a16.6,16.6 0 0 1 14.62,-24.37l161.33,0a16.15,16.15 0 0 1 14.26,23.73z"
  }), ' ', React.createElement("path", {
    d: "m863.358982,166.013315l-40.91,0l0,140.21a4.83,4.83 0 0 1 -4.82,4.82l-31.55,0a4.83,4.83 0 0 1 -4.82,-4.82l0,-140.21l-41.15,0a4.63,4.63 0 0 1 -4.82,-4.58l0,-24.8a4.63,4.63 0 0 1 4.82,-4.58l123.24,0a4.84,4.84 0 0 1 5.06,4.58l0,24.81a4.84,4.84 0 0 1 -5.05,4.57z"
  }), ' ', React.createElement("path", {
    d: "m994.688982,310.033315c-8.43,1.2 -22.61,3.13 -48.62,3.13c-31.07,0 -58.52,-7.95 -58.52,-51.78l0,-80c0,-43.83 27.7,-51.54 58.76,-51.54c26,0 39.95,1.93 48.38,3.13c3.37,0.48 4.82,1.69 4.82,4.82l0,22.43a4.83,4.83 0 0 1 -4.82,4.82l-50.78,0c-11.32,0 -15.41,3.85 -15.41,16.38l0,21.92l64.27,0a4.83,4.83 0 0 1 4.82,4.82l0,22.88a4.83,4.83 0 0 1 -4.82,4.82l-64.27,0l0,25.53c0,12.52 4.09,16.38 15.41,16.38l50.78,0a4.83,4.83 0 0 1 4.82,4.82l0,22.4c0,3.11 -1.45,4.56 -4.82,5.04z"
  }), ' ', React.createElement("path", {
    d: "m1176.398982,310.993315l-38.29,0c-3.13,0 -4.58,-1 -6.26,-3.61l-33.2,-52.71l-30.08,51.55c-1.69,2.89 -3.37,4.82 -6,4.82l-35.64,0c-2.41,0 -3.61,-1.45 -3.61,-3.13a4.47,4.47 0 0 1 0.48,-1.69l52.17,-87l-52.71,-82.61a3.42,3.42 0 0 1 -0.48,-1.45a3.47,3.47 0 0 1 3.61,-3.13l38.77,0c2.65,0 4.58,2.41 6,4.58l30.81,48.65l29.82,-48.65c1.2,-2.17 3.37,-4.58 6,-4.58l35.64,0a3.47,3.47 0 0 1 3.61,3.13a3.42,3.42 0 0 1 -0.48,1.45l-52.45,83.12l54.7,86.49a5.38,5.38 0 0 1 0.72,2.41c0.01,1.4 -1.2,2.36 -3.13,2.36z"
  }), ' ', React.createElement("path", {
    d: "m677.568982,132.533315a3.72,3.72 0 0 0 -3.64,3l-34.96,129.39c-0.48,2.65 -1.2,3.61 -3.37,3.61s-2.89,-1 -3.37,-3.61l-35,-129.42a3.72,3.72 0 0 0 -3.64,-3l-34.41,0a3.72,3.72 0 0 0 -3.62,4.56s42.7,148.39 43.17,149.85c5.7,17.68 19.53,26.13 37.13,26.13c16.76,0 31.39,-8.85 37.11,-26.08c0.68,-2 42.43,-149.91 42.43,-149.91a3.72,3.72 0 0 0 -3.62,-4.55l-34.21,0.03z"
  }), ' ', React.createElement("path", {
    d: "m465.558982,2.363315l-374,0c-29,0 -47.57,30.83 -34,56.46l37.41,70.84l-67.82,0a24.94,24.94 0 0 0 -22.06,36.56l120.33,227.75a24.94,24.94 0 0 0 44.08,0l32.68,-61.52l41,77.62c14.43,27.3 53.52,27.35 68,0.08l187.46,-352.76c13.25,-24.95 -4.83,-55.03 -33.08,-55.03zm-168,150.72l-80.83,152.14a16.6,16.6 0 0 1 -29.33,0l-80.05,-151.5a16.6,16.6 0 0 1 14.62,-24.37l161.33,0a16.15,16.15 0 0 1 14.26,23.73z"
  }), ' ');
}

function IconVTEXSymbol(props) {
  return React.createElement(Icon, Object.assign({}, props, {
    viewBox: "0 0 500 460",
    fill: "currentColor",
    fillOpacity: 1
  }), React.createElement("path", {
    d: "M375 106H157.1C140.2 106 129.3 124 137.2 138.9L159 180.2H119.5C111.5 180.2 105 186.7 105 194.7C105 197.1 105.6 199.4 106.7 201.5L176.8 334.2C180.6 341.3 189.4 344 196.4 340.2C199 338.8 201.1 336.7 202.4 334.2L221.4 298.4L245.3 343.6C253.7 359.5 276.5 359.5 284.9 343.6L394.3 138.1C402 123.5 391.4 106 375 106ZM277.1 193.8L230 282.5C227.5 287.2 221.6 289 216.9 286.5C215.2 285.6 213.8 284.2 212.9 282.5L166.3 194.2C163.8 189.5 165.6 183.6 170.3 181.1C171.7 180.4 173.2 180 174.8 180H268.8C274 180 278.2 184.2 278.2 189.4C278.2 190.9 277.8 192.5 277.1 193.8Z",
    fill: "#F71963",
    fillOpacity: 1
  }));
}

var directions = {
  up: 0,
  right: 90,
  down: 180,
  left: 270
};
function IconCaret(props) {
  var _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'up' : _props$direction,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? 0 : _props$duration,
      _props$sx = props.sx,
      sx = _props$sx === void 0 ? {} : _props$sx,
      iconProps = _objectWithoutPropertiesLoose(props, ["direction", "duration", "sx"]);

  var rotationDeg = directions[direction];
  return React.createElement(Icon, Object.assign({}, iconProps, {
    sx: _extends({}, sx, {
      transform: "rotate(" + rotationDeg + "deg)",
      transition: "all " + duration + "s"
    })
  }), React.createElement("path", {
    d: "M16 14L12 10L8 14",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

var IconExit = function IconExit(props) {
  return React.createElement(Icon, Object.assign({}, props, {
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    d: "M6 6L18 18",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), React.createElement("path", {
    d: "M18 6L6 18",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var IconHamburger = function IconHamburger(props) {
  return React.createElement(Icon, Object.assign({}, props, {
    viewBox: "0 0 24 24"
  }), React.createElement("rect", {
    y: "4",
    width: "24",
    height: "3",
    rx: "1.5",
    fill: "#E31C58"
  }), React.createElement("rect", {
    y: "10",
    width: "24",
    height: "3",
    rx: "1.5",
    fill: "#E31C58"
  }), React.createElement("rect", {
    y: "16",
    width: "24",
    height: "3",
    rx: "1.5",
    fill: "#E31C58"
  }));
};

var IconVTEXExpanded = function IconVTEXExpanded(props) {
  return React.createElement(Icon, Object.assign({}, props, {
    viewBox: "0 0 1181 433",
    fill: "#F71963",
    fillOpacity: 1
  }), ' ', React.createElement("path", {
    d: "m465.558982,2.363315l-374,0c-29,0 -47.57,30.83 -34,56.46l37.41,70.84l-67.82,0a24.94,24.94 0 0 0 -22.06,36.56l120.33,227.75a24.94,24.94 0 0 0 44.08,0l32.68,-61.52l41,77.62c14.43,27.3 53.52,27.35 68,0.08l187.46,-352.76c13.25,-24.95 -4.83,-55.03 -33.08,-55.03zm-168,150.72l-80.83,152.14a16.6,16.6 0 0 1 -29.33,0l-80.05,-151.5a16.6,16.6 0 0 1 14.62,-24.37l161.33,0a16.15,16.15 0 0 1 14.26,23.73z"
  }), ' ', React.createElement("path", {
    d: "m863.358982,166.013315l-40.91,0l0,140.21a4.83,4.83 0 0 1 -4.82,4.82l-31.55,0a4.83,4.83 0 0 1 -4.82,-4.82l0,-140.21l-41.15,0a4.63,4.63 0 0 1 -4.82,-4.58l0,-24.8a4.63,4.63 0 0 1 4.82,-4.58l123.24,0a4.84,4.84 0 0 1 5.06,4.58l0,24.81a4.84,4.84 0 0 1 -5.05,4.57z"
  }), ' ', React.createElement("path", {
    d: "m994.688982,310.033315c-8.43,1.2 -22.61,3.13 -48.62,3.13c-31.07,0 -58.52,-7.95 -58.52,-51.78l0,-80c0,-43.83 27.7,-51.54 58.76,-51.54c26,0 39.95,1.93 48.38,3.13c3.37,0.48 4.82,1.69 4.82,4.82l0,22.43a4.83,4.83 0 0 1 -4.82,4.82l-50.78,0c-11.32,0 -15.41,3.85 -15.41,16.38l0,21.92l64.27,0a4.83,4.83 0 0 1 4.82,4.82l0,22.88a4.83,4.83 0 0 1 -4.82,4.82l-64.27,0l0,25.53c0,12.52 4.09,16.38 15.41,16.38l50.78,0a4.83,4.83 0 0 1 4.82,4.82l0,22.4c0,3.11 -1.45,4.56 -4.82,5.04z"
  }), ' ', React.createElement("path", {
    d: "m1176.398982,310.993315l-38.29,0c-3.13,0 -4.58,-1 -6.26,-3.61l-33.2,-52.71l-30.08,51.55c-1.69,2.89 -3.37,4.82 -6,4.82l-35.64,0c-2.41,0 -3.61,-1.45 -3.61,-3.13a4.47,4.47 0 0 1 0.48,-1.69l52.17,-87l-52.71,-82.61a3.42,3.42 0 0 1 -0.48,-1.45a3.47,3.47 0 0 1 3.61,-3.13l38.77,0c2.65,0 4.58,2.41 6,4.58l30.81,48.65l29.82,-48.65c1.2,-2.17 3.37,-4.58 6,-4.58l35.64,0a3.47,3.47 0 0 1 3.61,3.13a3.42,3.42 0 0 1 -0.48,1.45l-52.45,83.12l54.7,86.49a5.38,5.38 0 0 1 0.72,2.41c0.01,1.4 -1.2,2.36 -3.13,2.36z"
  }), ' ', React.createElement("path", {
    d: "m677.568982,132.533315a3.72,3.72 0 0 0 -3.64,3l-34.96,129.39c-0.48,2.65 -1.2,3.61 -3.37,3.61s-2.89,-1 -3.37,-3.61l-35,-129.42a3.72,3.72 0 0 0 -3.64,-3l-34.41,0a3.72,3.72 0 0 0 -3.62,4.56s42.7,148.39 43.17,149.85c5.7,17.68 19.53,26.13 37.13,26.13c16.76,0 31.39,-8.85 37.11,-26.08c0.68,-2 42.43,-149.91 42.43,-149.91a3.72,3.72 0 0 0 -3.62,-4.55l-34.21,0.03z"
  }), ' ', React.createElement("path", {
    d: "m465.558982,2.363315l-374,0c-29,0 -47.57,30.83 -34,56.46l37.41,70.84l-67.82,0a24.94,24.94 0 0 0 -22.06,36.56l120.33,227.75a24.94,24.94 0 0 0 44.08,0l32.68,-61.52l41,77.62c14.43,27.3 53.52,27.35 68,0.08l187.46,-352.76c13.25,-24.95 -4.83,-55.03 -33.08,-55.03zm-168,150.72l-80.83,152.14a16.6,16.6 0 0 1 -29.33,0l-80.05,-151.5a16.6,16.6 0 0 1 14.62,-24.37l161.33,0a16.15,16.15 0 0 1 14.26,23.73z"
  }), ' ');
};

var IconExternalLink = function IconExternalLink(props) {
  return React.createElement(Icon, Object.assign({}, props, {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), React.createElement("path", {
    d: "M12 12L21 3V10V3H14",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), React.createElement("path", {
    d: "M9 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V15",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var IconMail = function IconMail(props) {
  return React.createElement(Icon, Object.assign({}, props), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.636 5.045H19.363C20.267 5.045 21 5.778 21 6.682V17.318C21 18.222 20.267 18.954 19.364 18.954H4.636C3.733 18.955 3 18.222 3 17.318V6.682C3 5.778 3.733 5.045 4.636 5.045Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), React.createElement("path", {
    d: "M3.11914 6.075L10.8131 11.578C11.5081 12.075 12.4421 12.076 13.1381 11.58L20.8761 6.061",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var IconHelp = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(Icon, Object.assign({}, props, {
    ref: ref
  }), React.createElement("path", {
    d: "M12.0002 13.2033V12.9633C12.0002 12.1763 12.4862 11.7503 12.9742 11.4233C13.4502 11.1033 13.9272 10.6853 13.9272 9.91428C13.9272 8.85028 13.0652 7.98828 12.0012 7.98828C10.9372 7.98828 10.0742 8.84828 10.0742 9.91228",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), React.createElement("path", {
    d: "M11.999 15.9198C11.903 15.9198 11.825 15.9977 11.826 16.0938C11.826 16.1898 11.904 16.2678 12 16.2678C12.096 16.2678 12.174 16.1898 12.174 16.0938C12.174 15.9967 12.096 15.9198 11.999 15.9198",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "8.75",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }));
});

var IconGlobe = function IconGlobe(props) {
  return React.createElement(Icon, Object.assign({}, props, {
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    d: "M12 3C16.982 3 21 7.018 21 12C21 16.982 16.982 21 12 21",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), React.createElement("path", {
    d: "M12 21C7.018 21 3 16.982 3 12C3 7.018 7.018 3 12 3",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.1685 4.05999C7.27848 8.88499 7.27848 15.116 10.1685 19.941C11.0145 21.354 12.9875 21.354 13.8335 19.941C16.7235 15.116 16.7235 8.88499 13.8335 4.05999C12.9865 2.64699 11.0145 2.64699 10.1685 4.05999Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), React.createElement("path", {
    d: "M3 12H21",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var ICON_SIZE = 20;
var socialMediaLinks = [{
  name: 'Facebook',
  to: 'https://www.facebook.com/vtexcommerce',
  icon: /*#__PURE__*/React.createElement(IconFacebook, {
    size: ICON_SIZE
  })
}, {
  name: 'Instagram',
  to: 'https://www.instagram.com/vtexcommerce/',
  icon: /*#__PURE__*/React.createElement(IconInstagram, {
    size: ICON_SIZE
  })
}, {
  name: 'YouTube',
  to: 'https://www.youtube.com/user/VTEXTV/',
  icon: /*#__PURE__*/React.createElement(IconYouTube, {
    size: ICON_SIZE
  })
}, {
  name: 'LinkedIn',
  to: 'https://www.linkedin.com/company/vtex/',
  icon: /*#__PURE__*/React.createElement(IconLinkedIn, {
    size: ICON_SIZE
  })
}];

var LinkGroups = function LinkGroups(_ref) {
  var children = _ref.children;
  return React.createElement(Flex, {
    sx: {
      maxWidth: '70rem',
      margin: '0 auto',
      paddingTop: [7, 7, 7, 9],
      paddingX: [4, 5, 5],
      paddingBottom: 7,
      flexDirection: ['column', 'column', 'column', 'row'],
      justifyContent: 'space-between',
      alignItems: 'start'
    }
  }, React.createElement("img", {
    src: "https://vtex.com/wp-content/themes/VTEXTheme/assets/imgs/base/logo-vtex.svg",
    alt: "VTEX - Accelerate Commerce Transformation",
    title: "VTEX - Accelerate Commerce Transformation"
  }), React.createElement(Flex, {
    sx: {
      flexDirection: ['column', 'row'],
      marginTop: [6, 6, 6, 0],
      justifyContent: 'space-between',
      width: ['100%', '100%', '100%', 'auto']
    }
  }, children));
};

var Group = function Group(_ref2) {
  var title = _ref2.title,
      children = _ref2.children;
  return React.createElement(Box, {
    sx: {
      marginRight: [0, 0, 0, 7],
      marginBottom: [2, 3]
    }
  }, React.createElement(Text, {
    as: "p",
    sx: {
      color: 'white',
      fontSize: 3,
      lineHeight: 'action',
      fontStyle: 'normal',
      fontWeight: 'normal',
      marginBottom: 4
    }
  }, title), React.createElement(Box, {
    sx: {
      width: '100%',
      display: ['flex', 'block'],
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    }
  }, children));
};

var Link = /*#__PURE__*/forwardRef(function (props, ref) {
  var _props$sx = props.sx,
      sx = _props$sx === void 0 ? {} : _props$sx,
      children = props.children,
      href = props.href,
      restProps = _objectWithoutPropertiesLoose(props, ["sx", "children", "href"]);

  var mergedSx = mergeSx({
    fontSize: 2,
    textDecoration: 'none',
    color: 'muted.2',
    '&:hover': {
      color: 'primary.contrast'
    },
    transition: 'all 0.3s'
  }, sx);
  return React.createElement(Link$1, Object.assign({
    sx: mergedSx,
    href: href,
    ref: ref
  }, restProps), children);
});

var SocialMedia = function SocialMedia() {
  return React.createElement(Flex, null, socialMediaLinks.map(function (socialMediaLink) {
    return React.createElement(SocialMediaIcon, {
      "aria-label": socialMediaLink.name,
      key: socialMediaLink.to,
      href: socialMediaLink.to,
      icon: socialMediaLink.icon
    });
  }));
};

var SocialMediaIcon = /*#__PURE__*/forwardRef(function (props, ref) {
  var ariaLabel = props['aria-label'],
      icon = props.icon,
      href = props.href,
      restProps = _objectWithoutPropertiesLoose(props, ["aria-label", "icon", "href"]);

  return React.createElement(Link$1, Object.assign({
    "aria-label": ariaLabel,
    sx: {
      width: '2.5rem',
      height: '2.5rem',
      marginRight: 4,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      padding: '0.6rem',
      borderRadius: '100%',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease-in-out',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        color: 'primary.contrast',
        border: '1px solid transparent'
      },
      color: 'muted.2',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    href: href,
    ref: ref
  }, restProps), icon);
});

var Extra = function Extra(_ref3) {
  var children = _ref3.children;
  return React.createElement(Box, {
    sx: {
      borderTop: '1px solid rgba(255, 255, 255, 0.06)'
    }
  }, React.createElement(Flex, {
    sx: {
      maxWidth: '70rem',
      margin: '0 auto',
      flexDirection: ['column', 'column', 'row'],
      justifyContent: 'space-between',
      alignItems: ['start', 'start', 'center'],
      paddingY: 6,
      paddingX: 5
    }
  }, children));
};

var ExtraLinks = function ExtraLinks(_ref4) {
  var children = _ref4.children;
  return React.createElement(Flex, {
    sx: {
      marginTop: [6, 6, 0]
    }
  }, children);
};

var Footer = function Footer(_ref5) {
  var children = _ref5.children;
  return React.createElement(Box, {
    as: "footer",
    sx: {
      width: '100%',
      bg: 'secondary.base',
      color: 'background'
    }
  }, children);
};
Footer.LinkGroups = LinkGroups;
Footer.Link = Link;
Footer.Group = Group;
Footer.Extra = Extra;
Footer.SocialMedia = SocialMedia;
Footer.ExtraLinks = ExtraLinks;

var FooterLanding = function FooterLanding(_ref) {
  var children = _ref.children;
  return React.createElement(Box, {
    as: "footer",
    sx: {
      width: '100%',
      bg: 'secondary.base',
      color: 'background',
      paddingX: 6
    }
  }, React.createElement(Flex, {
    sx: {
      maxWidth: '70rem',
      margin: '0 auto',
      paddingY: 7,
      flexDirection: ['column', 'column', 'row'],
      justifyContent: 'space-between',
      alignItems: ['start', 'start', 'center']
    }
  }, React.createElement(Flex, {
    sx: {
      color: 'white',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, React.createElement(IconVTEX, {
    size: 80
  })), React.createElement(Box, {
    sx: {
      display: ['grid', 'grid', 'flex'],
      gridTemplateColumns: 'repeat(2, 1fr)',
      alignItems: 'center',
      columnGap: 4,
      width: ['100%', '100%', 'auto'],
      marginTop: [6, 6, 0],
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      lineHeight: 'action'
    }
  }, children)));
};
FooterLanding.Link = Footer.Link;

var CollapsibleContext = /*#__PURE__*/createContext(null);
function useCollapsibleContext() {
  var context = useContext(CollapsibleContext);
  !context ? process.env.NODE_ENV !== "production" ? invariant(false, "Do not use Collapsible's composites outside of Collapsible context") : invariant(false) : void 0;
  return context;
}
function CollapsibleProvider(_ref) {
  var children = _ref.children,
      restProps = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement(CollapsibleContext.Provider, {
    value: _extends({}, restProps)
  }, children);
}

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n    transition: padding-top 200ms ease-in-out,\n      padding-bottom 200ms ease-in-out,\n      opacity 700ms ease-in-out,\n      transform 700ms ease-in-out;\n    padding-top: 0;\n    padding-bottom: 0;\n    opacity: 0;\n    transform: translate3d(0, 0%, 0);\n  &[data-enter] {\n    padding-top: 20px;\n    padding-bottom: 20px;\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  };\n  }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
/**
 * A Collapsible is a container that allows toggling the display of content. It can be nested as well.
 * @example
 * ```jsx
 * import { Collapsible, useCollapsible } from `@vtex/brand-ui`
 * const props = useCollapsible()
 * <Collapsible {...props}>
 *   <Collapsible.Header label="Title goes here">
 *     {children}
 *   </Collapsible.Header>
 *   <Collapsible.Content>{content}</Collapsible.Content>
 * </Collapsible>
 * ```
 */

function Collapsible(_ref) {
  var _ref$sx = _ref.sx,
      sx = _ref$sx === void 0 ? {} : _ref$sx,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["sx", "children"]);

  return React.createElement(Box, {
    variant: "collapsible",
    sx: sx
  }, React.createElement(CollapsibleProvider, Object.assign({}, props), children));
}

function Header(_ref2) {
  var label = _ref2.label,
      prefix = _ref2.prefix,
      suffix = _ref2.suffix,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? 'regular' : _ref2$size,
      _ref2$arrowPosition = _ref2.arrowPosition,
      arrowPosition = _ref2$arrowPosition === void 0 ? 'right' : _ref2$arrowPosition,
      _ref2$arrowAlign = _ref2.arrowAlign,
      arrowAlign = _ref2$arrowAlign === void 0 ? 'center' : _ref2$arrowAlign,
      _ref2$sx = _ref2.sx,
      sx = _ref2$sx === void 0 ? {} : _ref2$sx;

  var _useCollapsibleContex = useCollapsibleContext(),
      visible = _useCollapsibleContex.visible,
      disclosureProps = _objectWithoutPropertiesLoose(_useCollapsibleContex, ["visible"]);

  var _useFocusHollow = useFocusHollow(),
      focusStyles = _useFocusHollow.focusStyles,
      focusProps = _useFocusHollow.focusProps;

  var baseVariant = 'collapsible.header';
  var headerVariant = baseVariant + "." + size + "-" + arrowPosition;
  var contentVariant = baseVariant + ".content";
  var arrowVariant = baseVariant + ".arrow." + arrowAlign;
  var mergedSx = mergeSx(focusStyles, sx);

  var renderIcon = function renderIcon(icon, variant) {
    if (variant === void 0) {
      variant = '';
    }

    return icon === null || icon === void 0 ? void 0 : icon({
      size: 16,
      sx: {
        variant: variant
      }
    });
  };

  return React.createElement(Disclosure, Object.assign({
    visible: visible
  }, disclosureProps), function (enhancedProps) {
    return React.createElement(Flex, Object.assign({
      as: "button"
    }, enhancedProps, focusProps, {
      variant: headerVariant,
      sx: mergedSx
    }), React.createElement(Flex, {
      sx: {
        alignItems: 'center'
      }
    }, renderIcon(prefix, contentVariant), React.createElement(Text, {
      variant: contentVariant
    }, label), renderIcon(suffix)), React.createElement(IconCaret, {
      duration: 0.3,
      direction: visible ? 'up' : 'down',
      sx: {
        variant: arrowVariant,
        mr: arrowPosition === 'left' ? 2 : 0
      }
    }));
  });
}

var contentAnimation = /*#__PURE__*/css( /*#__PURE__*/_templateObject$1());

function Content(_ref3) {
  var children = _ref3.children,
      _ref3$sx = _ref3.sx,
      sx = _ref3$sx === void 0 ? {} : _ref3$sx,
      state = _ref3.state;
  var behavior = !!children && children.type === Collapsible ? 'stacked' : 'regular';
  var variant = "collapsible.content." + behavior;
  return React.createElement(DisclosureContent, Object.assign({}, state, {
    css: state.animated && contentAnimation
  }), function (enhancedProps) {
    return React.createElement(Box, Object.assign({}, enhancedProps, {
      variant: variant,
      sx: sx
    }), children);
  });
}
/**
 * ```
 * Collapsible.Header is always visible.
 * Disclosure Button -> always on the left side, and is responsible for controlling the content visibility.
 * ```
 */


Collapsible.Header = Header;
/**
 * ```
 * Collapsible content.
 * Can be visible or hidden.
 * ```
 */

Collapsible.Content = Content;

var useAccordion = function useAccordion(_ref) {
  var _initialState$visible, _initialState$disable;

  var collapsibles = _ref.collapsibles,
      initialState = _ref.initialState,
      animated = _ref.animated;

  var _useState = useState((_initialState$visible = initialState === null || initialState === void 0 ? void 0 : initialState.visible) !== null && _initialState$visible !== void 0 ? _initialState$visible : -1),
      currentVisible = _useState[0],
      setVisible = _useState[1];

  var useCollapsibles = Array.from({
    length: collapsibles
  }, function (_) {
    return useDisclosureState({
      animated: animated
    });
  });
  useEffect(function () {
    if (currentVisible > -1) useCollapsibles[currentVisible].show();
  }, [currentVisible]);

  var toggle = function toggle(id) {
    setVisible(function (current) {
      if (current > -1) useCollapsibles[current].hide();
      if (current !== id) useCollapsibles[id].show();
      return current === id ? -1 : id;
    });
  };

  return {
    props: _extends({}, useCollapsibles[0], {
      visible: currentVisible,
      toggle: toggle,
      disabled: (_initialState$disable = initialState === null || initialState === void 0 ? void 0 : initialState.disabled) !== null && _initialState$disable !== void 0 ? _initialState$disable : []
    }),
    states: useCollapsibles
  };
};

function Panel(_ref2) {
  var children = _ref2.children;
  return React.createElement(React.Fragment, null, children);
}
/**
 * Accordion is a special kind of Collapse, which allows only one panel to be expanded at a time.
 * @example
 * ```jsx
 * import { Accordion, useAccordion } from '@vtex/brand-ui'
 * const accordion = useAccordion()
 *
 * <Accordion {...accordion}>
 *   <Accordion.Section>
 *     <Accordion.Section.Header>
 *       Header Section #1
 *     </Accordion.Section.Header>
 *     <Accordion.Section.Content>
 *       Content Section #1
 *     </Accordion.Section.Content>
 *   </Accordion.Section>
 *   <Accordion.Section>
 *     <Accordion.Section.Header>
 *       Header Section #2
 *     </Accordion.Section.Header>
 *     <Accordion.Section.Content>
 *       Content Section #2
 *     </Accordion.Section.Content>
 *   </Accordion.Section>
 * </Accordion>
 * ```
 */


function Accordion(_ref3) {
  var visible = _ref3.visible,
      _toggle = _ref3.toggle,
      _ref3$disabled = _ref3.disabled,
      disabled = _ref3$disabled === void 0 ? [] : _ref3$disabled,
      children = _ref3.children,
      _ref3$sx = _ref3.sx,
      sx = _ref3$sx === void 0 ? {} : _ref3$sx,
      accordionProps = _objectWithoutPropertiesLoose(_ref3, ["visible", "toggle", "disabled", "children", "sx"]);

  var createSection = function createSection(child, key) {
    var style = {
      '& > button': {
        borderBottom: 'solid',
        borderBottomWidth: '1px',
        borderBottomColor: 'muted.2'
      }
    };

    var props = _extends({}, accordionProps, {
      visible: visible === key,
      toggle: function toggle() {
        return _toggle(key);
      },
      disabled: disabled.some(function (id) {
        return id === key;
      }),
      baseId: "id-" + key,
      sx: mergeSx(sx, style)
    });

    return React.createElement(Collapsible, props, child.props.children);
  };

  var items = Children.map(children, createSection);
  return React.createElement(Box, {
    variant: "accordion"
  }, items);
}

Panel.Header = Collapsible.Header;
Panel.Content = Collapsible.Content;
Accordion.Section = Panel;

var IconArrowRight = function IconArrowRight(props) {
  return React.createElement(Icon, Object.assign({}, props), React.createElement("svg", {
    version: "1.1",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    xmlSpace: "preserve",
    fill: "none"
  }, React.createElement("rect", {
    fill: "url(#pattern0)"
  }), React.createElement("polygon", {
    fill: '#142032',
    points: "9.3,1.3 7.9,2.7 12.2,7 0,7 0,9 12.2,9 7.9,13.3 9.3,14.7 16,8 "
  })));
};

var Image = /*#__PURE__*/forwardRef(function (props, ref) {
  return React.createElement(Image$1, Object.assign({}, props, {
    ref: ref
  }));
});

var Header$1 = function Header(props) {
  return React.createElement(Flex, {
    variant: "card.noMedia.header"
  }, props.children);
};

var Title = function Title(props) {
  return React.createElement(Flex, Object.assign({}, props, {
    variant: "card.noMedia.header.title"
  }), props.children, props.icon && React.createElement(IconArrowRight, {
    size: 20
  }));
};

var Subtitle = function Subtitle(props) {
  return React.createElement(Box, Object.assign({}, props, {
    variant: "card.noMedia.header.subtitle"
  }));
};

var Body = function Body(props) {
  return React.createElement(Box, Object.assign({}, props, {
    variant: "card.noMedia.body"
  }));
};

var Footer$1 = function Footer(props) {
  return React.createElement(Flex, Object.assign({}, props, {
    variant: "card.noMedia.footer"
  }));
};

var Card = function Card(_ref) {
  var _ref$el = _ref.el,
      el = _ref$el === void 0 ? 'div' : _ref$el,
      _ref$sx = _ref.sx,
      sx = _ref$sx === void 0 ? {} : _ref$sx,
      _ref$orientation = _ref.orientation,
      orientation = _ref$orientation === void 0 ? 'vertical' : _ref$orientation,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'regular' : _ref$size,
      src = _ref.src,
      alt = _ref.alt,
      props = _objectWithoutPropertiesLoose(_ref, ["el", "sx", "orientation", "size", "src", "alt"]);

  return React.createElement(Flex, Object.assign({}, props, {
    variant: "card." + (orientation || size),
    as: el,
    sx: sx
  }), src && React.createElement(Flex, {
    variant: "card.media." + orientation
  }, React.createElement("img", {
    height: "100%",
    width: "100%",
    src: src,
    alt: alt
  })), React.createElement(Flex, {
    variant: "card.noMedia"
  }, props.children));
};
Card.Header = Header$1;
Header$1.Title = Title;
Header$1.Subtitle = Subtitle;
Card.Footer = Footer$1;
Card.Body = Body;
Card.Image = Image;

var BrandCheckbox = function BrandCheckbox(_ref, ref) {
  var label = _ref.label,
      disabled = _ref.disabled,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      sx = _ref.sx,
      restProps = _objectWithoutPropertiesLoose(_ref, ["label", "disabled", "error", "errorMessage", "sx"]);

  return jsx(Box, {
    variant: "checkbox.container",
    sx: sx
  }, jsx(Label, {
    variant: "checkbox.label" + (disabled ? '.disabled' : '')
  }, jsx(Checkbox$1, Object.assign({
    disabled: disabled,
    ref: ref,
    sx: {
      variant: "checkbox" + (error ? '.error' : '')
    }
  }, restProps)), label), error && errorMessage && jsx(Text, {
    variant: "checkbox.errorMessage"
  }, errorMessage));
};

var Checkbox = /*#__PURE__*/forwardRef(BrandCheckbox);

var HamburgerMenu = function HamburgerMenu(_ref) {
  var children = _ref.children,
      sx = _ref.sx;
  var disclosure = useDisclosureState$1({
    visible: false
  });
  return jsx(Fragment, null, jsx(Disclosure, Object.assign({}, disclosure, {
    role: "presentation",
    sx: {
      variant: 'hamburgerMenu'
    }
  }), disclosure.visible ? jsx(Box, {
    sx: {
      color: 'secondary.base'
    }
  }, jsx(IconExit, {
    size: 24
  })) : jsx(IconHamburger, {
    size: 24
  })), jsx(DisclosureContent$1, Object.assign({}, disclosure, {
    sx: _extends({
      variant: 'hamburgerMenu.open'
    }, sx)
  }), children));
};

var Menu = function Menu(_ref2) {
  var children = _ref2.children,
      sx = _ref2.sx;
  return jsx(Box, {
    variant: "hamburgerMenu.menu",
    sx: sx
  }, children);
};

var Links = function Links(_ref3) {
  var title = _ref3.title,
      to = _ref3.to,
      sx = _ref3.sx,
      _ref3$active = _ref3.active,
      active = _ref3$active === void 0 ? false : _ref3$active;
  var variant = "hamburgerMenu." + (active ? 'activeLink' : 'links');
  return jsx(Link$1, {
    href: to,
    variant: variant,
    sx: sx
  }, title);
};

var ActionButton = function ActionButton(_ref4) {
  var children = _ref4.children,
      sx = _ref4.sx;
  return jsx(Box, {
    variant: "hamburgerMenu.actionButton",
    sx: sx
  }, children);
};

HamburgerMenu.Menu = Menu;
Menu.Links = Links;
HamburgerMenu.ActionButton = ActionButton;

/* eslint-disable react/jsx-handler-names */

var Option = function Option(_ref) {
  var screen = _ref.screen,
      option = _ref.option,
      onClick = _ref.onClick,
      active = _ref.active;
  var variant = "localeSwitcher." + screen + ".option";
  return jsx(Box, {
    variant: "" + variant + (active ? '.active' : ''),
    role: "presentation",
    onClick: onClick
  }, option.label);
};

var LocaleSwitcher = function LocaleSwitcher(_ref2) {
  var options = _ref2.options,
      onChange = _ref2.onChange,
      locale = _ref2.locale;
  var disclosure = useDisclosureState$1({
    visible: false
  });
  var wrapperRef = useRef(null);

  var getLocaleLabel = function getLocaleLabel() {
    var _currentLocaleOption$;

    var currentLocaleOption = options.find(function (option) {
      return option.value === locale;
    });
    return (_currentLocaleOption$ = currentLocaleOption === null || currentLocaleOption === void 0 ? void 0 : currentLocaleOption.label) !== null && _currentLocaleOption$ !== void 0 ? _currentLocaleOption$ : '';
  };

  var handleOptionClick = function handleOptionClick(option) {
    onChange(option.value);
    disclosure.hide();
  };

  useEffect(function () {
    var handleOutsideClick = function handleOutsideClick(event) {
      var _wrapperRef$current;

      if (!(wrapperRef !== null && wrapperRef !== void 0 && (_wrapperRef$current = wrapperRef.current) !== null && _wrapperRef$current !== void 0 && _wrapperRef$current.contains(event.target))) {
        disclosure.hide();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return function () {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [wrapperRef]);
  return jsx(Box, {
    ref: wrapperRef,
    sx: {
      display: 'contents'
    }
  }, jsx(Disclosure, Object.assign({
    sx: {
      variant: 'localeSwitcher.large'
    }
  }, disclosure), jsx(IconGlobe, {
    sx: {
      ml: 5
    },
    size: 22
  }), jsx(Text, {
    variant: "localeSwitcher.large.label"
  }, getLocaleLabel()), jsx(IconCaret, {
    sx: {
      position: 'absolute',
      right: 4
    },
    direction: disclosure.visible ? 'up' : 'down',
    size: 30
  })), jsx(Disclosure, Object.assign({}, disclosure, {
    sx: {
      variant: "localeSwitcher.mobile" + (disclosure.visible ? '.open' : '')
    }
  }), jsx(Flex, {
    sx: {
      alignItems: 'center'
    }
  }, jsx(IconGlobe, {
    size: 22
  }), jsx(Text, {
    variant: "localeSwitcher.mobile.label"
  }, getLocaleLabel())), jsx(IconCaret, {
    size: 32,
    direction: disclosure.visible ? 'down' : 'up'
  })), jsx(DisclosureContent$1, Object.assign({}, disclosure, {
    sx: {
      variant: 'localeSwitcher.large.optionContainer'
    }
  }), options.map(function (option) {
    return jsx(Option, {
      key: option.label,
      option: option,
      screen: "large",
      onClick: function onClick() {
        handleOptionClick(option);
      },
      active: option.value === locale
    });
  })), jsx(DisclosureContent$1, Object.assign({}, disclosure, {
    onClick: function onClick() {
      return disclosure.hide();
    },
    sx: {
      variant: 'localeSwitcher.overlay'
    },
    role: "presentation"
  })), jsx(DisclosureContent$1, Object.assign({}, disclosure, {
    sx: {
      variant: 'localeSwitcher.mobile.optionContainer'
    }
  }), options.map(function (option) {
    return jsx(Option, {
      key: option.label,
      option: option,
      screen: "mobile",
      onClick: function onClick() {
        handleOptionClick(option);
      },
      active: option.value === locale
    });
  })));
};

var Header$2 = function Header(_ref) {
  var children = _ref.children,
      sx = _ref.sx;
  return React.createElement(Box, {
    variant: "header",
    sx: sx
  }, children);
};

var Brand = function Brand(_ref2) {
  var _ref2$noMargin = _ref2.noMargin,
      noMargin = _ref2$noMargin === void 0 ? false : _ref2$noMargin,
      _ref2$children = _ref2.children,
      children = _ref2$children === void 0 ? React.createElement(IconVTEXExpanded, {
    size: 35
  }) : _ref2$children;
  var sx = noMargin ? {
    marginX: '0'
  } : {};
  return React.createElement(Link$1, {
    href: "/",
    variant: "header.brand",
    sx: sx
  }, children);
};

var LeftLinks = function LeftLinks(_ref3) {
  var children = _ref3.children,
      sx = _ref3.sx;
  return React.createElement(Box, {
    variant: "header.leftLinks",
    sx: sx
  }, children);
};

var Links$1 = function Links(_ref4) {
  var title = _ref4.title,
      to = _ref4.to,
      sx = _ref4.sx,
      _ref4$active = _ref4.active,
      active = _ref4$active === void 0 ? false : _ref4$active;
  var variant = "header.leftLinks.links." + (active ? 'active' : 'noActive');
  return React.createElement(Link$1, {
    href: to,
    variant: variant,
    sx: sx
  }, title);
};

var RightLinks = function RightLinks(_ref5) {
  var children = _ref5.children,
      sx = _ref5.sx;
  return React.createElement(Box, {
    variant: "header.rightLinks",
    sx: sx
  }, children);
};

var ActionButton$1 = function ActionButton(_ref6) {
  var children = _ref6.children,
      sx = _ref6.sx;
  return React.createElement(Flex, {
    variant: "header.actionButton",
    sx: sx
  }, children);
};

Header$2.LeftLinks = LeftLinks;
LeftLinks.Links = Links$1;
Header$2.RightLinks = RightLinks;
Header$2.Brand = Brand;
Header$2.ActionButton = ActionButton$1;

var resolveInputState = function resolveInputState(_ref) {
  var disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      error = _ref.error,
      lengthError = _ref.lengthError;

  if (disabled) {
    return 'disabled';
  } else if (readOnly) {
    return 'readOnly';
  } else if (error || lengthError) {
    return 'error';
  } else {
    return 'default';
  }
};

var useInputState = function useInputState(_ref2) {
  var disabled = _ref2.disabled,
      readOnly = _ref2.readOnly,
      error = _ref2.error,
      value = _ref2.value,
      charLimit = _ref2.charLimit;

  var _useState = useState(false),
      focused = _useState[0],
      setFocused = _useState[1];

  var _useState2 = useState(value ? value.toString().length : 0),
      charCount = _useState2[0],
      setCharCount = _useState2[1];

  var _useState3 = useState(charCount > 0),
      filled = _useState3[0],
      setFilled = _useState3[1];

  var _useState4 = useState(charLimit ? charCount > charLimit : false),
      lengthError = _useState4[0],
      setLengthError = _useState4[1];

  useEffect(function () {
    var length = value ? value.toString().length : 0;
    setCharCount(length);
    setFilled(length > 0);

    if (charLimit) {
      setLengthError(length > charLimit);
    }
  }, [value]);

  var _useState5 = useState(resolveInputState({
    disabled: disabled,
    readOnly: readOnly,
    error: error
  })),
      state = _useState5[0],
      setState = _useState5[1];

  var transform = !readOnly && focused || filled;
  useEffect(function () {
    setState(resolveInputState({
      disabled: disabled,
      readOnly: readOnly,
      error: error,
      lengthError: lengthError
    }));
  }, [error, disabled, readOnly, lengthError]);
  return {
    state: state,
    charCount: charCount,
    setFocused: setFocused,
    transform: transform
  };
};

var Input = function Input(props) {
  var _props$darkMode = props.darkMode,
      darkMode = _props$darkMode === void 0 ? false : _props$darkMode,
      _props$size = props.size,
      size = _props$size === void 0 ? 'regular' : _props$size,
      label = props.label,
      id = props.id,
      charLimit = props.charLimit,
      helpMessage = props.helpMessage,
      prefix = props.prefix,
      suffix = props.suffix,
      readOnly = props.readOnly,
      disabled = props.disabled,
      error = props.error,
      value = props.value,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      _props$sx = props.sx,
      sx = _props$sx === void 0 ? {} : _props$sx,
      inputProps = _objectWithoutPropertiesLoose(props, ["darkMode", "size", "label", "id", "charLimit", "helpMessage", "prefix", "suffix", "readOnly", "disabled", "error", "value", "type", "sx"]);

  var ref = useRef(null);

  var redirectFocus = function redirectFocus() {
    var _ref$current;

    return (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.focus();
  };

  var _useInputState = useInputState({
    disabled: disabled,
    readOnly: readOnly,
    error: error,
    value: value,
    charLimit: charLimit
  }),
      state = _useInputState.state,
      charCount = _useInputState.charCount,
      setFocused = _useInputState.setFocused,
      transform = _useInputState.transform;

  var labelVariant = "input.label." + size + "-" + (prefix ? 'prefix-' : '') + (transform ? 'translate' : 'default');
  var helpMessageVariant = "input.helpMessage" + (darkMode ? '.dark' : '') + "." + state;
  return React.createElement(Box, {
    variant: "input.container",
    sx: sx,
    onClick: function onClick() {
      return redirectFocus();
    },
    onFocus: function onFocus() {
      return redirectFocus();
    }
  }, React.createElement(Input$1, Object.assign({
    value: value,
    onFocus: function onFocus() {
      return setFocused(true);
    },
    onBlur: function onBlur() {
      return setFocused(false);
    },
    disabled: disabled,
    readOnly: readOnly,
    type: type,
    id: id,
    ref: ref
  }, inputProps), function (enhancedProps) {
    return React.createElement(Flex, {
      variant: "input." + size + "-" + state + (darkMode ? '-dark' : '')
    }, prefix && React.createElement(Flex, {
      variant: "input.prefix"
    }, prefix), React.createElement(Input$2, Object.assign({}, enhancedProps)), React.createElement(Label, {
      htmlFor: id,
      variant: labelVariant
    }, label), suffix && React.createElement(Flex, {
      variant: "input.suffix"
    }, suffix));
  }), React.createElement(Flex, {
    variant: helpMessageVariant
  }, React.createElement(Text, null, helpMessage), charLimit && React.createElement(Text, null, charCount, "/", charLimit)));
};

/**
 * Elementary tooltip component that can be reused by all VTEX Styleguides.
 * You can use reakit full features (except the 'as' prop) and theme-ui's sx.
 * It renders a tooltip element by default.
 * This is a styled base component, so any system can theme it.
 * To customize this component, you just need to add the `tooltip` variant
 * in your theme.
 * @example
 * ```jsx
 * import { Tooltip } from tooltip
 *
 * const theme = {
 *    tooltip: { ... }
 * }
 *
 * <Tooltip label="Tooltip text here"><button>Children</button></Tooltip>
 * ```
 */

function Tooltip(props) {
  var _props$sx = props.sx,
      sx = _props$sx === void 0 ? {} : _props$sx,
      children = props.children,
      label = props.label,
      arrow = props.arrow,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'top' : _props$placement,
      visible = props.visible,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'tooltip' : _props$variant,
      tooltipProps = _objectWithoutPropertiesLoose(props, ["sx", "children", "label", "arrow", "placement", "visible", "variant"]);

  var tooltip = useTooltipState({
    placement: placement,
    visible: visible
  });
  return React.createElement(React.Fragment, null, React.createElement(TooltipReference, Object.assign({}, tooltip, children.props, {
    ref: children.ref
  }), function (referenceProps) {
    return cloneElement(children, _extends({}, referenceProps));
  }), React.createElement(Tooltip$2, Object.assign({}, tooltip, tooltipProps), arrow && cloneElement(arrow, _extends({}, tooltip)), React.createElement(Box, {
    variant: variant,
    sx: sx
  }, label)));
}

var Tooltip$1 = function Tooltip$1(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement(Tooltip, Object.assign({}, props), children);
};

/**
 * Elementary popover component that can be reused by all VTEX Styleguides.
 * You can use reakit full features (except the 'as' prop) and theme-ui's sx.
 * It renders a popover element by default.
 *
 * This is a styled base component, so any system can theme it.
 * To customize this component, you just need to add the `popover` variant
 * in your theme.
 * @example
 * ```jsx
 * import { Popover, usePopoverState } from './BasePopover'

 * function UseCase({ placement, visible }) {
 *   const popover = usePopoverState({ placement, visible })
 *
 *   return (
 *     <Popover
 *       {...popover}
 *       disclosure={<button>Open popover</button>}
 *     >
 *       <p>This is a Popover</p>
 *     </Popover>
 *   )
 * }
 * ```
 */

function Popover(props) {
  var _props$sx = props.sx,
      sx = _props$sx === void 0 ? {} : _props$sx,
      disclosure = props.disclosure,
      children = props.children,
      arrow = props.arrow,
      popoverProps = _objectWithoutPropertiesLoose(props, ["sx", "disclosure", "children", "arrow"]);

  return React.createElement(React.Fragment, null, React.createElement(PopoverDisclosure, Object.assign({}, popoverProps, {
    ref: disclosure === null || disclosure === void 0 ? void 0 : disclosure.ref
  }), function (referenceProps) {
    return cloneElement(disclosure, _extends({}, referenceProps));
  }), React.createElement(Popover$2, Object.assign({}, popoverProps), arrow && cloneElement(arrow, _extends({}, popoverProps)), React.createElement(Box, {
    variant: "popover",
    sx: sx
  }, children)));
}

function IconClose(props) {
  return React.createElement(Icon, Object.assign({}, props), React.createElement("path", {
    d: "M8 8L16 16",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), React.createElement("path", {
    d: "M16 8L8 16",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

var Content$1 = function Content(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement(Box, Object.assign({}, props, {
    variant: "popover.content"
  }), children);
};

var Popover$1 = function Popover$1(_ref2) {
  var children = _ref2.children,
      _ref2$placement = _ref2.placement,
      placement = _ref2$placement === void 0 ? 'top' : _ref2$placement,
      _ref2$visible = _ref2.visible,
      visible = _ref2$visible === void 0 ? false : _ref2$visible,
      _ref2$variant = _ref2.variant,
      variant = _ref2$variant === void 0 ? 'regular' : _ref2$variant,
      showClose = _ref2.showClose,
      _ref2$sx = _ref2.sx,
      sx = _ref2$sx === void 0 ? {} : _ref2$sx,
      _ref2$fixed = _ref2.fixed,
      fixed = _ref2$fixed === void 0 ? false : _ref2$fixed,
      props = _objectWithoutPropertiesLoose(_ref2, ["children", "placement", "visible", "variant", "showClose", "sx", "fixed"]);

  var popover = usePopoverState({
    placement: placement,
    visible: visible,
    gutter: 20,
    unstable_fixed: fixed
  });

  var handleClickClose = function handleClickClose() {
    return popover.hide();
  };

  return React.createElement(Box, {
    sx: {
      zIndex: popover.visible ? 9999 : 0
    }
  }, React.createElement(Popover, Object.assign({}, props, popover, {
    sx: _extends({}, sx, {
      pr: showClose ? 4 : 0
    }),
    unstable_autoFocusOnShow: false,
    arrow: variant === 'regular' ? React.createElement(PopoverArrow, {
      as: Box,
      size: 25,
      variant: "popover.arrow." + popover.placement,
      placement: popover.placement
    }) : undefined
  }), children, showClose && React.createElement(Box, {
    variant: "popover.close"
  }, React.createElement(Button$1, {
    size: "small",
    variant: "tertiary",
    icon: function icon() {
      return React.createElement(IconClose, {
        size: 30
      });
    },
    onClick: handleClickClose
  }))));
};
Popover$1.Content = Content$1;

/**
 *
 * Hellobar is a section where you can present a specific message to your visitors,
 * without distracting them from your regular content.
 * @example
 * ```jsx
 * import { HelloBar } from `@vtex/brand-ui`
 * <HelloBar>Message</HelloBar>
 * ```
 */

var HelloBar = function HelloBar(_ref) {
  var icon = _ref.icon,
      _ref$closeIcon = _ref.closeIcon,
      closeIcon = _ref$closeIcon === void 0 ? false : _ref$closeIcon,
      onClose = _ref.onClose,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
      _ref$action = _ref.action,
      label = _ref$action.label,
      onClick = _ref$action.onClick,
      _ref$sx = _ref.sx,
      sx = _ref$sx === void 0 ? {} : _ref$sx,
      children = _ref.children;
  var buttonVariant = variant === 'secondary' ? 'primary' : 'tertiary';
  var paletteVariant = "helloBar." + variant;
  var iconCloseVariant = variant === 'secondary' ? 'iconCloseSecundary' : 'iconClose';
  var iconCloseStyle = {
    sx: {
      variant: "helloBar." + iconCloseVariant
    }
  };
  var state = useDialogState({
    modal: false,
    visible: true
  });

  var handleClose = function handleClose(e) {
    e.stopPropagation();
    state.hide();
    if (onClose) onClose();
  };

  return React.createElement(Dialog, Object.assign({}, state, {
    hideOnClickOutside: false
  }), React.createElement(Box, {
    sx: sx,
    variant: paletteVariant,
    onClick: onClick
  }, React.createElement(Flex, {
    variant: "helloBar.container"
  }, React.createElement(Flex, {
    variant: "helloBar.content"
  }, icon === null || icon === void 0 ? void 0 : icon({
    size: 24,
    sx: {
      variant: 'helloBar.icon'
    }
  }), React.createElement(Text, null, children)), React.createElement(Flex, {
    variant: "helloBar.contentButtons"
  }, React.createElement(Button$1, {
    sx: {
      display: ['none', 'none', 'block']
    },
    variant: buttonVariant,
    size: "small"
  }, label), closeIcon && React.createElement(Button$1, {
    sx: {
      display: ['none', 'none', 'block']
    },
    variant: "tertiary",
    size: "small",
    onClick: function onClick(e) {
      handleClose(e);
    },
    icon: function icon() {
      return React.createElement(IconClose, Object.assign({}, iconCloseStyle));
    }
  })), React.createElement(Box, {
    variant: "helloBar.actionIcon"
  }, React.createElement(IconCaret, {
    direction: "right"
  })))));
};

/**
 * The timeline displays a list of events in chronological order.
 * @example
 * ```jsx
 * import { Timeline } from `@vtex/brand-ui`
 * const Example = () => (
 *  <Timeline>
 *    <Timeline.Event title="Event 1" />
 *    <Timeline.Event title="Event 2" />
 *  </Timeline>
 * )
 * ```
 */

function Timeline(props) {
  return React.createElement(Box, Object.assign({}, props, {
    variant: "timeline"
  }));
}
/**
 * The default icon setted for all events
 */

var Circle = function Circle() {
  return React.createElement(Box, {
    variant: "timeline.event.icon.default"
  }, React.createElement(Box, null));
};

function Event(_ref) {
  var children = _ref.children,
      title = _ref.title,
      subtitle = _ref.subtitle,
      icon = _ref.icon,
      sx = _ref.sx;
  return React.createElement(Flex, {
    sx: sx
  }, React.createElement(Box, {
    variant: "timeline.event.icon"
  }, icon !== null && icon !== void 0 ? icon : React.createElement(Circle, null), React.createElement(Box, {
    variant: "timeline.event.line"
  })), React.createElement(Box, {
    variant: "timeline.event"
  }, React.createElement(Box, {
    variant: "timeline.event.title"
  }, title), subtitle && React.createElement(Box, {
    variant: "timeline.event.subtitle"
  }, subtitle), children && React.createElement(Box, {
    variant: "timeline.event.content"
  }, children)));
}
/**
 * Timeline's event
 */

Timeline.Event = Event;

var getFirstDayOfMonth = function getFirstDayOfMonth(date) {
  return date.startOf('month');
};
var getLastDayOfMonth = function getLastDayOfMonth(date) {
  return date.endOf('month');
};
/**
 * Get all the days in a week. Since luxon weekdays start with Monday and
 * end with Sunday, this method does a workaround for starting with Sunday.
 *
 * @returns array with weekdays initials
 */

var getWeekDays = function getWeekDays(locale) {
  var weekdays = Info.weekdays('narrow', {
    locale: locale
  });

  var _weekdays$slice = weekdays.slice(-1),
      lastWeekday = _weekdays$slice[0];

  var restWeekdays = weekdays.slice(0, 6);
  return [lastWeekday].concat(restWeekdays);
};
var getInitialCells = function getInitialCells(date) {
  var initialCells = [];
  var firstDay = getFirstDayOfMonth(date);
  var firstDayWeekday = firstDay.weekday % 7;

  for (var i = 0; i < firstDayWeekday; i++) {
    var cell = firstDay.minus({
      days: firstDayWeekday - i
    });
    initialCells.push(cell);
  }

  return initialCells;
};
var getMonthCells = function getMonthCells(date) {
  var monthCells = [];
  var firstDay = getFirstDayOfMonth(date);

  for (var i = 0; i < date.daysInMonth; i++) {
    var cell = firstDay.plus({
      days: i
    });
    monthCells.push(cell);
  }

  return monthCells;
};
var getFinalCells = function getFinalCells(date) {
  var finalCells = [];
  var lastDay = getLastDayOfMonth(date);
  var lastDayWeekday = lastDay.weekday % 7;

  for (var i = 6; i > lastDayWeekday; i--) {
    var cell = lastDay.plus({
      days: i - lastDayWeekday
    });
    finalCells.push(cell);
  }

  return finalCells.reverse();
};

var today = /*#__PURE__*/DateTime.local();

var EventTag = function EventTag(_ref) {
  var event = _ref.event;
  var defaultColor = 'muted.1';
  var firstColor = defaultColor;
  var secondColor = defaultColor;

  if (event.colors) {
    var _event$colors$, _event$colors$2;

    firstColor = (_event$colors$ = event.colors[0]) !== null && _event$colors$ !== void 0 ? _event$colors$ : defaultColor;
    secondColor = (_event$colors$2 = event.colors[1]) !== null && _event$colors$2 !== void 0 ? _event$colors$2 : firstColor;
  }

  return jsx(Box, {
    variant: "calendar.eventContainer"
  }, jsx(Box, {
    variant: "calendar.event.leftEv",
    sx: {
      bg: firstColor
    }
  }), jsx(Box, {
    sx: {
      width: 2
    }
  }), jsx(Box, {
    variant: "calendar.event.rightEv",
    sx: {
      bg: secondColor
    }
  }));
};

var Day = function Day(_ref2) {
  var value = _ref2.value,
      variant = _ref2.variant,
      _onClick = _ref2.onClick,
      selectedDate = _ref2.selectedDate,
      _ref2$events = _ref2.events,
      events = _ref2$events === void 0 ? {} : _ref2$events,
      restProps = _objectWithoutPropertiesLoose(_ref2, ["value", "variant", "onClick", "selectedDate", "events"]);

  var dateString = value.toFormat('yyyy-MM-dd');
  var event = events[dateString];
  var RenderComponent = event === null || event === void 0 ? void 0 : event.component;

  if (RenderComponent) {
    return jsx(RenderComponent, Object.assign({
      value: value,
      variant: variant,
      onClick: _onClick,
      selectedDate: selectedDate,
      events: events
    }, restProps), jsx(Text, null, value.day), jsx(EventTag, {
      event: event
    }));
  }

  return jsx(Button$2, Object.assign({
    sx: {
      variant: "" + variant
    },
    onClick: function onClick() {
      return _onClick(value);
    }
  }, restProps), jsx(Text, null, value.day), event && jsx(EventTag, {
    event: event
  }));
};

var Calendar = function Calendar(_ref3) {
  var _ref3$day = _ref3.day,
      day = _ref3$day === void 0 ? today.day : _ref3$day,
      _ref3$month = _ref3.month,
      month = _ref3$month === void 0 ? today.month : _ref3$month,
      _ref3$year = _ref3.year,
      year = _ref3$year === void 0 ? today.year : _ref3$year,
      _ref3$disabled = _ref3.disabled,
      disabled = _ref3$disabled === void 0 ? false : _ref3$disabled,
      onChange = _ref3.onChange,
      events = _ref3.events,
      _ref3$locale = _ref3.locale,
      locale = _ref3$locale === void 0 ? 'pt' : _ref3$locale,
      headerAccessory = _ref3.headerAccessory,
      children = _ref3.children,
      _ref3$sx = _ref3.sx,
      sx = _ref3$sx === void 0 ? {} : _ref3$sx;
  var date = DateTime.local(year, month, day).setLocale(locale);

  var _useState = useState(),
      selectedDate = _useState[0],
      setSelectedDate = _useState[1];

  var handleCellClick = function handleCellClick(value) {
    var convertedValue = value.toJSDate();
    setSelectedDate(convertedValue);

    if (onChange) {
      onChange(convertedValue);
    }
  };

  var renderDayCell = function renderDayCell(_ref4) {
    var value = _ref4.value,
        variant = _ref4.variant;
    return jsx(Day, {
      key: value.day + " - " + value.month,
      value: value,
      variant: variant,
      disabled: disabled,
      selectedDate: selectedDate,
      onClick: handleCellClick,
      events: events
    });
  };

  return jsx(Box, {
    variant: "calendar" + (disabled ? '.disabled' : ''),
    sx: sx
  }, jsx(Flex, {
    variant: "calendar.header"
  }, jsx(Text, {
    variant: "calendar.title" + (!headerAccessory ? '.center' : '')
  }, date.toFormat('MMMM yyyy')), headerAccessory), jsx(Grid, {
    variant: "calendar.grid"
  }, getWeekDays(locale).map(function (weekDay, index) {
    return jsx(Box, {
      key: index,
      variant: "calendar.weekdayCell"
    }, weekDay);
  }), getInitialCells(date).map(function (initialCell) {
    var haveIncident = events !== null && events !== void 0 && events[initialCell.toFormat('yyyy-MM-dd')] ? true : false;
    return renderDayCell({
      value: initialCell,
      variant: "calendar.extraCell." + (haveIncident ? 'incident' : 'noIncident')
    });
  }), getMonthCells(date).map(function (monthCell) {
    var isCurrentDay = monthCell.toJSDate().setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0);
    var haveIncident = events !== null && events !== void 0 && events[monthCell.toFormat('yyyy-MM-dd')] ? true : false;
    return renderDayCell({
      value: monthCell,
      variant: "calendar.monthCell" + (haveIncident ? 'Incident' : '') + (isCurrentDay ? '.current' : '')
    });
  }), getFinalCells(date).map(function (finalCell) {
    var haveIncident = events !== null && events !== void 0 && events[finalCell.toFormat('yyyy-MM-dd')] ? true : false;
    return renderDayCell({
      value: finalCell,
      variant: "calendar.extraCell." + (haveIncident ? 'incident' : 'noIncident')
    });
  })), children);
};

var useCarouselState = function useCarouselState(_ref) {
  var totalSlides = _ref.totalSlides,
      slidesPerPage = _ref.slidesPerPage,
      slidesPerScroll = _ref.slidesPerScroll,
      initialSlide = _ref.initialSlide;
  var totalSteps = 1 + Math.ceil((totalSlides - slidesPerPage) / slidesPerScroll);
  var initialStep = Math.max(0, Math.ceil((initialSlide - slidesPerPage + 1) / slidesPerScroll));

  var _useState = useState(initialStep),
      currentStep = _useState[0],
      setCurrentStep = _useState[1];

  var _useState2 = useState(false),
      transition = _useState2[0],
      setTransition = _useState2[1];

  useEffect(function () {
    setCurrentStep(initialStep);
  }, [totalSteps, initialSlide]);

  var handleChangeStep = function handleChangeStep(newStep) {
    setTransition(true);
    setTimeout(function () {
      setCurrentStep(newStep);
      setTimeout(function () {
        setTransition(false);
      }, 250);
    }, 250);
  };

  var handleNext = function handleNext() {
    var nextStep = (currentStep + 1) % totalSteps;
    handleChangeStep(nextStep);
  };

  var handlePrevious = function handlePrevious() {
    var previousStep = (totalSteps + currentStep - 1) % totalSteps;
    handleChangeStep(previousStep);
  };

  var swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious
  });
  return {
    totalSteps: totalSteps,
    currentStep: currentStep,
    transition: transition,
    handleChangeStep: handleChangeStep,
    handleNext: handleNext,
    handlePrevious: handlePrevious,
    swipeHandlers: swipeHandlers
  };
};

var Carousel = function Carousel(_ref) {
  var slides = _ref.children,
      _ref$indicators = _ref.indicators,
      indicators = _ref$indicators === void 0 ? true : _ref$indicators,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'regular' : _ref$size,
      _ref$crossfade = _ref.crossfade,
      crossfade = _ref$crossfade === void 0 ? false : _ref$crossfade,
      _ref$buttonAlign = _ref.buttonAlign,
      buttonAlign = _ref$buttonAlign === void 0 ? 'center' : _ref$buttonAlign,
      _ref$sx = _ref.sx,
      sx = _ref$sx === void 0 ? {} : _ref$sx,
      _ref$loop = _ref.loop,
      loop = _ref$loop === void 0 ? true : _ref$loop,
      _ref$slidesPerPage = _ref.slidesPerPage,
      slidesPerPage = _ref$slidesPerPage === void 0 ? 1 : _ref$slidesPerPage,
      _ref$slidesPerScroll = _ref.slidesPerScroll,
      slidesPerScroll = _ref$slidesPerScroll === void 0 ? slidesPerPage : _ref$slidesPerScroll,
      _ref$overlaySlides = _ref.overlaySlides,
      overlaySlides = _ref$overlaySlides === void 0 ? true : _ref$overlaySlides,
      _ref$initialSlide = _ref.initialSlide,
      initialSlide = _ref$initialSlide === void 0 ? 0 : _ref$initialSlide;

  var _useCarouselState = useCarouselState({
    totalSlides: slides.length,
    slidesPerPage: slidesPerPage,
    slidesPerScroll: slidesPerScroll,
    initialSlide: initialSlide
  }),
      totalSteps = _useCarouselState.totalSteps,
      currentStep = _useCarouselState.currentStep,
      handleChangeStep = _useCarouselState.handleChangeStep,
      handleNext = _useCarouselState.handleNext,
      handlePrevious = _useCarouselState.handlePrevious,
      swipeHandlers = _useCarouselState.swipeHandlers,
      transition = _useCarouselState.transition;

  var stopAtEnd = loop ? false : currentStep + 1 >= totalSteps;
  var stopAtBeginning = loop ? false : currentStep - 1 < 0;
  return React.createElement(Flex, {
    variant: "carousel",
    sx: sx
  }, React.createElement(Flex, null, React.createElement(NavigationContainer, {
    direction: "previous",
    overlaySlides: overlaySlides,
    buttonAlign: buttonAlign,
    handleClick: handlePrevious,
    size: size,
    visible: !stopAtBeginning
  }), React.createElement(SlidesContainer, {
    transition: transition,
    swipeHandlers: swipeHandlers,
    slides: slides,
    currentStep: currentStep,
    crossfade: crossfade,
    slidesPerScroll: slidesPerScroll,
    slidesPerPage: slidesPerPage
  }), React.createElement(NavigationContainer, {
    direction: "next",
    overlaySlides: overlaySlides,
    buttonAlign: buttonAlign,
    handleClick: handleNext,
    size: size,
    visible: !stopAtEnd
  })), indicators && React.createElement(ProgressIndicatorBar, {
    overlaySlides: overlaySlides,
    totalSteps: totalSteps,
    handleChangeStep: handleChangeStep,
    currentStep: currentStep
  }));
};

var NavigationContainer = function NavigationContainer(_ref2) {
  var direction = _ref2.direction,
      overlaySlides = _ref2.overlaySlides,
      buttonAlign = _ref2.buttonAlign,
      handleClick = _ref2.handleClick,
      size = _ref2.size,
      visible = _ref2.visible;
  return React.createElement(Flex, {
    variant: "carousel.navigationContainer." + direction + "-" + (overlaySlides ? 'overlay' : 'default') + "-" + buttonAlign,
    sx: {
      visibility: visible ? 'visible' : 'hidden'
    }
  }, React.createElement(Button$1, {
    onClick: handleClick,
    sx: {
      variant: "carousel." + direction + "." + size
    }
  }, React.createElement(IconCaret, {
    size: size === 'regular' ? 48 : 24,
    direction: direction === 'previous' ? 'left' : 'right'
  }), React.createElement(VisuallyHidden, null, direction, " step")));
};

var SlidesContainer = function SlidesContainer(_ref3) {
  var swipeHandlers = _ref3.swipeHandlers,
      slides = _ref3.slides,
      currentStep = _ref3.currentStep,
      crossfade = _ref3.crossfade,
      slidesPerPage = _ref3.slidesPerPage,
      slidesPerScroll = _ref3.slidesPerScroll,
      transition = _ref3.transition;
  var slideWidth = 100 / slidesPerPage;
  var translateX = Math.min(currentStep * slidesPerScroll, slides.length - slidesPerPage) * slideWidth;
  var variant = crossfade ? transition ? '.crossfade.animated' : '.crossfade.default' : '';
  return React.createElement(Flex, {
    sx: {
      width: '100%',
      overflow: 'hidden'
    }
  }, React.createElement(Flex, Object.assign({}, swipeHandlers, {
    variant: "carousel.slidesContainer" + variant,
    sx: {
      transform: "translateX(-" + translateX + "%)"
    }
  }), slides.map(function (slide, index) {
    return React.createElement(Flex, {
      key: index,
      variant: "carousel.slide",
      sx: {
        width: slideWidth + "%"
      }
    }, slide);
  })));
};

var ProgressIndicatorBar = function ProgressIndicatorBar(_ref4) {
  var totalSteps = _ref4.totalSteps,
      handleChangeStep = _ref4.handleChangeStep,
      currentStep = _ref4.currentStep,
      overlaySlides = _ref4.overlaySlides;
  return React.createElement(Flex, {
    variant: "carousel.indicatorBar." + (overlaySlides ? 'overlay' : 'default')
  }, [].concat(Array(totalSteps).keys()).map(function (step) {
    return React.createElement(ProgressIndicator, {
      key: step,
      step: step,
      handleChangeStep: handleChangeStep,
      active: currentStep === step
    });
  }));
};

var ProgressIndicator = function ProgressIndicator(_ref5) {
  var step = _ref5.step,
      handleChangeStep = _ref5.handleChangeStep,
      active = _ref5.active;
  return React.createElement(Button$1, {
    key: step,
    onClick: function onClick() {
      return handleChangeStep(step);
    },
    sx: {
      variant: "carousel.indicator" + (active ? '.active' : '')
    }
  }, React.createElement(VisuallyHidden, null, "Step ", step));
};

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  transition: opacity 250ms ease-in-out;\n  opacity: 0;\n  &[data-enter] {\n    opacity: 1;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\n  transition: opacity 250ms ease-in-out;\n  opacity: 0;\n  &[data-enter] {\n    opacity: 1;\n  }\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var backdropAnimation = /*#__PURE__*/css( /*#__PURE__*/_templateObject$2());
var surfaceAnimation = /*#__PURE__*/css( /*#__PURE__*/_templateObject2());

var CloseButton = function CloseButton(_ref) {
  var handleClose = _ref.handleClose;
  return jsx(Button$1, {
    icon: function icon() {
      return jsx(IconClose, {
        size: 39
      });
    },
    showFocusOnInit: true,
    sx: {
      position: 'absolute',
      right: '1.25rem',
      top: '1.25rem',
      color: 'secondary.base',
      padding: '0',
      height: 'auto'
    },
    variant: "tertiary",
    onClick: handleClose
  });
};

var Title$1 = function Title(_ref2) {
  var title = _ref2.title,
      handleClose = _ref2.handleClose;
  return jsx(Box, {
    variant: "modal.title"
  }, jsx(CloseButton, {
    handleClose: handleClose
  }), jsx(Text, {
    sx: {
      fontSize: '.875rem'
    }
  }, title));
};

var ModalButton = function ModalButton(props) {
  var children = props.children,
      args = _objectWithoutPropertiesLoose(props, ["children"]);

  return jsx(Button$1, Object.assign({
    sx: {
      marginLeft: '1rem'
    }
  }, args), children);
};

var BottomBar = function BottomBar(_ref3) {
  var children = _ref3.children,
      _ref3$variant = _ref3.variant,
      variant = _ref3$variant === void 0 ? 'modal' : _ref3$variant;
  return jsx(Flex, {
    variant: "modal.bottomBar." + variant
  }, children);
};

var Body$1 = function Body(_ref4) {
  var children = _ref4.children,
      _ref4$variant = _ref4.variant,
      variant = _ref4$variant === void 0 ? 'modal' : _ref4$variant;
  return jsx(Box, {
    variant: "modal.body." + variant
  }, children);
};

var Modal = function Modal(_ref5) {
  var children = _ref5.children,
      _ref5$title = _ref5.title,
      title = _ref5$title === void 0 ? '' : _ref5$title,
      disclosure = _ref5.disclosure,
      state = _ref5.state,
      onClose = _ref5.onClose,
      _ref5$variant = _ref5.variant,
      variant = _ref5$variant === void 0 ? 'modal' : _ref5$variant;

  var handleClose = function handleClose() {
    state.hide();

    if (onClose) {
      onClose();
    }
  };

  return jsx(Fragment, null, jsx(DialogDisclosure, Object.assign({}, state), function (disclosureProps) {
    return cloneElement(disclosure, _extends({}, disclosureProps));
  }), jsx(DialogBackdrop, Object.assign({}, state, {
    css: state.animated && backdropAnimation,
    variant: "modal.backdrop",
    as: Box
  }), jsx(Dialog, Object.assign({}, state, {
    css: state.animated && surfaceAnimation,
    variant: "modal.box." + variant,
    as: Box,
    hideOnClickOutside: false
  }), variant === 'modal' ? jsx(Title$1, {
    title: title,
    handleClose: handleClose
  }) : jsx(Box, {
    variant: "modal.closeBar"
  }, jsx(CloseButton, {
    handleClose: handleClose
  })), children)));
};
Modal.Body = Body$1;
Modal.BottomBar = BottomBar;
Modal.Button = ModalButton;

var ToastContext = /*#__PURE__*/createContext({
  addToast: function addToast() {}
});

/** @jsxRuntime classic */

var Toast = function Toast(_ref) {
  var children = _ref.children,
      actionText = _ref.actionText,
      closeOnAction = _ref.closeOnAction,
      onActionClick = _ref.onActionClick;
  var disclosure = useDisclosureState$1({
    visible: true
  });

  var handleOnActionClick = function handleOnActionClick() {
    if (onActionClick) onActionClick();
    if (closeOnAction) disclosure.hide();
  };

  return jsx(DisclosureContent$1, Object.assign({}, disclosure, {
    sx: {
      variant: 'toast'
    }
  }), children, jsx(Box, {
    variant: "toast.actionContainer",
    sx: {
      mt: [actionText ? 4 : 0, 0]
    }
  }, actionText && jsx(Button$2, {
    sx: {
      my: 0,
      py: 0,
      color: 'white',
      variant: 'toast.action'
    },
    onClick: handleOnActionClick
  }, actionText), jsx(Disclosure, Object.assign({}, disclosure, {
    sx: {
      color: 'white',
      variant: 'toast.dismiss'
    }
  }), jsx(IconExit, {
    size: 20
  }))));
};

var useToast = function useToast(props) {
  var _useContext = useContext(ToastContext),
      addToast = _useContext.addToast;

  var createToast = function createToast(text) {
    addToast(jsx(Toast, Object.assign({}, props), jsx(Text, {
      variant: "toast.text"
    }, text)));
  };

  return {
    createToast: createToast
  };
};

var TOAST_TIMER = 3000;
var ToastProvider = function ToastProvider(_ref) {
  var children = _ref.children;

  var _useState = useState([]),
      toasts = _useState[0],
      setToasts = _useState[1];

  useEffect(function () {
    if (toasts.length > 0) {
      var timer = setTimeout(function () {
        return setToasts(function (staleToasts) {
          return staleToasts.slice(1);
        });
      }, TOAST_TIMER);
      return function () {
        return clearTimeout(timer);
      };
    }

    return function () {};
  }, [toasts]);
  var addToast = useCallback(function (toast) {
    setToasts(function (staleToasts) {
      return [].concat(staleToasts, [toast]);
    });
  }, [setToasts]);
  return React.createElement(ToastContext.Provider, {
    value: {
      addToast: addToast
    }
  }, children, React.createElement(Box, {
    variant: "toast.container"
  }, toasts.map(function (toast, index) {
    return React.createElement(Box, {
      key: "toast--" + index,
      variant: "toast.wrapper"
    }, toast);
  })));
};

var Option$1 = function Option(props) {
  return jsx(Box, Object.assign({
    as: "option",
    sx: {
      variant: 'select.option'
    }
  }, props));
};

var Select = function Select(props) {
  var id = props.id,
      label = props.label,
      _props$readOnly = props.readOnly,
      readOnly = _props$readOnly === void 0 ? false : _props$readOnly,
      children = props.children,
      helpMessage = props.helpMessage,
      _props$size = props.size,
      size = _props$size === void 0 ? 'regular' : _props$size,
      error = props.error,
      value = props.value,
      _props$sx = props.sx,
      sx = _props$sx === void 0 ? {} : _props$sx,
      darkMode = props.darkMode,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      restProps = _objectWithoutPropertiesLoose(props, ["id", "label", "readOnly", "children", "helpMessage", "size", "error", "value", "sx", "darkMode", "disabled"]);

  var ref = useRef(null);

  var redirectFocus = function redirectFocus() {
    var _ref$current;

    return (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.focus();
  };

  var _useInputState = useInputState({
    disabled: disabled,
    readOnly: readOnly,
    error: error,
    value: value
  }),
      state = _useInputState.state,
      setFocused = _useInputState.setFocused,
      transform = _useInputState.transform;

  var labelVariant = "input.label." + size + "-" + (transform && value ? 'translate' : 'default');
  var helpMessageVariant = "input.helpMessage" + (darkMode ? '.dark' : '') + "." + state;
  var isDisabled = disabled || readOnly;
  return jsx(Box, {
    variant: "select.container",
    sx: sx
  }, jsx(Flex, {
    variant: "input." + size + "-" + state + (darkMode ? '-dark' : ''),
    sx: {
      minWidth: ['100%', '100%', '22rem'],
      px: 0
    },
    onFocus: redirectFocus
  }, jsx(Box$1, Object.assign({
    as: "select",
    id: id,
    ref: ref,
    value: value,
    sx: {
      variant: "select" + (isDisabled ? '.disabled' : ''),
      color: darkMode && !readOnly ? 'white' : 'black',
      fontSize: size === 'regular' ? '18px' : '22px',
      pt: size === 'regular' ? 4 : 5
    },
    onFocus: function onFocus() {
      return setFocused(true);
    },
    onBlur: function onBlur() {
      return setFocused(false);
    },
    disabled: isDisabled
  }, restProps), children), jsx(IconCaret, {
    sx: {
      variant: 'select.arrow',
      color: darkMode && !readOnly ? 'white' : 'black'
    },
    size: 30,
    direction: "down"
  }), jsx(Label, {
    htmlFor: id,
    variant: labelVariant,
    sx: {
      pl: 5,
      pt: transform && value ? 3 : 0
    }
  }, label)), jsx(Flex, {
    variant: helpMessageVariant
  }, jsx(Text, null, helpMessage)));
};
Select.Option = Option$1;

function _templateObject$3() {
  var data = _taggedTemplateLiteralLoose(["animation: ", " 1.5s ease-in-out infinite"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var load = /*#__PURE__*/keyframes("\n  0% {\n    background-position: -200px 0;\n  }\n  100% {\n    background-position: calc(200px + 100%) 0;\n  }");
var Skeleton = function Skeleton(props) {
  var _props$sx = props.sx,
      sx = _props$sx === void 0 ? {} : _props$sx,
      _props$el = props.el,
      el = _props$el === void 0 ? 'div' : _props$el,
      _props$shape = props.shape,
      shape = _props$shape === void 0 ? 'rect' : _props$shape;
  return React.createElement(Box, Object.assign({}, props, {
    css: css(_templateObject$3(), load),
    variant: "skeleton." + shape,
    as: el,
    sx: sx
  }));
};

var resolveTextareaState = function resolveTextareaState(_ref) {
  var disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      error = _ref.error,
      lengthError = _ref.lengthError,
      filled = _ref.filled;

  if (disabled) {
    return 'disabled';
  }

  if (readOnly) {
    return 'readOnly';
  }

  if (error || lengthError) {
    return 'error';
  }

  if (filled) {
    return 'filled';
  }

  return 'default';
};

var useTextareaState = function useTextareaState(_ref2) {
  var disabled = _ref2.disabled,
      readOnly = _ref2.readOnly,
      error = _ref2.error,
      value = _ref2.value,
      charLimit = _ref2.charLimit;

  var _useState = useState(false),
      focused = _useState[0],
      setFocused = _useState[1];

  var _useState2 = useState(value ? value.toString().length : 0),
      charCount = _useState2[0],
      setCharCount = _useState2[1];

  var _useState3 = useState(charCount > 0),
      filled = _useState3[0],
      setFilled = _useState3[1];

  var _useState4 = useState(charLimit ? charCount > charLimit : false),
      lengthError = _useState4[0],
      setLengthError = _useState4[1];

  useEffect(function () {
    var length = value ? value.toString().length : 0;
    setCharCount(length);
    setFilled(length > 0);

    if (charLimit) {
      setLengthError(length > charLimit);
    }
  }, [charLimit, value]);

  var _useState5 = useState(resolveTextareaState({
    disabled: disabled,
    readOnly: readOnly,
    error: error,
    filled: filled
  })),
      state = _useState5[0],
      setState = _useState5[1];

  useEffect(function () {
    setState(resolveTextareaState({
      disabled: disabled,
      readOnly: readOnly,
      error: error,
      lengthError: lengthError,
      filled: filled
    }));
  }, [error, disabled, readOnly, lengthError, filled]);
  return {
    state: state,
    charCount: charCount,
    setFocused: setFocused,
    filled: filled,
    focused: focused
  };
};

var Textarea = function Textarea(props) {
  var filled = props.filled,
      _props$darkMode = props.darkMode,
      darkMode = _props$darkMode === void 0 ? false : _props$darkMode,
      label = props.label,
      id = props.id,
      charLimit = props.charLimit,
      helpMessage = props.helpMessage,
      readOnly = props.readOnly,
      disabled = props.disabled,
      error = props.error,
      value = props.value,
      _props$rows = props.rows,
      rows = _props$rows === void 0 ? 7 : _props$rows,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      _props$sx = props.sx,
      sx = _props$sx === void 0 ? {} : _props$sx,
      onChange = props.onChange,
      TextareaProps = _objectWithoutPropertiesLoose(props, ["filled", "darkMode", "label", "id", "charLimit", "helpMessage", "readOnly", "disabled", "error", "value", "rows", "type", "sx", "onChange"]);

  var ref = useRef(null);

  var redirectFocus = function redirectFocus() {
    var _ref$current;

    return (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.focus();
  };

  var _useInputState = useTextareaState({
    disabled: disabled,
    readOnly: readOnly,
    error: error,
    value: value,
    charLimit: charLimit,
    filled: filled
  }),
      state = _useInputState.state,
      charCount = _useInputState.charCount,
      setFocused = _useInputState.setFocused;

  var helpMessageVariant = "textarea.helpMessage" + (darkMode ? '.dark' : '') + "." + state;
  var stateVariant = "textarea." + state + (darkMode ? '-dark' : '');
  var labelVariant = "textarea.floatingLabel" + (darkMode ? '.dark' : '') + "." + state;
  var containerVariant = "textarea.container" + (darkMode ? '.dark' : '') + "." + state;
  return jsx(Box, {
    variant: containerVariant,
    sx: sx
  }, jsx("textarea", Object.assign({
    id: id,
    ref: ref,
    placeholder: " ",
    maxLength: charLimit,
    value: value,
    onChange: onChange,
    onFocus: function onFocus() {
      return redirectFocus();
    },
    onBlur: function onBlur() {
      return setFocused(false);
    },
    disabled: disabled,
    readOnly: readOnly,
    error: error,
    type: type,
    rows: rows,
    sx: _extends({
      variant: stateVariant
    }, sx)
  }, TextareaProps, state)), jsx(Label, {
    htmlFor: id,
    variant: labelVariant
  }, label), jsx(Flex, {
    variant: helpMessageVariant
  }, jsx(Text, null, helpMessage), charLimit && jsx(Text, null, charCount, "/", charLimit)));
};

export { Accordion, Button$1 as Button, Calendar, Card, Carousel, Checkbox, Collapsible, FooterLanding, HamburgerMenu, Header$2 as Header, HelloBar, Icon, IconCaret, IconExit, IconExternalLink, IconFacebook, IconGlobe, IconHamburger, IconHelp, IconInstagram, IconLinkedIn, IconMail, IconVTEX, IconVTEXExpanded, IconVTEXSymbol, IconYouTube, Input, LocaleSwitcher, Modal, Popover$1 as Popover, Select, Skeleton, Textarea, Provider as ThemeProvider, Timeline, ToastProvider, Tooltip$1 as Tooltip, useAccordion, useFocusHollow, useTheme, useToast };
//# sourceMappingURL=brand-ui.esm.js.map