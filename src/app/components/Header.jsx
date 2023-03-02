import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faCircleUser,
  faHammer,
  faEnvelope,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <nav className="header-nav page-div">
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
