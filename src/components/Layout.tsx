import Footer from './Footer'
import { Global } from '@emotion/react'
import Nav from './Nav'
import { ReactNode } from 'react'
import { breakpoints } from '../styles/theme'
import globalStyles from '../styles/global.css'
import { rhythm } from '../styles/typography'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(2)} ${rhythm(1)};

  ${breakpoints.DEFAULT_MEDIA_QUERY} {
    padding-bottom: ${rhythm(6)};
  }
`

interface Props {
  title: string
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Global styles={globalStyles} />
      <Wrapper>
        <Nav />
        <main>{children}</main>
        <Footer />
      </Wrapper>
    </>
  )
}
