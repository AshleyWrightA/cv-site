import { Component } from "react";
import { heroLogic } from "../hero-logic.js";

class Hero extends Component {
  componentDidMount() {
    heroLogic();
  }
  render() {
    return (
      <div className="hero-div page-div">
        <div className="hero-div-text-container">
          <h1 className="hero-h1-dynamic-text">&nbsp;</h1>
        </div>
        <p className="hero-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate diam eget
          vehicula ullamcorper. Ut tincidunt, ligula nec gravida placerat, urna diam fringilla nibh,
          ac luctus est tellus quis arcu. Curabitur tortor est, posuere at vehicula vitae, lacinia
          ac augue. Donec at vulputate dolor, id egestas neque. Donec porttitor risus diam, ac
          faucibus leo semper ac.
        </p>
        <div className="hero-div-button-container">
          <a className="hero-anchor-about hero-anchor" href="#about">
            About Me
          </a>
          <a className="hero-button-projects hero-anchor" href="#project">
            Projects
          </a>
          <a className="hero-button-contact hero-anchor" href="#contact">
            Contact
          </a>
        </div>
      </div>
    );
  }
}

export default Hero;
