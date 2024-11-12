import { useState, useRef } from "react";

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
        <section className="challenge">
            <h2>{title}</h2>

            {timerExpired && <p>You lost!</p>}

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
    );
}