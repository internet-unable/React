import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ onSquareSelect, activePlayerSymbol }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleBoardItemSelect(rowIndex, colIndex, symbol) {
        setGameBoard((prevGameBoard) => {
            const unpdatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            unpdatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return unpdatedBoard;
        });
        onSquareSelect();
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
                                    onClick={() => handleBoardItemSelect(rowIndex, colIndex)}
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