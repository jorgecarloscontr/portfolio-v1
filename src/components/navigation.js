import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

const Navigation = () => {
  const [scrollX, setScrollX] = useState(false)

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

  return (
    <div
      className={`navigation ${
        scrollX === false ? "navigation--transparent" : "navigation--dark"
      } `}
    >
      <div className="navigation__container">
        <Link to="/" className="navigation__home">
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
          <div className="navigation__list">
            <Link
              to="/menu"
              activeClassName="navigation__link--current"
              className="navigation__link navigation__link--1"
            >
              Home
            </Link>
            <Link
              to="/menu"
              activeClassName="navigation__link--current"
              className="navigation__link navigation__link--2"
            >
              About
            </Link>
            <Link
              to="/menu"
              activeClassName="navigation__link--current"
              className="navigation__link navigation__link--3"
            >
              Skills
            </Link>
            <Link
              to="/gallery"
              activeClassName="navigation__link--current"
              className="navigation__link navigation__link--4"
            >
              Work
            </Link>
            <Link
              to="/promos"
              activeClassName="navigation__link--current"
              className="navigation__link navigation__link--5"
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
