import React, { useEffect, useState } from "react";
import Video from "./Video";

const App = () => {
  var [text, setText] = useState("");
  // const [errorMessage, setErrorMessage] = useState('');
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {show && <Video text={text.split(" ")} />}
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={(text) => setText(text.target.value)}
            />
          </label>
          <button
            onClick={(e) => {
              e.preventDefault();
              setShow(true);
            }}
          >
            Send{" "}
          </button>
        </form>
      </div>
    </>
  );
};

export default App;
