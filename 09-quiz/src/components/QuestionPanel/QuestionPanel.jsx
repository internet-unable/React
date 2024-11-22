export default function QuestionPanel() {
    return(
        <div id="question">
            <progress />
            <h2>Question title</h2>
            <ul id="answers">
                <li className="answer">
                    <button>Answer 1</button>
                </li>
                <li className="answer">
                    <button>Answer 1</button>
                </li>
                <li className="answer">
                    <button>Answer 1</button>
                </li>
                <li className="answer">
                    <button>Answer 1</button>
                </li>
            </ul>
        </div>
    );
}