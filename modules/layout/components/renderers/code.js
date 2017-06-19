import React from 'react'
import PropTypes from 'prop-types'
import Lowlight from 'react-lowlight'
import js from 'highlight.js/lib/languages/javascript'
import python from 'highlight.js/lib/languages/python'
Lowlight.registerLanguage('js', js)
Lowlight.registerLanguage('python', python)

const propTypes = {
  language: PropTypes.string,
  literal: PropTypes.string,
  inline: PropTypes.bool,
}

const CodeRenderer = ({ language, literal, inline }) =>
  <Lowlight
    language={language || 'js'}
    value={literal}
    inline={inline} />

CodeRenderer.propTypes = propTypes

export default CodeRenderer
