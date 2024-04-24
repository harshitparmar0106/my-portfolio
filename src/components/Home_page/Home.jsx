import React, { Component } from "react";
import styles from "./Homepage.module.css";
import backglow from "../images/backglow.jpg";
import git from "../images/github.png";
import insta from "../images/insta.png";
import linkedin from "../images/linkedin.png";
import resume from "./resume.pdf";
import link from '../images/share-link.png';
import { BsList } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";


let x = true;
const Home = () =>  {
   
    const [shouldShowMobileNav, setShouldShowMobileNav] = useState(false);

    let handleClick= () => {
      setShouldShowMobileNav(true);
    }

    
  return (
    <div className={styles.home}>
      {
        shouldShowMobileNav &&
        <MobileNav onDismissRequest={() => setShouldShowMobileNav(false)}/>
      }
      <div
        className={styles.herosection}
        style={{ backgroundImage: `url(${backglow})` }}
      >
        <div onClick={handleClick}><BsList className={styles.nav_icon}/></div>
        <div className={styles.navbar}>
          <p>Harshit Parmar</p>
          <ul>
            <a href="#">Home</a>
            <a href="#About_section">About</a>
            <a href="#project_section">Projects</a>
            <a href="#skills_section">Skills</a>
            <a href="#contact_section">Contact</a>
          </ul>
        </div>
        <div className={styles.herosection_content}>
          <div className={styles.Front_name}>
            <p>
              Harshit <br /> Parmar
            </p>
            <div className={styles.social_icons}>
              
                <a href="https://github.com/harshitparmar0106">
                  <img src={git} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/harshit-parmar99/">
                  <img src={linkedin} alt="" />
                </a>
                <a href="https://github.com/harshitparmar0106">
                  <img src={insta} alt="" />
                </a>
                <a href="https://linktr.ee/harshithacks">
                  <img src={link} alt="" />
                </a>
            </div>
          </div>
          <div className={styles.animated_text}>
            I’m a <span></span>
            <br></br> and I work remotely from Bharat
          </div>
          <div className={styles.Resume_btn}>
            <div className={styles.wrapper}>
                <a href={resume}>
              <button className={styles.Resume} download>Resume</button>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const MobileNav = ({onDismissRequest}) => {
  return <div>

    <div className={styles.mobile_nav} onClick={onDismissRequest}>
        <RxCross2 className={styles.nav_icon}/>
        <ul>
            <a href="#">Home</a>
            <a href="#About_section">About</a>
            <a href="#project_section">Projects</a>
            <a href="#skills_section">Skills</a>
            <a href="#contact_section">Contact</a>
          </ul>
    </div>
  </div>
}

export default Home;
