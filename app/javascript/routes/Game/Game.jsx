import React, { useEffect } from "react";
import { useState, useRef } from "react";
import "./Game.css";
import Board from "../../components/Board";

export default function Game() {
  // State to track the time user takes to complete the game
  const [timer, setTimer] = useState(0);
  return (
    <div className="game-container">
      <h1 className="title">Find these 5 people</h1>
      <div className="targets-pic-container">
        <img src="targets.jpg" alt="People" />
      </div>
      <Board />
    </div>
  );
}
