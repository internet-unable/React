import { QUESTIONS_BLUEPRINT } from '../../data.js';
import Progress from '../Progress/Progress.jsx';
import Answer from '../Answer/Answer.jsx';

export default function QuestionPanel({ index }) {
    return (
        <div id="question">
            <Progress key={index} />

            <h2>{QUESTIONS_BLUEPRINT[index].questionText}</h2>

            <ul id="answers">
                {QUESTIONS_BLUEPRINT[index].answers.map(answer => (
                    <Answer
                        key={answer.answerId}
                        id={answer.answerId}
                        text={answer.answerText}
                    />
                ))}
            </ul>
        </div>
    );
}