import { useState } from "react";

import { QUESTIONS_BLUEPRINT } from './data.js';

import QuestionPanel from './components/QuestionPanel/QuestionPanel.jsx';
import SummaryPanel from './components/SummaryPanel/SummaryPanel.jsx';

function App() {
    const [userAnswers, setUserAnswers] = useState([]);
    const currentQuestionIndex = userAnswers.length;
    const isQuestionsAreOver = currentQuestionIndex === QUESTIONS_BLUEPRINT.length;

    function handleUpdateUserAnswers(answerId) {
        setUserAnswers(prevState => {
            return [...prevState, answerId];
        });
    }

    return (
        <>
            {!isQuestionsAreOver && (
                <div id="quiz">
                    <QuestionPanel
                        key={currentQuestionIndex}
                        index={currentQuestionIndex}
                        updateUserAnswersHandler={handleUpdateUserAnswers}
                    />
                </div>
            )}

            {isQuestionsAreOver && <SummaryPanel />}
        </>
    );
}

export default App;