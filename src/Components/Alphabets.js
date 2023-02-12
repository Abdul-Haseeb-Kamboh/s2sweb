import React from "react";
import {
  a,
  b,
  c,
  d,
  e,
  f,
  g,
  h,
  i,
  j,
  k,
  l,
  m,
  n,
  o,
  p,
  q,
  r,
  s,
  t,
  u,
  v,
  w,
  x,
  y,
  z,
  abcd,
} from "../Components/images";
import { Link } from "react-router-dom";

const Alphabets = () => {
  return (
    <Link to="/Alphabetspage" style={{ display: "inline-block", margin: 5 }}>
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
          src={abcd}
          alt="a"
          style={{ width: 250, height: 250, padding: 10 }}
        />
        <h1>Alphabets</h1>
      </div>
    </Link>
  );
};

export default Alphabets;
