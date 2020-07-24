import React, { useContext } from "react"
import VisibilitySensor from "react-visibility-sensor"

import VisibilityContext from "../context/componentVisibility/visibilityContext"

const About = () => {
  const visibilityContext = useContext(VisibilityContext)
  const { currentComponent, setCurrentComponent } = visibilityContext

  const heightviewport = parseInt((window.innerHeight || 0) / 2)

  const onChange = isVisible => {
    if (isVisible) setCurrentComponent("about")
  }
  return (
    <VisibilitySensor
      onChange={onChange}
      partialVisibility={true}
      offset={{ top: heightviewport, bottom: heightviewport - 1 }}
    >
      <section className="about-me u-mt-medium" id="about">
        <h2>About me</h2>

        <div className="about-me__content">
          <div className="about-me__description">
            <p>
              Hola mi nombre es Jorge Carlos, soy recién egresado de la
              licenciatura de ingeniería en computación.
            </p>
            <p>
              A lo largo de mi formación académica he empleado diferentes
              tecnologías y lenguajes de programación enfocados al desarrollo de
              software. La programación siempre ha sido uno de mis hobbies
              favoritos, me gusta siempre estar en constante aprendizaje, es por
              ello por lo que actualmente dedico gran parte de mi tiempo en
              cursos y en el desarrollo de proyectos personales.
            </p>
          </div>
          <div className="about-me__image">IMAGE</div>
        </div>
      </section>
    </VisibilitySensor>
  )
}

export default About
