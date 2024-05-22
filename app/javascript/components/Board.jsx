import React from "react";
import { useState, useRef, useEffect } from "react";
export default function Board() {
  const [clickPosition, setClickPosition] = useState(null);
  const [clickDropdown, setClickDropdown] = useState(false);
  const imgRef = useRef();
  const targets = [
    { id: 1, name: "Da Vinci" },
    { id: 2, name: "Kahlo" },
    { id: 3, name: "Picasso" },
    { id: 4, name: "Van Gogh" },
    { id: 5, name: "Warhol" },
  ];

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
        setClickDropdown(false);
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
    <div className="board-pic-container">
      <img ref={imgRef} className="play-map" src="map.jpg" alt="Map" />
      {clickPosition && (
        <div
          style={{
            top: `${clickPosition.y}px`,
            left: `${clickPosition.x}px`,
          }}
          className="target-box"
        >
          <button
            onClick={() => setClickDropdown((prev) => !prev)}
            className="dropdown-menu"
          >
            Who is it?
          </button>
          {clickDropdown && (
            <div className="dropdown-content">
              {targets.map((target) => (
                <button className={"target-names"} key={target.id}>
                  {target.name}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
