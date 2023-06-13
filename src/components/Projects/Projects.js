import "./Projects.scss";
import skills from "../../data/skills";
import jadesmart from "../../assets/images/Screenshot-jade.png";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="projects__header">PROJECTS</h2>
      <div className="projects__card">
        <img
          className="projects__card--image"
          src={jadesmart}
          alt="JadeSmart website"
        />
        <div className="projects__card--text-box">
          <h3>JadeSmart</h3>
          <p>
            Jadesmart is a web app that provides focused and beginner friendly
            financial education through brief and interactive lessons, making
            financial literacy more accessible for the average person.
          </p>
          <div>
            {skills.slice(0, 5).map((skill) => {
              return (
                <img
                  className="projects__card--icons"
                  src={skill.logo}
                  alt={skill.text}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
