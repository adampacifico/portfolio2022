import React from "react";
import Hero_2 from "./components/Hero_2";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth">
      <Hero_2 />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
