import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const onKeyPress = (e) => {
    if (e.charCode === 13) {
      handleSearch();
    }
  };
  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
    setSearchTerm("");
  };
  return (
    <main id="main_page">
      <div className="birth__search">
        <h2>When is your {props.answer} ?</h2>
        <div className="search__inner" onKeyPress={onKeyPress}>
          <input
            type="search"
            className="birthday__input"
            placeholder="1999-12-12"
            title="년월일을 검색하세요"
            value={searchTerm || ""}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="icon"></div>
        </div>
      </div>
      <div className="space__man"></div>
    </main>
  );
};

export default Search;