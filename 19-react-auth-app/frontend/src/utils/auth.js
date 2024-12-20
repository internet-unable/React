import { redirect } from "react-router-dom";

export function getTokenDuration() {
    const storedExpirationDate = localStorage.getItem("expirationDate");
    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();

    return duration;
}

export function getAuthToken() {
    if (!token) {
        return null;
    }

    const tokenDutaion = getTokenDuration();
    if (tokenDutaion <= 0) {
        return "EXPIRED";
    }

    return localStorage.getItem("token");
}

export function tokenLoader() {
    return getAuthToken();
}

export function checkAuthLoader() {
    const token = getAuthToken();

    if (token) {
        return null;
    } else {
        return redirect("/auth");
    }
}