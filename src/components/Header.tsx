import { FiGithub } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { SlSocialLinkedin } from "react-icons/sl";
import "../styles/header.css"

const Header = () => {
  return (
    <div className='header'>
      <h1>Su Thet Hnin</h1>
      <div className="social">
        <IoLogoInstagram  className="icon"/>
        <FiGithub  className="icon"/>
        <SlSocialLinkedin  className="icon"/>
      </div>
    </div>
  )
}

export default Header