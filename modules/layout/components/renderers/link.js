import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const propTypes = {
  href: PropTypes.string,
  children: PropTypes.any,
}

const LinkRenderer = ({href, children}) => href.match(/^(https?:)?\/\//)
  ? <a href={href} target='_blank'>
    {children} <sup>☁</sup>
  </a>
  : <Link href={href}><a>{children}</a></Link>

LinkRenderer.propTypes = propTypes

export default LinkRenderer
