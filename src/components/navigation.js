import React, { useState, useEffect, useContext } from "react"
import { Link } from "gatsby"
import VisibilityContext from "../context/componentVisibility/visibilityContext"

const Navigation = () => {
  const [scrollX, setScrollX] = useState(false)

  const visibilityContext = useContext(VisibilityContext)
  const startAnimation = visibilityContext && visibilityContext.startAnimation

  const handleScroll = () => {
    if (window.scrollY > 55) setScrollX(true)
    else setScrollX(false)
  }

  useEffect(() => {
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  })

  const onClickLink = () => {
    if (document.getElementById("navi-toggle").checked) {
      setTimeout(() => {
        document.getElementById("navi-toggle").checked = false
        document
          .getElementsByTagName("body")[0]
          .classList.remove("body--overflow-hidden")
      }, 300)
    }
  }

  const onClickCover = () => {
    if (document.getElementById("navi-toggle").checked) {
      document.getElementById("navi-toggle").checked = false
      document
        .getElementsByTagName("body")[0]
        .classList.remove("body--overflow-hidden")
    }
  }

  const onChangeCheckbox = event => {
    const target = event.target
    if (target.checked)
      document
        .getElementsByTagName("body")[0]
        .classList.add("body--overflow-hidden")
    else
      document
        .getElementsByTagName("body")[0]
        .classList.remove("body--overflow-hidden")
  }

  return (
    <div
      className={`navigation ${
        scrollX === false ? "navigation--transparent" : "navigation--hidden"
      } `}
    >
      <div className="navigation__container">
        <Link
          to="/"
          className={`navigation__home ${
            startAnimation ? "navigation__home--animation" : ""
          }`}
        >
          <svg
            height="200"
            width="200"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="navigation__svg"
          >
            <polygon
              points="100 80, 200 40, 100 0, 0 40"
              className="navigation__svg__polygon navigation__svg__polygon--1"
            />
            <polygon
              points="100 80, 0 40, 0 160, 100 200"
              className="navigation__svg__polygon navigation__svg__polygon--2"
            />
            <polygon
              points="100 80, 100 200, 200 160, 200, 40"
              className="navigation__svg__polygon navigation__svg__polygon--3"
            />
          </svg>
          <div className="navigation__svg__text">JC</div>
        </Link>
        <div className="navigation__nav">
          <input
            type="checkbox"
            className="navigation__checkbox"
            onChange={onChangeCheckbox}
            id="navi-toggle"
          />
          <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon"></span>
          </label>
          <div className="navigation__background">&nbsp;</div>
          <div className="navigation__cover" onClick={onClickCover}>
            &nbsp;
          </div>

          <div className="navigation__list">
            <Link
              to="/"
              activeClassName="navigation__link--current"
              className={`navigation__link navigation__link--1 ${
                startAnimation ? "animation" : ""
              }`}
              onClick={onClickLink}
            >
              Home
            </Link>
            <Link
              to="#about"
              activeClassName="navigation__link--current"
              className={`navigation__link navigation__link--2 ${
                startAnimation ? "animation" : ""
              }`}
              onClick={onClickLink}
            >
              About
            </Link>
            <Link
              to="#skills"
              activeClassName="navigation__link--current"
              className={`navigation__link navigation__link--3 ${
                startAnimation ? "animation" : ""
              }`}
              onClick={onClickLink}
            >
              Skills
            </Link>
            <Link
              to="#work"
              activeClassName="navigation__link--current"
              className={`navigation__link navigation__link--4 ${
                startAnimation ? "animation" : ""
              }`}
              onClick={onClickLink}
            >
              Work
            </Link>
            <Link
              to="#contact"
              activeClassName="navigation__link--current"
              className={`navigation__link navigation__link--5 ${
                startAnimation ? "animation" : ""
              }`}
              onClick={onClickLink}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
