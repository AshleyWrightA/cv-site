import { Component } from "react";
import { heroLogic } from "./HeroLogic";

class Hero extends Component {
  componentDidMount() {
    heroLogic();
  }
  render() {
    return (
      <div className="hero">
        <div className="hero-div-text-container">
          <h1 className="hero-h1-dynamic-text"></h1>
        </div>
        <p className="hero-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate diam eget
          vehicula ullamcorper. Ut tincidunt, ligula nec gravida placerat, urna diam fringilla nibh,
          ac luctus est tellus quis arcu. Curabitur tortor est, posuere at vehicula vitae, lacinia
          ac augue. Donec at vulputate dolor, id egestas neque. Donec porttitor risus diam, ac
          faucibus leo semper ac.
        </p>
        <div className="hero-div-button-container">
          <button className="hero-button-about">About Me</button>
          <button className="hero-button-projects">Projects</button>
          <button className="hero-button-contact">Contact</button>
        </div>
      </div>
    );
  }
}

export default Hero;
