import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Loader from "../layout/Loader";
import ImageBanner from "../include/ImageBanner";
import ImageContents from "../include/ImageContents";

const Image = () => {
  const [images, setImages] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://images-api.nasa.gov/search?q=${query}&media_type=image`
    )
      .then((response) => response.json())
      .then((result) => setImages(result.collection.items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch(
      "https://images-api.nasa.gov/search?q=Herschel%20Space%20Observatory&media_type=image"
    )
      .then((response) => response.json())
      // .then((result) => console.log(result.collection.items))
      .then((result) => setImages(result.collection.items))
      .catch((error) => console.log("error", error));
  }, []);

  if (!images?.length) return <Loader />;
  return (
    <>
      <Header />
      <Contents id={"image"}>
        <ImageBanner images={images} onSearch={search} />
        <ImageContents images={images} />
      </Contents>
    </>
  );
};

export default Image;