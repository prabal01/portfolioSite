import Particles from "react-particles-js";
import { particleConfig } from "./particleConfig";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import CNavbar from "./components/UI/Navbar/navbar";
import Intro from "./components/IntroSection/Intro";
import About from "./components/AboutSection/About";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";

export default function App() {
  useEffect(() => {
    console.log(window.innerHeight,window.innerWidth)

  }, [])
  return (<>
      <CNavbar/>
    <div className="App">
      <Intro/>
      <About/>
      <WorkExperience/>
      <Projects/>
      <ContactMe/>
    </div>
    </>
  );
}
