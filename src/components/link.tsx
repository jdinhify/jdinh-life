import React from 'react'
import NextLink from 'next/link'

const isExternalLink = (href) =>
  href ? /^((https?:)?\/\/|mailto:|tel:)/.test(href) : true

const isNextInternal = (href) => (href ? /^\/(?!\/)/.test(href) : true)

export const Link = ({ href, children }) => {
  if (isNextInternal(href)) {
    return <NextLink href={href}>{children}</NextLink>
  }

  return isExternalLink(href) ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children} <sup>⇗</sup>
    </a>
  ) : (
    <a href={href}>{children}</a>
  )
}
