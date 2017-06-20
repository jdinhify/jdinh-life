import React from 'react'
import PropTypes from 'prop-types'
import kebabCase from 'lodash/kebabCase'

import { headingFontSizes, fonts } from '../../config'

const propTypes = {
  level: PropTypes.number,
  children: PropTypes.any,
}

const HeadingRenderer = ({ level, children }) => {
  const Tag = `h${level}`
  const id = kebabCase(children[0])
  const href = `#${id}`
  const anchorHash = Array(level + 1).join('#')

  return (
    <div>
      <span className='link'>{level === 1 ? <span className={`level${level}`}>{anchorHash}</span> : <a className={`level${level}`} href={href}>{anchorHash}</a>}</span>
      <Tag id={id}>
        {children}
      </Tag>

      <style jsx>{`
          .link {
            font-family: ${fonts.monospace};
            float: left;
            padding-right: .5rem;
          }

          .link :global(.level1) {
            font-size: ${headingFontSizes['1']};
          }
          .link :global(.level2) {
            font-size: ${headingFontSizes['2']};
          }
          .link :global(.level3) {
            font-size: ${headingFontSizes['3']};
          }
          .link :global(.level4) {
            font-size: ${headingFontSizes['4']};
          }
          .link :global(.level5) {
            font-size: ${headingFontSizes['5']};
          }
          .link :global(.level6) {
            font-size: ${headingFontSizes['6']};
          }
        `}</style>
    </div>
  )
}

HeadingRenderer.propTypes = propTypes

export default HeadingRenderer
