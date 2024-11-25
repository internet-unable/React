import { useEffect, useState } from "react";
import { QUESTIONS_BLUEPRINT } from './data.js';
import QuestionPanel from './components/QuestionPanel/QuestionPanel.jsx';
import SummaryPanel from './components/SummaryPanel/SummaryPanel.jsx';

const TIMEOUT = 10000;

function App() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    useEffect(() => {
        let timeout;

        if (currentQuestionIndex !== null) {
            timeout = setTimeout(() => {
                if (QUESTIONS_BLUEPRINT[currentQuestionIndex + 1]) {
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                } else {
                    setCurrentQuestionIndex(null);
                    clearTimeout(timeout);
                }
            }, TIMEOUT);
        }

        return () => {
            clearTimeout(timeout);
        }
    }, [currentQuestionIndex]);

    return(
        <>
            {QUESTIONS_BLUEPRINT[currentQuestionIndex] && (
                <div id="quiz">
                    <QuestionPanel index={currentQuestionIndex} timeout={TIMEOUT} />
                </div>
            )}

            {!QUESTIONS_BLUEPRINT[currentQuestionIndex] && (
                <SummaryPanel />
            )}
        </>
    );
}

export default App;