import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useServiceDetils from "../../../useServices/useServiceDetils";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetils(serviceId);
  const [user] = useAuthState(auth);
  // const [user, setUser] = useState({
  //   name: "akbar",
  //   email: "akbar@gmail.com",
  //   address: "nowa par 24/57",
  //   phone: "1234587",
  // });
  // const handleEmailChange = (event) => {
  //   console.log(event.target.value);
  //   const { address, ...rest } = user;
  //   const newAddress = event.target.value;
  //   const newUser = { address: newAddress, ...rest };
  //   setUser(newUser);
  // };
  const handelPlaceOrder = (e) => {
    e.preventDefault();
    const order = {
      name: e.target.name.value,
      email: e.target.email.value,
      serviceId: serviceId,
      number: e.target.number.value,
      address: e.target.address.value,
    };
    axios.post("http://localhost:5000/order", order).then((response) => {
      console.log(response);
      const { data } = response;
      if (data.insertedId) {
        toast("your order is booked");
        e.target.reset();
      }
    });
  };
  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center text-success my-5">
        please order {service.name}{" "}
      </h2>
      <form onSubmit={handelPlaceOrder}>
        <input
          readOnly
          disabled
          value={user?.displayName}
          className="w-100 mb-2"
          placeholder="Name"
          type="text"
          name="name"
          id="name"
          required
        />
        <br />
        <input
          readOnly
          disabled
          value={user?.email}
          className="w-100 mb-2"
          placeholder="Email"
          type="email"
          name="email"
          id="email"
          required
        />
        <br />
        <input
          readOnly
          disabled
          value={service.name}
          className="w-100 mb-2"
          placeholder="service"
          type="text"
          name="service"
          id="=service"
          required
        />
        <br />
        <input
          autoComplete="off"
          className="w-100 mb-2"
          placeholder="address"
          type="text"
          name="address"
          id="=address"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          placeholder="Number"
          type="number"
          name="number"
          id="number"
          required
        />
        <br />
        <input className="btn btn-primary" type="submit" value="place order" />
      </form>
    </div>
  );
};

export default Checkout;
