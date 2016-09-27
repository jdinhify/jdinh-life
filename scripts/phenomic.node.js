import metadata from '../modules/app/metadata'
import routes from '../modules/app/routes'
import store from '../modules/app/store'

import phenomicStatic from 'phenomic/lib/static'

module.exports = (options) =>
  phenomicStatic({
    ...options,
    metadata,
    routes,
    store
  })
