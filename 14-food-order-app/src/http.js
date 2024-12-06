export async function fetchMeals() {
    console.log("Fetching meals..."); // Начало запроса
    const response = await fetch("http://localhost:3000/meals");
    const resData = await response.json();
    console.log("Response received:", resData); // Когда данные пришли

    if (response.ok) {
        return resData;
    } else {
        throw new Error("Failed to fetch meals");
    }
}

export async function submitOrder(data) {
    const response = await fetch("http://localhost:3000/orders", {
        method: "PUT",
        body: JSON.stringify({ order: data }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const resData = await response.json();

    if (response.ok) {
        return resData.message;
    } else {
        throw new Error("Failed to update sumbit orders");
    }

}
