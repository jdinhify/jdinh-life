const path = require('path')
const remarkSlug = require('remark-slug')

module.exports = {
  siteMetadata: {
    title: "JD's site",
    description: "Place for JD's thoughts about tech",
    author: '@jdinhify',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: path.resolve('./src/components/layout.js'),
        },
        remarkPlugins: [remarkSlug],
      },
    },
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-165287314-1',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "JD's site",
        short_name: "JD's",
        start_url: '/',
        background_color: '#282828',
        theme_color: '#ebdbb2',
        icon: 'src/images/icon.png',
        cache_busting_mode: 'none',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
