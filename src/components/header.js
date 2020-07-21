import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import IconEmail from "../images/assets/email.svg"
import IconFacebook from "../images/assets/facebook.svg"
import IconGithub from "../images/assets/github.svg"
import IconDocument from "../images/assets/text-document.svg"
import IconDown from "../images/assets/chevron-thin-down.svg"

const Header = ({ title, image, description }) => {
  const { data } = useStaticQuery(graphql`
    query {
      data: file(relativePath: { eq: "header.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const multiBackground = [
    "linear-gradient(to right bottom, rgba(2, 12, 27,.7), rgba(2, 12, 27,.3))",
    "linear-gradient(to bottom, rgba(2, 12, 27,.6), rgba(2, 12, 27,.4))",
    data.sharp.fluid,
  ]

  return (
    <header className="u-mb-big header">
      <BackgroundImage
        tag="imageheader"
        fluid={multiBackground}
        fadeIn="soft"
        className="header__background"
      >
        <div className="header__title--welcome">Hello, my name is</div>
        <h1 className="header__title">Jorge Carlos Alvarado</h1>
        <div className="header__title--profession">a Software Enginner</div>
        <div className="header__social">
          <div className="header__social__link">
            <IconEmail className="header__social__svg" />
            Email
          </div>
          <div className="header__social__link">
            <IconFacebook className="header__social__svg" />
            Facebook
          </div>
          <div className="header__social__link">
            <IconGithub className="header__social__svg" />
            Github
          </div>
          <div className="header__social__link">
            <IconDocument className="header__social__svg" />
            Resume
          </div>
        </div>
        <Link className="link-icon-down">
          {" "}
          <IconDown className="icon-down" />
        </Link>
      </BackgroundImage>
    </header>
  )
}

export default Header
