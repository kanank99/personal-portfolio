import "./App.css";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Links from "./components/Links";
import Projects from "./components/Projects";
// import { useEffect } from "react";

function App() {


  return (
    <div className="App">
      <Hero />
      <AboutMe />
      <Projects />
      <Links />
    </div>
  );
}

export default App;
