import "./Publications.scss";
import { FaBookOpen, FaExternalLinkAlt, FaAward } from "react-icons/fa";

function Publications() {
  return (
    <section className="publications" id="publications">
      <div className="title">
        <h5>RESEARCH</h5>

        <h2>Research & Publications</h2>
      </div>

      <div className="publication-card">
        <div className="cover">
          <FaBookOpen />

          <span>Journal Cover</span>
        </div>

        <div className="details">
          <h2>Efficient Local Secret Sharing on Distributed Blockchains</h2>

          <div className="badges">
            <span>🏆 Published</span>

            <span>📅 Oct 2021</span>

            <span>🏛️ International Journal</span>

            <span>🏷️ DOI Available</span>
          </div>

          <p>
            Proposed an efficient local secret sharing mechanism for distributed
            blockchain systems focusing on scalability, privacy and security.
          </p>

          <a
            href="https://ijaema.net/index.php/volume-13-issue-10-october-2021/"
            target="_blank"
            rel="noreferrer"
            className="paper-btn"
          >
            Read Paper
            <FaExternalLinkAlt />
          </a>
        </div>

        <div className="award">
          <FaAward />

          <p>Publication</p>
        </div>
      </div>
    </section>
  );
}

export default Publications;
