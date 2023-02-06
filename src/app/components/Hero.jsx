import { Component } from "react";
import Typed from "typed.js";

class Hero extends Component {
  componentDidMount() {
    heroLogic();
  }
  render() {
    return (
      <div className="hero-div page-div" id="hero">
        <div className="hero-div-text-container">
          <h1 className="hero-h1-dynamic-intro">I am a&nbsp;</h1>
          <h1 className="hero-h1-dynamic-text">&nbsp;</h1>
        </div>
        <p className="hero-info">IT graduate, life-long techie with a passion for development.</p>
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

function heroLogic() {
  const dynamicTextOptions = {
    strings: [
      "NAIT Graduate 🎓",
      "Techie 👩‍💻",
      "BoardGame Geek ♟️",
      "History Nerd 📖",
      "Developer 💻",
      "Game Master 🎲",
      "Cat Person 🐱",
      "Coffee Addict ☕",
      "Google-fu Master ⌨️",
      "Gardener 🌱",
    ],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
    smartBackspace: true,
    shuffle: true,
  };

  const dynamicText = new Typed(".hero-h1-dynamic-text", dynamicTextOptions);
}

export default Hero;
