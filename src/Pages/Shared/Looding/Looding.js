import React from "react";
import { Spinner } from "react-bootstrap";

const Looding = () => {
  return (
    <div
      style={{ height: "400px" }}
      className="d-flex align-items-center w-100 justify-content-center my-5"
    >
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Looding;
