import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";
const Serivice = ({ service }) => {
  const { id, name, price, description, img } = service;
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p>price {price}</p>
      <p>
        <small>{description}</small>
      </p>
      <button onClick={() => handleNavigate(id)} className="btn btn-primary">
        Book {name}
      </button>
    </div>
  );
};

export default Serivice;
