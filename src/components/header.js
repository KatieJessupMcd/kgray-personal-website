import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `0`,
      color: `rgb(84, 150, 182)`,
      fontFamily: `Roboto`,
    }}
  >
    {/* inline styling for header */}
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 690,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <nav className="nav-container">
        <div className="first-name">Katie</div>
        <div className="last-name">Gray</div>
        <div className="home-link">
          <Link
            to="/"
            style={{
              color: `rgb(84, 150, 182)`,
              textDecoration: `none`,
            }}
          >
            Home
          </Link>
        </div>
        <div className="about-link">
          <Link
            to="/about"
            style={{
              color: `rgb(84, 150, 182)`,
              textDecoration: `none`,
            }}
          >
            About
          </Link>
        </div>
        <div className="work-link">
          <Link
            to="/work"
            style={{
              color: `rgb(84, 150, 182)`,
              textDecoration: `none`,
            }}
          >
            Work
          </Link>
        </div>
        <div className="blog-link">
          <Link
            to="/blog"
            style={{
              color: `rgb(84, 150, 182)`,
              textDecoration: `none`,
            }}
          >
            Blog
          </Link>
        </div>
        <div className="horizontal-line"></div>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
