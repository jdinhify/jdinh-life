import React, { Component } from 'react'
import { Link } from 'react-router'

import styles from './index.scss'

export default class Header extends Component {
  componentWillMount() {
    this.setState({
      navActive: false
    })
  }

  toggleNavClass() {
    this.setState({
      ...this.state,
      navActive: !this.state.navActive
    })
  }

  handleNavToggle = () => {
    this.toggleNavClass()
  }

  renderNavClass() {
    return `${styles.nav} ${this.state.navActive ? styles.navActive : styles.navInactive}`
  }

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <Link className={styles.logoLink} to="/">{'JD\'s'}</Link>
          </div>
          <div
            className={styles.navToggle}
            onClick={this.handleNavToggle}
            >{'Nav Toggle'}</div>
          <div className={this.renderNavClass()}>
            <Link to="/" className={styles.navItem}>{'Home'}</Link>
          </div>
        </div>
      </header>
    )
  }
}
