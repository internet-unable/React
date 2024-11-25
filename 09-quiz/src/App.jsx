import { useCallback, useEffect, useState } from "react";
import { QUESTIONS_BLUEPRINT } from './data.js';
import QuestionPanel from './components/QuestionPanel/QuestionPanel.jsx';
import SummaryPanel from './components/SummaryPanel/SummaryPanel.jsx';

function App() {
    const [userAnswers, setUserAnswers] = useState([]);
    const currentQuestionIndex = userAnswers.length;
    const isQuestionsAreOver = currentQuestionIndex === QUESTIONS_BLUEPRINT.length;

    const handleAnswerSelect = useCallback((answerId) => {
        setUserAnswers(prevState => {
            return [...prevState, answerId];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleAnswerSelect(null), [handleAnswerSelect]);

    return(
        <>
            {!isQuestionsAreOver && (
                <div id="quiz">
                    <QuestionPanel
                        index={currentQuestionIndex}
                        answerSelectHandler={handleAnswerSelect}
                        skipAnswerHandler={handleSkipAnswer}
                    />
                </div>
            )}

            {isQuestionsAreOver && <SummaryPanel />}
        </>
    );
}

export default App;