import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section>
      <ul
        style={{
          display: `grid`,
          gridTemplateColumns: `4fr 2fr 2fr 2fr`,
          maxWidth: `400px`,
          listStyle: `none`,
        }}
      >
        <li
          style={{ gridRow: `1 / span 2`, gridColumn: `1 / span 2`, zIndex: 2 }}
        >
          <StaticImage
            src="../images/portrait-sketch.jpeg"
            width={270}
            height={270}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            style={{
              marginBottom: `1.45rem`,
              borderRadius: `180px`,
              boxShadow: `12px 12px 2px 1px rgba(0, 0, 255, .2)`,
            }}
          />
        </li>
        <li style={{ gridRow: `2 / span 4`, gridColumn: `2 / span 3` }}>
          <StaticImage
            src="../images/tea-sketch.jpeg"
            width={270}
            height={270}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem`, borderRadius: `180px` }}
          />
        </li>
      </ul>
    </section>
  </Layout>
)

export default IndexPage
