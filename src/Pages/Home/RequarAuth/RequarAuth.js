import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import Looding from "../../Shared/Looding/Looding";

const RequarAuth = ({ children }) => {
  const location = useLocation();
  const [user, looding] = useAuthState(auth);
  if (looding) {
    return <Looding></Looding>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequarAuth;
