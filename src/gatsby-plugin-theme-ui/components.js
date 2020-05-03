import React from 'react'
import Prism from '@theme-ui/prism'
import { Link } from '../components/link'

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
