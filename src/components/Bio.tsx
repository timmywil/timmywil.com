import { graphql, useStaticQuery } from 'gatsby'

import { Query } from '../utils/graphql'
import { StaticImage } from 'gatsby-plugin-image'
import { breakpoints } from '../styles/theme'
import { css } from '@emotion/react'
import { rhythm } from '../styles/typography'
import styled from '@emotion/styled'

const SVGIcon = styled.svg`
  width: 16px;
  height: 16px;
  display: block;
  line-height: 0;
  transform: scale(1.5);
`

export default function Bio() {
  const { site } = useStaticQuery<Query>(bioQuery)
  const { author, social } = site.siteMetadata
  return (
    <div className="flex-column flex-start-center" css={styles.container}>
      <StaticImage
        src="../../content/assets/me-headshot.jpg"
        alt={author}
        layout="fixed"
        width={100}
        height={100}
        imgStyle={styles.image}
        placeholder="none"
      />
      <div className="flex-row flex-center">
        Timmy Willison
        <a
          className="flex-center"
          css={styles.socialLink}
          href={`https://mastodon.world/${social.mastodon}`}
        >
          <SVGIcon
            dangerouslySetInnerHTML={{
              __html: '<use xlink:href="/minima-social-icons.svg#mastodon"></use>'
            }}
          />
        </a>
        <a
          className="flex-center"
          css={styles.socialLink}
          href={`https://twitter.com/${social.twitter}`}
        >
          <SVGIcon
            dangerouslySetInnerHTML={{
              __html: '<use xlink:href="/minima-social-icons.svg#twitter"></use>'
            }}
          />
        </a>
      </div>
    </div>
  )
}

const styles = {
  container: css`
    width: 100%;
    margin-top: ${rhythm(1)};
    gap: ${rhythm(1 / 2)};

    ${breakpoints.MIN_DEFAULT_MEDIA_QUERY} {
      flex-direction: row;
    }
  `,
  socialLink: css`
    text-shadow: none;
    color: white;
    background-image: none;
    width: 44px;
    height: 44px;
  `,
  image: {
    borderRadius: '100%'
  }
}

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
        social {
          mastodon
          twitter
        }
      }
    }
  }
`
