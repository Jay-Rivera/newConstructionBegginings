import RoofingLogo from "../assets/icons/roof-repair-icon.svg";
import SidingLogo from "../assets/icons/brick-wall-icon.svg";
import RemodelingLogo from "../assets/icons/home-renovation-icon.svg";
import MultiPropertyLogo from "../assets/icons/property-icon.svg";
import PatioLogo from "../assets/icons/terrace-icon.svg";
function Overview() {
  return (
    <div className="landing__services--section">
      <div className="landing__service--top">
        <p>Our Services</p>
        <h2>Professional Featured</h2>
      </div>
      <div className="landing__service--bottom">
        <div className="landing__service">
          <img src={RoofingLogo} alt="Roofing" />
          <p>Roofing</p>
        </div>
        <div className="landing__service">
          <img src={SidingLogo} alt="Roofing" />
          <p>Siding</p>
        </div>
        <div className="landing__service">
          <img src={RemodelingLogo} alt="Roofing" />
          <p>Home Remodeling and Renovation</p>
        </div>
        <div className="landing__service">
          <img src={PatioLogo} alt="Roofing" />
          <p>Decks and Patios</p>
        </div>
        <div className="landing__service">
          <img src={MultiPropertyLogo} alt="Roofing" />
          <p>Commercial and Residential</p>
        </div>
      </div>
      <div className="overview__description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          excepturi pariatur beatae iusto labore, saepe minus possimus inventore
          alias numquam distinctio porro repellat doloribus quia sed hic
          laboriosam repudiandae! In quidem neque aut odit veniam earum omnis,
          quo voluptatum voluptates architecto alias eius dolore rerum,
          accusamus, molestias ea ab fuga.
        </p>
      </div>
    </div>
  );
}

export default Overview;
