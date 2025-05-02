import { Link } from "react-router-dom";
import AboutImg from "../assets/images/9-Mar 17, 2025 17-20-13-mrSG.jpg";

function About() {
  return (
    <div className="about__section">
      <div className="about__section--left">
        <p className="about__pre-header">
          YOUR TRUSTED EXPERTS FOR SIDING, ROOFING AND MORE!
        </p>
        <h2>Welcome to New Begginings Construction!</h2>
        <p className="about__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem quas enim sed voluptate ipsam temporibus. Ducimus
          exercitationem molestiae incidunt fuga?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur iure
          provident omnis ducimus laudantium soluta nihil delectus. Omnis
          soluta, nemo impedit sunt corporis incidunt amet dolores pariatur
          quibusdam! Expedita, obcaecati.
        </p>
        <Link className="button about__btn" to="/Quote">
          Request Quote
        </Link>
      </div>
      <div className="about__section--right">
        <img src={AboutImg} alt="" />
      </div>
    </div>
  );
}

export default About;
