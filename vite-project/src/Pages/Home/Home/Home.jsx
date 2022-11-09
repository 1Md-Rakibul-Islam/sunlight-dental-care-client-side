import React from "react";
import Apoitment from "../Apoitment/Apoitment";
import Bannder from "../Banner/Bannder";
import Team from "../Team/Team";
import TopServices from "../TopServices/TopServices";

const Home = () => {
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
