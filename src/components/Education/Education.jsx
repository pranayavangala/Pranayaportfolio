import "./Education.scss";
import { FaGraduationCap, FaAward } from "react-icons/fa";

const education = [
  {
    degree: "Master of Technology (M.Tech) - Data Science",
    university: "Jawaharlal Nehru Technological University Hyderabad (JNTUH)",
    year: "2021",
    icon: <FaGraduationCap />,
  },
  {
    degree: "Bachelor of Technology (B.Tech) - Computer Science & Engineering",
    university: "Jawaharlal Nehru Technological University Hyderabad (JNTUH)",
    year: "2017",
    icon: <FaGraduationCap />,
  },
  {
    degree: "Master Data Analysis: Python, Statistics",
    university: "Professional Certification",
    year: "Certification",
    icon: <FaAward />,
  },
];

function Education() {
  return (
    <section className="education" id="education">
      <div className="education-title">
        <h5>ACADEMIC JOURNEY</h5>
        <h2>Education & Certifications</h2>
      </div>

      <div className="education-grid">
        {education.map((item, index) => (
          <div className="education-card" key={index}>
            <div className="education-icon">{item.icon}</div>

            <span className="education-year">{item.year}</span>

            <h3>{item.degree}</h3>

            <h4>{item.university}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
