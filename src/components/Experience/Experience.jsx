import "./Experience.scss";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    company: "Current - AT&T",
    role: "Senior React / Full-Stack Developer",
    duration: "2025 - Present",
    description:
      "Developing enterprise-scale applications using React, JavaScript, Redux, REST APIs, and modern UI frameworks. Building reusable components, dashboards, and optimizing application performance while collaborating in Agile teams.",
  },
  {
    company: "Best Buy",
    role: "Full Stack Developer",
    duration: "2023 - 2025",
    description:
      "Designed responsive web applications, integrated REST APIs, implemented state management, and developed reusable UI components for enterprise solutions.Specialized in React.js, JavaScript, TypeScript, HTML5, CSS3, SCSS, Material UI, and Bootstrap, creating reusable components, responsive layouts, dashboards, and enterprise-grade user experiences with performance optimization techniques such as lazy loading and code splitting.",
  },
  {
    company: " Palmetto GBA,",
    role: "Software Developer",
    duration: "2021 - 2023",
    description:
      "Experienced in developing AI-enabled applications by integrating React frontends with Python/Flask services, LLM-powered chat interfaces, semantic search, recommendation systems, and AI-assisted development tools including GitHub Copilot and Windsurf. ",
  },

  {
    company: " MetLife Insurance -TCS, Hyderabad, India,",
    role: "Python Developer",
    duration: "2017 - 2021",
    description:
      "Hands-on experience working with AWS, Azure, Docker, CI/CD, Jenkins, MongoDB, PostgreSQL, MySQL, and Git, delivering enterprise applications through Agile/Scrum methodologies while collaborating with cross-functional teams to build scalable and maintainable software solutions.",
  },
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-title">
        <h5>PROFESSIONAL JOURNEY</h5>
        <h2>Work Experience</h2>
      </div>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon">
              <FaBriefcase />
            </div>

            <div className="timeline-content">
              <span className="duration">{exp.duration}</span>

              <h3>{exp.role}</h3>

              <h4>{exp.company}</h4>

              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
