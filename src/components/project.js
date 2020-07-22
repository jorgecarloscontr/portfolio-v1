import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import IconLink from "../images/assets/link.svg"
import IconGithub from "../images/assets/github.svg"

const Project = ({ data }) => {
  const { image, description, name, tecnologies, links } = data

  return (
    <div className="project u-mb-big">
      <div className="project__image">
        <Img fluid={image.sharp.fluid} />
      </div>
      <div className="project__details">
        <h3>{name}</h3>
        <p>{description}</p>
        <ul className="project__tecnologies">
          {tecnologies.map(item => (
            <li key={`${name}-${item}`} className="project__tecnologies__item">
              {item}
            </li>
          ))}
        </ul>
        <div>
          {links.github && <IconGithub className="project__link-svg" />}
          {links.url && <IconLink className="project__link-svg" />}
        </div>
      </div>
    </div>
  )
}

export default Project
