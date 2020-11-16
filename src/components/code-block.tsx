import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'

export const CodeBlock = ({ children, className }) => {
  const language = className.replace(/language-/, '')

  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre className={className}>
          {tokens.map((line, i) => {
            const { style, ...lineProps } = getLineProps({ line, key: i })

            // https://github.com/FormidableLabs/prism-react-renderer/issues/36
            // https://github.com/FormidableLabs/prism-react-renderer/pull/83
            // Ensure blank lines/spaces drop onto a new line
            if (line.length === 1 && line[0].content === '') {
              line[0].content = '\n'
            }

            return (
              <div key={i} {...lineProps}>
                {line.map((token, key) => {
                  const { style, ...tokenProps } = getTokenProps({ token, key })

                  return <span key={key} {...tokenProps} />
                })}
              </div>
            )
          })}
        </pre>
      )}
    </Highlight>
  )
}
