import { css } from '@emotion/react'
import { Link } from 'gatsby'
import { rhythm } from '../styles/typography'

export default function Nav() {
  return (
    <div className="flex-row flex-start-center" css={styles.nav}>
      <Link className="nav-link" css={styles.navLink} activeClassName="nav-link-active" to="/">
        Home
      </Link>
      <Link
        partiallyActive
        className="nav-link"
        css={styles.navLink}
        activeClassName="nav-link-active"
        to="/blog"
      >
        Blog
      </Link>
    </div>
  )
}

const styles = {
  nav: css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: ${rhythm(2)};
    padding-left: ${rhythm(1 / 2)};
    padding-right: ${rhythm(1 / 2)};
    border-bottom: 1px solid var(--main-border-color);
    background-image: linear-gradient(50deg, var(--secondary-color), var(--primary-color));
  `,
  navLink: css`
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: ${rhythm(1 / 2)};
    padding-right: ${rhythm(1 / 2)};
    font-family: 'Rosario, sans-serif';
    text-shadow: none;
    background-image: none;
    transition: all 0.2s cubic-bezier(0.28, 0.32, 0.29, 0.79);

    &,
    &:hover,
    &:visited {
      color: white;
      text-decoration: none;
      background-image: none;
      text-shadow: none;
    }
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      right: 0;
      width: 0;
      height: 0;
      transition:
        width 0.1s ease-in-out,
        height 0.1s ease-in-out,
        left 0.1s ease-in-out;
      background-color: white;
    }
    &.nav-link-active:after,
    &:hover:after {
      left: 0;
      height: 4px;
      width: 100%;
    }
  `
}
