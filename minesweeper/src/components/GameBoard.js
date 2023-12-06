import React from "react";
import { useState } from "react";
import Mine from "../assets/mine.png";
const GameBoard = () => {
  const ROWS = 10;
  const COLS = 10;
  let elements = [];
  // State to represent the grid
  const [grid, setGrid] = useState(
    Array.from({ length: 10 }, () => Array(10).fill(false))
  );

  // Function to handle button click
  const handleButtonClick = (row, col) => {
    // Update the state based on the button click
    console.log(row, col, grid[row][col]);
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((row) => [...row]);

      newGrid[row][col] = !newGrid[row][col];
      return newGrid;
    });
  };

  return (
    <div>
      <div className="p-10 grid grid-rows-10 place-content-center">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="">
            {row.map((col, colIndex) => (
              <button
                key={`${rowIndex}-${colIndex}`}
                className={`w-16 h-16 m-[2px]  hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ${
                  grid[rowIndex][colIndex] ? "bg-blue-100" : "bg-blue-500"
                }`}
                onClick={() => handleButtonClick(rowIndex, colIndex)}
              >
                {grid[rowIndex][colIndex] && (
                  <img className="rounded-xl" src={Mine} />
                )}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default GameBoard;
