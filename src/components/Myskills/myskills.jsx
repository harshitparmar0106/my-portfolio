import backglow2 from "../images/backglow2.png";
import skill from "./myskills.module.css";

const myskills = () => {
  return (
    <div className={skill.home} id = "skills_section">
      <div className={skill.header}>Skills</div>
      <div className={skill.skill_container}>
        <Skill label = {"HTML"} percent = {"90%"}/>
        <Skill label = {"CSS"} percent = {"80%"}/>
        <Skill label = {"JAVA SCRIPT"} percent = {"60%"}/>
        <Skill label = {"React JS"} percent = {"50%"}/>
        <Skill label = {"C++"} percent = {"80%"}/>
        <Skill label = {"PYTHON"} percent = {"60%"}/>
      </div>
    </div>
  ); 
};

const Skill = (props) => {
  return (
    <div className={skill.wrapper}>
      <p>{props.label}</p>
      <div className={skill.progress_bar}>
        <div style={{width: props.percent}} className={skill.progress}></div>
      </div>
    </div>
  );
};
export default myskills;
