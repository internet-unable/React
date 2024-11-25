import { useState } from 'react';
import Progress from '../Progress/Progress.jsx';
import Answer from '../Answer/Answer.jsx';
import { QUESTIONS_BLUEPRINT } from '../../data.js';

export default function QuestionPanel({ timeout, index, answerSelectHandler }) {
    return (
        <div id="question">
            <Progress timeout={timeout} />
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