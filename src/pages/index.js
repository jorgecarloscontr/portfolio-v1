import React from "react"

import "../sass/pages/_home.scss"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import About from "../components/about"
import Skills from "../components/Skills"
import Portfolio from "../components/portfolio"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
    <Skills />
    <Portfolio />
    <h2>Hi people</h2>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
