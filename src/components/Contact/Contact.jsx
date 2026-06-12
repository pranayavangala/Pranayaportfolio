import "./Contact.scss";
import profile from "../../assets/Pranaya_photo.png";

import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-title">
        <h5>GET IN TOUCH</h5>

        <h2>Let's Build Something Amazing Together</h2>

        <p>
          I'm always interested in exciting opportunities, innovative products,
          and collaborating with great teams.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-card">
          <div className="profile-image">
            <img src={profile} alt="Pranaya" />
          </div>

          <h2>Pranaya Vangala</h2>

          <h4>Full-Stack Developer</h4>

          <div className="info">
            <div className="info-item">
              <FaEnvelope />
              <span>vpranaya95@gmail.com</span>
            </div>

            <div className="info-item">
              <FaPhoneAlt />
              <span>+1 (945) 289-4660</span>
            </div>

            <div className="info-item">
              <FaMapMarkerAlt />
              <span>United States</span>
            </div>
          </div>

          <div className="availability">
            <div className="status">
              <span className="dot"></span>
              Available Now
            </div>

            <div className="work-types">
              <span>✔ Full-time</span>
              <span>✔ Contract</span>
              <span>✔ Freelance</span>
            </div>
          </div>

          <div className="social-icons">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="/" target="_blank" rel="noopener noreferrer">
              <FaGlobe />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
