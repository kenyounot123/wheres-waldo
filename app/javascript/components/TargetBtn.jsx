import React from "react";

export default function Target({ onClick, target }) {
  return (
    <button onClick={onClick} className="target-names">
      {target.name}
    </button>
  );
}
