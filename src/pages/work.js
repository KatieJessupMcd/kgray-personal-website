import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const WorkPage = () => (
  <Layout>
    <Seo title="Work page" />
    <h1>Hello let's learn all Work me</h1>
    <p>This is where my Work page info will go.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WorkPage
