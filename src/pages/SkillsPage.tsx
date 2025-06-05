import { FaBootstrap, FaCss3Alt, FaHtml5, FaJava, FaJsSquare, FaLaravel, FaReact } from "react-icons/fa"
import "../styles/skills.css"
import { BiLogoTypescript } from "react-icons/bi"
import { SiPhp, SiSqlite } from "react-icons/si"
import { DiMysql } from "react-icons/di"

const SkillsPage = () => {
  return (
    <div className='skills'>
      <FaHtml5 />
      <FaCss3Alt />
      <FaJsSquare />
      <FaBootstrap />
      <BiLogoTypescript />
      <FaReact />
      <SiPhp />
      <FaLaravel />
      <DiMysql />
      <SiSqlite />
      <FaJava />
    </div>
  )
}

export default SkillsPage