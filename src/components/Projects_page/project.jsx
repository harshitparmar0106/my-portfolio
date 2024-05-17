import backglow2 from '../images/project_bg.png';
import projects from './project.module.css';
import certificate1 from '../images/certificates/certificate1.png';
import certificate2 from '../images/certificates/certificate2.png';
import certificate3 from '../images/certificates/certificate3.png';
import certificate4 from '../images/certificates/certificate4.png';
import certificate5 from '../images/certificates/certificate5.png';
import certificate6 from '../images/certificates/certificate6.png';
import certificate7 from '../images/certificates/certificate7.jpg';
import project1 from '../images/Projects/project1.jpg'
import project2 from '../images/Projects/project2.png'



const Project = () => {
  return (
    
        <div className={projects.home} id="project_section">
            <div className={projects.header}>
               Projects
            </div>
            <div className={projects.head_container}>


                <div class={projects.project_container}>
                    <div class={projects.project_frame}>
                        <a id = {projects.name} href="https://my-portfolio-three-eta-53.vercel.app/">

                        <img src={project1} alt=""  />
                        <p>My Portfolio
                            <br />
                            
                        </p>
                        </a>
                    </div>
                    <div class={projects.project_frame}>
                     <a id = {projects.name} href="https://tic-tac-toe-23.vercel.app/">  <img src={project2} alt=""/>
                        
                    <p>Tic-Tac-Toe Game</p>
                        </a>
                    </div>
                    <div class={projects.project_frame} id=''>
                        <a  id = {projects.name} href=""></a>
                    </div>   
                    
                    
                </div>   
                    
            </div>
                
      

            <div className={projects.certificate }>
                <p>Certificates</p>
            <div className={projects.certificate_container}>

                    {/* <div className={projects['project']}>
                        <img src={certificate1} alt="" />
                    </div> */}
                    
                    <div class={projects.project_frame}>
                        <img src={certificate1} alt="" />
                    </div>
                    <div class={projects.project_frame}>
                    <img src={certificate2} alt=""  />
                    </div>
                    <div class={projects.project_frame}>
                    <img src={certificate3} alt="" />
                    </div>   
                    <div class={projects.project_frame}>
                    <img src={certificate5} alt="" />
                    </div>
                    <div class={projects.project_frame}>
                    <img src={certificate7} alt="" />
                    </div> 
                    <div class={projects.project_frame}>
                    <img src={certificate6} alt="" />
                    </div>
             </div>
         </div>

        </div>
  )
}

export default Project;