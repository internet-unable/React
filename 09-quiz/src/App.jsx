import { useEffect, useState } from "react";
import { QUESTIONS_BLUEPRINT } from './data.js';
import QuestionPanel from './components/QuestionPanel/QuestionPanel.jsx';
import SummaryPanel from './components/SummaryPanel/SummaryPanel.jsx';

const TIMEOUT = 10000;

function App() {
    const [userAnswers, setUserAnswers] = useState([]);
    const currentQuestionIndex = userAnswers.length;
    const isQuestionsAreOver = currentQuestionIndex === QUESTIONS_BLUEPRINT.length;

    function handleAnswerSelect(answerId) {
        setUserAnswers(prevState => {
            return [...prevState, answerId];
        });
    }

    // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    // const [userAnswers, setUserAnswers] = useState([]);
    // const currentQuestionIndex = userAnswers.length;

    // useEffect(() => {
    //     let timeout;

    //     if (currentQuestionIndex !== null) {
    //         timeout = setTimeout(() => {
    //             if (QUESTIONS_BLUEPRINT[currentQuestionIndex + 1]) {
    //                 setCurrentQuestionIndex(currentQuestionIndex + 1);
    //             } else {
    //                 setCurrentQuestionIndex(null);
    //                 clearTimeout(timeout);
    //             }
    //         }, TIMEOUT);
    //     }

    //     return () => {
    //         clearTimeout(timeout);
    //     }
    // }, [currentQuestionIndex]);

    return(
        <>
            {!isQuestionsAreOver && (
                <div id="quiz">
                    <QuestionPanel
                        index={currentQuestionIndex}
                        answerSelectHandler={handleAnswerSelect}
                    />
                </div>
            )}

            {isQuestionsAreOver && <SummaryPanel />}
        </>
    );
}

export default App;