import { useState, useRef } from "react";
import ResultModal from "../ResultModal/ResultModal.jsx";

export default function TimerChallenge({title, targetTime}) {
    const [timerStarted, setTimerStarted] = useState();
    const [timerExpired, setTimerExpired] = useState(false);
    const timer = useRef();

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);
    }

    function handleStop() {
        clearTimeout(timer.current);
    }

    return(
        <>
            {timerExpired && <ResultModal targetTime={targetTime} result="lost" />}

            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 && 's'}
                </p>
                <p>
                    <button type="button" onClick={timerStarted ? handleStop: handleStart}>
                        {timerStarted ? 'Stop' : 'Start'} challenge
                    </button>
                </p>
                <p className={timerStarted ? 'active' : ''}>
                    {timerStarted ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
}