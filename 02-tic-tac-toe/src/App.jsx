import { useState } from "react";

import Player from './components/Player/Player';
import GameBoard from './components/GameBoard/GameBoard';

function App() {
    const [activePlayer, setActivePlayer] = useState('X');

    function handleSquareSelect() {
        setActivePlayer(curActivePlayer => curActivePlayer === 'X' ? 'O' : 'X');
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initName="Player 1" symbol="X" isActive={activePlayer == 'X'} />
                    <Player initName="Player 2" symbol="O" isActive={activePlayer == 'O'} />
                </ol>

                <GameBoard
                    activePlayerSymbol={activePlayer}
                    onSquareSelect={handleSquareSelect}
                />
            </div>
            Log
        </main>
    )
}

export default App