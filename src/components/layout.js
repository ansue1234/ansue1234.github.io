import React from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(0)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link
        to={`/contents/Contact/`}
        css={css`
          float: right;
          margin-right: 20px
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
      {children}
    </div>
  )
}