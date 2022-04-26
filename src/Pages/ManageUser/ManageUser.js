import React from "react";
import useServices from "../../useServices/useServices";

const ManageUser = () => {
  const [services, setServices] = useServices();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      const url = `https://tranquil-badlands-76544.herokuapp.com/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
          console.log(data);
        });
    }
  };
  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center">Manage All User </h2>
      <div className="text-center">
        {services.map((service) => (
          <h5 key={service._id}>
            {service.name}
            <button onClick={() => handleDelete(service._id)}>X</button>
          </h5>
        ))}
      </div>
    </div>
  );
};

export default ManageUser;
