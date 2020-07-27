import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import IconEmail from "../images/assets/email.svg"
import IconFacebook from "../images/assets/facebook.svg"
import IconGithub from "../images/assets/github.svg"
import IconDocument from "../images/assets/text-document.svg"

const Footer = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "Jorge Carlos Alvarado Contreras.pdf" }) {
        publicURL
      }
    }
  `)

  return (
    <footer className="footer">
      <div className="footer__social">
        <a
          href="mailto:jorge_carloscontr@hotmail.com"
          className="footer__social__link"
          target="_blank"
        >
          <IconEmail className="footer__social__svg" />
          Email
        </a>
        {/* <a className="footer__social__link">
          <IconFacebook className="footer__social__svg" />
          Facebook
        </a> */}
        <a
          href="https://github.com/jorgecarloscontr"
          target="_blank"
          className="footer__social__link"
        >
          <IconGithub className="footer__social__svg" />
          Github
        </a>
        <a
          target="_blank"
          href={file.publicURL}
          download
          className="footer__social__link"
        >
          <IconDocument className="footer__social__svg" />
          Resume
        </a>
      </div>
      <div className="footer__text">
        Designed and developed by Jorge Carlos Alvarado
      </div>
    </footer>
  )
}

export default Footer
