import React, { useEffect, useState } from "react";
import Serivice from "../Service/Serivice";
import "./Services.css";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://tranquil-badlands-76544.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="service" className="mt-5">
      <h3 className="text-primary text-center">Services {services.length}</h3>
      <div className="services-container">
        {services.map((service) => (
          <Serivice service={service} key={service._id}></Serivice>
        ))}
      </div>
    </div>
  );
};

export default Services;
