import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
const Register = () => {
  const emailRef = useRef("");
  const nameRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };
  const formSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
  };
  return (
    <div className="Register-form">
      <h2 className="text-primary text-center my-4">Please Register</h2>
      <form onSubmit={formSubmit} className="form-submit">
        <input type="text" placeholder="Your Name" name="name" />
        <input
          ref={emailRef}
          type="email"
          name="email"
          id="email"
          placeholder="Your Email Address"
          required
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Your Password"
          name="password"
          id=""
          required
        />
        <input type="submit" value="Register" />
      </form>
      <p>
        Already registered ?
        <span onClick={navigateLogin} className="text-danger label-success btn">
          Please Login
        </span>
      </p>
    </div>
  );
};

export default Register;
