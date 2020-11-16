import { kebabCase } from '../libs/kebab-case'
import { CodeBlock } from './code-block'
import { Layout } from './layout'
import { Link } from './link'

const heading = (level) => (props) => {
  const id = kebabCase(props.children)
  const Tag = `h${level}`
  const anchorHash = Array(level + 1).join('#')

  return (
    <Tag {...props} id={id}>
      {level === 1 ? (
        <span>{anchorHash}</span>
      ) : (
        <a href={`#${id}`}>{anchorHash}</a>
      )}
      {props.children}
    </Tag>
  )
}

export const mdxComponents = {
  wrapper: (props) => (
    <Layout metadata={props.metadata}>
      <main {...props} />
    </Layout>
  ),
  h1: heading(1),
  h2: heading(2),
  h3: heading(3),
  h4: heading(4),
  h5: heading(5),
  h6: heading(6),
  a: Link,
  code: CodeBlock,
  pre: ({ children }) => children,
}
