import React, { useEffect } from "react";
import { useState, useRef } from "react";
import formatTime from "../helper/timeHelper";
export default function Timer({ winStatus, setRecord }) {
  const startTimeRef = useRef(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);
  useEffect(() => {
    let interval;
    if (!winStatus) {
      interval = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 1000);
    } else {
      setRecord(elapsedTime);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [winStatus, elapsedTime]);

  return <div className="time">{formatTime(elapsedTime)}</div>;
}
