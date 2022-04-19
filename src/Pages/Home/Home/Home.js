import React from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Bannar from "../Bannar/Bannar";
import Exparts from "../Exparts/Exparts";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <PageTitle title="Home"></PageTitle>

      <Bannar></Bannar>
      <Services></Services>
      <Exparts></Exparts>
    </div>
  );
};
export default Home;
