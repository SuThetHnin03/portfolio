import { FiGithub } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { SlSocialLinkedin } from "react-icons/sl";
import "../styles/header.css"

const Header = () => {
  return (
    <div className='header'>
      <h1>Su Thet Hnin</h1>
      <div className="social">
        <a href="https://www.instagram.com/su_thet_hnin13/" target="_blank"><IoLogoInstagram  className="icon"/></a>
        <a href="https://github.com/Zahra13s" target="_blank"><FiGithub  className="icon"/></a>
        <a href="https://www.linkedin.com/in/su-thet-hnin-94a12331a/" target="_blank"><SlSocialLinkedin  className="icon"/></a>
      </div>
    </div>
  )
}

export default Header