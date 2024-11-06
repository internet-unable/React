import { useState } from "react";

export default function Player({ initName, symbol, isActive }) {
    const [playerName, setPlayerName] = useState(initName);
    const [isEditing, setIsEditing] = useState(false);

    function handlePlayerNameChange(event) {
        setPlayerName(event.target.value);
    }

    function handleEditClick() {
        setIsEditing(isEditing => !isEditing);
    }

    return(
        <li className={isActive ? 'active' : ''}>
            <div className="player">
                {!isEditing && <span className="player-name">{playerName}</span>}
                {isEditing && <input type="text" value={playerName} onChange={handlePlayerNameChange} />}
                <span className="player-symbol">{symbol}</span>
            </div>
            <button type="button" onClick={handleEditClick}>{isEditing ? 'Save': 'Edit'}</button>
        </li>
    );
}