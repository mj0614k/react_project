import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import Header from "../layout/Header";
import VideoRandom from "../include/VideoRandom"
// import Loader from "../layout/Loader";

const VideoDetails = () => {
  const [video, setVideo] = useState([]);
  const [videoInfo, setVideoInfo] = useState([]);
  const { videoId } = useParams();
  const [random, setRandom] = useState([]);

  useEffect(() => {
    fetch(`https://images-assets.nasa.gov/video/${videoId}/metadata.json`)
      .then((response) => response.json())
      // .then((result) => setImages(result.collection.items[0].data[0]))
      .then((result) => setVideoInfo(result))
      // then((result) => console.log(result.collection.items[0]))
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    fetch(`https://images-api.nasa.gov/search?media_type=video&nasa_id=${videoId}`)
      .then((response) => response.json())
      .then((result) => setVideo(result.collection))
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    fetch(`https://images-api.nasa.gov/search?media_type=video&q=apollo`)
      .then((response) => response.json())
      .then((result) => setRandom(result.collection.items))
      .catch((error) => console.log("error", error));
  }, []);

  //   useEffect(() => {
  //     fetch(
  //       `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=4`
  //     )
  //     .then((response) => response.json())
  //       .then((result) => setRandom(result))
  //       .catch((error) => console.log("error", error));
  //   })
  // console.log(video);
  // if (!image?.length) return <Loader />;
  return (
    <>
      <Header />
      <main className="container">
        <section className="section detail">
          <div className="detail__left">
            <figure className="main__img">
              <ReactPlayer url={`http://images-assets.nasa.gov/video/${video?.items?.[0].data?.[0].nasa_id}/${video?.items?.[0].data?.[0].nasa_id}~orig.mp4`} controls />
            </figure>
            <div className="sub__img">
              {/* <a href="#"><div style={{backgroundImage: `url(${random?.[0]?.url})`}}></div></a> */}
              {random.filter((random, index, arr) => (index<4)).map((random, index)=>(
                <VideoRandom key={index} random={random}/>
              ))}
              {/* <a href="#">
                <div></div>
              </a>
              <a href="#">
                <div></div>
              </a>
              <a href="#">
                <div></div>
              </a> */}
            </div>
          </div>
          <div className="detail__right">
            <h2 className="detail__title">{videoInfo["AVAIL:Title"]}</h2>
            <p className="detail__desc">{videoInfo["AVAIL:Description"]}</p>
            <div className="detail__info">
              <li>
                <span>ID : </span>
                <span>{videoInfo["AVAIL:NASAID"]}</span>
              </li>
              <li>
                <span>PHOTOGRAPHER : </span>
                <span>{videoInfo["AVAIL:Photographer"]}</span>
              </li>
              <li>
                <span>DATE : </span>
                <span>{videoInfo["AVAIL:DateCreated"]}</span>
              </li>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default VideoDetails;
