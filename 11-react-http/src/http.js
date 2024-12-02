export async function fetchAvailablePlaces() {
    const response = await fetch("http://localhost:3000/places");
    const resData = await response.json();

    if (response.ok) {
        // status code 200/300
        return resData.places;
    } else {
        // status code 400/500
        throw new Error("Failed to fetch places");
    }
}

export async function updateUserPlaces(places) {
    const response = await fetch("http://localhost:3000/user-places", {
        method: "PUT",
        body: JSON.stringify({ places }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const resData = await response.json();

    if (response.ok) {
        // status code 200/300
        return resData.message;
    } else {
        // status code 400/500
        throw new Error("Failed to update user data");
    }
}
