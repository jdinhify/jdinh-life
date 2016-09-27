import path from 'path'

import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { phenomicLoader, phenomicLoaderPresets } from 'phenomic'

import pkg from './package.json'

// note that this webpack file is exporting a "makeConfig" function
// which is used for phenomic to build dynamic configuration based on your needs
// see the end of the file if you want to export a default config
// (eg: if you share your config for phenomic and other stuff)
export const makeConfig = (config = {}) => {
  return {
    ...config.dev && {
      devtool: '#cheap-module-eval-source-map'
    },
    module: {
      noParse: /\.min\.js/,
      loaders: [
        // *.md => consumed via phenomic special webpack loader
        // allow to generate collection and rss feed.
        {
          // phenomic requirement
          test: /\.md$/,
          loader: phenomicLoader
          // config is in `phenomic` section later in the file
          // so you can use functions (and not just JSON) due to a restriction
          // of webpack that serialize/deserialize loader `query` option.
        },

        // *.json => like in node, return json
        // (not handled by webpack by default)
        {
          test: /\.json$/,
          loader: 'json-loader'
        },

        // *.js => babel + eslint
        {
          test: /\.js$/,
          loaders: [
            `babel-loader${
              config.dev
              ? '?cacheDirectory=true&presets[]=babel-preset-react-hmre'
              : '?cacheDirectory=true'
            }`,
            'eslint-loader?fix'
          ],
          include: [
            path.resolve(__dirname, 'scripts'),
            path.resolve(__dirname, 'modules')
          ]
        },

        {
          test: /\.scss$/,
          include: path.resolve(__dirname, 'modules'),
          loader: ExtractTextPlugin.extract(
            'style',
            [`css?modules&importLoaders=2&localIdentName=${
                config.production
                ? '[hash:base64:5]'
                : '[path][name]--[local]--[hash:base64:5]'
              }`,
              'postcss',
              'sass'
            ].join('!'),
          )
        },

        // copy assets and return generated path in js
        {
          test: /\.(html|ico|jpe?g|png|gif)$/,
          loader: `file-loader?name=[path][name].[hash].[ext]&context=
            ${path.join(__dirname, config.source)}`
        },

        // svg as raw string to be inlined
        {
          test: /\.svg$/,
          loader: 'raw-loader'
        }
      ]
    },

    phenomic: {
      context: path.join(__dirname, config.source),
      plugins: [...phenomicLoaderPresets.markdown],
      // see https://phenomic.io/docs/usage/plugins/
      feedsOptions: {
        title: pkg.name,
        site_url: pkg.homepage
      },
      feeds: {
        'feed.xml': {
          collectionOptions: {
            filter: { layout: 'Post' },
            sort: 'date',
            reverse: true,
            limit: 20
          }
        }
      }
    },

    postcss: () => [
      require('postcss-cssnext')({ browsers: 'last 2 versions' }),
      require('postcss-reporter')(),
      ...!config.production ? [
        require('postcss-browser-reporter')()
      ] : []
    ],

    plugins: [
      new ExtractTextPlugin('[name].[hash].css', { disable: config.dev }),
      ...config.production && [
        new webpack.optimize.DedupePlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(
          { compress: { warnings: false } }
        )
      ]
    ],

    output: {
      path: path.join(__dirname, config.destination),
      publicPath: config.baseUrl.pathname,
      filename: '[name].[hash].js'
    },

    resolve: {
      extensions: ['.js', '.json', ''],
      root: [path.join(__dirname, 'node_modules'), path.resolve(__dirname, 'modules')]
    },

    resolveLoader: { root: [path.join(__dirname, 'node_modules')] }
  }
}

// you might want to export a default config for another usage ?
// export default makeConfig()
