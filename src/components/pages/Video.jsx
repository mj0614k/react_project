import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Loader from "../layout/Loader";
import VideoBanner from "../include/VideoBanner";
import VideoContents from "../include/VideoContents";

const Video = () => {
  const [videos, setVideos] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://images-api.nasa.gov/search?q=${query}&media_type=video`
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.collection.items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch("https://images-api.nasa.gov/search?q=moon&media_type=video")
      .then((response) => response.json())
      //   .then((result) => console.log(result.collection.items))
      .then((result) => setVideos(result.collection.items))
      .catch((error) => console.log("error", error));
  }, []);

  if (!videos?.length) return <Loader />;
  return (
    <>
      <Header />
      <Contents id={"video"}>
        <VideoBanner videos={videos} onSearch={search} />
        <VideoContents videos={videos} />
      </Contents>
    </>
  );
};

export default Video;