import { useParams } from 'react-router';
import { useEffect, useState, type JSX } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { FaBootstrap, FaCss3Alt, FaHtml5, FaJsSquare, FaLaravel, FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { DiMysql } from "react-icons/di"
import { SiPhp } from "react-icons/si"
import { AiFillApi } from 'react-icons/ai';
import { VscJson } from 'react-icons/vsc';

type Project = {
  id: number;
  title: string;
  description: string;
  image?: string;
  tech?: string[];
  preview?: string
};

const ProjectPage = () => {
  const { project } = useParams(); // ✅ this gives you the value from the URL
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then(res => res.json())
      .then((data: Project[]) => {
        const found = data.find(p =>
          p.title.toLowerCase() === project?.toLowerCase()
        );
        setCurrentProject(found || null);
      });
  }, [project]);

  const techIcons: { [key: string]: JSX.Element } = {
    HTML: <FaHtml5/>,
    CSS: <FaCss3Alt/>,
    JS: <FaJsSquare/>,
    BOOTSTRAP: <FaBootstrap/>,
    TS: <BiLogoTypescript/>,
    REACT: <FaReact/>,
    PHP: <SiPhp/>,
    LARAVEL: <FaLaravel/>,
    SQL: <DiMysql/>,
    API: <AiFillApi/>,
    JSON: <VscJson />
  };

  console.log(techIcons);

  if (!currentProject) return <div>Loading or not found</div>;

  return (
    <div className="pj">
      <div className="title">
        <IoMdArrowRoundBack className='icon' onClick={(() => window.history.back())} />
        <h1>{currentProject.title}</h1>
      </div>
      <div className='project'>
        <div className="">

          <img src={currentProject.image} alt={currentProject.title} />
        </div>
        <div className="info">
          <h2 style={{ marginTop: '0px' }}>Description</h2>
          <p>{currentProject.description}</p>
          <h2>Languages</h2>
          <ul>
            {currentProject.tech?.map((t, i) => {
            const key = t.toUpperCase();
              return(
                <li key={i} className='tech'>
                  {techIcons[key] || <span className="text-xs">{t}</span>}
                </li>
              )}
          )}
          </ul>
          <h2>Preview</h2>
          <a href={currentProject.preview} target='_blank'>{currentProject.preview}</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
