import { useState } from 'react';

export default function Answer({ id, text, answerSelectHandler }) {
    // const [selectedAnswerStyles, setSelectedAnswerStyles] = useState('');

    return (
        <li className="answer">
            <button
                type="button"
                // className={selectedAnswerStyles}
                onClick={() => answerSelectHandler(id)}
            >
                {text}
            </button>
        </li>
    );
}