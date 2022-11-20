import { Link, PageRendererProps, graphql } from 'gatsby'

import Layout from '../components/Layout'
import { Query } from '../utils/graphql'
import SEO from '../components/SEO'
import { rhythm } from '../styles/typography'

type Props = PageRendererProps & {
  data: Query
}

export const Head = () => (
  <SEO title="Blog" keywords={['blog', 'timmywil', 'Timmy Willison', 'javascript', 'react']} />
)

export default function Blog({ data }: Props) {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout title={siteTitle}>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <div key={node.fields.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4)
              }}
            >
              <Link to={node.fields.slug}>{title}</Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt
              }}
            />
          </div>
        )
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
