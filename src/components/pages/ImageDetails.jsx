import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ImageRandom from "../include/ImageRandom";
import Header from "../layout/Header";
import Loader from "../layout/Loader";

const ImageDetails = () => {
  const [image, setImage] = useState([]);
  const { imageId } = useParams();
  const [random, setRandom] = useState([]);
  const [imageInfo, setImageInfo] = useState([]);

  useEffect(() => {
    fetch(`https://images-api.nasa.gov/search?media_type=image&nasa_id=${imageId}`)
      .then((response) => response.json())
      .then((result) => setImage(result.collection.items[0]))
      // then((result) => console.log(result.collection.items[0]))
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    fetch(`https://images-assets.nasa.gov/image/${imageId}/metadata.json`)
      .then((response) => response.json())
      // .then((result) => setImages(result.collection.items[0].data[0]))
      .then((result) => setImageInfo(result))
      // then((result) => console.log(result.collection.items[0]))
      .catch((error) => console.log("error", error));
  }, []);

  // useEffect(() => {
  //   fetch(`https://api.nasa.gov/planetary/apod?api_key=9wtzeB7mRa2YQDcAuJgPqLFf8iBIPn5wGIrRu4YQ&count=4`)
  //     .then((response) => response.json())
  //     .then((result) => setRandom(result))
  //     .catch((error) => console.log("error", error));
  // }, []);
  useEffect(() => {
    fetch(`https://images-api.nasa.gov/search?media_type=image&q=apollo`)
      .then((response) => response.json())
      .then((result) => setRandom(result.collection.items))
      .catch((error) => console.log("error", error));
  }, []);

  // console.log(random);
  if (!random?.length) return <Loader />;

  return (
    <>
      <Header />
      <main className="container">
        <section className="section detail">
          <div className="detail__left">
            <figure className="main__img">
              <a href="#">
                <img src={image?.links?.[0].href} alt="이미지1" />
              </a>
            </figure>
            <div className="sub__img">
              {random.filter((random, index, arr) => (index<=4 && index>0)).map((random, index)=>(
                <ImageRandom key={index} random={random}/>
              ))}
              {/* <Link to="#">
                <div style={{ backgroundImage: `url(${random?.[0]?.url})` }}></div>
              </Link>
              <Link to="#">
                <div style={{ backgroundImage: `url(${random?.[1]?.url})` }}></div>
              </Link>
              <Link to="#">
                <div style={{ backgroundImage: `url(${random?.[2]?.url})` }}></div>
              </Link>
              <Link to="#">
                <div style={{ backgroundImage: `url(${random?.[3]?.url})` }}></div>
              </Link> */}
            </div>
          </div>
          <div className="detail__right">
            <h2 className="detail__title">{image?.data?.[0]?.title}</h2>
            <p className="detail__desc">{image?.data?.[0]?.description}</p>
            <div className="detail__info">
              <li>
                <span>ID : </span>
                <span>{imageInfo?.["AVAIL:NASAID"]}</span>
              </li>
              <li>
                <span>Photographer : </span>
                <span>{imageInfo?.["AVAIL:Photographer"]}</span>
              </li>
              <li>
                <span>DATE : </span>
                <span>{imageInfo?.["AVAIL:DateCreated"]}</span>
              </li>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ImageDetails;
