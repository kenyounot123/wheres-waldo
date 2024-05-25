import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Game.css";
import Board from "../../components/Board";
import Timer from "../../components/Timer";
import TargetsPic from "../../components/TargetsPic";
import NewUserForm from "../../components/NewUserForm";

export default function Game() {
  const navigate = useNavigate();
  // Get targets from Rails backend
  const [targets, setTargets] = useState([]);
  const [winStatus, setWinStatus] = useState(false);
  const [record, setRecord] = useState(0);
  const originalTargetsRef = useRef(null);

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
        setTargets(res);
        originalTargetsRef.current = res;
      })
      .catch(() => navigate("/"));
  }, []);
  function getFoundTargets(originalTargets) {
    let foundTargets;
    if (originalTargets) {
      foundTargets = originalTargets.filter(
        (target) => !targets.includes(target)
      );
    }
    return foundTargets;
  }
  // Get found targets
  let foundTargets = getFoundTargets(originalTargetsRef.current);
  // Check win condition
  if (foundTargets && foundTargets.length === 5 && targets.length === 0) {
    setWinStatus(true);
  }
  return (
    <div className="game-container">
      <Link to={"/"}> Back </Link>
      <TargetsPic
        originalTargetsRef={originalTargetsRef}
        foundTargets={foundTargets}
      />
      <Board targets={targets} setTargets={setTargets} />
      <Timer winStatus={winStatus} setRecord={setRecord} />
      {/* winStatus && */}
      <NewUserForm recordTime={record} />
    </div>
  );
}
