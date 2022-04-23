import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const ServiceDetils = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/service/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="text-center">
      <h2>You are about to book {service.name}</h2>
      <Link to="/checkout">
        <Button variant="primary">Price</Button>
      </Link>
    </div>
  );
};

export default ServiceDetils;
