import React from "react";
import { useParams } from "react-router-dom";
import { services } from "../assets/data/servicesData";

type ServiceParams = {
  serviceName?: string;
};

const ServiceDetail: React.FC = () => {
  const { serviceName } = useParams<ServiceParams>();

  const decodedName = decodeURIComponent(serviceName || "");

  const service = services.find(
    (s) => s.title.toLowerCase() === decodedName.toLowerCase()
  );

  if (!service) {
    return (
      <div className="service__detail--page">
        <h2 className="error__message">Service not found</h2>
      </div>
    );
  }

  return (
    <div className="service__detail--page">
      <div className="service__detail--page-left">
        <h1>{service.heading}</h1>
        <p>{service.body}</p>
      </div>
      <div className="service__detail--page-right">
        <img src={service.image} alt="" width={250} />
      </div>
    </div>
  );
};

export default ServiceDetail;
