import "./Projects.scss";
import { useState } from "react";

const projects = [
  {
    title: "Flower Shop",
    tech: "React • Python • REST API",
    desc: "Modern e-commerce flower application with cart and API integration.",
    link: "https://shop-flowers-here.vercel.app/",
  },
  {
    title: "Watchtower Dashboard",
    tech: "React • Redux • Charts",
    desc: "Enterprise monitoring dashboard with reusable components.",
    confidential: true,
  },
  {
    title: "Portfolio",
    tech: "React • JavaScript",
    desc: "Personal portfolio website showcasing projects and skills.",
    link: "/home  ",
  },
];

function Projects() {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = (project) => {
    if (project.confidential) {
      setShowPopup(true);
    } else {
      window.open(project.link, "_blank");
    }
  };

  return (
    <section className="projects" id="projects">
      <h5>FEATURED WORK</h5>

      <h2>My Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <h4>{project.tech}</h4>

            <p>{project.desc}</p>

            <button onClick={() => handleClick(project)}>
              {project.confidential ? "🔒 View Project" : "🚀 Live Demo"}
            </button>
          </div>
        ))}
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>🔒 Enterprise Confidential Project</h2>

            <p>
              This is a real-time enterprise application that I am working on
              for an MNC organization.
            </p>

            <p>
              Due to confidentiality agreements and company policies, I cannot
              share the live demo, source code, screenshots, or implementation
              details publicly.
            </p>

            <p>
              However, I would be happy to discuss my technical contributions
              during an interview.
            </p>

            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
