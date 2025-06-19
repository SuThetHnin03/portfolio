import { FaBootstrap, FaCss3Alt, FaHtml5, FaJava, FaJsSquare, FaLaravel, FaReact } from "react-icons/fa"
import "../styles/skills.css"
import { BiLogoTypescript } from "react-icons/bi"
import { SiPhp, SiSqlite } from "react-icons/si"
import { DiMysql } from "react-icons/di"
import RadarChart from "../components/RadarChart"

const data = {
  html: 90,
  css: 80,
  javascript: 85,
  react: 75,
  typescript: 70,
  laravel: 60,
  php: 65,
  mysql: 70,
  java: 50
};

const axisConfig = [
  { name: "html", max: 100 },
  { name: "css", max: 100 },
  { name: "javascript", max: 100 },
  { name: "react", max: 100 },
  { name: "typescript", max: 100 },
  { name: "laravel", max: 100 },
  { name: "php", max: 100 },
  { name: "mysql", max: 100 },
  { name: "java", max: 100 },
];

const SkillsPage = () => {
  return (
    <div className="skills">
      <div className="graph">
       <div style={{ display:"flex", justifyContent: "center" }}>
         <RadarChart data={data} width={500} height={500} axisConfig={axisConfig} />
       </div>
      </div>
      <div className='skill'>
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
    </div>
  )
}

export default SkillsPage