import React from "react";
import ReactDOM from "react-dom/client";
import "./css/meyer-reset.css";
import "./css/index.css";
import "./css/header.css";
import "./css/hero.css";
import "./css/about.css";
import "./css/Skills.css";
import Header from "./app/Header";
import Hero from "./app/Hero";
import About from "./app/About";
import Skills from "./app/Skills";
import reportWebVitals from "./test/reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <Hero />
    <About />
    <Skills />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
