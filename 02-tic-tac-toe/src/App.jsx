import { useState } from "react";

import Player from './components/Player/Player';
import GameBoard from './components/GameBoard/GameBoard';
import Log from "./components/Log/Log";

function getActivePlayer(gameTurns) {
    let currentPlayer

    if (gameTurns.length > 0) {
        currentPlayer = gameTurns[0].player === 'X' ? 'O' : 'X';
    } else {
        currentPlayer = 'X';
    }

    return currentPlayer;
}

function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const currentPlayer = getActivePlayer(gameTurns);

    function handleSquareSelect(rowIndex, colIndex) {
        setGameTurns(prevTurns => {
            const currentPlayer = getActivePlayer(prevTurns);

            const updatedTurns = [
                {
                    square: { row: rowIndex, col: colIndex },
                    player: currentPlayer
                },
                ...prevTurns
            ];

            return updatedTurns;
        });
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initName="Player 1" symbol="X" isActive={currentPlayer == 'X'} />
                    <Player initName="Player 2" symbol="O" isActive={currentPlayer == 'O'} />
                </ol>

                <GameBoard
                    turns={gameTurns}
                    onSquareSelect={handleSquareSelect}
                />
            </div>

            <Log turns={gameTurns} />
        </main>
    );
}

export default App