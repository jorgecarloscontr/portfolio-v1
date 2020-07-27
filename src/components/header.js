import React, { useContext } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import VisibilitySensor from "react-visibility-sensor"

import IconEmail from "../images/assets/email.svg"
import IconGithub from "../images/assets/github.svg"
import IconDocument from "../images/assets/text-document.svg"
import IconDown from "../images/assets/chevron-thin-down.svg"
//context
import VisibilityContext from "../context/componentVisibility/visibilityContext"

const Header = ({ title, image, description }) => {
  const visibilityContext = useContext(VisibilityContext)
  const setCurrentComponent =
    visibilityContext && visibilityContext.setCurrentComponent

  const startAnimation = visibilityContext && visibilityContext.startAnimation

  const tmp = typeof window !== `undefined` ? window.innerHeight / 2 : 0
  const heightviewport = parseInt(tmp)

  const onChange = isVisible => {
    if (isVisible) setCurrentComponent("header")
  }
  const { data, file } = useStaticQuery(graphql`
    query {
      data: file(relativePath: { eq: "header.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      file: file(relativePath: { eq: "Jorge Carlos Alvarado Contreras.pdf" }) {
        publicURL
      }
    }
  `)

  const multiBackground = [
    "linear-gradient(to right bottom, rgba(2, 12, 27,.7), rgba(2, 12, 27,.3))",
    "linear-gradient(to bottom, rgba(2, 12, 27,.6), rgba(2, 12, 27,.4))",
    data.sharp.fluid,
  ]

  return (
    <VisibilitySensor
      onChange={onChange}
      partialVisibility={true}
      offset={{ top: heightviewport, bottom: heightviewport - 1 }}
    >
      <header className="u-mb-big header" id="header">
        <BackgroundImage
          tag="imageheader"
          fluid={multiBackground}
          fadeIn="soft"
          className="header__background"
        >
          <div
            className={`header__title--welcome ${
              startAnimation ? "animation" : ""
            }`}
          >
            Hello, my name is
          </div>
          <h1 className={`header__title ${startAnimation ? "animation" : ""}`}>
            Jorge Carlos Alvarado
          </h1>
          <div
            className={`header__title--profession ${
              startAnimation ? "animation" : ""
            }`}
          >
            a Software Enginner
          </div>
          <div className="header__social">
            <a
              href="mailto:jorge_carloscontr@hotmail.com"
              className={`header__social__link header__social__link--1 ${
                startAnimation ? "animation" : ""
              }`}
              target="_blank"
            >
              <IconEmail className="header__social__svg" />
              Email
            </a>
            {/* <a
              className={`header__social__link header__social__link--2 ${
                startAnimation ? "animation" : ""
              }`}
            >
              <IconFacebook className="header__social__svg" />
              Facebook
            </a> */}
            <a
              className={`header__social__link header__social__link--2 ${
                startAnimation ? "animation" : ""
              }`}
              href="https://github.com/jorgecarloscontr"
              target="_blank"
            >
              <IconGithub className="header__social__svg" />
              Github
            </a>
            <a
              target="_blank"
              href={file.publicURL}
              download
              className={`header__social__link header__social__link--3 ${
                startAnimation ? "animation" : ""
              }`}
            >
              <IconDocument className="header__social__svg" />
              Resume
            </a>
          </div>
          <Link className="link-icon-down" to="#about">
            {" "}
            <IconDown className="icon-down" />
          </Link>
        </BackgroundImage>
      </header>
    </VisibilitySensor>
  )
}

export default Header
