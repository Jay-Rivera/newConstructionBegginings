import DetailServiceCard from "../components/DetailServiceCard";
import { services } from "../assets/data/servicesData";

function Services() {
  return (
    <>
      <div className="services__hero">
        <div className="services__hero--text">
          <h1>Our Services</h1>
          <p>Text Here</p>
        </div>
      </div>
      <div className="services">
        {services.map((service) => (
          <DetailServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            image={service.image}
            buttonLabel={service.buttonLabel}
            onButtonClick={() => alert(`${service.title} clicked`)}
          />
        ))}
      </div>
    </>
  );
}

export default Services;
