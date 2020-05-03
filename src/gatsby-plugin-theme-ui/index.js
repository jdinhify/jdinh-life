import { colors, fonts, link, heading, prismGruvbox } from './styles'

export default {
  colors: {
    text: colors.text,
    background: colors.background,
  },
  styles: {
    root: {
      fontFamily: fonts.normal,
      fontWeight: 400,
      lineHeight: 1.5,
      fontSize: '112.5%',
      maxWidth: '52rem',
      margin: '0 auto',
      padding: '1rem',
      a: link,
      h1: {
        fontWeight: 400,
      },
      h2: {
        fontWeight: 400,
      },
      h3: {
        fontWeight: 400,
      },
      h4: {
        fontWeight: 400,
      },
      h5: {
        fontWeight: 400,
      },
      h6: {
        fontWeight: 400,
      },
    },
    h1: {
      ...heading,
    },
    h2: {
      ...heading,
    },
    h3: {
      ...heading,
    },
    h4: {
      ...heading,
    },
    h5: {
      ...heading,
    },
    h6: {
      ...heading,
    },
    blockquote: {
      margin: '1rem 2rem',
      borderLeft: `.25rem dotted ${colors.purple}`,
      paddingLeft: '.5rem',
      color: colors.orange,
    },
    pre: {
      padding: '1rem',
      margin: '1rem 0',
      fontFamily: fonts.monospace,
      overflowX: 'auto',
      whiteSpace: 'pre-wrap',
      ...prismGruvbox,
    },
    ul: {
      paddingLeft: '2.5rem',
    },
    ol: {
      paddingLeft: '2.5rem',
    },
    li: {
      marginBottom: '0.75rem',
    },
    p: {
      marginBottom: '1.5rem',
    },
    hr: {
      border: 0,
      borderTop: `1px dashed ${colors.comment}`,
      margin: '3rem 0',
    },
  },
}
