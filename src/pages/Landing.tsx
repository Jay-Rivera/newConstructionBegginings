import Reviews from "../components/Reviews";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <div className="landing__section">
        <h1 className="landing__title">Built to Last. Designed to Impress.</h1>
        <Link to="/Services" className="button hero__btn">
          Discover More
        </Link>
      </div>
      <div className="landing__services--section">
        <div className="landing__service--top">
          <p>Our Services</p>
          <h2>Professional Featured</h2>
        </div>
        <div className="landing__service--bottom">
          <ServiceCard></ServiceCard>
          <ServiceCard></ServiceCard>
          <ServiceCard></ServiceCard>
          <ServiceCard></ServiceCard>
        </div>
      </div>
      <Reviews />
    </div>
  );
}

export default Landing;
