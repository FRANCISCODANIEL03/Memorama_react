import { useState } from "react";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <header>
        <span>MI PORTAFOLIO</span>
        <div className="btns desktop-menu">
          <button className="btn1" onClick={() => scrollToSection("home")}>
            HOME
          </button>
          <button className="btn2" onClick={() => scrollToSection("projects")}>
            PROJECTS
          </button>
          <button className="btn2" onClick={() => scrollToSection("contact")}>
            CONTACT
          </button>
        </div>

        <div className="hamburger mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="bi bi-list"></i>
        </div>
      </header>

    </>
  );
};

export default App;
