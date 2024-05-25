import React, { useEffect } from "react";
import { useState } from "react";
export default function Timer({ winStatus, setRecord }) {
  const [startTime, setStartTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);
  useEffect(() => {
    let interval;
    if (!winStatus) {
      interval = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 1000);
    } else if (winStatus && elapsedTime !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [winStatus, startTime, elapsedTime]);
  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };
  if (winStatus) {
    setRecord(elapsedTime);
  }
  return <div className="time">{formatTime(elapsedTime)}</div>;
}
