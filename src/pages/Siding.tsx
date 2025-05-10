import MainImg from "../assets/images/siding1.jpg";
import SecondImg from "../assets/images/sidin2.jpg";

function Siding() {
  return (
    <div className="roofing__container">
      {/* Introduction Section */}
      <section className="roofing__main">
        <div className="roofing__main--text">
          <h1>Siding Services by New Beginnings Construction</h1>
          <h2 className="green">
            <em>Protective. Beautiful. Built to Last.</em>
          </h2>
          <p>
            With over 25 years of experience, New Beginnings Construction
            provides expert siding installation and replacement for both
            homeowners and commercial property managers across the Pacific
            Northwest. Whether you're revitalizing your home or coordinating a
            multi-unit development, we help you choose long-lasting,
            energy-efficient siding materials that enhance curb appeal and
            performance.
          </p>

          <h2 className="sub__heading">Commercial Siding Expertise</h2>
          <p>
            We support commercial projects with full-service siding solutions,
            offering expert guidance on materials like vinyl, fiber cement, and
            metal—along with a commitment to staying on budget and minimizing
            disruption.
          </p>

          <ul className="page__list">
            <li className="list__item">
              Detailed consultations and accurate estimates
            </li>
            <li className="list__item">
              Professional material guidance for long-term performance
            </li>
            <li className="list__item">
              Seamless project management with transparent communication
            </li>
          </ul>
        </div>

        <div className="roofing__main--image">
          <img
            src={MainImg}
            alt="New siding installation on commercial property"
            className="service__page--img"
          />
        </div>
      </section>

      {/* Residential Siding Section */}
      <section className="roofing__main">
        <div className="roofing__main--image">
          <img
            src={SecondImg}
            alt="Home before siding replacement showing signs of wear"
            className="service__page--img"
          />
        </div>

        <div className="roofing__main--text">
          <h2 className="sub__heading">Residential Siding Replacement</h2>
          <p>
            Is your home’s exterior showing signs of wear—like warping,
            cracking, fading, or increased utility bills? We specialize in
            high-performance siding replacement in Seattle, Tacoma, and
            surrounding areas. Our expert installers upgrade homes with
            materials that balance beauty, durability, and energy efficiency.
          </p>

          <ul className="page__list">
            <li className="list__item">Free in-home consultation and quote</li>
            <li className="list__item">
              Pre-scheduled delivery of materials for an on-time start
            </li>
            <li className="list__item">
              Moisture-resistant vapor barrier for added protection
            </li>
            <li className="list__item">
              Final walkthrough to ensure full satisfaction and quality
            </li>
          </ul>

          <h2 className="sub__heading">Material Options: Built Around You</h2>
          <p>
            We offer premium siding materials to match your home’s architecture,
            climate needs, and personal style.
          </p>

          <p className="green">James Hardie® Fiber Cement Siding</p>
          <ul className="page__list">
            <li className="list__item">
              Durable, wood-like appearance in many colors
            </li>
            <li className="list__item">
              Fire-resistant and built for extreme weather
            </li>
            <li className="list__item">Low maintenance and long lifespan</li>
            <li className="list__item">
              Adds long-term resale value to your home
            </li>
          </ul>

          <div className="fact__box">
            <p className="fact">
              <em>
                Fact: Over 50% of homeowners who installed vinyl siding later
                said they would have chosen a different material if given the
                opportunity.
              </em>
            </p>

            <p className="green">Cedar Siding (Bevel Style Available)</p>
            <ul className="page__list">
              <li className="list__item">
                Natural wood texture with timeless curb appeal
              </li>
              <li className="list__item">
                Naturally resistant to moisture and insects
              </li>
              <li className="list__item">
                Can be customized with unique stains, paints, or finishes
              </li>
              <li className="list__item">
                Treated with PrimePlus™ sealant for extended lifespan
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Siding;
