import React from 'react'
import PropTypes from 'prop-types'

import Markdown from './components/markdown'
import Header from './components/header'
import { colors, fonts } from './config'

const propTypes = {
  content: PropTypes.string,
  title: PropTypes.string,
  noHeading: PropTypes.bool,

  children: PropTypes.any,
}

const Page = ({ children, title = '', content = '', noHeading }) =>
  <div className='app'>
    <Header title={title} />
    {!noHeading && <h1>{title}</h1>}
    <Markdown source={content} />
    { children }

    <style jsx>{`
      span {
        font-family: ${fonts.monospace};
        padding-right: .5rem;
      }

      h1::before {
        content: '#';
        font-family: ${fonts.monospace};
        padding-right: .5rem;
      }
    `}</style>

    <style jsx global>{`
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
          max-width: 1040px;
          color: ${colors.text};
          line-height: 1.4;
          font-size: 100%;
          text-rendering: geometricPrecision;
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
        padding: .5rem;
        margin-bottom: 1rem;
        background-color: #353743;
      }
      code {
        background-color: #353743;
        font-family: ${fonts.monospace};
        padding: 0 .5rem;
      }

      /* Dracula Theme v1.2.5
      *
      * https://github.com/dracula/highlightjs
      *
      * Copyright 2016-present, All rights reserved
      *
      * Code licensed under the MIT license
      *
      * @author Denis Ciccale <dciccale@gmail.com>
      * @author Zeno Rocha <hi@zenorocha.com>
      */
      .hljs {
        display: block;
        overflow-x: auto;
      }

      .hljs-built_in,
      .hljs-selector-tag,
      .hljs-section,
      .hljs-link {
        color: #8be9fd;
      }

      .hljs-keyword {
        color: #ff79c6;
      }

      .hljs,
      .hljs-subst {
        color: #f8f8f2;
      }

      .hljs-title {
        color: #50fa7b;
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
        color: #f1fa8c;
      }

      .hljs-comment,
      .hljs-quote,
      .hljs-deletion {
        color: #6272a4;
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
        color: #bd93f9;
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
        height: 2px;
      }

      /* Fancy blur effect */
      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px ${colors.comment}, 0 0 5px ${colors.comment};
        opacity: 1.0;

        -webkit-transform: rotate(3deg) translate(0px, -4px);
            -ms-transform: rotate(3deg) translate(0px, -4px);
                transform: rotate(3deg) translate(0px, -4px);
      }

    `}</style>
  </div>

Page.propTypes = propTypes

export default Page
