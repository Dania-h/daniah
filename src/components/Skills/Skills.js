import "./Skills.scss";
import reactLogo from "../../assets/icons/react-2.svg";
import html from "../../assets/icons/w3_html5-icon.svg";
import css from "../../assets/icons/icons8-css-logo.svg";
import javascript from "../../assets/icons/logo-javascript.svg";
import node from "../../assets/icons/nodejs-icon.svg";
import git from "../../assets/icons/Git-Icon-1788C.svg";
import express from "../../assets/icons/expressjs-icon.svg";

function Skills() {
  const skills = [
    {
      id: "1",
      text: "React",
      logo: reactLogo,
    },
    {
      id: "2",
      text: "HTML",
      logo: html,
    },
    {
      id: "3",
      text: "CSS",
      logo: css,
    },
    {
      id: "4",
      text: "Javascript",
      logo: javascript,
    },
    {
      id: "5",
      text: "Node.js",
      logo: node,
    },
    {
      id: "6",
      text: "Git",
      logo: git,
    },
    {
      id: "7",
      text: "Express.js",
      logo: express,
    },
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="skills__header">SKILLS</h2>
      <div className="skills__cards">
        {skills.map((skill) => {
          return (
            <div className="skills__card" key={skill.id}>
              <img
                className="skills__card--logos"
                src={skill.logo}
                alt={skill.text}
              />
              <p>{skill.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
