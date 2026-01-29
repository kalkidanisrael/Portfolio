import React from "react";
import Navbar from "../src/component/Navbar/Navbar.jsx";
import About from "../src/component/pages/About/About.jsx";
import Projects from "../src/component/pages/Projests/Projects.jsx";
import Contact from "../src/component/pages/Contact/Contact.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

