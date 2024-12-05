import { useCallback, useState } from 'react';

import { QUESTIONS_BLUEPRINT } from '../../data.js';

import Progress from '../Progress/Progress.jsx';
import Answer from '../Answer/Answer.jsx';

const QUESTION_UPDATE_TIMEOUT = 10000;
const ANSWER_IS_SELECTED = 1000;
const ANSWER_IS_CORRECT_OR_WRONG = 2000;

export default function QuestionPanel({ index, updateUserAnswersHandler }) {
    const [answerState, setAnswerState] = useState({
        selectedAnswer: '',
        isSelectedAnswerCorrect: null
    });
    
    let timeOut = QUESTION_UPDATE_TIMEOUT;
    if (answerState.selectedAnswer) {
        timeOut = ANSWER_IS_SELECTED;
    }
    if (answerState.isSelectedAnswerCorrect !== null) {
        timeOut = ANSWER_IS_CORRECT_OR_WRONG;
    }

    const handleUpdateUserAnswers = useCallback((answerId) => {
        updateUserAnswersHandler(answerId);
    });

    function handleAnswerSelect(answerId) {
        setAnswerState({
            selectedAnswer: answerId,
            isSelectedAnswerCorrect: null
        });

        setTimeout(() => {
            setAnswerState({
                selectedAnswer: answerId,
                isSelectedAnswerCorrect: QUESTIONS_BLUEPRINT[index].answers.find(item => item.answerId === answerId).isAnswerCorrect
            });

            setTimeout(() => {
                handleUpdateUserAnswers(answerId);
            }, ANSWER_IS_CORRECT_OR_WRONG);
        }, ANSWER_IS_SELECTED);
    }

    const handleAnswerSkip = useCallback(() => {
        handleUpdateUserAnswers(null);
    }, [handleUpdateUserAnswers]);

    return (
        <div id="question">
            <Progress
                key={timeOut}
                timeout={timeOut}
                answerState={answerState}
                answerSkipHandler={answerState.selectedAnswer === '' ? handleAnswerSkip : null}
            />

            <h2>{QUESTIONS_BLUEPRINT[index].questionText}</h2>

            <ul id="answers">
                {QUESTIONS_BLUEPRINT[index].answers.map(item => (
                    <Answer
                        key={item.answerId}
                        id={item.answerId}
                        text={item.answerText}
                        answerState={answerState}
                        answerSelectHandler={handleAnswerSelect}
                    />
                ))}
            </ul>
        </div>
    );
}