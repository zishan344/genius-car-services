import React from "react";

const Footer = () => {
  return (
    <div className="mt-5">
      <h3 className="text-center text-primary">
        Copyright &copy; {new Date().getFullYear()}
      </h3>
    </div>
  );
};

export default Footer;
