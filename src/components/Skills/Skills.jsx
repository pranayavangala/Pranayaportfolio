import "./Skills.scss";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "SCSS",
      "Material UI",
      "Bootstrap",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Python",
      "Flask",
      "Django",
      "Node.js",
      "REST APIs",
      "FastAPI",
      "Java Integration",
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "LLM Integration",
      "AI Chatbots",
      "GitHub Copilot",
      "Windsurf",
      "Semantic Search",
      "Prompt Engineering",
    ],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "MSSQL"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Azure", "Docker", "CI/CD", "Jenkins", "Git", "GitHub"],
  },
  {
    title: "Tools & Methodologies",
    skills: [
      "Agile",
      "Scrum",
      "JIRA",
      "Snow",
      "Confluence",
      "Figma",
      "PyCharm",
      "VS Code",
    ],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <h5>TECHNICAL EXPERTISE</h5>

      <h2>Skills & Technologies</h2>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="skill-card" key={index}>
            <h3>{category.title}</h3>

            <div className="skill-tags">
              {category.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
