import React from "react";

const AlphabetsImages = [
  require("../images/Alphabets/a.png"),
  require("../images/Alphabets/b.png"),
  require("../images/Alphabets/c.png"),
  require("../images/Alphabets/d.png"),
  require("../images/Alphabets/e.png"),
  require("../images/Alphabets/f.png"),
  require("../images/Alphabets/g.png"),
  require("../images/Alphabets/h.png"),
  require("../images/Alphabets/i.png"),
  require("../images/Alphabets/letter_j-webp.webp"),
  require("../images/Alphabets/k.png"),
  require("../images/Alphabets/l.png"),
  require("../images/Alphabets/m.png"),
  require("../images/Alphabets/n.png"),
  require("../images/Alphabets/o.png"),
  require("../images/Alphabets/p.png"),
  require("../images/Alphabets/q.png"),
  require("../images/Alphabets/r.png"),
  require("../images/Alphabets/s.png"),
  require("../images/Alphabets/t.png"),
  require("../images/Alphabets/u.png"),
  require("../images/Alphabets/v.png"),
  require("../images/Alphabets/w.png"),
  require("../images/Alphabets/letter_x-webp.webp"),
  require("../images/Alphabets/y.png"),
  require("../images/Alphabets/z.png"),
];

const Alphabetspage = () => {
  return (
    <div
      style={{
        flex: 1,
        display: "block",
        justifyContent: "space-around",
        // alignItems: "center",
        flexDirection: "column",
      }}
    >
      {AlphabetsImages.map((image, index) => {
        return (
          <div
            style={{
              width: 250,
              height: 250,
              flex: 1,
              display: "inline-block",
              //   flexWrap: "wrap",
              //   justifyContent: "center",
              //   alignItems: "center",
              margin: 10,
              border: "1px solid green",
            }}
          >
            <img
              key={index}
              src={image}
              alt="Alphabets"
              style={{ width: 150, height: 150 }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Alphabetspage;
