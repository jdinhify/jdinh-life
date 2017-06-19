import React from 'react'
import MD from 'react-markdown'

import Page from '../modules/layout/main'

const content = `
This is the main page
`

export default () =>
  <Page title='Home' noHeading>
    <MD source={content} />
    Welcome to next.js!
  </Page>
