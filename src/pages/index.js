import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section>
      <h1>Hello, I'm</h1>
      <h2 style={{ fontSize: `80px` }}>Katie Gray</h2>
      <p style={{ maxWidth: `750px` }}>
        I am a full stack software engineer based in Bay Area. Currently I'm
        working at{" "}
        <a href="https://dolby.io/" style={{ color: `#2979D9` }}>
          Dolby.io
        </a>{" "}
        as a software engineer in developer programs.{" "}
      </p>
    </section>
  </Layout>
)

export default IndexPage
