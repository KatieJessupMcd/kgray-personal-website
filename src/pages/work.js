import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const WorkPage = () => (
  <Layout>
    <Seo title="Work page" />
    <h1>Work Experience</h1>
    <ul
      className="work-container"
      style={{
        display: `grid`,
        gridTemplateColumns: `auto`,
        rowGap: `5em`,
        listStyle: `none`,
        marginLeft: `0px`,
      }}
    >
      <li
        className="work-info"
        style={{
          gridColumn: `1 / 2`,
        }}
      >
        <h3>
          Software Engineer, Developer Programs @{" "}
          <a href="https://dolby.io/" style={{ color: `#2979D9` }}>
            Dolby.io
          </a>
        </h3>
        <p>August 2020 - Present | San Francisco, CA</p>
        <ul>
          <li>
            Build web applications using React and JavaScript demonstrating use
            of Dolby.io’s APIs, integrate third-party APIs, develop code to
            onboard developers
          </li>
          <li>
            Develop internal tools and infrastructure using Node.js and Python,
            and AWS Services
          </li>
          <li>
            Customize functionality of documentation using JavaScript, HTML and
            CSS
          </li>
          <li>
            Enhance developer experience by integrating third party search API
            Algolia into documentation
          </li>
        </ul>
      </li>
      <li
        className="work-info"
        style={{
          gridColumn: `1 / 2`,
        }}
      >
        <h3>
          Software Engineer @{" "}
          <a href="https://www.laneone.com/" style={{ color: `#2979D9` }}>
            LaneOne
          </a>
        </h3>
        <p>April 2019 - May 2020 | San Francisco, CA</p>
        <ul>
          <li>
            Developed front-end and back-end features for both consumer-facing
            web application and internal CMS using Ruby, Ruby on Rails,
            JavaScript, PostgreSQL, HTML5, CSS and Bootstrap
          </li>
          <li>
            End to end ownership of features such as integrating a third-party
            API to allow users to purchase trip insurance
          </li>
          <li>Implemented test driven development (TDD) using Rspec</li>
        </ul>
      </li>

      <li
        className="work-info"
        style={{
          gridColumn: `1 / 2`,
        }}
      >
        <h3>
          Software Engineer Intern @{" "}
          <a
            href="https://www.crunchbase.com/organization/therelishmediagroup"
            style={{ color: `#2979D9` }}
          >
            The Relish
          </a>
        </h3>
        <p>January 2019 - February 2019 | San Francisco, CA</p>
        <ul>
          <li>
            Integrated D3 with React and Redux to create data visualizations
            showing number of new users
          </li>
        </ul>
      </li>
      <li
        className="work-info"
        style={{
          gridColumn: `1 / 2`,
        }}
      >
        <h3>Music Teacher and Band Director</h3>
        <p>August 2015 - May 2018 | San Francisco, CA</p>
        <ul>
          <li>
            Taught general music and band classes grades TK-8, developing a
            school band program from the ground up
          </li>
        </ul>
      </li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WorkPage
