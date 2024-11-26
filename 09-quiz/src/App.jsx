import { useState } from "react";

import { QUESTIONS_BLUEPRINT } from './data.js';

import QuestionPanel from './components/QuestionPanel/QuestionPanel.jsx';
import SummaryPanel from './components/SummaryPanel/SummaryPanel.jsx';

function App() {
    const [userAnswers, setUserAnswers] = useState(null);
    const currentQuestionIndex = userAnswers !== null ? userAnswers.length : null;
    const isQuestionsAreOver = currentQuestionIndex === QUESTIONS_BLUEPRINT.length;

    function handleUpdateUserAnswers(answerId) {
        setUserAnswers(prevState => {
            return [...prevState, answerId];
        });
    }

    function handleStartQuiz() {
        setUserAnswers([]);
    }

    return (
        <>
            {userAnswers === null && (
                <button type="button" onClick={handleStartQuiz}>Start quiz</button>
            )}

            {userAnswers !== null && !isQuestionsAreOver && (
                <div id="quiz">
                    <QuestionPanel
                        key={currentQuestionIndex}
                        index={currentQuestionIndex}
                        updateUserAnswersHandler={handleUpdateUserAnswers}
                    />
                </div>
            )}

            {userAnswers !== null && isQuestionsAreOver && (
                <>
                    <button type="button" onClick={handleStartQuiz}>Restart quiz</button>
                    <SummaryPanel />
                </>
            )}
        </>
    );
}

export default App;