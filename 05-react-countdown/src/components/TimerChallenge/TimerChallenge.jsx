import { useState, useRef } from "react";
import ResultModal from "../ResultModal/ResultModal.jsx";

export default function TimerChallenge({title, targetTime}) {
    const targetTimeInMl = targetTime * 1000;
    const timerIntervalUpdateDuration = 10;
    const [remainingTime, setRemainingTime] = useState(targetTimeInMl);
    const isTimerActive = remainingTime > 0 && remainingTime < targetTimeInMl;
    const timer = useRef();
    const dialog = useRef();

    if (remainingTime <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleRemainingTimeReset() {
        setRemainingTime(targetTimeInMl);
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setRemainingTime(prevState => prevState - timerIntervalUpdateDuration);
        }, timerIntervalUpdateDuration);
    }

    function handleStop() {
        clearInterval(timer.current);
        dialog.current.open();
    }

    return(
        <>
            <ResultModal
                ref={dialog}
                targetTime={targetTime}
                remainingTime={remainingTime}
                onReset={handleRemainingTimeReset}
            />

            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 && 's'}
                </p>
                <p>
                    <button type="button" onClick={isTimerActive ? handleStop: handleStart}>
                        {isTimerActive ? 'Stop' : 'Start'} challenge
                    </button>
                </p>
                <p className={isTimerActive ? 'active' : ''}>
                    {isTimerActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
}