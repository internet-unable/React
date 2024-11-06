import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ turns, onSquareSelect }) {
    let gameBoard = initialGameBoard;
    for (const turn of turns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((col, colIndex) => (
                            <li key={colIndex}>
                                <button
                                    type="button"
                                    onClick={() => onSquareSelect(rowIndex, colIndex)}
                                >
                                    {col}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}