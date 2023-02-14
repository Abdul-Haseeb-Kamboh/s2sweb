import React, { useEffect, useState } from "react";
import { Player } from "video-react";
import path from "./path";
import "video-react/dist/video-react.css"; // import css

const Video = ({ text }) => {
  var [video, setVideo] = useState({
    current: 0,
    videos: [],
  });

  useEffect(() => {
    text.map((token) => {
      path[token.toUpperCase()] &&
        setVideo((prev) => {
          return {
            ...prev,
            videos: [...prev.videos, { sources: path[token.toUpperCase()] }],
          };
        });
    });
  }, []);

  useEffect(() => {
    setTimeout(
      () =>
        setVideo((prev) => {
          return { ...prev, current: prev.current + 1 };
        }),
      2000
    );
  }, [video.current]);

  return (
    <>
      <h1>Video Player</h1>
      <video
        style={{ width: 400 }}
        src={video.videos[video.current]?.sources}
        autoPlay
        controls
      />
    </>
  );
};

export default Video;
