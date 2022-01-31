import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { SocialIcon } from "react-social-icons"

export default function Footer() {
  const resume = useStaticQuery(graphql`
    {
      pdf: file(name: { eq: "Katie_Gray_Resume" }) {
        name
        extension
        publicURL
      }
    }
  `)

  return (
    <footer
      style={{
        height: `75px`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby {` `}</a>
      <SocialIcon
        url="https://github.com/KatieJessupMcd"
        bgColor="white"
        fgColor="black"
      />
      <SocialIcon
        url="https://www.linkedin.com/in/katie-asauq-gray/"
        bgColor="white"
        fgColor="black"
      />
      <a href={resume.pdf.publicURL}>
        <StaticImage
          src="../images/resume.jpeg"
          formats={["auto", "webp", "avif"]}
          alt="resume_icon"
          width={25}
          height={25}
          style={{ marginTop: `13px`, marginLeft: `11px` }}
        />
      </a>
    </footer>
  )
}
