import React from "react";

const Log = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row} ${turn.square.col}`}>
          {turn.player} chose row: {turn.square.row} and col: {turn.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;
