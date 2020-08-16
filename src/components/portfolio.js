import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import VisibilitySensor from "react-visibility-sensor"

import Proyect from "./project"
import VisibilityContext from "../context/componentVisibility/visibilityContext"

const Portfolio = () => {
  const visibilityContext = useContext(VisibilityContext)
  const tmp = typeof window !== `undefined` ? window.innerHeight / 2 : 0
  const heightviewport = parseInt(tmp, 10)
  const setCurrentComponent =
    visibilityContext && visibilityContext.setCurrentComponent
  const { data } = useStaticQuery(graphql`
    query {
      data: allFile(filter: { relativePath: { regex: "/page/" } }) {
        edges {
          node {
            name
            sharp: childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const images = []
  data.edges.forEach(el => {
    images[`${el.node.name}`] = el.node
  })

  const onChange = isVisible => {
    if (isVisible) setCurrentComponent("work")
  }

  const proyect = [
    {
      image: images.pageRestaurant,
      name: "Restaurant",
      description:
        "Es un proyecto propio que desarrolle hace poco, cuyo propósito fue practicar lo que había aprendido en un curso sobre React.js. Es una pagina de un restaurante el cual cuenta con menús, promociones, una Galería de imágenes y otras características más. El contenido del sitio puede ser modificado a traves de un cms.",
      tecnologies: ["Gatsby/React.js", "Strapi", "GraphQL", "MySQL"],
      links: {
        url: "https://resataurant.netlify.app/",
        github: "https://github.com/jorgecarloscontr/restaurant",
      },
    },
    {
      image: images.pageStrgym,
      name: "STRGYM",
      description:
        "Proyecto final para una materia en la universidad, Sistema capaz de realizar tareas administrativas de un gimnasio como el validar pagos, gestión de clientes y empleados, editar los planes de membresías, notificar cuando un cliente tenga que renovar su membresía, etc.",
      tecnologies: ["Laravel", "MySQL", "php/javascript", "Bootstrap"],
      links: {
        url: "http://powerful-refuge-97928.herokuapp.com/login",
        github: "https://github.com/jorgecarloscontr/strgym",
      },
    },
    {
      image: images.pageNatour,
      name: "Natours",
      description:
        "Proyecto desarrollado en un curso en línea en Udemy, el cual es una pagina en donde se ofrecen tours. Integra autentificación de usuarios vía jwt, envió de correos para restablecer contraseñas, pagos con Stripe, subida de archivos y otras características más. Faltan funciones por implementar en el frontend pero el backend esta completo.",
      tecnologies: ["Node.js", "MongoDB", "Express.js", "Stripe"],
      links: {
        url: "https://natours-dev-jorge.herokuapp.com/",
        github: "https://github.com/jorgecarloscontr/natours",
      },
    },
    {
      image: images.pageMerntask,
      name: "MernTask",
      description:
        "Página web desarrollada en curso en línea, el cual utiliza el stack MERN (MongoDB, Express.js, React.js y Node.js) para una agenda de proyectos. La página permite agregar, editar y eliminar proyectos y tareas. Además, integra autenticación de usuarios vía json web token.",
      tecnologies: ["Node.js", "MongoDB", "Express.js", "React,js"],
      links: {
        url: "https://optimistic-saha-81eee8.netlify.app/",
        github: "https://github.com/jorgecarloscontr/merntasks-server",
      },
    },
    {
      image: images.pageProductHunt,
      name: "Clon Product Hunt",
      description:
        "Clon de la página Producto Hunt sin todas las funcionalidades que esta ofrece. La página permite la autentificación de usuario, postear comentar y dar like a un producto (solo para usuarios logreados). Este proyecto lo realice en un curso en línea el cual utiliza Next.js y Firebase como serverless",
      tecnologies: ["Next.js", "Firebase"],
      links: {
        url: "https://product-hunt-c1cc1.web.app/",
        github: "https://github.com/jorgecarloscontr/product-hunt",
      },
    },
  ]

  return (
    <VisibilitySensor
      onChange={onChange}
      partialVisibility={true}
      offset={{ top: heightviewport, bottom: heightviewport - 1 }}
    >
      <section className="portfolio" id="work">
        <h2 className="u-mb-medium">Portfolio</h2>
        <Proyect data={proyect[0]} />
        <Proyect data={proyect[1]} />
        <Proyect data={proyect[2]} />
        <Proyect data={proyect[3]} />
        <Proyect data={proyect[4]} />
      </section>
    </VisibilitySensor>
  )
}

export default Portfolio
