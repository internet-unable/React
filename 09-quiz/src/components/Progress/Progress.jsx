import { useEffect, useState } from "react";

const INTERVAL = 10;

export default function Progress({ timeout }) {
    const [progressValue, setProgressValue] = useState(timeout);

    useEffect(() => {
        let interval;

        if (progressValue > 0) {
            interval = setInterval(() => {
                setProgressValue(prevState => {
                    return prevState - INTERVAL;
                })
            }, INTERVAL);
        }

        return () => {
            clearInterval(interval);
        }
    }, [progressValue]);

    return (
        <progress max={timeout} value={progressValue} />
    );
}