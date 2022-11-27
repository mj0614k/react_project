import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/pages/Main";
import Special from "./components/pages/Special";
import Image from "./components/pages/Image";
import ImageDetails from "./components/pages/ImageDetails";
import Video from "./components/pages/Video";
import VideoDetails from "./components/pages/VideoDetails";
import SearchConts from "./components/pages/SearchConts";
import Calendar from "./components/pages/Calendar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/special" element={<Special />} />
        <Route path="/image" element={<Image />} />
        <Route path="/image/:imageId" element={<ImageDetails />} />
        <Route path="/video" element={<Video />} />
        <Route path="/video/:videoId" element={<VideoDetails />} />
        <Route path="/search/:searchTerm" element={<SearchConts />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;