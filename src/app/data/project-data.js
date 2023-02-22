import etchasketch from "../../assets/images/etchasketch.png";
import forms from "../../assets/images/forms.png";
import resume from "../../assets/images/resume.png";
import tarotcafe from "../../assets/images/tarotcafe.png";
import treasure from "../../assets/images/treasure.png";
import passwordmanager from "../../assets/images/passwordmanager.png";

const localRepoData = [
  {
    id: 587481718,
    displayName: "Live Resume & Portfolio",
    previewImage: resume,
    previewAlt: "",
    techIcons: ["logos:javascript", "logos:react", "logos:css-3", "logos:webpack"],
    ghPages: "",
    demo: true,
    notes: "",
    order: 1,
  },
  {
    id: 601304176,
    displayName: "Web Forms & Validation",
    previewImage: forms,
    previewAlt: "",
    techIcons: ["logos:javascript", "logos:css-3", "logos:html-5", "logos:react"],
    ghPages: "https://ashleywrighta.github.io/forms-react/",
    demo: true,
    order: 2,
  },
  {
    id: 576003393,
    displayName: "Dynamically Loaded Restuarant ",
    previewImage: tarotcafe,
    previewAlt: "",
    techIcons: ["logos:javascript", "logos:css-3", "logos:webpack"],
    ghPages: "https://ashleywrighta.github.io/restaurant-page/",
    demo: true,
    order: 3,
  },
  {
    id: 598309430,
    displayName: "Password Manager",
    previewImage: passwordmanager,
    previewAlt: "Password Manager",
    techIcons: ["logos:python"],
    ghPages: "",
    demo: false,
    order: 4,
  },
  {
    id: 554449771,
    displayName: "Etch A Sketch",
    previewImage: etchasketch,
    previewAlt: "Etch A Sketch Project",
    techIcons: ["logos:javascript", "logos:css-3", "logos:html-5"],
    ghPages: "https://ashleywrighta.github.io/etchasketch-practice/",
    demo: true,
    order: 5,
  },
  {
    id: 563099795,
    displayName: "TTRPG Treasure Generator",
    previewImage: treasure,
    previewAlt: "",
    techIcons: ["logos:python"],
    ghPages: "",
    demo: false,
    order: 6,
  },
];

export default localRepoData;
