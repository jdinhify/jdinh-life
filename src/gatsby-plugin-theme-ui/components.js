import React from 'react'
import Prism from '@theme-ui/prism'
import { Link as GatsbyLink } from 'gatsby'

const heading = (level) => (props) => {
  const Tag = `h${level}`
  const anchorHash = Array(level + 1).join('#')

  return (
    <Tag {...props} id={props.id}>
      {level === 1 ? (
        <span>{anchorHash}</span>
      ) : (
        <a href={`#${props.id}`}>{anchorHash}</a>
      )}
      {props.children}
    </Tag>
  )
}

const isExternalLink = (href) =>
  href ? /^((https?:)?\/\/|mailto:|tel:)/.test(href) : true

const isGatsbyInternal = (href) => (href ? /^\/(?!\/)/.test(href) : true)

const Link = ({ href, children }) => {
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

export default {
  pre: ({ children }) => children,
  code: Prism,
  h1: heading(1),
  h2: heading(2),
  h3: heading(3),
  h4: heading(4),
  h5: heading(5),
  h6: heading(6),
  a: Link,
}
