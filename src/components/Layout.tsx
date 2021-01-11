import React, { ReactNode } from 'react'

import Footer from './Footer'
import { Global } from '@emotion/react'
import Nav from './Nav'
import globalStyles from '../utils/globalStyles'
import { rhythm } from '../utils/typography'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(2)} ${rhythm(1)};

  @media (max-width: 450px) {
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
      </Wrapper>
      <Footer />
    </>
  )
}
