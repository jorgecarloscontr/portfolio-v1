import React from "react"
import IconEmail from "../images/assets/email.svg"
import IconFacebook from "../images/assets/facebook.svg"
import IconGithub from "../images/assets/github.svg"
import IconDocument from "../images/assets/text-document.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <div className="footer__social__link">
          <IconEmail className="footer__social__svg" />
          Email
        </div>
        <div className="footer__social__link">
          <IconFacebook className="footer__social__svg" />
          Facebook
        </div>
        <div className="footer__social__link">
          <IconGithub className="footer__social__svg" />
          Github
        </div>
        <div className="footer__social__link">
          <IconDocument className="footer__social__svg" />
          Resume
        </div>
      </div>
      <div className="footer__text">
        Designed and developed by Jorge Carlos Alvarado
      </div>
    </footer>
  )
}

export default Footer
