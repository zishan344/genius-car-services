import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import Looding from "../../../Shared/Looding/Looding";

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  let element;
  if (loading || loading1) {
    return <Looding></Looding>;
  }
  if (error || error1) {
    element = (
      <div>
        <p>
          Error: {error?.message} {error1?.message}
        </p>
      </div>
    );
  }
  if (user || user1) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="w-50 bg-primary"></div>
        <p className="mt-2 px-3">or</p>
        <div style={{ height: "1px" }} className="w-50 bg-primary"></div>
      </div>
      <p className="text-danger">{element}</p>
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-primary d-flex align-items-center d-block mx-auto my-2 w-50 justify-content-center"
        >
          <FcGoogle className="mx-1" style={{ fontSize: "25px" }} />
          <span>Google Sign In</span>
        </button>
        <button className="btn btn-primary d-flex align-items-center d-block mx-auto my-2 w-50 justify-content-center">
          <BsFacebook
            className="mx-1"
            style={{ fontSize: "25px", color: "blue" }}
          />
          <span>Facebook Sign In</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-primary d-flex align-items-center d-block mx-auto my-2 w-50  justify-content-center"
        >
          <BsGithub className="mx-1" style={{ fontSize: "25px" }} />
          <span>Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default Social;
