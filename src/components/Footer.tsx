import { graphql, useStaticQuery } from 'gatsby'

import SocialLinks from './SocialLinks'
import { breakpoints } from '../styles/theme'
import { rhythm } from '../styles/typography'
import styled from '@emotion/styled'

const footerQuery = graphql`
  query footerQuery {
    site {
      siteMetadata {
        author
        social {
          twitter
          mastodon
          github
          linkedin
        }
      }
    }
  }
`

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${rhythm(2)};
  padding-left: ${rhythm(1)};
  padding-right: ${rhythm(1)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--main-border-color);
  background-color: var(--main-background);
  color: var(--main-color);

  ${breakpoints.DEFAULT_MEDIA_QUERY} {
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    height: ${rhythm(4)};
  }
`

const Copyright = styled.div`
  font-size: 0.8rem;
  text-align: right;
`

export default function Footer() {
  const { site } = useStaticQuery(footerQuery)
  const { author, social } = site.siteMetadata
  return (
    <Container>
      <SocialLinks social={social} />
      <Copyright>
        &copy; {new Date().getFullYear()} {author}
      </Copyright>
    </Container>
  )
}
