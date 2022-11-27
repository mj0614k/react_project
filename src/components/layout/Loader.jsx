import React from "react";

const Loader = () => {
  return (
    <div className="game-loader">
      <div className="game-loader__planet">
        <div className="loader-radius1"></div>
        <div className="loader-radius2"></div>
        <div className="loader-radius3"></div>
        <div className="loader-radius4"></div>
        <div className="loader-mini1"></div>
        <div className="loader-mini2"></div>
        <div className="loader-mini3"></div>
        <div className="loader-mini4"></div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo">
              <fegaussianblur
                in="SourceGraphic"
                stdDeviation="15"
                result="blur"
              ></fegaussianblur>
              <fecolormatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 26 -7"
                result="goo"
              ></fecolormatrix>
              <feblend in="SourceGraphic" in2="goo"></feblend>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Loader;