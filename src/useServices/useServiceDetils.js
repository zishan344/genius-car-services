import { useEffect, useState } from "react";

const useServiceDetils = (serviceId) => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch(`https://tranquil-badlands-76544.herokuapp.com/service/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);
  return [service];
};

export default useServiceDetils;
