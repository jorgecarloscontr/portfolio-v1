import React from "react"
import Img from "gatsby-image"
import IconLink from "../images/assets/link.svg"
import IconGithub from "../images/assets/github.svg"

const Project = ({ data }) => {
  const { image, description, name, tecnologies, links } = data

  return (
    <div className="project">
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
        <div className="project__div-svg">
          {links.github && (
            <a href={`${links.github}`} target="_blank">
              <IconGithub className="project__link-svg" />
            </a>
          )}
          {links.url && (
            <a href={`${links.url}`} target="_blank">
              <IconLink className="project__link-svg" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Project
