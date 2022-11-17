import { PageRendererProps, graphql } from 'gatsby'

import Layout from '../components/Layout'
import { Query } from '../utils/graphql'
import SEO from '../components/SEO'

type Props = PageRendererProps & {
  data: Query
}

export default function NotFoundPage({ data }: Props) {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>404</h1>
      <h3>Page not found :(</h3>
      <p>The requested page could not be found.</p>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
