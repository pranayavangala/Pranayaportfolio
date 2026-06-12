import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>P</span>R
      </div>

      <ul className="nav-menu">
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#experience">Experience</a>
        </li>

        <li>
          <a href="#education">Education</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

        <li>
          <a href="#publications">Publications</a>
        </li>
      </ul>

      <button
        className="resume-btn"
        onClick={() => {
          document.getElementById("contact")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        Hire Me
      </button>
    </nav>
  );
}

export default Navbar;
