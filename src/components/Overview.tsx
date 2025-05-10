import { Link } from "react-router-dom";
import RoofingLogo from "../assets/icons/roof-repair-icon.svg";
import SidingLogo from "../assets/icons/brick-wall-icon.svg";
import PatioLogo from "../assets/icons/terrace-icon.svg";
import GlassLogo from "../assets/icons/glass-window-icon.svg";

function Overview() {
  return (
    <div className="landing__services--section">
      <div className="landing__service--top">
        <p>Our Services</p>
        <h2>Professional Featured</h2>
      </div>
      <div className="landing__service--bottom">
        <Link to="/Roofing" className="landing__service">
          <div className="landing__service--img">
            <img src={RoofingLogo} alt="Roofing" />
          </div>
          <div className="landing__text--section">
            <p>Roofing</p>
          </div>
        </Link>

        <Link to="/Siding" className="landing__service">
          <div className="landing__service--img">
            <img src={SidingLogo} alt="Siding" />
          </div>
          <div className="landing__text--section">
            <p>Siding</p>
          </div>
        </Link>

        <Link to="/Windows" className="landing__service">
          <div className="landing__service--img">
            <img src={GlassLogo} alt="Window Installation" />
          </div>
          <div className="landing__text--section">
            <p>Window Installation</p>
          </div>
        </Link>

        <Link to="/DecksAndPatios" className="landing__service">
          <div className="landing__service--img">
            <img src={PatioLogo} alt="Decks and Patios" />
          </div>
          <div className="landing__text--section">
            <p>Decks and Patios</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Overview;
