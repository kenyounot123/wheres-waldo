import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Game.css";
import Board from "../../components/Board";
import Timer from "../../components/Timer";

export default function Game() {
  const navigate = useNavigate();
  // Get targets from Rails backend
  const [targets, setTargets] = useState([]);
  useEffect(() => {
    const url = "api/v1/targets/index";
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network Response was not ok");
      })
      .then((res) => {
        console.log(res);
        setTargets(res);
      })
      .catch(() => navigate("/"));
  }, []);
  return (
    <div className="game-container">
      <h1 className="title">Find these 5 people</h1>
      <div className="targets-pic-container">
        <img src="targets.jpg" alt="People" />
      </div>
      <Board />
      <Timer />
    </div>
  );
}
