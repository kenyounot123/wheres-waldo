import React from "react";

const StatusBtn = ({ style, message }) => {
  return <div className={`target-status-btn ${style}`}>{message}</div>;
};
export default function TargetsPic({ originalTargetsRef, foundTargets }) {
  let foundTargetsId;
  if (foundTargets) {
    foundTargetsId = foundTargets.map((target) => target.id);
  }
  return (
    <>
      <h1 className="title">Find these 5 people</h1>
      <div className="targets-pic-container">
        <img src="targets.jpg" alt="People" />
        <div className="target-status-container">
          {foundTargets &&
            originalTargetsRef.current.map((target) => (
              <StatusBtn
                style={
                  foundTargetsId.includes(target.id) ? "success" : "failure"
                }
                message={foundTargetsId.includes(target.id) ? "Found!" : "?"}
                key={target.id}
              />
            ))}
        </div>
      </div>
    </>
  );
}
