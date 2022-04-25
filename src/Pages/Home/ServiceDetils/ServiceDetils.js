import React from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import useServiceDetils from "../../../useServices/useServiceDetils";

const ServiceDetils = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetils(serviceId);

  return (
    <div className="text-center">
      <h2>You are about to book {service.name}</h2>
      <Link to={`/checkout/${serviceId}`}>
        <Button variant="primary">Price</Button>
      </Link>
    </div>
  );
};

export default ServiceDetils;
