import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <div className="landing__section">
        <img
          className="landing_image"
          src="https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/af/11/ab/a7/c0/v1_E10/E109IWIL.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=91ff8d66372a07fd8fc57dc78a3b998251219dbe446cc7bd2622acb1a69ef10e"
          width="800"
          alt=""
        />
        <h1 className="landing__title">Built to Last. Designed to Impress.</h1>
        <Link to="/Services" className="button">
          Discover More
        </Link>
      </div>
      <div className="landing__services--section">
        <div className="landing__service--top">
          <p>Our Services</p>
          <h2>Professional Featured</h2>
        </div>
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
      </div>
    </div>
  );
}

export default Landing;
