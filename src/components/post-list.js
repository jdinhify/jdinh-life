import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Box } from 'theme-ui'

export const PostList = ({ limit }) => {
  const data = useStaticQuery(graphql`
    query GetPostList {
      allMdx(
        sort: { fields: frontmatter___published, order: DESC }
        filter: { frontmatter: { type: { eq: "post" } } }
      ) {
        nodes {
          id
          frontmatter {
            description
            published(formatString: "MMM DD, YYYY")
            title
          }
          parent {
            ... on File {
              relativePath
              ext
            }
          }
        }
      }
    }
  `)

  return (
    <>
      {data.allMdx.nodes
        .slice(0, limit)
        .map(
          ({
            id,
            frontmatter: { description, published, title },
            parent: { relativePath, ext },
          }) => {
            const link = `${relativePath.replace(new RegExp(`${ext}$`), '')}`
            return (
              <Box key={id} sx={{ paddingBottom: '1.5rem' }}>
                <h3>
                  <Link to={link}>{title}</Link>
                </h3>
                <Box sx={{ fontSize: '16px' }}>{published}</Box>
                <Box sx={{ fontSize: '16px' }}>{description}</Box>
              </Box>
            )
          },
        )}
    </>
  )
}
