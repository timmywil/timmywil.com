import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { rhythm } from '../utils/typography'
import SocialLinks from './SocialLinks'

const footerQuery = graphql`
  query footerQuery {
    site {
      siteMetadata {
        author
        social {
          twitter
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
  border-top: 1px solid #eeeeee;
  background-color: white;

  @media (max-width: 450px) {
    flex-direction: column;
    padding-top: ${rhythm(1)};
    padding-bottom: ${rhythm(1)};
    height: ${rhythm(5)};
  }
`

const Copyright = styled.div`
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
