import React, { useContext, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import VisibilitySensor from "react-visibility-sensor"

import IconDevelop from "../images/assets/develop.svg"
import IconTools from "../images/assets/tools.svg"
import IconTools2 from "../images/assets/tools1.svg"
import IconDatabase from "../images/assets/database.svg"
import IconLeft from "../images/assets/chevron-left.svg"
//context
import VisibilityContext from "../context/componentVisibility/visibilityContext"

const Skills = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "laptop.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const multiBackground = [
    "linear-gradient(45deg, rgba(0,0,0,.8), rgba(0,0,0,.5))",
    image.sharp.fluid,
  ]

  const visibilityContext = useContext(VisibilityContext)
  const setCurrentComponent =
    visibilityContext && visibilityContext.setCurrentComponent
  const [animationSkills, setAnimationSkills] = useState(false)

  const tmp = typeof window !== `undefined` ? window.innerHeight / 2 : 0
  const heightviewport = parseInt(tmp)

  const onChange = isVisible => {
    if (isVisible) {
      setCurrentComponent("skills")
    }
  }

  const setVisibleSkills = isVisible => {
    if (isVisible) {
      setAnimationSkills(true)
    }
  }

  return (
    <VisibilitySensor
      onChange={onChange}
      partialVisibility={true}
      offset={{ top: heightviewport, bottom: heightviewport - 1 }}
    >
      <VisibilitySensor
        onChange={setVisibleSkills}
        partialVisibility={true}
        minTopValue={200}
        active={!animationSkills}
      >
        <section
          className={`skills ${animationSkills ? "animation" : ""}`}
          id="skills"
        >
          <BackgroundImage
            tag="imageheader"
            fluid={multiBackground}
            fadeIn="soft"
            className="skills__background"
          >
            <div className="skills__container">
              <h2 className="u-mt-big u-mb-medium">Skills</h2>
              <div className="skills__content">
                <div className="skills__category skills__frameworks">
                  <div className="skills__category__title">
                    <IconTools className="skills__icon" />
                    Frameworks
                  </div>
                  <div className="skills__items">
                    <div className="skills__item">Laravel</div>
                    <div className="skills__item">ReactJs</div>
                    <div className="skills__item">Nodejs</div>
                    <div className="skills__item">Gatsby</div>
                    <div className="skills__item">Bootstrap</div>
                  </div>
                </div>
                <div className="skills__category skills__languages">
                  <div className="skills__category__title">
                    <IconDevelop className="skills__icon" />
                    Languages
                  </div>
                  <div className="skills__items">
                    <div className="skills__item">Python</div>
                    <div className="skills__item">JavaScript</div>
                    <div className="skills__item">PHP</div>
                    <div className="skills__item">Java</div>
                  </div>
                </div>

                <div className="skills__category skills__tools">
                  <div className="skills__category__title">
                    <IconTools2 className="skills__icon" />
                    Tools
                  </div>
                  <ul className="skills__tools">
                    <li className="skills__tool">
                      <IconLeft className="skills__tool__svg" />
                      Git & Github
                    </li>
                    <li className="skills__tool">
                      <IconLeft className="skills__tool__svg" />
                      Postman
                    </li>
                    <li className="skills__tool">
                      <IconLeft className="skills__tool__svg" />
                      Jira
                    </li>
                    <li className="skills__tool">
                      <IconLeft className="skills__tool__svg" />
                      Slack
                    </li>
                    <li className="skills__tool">
                      <IconLeft className="skills__tool__svg" />
                      VsCode
                    </li>
                  </ul>
                </div>
                <div className="skills__category skills__database">
                  <div className="skills__category__title">
                    <IconDatabase className="skills__icon" />
                    Databases
                  </div>
                  <ul className="skills__tools">
                    <li className="skills__tool">
                      <IconLeft className="skills__tool__svg" />
                      MongoDB
                    </li>
                    <li className="skills__tool">
                      <IconLeft className="skills__tool__svg" />
                      MySQL
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </BackgroundImage>
        </section>
      </VisibilitySensor>
    </VisibilitySensor>
  )
}

export default Skills
