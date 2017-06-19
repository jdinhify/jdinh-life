import React from 'react'

import Page from '../modules/layout/main'
import PageList from '../modules/layout/components/page-list'

const pages = [
  {
    title: 'Example',
    desc: 'An example markdown, including [link](https://google.com)',
    link: '/example',
    date: '2017-06-18',
  },
  {
    title: 'Example',
    desc: 'An example markdown, including [link](https://google.com)',
    link: '/example',
    date: '2017-06-18',
  },
]

export default () =>
  <Page title='Home' noHeading>
    <PageList pages={pages} />
  </Page>
