import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import Markdown from '../components/markdown'
import { colors, fonts } from '../config'

const localeStringOptions = {
  weekday: 'short',
  month: 'short',
  year: 'numeric',
  day: 'numeric',
}

const propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    desc: PropTypes.string,
  })),
}

const PageList = ({ pages }) =>
  <div>
    {
      pages.map(
        (page, i) =>
          <div className='entry' key={i}>
            <h2><Link prefetch href={page.link}><a>{page.title}</a></Link></h2>
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
      h2::before {
        content: '#';
        font-family: ${fonts.monospace};
        padding-right: .5rem;
      }
      a {
        color: ${colors.purple};
        transition: color .5s ease;
      }
      a:hover {
        color: ${colors.orange};
      }
      time {
        display: block;
        font-size: 87.5%;
        margin-bottom: 1rem;
      }
      time::before {
        content: '♠';
        padding-right: .5rem;
      }
      .entry + .entry::before {
        font-family: ${fonts.monospace};
        content: '/* --- */';
        display: block;
        text-align: center;
        font-size: 87.5%;
        color: ${colors.comment};
      }
    `}</style>
  </div>

PageList.propTypes = propTypes

export default PageList
