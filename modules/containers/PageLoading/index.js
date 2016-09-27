import React, { Component } from 'react'
import Helmet from 'react-helmet'
import TopBarProgressIndicator from 'react-topbar-progress-indicator'

import styles from './index.scss'

TopBarProgressIndicator.config({
  barColors: {
    '0': '#fe8019',
    '1.0': '#8ec07c'
  },
  shadowBlur: 5
})

export default class PageLoading extends Component {

  render() {
    return (
      <div>
        <Helmet
          title={'Loading...'}
        />
        <TopBarProgressIndicator />
        <div className={styles.loader}>
          <div className={styles.spinner} />
        </div>
      </div>
    )
  }
}
