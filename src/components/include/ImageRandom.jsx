import React from "react";
import { Link } from 'react-router-dom'
// import ReactPlayer from "react-player";

const ImageRandom = ({ random }) => {
  return (
    <>
        <Link to={`/image/${random?.data?.[0]?.nasa_id}`}>
         <div style={{backgroundImage: `url(${random?.links?.[0]?.href})`}}></div>
        </Link>
    </>
  );
};

export default ImageRandom;