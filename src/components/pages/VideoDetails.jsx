import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import Header from "../layout/Header";
// import Loader from "../layout/Loader";

const VideoDetails = () => {
  const [video, setVideo] = useState([]);
  const { videoId } = useParams();
  // const [random, setRandom] = useState([]);

  useEffect(() => {
    fetch(`https://images-api.nasa.gov/search?media_type=video&nasa_id=${videoId}`)
      .then((response) => response.json())
      .then((result) => setVideo(result.collection))
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

  //images-assets.nasa.gov/video/KSC-20190828-VP-MMS01-0001-Tom_Joyner_Explores_Moon_to_Mars_Master-3229627/KSC-20190828-VP-MMS01-0001-Tom_Joyner_Explores_Moon_to_Mars_Master-3229627~orig.mp4
  //images-assets.nasa.gov/video/KSC-20190828-VP-MMS01-0001-Tom_Joyner_Explores_Moon_to_Mars_Master-3229627_Tom Joyner Explores Moon to Mars/KSC-20190828-VP-MMS01-0001-Tom_Joyner_Explores_Moon_to_Mars_Master-3229627_Tom Joyner Explores Moon to Mars~orig.mp4
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
              <a href="#">
                <div></div>
              </a>
              <a href="#">
                <div></div>
              </a>
              <a href="#">
                <div></div>
              </a>
            </div>
          </div>
          <div className="detail__right">
            <h2 className="detail__title">{video?.items?.[0].data?.[0]?.title}</h2>
            <p className="detail__desc">{video?.items?.[0].data?.[0]?.description}</p>
            <div className="detail__info">
              <li>
                <span>ID : </span>
                <span>{video?.items?.[0].data?.[0].nasa_id}</span>
              </li>
              <li>
                <span>TYPE : </span>
                <span>{video?.items?.[0].data?.[0].media_type}</span>
              </li>
              <li>
                <span>DATE : </span>
                <span>{video?.items?.[0].data?.[0].date_created}</span>
              </li>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default VideoDetails;
