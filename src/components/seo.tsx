import React, { FC } from 'react'
import Head from 'next/head'

const siteMetadata = {
  title: "JD's site",
  description: "Place for JD's thoughts about tech",
  author: '@jdinhify',
}

export const SEO: FC<{
  description?: string
  keywords?: string[]
  title?: string
}> = ({ description, keywords, title }) => {
  const metaDescription = description || siteMetadata.description

  return (
    <Head>
      <title>{`${title} | ${siteMetadata.title}`}</title>
      <link rel="icon" href="/favicon.png" />
      {[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: 'keywords',
                content: keywords.join(', '),
              }
            : [],
        )
        .map((meta) => (
          <meta
            key={meta.name || meta.property}
            {...(meta.property && { property: meta.property })}
            {...(meta.name && { name: meta.name })}
            content={meta.content}
          />
        ))}
    </Head>
  )
}
