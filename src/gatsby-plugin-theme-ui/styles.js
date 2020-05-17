export const colors = {
  codeBackground: '#1d2021',
  background: '#282828',
  foreground: '#ebdbb2',
  selection: '#32302f',
  comment: '#928374',
  blue: '#83a598',
  cyan: '#689d6a',
  green: '#98971a',
  orange: '#d65d0e',
  purple: '#b16286',
  red: '#cc241d',
  yellow: '#d79921',
  text: '#d5c4a1',
}

export const prismGruvbox = {
  color: colors.foreground,
  backgroundColor: colors.codeBackground,
  '.changed': {
    color: colors.blue,
  },
  '.deleted': {
    color: colors.red,
  },
  '.inserted,.attr-name': {
    color: colors.green,
  },
  '.comment': {
    color: colors.comment,
  },
  '.string,.url': {
    color: colors.green,
  },
  '.number': {
    color: colors.purple,
  },
  '.builtin,.char,.export constant,.function': {
    color: colors.yellow,
  },
  '.punctuation': {
    color: colors.blue,
  },
  '.selector,.doctype': {
    color: colors.purple,
  },
  '.class-name': {
    color: colors.yellow,
  },
  '.tag,.operator,.keyword': {
    color: colors.red,
  },
  '.property': {
    color: colors.cyan,
  },
}

export const fonts = {
  normal: 'Montserrat, sans-serif',
  heading: 'Montserrat, sans-serif',
  monospace: '"Lucida Console", Monaco, monospace',
}

export const link = {
  color: colors.cyan,
  transition: 'color .5s ease',
  textDecoration: 'none',
  ':hover': {
    color: colors.orange,
  },
  ':visited': {
    color: colors.blue,
    ':hover': {
      color: colors.orange,
    },
  },
}

export const heading = {
  fontFamily: fonts.heading,
  fontWeight: 400,
  display: 'inline-block',
  margin: '1.5em 0 1em 0',
  '> a, > span': {
    paddingRight: '.25em',
  },
  '> a': link,
}
