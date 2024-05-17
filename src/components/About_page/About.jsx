import abt from './About.module.css';
import my_img from './HARSHIT_img.png'


const About = () => { 
  return (
    <div className={abt.home} id='About_section'>
        <h1>About Me</h1>
        <div className={abt.about_container}>
            <div className={abt.my_img}>
                <img src={my_img} alt="" />
                <a id={abt.name} href='http://linkedin.com/in/harshit-parmar99'>Harshit Parmar</a>
                <div id={abt.underline}></div>
                <p id={abt.designation}>Fontend Engineer | Problem Solver | Aeromodeller</p>
                
            
            </div>
            <div className={abt.my_description}>

                 <p> Hii , I am Harshit , 3rd year B.Tech Student pursuing in Computer Science with Specialization in cyber security.I have hands-on experience with React and JavaScript. Crafting elegant user interfaces and solving real-world problems using these technologies is my forte. Beyond coding, I find joy in building and flying model aircraft. Aeromodelling allows me to combine creativity and engineering.Curiosity drives me to dive deep into topics, whether it’s a new programming language or a cybersecurity concept. <br /> <br />Kindly connect with me for more updates and experiences </p>
                 <button id={abt.connect_btn}>
                   <a id={abt.connect_btn} href="http://linkedin.com/in/harshit-parmar99">Connect</a> 
                    </button>
            </div>

        </div>
    
       
     </div>
    
  );
}

export default About;
