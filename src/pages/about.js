import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="About page" />
    <h1>About Me </h1>
    <section>
      <p style={{ maxWidth: `750px` }}>
        I found my way into software engineering through my love of problem
        solving, the chance to learn new things every day, and playing many
        hours of video games as a kid (and now, let's be honest). These skills
        also served me well in my former career as a music teacher (maybe not
        the video game part).
      </p>
      <p>Here are a few technologies I've worked with recently:</p>
      <div
        style={{
          display: `grid`,
          gridTemplateColumns: `1fr 1fr`,
          maxWidth: `400px`,
        }}
      >
        <ul style={{ gridArea: `1 / 1 / 2 / 2` }}>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
        <ul style={{ gridArea: `1 / 2 / 2 / 3` }}>
          <li>HTML / CSS</li>
          <li>AWS</li>
          <li>Ruby / Ruby on Rails</li>
        </ul>
      </div>
    </section>
    <h2>More about me</h2>
    <section>
      <h5>My favorite Gameboy Advanced Game:</h5>
      <p>Golden Sun - The Lost Age</p>
      <h5>My favorite food:</h5>
      <p>Popcorn</p>
      <h5>What I like to listen to while I code:</h5>
      <p>
        Usually video game{" "}
        <a
          href="https://www.youtube.com/watch?v=GdzrrWA8e7A"
          style={{ color: `#2979D9` }}
        >
          music
        </a>
      </p>
    </section>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
