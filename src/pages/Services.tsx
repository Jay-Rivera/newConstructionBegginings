import { services } from "../assets/data/servicesData";
import ServiceCard from "../components/ServiceCard";

function Services() {
  return (
    <>
      <div className="services__hero">
        <div className="services__hero--text">
          <h1>Our Services</h1>
        </div>
      </div>
      <div className="services__section">
        <div className="services">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              buttonLabel={service.buttonLabel}
              onButtonClick={() => alert(`${service.title} clicked`)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
