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

    const sideNavButton = document.querySelector(".header-button-navigation");
    const sideNav = document.querySelector(".side-nav");
    const sideAnchorWrapper = document.querySelector(".side-anchor-wrapper");

    //Initialize value for the DOM
    sideNav.style.width = "0vw";
    sideAnchorWrapper.style.display = "none";

    sideNavButton.addEventListener("click", (e) => {
      if (sideNav.style.width === "0vw") {
        sideNav.style.width = "32vw";
        sideAnchorWrapper.style.display = "flex";
      } else {
        sideAnchorWrapper.style.display = "none";
        sideNav.style.width = "0vw";
      }
    });
  }, []);

  return (
    <div className="header-wrapper">
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
          <button className="header-button-navigation">
            <p>
              <FontAwesomeIcon icon={faBars} />
            </p>
          </button>
        </div>
      </nav>
      <div className="side-nav">
        <div className="side-anchor-wrapper">
          <a href="#hero" className="side-anchor-home">
            <FontAwesomeIcon icon={faHome} />
            Home
          </a>
          <a href="#about" className="side-anchor-about">
            <FontAwesomeIcon icon={faCircleUser} />
            About
          </a>
          <a href="#skill" className="side-anchor-skills">
            <FontAwesomeIcon icon={faWandMagicSparkles} />
            Skills
          </a>
          <a href="#project" className="side-anchor-projects">
            <FontAwesomeIcon icon={faHammer} />
            Projects
          </a>
          <a href="#contact" className="side-anchor-contact">
            <FontAwesomeIcon icon={faEnvelope} />
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
