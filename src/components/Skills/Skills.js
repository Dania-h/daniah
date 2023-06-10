import "./Skills.scss";
import reactLogo from "../../assets/icons/react-2.svg";
import html from "../../assets/icons/w3_html5-icon.svg";
// import css from "../../assets/icons/result.svg";

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
    //   logo: css,
    },
  ];

  return (
    <section className="skills">
      <h2 className="skills__header">SKILLS</h2>
      <div className="skills__cards">
        {skills.map((skill) => {
          return (
            <div className="skills__card" key={skill.id}>
              <img
                className="skills__logos"
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
