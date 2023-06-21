import "./Projects.scss";
import projects from "../../data/projects";
import github from "../../assets/icons/iconmonstr-github-1.svg";
import website from "../../assets/icons/tablet-and-laptop.svg";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="projects__header">PROJECTS</h2>

      {projects.map((project) => {
        return (
          <div className="projects__card" key={project.id}>
            <img
              className={`projects__card--image ${project.title === "COMING SOON..." ? "blur" : "" }`}
              src={project.image}
              alt={project.title}
            />
            <div className="projects__card--text-box">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="projects__card--skills">
                {project.skills.map((skill, index) => {
                   return <p key={index}>{skill}</p>;
                })}
              </div>
            </div>
            <div className="projects__card--buttons">
              <a className={project.github ? "" : "is-hidden"} href={project.github} target="_blank">
                <button>
                  <img src={github} alt="github" />
                </button>
              </a>
              <a className={project.website ? "" : "is-hidden"} href={project.website} target="_blank">
                <button>
                  <img src={website} alt="a phone and laptop" />
                </button>
              </a>
            </div>
          </div>
        );
      })}

    </section>
  );
}

export default Projects;
