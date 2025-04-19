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

};

export default App;
