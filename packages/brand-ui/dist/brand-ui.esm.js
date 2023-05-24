import React, { memo, useContext, Fragment, useRef, useEffect, cloneElement, useState } from 'react';
import { ThemeProvider as ThemeProvider$1, jsx, Flex, Box, Text, Link as Link$1, Label } from 'theme-ui';
export { Box, Flex, Grid, Link, Text, jsx } from 'theme-ui';
import mergeSx from 'deepmerge';
import { Button as Button$2, useDisclosureState, Disclosure, DisclosureContent } from 'reakit';
import { useFocusRing } from '@react-aria/focus';
import { get } from '@theme-ui/css';
import { ThemeContext } from '@emotion/core';
import { useTooltipState, TooltipReference, Tooltip as Tooltip$2 } from 'reakit/Tooltip/';

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

function ThemeProvider(_ref) {
  var children = _ref.children;
  return React.createElement(ThemeProvider$1, {
    theme: theme
  }, children);
}

var Provider = /*#__PURE__*/memo(ThemeProvider);

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

/**
 * Hook to access the theme property
 */

var useTheme = function useTheme() {
  return useContext(ThemeContext);
};

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

var HamburgerMenu = function HamburgerMenu(_ref) {
  var children = _ref.children,
      sx = _ref.sx;
  var disclosure = useDisclosureState({
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
  })), jsx(DisclosureContent, Object.assign({}, disclosure, {
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
  var disclosure = useDisclosureState({
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
  })), jsx(DisclosureContent, Object.assign({}, disclosure, {
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
  })), jsx(DisclosureContent, Object.assign({}, disclosure, {
    onClick: function onClick() {
      return disclosure.hide();
    },
    sx: {
      variant: 'localeSwitcher.overlay'
    },
    role: "presentation"
  })), jsx(DisclosureContent, Object.assign({}, disclosure, {
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

var Header = function Header(_ref) {
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

Header.LeftLinks = LeftLinks;
LeftLinks.Links = Links$1;
Header.RightLinks = RightLinks;
Header.Brand = Brand;
Header.ActionButton = ActionButton$1;

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

export { Button$1 as Button, FooterLanding, HamburgerMenu, Header, Icon, IconCaret, IconExit, IconExternalLink, IconFacebook, IconGlobe, IconHamburger, IconHelp, IconInstagram, IconLinkedIn, IconMail, IconVTEX, IconVTEXExpanded, IconVTEXSymbol, IconYouTube, LocaleSwitcher, Textarea, Provider as ThemeProvider, Timeline, Tooltip$1 as Tooltip };
//# sourceMappingURL=brand-ui.esm.js.map
