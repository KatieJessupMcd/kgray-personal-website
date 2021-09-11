import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="About page" />
    <h1>Hello let's learn all about me</h1>
    <p>This is where my about page info will go.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
