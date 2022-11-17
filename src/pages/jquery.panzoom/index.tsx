import { useEffect } from 'react'

export default function PanzoomRedirect() {
  useEffect(() => {
    window.location.href = 'https://timmywil.com/panzoom/'
  }, [])
  return <div />
}
