import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import FooterCopyright from "./components/FooterCopyright"
import "./App.css";

const App = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Contact />
      <FooterCopyright />
    </div>
  );
};

export default App;
