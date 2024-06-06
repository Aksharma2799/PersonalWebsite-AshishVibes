import { BrowserRouter as Router, Route } from "react-router-dom";
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "./ScrollToTop";
import TechIcons from "./components/TechIcons/TechIcons";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        {/* <Route path="*" component={PageNotFound} /> */}
      </div>
      <ScrollToTop />
      <TechIcons/>
      <Footer />
    </Router>
  );
}

export default App;
