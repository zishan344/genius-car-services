import React from "react";
import expart1 from "../../../Images/Expart/expert-1.jpg";
import expart2 from "../../../Images/Expart/expert-2.jpg";
import expart3 from "../../../Images/Expart/expert-3.jpg";
import expart4 from "../../../Images/Expart/expert-4.jpg";
import expart5 from "../../../Images/Expart/expert-5.jpg";
import expart6 from "../../../Images/Expart/expert-6.png";
const exparts = [
  { id: 1, name: "Will smith", img: expart1 },
  { id: 2, name: "Rock jakson", img: expart2 },
  { id: 3, name: "marowan", img: expart3 },
  { id: 4, name: "Rimo bits", img: expart4 },
  { id: 5, name: "rito biras", img: expart5 },
  { id: 6, name: "rishon", img: expart6 },
];
const Exparts = () => {
  return (
    <div>
      <h2>Our Exparts</h2>
    </div>
  );
};

export default Exparts;
