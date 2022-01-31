import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `0`,
      color: `inherit`,
      fontFamily: `Roboto`,
    }}
  >
    {/* inline styling for header */}
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <nav className="nav-container">
        <div className="first-name">
          <StaticImage
            src="../images/tea-sketch.jpeg"
            width={50}
            height={50}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="coffee"
            style={{
              marginLeft: `1px`,
              borderRadius: `180px`,
              border: `solid gray 1px`,
              zIndex: `5`,
            }}
          />
        </div>
        <div className="home-link">
          <Link
            to="/"
            style={{
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
