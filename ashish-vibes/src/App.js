import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
// import Experience from "./components/About/Experience";
// import Education from "./components/About/Education";
import SkillSection from "./components/About/SkillSection";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
        <Navbar/>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/skills" component={SkillSection} />
        {/* <Route path="/experience" component={Experience} /> */}
        {/* <Route path="/education" component={Education} /> */}
        {/* <Route path="/youtube" component={YouTube} /> */}
      </div>
      <ScrollToTop/>
      <Footer />
    </Router>
  );
}

export default App;
