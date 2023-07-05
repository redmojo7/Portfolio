import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Brute from "./components/Labs/Brute/Brute";
import Privilege from "./components/Labs/Privilege/Privilege";
import Template from "./components/Labs/Template/Template";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Phishing from "./components/Labs/Phishing/Phishing";
import HTTPSActivity from "./components/Labs/HTTPSActivity/HTTPSActivity";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/labs" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
          <Route path="/labs/brute" element={<Brute />} />
          <Route path="/labs/phishing" element={<Phishing />} />
          <Route path="/labs/https" element={<HTTPSActivity /> } />
          <Route path="/labs/privilege" element={<Privilege /> } />
          <Route path="/labs/puzzle2" element={<Template /> } />
          <Route path="/labs/puzzle3" element={<Template /> } />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
