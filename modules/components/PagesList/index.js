import React, { PropTypes } from 'react'

import { PagePreview } from 'components'

import styles from './index.scss'

const PagesList = ({ pages }) => {
  return (
    <div>
    {
      pages.length
      ? (
        <ul className={styles.listContainer}>
        {
          pages.map((page) => (
            <li key={page.title} className={styles.listItem}><PagePreview {...page} /></li>
          ))
        }
        </ul>
      )
      : 'No posts yet.'
    }
    </div>
  )
}

PagesList.propTypes = {
  pages: PropTypes.array.isRequired
}

export default PagesList
