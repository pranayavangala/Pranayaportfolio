import "./Hero.scss";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import coverLetter from "../../assets/coverletter.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="hello">👋 Hello, I'm</p>

        <h1>Pranaya Reddy</h1>

        <h2>
          <Typewriter
            words={["React Developer", "Frontend Engineer", "UI Specialist"]}
            loop={0}
            cursor
          />
        </h2>

        <p>
          Building scalable and beautiful web applications with modern
          technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary">
            🚀 Explore Projects
          </a>

          <a
            href={coverLetter}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary"
          >
            💌 Read My Cover Letter
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
