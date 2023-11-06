import React from 'react'
import "./Hold.css"
import { buildBoard } from "../business/Board"
import { transferToBoard } from "../business/Tetrominoes";

import BoardCell from "./BoardCell";

const Hold = ({ hold }) => {
    // We want everything except the last one
    const board = buildBoard({ rows: 4, columns: 4 });
    console.log("hold", hold )
    if (hold !== undefined) {
        const { shape, className } = hold;

        board.rows = transferToBoard({
          className,
          isOccupied: false,
          position: { row: 0, column: 0 },
          rows: board.rows,
          shape
        });
    }
    
  
    
  
    const style = { top: `${0 * 15}vw` };
  
    
  
    return (
      <div className="Hold" style={style}>
        <div className="Hold-board">
          {board.rows.map((row, y) =>
            row.map((cell, x) => (
              <BoardCell key={x * board.size.columns + x} cell={cell} />
            ))
          )}
        </div>
      </div>
    )
  };
  
  export default React.memo(Hold);