import backglow2 from '../images/project_bg.png';
import projects from './project.module.css';
const Project = () => {
  return (
    <div>
        <div className={projects.home} 
              style = {{ backgroundImage: `url(${backglow2})` }}>  
            

        </div>

    </div>
  )
}

export default Project;