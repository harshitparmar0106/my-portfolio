import backglow2 from '../images/backglow2.png';
import skill from  './myskills.module.css';
import loader from '../images/Group 1.png';

const myskills = ()=> {

    return(
        <div>
             <div className={skill.home} 
              style = {{ backgroundImage: `url(${backglow2})` }}>

                <div className= {skill.header}>
                    <h1>My Skills</h1>
                </div>
                <div className={skill.skill_list}>
                    <div className={skill.list1}>
                        <div className= {skill.skill_loader}>

                            <li>HTML<br />
                            <br />
                            <img src={loader} />
                             </li>
                        </div>
                        <li>CSS<br />
                        <br /></li>
                        <li>JAVA SCRIPT<br />
                        <br /></li>
                    </div>
                    <div className={skill.list2}>
                        <li>REACT JS <br />
                        <br /></li>
                        <li>C++<br />
                        <br /></li>
                        <li>PYTHON<br />
                        <br /></li>
                    </div>
                </div>
             </div>
        </div>

    );
}

export default myskills;
