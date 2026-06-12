//import "./ConfidentialProject.scss";
import { Link } from "react-router-dom";
import { FaLock, FaBriefcase } from "react-icons/fa";

function ConfidentialProject() {
  return (
    <section className="confidential">
      <div className="confidential-card">
        <FaLock className="lock-icon" />

        <h1>Confidential Enterprise Project</h1>

        <h3>Watchtower Dashboard</h3>

        <p>
          This is a real-time enterprise application that I am currently working
          on for an MNC organization.
        </p>

        <p>
          Due to confidentiality agreements and company policies, I am unable to
          share the live demo, source code, screenshots, or implementation
          details publicly.
        </p>

        <p>However, I have hands-on experience working on:</p>

        <ul>
          <li>✅ React.js Development</li>
          <li>✅ Enterprise Dashboards</li>
          <li>✅ Redux State Management</li>
          <li>✅ REST API Integration</li>
          <li>✅ Performance Optimization</li>
          <li>✅ Reusable Components</li>
          <li>✅ Agile & Scrum Development</li>
        </ul>

        <div className="note">
          <FaBriefcase />

          <span>
            Thank you for your understanding. I would be happy to discuss my
            contributions during an interview.
          </span>
        </div>

        <Link to="/" className="back-btn">
          ← Back to Portfolio
        </Link>
      </div>
    </section>
  );
}

export default ConfidentialProject;
