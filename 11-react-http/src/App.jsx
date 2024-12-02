import { useRef, useState, useCallback, useEffect } from 'react';

import logoImg from './assets/logo.png';
import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import ErrorCmp from './components/ErrorCmp.jsx';
import { updateUserPlaces, fetchUserPlaces } from './http.js';

function App() {
    const selectedPlace = useRef();
    const [userPlaces, setUserPlaces] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();

    const [userPlacesUpdateFailed, setUserPlacesUpdateFailed] = useState();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        async function fetchPlaces() {
            setIsFetching(true);
            try {
                const places = await fetchUserPlaces();
                setUserPlaces(places);
            } catch (error) {
                setError({ message: message.error || 'Failed to feth user places' });
            }
            setIsFetching(false);
        };

        fetchPlaces();
    }, []);

    function handleStartRemovePlace(place) {
        setModalIsOpen(true);
        selectedPlace.current = place;
    }

    function handleStopRemovePlace() {
        setModalIsOpen(false);
    }

    async function handleSelectPlace(selectedPlace) {
        setUserPlaces((prevPickedPlaces) => {
            if (!prevPickedPlaces) {
                prevPickedPlaces = [];
            }
            if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
                return prevPickedPlaces;
            }
            return [selectedPlace, ...prevPickedPlaces];
        });

        try {
            await updateUserPlaces([selectedPlace, ...userPlaces]);
        } catch (error) {
            // if request failed - setUserPlaces to prev state
            setUserPlaces(userPlaces);
            setUserPlacesUpdateFailed({ message: error.message || 'Failed to update places' });
        }
    }

    const handleRemovePlace = useCallback(async function handleRemovePlace() {
        setUserPlaces((prevPickedPlaces) =>
            prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
        );
        setModalIsOpen(false);

        try {
            // delete place
            await updateUserPlaces(userPlaces.filter(place => place.id !== selectedPlace.current.id));
        } catch (error) {
            // if request failed - setUserPlaces to prev state
            setUserPlaces(userPlaces);
            setUserPlacesUpdateFailed({ message: error.message || 'Failed to delete place' });
        }
    }, [userPlaces]);

    function handleUserPlacesUpdateFailedError() {
        setUserPlacesUpdateFailed(null);
    }

    return (
        <>
            <Modal open={userPlacesUpdateFailed} onClose={handleUserPlacesUpdateFailedError}>
                {userPlacesUpdateFailed && (
                    <ErrorCmp
                        title="An error occurred!"
                        message={userPlacesUpdateFailed.message}
                        onConfirm={handleUserPlacesUpdateFailedError}
                    />
                )}
            </Modal>

            <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
                <DeleteConfirmation
                    onCancel={handleStopRemovePlace}
                    onConfirm={handleRemovePlace}
                />
            </Modal>

            <header>
                <img src={logoImg} alt="Stylized globe" />
                <h1>PlacePicker</h1>
                <p>
                    Create your personal collection of places you would like to visit or
                    you have visited.
                </p>
            </header>

            <main>
                {error && (
                    <ErrorCmp
                        title="An error occurred!"
                        message={error.message}
                    />
                )}

                {!error && (
                    <Places
                        title="I'd like to visit ..."
                        fallbackText="Select the places you would like to visit below."
                        places={userPlaces}
                        onSelectPlace={handleStartRemovePlace}
                        isLoading={isFetching}
                    />
                )}

                <AvailablePlaces onSelectPlace={handleSelectPlace} />
            </main>
        </>
    );
}

export default App;
