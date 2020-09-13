import { Link } from "gatsby"
// @flow

import React from "react"

type headerType = {
  siteTitle: string,
}
const Header = ({ siteTitle }: headerType) => (
  <header
    style={{
      background: `teal`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `whitesmoke`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h5>| Software Engineer</h5>
    </div>
  </header>
)

export default Header
