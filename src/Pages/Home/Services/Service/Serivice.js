import React from "react";

const Serivice = ({ service }) => {
  const { name, price, description, img } = service;
  return (
    <div>
      <img src={img} alt="" />
      <h3>{name}</h3>
    </div>
  );
};

export default Serivice;
