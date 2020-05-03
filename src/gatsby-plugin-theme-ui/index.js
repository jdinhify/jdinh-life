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
      lineHeight: 1.55,
      fontSize: '112.5%',
      maxWidth: '52rem',
      margin: '0 auto',
      padding: '1rem',
      a: link,
      'h1, h2, h3, h4, h5, h6': heading,
      h1: {
        fontSize: '1.77em',
      },
      blockquote: {
        margin: '1rem 2rem',
        borderLeft: `.33rem dotted ${colors.purple}`,
        paddingLeft: '.55rem',
        color: colors.orange,
      },
      pre: {
        ...prismGruvbox,
        padding: '1rem',
        margin: '1.55rem 0',
        fontFamily: fonts.monospace,
        overflowX: 'auto',
        whiteSpace: 'pre-wrap',
      },
      code: {
        ...prismGruvbox,
        fontFamily: fonts.monospace,
        padding: '0 .55rem',
      },
      ul: {
        paddingLeft: '2.55rem',
      },
      ol: {
        paddingLeft: '2.55rem',
      },
      li: {
        marginBottom: '0.77rem',
      },
      p: {
        lineHeight: 1.7,
        marginBottom: '1.55rem',
      },
      hr: {
        border: 0,
        borderTop: `1px dashed ${colors.comment}`,
        margin: '3rem 0',
      },
    },
  },
}
