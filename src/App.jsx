import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Publications from "./components/Publications/Publications";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Publications />
      <Footer />
    </>
  );
}

export default App;
