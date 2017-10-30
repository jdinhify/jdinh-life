import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'

import { colors } from '../config'

Router.onRouteChangeStart = (url) => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const propTypes = {
  title: PropTypes.string,
}

const Header = ({ title = '' }) => (
  <header>
    <Link href='/'><a>JD's</a></Link>

    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='google-site-verification' content='Cs5EM6TQjEW58xRCZJacWN_W_3YJ6XLA4p7pur3RdZU' />
      <title>{title} | JD's</title>
    </Head>

    <style jsx>{`
      header {
        padding: 1rem 2rem;
        color: white;
        text-align: center;
        opacity: .8;
      }
      a {
        font-size: 250%;
        text-decoration: none;
        color: ${colors.green};
        letter-spacing: 5px;
        font-weight: 500;
      }
    `}</style>
  </header>
)

Header.propTypes = propTypes

export default Header
