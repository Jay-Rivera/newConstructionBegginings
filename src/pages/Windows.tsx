import React from "react";
import MainImg from "../assets/images/window1.jpg";
import SecondImg from "../assets/images/window2.jpg";
import ThirdImg from "../assets/images/window3.jpg";

const WindowServices: React.FC = () => {
  return (
    <div className="roofing__container">
      {/* Main Introduction Section */}
      <section className="roofing__main">
        <header className="roofing__main--text">
          <h1>Expert Window Services in Greater Seattle</h1>
          <h2 className="green">
            <em>Installations. Replacements. Energy Efficiency.</em>
          </h2>
          <p>
            At New Beginnings Construction, we specialize in high-quality window
            installation and replacement services for both residential and
            commercial properties. Whether you’re building new or upgrading old
            windows, our team delivers long-lasting solutions that improve
            comfort, efficiency, and curb appeal.
          </p>
          <h2 className="sub__heading">
            Tailored Window Solutions for Every Property
          </h2>
          <p>
            From single-family homes in Bellevue to commercial buildings in
            Tacoma, we provide windows that match your property’s needs,
            architectural style, and budget. We offer in-person consultations
            and take the time to understand your project goals before
            recommending the best-fit materials and designs.
          </p>
        </header>

        <div className="roofing__main--image">
          <img
            src={MainImg}
            alt="Residential window installation by New Beginnings Construction in Seattle"
            className="service__page--img"
          />
        </div>
      </section>

      {/* Materials & Benefits Section */}
      <section className="roofing__main">
        <div className="roofing__main--image">
          <img
            src={SecondImg}
            alt="Commercial window replacement project in Bellevue"
            className="service__page--img"
          />
        </div>
        <div className="roofing__main--text">
          <h2 className="sub__heading">Choosing the Right Window Material</h2>
          <p>
            Not all windows are created equal. That’s why we help you choose
            from a wide range of high-performance options:
          </p>
          <ul className="page__list">
            <li className="list__item">
              <strong>Vinyl:</strong> Affordable, energy-efficient, and
              low-maintenance
            </li>
            <li className="list__item">
              <strong>Fiberglass:</strong> Durable and ideal for extreme weather
              conditions
            </li>
            <li className="list__item">
              <strong>Aluminum:</strong> Sleek, strong frames perfect for
              commercial use
            </li>
            <li className="list__item">
              <strong>Wood-clad:</strong> Combines traditional charm with modern
              insulation
            </li>
          </ul>
          <p>
            As a certified window dealer, we work with trusted brands to ensure
            every product meets the highest standards in performance, warranty,
            and energy efficiency.
          </p>
          <h2 className="sub__heading">Signs You May Need New Windows</h2>
          <p>
            Recognizing early warning signs can help you avoid larger issues
            down the road. Contact us if you notice:
          </p>
          <ul className="page__list">
            <li className="list__item">
              Drafts or inconsistent temperatures near windows
            </li>
            <li className="list__item">Foggy or cloudy glass between panes</li>
            <li className="list__item">
              Rotting frames, stuck sashes, or broken hardware
            </li>
            <li className="list__item">
              Increased outside noise or rising energy bills
            </li>
          </ul>
          <p>
            We provide expert evaluations and honest guidance to help you
            determine whether a repair or full replacement is the right
            solution.
          </p>
        </div>
      </section>

      {/* Signs of Trouble & Process */}
      <section className="roofing__main">
        <div className="roofing__main--text">
          <h2 className="sub__heading">Our Window Installation Process</h2>
          <p>
            From first consultation to final inspection, we make window upgrades
            stress-free:
          </p>
          <ul className="page__list">
            <li className="list__item">
              On-site consultation to assess your current windows
            </li>
            <li className="list__item">
              Custom recommendations based on your goals and budget
            </li>
            <li className="list__item">
              Delivery and professional installation by licensed crews
            </li>
            <li className="list__item">
              Post-installation walk-through and satisfaction guarantee
            </li>
          </ul>
          <h2 className="sub__heading">Serving Greater Seattle with Pride</h2>
          <p>
            We proudly serve homeowners and businesses throughout King,
            Snohomish, and Pierce Counties—including Seattle, Bellevue, Redmond,
            Kirkland, Tacoma, and Everett. Whether you need a full window
            replacement or expert advice on your next remodel, New Beginnings
            Construction is here to help.
          </p>
        </div>
        <div className="roofing__main--image">
          <img
            src={ThirdImg}
            alt="Residential window installation by New Beginnings Construction in Seattle"
            className="service__page--img"
          />
        </div>
      </section>
    </div>
  );
};

export default WindowServices;
