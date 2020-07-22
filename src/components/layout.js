import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

import BackgroundIcon from "./backgroundIcon"
import Navigation from "./navigation"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <BackgroundIcon />
      <Navigation />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
