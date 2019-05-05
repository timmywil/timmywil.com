import Typography from 'typography'
import TwinPeaks from 'typography-theme-twin-peaks'

delete TwinPeaks.googleFonts

TwinPeaks.overrideThemeStyles = () => ({
  html: {
    height: '100%'
  },
  a: {
    color: '#2a7ae2',
    backgroundImage:
      'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, #2a7ae2 1px, #2a7ae2 2px, rgba(0, 0, 0, 0) 2px)'
  },
  'a:visited': {
    color: '#1756a9'
  },
  'a:hover': {
    color: '#111111'
  },
  '.gatsby-resp-image-link': {
    backgroundImage: 'none'
  },
  code: {
    backgroundColor: '#eee'
  },
  'pre[class*="language-"]': {
    marginBottom: '1.5rem !important'
  }
})

const typography = new Typography(TwinPeaks)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  // typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
