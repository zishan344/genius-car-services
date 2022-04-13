import React from "react";
import picture from "../../Images/404.jpg";

const NotFound = () => {
  return (
    <div>
      <h2 className="text-primary text-center my-4">Mechanic is sleeping</h2>
      <img className="w-100" src={picture} alt="" />
    </div>
  );
};

export default NotFound;
