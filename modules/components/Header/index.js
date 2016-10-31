import React, { Component } from 'react'
import { Link } from 'react-router'

import styles from './index.scss'

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <Link className={styles.logoLink} to="/">{'JD\'s'}</Link>
          </div>
          <div className={styles.nav}>
            <Link to="/" className={styles.navItem}>{'Home'}</Link>
          </div>
        </div>
      </header>
    )
  }
}
