import { useState } from "react";

import Output from "./Output";

export default function Greeting() {
    const [changedText, setChangedText] = useState(false);

    function handleTextChange() {
        setChangedText(true);
    }

    return (
        <>
            <h2>Hello world!</h2>
            {/* <p>It is good to see you</p> */}
            {!changedText && <Output>It is good to see you</Output>}
            {changedText && <Output>Changed!</Output>}
            <button onClick={handleTextChange}>Change text</button>
        </>
    );
}
