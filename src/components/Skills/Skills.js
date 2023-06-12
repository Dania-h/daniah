import "./Skills.scss";
import skills from "../../data/skills";

function Skills() {

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
