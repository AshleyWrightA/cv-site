import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faCircleUser,
  faHammer,
  faEnvelope,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";

export default function Header() {
  function setScrollStyle(backgroundStyle) {
    const headerNav = document.querySelector(".header-nav");
    headerNav.style.backgroundColor = backgroundStyle;
  }

  //ComponenetDidMount
  useEffect(() => {
    window.onscroll = function () {
      const heroDiv = document.querySelector(".hero-div");
      if (window.innerHeight + window.pageYOffset >= heroDiv.scrollHeight * 1.8) {
        setScrollStyle("var(--palette-1)");
      } else {
        setScrollStyle("transparent");
      }
    };
  }, []);

  return (
    <nav className="header-nav">
      <h2>Ashley Wright</h2>
      <div className="header-container-right">
        <a href="#hero" className="header-anchor-home">
          <FontAwesomeIcon icon={faHome} />
          Home
        </a>
        <a href="#about" className="header-anchor-about">
          <FontAwesomeIcon icon={faCircleUser} />
          About
        </a>
        <a href="#skill" className="header-anchor-skills">
          <FontAwesomeIcon icon={faWandMagicSparkles} />
          Skills
        </a>
        <a href="#project" className="header-anchor-projects">
          <FontAwesomeIcon icon={faHammer} />
          Projects
        </a>
        <a href="#contact" className="header-anchor-contact">
          <FontAwesomeIcon icon={faEnvelope} />
          Contact
        </a>
        <a href="" className="header-anchor-navigation">
          <FontAwesomeIcon icon={faBars} />
        </a>
      </div>
    </nav>
  );
}
