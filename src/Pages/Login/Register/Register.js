import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Social from "../Login/Social/Social";
import "./Register.css";
const Register = () => {
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);
  const [agree, setAgree] = useState(false);

  const emailRef = useRef("");
  const nameRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  if (user) {
    navigate("/");
  }
  const navigateLogin = () => {
    navigate("/login");
  };
  const formSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password);
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={() => setAgree(!agree)}
            type="checkbox"
            className={`ps-2 ${!agree ? "text-danger" : ""}`}
            label="Accept Genius Car Terms and Conditions"
            name="checkbox"
          />
        </Form.Group>
        {/* <label
          htmlFor="checkbox"
          className={`ps-2 ${agree ? "text-danger" : ""}`}
        >
          Accept Genius Car Terms and Conditions
        </label> */}
        <input
          disabled={!agree}
          className="w-50 mx-auto btn-primary"
          type="submit"
          value="Register"
        />
      </form>
      <p>
        Already registered ?
        <span onClick={navigateLogin} className="text-danger label-success btn">
          Please Login
        </span>
      </p>
      <Social></Social>
    </div>
  );
};

export default Register;
