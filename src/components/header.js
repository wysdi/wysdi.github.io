import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import mail from "../images/envelope.svg";
import linkedin from "../images/linkedin-logo.svg";
import github from "../images/github-character.svg";

const Header = ({ siteTitle }) => (
  <header>
      <h1>Wayan Sudiarta</h1>
      <p>Backend Developer</p>
      {/* <nav>
        <ul>
          <li>About Me</li>
          <li><a href="#wtf">Portofolio</a></li>
          <li><a href="download.html">Skill</a></li>
          <li><a href="plugins.html">Plugins</a></li>
          <li><a href="https://github.com/wysdi" target="_blank">GitHub</a></li>
        
        </ul>
      </nav> */}
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
