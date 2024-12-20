import { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";

import EventsList from "../components/EventsList";

export default function EventsPage() {
    const {events} = useLoaderData();

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Await resolve={events}>
                {(fetchedEvents) => <EventsList events={fetchedEvents.events} />}
            </Await>
        </Suspense>
    );
}

async function fetchEvents() {
    const response = await fetch("http://localhost:8080/events");

    if (response.ok) {
        const resData = await response.json();
        return resData;
    } else {
        // Option 1
        // return { isError: true, message: "Could not fetch events" };

        // Option 2
        // react-router-dom will render closest errorElement of createBrowserRouter(). It can bubble up
        throw new Response(JSON.stringify({ message: "Could not fetch events"}), { status: 500 });
    }
}

export function eventsLoader() {
    return {
        events: fetchEvents()
    }
}
