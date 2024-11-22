import QuestionPanel from './components/QuestionPanel/QuestionPanel.jsx';
import SummaryPanel from './components/SummaryPanel/SummaryPanel.jsx';

function App() {
    return(
        <>
            <div id="quiz">
                <QuestionPanel />
            </div>

            <SummaryPanel />
        </>
    );
}

export default App;