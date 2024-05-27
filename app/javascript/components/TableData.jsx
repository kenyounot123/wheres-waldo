import React from "react";

export default function TableData({ rank, name, record }) {
  function getRank() {}
  return (
    <tr>
      <td>{rank}</td>
      <td>{name}</td>
      <td>{record}</td>
    </tr>
  );
}
