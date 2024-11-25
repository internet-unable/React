import { useEffect, useState } from "react";

const INTERVAL = 10;

export default function Progress({ timeOut, timeOutHandler }) {
    const [progressValue, setProgressValue] = useState(timeOut);

    useEffect(() => {
        console.log('Setting timeout');
        const timeout = setTimeout(timeOutHandler, timeOut);

        return () => {
            clearTimeout(timeout);
        }
    }, [timeOut, timeOutHandler]);

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
        <progress id="question-time" max={timeOut} value={progressValue} />
    );
}