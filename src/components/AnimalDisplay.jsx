/* eslint-disable react/prop-types */
import React, { useState } from "react";
import love from "../assets/images/heart.svg";
import "../assets/css/AnimalDisplay.css";
function AnimalDisplay({ type, src }) {
  const [height, setHeight] = useState(50);
  const [width, setWidth] = useState(50);
  const handleButtonClick = () => {
    height <= 100 ? setHeight(height + 5) : 200;
    width <= 75 ? setWidth(width + 5) : 75;
  };
  return (
    <div className="animal">
      <div className="card card-animal">
        <div className="card-content">
          <p className="title">
            <img src={src} alt={src} height="100px" width="100px" />
          </p>
          <p className="subtitle has-text-centered">{type.toUpperCase()}</p>
        </div>
        <footer className="card-footer has-text-centered card-animal-love">
          <button onClick={handleButtonClick}>
            <img
              src={love}
              alt="love"
              height={`${height}px`}
              width={`${width}px`}
            />
          </button>
        </footer>
      </div>
    </div>
  );
}

export default AnimalDisplay;
