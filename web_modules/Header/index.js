import React, { Component, PropTypes } from 'react'

import styles from './index.scss'

export default class Header extends Component {

  static contextTypes = {
    metadata: PropTypes.object.isRequired
  };

  render() {

    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <a className={styles.logoLink} href="/">{'JD\'s'}</a>
        </div>
        <nav className={styles.nav}>
          <button className={styles.navButton} >{'Button'}</button>
        </nav>
      </header>
    )
  }
}
