import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import ErrorCmp from './ErrorCmp.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js'

export default function AvailablePlaces({ onSelectPlace }) {
    const [availablePlaces, setAvailablePlaces] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();

    // using awync/await
    useEffect(() => {
        async function fetchPlaces() {
            setIsFetching(true);

            try {
                const places = await fetchAvailablePlaces();
                navigator.geolocation.getCurrentPosition((position) => {
                    const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);
                    setAvailablePlaces(sortedPlaces);
                    setIsFetching(false);
                });
            } catch (error) {
                setError(error);
                setIsFetching(false);
            }
        }

        fetchPlaces();
    }, []);
    // no dependecies, so useEffect will execute only once, AFTER component execution

    if (error) {
        return (
            <ErrorCmp
                title="An error occurred!"
                message={error.message}
            />
        );
    } else {
        return (
            <Places
                title="Available Places"
                places={availablePlaces}
                fallbackText="No places available."
                onSelectPlace={onSelectPlace}
                isLoading={isFetching}
            />
        );
    }
}
