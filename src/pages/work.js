import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const WorkPage = () => (
  <Layout>
    <Seo title="Work page" />
    <h1>Hello let's learn all Work me</h1>
    <ul
      className="work-container"
      style={{
        display: `grid`,
        gridTemplateColumns: `auto 1fr`,
        rowGap: `5em`,
        listStyle: `none`,
      }}
    >
      <li className="work-image" style={{ gridColumn: `1 / 2` }}>
        <div style={{ width: `200px` }}>
          <StaticImage
            src="../images/Dolby-io-logo-black.png"
            width={700}
            height={170}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="portrait"
            style={{
              marginBottom: `1.45rem`,
            }}
          />
        </div>
      </li>

      <li
        className="work-info"
        style={{
          gridColumn: `2 / 3`,
          border: `1px solid black`,
          borderRadius: `6px`,
          padding: `1em 1em`,
        }}
      >
        <h3>Work Title</h3>
        <h4>Company</h4>
        <p>Date . Location</p>
        <p>
          Work Description blurb Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nulla aliquet neque a erat consectetur aliquet.
          Phasellus luctus ante nec elementum viverra.{" "}
        </p>
        <ul>
          <li>thing 1</li>
          <li>thing 2</li>
          <li>thing 3</li>
        </ul>
      </li>
      <li className="work-image" style={{ gridColumn: `1 / 2` }}>
        <div style={{ width: `200px`, height: `400px` }}>
          <StaticImage
            src="../images/Logo_Laneone.png"
            width={5000}
            height={1070}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="portrait"
            style={{
              marginBottom: `1.45rem`,
            }}
          />
        </div>
      </li>
      <li
        className="work-info"
        style={{
          gridColumn: `2 / 3`,
          border: `1px solid black`,
          borderRadius: `6px`,
          padding: `1em 1em`,
        }}
      >
        <h3>Work Title</h3>
        <h4>Company</h4>
        <p>Date . Location</p>
        <p>
          Work Description blurb Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nulla aliquet neque a erat consectetur aliquet.
          Phasellus luctus ante nec elementum viverra.{" "}
        </p>
        <ul>
          <li>thing 1</li>
          <li>thing 2</li>
          <li>thing 3</li>
        </ul>
      </li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WorkPage
