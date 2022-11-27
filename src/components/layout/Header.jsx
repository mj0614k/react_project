import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <div className="header__inner">
        <h1 className="logo">
          <Link to="/">당신의 우주</Link>
        </h1>
        <nav className="header__nav">
          <ul>
            <li>
              <Link to="/special">SPECIAL</Link>
            </li>
            <li>
              <Link to="/image">IMAGE</Link>
            </li>
            <li>
              <Link to="/video">VIDEO</Link>
            </li>
            <li>
              <Link to="/calendar">CALENDAR</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;