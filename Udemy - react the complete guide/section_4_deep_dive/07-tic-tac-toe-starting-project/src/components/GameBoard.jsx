const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ onSelectSquare }) {
  // ----- Old Game Board State ----------
  //   It is being lifted up in app.js
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   const handleSelectSquare = (row, col) => {
  //     if (gameBoard[row][col] === null) {
  //       setGameBoard((prevGameBoard) => {
  //         let updatedBoard = [
  //           ...prevGameBoard.map((innerArray) => [...innerArray]),
  //         ];
  //         if (activePlayer === "X") {
  //           updatedBoard[row][col] = "X";
  //         } else {
  //           updatedBoard[row][col] = "O";
  //         }
  //         return updatedBoard;
  //       });
  //       onSelectSquare();
  //     } else {
  //       console.log("already placed piece!");
  //     }
  //   };
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
