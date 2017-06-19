import React from 'react'

import Page from '../modules/layout/main'
import PageList from '../modules/layout/components/page-list'

const pages = [
  {
    title: 'Simple HTTP server with python',
    desc: 'Sometimes it\'s convenient to run a very simple HTTP server just to serve web contents from your current directory.',
    link: '/2016/04-16-python-simple-http-server',
    date: '2016-04-16',
  },
  {
    title: 'About',
    desc: 'Some info',
    link: '/about',
  },
]

export default () =>
  <Page title='Home' noHeading>
    <PageList pages={pages} />
  </Page>
