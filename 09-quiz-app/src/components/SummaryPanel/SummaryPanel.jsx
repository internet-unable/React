import img from '../../assets/quiz-complete.png';
import { QUESTIONS_BLUEPRINT } from '../../data.js';

export default function SummaryPanel({ quizResults }) {
    const totalQuestionsAmount = quizResults.length;
    const notSkippedQuestions = quizResults.filter(item => item !== null);
    const skippedAnswersLength = totalQuestionsAmount - notSkippedQuestions.length;
    const [correctAnswers, wrongAnswers] = splitIntoCorrectAndWrongAnswers(notSkippedQuestions);
    const skippedAnswersPercent = `${Math.round(skippedAnswersLength / totalQuestionsAmount * 100)}%`;
    const correctAnswersPercent = `${Math.round(correctAnswers.length / totalQuestionsAmount * 100)}%`;
    const wrongAnswersPercent = `${Math.round(wrongAnswers.length / totalQuestionsAmount * 100)}%`;

    function splitIntoCorrectAndWrongAnswers(array) {
        const correctAnswers = [];
        const wrongAnswers = [];

        array.forEach(item => {
            const questionId = item.split('-')[0];
            const questionInBlueprint = QUESTIONS_BLUEPRINT.find(question => question.questionId === questionId);
            const answerInBluepring = questionInBlueprint.answers.find(answer => answer.answerId === item);

            if (answerInBluepring.isAnswerCorrect) {
                correctAnswers.push(item);
            } else {
                wrongAnswers.push(item);
            }
        });

        return [correctAnswers, wrongAnswers];
    }

    return (
        <div id="summary">
            <img src={img} alt="" />
            <h2>Quiz completed!</h2>

            <div id="summary-stats">
                <p>
                    <span className="number">{skippedAnswersPercent}</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">{correctAnswersPercent}</span>
                    <span className="text">correct</span>
                </p>
                <p>
                    <span className="number">{wrongAnswersPercent}</span>
                    <span className="text">wrong</span>
                </p>
            </div>

            <ol>
                {QUESTIONS_BLUEPRINT.map((question, index) => {
                    const isQuestionSkipped = !quizResults[index];
                    let answerText;
                    let styles = 'user-answer';

                    if (isQuestionSkipped) {
                        styles +=' skipped';
                        answerText = 'Skipped';
                    } else {
                        const answer = question.answers.find(answer => answer.answerId === quizResults[index]);
                        const isAnswerCorrect = answer.isAnswerCorrect;

                        if (isAnswerCorrect) {
                            styles += ' correct';
                        } else {
                            styles += ' wrong';
                        }
                        answerText = answer.answerText;
                    }

                    return (
                        <li key={question.questionId}>
                            <h3>{index + 1}</h3>
                            <p className="question">{question.questionText}</p>
                            <p className={styles}>{isQuestionSkipped ? 'Skipped' : answerText}
                            </p>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}