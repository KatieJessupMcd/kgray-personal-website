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
        gridTemplateColumns: `repeat(2, 1fr)`,
        rowGap: `5em`,
        listStyle: `none`,
      }}
    >
      <li className="work-image" style={{ gridColumn: `1 / 2` }}>
        <div style={{ position: `relative`, width: `270px`, height: `270px` }}>
          <StaticImage
            src="../320_Dolby_logo_2019.svg.png"
            width={270}
            height={270}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="portrait"
            style={{
              position: `absolute`,
              top: `0`,
              left: `0`,
              width: `100%`,
              height: `100%`,
              marginBottom: `1.45rem`,
              borderRadius: `180px`,
              boxShadow: `12px 12px 2px 1px rgba(0, 0, 255, .2)`,
            }}
          />
        </div>
      </li>

      <li className="work-info" style={{ gridColumn: `2 / 3` }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet
        neque a erat consectetur aliquet. Phasellus luctus ante nec elementum
        viverra. Sed mollis maximus dolor, eget eleifend enim lacinia vel. Sed
        at malesuada velit, pulvinar placerat nisl. Aenean quis urna lacinia,
        bibendum orci in, pharetra mauris. Cras sodales vehicula odio rhoncus
        ullamcorper. Morbi rutrum tortor non nisi finibus, ut suscipit magna
        laoreet.
      </li>
      <li className="work-info" style={{ gridColumn: `1 / 2` }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet
        neque a erat consectetur aliquet. Phasellus luctus ante nec elementum
        viverra. Sed mollis maximus dolor, eget eleifend enim lacinia vel. Sed
        at malesuada velit, pulvinar placerat nisl. Aenean quis urna lacinia,
        bibendum orci in, pharetra mauris. Cras sodales vehicula odio rhoncus
        ullamcorper. Morbi rutrum tortor non nisi finibus, ut suscipit magna
        laoreet.
      </li>
      <li className="work-image" style={{ gridColumn: `2 / 3` }}>
        <StaticImage
          src="../images/portrait-sketch.jpeg"
          width={270}
          height={270}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="portrait"
          style={{
            marginBottom: `1.45rem`,
            borderRadius: `180px`,
            boxShadow: `12px 12px 2px 1px rgba(0, 0, 255, .2)`,
          }}
        />
      </li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WorkPage
