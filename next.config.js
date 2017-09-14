const glob = require('glob')

module.exports = {
  exportPathMap: () =>
    Object.assign(...glob.sync('pages/**/*.js', { ignore: 'pages/_document.js' })
      .map(file => file.replace(/(^pages)|(index\.js)|(\.js$)/g, ''))
      .map(file => ({ [file]: { page: file } }))
    ),
}
