import React from 'react'
import Link from 'next/link'

import Markdown from '../modules/layout/components/markdown'
import Page from '../modules/layout/main'
import { colors } from '../modules/layout/config'

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

const localeStringOptions = {
  weekday: 'short',
  month: 'short',
  year: 'numeric',
  day: 'numeric',
}

export default () =>
  <Page title='Home' noHeading>
    {
      pages.map(
        (page, i) =>
          <div className='entry' key={i}>
            <h2><i>#</i><Link prefetch href={page.link}><a>{page.title}</a></Link></h2>
            <time>{(new Date(page.date)).toLocaleDateString('en-au', localeStringOptions)}</time>
            <Markdown source={page.desc} />
            <Link href={page.link}><a>Read more</a></Link>
          </div>
      )
    }

    <style jsx>{`
      h2 {
        margin-bottom: 0;
      }
      a {
        color: ${colors.purple};
        transition: color .5s ease;
      }
      a:hover {
        color: ${colors.orange};
      }
      i {
        font-family: Lucida Console,Monaco,monospace;
        padding-right: .5rem;
      }
      time {
        display: block;
        font-size: 87.5%;
        margin-bottom: 1rem;
      }
      time::before {
        content: '⤭';
        padding-right: .5rem;
      }
      .entry + .entry::before {
        font-family: Lucida Console,Monaco,monospace;
        content: '/* --- */';
        display: block;
        text-align: center;
        font-size: 87.5%;
        color: ${colors.comment};
      }
    `}</style>
  </Page>
