import { useState, useEffect } from "react";

export function useFetch(fetchFn) {
    const [isFetching, setIsFetching] = useState();
    const [error, setError] = useState();
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setIsFetching(true);
            try {
                const places = await fetchFn();
                setFetchedData(places);
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
        error,
        fetchedData
    };
}
