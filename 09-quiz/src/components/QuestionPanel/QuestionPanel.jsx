import { useState, useCallback } from 'react';
import Progress from '../Progress/Progress.jsx';
import Answer from '../Answer/Answer.jsx';
import { QUESTIONS_BLUEPRINT } from '../../data.js';

const TIMEOUT = 10000;

export default function QuestionPanel({ index, answerSelectHandler, skipAnswerHandler }) {
    const handleTimeOut = useCallback(() => skipAnswerHandler());

    return (
        <div id="question">
            <Progress
                key={index}
                timeOut={TIMEOUT}
                timeOutHandler={handleTimeOut}
            />
            <h2>{QUESTIONS_BLUEPRINT[index].questionText}</h2>
            <ul id="answers">
                {QUESTIONS_BLUEPRINT[index].answers.map(answer => (
                    <Answer
                        key={answer.answerId}
                        id={answer.answerId}
                        text={answer.answerText}
                        answerSelectHandler={answerSelectHandler}
                    />
                ))}
            </ul>
        </div>
    );
}