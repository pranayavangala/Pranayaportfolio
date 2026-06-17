import "./About.scss";
import { motion } from "framer-motion";
import profile from "../../assets/Pranaya_photo.png";

function About() {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Left Side */}

        <div className="about-left">
          <div className="profile-image">
            <img src={profile} alt="Pranaya Vangala" />
          </div>
        </div>

        {/* Right Side */}

        <div className="about-right">
          <h5>ABOUT ME</h5>
          <h2>
            Full-Stack Developer crafting scalable and modern web applications.
          </h2>
          <p>
            I am a passionate Full-Stack Developer with 8+ years of experience
            building enterprise applications using React, JavaScript, HTML, CSS,
            SCSS, and Python. I enjoy creating responsive, user-friendly, and
            high-performance applications while delivering exceptional user
            experiences.
          </p>

          <div className="stats">
            <div className="card">
              <h3>8+</h3>
              <span>Years Experience</span>
            </div>

            <div className="card">
              <h3>4+</h3>
              <span>Industries</span>
            </div>

            <div className="card">
              <h3>100%</h3>
              <span>Dedication</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
