import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import mail from "../images/envelope.svg";
import linkedin from "../images/linkedin-logo.svg";
import github from "../images/github-character.svg";

const Header = ({ siteTitle }) => (
  <header>
    <div className="header--detail-me">
        <h3>Wayan Sudiarta</h3>
        <h4>Software Developer</h4>
    </div>
    <div class="header--social">
        <Link to={"https://www.linkedin.com/in/wysdi"}
            target="blank"
        ><img src={linkedin} alt="Linkedin logo"
        /></Link>
        <Link to="https://github.com/wysdi/" target="_blank"
        ><img src={github} alt="Github logo"
        /></Link>
        <Link href="mailto:zerofroxy@gmail.com"
        ><img src={mail} alt="Email logo"
        /></Link>
    </div>
</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
