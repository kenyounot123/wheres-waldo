import React from "react";
const StatusBtn = () => {
  return <div className="target-status-btn">Found!</div>;
};
export default function TargetsPic({ foundTargets }) {
  return (
    <>
      <h1 className="title">Find these 5 people</h1>
      <div className="targets-pic-container">
        <img src="targets.jpg" alt="People" />
        <div className="target-status-container">
          {foundTargets &&
            foundTargets.map((target) => <StatusBtn key={target.id} />)}
        </div>
      </div>
    </>
  );
}
