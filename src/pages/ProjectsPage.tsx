import { CiFolderOn } from "react-icons/ci";
import "../styles/projects.css"
import { useEffect, useState, type JSX } from 'react';
import { Link } from "react-router";
import { FaBootstrap, FaCss3Alt, FaHtml5, FaJsSquare, FaLaravel, FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { DiMysql } from "react-icons/di"
import { SiPhp } from "react-icons/si"
import { AiFillApi } from 'react-icons/ai';
import { VscJson } from "react-icons/vsc";

const ProjectsPage = () => {
  type Project = {
    id: number;
    title: string;
    description: string;
    image?: string;
    tech?: string[];
  };


  const [projects, setProjects] = useState<Project[]>([])
  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then(res => res.json())
      .then(data => setProjects(data))
  }, [])

  const techIcons: { [key: string]: JSX.Element } = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    JS: <FaJsSquare />,
    BOOTSTRAP: <FaBootstrap />,
    TS: <BiLogoTypescript />,
    REACT: <FaReact />,
    PHP: <SiPhp />,
    LARAVEL: <FaLaravel />,
    SQL: <DiMysql />,
    API: <AiFillApi />,
    JSON: <VscJson />
  };

  return (
    <div>
      <h1 className="title">My Projects</h1>
      <div className='projects'>
        {
          projects.map((project) => (
            <Link
            className="eachProject"
              key={project.id}
              to={`/projects/${project.title}`}>
              <CiFolderOn className='icon' />
              <p>{project.title}</p>
              <ul>
                {project.tech?.map((t, i) => {
                  const key = t.toUpperCase();
                  return (
                    <li key={i} className='tech'>
                      {techIcons[key] || <span className="text-xs">{t}</span>}
                    </li>
                  )
                }
                )}
              </ul>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default ProjectsPage