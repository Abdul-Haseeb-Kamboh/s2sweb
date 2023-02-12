import React from "react";
import { Numbers } from "../Components/images";

import { Link } from "react-router-dom";

const Number = () => {
  return (
    <Link to="/about" style={{ display: "inline-block", margin: 10 }}>
      <div
        style={{
          width: 300,
          height: 350,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          border: "1px solid black",
          borderRadius: 15,
        }}
      >
        <img
          src={Numbers}
          alt="a"
          style={{ width: 250, height: 250, padding: 10 }}
        />
        <h1>Numbers</h1>
      </div>
    </Link>
  );
};

export default Number;
