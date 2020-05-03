import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Box, Heading } from 'theme-ui'
import { heading } from '../gatsby-plugin-theme-ui/styles'

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
              <Box key={id} sx={{ paddingBottom: '1.55rem' }}>
                <Heading as="h3" sx={{ ...heading, margin: 0 }}>
                  <Link to={link}>{title}</Link>
                </Heading>
                <Box sx={{ fontSize: '14px' }}>{published}</Box>
                <Box sx={{ fontSize: '16px' }}>{description}</Box>
              </Box>
            )
          },
        )}
    </>
  )
}
