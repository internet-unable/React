import { useCallback, useState } from "react";
import { AppContext } from './store/app-context.jsx';

import { QUESTIONS_BLUEPRINT } from './data.js';
import QuestionPanel from './components/QuestionPanel/QuestionPanel.jsx';
import SummaryPanel from './components/SummaryPanel/SummaryPanel.jsx';

function App() {
    const [userAnswers, setUserAnswers] = useState([]);
    const [answerState, setAnswerState] = useState('');
    const currentQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;
    const isQuestionsAreOver = currentQuestionIndex === QUESTIONS_BLUEPRINT.length;

    const handleAnswerSelect = useCallback((answerId) => {
        // setAnswerState('answered');
        // setTimeout(() => {
        //     const currentAnswer = QUESTIONS_BLUEPRINT[currentQuestionIndex].answers.find(answer => answer.answerId === answerId);

        //     if (currentAnswer.isAnswerRight) {
        //         setAnswerState('correct');
        //     } else {
        //         setAnswerState('wrong');
        //     }

        //     setTimeout(() => {
        //         setAnswerState('');
        //     }, 2000);
        // }, 1000);
        setUserAnswers(prevState => {
            return [...prevState, answerId];
        });
    }, []);

    const handleAnswerSkip = useCallback(() => {
        handleAnswerSelect(null);
    }, [handleAnswerSelect]);

    const ctxValue = {
        userAnswers,
        answerState,
        answerSelect: handleAnswerSelect,
        answerSkip: handleAnswerSkip
    }

    // let answerStyles = '';
    // if (answerState === 'answered' && ) {}

    return(
        <AppContext.Provider value={ctxValue}>
            {!isQuestionsAreOver && (
                <div id="quiz">
                    <QuestionPanel index={currentQuestionIndex} />
                </div>
            )}

            {isQuestionsAreOver && <SummaryPanel />}
        </AppContext.Provider>
    );
}

export default App;