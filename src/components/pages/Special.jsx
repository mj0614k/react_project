import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Search from "../include/Search";

const Special = () => {
  const [apods, setApods] = useState([]);

  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => response.json())
      .then((result) => setApods(result))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="bg" style={{ backgroundImage: `url(${apods.url})` }}>
      <Header />
      <Search answer={"special day"} />
    </div>
  );
};

export default Special;