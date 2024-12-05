import { useEffect, useState } from "react";

export default function Progress({ timeout, interval = 10, answerState, answerSkipHandler }) {
    const [progressValue, setProgressValue] = useState(timeout);
    let styles = '';
    if (answerState.selectedAnswer && answerState.isSelectedAnswerCorrect === null) {
        styles = 'answered';
    }
    if (answerState.isSelectedAnswerCorrect === true) {
        styles = 'correct';
    }
    if (answerState.isSelectedAnswerCorrect === false) {
        styles = 'wrong';
    }

    useEffect(() => {
        const timeO = setTimeout(answerSkipHandler, timeout);

        return () => {
            clearTimeout(timeO);
        }
    }, [timeout, answerSkipHandler]);

    useEffect(() => {
        const interV = setInterval(() => {
            setProgressValue(prevState => prevState - interval);
        }, interval);

        return () => {
            clearInterval(interV);
        }
    }, []);

    return (
        <progress id="question-time" max={timeout} value={progressValue} className={styles} />
    );
}