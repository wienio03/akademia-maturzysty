import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import "./App.css";
const App = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Service />
    </div>
  );
};

export default App;
