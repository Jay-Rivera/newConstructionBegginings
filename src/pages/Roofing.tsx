import MainImg from "../assets/images/roofingafter-3.jpg";
import SecondImg from "../assets/images/roofingbefore-2.jpg";

function Roofing() {
  return (
    <div className="roofing__container">
      {/* Introduction Section */}
      <section className="roofing__main">
        <div className="roofing__main--text">
          <h1>Expert Roofing Services by New Beginnings Construction</h1>
          <h2 className="green">
            <em>New Roofs. Repairs. Reliable Protection.</em>
          </h2>
          <p>
            Whether you’re constructing a new home or updating an aging roof,
            New Beginnings Construction delivers high-quality roofing services
            designed to withstand the Pacific Northwest’s toughest weather. From
            complete installations to targeted repairs, we help homeowners
            protect their investment with durable, energy-efficient, and
            attractive roofing solutions.
          </p>

          <h2 className="sub__heading">
            Why Your Roof Deserves Professional Care
          </h2>
          <p>
            Your roof is your home's first defense against wind, rain, snow, UV
            rays, and debris. Over time, exposure to these elements can cause
            cracks, leaks, and other structural issues. Choosing quality
            materials and a skilled roofing contractor makes all the difference
            in how your home performs and ages.
            <br />
            <br />
            Our experienced team provides thorough inspections, helping you
            distinguish normal aging from early warning signs. You’ll get honest
            feedback, practical options, and lasting workmanship— tailored to
            your specific property needs.
          </p>
        </div>

        <div className="roofing__main--image">
          <img
            src={MainImg}
            alt="Newly installed roof by New Beginnings Construction"
            className="service__page--img"
          />
        </div>
      </section>

      {/* Roof Aging & Common Issues */}
      <section className="roofing__main">
        <div className="roofing__main--image">
          <img
            src={SecondImg}
            alt="Old roof showing signs of wear before replacement"
            className="service__page--img"
          />
        </div>

        <div className="roofing__main--text">
          <h2 className="sub__heading">What Happens as Your Roof Ages?</h2>
          <p>
            Even a properly installed roof will age with time. In the first
            year, it's normal to see small signs like minor blistering or
            granule shedding—especially in colder or wetter seasons. These early
            indicators typically stabilize, but over time, wear becomes more
            visible and impactful.
            <br />
            <br />
            As your roof enters its mid-life stage, subtle issues may appear:
            cracked shingles, lifted edges, or fading protection layers. These
            may not demand immediate replacement but should be monitored
            regularly to avoid long-term damage.
          </p>

          <h2 className="sub__heading">Signs Your Roof May Need Attention</h2>
          <p>
            Look out for the following issues that may signal the need for
            repair or replacement:
          </p>
          <ul className="page__list">
            <li className="list__item">
              Cracks in shingles or flashing around chimneys and vents
            </li>
            <li className="list__item">
              Excessive granule loss or bald spots on asphalt shingles
            </li>
            <li className="list__item">
              Water stains on ceilings or walls inside the home
            </li>
            <li className="list__item">
              Moss or algae growth on shaded roof sections
            </li>
            <li className="list__item">
              Clogged or sagging gutters due to debris accumulation
            </li>
            <li className="list__item">Leaks during or after rainstorms</li>
            <li className="list__item">
              Overhanging branches or tree limbs pressing against roofing
              materials
            </li>
          </ul>

          <p>
            If you’ve noticed any of these problems, it’s time to schedule an
            inspection. Proactive roofing maintenance can extend the life of
            your system and help avoid costly emergency repairs.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Roofing;
