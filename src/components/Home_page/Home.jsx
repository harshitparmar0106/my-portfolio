import React from "react";
import styles from "./Homepage.module.css";
import backglow from "../images/backglow.jpg";
import git from "../images/github.png";
import insta from "../images/insta.png";
import linkedin from "../images/linkedin.png";
import download_icon from "../images/download_icon.png";
import { BsCloudDownload } from "react-icons/bs";

const Home = () => {
  return (
    <div className={styles.home}>
      <div
        className={styles.herosection}
        style={{ backgroundImage: `url(${backglow})` }}
      >
        <div className={styles.navbar}>
          <p>Harshit Parmar</p>
          <ul>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </ul>
        </div>
        <div className={styles.herosection_content}>
          <div className={styles.Front_name}>
            <p>
              Harshit <br></br>Parmar
            </p>
            <div className={styles.social_icons}>
              
                <a href="https://github.com/harshitparmar0106">
                  <img src={git} alt="" />
                </a>
                <a href="https://github.com/harshitparmar0106">
                  <img src={linkedin} alt="" />
                </a>
                <a href="https://github.com/harshitparmar0106">
                  <img src={insta} alt="" />
                </a>
            </div>
          </div>
          <div className={styles.description}>
            I’m a full-stack web developer
            <br></br> and I work remotely from Bharat
          </div>
          <div className={styles.Resume_btn}>
            <div className={styles.wrapper}>
              <button className={styles.Resume}>Resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
