import backglow2 from '../images/project_bg.png';
import projects from './project.module.css';
import certificate1 from '../images/certificates/certificate1.png';
import certificate2 from '../images/certificates/certificate2.png';
import certificate3 from '../images/certificates/certificate3.png';
import certificate4 from '../images/certificates/certificate4.png';
import certificate5 from '../images/certificates/certificate5.png';
import certificate6 from '../images/certificates/certificate6.png';
import certificate7 from '../images/certificates/certificate7.jpg';


const Project = () => {
  return (
    
        <div className={projects.home} 
            //   style = {{ backgroundImage: `url(${backglow2})` }}
              >
            <div className={projects.header}>
               Projects
            </div>
            <div className={projects.head_container}>


                <div class={projects.project_container}>
                    <div class={projects.project_frame}>
                    </div>
                    <div class={projects.project_frame}>
                    </div>
                    <div class={projects.project_frame}>
                    </div>   
                    <div class={projects.project_frame}>
                    </div>
                    <div class={projects.project_frame}>
                    </div>
                    <div class={projects.project_frame}>
                    </div>   
                
                </div>   
                    
            </div>
                
      

            <div className={projects.certificate }>
                <p>Certificates</p>
            <div className={projects.certificate_container}>

                <div className={projects['project']}>
                    <img src={certificate1} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, eligendi?</p>
                </div>
                
                    <div class={projects.project_frame}>
                        <img src={certificate1} alt="" />
                        <h6 className={projects.content}> Certificate presented for successful completion of the Ideation workshop</h6>
                    </div>
                    <div class={projects.project_frame}>
                    <img src={certificate2} alt=""  />
                    <h6 className={projects.content}> Certificate presented for successful completion of 15 days in Campus Training</h6>
                    </div>
                    <div class={projects.project_frame}>
                    <img src={certificate3} alt="" />
                    <h6 className={projects.content}> Certificate presented for Successful completion of my tenure as Captain of UDAAN Aeromodelling Club</h6>
                    </div>   
                    <div class={projects.project_frame}>
                    <img src={certificate5} alt="" />
                    <h6 className={projects.content}>letter of Recomendation presented By Learn and Build </h6>
                    </div>
                    <div class={projects.project_frame}>
                    <img src={certificate7} alt="" />
                    <h6 className={projects.content}> Certificate of participation in LNMHACKS 6.0</h6>

                    </div> 
                    <div class={projects.project_frame}>
                    <img src={certificate6} alt="" />
                    <h6 className={projects.content}> Certificate of participation in Techkriti organised by IIT kanpur</h6>

                    
                    </div>
    
             </div>
         </div>

    </div>
  )
}

export default Project;