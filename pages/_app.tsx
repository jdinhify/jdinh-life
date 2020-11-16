import '../src/styles/globals.css'
import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { mdxComponents } from '../src/components/mdx-components'

const MyApp = ({ Component, pageProps }) => (
  <MDXProvider components={mdxComponents}>
    <Component {...pageProps} />
  </MDXProvider>
)

export default MyApp
