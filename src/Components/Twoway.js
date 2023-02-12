import React, { useEffect, useState } from "react";
import "video-react/dist/video-react.css"; // import css
import { Player } from "video-react";
import path from "../path";

const App = () => {
  var [video, setVideo] = useState(path.Hello);
  var [text, setText] = useState("");
  // const [errorMessage, setErrorMessage] = useState('');
  let words = text.split(" ");

  const ConvertHandler = async (e) => {
    e.preventDefault();
    words.map((item, index) => {
      if (path[item] == undefined) {
        console.log(`${item} :  Word is Not Found in Path`);
        setTimeout(() => {
          // setErrorMessage(`The token "${item}" is not supported`);
          console.log(`The token "${item}" is not supported`);
        }, 2000);
        return;
        // arr.push(path[item]);
      }

      if (index == 0) {
        setVideo(path[item]);
        console.log(item);
      } else if (path[item] != undefined) {
        setTimeout(() => {
          console.log(item);
          setVideo(path[item]);
        }, 3000);
      }

      // console.log(path[item]);
      // setVideo(require(temp));
    });
  };

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
        <h1>Video Player</h1>
        <div style={{ width: 400, marginBottom: 30 }}>
          <Player autoPlay>
            <source src={video} />
          </Player>
        </div>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={(text) => setText(text.target.value)}
            />
          </label>
          <button onClick={ConvertHandler}>Send </button>
        </form>
      </div>
    </>
  );
};

export default App;
