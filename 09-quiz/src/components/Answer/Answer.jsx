export default function Answer({ id, text, answerState, answerSelectHandler }) {
    let styles = '';
    if (answerState.selectedAnswer === id) {
        if (answerState.isSelectedAnswerCorrect === null) {
            styles = 'selected';
        }
        if (answerState.isSelectedAnswerCorrect === true) {
            styles = 'correct';
        }
        if (answerState.isSelectedAnswerCorrect === false) {
            styles = 'wrong';
        }
    }

    return (
        <li className="answer">
            <button
                type="button"
                className={styles}
                onClick={() => answerSelectHandler(id)}
                disabled={styles !== ''}
            >
                {text}
            </button>
        </li>
    );
}