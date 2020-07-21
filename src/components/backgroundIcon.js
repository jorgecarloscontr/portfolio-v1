import React, { useState, useEffect } from "react"

const BackgroundIcon = () => {
  const [visibleWrapper, setVisibleWrapper] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setVisibleWrapper(false)
    }, 2000)
  }, [])

  return (
    <div className={`svg-wrapper ${!visibleWrapper ? "svg-hidden" : ""}`}>
      <div className="svg-content">
        <svg
          height="200"
          width="200"
          xmlns="http://www.w3.org/2000/svg"
          className="svg-icon"
        >
          <polygon
            points="100 80, 200 40, 100 0, 0 40"
            className="polygon polygon--1"
          />
          <polygon
            points="100 80, 0 40, 0 160, 100 200"
            className="polygon polygon--2"
          />
          <polygon
            points="100 80, 100 200, 200 160, 200, 40"
            className="polygon polygon--3"
          />
        </svg>
        <div className="text">JC</div>
      </div>
    </div>
  )
}

export default BackgroundIcon
