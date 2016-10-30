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

  inactivateNav() {
    if (this.state.navActive) {
      this.setState({
        ...this.state,
        navActive: false
      })
    }
  }

  handleNavLinkClick = () => {
    this.inactivateNav()
  }

  handleNavToggle = () => {
    this.toggleNavClass()
  }

  renderNavClass() {
    return `${styles.nav} ${this.state.navActive ? styles.navActive : styles.navInactive}`
  }

  renderNavToggleClass() {
    return `${styles.navToggle} ${this.state.navActive ? styles.navToggleActive : styles.navToggleInactive}`
  }

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <Link className={styles.logoLink} to="/">{'JD\'s'}</Link>
          </div>
          <div
            className={this.renderNavToggleClass()}
            onClick={this.handleNavToggle}
            >{'Nav Toggle'}</div>
          <div className={this.renderNavClass()}>
            <Link onClick={this.handleNavLinkClick} to="/" className={styles.navItem}>{'Home'}</Link>
          </div>
        </div>
      </header>
    )
  }
}
