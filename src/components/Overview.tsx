import RoofingLogo from "../assets/icons/roof-repair-icon.svg";
import SidingLogo from "../assets/icons/brick-wall-icon.svg";
import MultiPropertyLogo from "../assets/icons/property-icon.svg";
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
        <div className="landing__service">
          <div className="landing__service--img">
            <img src={RoofingLogo} alt="Roofing" />
          </div>
          <div className="landing__text--section">
            <p>Roofing</p>
          </div>
        </div>
        <div className="landing__service">
          <div className="landing__service--img">
            <img src={SidingLogo} alt="Roofing" />
          </div>
          <div className="landing__text--section">
            <p>Siding</p>
          </div>
        </div>
        <div className="landing__service">
          <div className="landing__service--img">
            <img src={GlassLogo} alt="Roofing" />
          </div>
          <div className="landing__text--section">
            <p>Window Installation</p>
          </div>
        </div>
        <div className="landing__service">
          <div className="landing__service--img">
            <img src={PatioLogo} alt="Roofing" />
          </div>
          <div className="landing__text--section">
            <p>Decks and Patios</p>
          </div>
        </div>
        <div className="landing__service">
          <div className="landing__service--img">
            <img src={MultiPropertyLogo} alt="Roofing" />
          </div>
          <div className="service__text--section">
            <p>Commercial and Residential</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
