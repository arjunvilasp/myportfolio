import projects from '../../projects'
import ProjectCard from '../ProjectCard/ProjectCard'
import './ProjectsSection.css'

const ProjectsSection = () => {

  
  return (
    <div className='projects-container'>
      <h1>Projects</h1>
      <div className="projects">
        {
          projects.map((item,index)=>{
            return(
              <ProjectCard item={item} key={index}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProjectsSection