import React, { useEffect, useState } from "react";
import Serivice from "./Service/Serivice";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h3>Services {services.length}</h3>
      {services.map((service) => (
        <Serivice service={service} key={service.id}></Serivice>
      ))}
    </div>
  );
};

export default Services;
