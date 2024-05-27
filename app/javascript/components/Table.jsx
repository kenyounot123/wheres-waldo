import React from "react";

export default function Table({ children }) {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={3}>Hall of Fame</th>
        </tr>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
