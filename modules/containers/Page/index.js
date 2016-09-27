import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import invariant from 'invariant'
import { BodyContainer, joinUri } from 'phenomic'

class Page extends Component {
  render() {
    const { props, context } = this

    const {
      pkg
    } = context.metadata

    const {
      __filename,
      __url,
      head,
      body,
      header,
      footer,
      displayTitle = true
    } = props

    invariant(
      typeof head.title === 'string',
      `Your page '${ __filename }' needs a title`
    )

    const metaTitle = `${head.metaTitle ? head.metaTitle : head.title} | ${pkg.siteName}`

    const meta = [
      { property: 'og:type', content: 'article' },
      { property: 'og:title', content: metaTitle },
      {
        property: 'og:url',
        content: joinUri(process.env.PHENOMIC_USER_URL, __url)
      },
      { property: 'og:description', content: head.description },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: metaTitle },
      { name: 'twitter:creator', content: `@${ pkg.twitter }` },
      { name: 'twitter:description', content: head.description },
      { name: 'description', content: head.description }
    ]

    return (
      <div>
        <Helmet
          title={metaTitle}
          meta={meta}
        />

        {
          head.title && displayTitle &&
          <h1>{head.title}</h1>
        }
        {header}
        <BodyContainer>{body}</BodyContainer>
        {props.children}
        {footer}
      </div>
    )
  }
}

Page.propTypes = {
  __filename: PropTypes.string.isRequired,
  __url: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  footer: PropTypes.element,
  head: PropTypes.object.isRequired,
  header: PropTypes.element
}

Page.contextTypes = {
  metadata: PropTypes.object.isRequired
}

export default Page
