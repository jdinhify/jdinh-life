import React from 'react'
import PropTypes from 'prop-types'
import MD from 'react-markdown'

import HeadingRenderer from './renderers/heading'
import LinkRenderer from './renderers/link'
import CodeRenderer from './renderers/code'

const propTypes = {
  source: PropTypes.string,
}

const Markdown = ({ source }) =>
  <MD
    source={source}
    renderers={{
      Heading: HeadingRenderer,
      Link: LinkRenderer,
      CodeBlock: CodeRenderer,
      Code: CodeRenderer,
    }} />

Markdown.propTypes = propTypes

export default Markdown
