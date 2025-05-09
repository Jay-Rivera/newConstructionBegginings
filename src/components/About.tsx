import { Link } from "react-router-dom";
import AboutImg from "../assets/images/9-Mar 17, 2025 17-20-13-mrSG.jpg";

function About() {
  return (
    <div className="about__section">
      <div className="about__section--left">
        <p className="about__pre-header">
          YOUR TRUSTED EXPERTS FOR SIDING, ROOFING AND MORE!
        </p>
        <h2>Welcome to New Beginnings Construction!</h2>
        <p className="about__text">
          With over 25 years of hands-on experience,{" "}
          <span className="green">New Beginnings Construction</span> is a proud
          family-run construction company built on the values of integrity,
          safety, and craftsmanship. For more than two decades, we’ve brought
          our clients’ visions to life — creating spaces that are not only
          structurally sound but also beautifully designed.
          <br />
          <br />
          As a multi-generational team, we combine time-tested skills with a
          personal commitment to every project, big or small. Whether it’s a
          custom home, renovation, or commercial build, we treat each job with
          the same care and attention we’d give our own. At the heart of our
          work is a simple promise: to deliver high-quality results that stand
          the test of time — safely, honestly, and beautifully.
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
