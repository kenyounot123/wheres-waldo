import React from "react";
import { useState, useRef, useEffect } from "react";
import FlashMessage from "./FlashMessage";

export default function Board({ targets, setTargets }) {
  const [clickedPosition, setClickedPosition] = useState(null);
  const [clickDropdown, setClickDropdown] = useState(false);
  const [successFlashMessage, setSuccessFlashMessage] = useState(null);
  const [failureFlashMessage, setFailureFlashMessage] = useState(null);
  const imgRef = useRef();
  const dropdownRef = useRef();
  const targetBtnRef = useRef();

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
        setClickedPosition({ x: posX, y: posY });
        setClickDropdown(false);
      }
    };
    // Add event listener on mount if img exists
    const imgElement = imgRef.current;
    if (imgElement) {
      imgElement.addEventListener("click", handleImageClick);
    }
    // Handle when user clicks outside of the image
    const closeClickedBox = (e) => {
      if (
        e.target !== imgRef.current &&
        e.target !== dropdownRef.current &&
        e.target !== targetBtnRef.current
      ) {
        setClickedPosition(null);
      }
    };
    window.addEventListener("click", closeClickedBox);

    // Cleanup function to remove the event listener on unmount
    return () => {
      if (imgElement) {
        imgElement.removeEventListener("click", handleImageClick);
      }
      window.removeEventListener("click", closeClickedBox);
    };
  }, []);

  //Handle logic to check if position clicked is same as position of targets
  function handleDropDownClick(e, target) {
    e.preventDefault();
    if (
      clickedPosition.x <= target.position.xHigh &&
      clickedPosition.x >= target.position.xLow &&
      clickedPosition.y >= target.position.yLow &&
      clickedPosition.y <= target.position.yHigh
    ) {
      // Display success flash message
      setSuccessFlashMessage("Success! You clicked on the target.");
      setFailureFlashMessage(null);
    } else {
      // Display Fail flash message
      setFailureFlashMessage("Failed! You missed the target.");
      setSuccessFlashMessage(null);
    }
  }

  return (
    <>
      {successFlashMessage && (
        <FlashMessage type="success" message={successFlashMessage} />
      )}
      {failureFlashMessage && (
        <FlashMessage type="failure" message={failureFlashMessage} />
      )}
      <div className="board-pic-container">
        <img ref={imgRef} className="play-map" src="map.jpg" alt="Map" />
        {clickedPosition && (
          <div
            style={{
              top: `${clickedPosition.y}px`,
              left: `${clickedPosition.x}px`,
            }}
            className="target-box"
          >
            <button
              ref={dropdownRef}
              onClick={() => setClickDropdown((prev) => !prev)}
              className="dropdown-menu"
            >
              Who is it?
            </button>
            {/* Each button needs to keep track of the targets state */}
            {clickDropdown && (
              <div className="dropdown-content">
                {targets.map((target) => (
                  <button
                    ref={targetBtnRef}
                    onClick={(e) => handleDropDownClick(e, target)}
                    className={"target-names"}
                    key={target.id}
                  >
                    {target.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
