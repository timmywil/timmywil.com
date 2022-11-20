import { Global, css } from '@emotion/react'
import { Link, PageRendererProps, graphql } from 'gatsby'

import Bio from '../components/Bio'
import { Query } from '../utils/graphql'
import SEO from '../components/SEO'
import { TopShape } from '../components/TopShape'
import { breakpoints } from '../styles/theme'
import globalStyles from '../styles/global.css'
import { rhythm } from '../styles/typography'

type Props = PageRendererProps & {
  data: Query
}

export const Head = ({ data }: Props) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <SEO
      title={siteTitle}
      keywords={['blog', 'timmywil', 'Timmy Willison', 'javascript', 'react']}
    />
  )
}

export default function Index() {
  return (
    <div className="flex-column flex-start-center" css={styles.container}>
      <Global styles={globalStyles} />

      <TopShape />

      <div className="flex-column flex-center-start" css={styles.content}>
        <h1 css={styles.homepageHeader}>Hi!</h1>
        <h1 css={styles.homepageHeader}>I&rsquo;m Timmy Willison</h1>
        <h2 css={styles.homepageHeader}>
          Team Lead for{' '}
          <a css={styles.homepageLink} href="https://jquery.com">
            jQuery Core
          </a>
          ,
        </h2>
        <h2 css={styles.homepageHeader}>
          Lead Front-End Engineer at{' '}
          <a css={styles.homepageLink} href="https://spokestack.io">
            Spokestack
          </a>
          .
        </h2>
        <h3 css={styles.homepageHeader}>I love building things and making them work better.</h3>
        <h3 css={styles.homepageHeader}>
          I believe in{' '}
          <a css={styles.homepageLink} href="https://github.com/timmywil">
            open source
          </a>{' '}
          and a{' '}
          <a css={styles.homepageLink} href="https://www.freepress.net/issues/free-open-internet">
            free internet
          </a>
          .
        </h3>
        <h2 css={styles.homepageHeader}>
          Check out my{' '}
          <Link css={styles.homepageLink} to="/blog" title="Blog">
            blog
          </Link>
          .
        </h2>
        <Bio />
      </div>
    </div>
  )
}

const styles = {
  container: css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    min-height: min-content;
    background-image: linear-gradient(50deg, var(--secondary-color), var(--primary-color));
  `,
  content: css`
    min-height: 100vh;
    padding: ${rhythm(3)} ${rhythm(1)} ${rhythm(1)};

    ${breakpoints.MIN_DEFAULT_MEDIA_QUERY} {
      padding-bottom: ${rhythm(3)};
    }
  `,
  homepageHeader: css`
    color: white;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    margin-top: 0;
    margin-bottom: ${rhythm(0.75)};
  `,
  homepageLink: css`
    color: white;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0) 1px,
      #fff 1px,
      #fff 2px,
      rgba(0, 0, 0, 0) 2px
    );

    &:visited {
      color: #eee;
    }

    &:hover {
      color: #ddd;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
      background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0) 1px,
        #ddd 1px,
        #ddd 2px,
        rgba(0, 0, 0, 0) 2px
      );
    }
  `
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
