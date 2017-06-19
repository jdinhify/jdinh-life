import React from 'react'
import PropTypes from 'prop-types'
import kebabCase from 'lodash/kebabCase'

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
    <Tag id={id}>
      {level === 1 ? <span>{anchorHash}</span> : <a href={href}>{anchorHash}</a>}
      {children}

      <style jsx>{`
        span, a {
          font-family: Lucida Console,Monaco,monospace;
          padding-right: .5rem;
        }
      `}</style>
    </Tag>
  )
}

HeadingRenderer.propTypes = propTypes

export default HeadingRenderer
