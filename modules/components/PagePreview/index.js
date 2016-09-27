import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import styles from './index.scss'

const PagePreview = ({ __url, title, date, description }) => {
  const pageDate = date ? new Date(date) : null

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to={__url} className={styles.link}>
          {title}
        </Link>
        {
          pageDate &&
          <div>
            {' '}
            <time key={title}>
              {pageDate.toLocaleDateString()}
            </time>
          </div>
        }
      </div>
      <div className={styles.content}>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  )
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default PagePreview
