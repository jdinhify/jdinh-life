import React, { Component, PropTypes } from 'react'

import { Page } from 'containers'

import styles from './index.scss'

class Post extends Component {

  // it's up to you to choose what to do with this layout ;)

  render() {
    const { props } = this
    const { head } = props

    const pageDate = head.date ? new Date(head.date) : null

    return (
      <Page
        {...props}
        header={
          <header className={styles.header}>
          {
            pageDate &&
            <time key={pageDate.toISOString()}>
              {pageDate.toDateString()}
            </time>
          }
          </header>
        }
      />
    )
  }
}

Post.propTypes = {
  head: PropTypes.object.isRequired
}

export default Post
