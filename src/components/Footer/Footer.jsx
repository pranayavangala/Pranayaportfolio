//import "./Footer.scss";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Pranaya Vangala</h2>

        <p>Full-Stack Developer | React Developer | AI & ML Enthusiast</p>
      </div>

      <div className="footer-links">
        <a href="#home">Home</a>

        <a href="#about">About</a>

        <a href="#skills">Skills</a>

        <a href="#projects">Projects</a>

        <a href="#publications">Publications</a>

        <a href="#contact">Contact</a>
      </div>

      <div className="footer-social">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="mailto:vpranaya95@gmail.com">
          <FaEnvelope />
        </a>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Pranaya Vangala. All Rights Reserved.
        </p>

        <button
          className="top-btn"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
