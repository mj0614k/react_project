import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeaderCont, Calendar } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderCont />
      <Routes>
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
