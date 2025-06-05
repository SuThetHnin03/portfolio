import { NavLink, Outlet } from 'react-router';

const ProjectsPage = () => {

  const projects = [1,2,3,4,5];
  return (
    <div>
      {
        projects.map((project) => ( 
        <NavLink 
        className={({isActive}) => {return isActive ?  'text-primary': ""}}
        key={project} to={`/projects/${project}`}>Profile {project} || </NavLink>
        ))}
        <Outlet/>
    </div>
  )
}

export default ProjectsPage