import { useState, useCallback } from "react";

import { randomTetromino } from "../business/Tetrominoes";

const buildPlayer = (previous) => {
    let tetrominoes;
    let hold; 
    if (previous) {
      tetrominoes = [...previous.tetrominoes];
      tetrominoes.unshift(randomTetromino());
      hold = previous.hold
    } else {
      hold = randomTetromino()
      tetrominoes = Array(5)
        .fill(0)
        .map((_) => randomTetromino());
    }
  
    return {
      collided: false,
      isFastDropping: false,
      position: { row: 0, column: 4 },
      tetrominoes,
      tetromino: tetrominoes.pop(),
      hold
    };
  };
  
  export const usePlayer = () => {
    const [player, setPlayer] = useState(buildPlayer());
  
    const resetPlayer = useCallback(() => {
      setPlayer((prev) => buildPlayer(prev));
    }, []);
    
    
    return [player, setPlayer, resetPlayer];
  };
  