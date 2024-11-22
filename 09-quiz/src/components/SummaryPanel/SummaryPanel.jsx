import img  from '../../assets/quiz-complete.png';

export default function SummaryPanel() {
    return (
        <div id="summary">
            <img src={img} alt="" />
            <h2>Quiz completed!</h2>

            <div id="summary-stats">
                <p>
                    <span className="number">0%</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">43%</span>
                    <span className="text">answered correctly</span>
                </p>
                <p>
                    <span className="number">57%</span>
                    <span className="text">answered incorrectly</span>
                </p>
            </div>

            <ol >
                <li>
                    <h3>1</h3>
                    <p className="question">Question title</p>
                    <p className="user-answer">Answer title</p>
                </li>
                <li>
                    <h3>2</h3>
                    <p className="question">Question title</p>
                    <p className="user-answer correct">Answer title</p>
                </li>
                <li>
                    <h3>3</h3>
                    <p className="question">Question title</p>
                    <p className="user-answer wrong">Answer title</p>
                </li>
                <li>
                    <h3>4</h3>
                    <p className="question">Question title</p>
                    <p className="user-answer skipped">Answer title</p>
                </li>
            </ol>
        </div>
    );
}