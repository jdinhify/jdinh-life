import React from 'react'

import Page from '../modules/layout/main'

const content = `
## Author

JD

 - [github](https://github.com/jdinhlife)
 - [linkedin](http://linkedin.com/in/jdinhlife)


## Tech

 - [React](https://facebook.github.io/react/) via [nextjs](https://github.com/zeit/next.js/)
 - Theme ref: [dracula theme](https://draculatheme.com/)
`

export default () => <Page title='About this site' content={content} />
