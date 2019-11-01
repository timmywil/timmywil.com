import { css, Global } from '@emotion/core'
import { graphql, Link, PageRendererProps } from 'gatsby'
import React from 'react'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import { Query } from '../utils/graphql'
import { rhythm } from '../utils/typography'
import globalStyles from '../utils/globalStyles'

type Props = PageRendererProps & {
  data: Query
}

export default function Index({ data }: Props) {
  const siteTitle = data.site.siteMetadata.title

  return (
    <div css={styles.container}>
      <Global styles={globalStyles} />
      <SEO
        title={siteTitle}
        keywords={['blog', 'timmywil', 'Timmy Willison', 'javascript', 'react']}
      />
      <div css={styles.content}>
        <h1 css={styles.homepageHeader}>Hi!</h1>
        <h1 css={styles.homepageHeader}>I&rsquo;m Timmy Willison</h1>
        <h1 css={styles.homepageHeader}>
          Team Lead for{' '}
          <a css={styles.homepageLink} href="https://jquery.com">
            jQuery Core
          </a>
          ,
        </h1>
        <h1 css={styles.homepageHeader}>
          Lead Front-End Engineer at{' '}
          <a css={styles.homepageLink} href="https://pylon.com">
            Pylon AI
          </a>
          .
        </h1>
        <h2 css={styles.homepageHeader}>I love building things and making them work better.</h2>
        <h2 css={styles.homepageHeader}>
          I believe in{' '}
          <a css={styles.homepageLink} href="https://github.com/timmywil">
            open source
          </a>{' '}
          and a{' '}
          <a css={styles.homepageLink} href="https://www.freepress.net/issues/free-open-internet">
            free internet
          </a>
          .
        </h2>
        <h2 css={styles.homepageHeader}>
          Check out my{' '}
          <Link css={styles.homepageLink} to="/blog" title="Blog">
            blog
          </Link>
          .
        </h2>
      </div>
      <Footer />
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
    min-height: 800px;
    background-image: linear-gradient(50deg, var(--secondary-color), var(--primary-color));
    padding: ${rhythm(1)};
    padding-bottom: ${rhythm(4)};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  content: css`
    text-align: left;
  `,
  homepageHeader: css`
    color: white;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    margin-top: ${rhythm(1 / 2)};
    margin-bottom: ${rhythm(1 / 2)};
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
