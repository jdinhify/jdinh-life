import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

const isExternalLink = (href) =>
  href ? /^((https?:)?\/\/|mailto:|tel:)/.test(href) : true

const isGatsbyInternal = (href) => (href ? /^\/(?!\/)/.test(href) : true)

export const Link = ({ href, children }) => {
  if (isGatsbyInternal(href)) {
    return <GatsbyLink to={href}>{children}</GatsbyLink>
  }

  return isExternalLink(href) ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children} <sup>⇗</sup>
    </a>
  ) : (
    <a href={href}>{children}</a>
  )
}
