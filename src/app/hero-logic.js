import Typed from "typed.js";

export const heroLogic = () => {
  const dynamicTextOptions = {
    strings: [
      "I am a NAIT Graduate 🎓",
      "I am a Techie 👩‍💻",
      "I am a BoardGame Geek ♟️",
      "I am a History Nerd 📖",
      "I am a Developer 🖥",
      "I am a Game Master 🎲",
      "I am a Cat Person 🐱",
      "I am a Coffee Addict ☕",
      "I am a Google-fu Master ⌨️",
      "I am a Gardener 🌱",
    ],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true,
    smartBackspace: true,
    shuffle: true,
  };

  const dynamicText = new Typed(".hero-h1-dynamic-text", dynamicTextOptions);
};
