import React from "react";
import ReactDOM from "react-dom/client";
import "./css/meyer-reset.css";
import "./css/index.css";
import "./css/header.css";
import "./css/hero.css";
import "./css/about.css";
import "./css/skills.css";
import "./css/project.css";
import "./css/contact.css";
import Header from "./app/components/Header";
import Hero from "./app/components/Hero";
import About from "./app/components/About";
import Skills from "./app/components/Skills";
import Projects from "./app/components/Projects";
import Contact from "./app/components/Contact";
import reportWebVitals from "./test/reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
