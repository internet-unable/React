import { useEffect, useState, useContext } from "react";
import { AppContext } from '../../store/app-context.jsx';

const TIMEOUT = 10000;
const INTERVAL = 10;

export default function Progress() {
    const [progressValue, setProgressValue] = useState(TIMEOUT);
    const { answerSkip } = useContext(AppContext);

    useEffect(() => {
        console.log('Setting timeout');
        const timeout = setTimeout(answerSkip, TIMEOUT);

        return () => {
            clearTimeout(timeout);
        }
    }, [TIMEOUT, answerSkip]);

    useEffect(() => {
        console.log('Setting interval');
        const interval = setInterval(() => {
            setProgressValue(prevState => prevState - INTERVAL);
        }, INTERVAL);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <progress id="question-time" max={TIMEOUT} value={progressValue} />
    );
}