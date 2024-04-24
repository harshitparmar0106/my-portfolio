import abt from './About.module.css';
import backglow2 from '../images/backglow2.png';
import desktop from '../images/Ellipse.png';


const About = () => { 
  return (
    <div className={abt.home} id='About_section'
        style = {{ backgroundImage: `url(${backglow2})` }}>
            <h1>About <br /> Me</h1>
        <div className={abt.content_description}>
            <img src={desktop} alt="" />
            <p>Meet Harshit , a talented web developer with a
                 passion for crafting elegant and functional 
                 digital solutions. Armed with expertise in 
                    HTML, CSS, JavaScript, React JS and more. {/*Their keen
                   eye for detail,coupled <br /> with theircommitment
                    to staying abreast of industry trends,
                    ensures <br /> that every project they undertake is
                     not only visually stunning but <br />also optimized
                      for peak performance.  */}
            </p>
        </div>
       
     </div>
    
  );
}

export default About;
