import React, { Component } from 'react'
import { Route } from 'react-router'
import ga from 'react-ga'

import PhenomicPageContainer from 'phenomic/lib/PageContainer'

import {
  Homepage,
  Layout,
  Page,
  PageError,
  PageLoading,
  Post
} from 'containers'

import metadata from './metadata'

const isProduction = process.env.NODE_ENV === 'production'
const isClient = typeof window !== 'undefined'

class PageContainer extends Component {
  render() {
    const { props } = this
    return (
      <PhenomicPageContainer
        {...props}
        layouts={{
          Page,
          PageError,
          PageLoading,
          Homepage,
          Post
        }}
      />
    )
  }
}

if (isClient) {
  ga.initialize(metadata.pkg.ga.id, { debug: !isProduction })
}

function logPageview() {
  if (isClient) {
    ga.pageview(window.location.pathname)
  }
}

export default (
  <Route component={Layout}>
    <Route path="*" component={PageContainer} onEnter={logPageview} />
  </Route>
)
