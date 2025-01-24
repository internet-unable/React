import { useState } from "react";

export default function Greeting() {
    const [changedText, setChangedText] = useState(false);

    function handleTextChange() {
        setChangedText(true);
    }

    return (
        <>
            <h2>Hello world!</h2>
            {/* <p>It is good to see you</p> */}
            {!changedText && <p>It is good to see you</p>}
            {changedText && <p>Changed!</p>}
            <button onClick={handleTextChange}>Change text</button>
        </>
    );
}
