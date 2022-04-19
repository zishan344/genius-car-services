import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import Looding from "../../Shared/Looding/Looding";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Social from "./Social/Social";

const Login = () => {
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  if (user) {
    navigate(from, { replace: true });
  }
  if (loading || sending) {
    return <Looding></Looding>;
  }
  let element;
  if (error) {
    element = (
      <div>
        <p>Error: {error?.message}</p>
      </div>
    );
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const restPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email Address");
    }
  };

  return (
    <div className="w-50 mx-auto">
      <PageTitle title="Login"></PageTitle>
      <h2 className="text-primary text-center ">Please Login</h2>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <p onClick={restPassword} className="text-primary btn btn-link">
          Forget Password?
        </p>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p className="text-danger">{element}</p>
      <p>
        New to Genius Car?
        <Link to="/register" className="text-danger label-success btn">
          Please Register
        </Link>
      </p>

      <Social></Social>
      <ToastContainer />
    </div>
  );
};

export default Login;
