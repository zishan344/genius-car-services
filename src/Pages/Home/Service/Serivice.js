import React from "react";
import "./Service.css";
const Serivice = ({ service }) => {
  const { name, price, description, img } = service;
  return (
    <div className="service">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p>price {price}</p>
      <p>
        <small>{description}</small>
      </p>
      <button className="btn btn-primary">Book {name}</button>
    </div>
  );
};

export default Serivice;
