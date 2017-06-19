import React from 'react'

import Page from '../../modules/layout/main'

const content = `
## New techs

The old site was made using <a href="https://getgrav.org/" target="_blank">Grav</a> - a flat file CMS on PHP. While there's a lot of cool things about Grav, I was into static site generator and looking for one since quite some time ago and finally have a bit of time to dig into this.

This site was re-written using the following techs/tools:
 - Webpack
 - <a href="https://phenomic.io/" target="_blank">Phenomic</a>
 - ReactJS & React Router for layout
 - SASS & CSS Modules
 - Markdown for content
 - YAML for front-matter
 - AWS S3 & Cloudfront for super cheap static site hosting

I'm gonna (hopefully) write about some of the above in the future.

## Why?

### ReactJS, SASS/CSS Modules
 - I like ReactJS & the tools around it
 - ReactJS & React-Router enable viewers to have an app-like experience - no browser reload when changing pages
 - SASS & CSS Modules for isolating styling between components/containers. TBH I haven't used SASS to its fullest, and there're already new things (PostCSS, CSSNext, etc...)

### Webpack
 - Bundling
 - Also required by Phenomic

### Phenomic

Phenomic is a site generator for ReactJS. The features:
 - Universal Rendering/Isomorphic
 - Pre-rendered, static html documents are generated
 - Navigating to a page (when js' loaded) will only load minimal amount of data instead of the whole document
 - Offline via Service Workers and/or AppCache

### AWS S3 & Cloudfront
 - There're lots of cool things to explore in AWS (there's hype about Google Cloud these days, but currently it's not very trivial to do similar set up for this site - static file storage with custom SSL)
 - The actual reason for this site is that it's saving me heaps of money switching from a VPS. There're definitely missing stuff from a VPS but I'm hoping that I'll have time to explore more on AWS to make up for it, for example Serverless framework with AWS Lambda, or Docker container

## Result

I needed to removed so many things that I have taken for granted when using Grav. However I realised that I haven't actually utilised them to the fullest (since there's too few stuff here) so it's not too bad.

I also enjoy making missing functionalities from scratch so I'll just try making them as the site grows.

Overall, I'm quite happy with the site now.
`

export default () => <Page title='React static site' content={content} />
