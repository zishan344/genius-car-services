import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetils = () => {
  const { serviceId } = useParams();

  return (
    <div>
      <h2>Well Come to Service Details {serviceId}</h2>
    </div>
  );
};

export default ServiceDetils;
