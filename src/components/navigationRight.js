import React, { useContext } from "react"
import { Link } from "gatsby"

import VisibilityContext from "../context/componentVisibility/visibilityContext"

const NavigationRight = () => {
  const visibilityContext = useContext(VisibilityContext)

  const currentComponent =
    visibilityContext && visibilityContext.currentComponent

  return (
    <div
      className={`navigation-right ${
        currentComponent === "header" ? "navigation-right--hide" : ""
      } `}
    >
      <Link
        to="#header"
        className={`navigation-right__item ${
          currentComponent === "header" && "navigation-right__item--current"
        }`}
      >
        <span className="navigation-right__dropdown">Intro</span>
      </Link>
      <Link
        to="#about"
        className={`navigation-right__item ${
          currentComponent === "about" && "navigation-right__item--current"
        }`}
      >
        <span className="navigation-right__dropdown">About</span>
      </Link>
      <Link
        to="#skills"
        className={`navigation-right__item ${
          currentComponent === "skills" && "navigation-right__item--current"
        }`}
      >
        <span className="navigation-right__dropdown">Skills</span>
      </Link>
      <Link
        to="#work"
        className={`navigation-right__item ${
          currentComponent === "work" && "navigation-right__item--current"
        }`}
      >
        <span className="navigation-right__dropdown">Portfolio</span>
      </Link>
      <Link
        to="#contact"
        className={`navigation-right__item ${
          currentComponent === "contact" && "navigation-right__item--current"
        }`}
      >
        <span className="navigation-right__dropdown">Contact</span>
      </Link>
    </div>
  )
}

export default NavigationRight
