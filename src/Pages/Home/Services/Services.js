import React, { useEffect, useState } from "react";
import Serivice from "../Service/Serivice";
import "./Services.css";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="service" className="mt-5">
      <h3 className="text-primary text-center">Services {services.length}</h3>
      <div className="services-container">
        {services.map((service) => (
          <Serivice service={service} key={service.id}></Serivice>
        ))}
      </div>
    </div>
  );
};

export default Services;
