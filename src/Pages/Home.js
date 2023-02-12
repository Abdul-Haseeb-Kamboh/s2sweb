import React from "react";
import Alphabets from "../Components/Alphabets";
import Number from "../Components/Number";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Alphabets />
      <Alphabets />
      <Alphabets />
      <Alphabets />
      <Number />
      <Number />
      <Number />
      <Number />
      <Number />
      <Number />
      <Number />
      <Number />
    </div>
  );
};

export default Home;
