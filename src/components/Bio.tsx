import { css } from '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import Image, { FixedObject } from 'gatsby-image'
import React from 'react'
import { Query } from '../utils/graphql'
import { rhythm } from '../utils/typography'

type QueryType = Query & { avatar: { childImageSharp: { fixed: FixedObject } } }

export default function Bio() {
  const { site, avatar } = useStaticQuery<QueryType>(bioQuery)
  const { author, social } = site.siteMetadata
  return (
    <div css={styles.container}>
      <Image
        fixed={avatar.childImageSharp.fixed}
        alt={author}
        css={styles.imageWrap}
        imgStyle={styles.image}
      />
      <p css={styles.writtenText}>
        Come at me: <a href={`https://twitter.com/${social.twitter}`}>{author}</a>.
      </p>
    </div>
  )
}

const styles = {
  container: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: ${rhythm(1)};
    margin-bottom: ${rhythm(1)};
  `,
  writtenText: css`
    margin: 0;
  `,
  imageWrap: css`
    margin-right: ${rhythm(1 / 2)};
    margin-bottom: 0;
    min-width: 50;
    border-radius: 100%;
  `,
  image: {
    borderRadius: '50%'
  }
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/me-headshot.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`
