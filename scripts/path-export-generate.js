const glob = require('glob')
const fs = require('fs')

const pages = 'pages/**/*.js'
const pathMapFile = './path-map.js'

glob(pages, async (err, files) => {
  if (err) return console.log(err)

  const map = await files
    .map(file => file.replace(/(^pages)|(index\.js)|(\.js$)/g, ''))
    .map(file => ({ [file]: { page: file } }))

  const pathMap = `module.exports = ${JSON.stringify(Object.assign(...map), null, 2)}`

  fs.writeFile(
    pathMapFile,
    pathMap,
    err => err
      ? console.log(err)
      : console.log('path-map exported to path-map.js')
  )
})
