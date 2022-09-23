const baseCard = {
  display: 'flex',
  bg: 'primary.contrast',
  flexDirection: 'column',
  borderRadius: 3,
  boxShadow: '0px 3px 9px rgba(61, 62, 64, 0.25)',
  '& > img': { padding: 0 },
}

const media = {
  vertical: {
    borderRadius: 3,
    bg: 'primary.contrast',
    '& > img': { padding: 0 },
  },
  horizontal: {
    borderRadius: 3,
    bg: 'primary.contrast',
    '& > img': { padding: 0 },
    maxWidth: ['100%', '30%', '35%', '35%'],
  },
}

const text = {
  title: {
    fontSize: 3,
    fontVariationSettings: 'medium',
    color: 'muted.0',
    paddingBottom: 2,
    paddingTop: 4,
    marginLeft: 4,
    marginRight: 4,
    justifyContent: 'space-between',
  },

  subtitle: {
    fontSize: 2,
    fontVariationSettings: 'regular',
    color: 'muted.0',
    paddingTop: 2,
    paddingBottom: 2,
    marginLeft: 4,
    marginRight: 4,
  },
}
const noMedia = {
  display: 'flex',
  bg: 'primary.contrast',
  flexDirection: 'column',
  borderRadius: 3,

  header: {
    fontSize: 3,
    paddingBottom: 4,
    paddingTop: 4,
    marginLeft: 4,
    marginRight: 4,
    ...text,
  },

  body: {
    fontSize: 2,
    color: 'muted.0',
    alignItems: 'left',
    marginLeft: 4,
    marginRight: 4,
    paddingBottom: 4,
    paddingTop: '12px',
  },

  footer: {
    paddingTop: 3,
    paddingBottom: 4,
    fontSize: 2,
    marginLeft: 4,
    marginRight: 4,
    justifyContent: 'flex-end',
    position: 'relative',
  },
}

const card = {
  media,
  noMedia,
  small: {
    ...baseCard,
    '& > div': { paddingX: 4 },
    paddingBottom: 4,
    paddingTop: 4,
  },
  regular: {
    ...baseCard,
    '& > div': {
      paddingX: 5,
    },
    paddingBottom: 6,
    paddingTop: 6,
  },
  vertical: {
    ...baseCard,
    '& > div': { paddingX: 2 },
  },
  horizontal: {
    ...baseCard,
    flexDirection: ['column', 'row', 'row', 'row'],
    '& > div': { paddingX: 2 },
  },
}

export default card
