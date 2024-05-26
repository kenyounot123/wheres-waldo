import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Game.css";
import Board from "../../components/Board";
import Timer from "../../components/Timer";
import TargetsPic from "../../components/TargetsPic";
import NewUserForm from "../../components/NewUserForm";
import Modal from "../../components/Modal";

export default function Game() {
  const navigate = useNavigate();
  // Get targets from Rails backend
  const [targets, setTargets] = useState([]);
  const [winStatus, setWinStatus] = useState(false);
  const [record, setRecord] = useState(0);
  const [showModal, setShowModal] = useState(false);
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
  let foundTargets = getFoundTargets(originalTargetsRef.current);

  useEffect(() => {
    if (foundTargets && foundTargets.length === 5 && targets.length === 0) {
      setWinStatus(true);
    }
  }, [foundTargets, targets]);

  function getFoundTargets(originalTargets) {
    let foundTargets;
    if (originalTargets) {
      foundTargets = originalTargets.filter(
        (target) => !targets.includes(target)
      );
    }
    return foundTargets;
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
      <Modal winStatus={winStatus} setShowModal={setShowModal}>
        <NewUserForm recordTime={record} />
      </Modal>
    </div>
  );
}
