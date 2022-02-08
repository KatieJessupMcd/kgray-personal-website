import * as React from "react"
import { Link } from "gatsby"

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
            Develop{" "}
            <a
              style={{ color: `#2979D9` }}
              href="https://docs.dolby.io/communications-apis/docs/commandservice-javascript-web-example"
            >
              demo applications
            </a>{" "}
            using React, JavaScript, HTML and CSS to increase developer adoption
            of Dolby.io Communication APIs
          </li>

          <li>
            Build customized developer{" "}
            <a style={{ color: `#2979D9` }} href="https://docs.dolby.io/">
              documentation experience
            </a>{" "}
            using JavaScript, HTML and CSS that is viewed and used by 1000+
            developers per week
          </li>

          <li>
            Planned and implemented custom search and filtering functionality
            using Algolia API that resulted in a{" "}
            <a
              style={{ color: `#2979D9` }}
              href="https://docs.dolby.io/communications-apis/page/gallery"
            >
              project gallery
            </a>{" "}
            with 60+ searches per week
          </li>

          <li>
            Develop internal tools and infrastructure using Node.js and Amazon
            Web Services (AWS){" "}
          </li>

          <li>
            Led meetings to define and gather documentation landing page
            requirements and then utilized those specifications to build and
            deploy{" "}
            <a style={{ color: `#2979D9` }} href="https://docs.dolby.io/">
              landing page
            </a>{" "}
            within a span of three weeks
          </li>

          <li>
            Wrote{" "}
            <a
              style={{ color: `#2979D9` }}
              href="https://dolby.io/blog/generate-access-tokens-using-aws-services"
            >
              blog
            </a>{" "}
            demonstrating how to build an authentication server using AWS{" "}
          </li>

          <li>
            Lead the Dolby Indigenous Employee group, moderating a company-wide
            event attended by 70+ employees
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
