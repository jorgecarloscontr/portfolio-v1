import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Proyect from "./project"

const Portfolio = () => {
  const { data } = useStaticQuery(graphql`
    query {
      data: allFile(filter: { relativePath: { regex: "/page/" } }) {
        edges {
          node {
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

  const proyect = [
    {
      image: data.edges[0].node,
      name: "Restaurant",
      description:
        "Mauris tincidunt at ligula in venenatis. Integer sed dui ultricies, porttitor ipsum sed, ornare nunc. Curabitur semper tellus non libero volutpat condimentum. Etiam dolor nibh, venenatis ut mauris nec, pellentesque tincidunt massa. Cras sed libero eu lorem vehicula ornare vehicula quis dui. Donec bibendum feugiat venenatis. Ut dignissim ut urna et lobortis. Nullam consectetur sapien a turpis tempus ultrices.",
      tecnologies: ["Gatsby/React.js", "Strapi", "GraphQL", "MySQL"],
      links: {
        url: "https://resataurant.netlify.app/",
        github: "https://resataurant.netlify.app/",
      },
    },
    {
      image: data.edges[1].node,
      name: "STRGYM",
      description:
        "Proin lectus lectus, malesuada ac vestibulum at, auctor quis mi. Etiam sit amet pretium dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur malesuada augue vitae ex facilisis, sit amet convallis magna fringilla.",
      tecnologies: ["Laravel", "MySQL", "php/javascript", "Bootstrap"],
      links: {
        url: "https://resataurant.netlify.app/",
        github: "https://resataurant.netlify.app/",
      },
    },
  ]

  return (
    <section className="portfolio">
      <h2 className="u-mt-big u-mb-medium">Portfolio</h2>
      <Proyect data={proyect[0]} />
      <Proyect data={proyect[1]} />
    </section>
  )
}

export default Portfolio
