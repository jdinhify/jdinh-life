import Link from 'next/link'
import React from 'react'
import { formatDate } from '../libs/format-date'
import { Post, posts } from '../libs/posts'

const dateCompare = (post1: Post, post2: Post) =>
  post2.module.metadata.published.localeCompare(post1.module.metadata.published)

export const PostList = ({ limit }) => (
  <>
    {posts
      .sort(dateCompare)
      .slice(0, limit)
      .map(
        ({
          slug,
          module: {
            metadata: { description, published, title },
          },
        }) => {
          const link = `/posts${slug}`

          return (
            <div className="container" key={slug}>
              <h3>
                <Link href={link}>{title}</Link>
              </h3>
              <div className="published">
                {formatDate({
                  date: new Date(published),
                  format: 'mmm dd, yyyy',
                })}
              </div>
              <div className="description">{description}</div>
            </div>
          )
        },
      )}

    <style jsx>{`
      .container {
        padding-bottom: 1.55rem;
      }

      h3 {
        margin: 0;
      }

      .published {
        font-size: 14px;
      }

      .description {
        font-size: 16px;
      }
    `}</style>
  </>
)
