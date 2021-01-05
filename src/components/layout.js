import React from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import Scroll from './scrollButton'
import Logo from './contactIcons'




export default function Layout({ children }) {
  return (
    <div>
      <Scroll direction='Up'/>
      <Scroll direction='Down'/>
      <Logo/>
    <div
      css={css`
        margin: 0 auto;
        max-width: 800px;
        padding: ${rhythm(0)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <div>
        <Link
          to={`/contents/Contact/`}
          css={css`
            float: right;
          `}
        >
          Contact
        </Link>
        <Link
          to={`/contents/About/`}
          css={css`
            float: right;
            margin-right: 20px
          `}
        >
          About
        </Link>
        <Link
          to={`/projects/`}
          css={css`
            float: right;
            margin-right: 20px
          `}
        >
          Projects
        </Link>
        <Link
          to={`/`}
          css={css`
            float: right;
            margin-right: 20px;
          `}
        >
          Home
        </Link>
      </div>
      {children}
    </div>
    </div>
  )
}