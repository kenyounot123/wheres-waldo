import React, { useEffect } from "react";
import { useState, useRef } from "react";
import "./Game.css";

export default function Game() {
  // State to track the time user takes to complete the game
  const [timer, setTimer] = useState(0);
  const [clickPosition, setClickPosition] = useState(null);
  const imgRef = useRef();

  useEffect(() => {
    // Function to handle when image is clicked
    // Get position and store it in state
    const handleImageClick = (e) => {
      if (imgRef.current) {
        const imgDimensions = imgRef.current.getBoundingClientRect();
        const posX = Math.abs(imgDimensions.x - e.clientX);
        const posY = Math.abs(imgDimensions.y - e.clientY);
        console.log(posX, posY);

        // Add the new position to the state array
        setClickPosition({ x: posX, y: posY });
      }
    };
    // Add event listener on mount if img exists
    const imgElement = imgRef.current;
    if (imgElement) {
      imgElement.addEventListener("click", handleImageClick);
    }

    // Cleanup function to remove the event listener on unmount
    return () => {
      if (imgElement) {
        imgElement.removeEventListener("click", handleImageClick);
      }
    };
  }, []);

  return (
    <div className="game-container">
      <h1 className="title">Find these 5 people</h1>
      <div className="targets-pic-container">
        <img src="targets.jpg" alt="People" />
      </div>
      <div className="board-pic-container">
        <img ref={imgRef} className="play-map" src="map.jpg" alt="Map" />
        {clickPosition && (
          <div
            style={{
              top: `${clickPosition.y}px`,
              left: `${clickPosition.x}px`,
            }}
            className="target-box"
          ></div>
        )}
      </div>
    </div>
  );
}
