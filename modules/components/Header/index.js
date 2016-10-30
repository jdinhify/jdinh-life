import React, { Component } from 'react'
import { Link } from 'react-router'

import styles from './index.scss'

export default class Header extends Component {

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link className={styles.logoLink} to="/">{'JD\'s'}</Link>
        </div>
      </header>
    )
  }
}
