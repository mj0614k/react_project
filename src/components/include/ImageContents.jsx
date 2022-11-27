import React from "react";
import { Link } from 'react-router-dom'

const NasaImages = ({ images, num }) => {
  return (
    <li className={`img img${num}`}>
      <Link to={`/image/${images.data[0].nasa_id}`}>
        <img src={images.links[0].href} alt={images.data[0].title} />
      </Link>
    </li>
  );
};

const ImageContents = ({ images }) => {
  return (
    <div className="img__contents container">
      <ul className="img__inner">
        {images.map((images, index) => (
          <NasaImages key={index} images={images} num={index + 1} />
        ))}
      </ul>
    </div>
  );
};

export default ImageContents;