import React from 'react'
import "./Tetris.css";
import Board from "./Board"
import GameStats from './GameStats'
import Previews from './Previews'
import GameController from './GameController';
import Hold from './Hold.js';

import { useBoard } from "../hooks/useBoard"
import { useGameStats } from "../hooks/useGameStats"
import { usePlayer } from "../hooks/usePlayer.js"

const Tetris = ({ rows, columns, setGameOver }) => {
    const [gameStats, addLinesCleared] = useGameStats();
    const [player, setPlayer, resetPlayer] = usePlayer();
    const [board, setBoard] = useBoard({
        rows,
        columns,
        player,
        resetPlayer,
        addLinesCleared
    })
    console.log(player.hold)

    return (
        <div className="Tetris">
            
            <Hold hold={player.hold} />
            <Board board={board} />
            <GameStats gameStats={gameStats} />
            <Previews tetrominoes={player.tetrominoes} />
            <GameController
                board={board}
                gameStats={gameStats}
                player={player}
                setGameOver={setGameOver}
                setPlayer={setPlayer}
            />
        </div> 
    )
}

export default Tetris