import React, { useState } from "react"

import "../sass/pages/_home.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Skills from "../components/Skills"
import Portfolio from "../components/portfolio"
import Contact from "../components/contact"
// contexts
import Visibillity from "../context/componentVisibility/visibilityState"

const IndexPage = () => {
  return (
    <Visibillity>
      <Layout>
        <SEO title="Home" />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </Layout>
    </Visibillity>
  )
}

export default IndexPage
