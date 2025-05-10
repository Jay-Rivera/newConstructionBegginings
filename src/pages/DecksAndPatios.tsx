import MainImg from "../assets/images/deck1.jpg";
import SecondImg from "../assets/images/deck2.jpg";

function DecksPatios() {
  return (
    <div className="roofing__container">
      <div className="roofing__main">
        <div className="roofing__main--text">
          <h1>
            Custom Deck & Patio Construction by New Beginnings Construction
          </h1>
          <h2 className="green">
            <em>Built for Comfort. Crafted to Last.</em>
          </h2>
          <p>
            At New Beginnings Construction, we transform your outdoor space with
            custom-built decks and patios that extend the way you live,
            entertain, and relax. Whether you envision a cozy backyard escape, a
            large entertaining space, or a sleek commercial deck, our team
            delivers high-quality, code-compliant results.
          </p>

          <h2 className="sub__heading">Residential Deck & Patio Services</h2>
          <p>
            From wraparound porches to elevated decks with scenic views, we
            design and build custom outdoor spaces tailored to your home’s
            architecture and lifestyle. Choose from natural wood like cedar and
            redwood or low-maintenance composite options like Trex® and
            TimberTech®.
          </p>
          <ul className="page__list">
            <li className="list__item">
              Personalized layout and style planning
            </li>
            <li className="list__item">
              Premium materials suited to Northwest weather
            </li>
            <li className="list__item">
              Optional features: built-in seating, lighting, pergolas
            </li>
            <li className="list__item">
              Seamless integration with existing landscaping
            </li>
          </ul>
        </div>
        <div className="roofing__main--image">
          <img
            src={MainImg}
            alt="Custom residential deck built with composite material"
            className="service__page--img"
          />
        </div>
      </div>

      <div className="roofing__main">
        <div className="roofing__main--image">
          <img
            src={SecondImg}
            alt="Commercial multi-unit deck with railing"
            className="service__page--img"
          />
        </div>
        <div className="roofing__main--text">
          <h2 className="sub__heading">Commercial Deck Construction</h2>
          <p>
            Serving restaurants, apartment complexes, offices, and more—our
            commercial deck services ensure ADA-compliance, safety, and
            aesthetic value for high-traffic use. We design and construct
            reinforced decks that stand up to weather and wear.
          </p>
          <ul className="page__list">
            <li className="list__item">ADA-compliant and code-ready builds</li>
            <li className="list__item">
              Durable, maintenance-friendly materials
            </li>
            <li className="list__item">
              Custom sizing for walkways, seating areas, and rooftop decks
            </li>
            <li className="list__item">
              Efficient permitting and project coordination
            </li>
          </ul>

          <h2 className="sub__heading">Our Build Process</h2>
          <ul className="page__list">
            <li className="list__item">
              On-site consultation and property assessment
            </li>
            <li className="list__item">Custom design + transparent quote</li>
            <li className="list__item">Permit handling and prep work</li>
            <li className="list__item">
              Expert construction by licensed professionals
            </li>
            <li className="list__item">Walkthrough and final detailing</li>
          </ul>

          <h2 className="sub__heading">Deck Repair & Upgrades</h2>
          <p>
            Already have a deck in need of attention? We repair aging structures
            and modernize your space with updated materials and added features.
          </p>
          <ul className="page__list">
            <li className="list__item">Board and frame replacement</li>
            <li className="list__item">Composite deck upgrades</li>
            <li className="list__item">
              New railings, stairs, or privacy walls
            </li>
            <li className="list__item">Resurfacing, sealing, or staining</li>
          </ul>

          <div className="fact__box">
            <p className="fact">
              <em>
                Did you know? A well-designed deck can return over 60% of its
                cost in home value.
              </em>
            </p>
          </div>

          <p>
            Let us bring your outdoor vision to life—whether it's a brand new
            deck, an expanded patio, or an upgrade to your existing space.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DecksPatios;
