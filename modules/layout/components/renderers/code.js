import React from 'react'
import PropTypes from 'prop-types'
import Lowlight from 'react-lowlight'
import js from 'highlight.js/lib/languages/javascript'
import python from 'highlight.js/lib/languages/python'
import bash from 'highlight.js/lib/languages/bash'
Lowlight.registerLanguage('js', js)
Lowlight.registerLanguage('python', python)
Lowlight.registerLanguage('bash', bash)

const propTypes = {
  language: PropTypes.string,
  value: PropTypes.string,
}

const defaultProps = {
  language: 'js',
  value: '',
}

const CodeRenderer = ({ language, value }) =>
  <Lowlight
    language={language}
    value={value} />

CodeRenderer.propTypes = propTypes
CodeRenderer.defaultProps = defaultProps

export default CodeRenderer
