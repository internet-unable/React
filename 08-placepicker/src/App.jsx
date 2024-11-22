import { useRef, useState, useEffect } from 'react';

import { AVAILABLE_PLACES } from './data.js';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';

const storadeIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
const storedPlaces = storadeIds.map((id) => {
    return AVAILABLE_PLACES.find((place) => place.id === id);
});

function App() {
    const selectedPlace = useRef();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);
    const [availablePlaces, setAvailablePlaces] = useState([]);


    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const sortedPlaces = sortPlacesByDistance(
                AVAILABLE_PLACES,
                position.coords.latitude,
                position.coords.longitude
            );

            setAvailablePlaces(sortedPlaces);
        });
    }, []);

    function handleStartRemovePlace(id) {
        setModalIsOpen(true);
        selectedPlace.current = id;
    }

    function handleStopRemovePlace() {
        setModalIsOpen(false);
    }

    function handleSelectPlace(id) {
        setPickedPlaces((prevPickedPlaces) => {
            if (prevPickedPlaces.some((place) => place.id === id)) {
                return prevPickedPlaces;
            }
            const place = AVAILABLE_PLACES.find((place) => place.id === id);
            return [place, ...prevPickedPlaces];
        });

        const storadeIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
        if (storadeIds.indexOf(id) === -1) {
            localStorage.setItem('selectedPlaces', JSON.stringify([...storadeIds, id]));
        }
    }

    function handleRemovePlace() {
        setPickedPlaces((prevPickedPlaces) =>
            prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
        );
        setModalIsOpen(false);

        const storadeIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
        localStorage.setItem('selectedPlaces', JSON.stringify(storadeIds.filter(id => id !== selectedPlace.current)));
    }

    return (
        <>
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
                <Places
                    title="I'd like to visit ..."
                    fallbackText={'Select the places you would like to visit below.'}
                    places={pickedPlaces}
                    onSelectPlace={handleStartRemovePlace}
                />
                <Places
                    title="Available Places"
                    places={AVAILABLE_PLACES}
                    onSelectPlace={handleSelectPlace}
                />
            </main>
        </>
    );
}

export default App;
