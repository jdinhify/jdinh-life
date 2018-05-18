import React from 'react'
import PropTypes from 'prop-types'

import Markdown from './components/markdown'
import Header from './components/header'
import dateFormat from '../common/utils/date-format'
import { initGA, logPageView } from '../common/utils/ga'
import { colors, fonts } from './config'

const propTypes = {
  title: PropTypes.string,
  noHeading: PropTypes.bool,
  date: PropTypes.string,
  noTime: PropTypes.bool,

  children: PropTypes.any,
}

export default class Page extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  render () {
    const { children, title = '', noHeading, date, noTime } = this.props

    return (
      <div className='app'>
        <Header title={title} />
        {!noHeading && <h1>{title}</h1>}
        {noTime ? undefined : date ? <time>{dateFormat({date: (new Date(date)), format: 'mmm dd yyyy'})}</time> : <time>♣ ♦ ♥</time>}
        {typeof children === 'string' ? <Markdown source={children} /> : children}

        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css?family=Inconsolata');

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
              font-family: ${fonts.normal};
              margin: 0 auto;
              padding: 1rem;
              background-color: ${colors.background};
              max-width: 65rem;
              color: ${colors.text};
              line-height: 1.4;
              font-size: 112.5%;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            display: block;
            font-weight: 400;
            margin-bottom: 1rem;
            margin-top: 1rem;
          }
          p {
              margin-bottom: 1rem;
          }
          ul, ol {
            padding-left: 2rem;
            margin-bottom: 1rem;
          }
          li {
            margin-bottom: .5rem;
          }
          a {
            color: ${colors.cyan};
            transition: color .5s ease;
            text-decoration: none;
          }
          a:hover {
            color: ${colors.orange}
          }
          blockquote {
            margin: 1rem 2rem;
            border-left: .25rem dotted ${colors.purple};
            padding-left: .5rem;
            color: ${colors.orange};
          }
          pre {
            padding: 1rem;
            margin: 1rem 0;
            background-color: ${colors.hljsbBackground};
          }
          code {
            background-color: ${colors.hljsbBackground};
            font-family: ${fonts.monospace};
            padding: 0 .5rem;
          }

          .hljs {
            display: block;
            overflow-x: auto;
          }

          .hljs-built_in,
          .hljs-selector-tag,
          .hljs-section,
          .hljs-link {
            color: ${colors.blue};
          }

          .hljs-keyword {
            color: ${colors.purple};
          }

          .hljs,
          .hljs-subst {
            color: ${colors.foreground};
          }

          .hljs-title {
            color: ${colors.yellow};
          }

          .hljs-string,
          .hljs-meta,
          .hljs-name,
          .hljs-type,
          .hljs-attribute,
          .hljs-symbol,
          .hljs-bullet,
          .hljs-addition,
          .hljs-variable,
          .hljs-template-tag,
          .hljs-template-variable {
            color: ${colors.green};
          }

          .hljs-comment,
          .hljs-quote,
          .hljs-deletion {
            color: ${colors.comment};
          }

          .hljs-keyword,
          .hljs-selector-tag,
          .hljs-literal,
          .hljs-title,
          .hljs-section,
          .hljs-doctag,
          .hljs-type,
          .hljs-name,
          .hljs-strong {
            font-weight: bold;
          }

          .hljs-literal,
          .hljs-number {
            color: ${colors.cyan};
          }

          .hljs-emphasis {
            font-style: italic;
          }

          /* nprogress */
          /* Make clicks pass-through */
          #nprogress {
            pointer-events: none;
          }

          #nprogress .bar {
            background: ${colors.comment};

            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;

            width: 100%;
            height: .125rem;
          }

          /* Fancy blur effect */
          #nprogress .peg {
            display: block;
            position: absolute;
            right: 0;
            width: 6.25rem;
            height: 100%;
            box-shadow: 0 0 .625rem ${colors.comment}, 0 0 .3125rem ${colors.comment};
            opacity: 1.0;

            -webkit-transform: rotate(3deg) translate(0, -.25rem);
                -ms-transform: rotate(3deg) translate(0, -.25rem);
                    transform: rotate(3deg) translate(0, -.25rem);
          }

        `}</style>

        <style jsx>{`
          span {
            font-family: ${fonts.monospace};
            padding-right: .5rem;
          }

          h1 {
            font-size: 1.5rem;
            color: ${colors.purple};
            margin-bottom: 0;
          }
          h1::before {
            content: '#';
            font-family: ${fonts.monospace};
            padding-right: .5rem;
            font-size: 1.5rem;
            color: ${colors.text};
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
          .app {
            padding-bottom: 2rem;
          }
        `}</style>
      </div>
    )
  }
}

Page.propTypes = propTypes
