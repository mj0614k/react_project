import React from "react";
import { Link } from 'react-router-dom'
// import ReactPlayer from "react-player";

const VideoRandom = ({ random }) => {
  return (
    <>
        <Link to={`/video/${random?.data[0].nasa_id}`}>
         <div style={{backgroundImage: `url(${random?.links?.[0]?.href})`}}></div>
        </Link>
    </>
  );
};

export default VideoRandom;