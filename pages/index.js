import React from 'react'

import Page from '../modules/layout/main'
import PageList from '../modules/layout/components/page-list'

const pages = [
  {
    title: 'React static (nextjs)',
    desc: 'React static site with nextjs',
    link: '/2017/06-20-nextjs',
    date: '2017-06-20',
  },
  {
    title: 'React static',
    desc: 'Moved from a good CMS to react static site',
    link: '/2016/10-30-react-static',
    date: '2016-10-30',
  },
  {
    title: 'Stuff',
    desc: ' - Remove adjacent duplicated characters in javascript',
    link: '/2016/05-11-stuff',
    date: '2016-05-11',
  },
  {
    title: 'Simple HTTP server with python',
    desc: 'Sometimes it\'s convenient to run a very simple HTTP server just to serve web contents from your current directory.',
    link: '/2016/04-16-python-simple-http-server',
    date: '2016-04-16',
  },
  {
    title: 'Stuff',
    desc: ' - Remove sub-array in javascript',
    link: '/2016/04-10-stuff',
    date: '2016-04-10',
  },
  {
    title: 'About',
    desc: 'Some info',
    link: '/about',
  },
]

export default () =>
  <Page title='Home' noHeading noTime>
    <PageList pages={pages} />
  </Page>
