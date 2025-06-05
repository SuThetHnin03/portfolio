import { useParams } from 'react-router'

const ProjectPage = () => {
  const params = useParams<{projectId:string}>();
  console.log(typeof(params.projectId));
  
  return (
    <div>ProjectPage {params.projectId}</div>
  )
}

export default ProjectPage