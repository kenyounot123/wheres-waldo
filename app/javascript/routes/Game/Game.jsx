import React from "react";
import { useState, useRef } from "react";
import "./Game.css";

export default function Game() {
  // State to track the time user takes to complete the game
  const [timer, setTimer] = useState(0);
  const [boardClicked, setBoardClicked] = useState(false);
  const imgRef = useRef();
  const posX = useRef(0);
  const posY = useRef(0);
  function handleImageClick(e) {
    // Get x and y position of cursor and display a box as well as guess options
    const imgDimensions = imgRef.current.getBoundingClientRect();
    if (imgRef.current) {
      setBoardClicked(true);
      posX.current = Math.abs(imgDimensions.x - e.clientX);
      posY.current = Math.abs(imgDimensions.y - e.clientY);
      console.log(posX.current);
      console.log(posY.current);
    }
  }

  return (
    <div className="game-container">
      <h1 className="title">Find these 5 people</h1>
      <div className="targets-pic-container">
        <img src="targets.jpg" alt="People" />
      </div>
      <div className="board-pic-container">
        <img
          ref={imgRef}
          onClick={(e) => handleImageClick(e)}
          className="play-map"
          src="map.jpg"
          alt="Map"
        />
        {boardClicked && (
          <div
            style={{ top: `${posY}px`, left: `${posX}px` }}
            className="target-box"
          ></div>
        )}
      </div>
    </div>
  );
}
