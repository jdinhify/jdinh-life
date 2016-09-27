import React, { Component } from 'react'
import { Route } from 'react-router'

import PhenomicPageContainer from 'phenomic/lib/PageContainer'

import {
  Homepage,
  Layout,
  Page,
  PageError,
  PageLoading,
  Post
} from 'containers'

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

export default (
  <Route component={Layout}>
    <Route path="*" component={PageContainer} />
  </Route>
)
