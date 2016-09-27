import React from 'react'

import styles from './index.scss'

const Header = () => {
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

export default Header
