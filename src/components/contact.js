import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import VisibilitySensor from "react-visibility-sensor"

import VisibilityContext from "../context/componentVisibility/visibilityContext"

const Contact = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "laptop-work.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const visibilityContext = useContext(VisibilityContext)
  const tmp = typeof window !== `undefined` ? window.innerHeight / 2 : 0
  const heightviewport = parseInt(tmp, 10)
  const setCurrentComponent =
    visibilityContext && visibilityContext.setCurrentComponent
  const currentComponent =
    visibilityContext && visibilityContext.currentComponent

  const onChange = isVisible => {
    if (isVisible) setCurrentComponent("contact")
  }

  const multiBackground = [
    "linear-gradient(105deg, rgba(0,0,0, .8) 50%, transparent 50%)",
    image.sharp.fluid,
  ]
  return (
    <VisibilitySensor
      onChange={onChange}
      partialVisibility={true}
      offset={{ top: heightviewport, bottom: heightviewport - 1 }}
    >
      <section className="contact" id="contact">
        <BackgroundImage
          tag="imageheader"
          fluid={multiBackground}
          fadeIn="soft"
          className="contact__content"
        >
          <div className="contact__form">
            <form
              className="form"
              name="contactMe"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contactMe" />
              <div className="u-mb-medium">
                <h2 className="heading-secondary">Contact</h2>
              </div>
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Name"
                  id="name"
                  required
                  name="name"
                />
                <label htmlFor="name" className="form__label">
                  Name
                </label>
              </div>
              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email"
                  id="email"
                  required
                  name="email"
                />
                <label htmlFor="email" className="form__label">
                  Email
                </label>
              </div>

              <div className="form__group">
                <textarea
                  className="form__input form__textarea"
                  placeholder="Comments"
                  id="comment"
                  required
                  name="comment"
                  rows="3"
                />
                <label htmlFor="email" className="form__label">
                  Comments
                </label>
              </div>

              <div className="form__group">
                <button type="submit" className="btn btn--green">
                  Send message &rarr;
                </button>
              </div>
            </form>
          </div>
        </BackgroundImage>
      </section>
    </VisibilitySensor>
  )
}

export default Contact
