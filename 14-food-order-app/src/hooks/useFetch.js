import { useState, useEffect } from "react";

export function useFetch(fetchFn) {
    const [isFetching, setIsFetching] = useState(false);
    const [fetchedData, setFetchedData] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsFetching(true);
            try {
                const data = await fetchFn();
                setFetchedData(data);
            } catch (error) {
                setError({
                    message: error.message || "Failed to fetch data",
                });
            }
            setIsFetching(false);
        }

        fetchData();
    }, [fetchFn]);

    return {
        isFetching,
        fetchedData,
        error
    };
}
