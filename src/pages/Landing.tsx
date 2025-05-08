import About from "../components/About";
import Reviews from "../components/Reviews";
import { Link } from "react-router-dom";
import Overview from "../components/Overview";

function Landing() {
  return (
    <div>
      <div className="landing__section">
        <div className="overlay__hero"></div>
        <div className="hero__title--section">
          <h1 className="landing__title">
            New Beginnings Construction Inc.
            <br />
            Over 25 years of Trusted Roofing & Siding Excellence
          </h1>
          <div className="hero__buttons">
            <Link to="/Services" className="hero__btn">
              Discover More
            </Link>
            <Link className="button" to="/Quote">
              Request Quote
            </Link>
          </div>
        </div>
      </div>
      <About />
      <Overview />
      <Reviews />
    </div>
  );
}

export default Landing;
