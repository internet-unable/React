import { useRef, forwardRef, useImperativeHandle } from "react"; 

const ResultModal = forwardRef(({targetTime, remainingTime, onReset}, ref) => {
    const dialog = useRef();
    const remainingTimeInSec = (remainingTime / 1000).toFixed(2);
    const targetTimeInMl = targetTime * 1000;
    const isUserLost = remainingTimeInSec <= 0;
    const score = Math.round((1 - remainingTime / targetTimeInMl) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    });

    return(
        <dialog ref={dialog} className="result-modal" onClose={onReset}>
            {isUserLost && <h2>You lost</h2>}
            {!isUserLost && <h2>Your score is {score}.</h2>}

            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{remainingTimeInSec} seconds left.</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Sumbit</button>
            </form>
        </dialog>
    );
});

export default ResultModal;