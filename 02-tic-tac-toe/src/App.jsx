import { useState } from "react";

import Player from './components/Player/Player';
import GameBoard from './components/GameBoard/GameBoard';
import Log from "./components/Log/Log";
import { WINNING_COMBINATIONS } from './winning-combinations.js';

const initialGameBoardBlueprint = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function updateBoard(turns) {
    let gameBoard = [...initialGameBoardBlueprint];

    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    return gameBoard;
}

function findWinner(board) {
    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = board[combination[0].row][combination[0].column];
        const secondSquareSymbol = board[combination[1].row][combination[1].column];
        const thirdSquareSymbol = board[combination[2].row][combination[2].column];

        if (
            firstSquareSymbol &&
            firstSquareSymbol === secondSquareSymbol &&
            firstSquareSymbol === thirdSquareSymbol
        ) {
            return firstSquareSymbol;
        }
    }
}

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
    // update board according to selected squares
    let gameBoard = updateBoard(gameTurns);
    // check for winning combination and find a winner
    let winner = findWinner(gameBoard);

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
                {winner && <p>Player {winner} won!</p>}
                <GameBoard
                    board={gameBoard}
                    onSquareSelect={handleSquareSelect}
                />
            </div>

            <Log turns={gameTurns} />
        </main>
    );
}

export default App