import React from "react"
import IconDevelop from "../images/assets/develop.svg"
import IconTools from "../images/assets/tools.svg"
import IconTools2 from "../images/assets/tools1.svg"
import IconDatabase from "../images/assets/database.svg"
import IconLeft from "../images/assets/chevron-left.svg"

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills__container">
        <h2 className="u-mt-big u-mb-medium">Skills</h2>
        <div className="skills__content">
          <div className="skills__category skills__frameworks">
            <div className="skills__category__title">
              <IconTools className="skills__icon" />
              Frameworks
            </div>
            <div className="skills__items">
              <div className="skills__item">Laravel</div>
              <div className="skills__item">ReactJs</div>
              <div className="skills__item">Nodejs</div>
              <div className="skills__item">Gatsby</div>
              <div className="skills__item">Bootstrap</div>
            </div>
          </div>
          <div className="skills__category skills__languages">
            <div className="skills__category__title">
              <IconDevelop className="skills__icon" />
              Languages
            </div>
            <div className="skills__items">
              <div className="skills__item">Python</div>
              <div className="skills__item">JavaScript</div>
              <div className="skills__item">PHP</div>
              <div className="skills__item">Java</div>
            </div>
          </div>

          <div className="skills__category skills__tools">
            <div className="skills__category__title">
              <IconTools2 className="skills__icon" />
              Tools
            </div>
            <ul className="skills__tools">
              <li className="skills__tool">
                <IconLeft className="skills__tool__svg" />
                Git & Github
              </li>
              <li className="skills__tool">
                <IconLeft className="skills__tool__svg" />
                Postman
              </li>
              <li className="skills__tool">
                <IconLeft className="skills__tool__svg" />
                Jira
              </li>
              <li className="skills__tool">
                <IconLeft className="skills__tool__svg" />
                Slack
              </li>
              <li className="skills__tool">
                <IconLeft className="skills__tool__svg" />
                VsCode
              </li>
            </ul>
          </div>
          <div className="skills__category skills__database">
            <div className="skills__category__title">
              <IconDatabase className="skills__icon" />
              Databases
            </div>
            <ul className="skills__tools">
              <li className="skills__tool">
                <IconLeft className="skills__tool__svg" />
                MongoDB
              </li>
              <li className="skills__tool">
                <IconLeft className="skills__tool__svg" />
                MySQL
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
