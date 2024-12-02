import { useEffect, useState } from 'react';
import ErrorCmp from './ErrorCmp.jsx';
import Places from './Places.jsx';
import { sortPlacesByDistance } from '../loc.js';

export default function AvailablePlaces({ onSelectPlace }) {
    const [availablePlaces, setAvailablePlaces] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();

    // using awync/await
    useEffect(() => {
        async function fetchPlaces() {
            setIsFetching(true);

            try {
                const response = await fetch('http://localhost:3000/places');
                const resData = await response.json();

                if (response.ok) { // status code 200/300
                    navigator.geolocation.getCurrentPosition((position) => {
                        const sortedPlaces = sortPlacesByDistance(resData.places, position.coords.latitude, position.coords.longitude);
                        setAvailablePlaces(sortedPlaces);
                        setIsFetching(false);
                    });
                } else { // status code 400/500
                    throw new Error('Failed to fetch places');
                }
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
