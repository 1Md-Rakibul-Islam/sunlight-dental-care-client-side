import React from "react";
import { TabTitle } from "../../../TabTitle/TabTitle";
import Apoitment from "../Apoitment/Apoitment";
import Bannder from "../Banner/Bannder";
import Team from "../Team/Team";
import TopServices from "../TopServices/TopServices";

const Home = () => {
    //Page titel
    TabTitle('Sunlight Dental Care | Home')
  return (
    <div>
      <Bannder></Bannder>
      <TopServices></TopServices>
      <Apoitment></Apoitment>
      <Team></Team>
    </div>
  );
};

export default Home;
