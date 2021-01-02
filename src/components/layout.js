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
        to={`/contact/`}
        css={css`
          float: right;
          margin-right: 20px
        `}
      >
        Contact
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
          margin-right: 20px
        `}
      >
        About
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