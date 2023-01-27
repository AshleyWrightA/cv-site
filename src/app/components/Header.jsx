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
    <div className="header-div page-div">
      <h2>Ashley Wright</h2>
      <div className="header-container-right">
        <button className="header-button-home">
          <FontAwesomeIcon icon={faHome} />
          Home
        </button>
        <button className="header-button-about">
          <FontAwesomeIcon icon={faCircleUser} />
          About
        </button>
        <button className="header-button-skills">
          <FontAwesomeIcon icon={faWandMagicSparkles} />
          Skills
        </button>
        <button className="header-button-projects">
          <FontAwesomeIcon icon={faHammer} />
          Projects
        </button>
        <button className="header-button-contact">
          <FontAwesomeIcon icon={faEnvelope} />
          Contact
        </button>
        <button className="header-button-navigation">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </div>
  );
}
