import { useState } from "react";

export default function Player() {
    const [enteredPlayerName, setEnteredPlayerName] = useState('');
    const [isNameSet, setIsNameSet] = useState(false);

    function handleInputChange(event) {
        setIsNameSet(false);
        setEnteredPlayerName(event.target.value);
    }

    function handleBtnClick() {
        setIsNameSet(true);
    }

    return (
        <section id="player">
            <h2>Welcome {isNameSet ? enteredPlayerName : 'unknown entity'}</h2>
            <p>
                <input type="text" onChange={handleInputChange} value={enteredPlayerName} />
                <button type="button" onClick={handleBtnClick}>Set Name</button>
            </p>
        </section>
    );
}
