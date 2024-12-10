import { useState } from "react";

const BACKEND_URL = "http://localhost:3000";

async function sendHttpRequest(url, config) {
    const response = await fetch(`${BACKEND_URL}/${url}`, config);
    const resData = await response.json();

    if (response.ok) {
        return resData;
    } else {
        throw new Error(resData.message);
    }
}

export function useHttp(url, config) {
    const [isPending, setIsPending] = useState(false);
    const [data, setData] = useState();
    const [error, setError] = useState(false);

    async function sendRequest(body) {
        setIsPending(true);
        try {
            const responce = await sendHttpRequest(url, { ...config, body });
            setData(responce);
        } catch (error) {
            setError(error.message);
        }
        setIsPending(false);
    }

    return {
        isPending,
        data,
        setData,
        error,
        setError,
        sendRequest
    };
}
