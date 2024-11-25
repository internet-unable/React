import { useState } from 'react';

export default function Answer({ answer }) {
    const [selectedAnswerStyles, setSelectedAnswerStyles] = useState('');

    function handleAnswerSelect() {
        if (answer.isAnswerRight) {
            setSelectedAnswerStyles('correct');
        } else {
            setSelectedAnswerStyles('wrong');
        }
    }

    return (
        <li className="answer">
            <button
                type="button"
                className={selectedAnswerStyles}
                onClick={handleAnswerSelect}
            >
                {answer.answerText}
            </button>
        </li>
    );
}