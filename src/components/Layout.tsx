import styled from '@emotion/styled'
import React, { ReactNode } from 'react'
import { rhythm } from '../utils/typography'
import Footer from './Footer'
import Nav from './Nav'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(2)} ${rhythm(3 / 4)};
`

interface Props {
  title: string
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Wrapper>
        <Nav />
        <main>{children}</main>
      </Wrapper>
      <Footer />
    </>
  )
}
