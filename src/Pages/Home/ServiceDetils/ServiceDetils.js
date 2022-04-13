import React from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const ServiceDetils = () => {
  const { serviceId } = useParams();

  return (
    <div className="text-center">
      <h2>Well Come to Service Details {serviceId}</h2>
      <Link to="/checkout">
        <Button variant="primary">Price</Button>
      </Link>
    </div>
  );
};

export default ServiceDetils;
