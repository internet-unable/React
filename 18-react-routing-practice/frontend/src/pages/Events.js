import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

export default function EventsPage() {
    const data = useLoaderData();

    return (
        <>
            {data.isError && (
                <p>{data.message}</p>
            )}
            
            {!data.isError && (
                <EventsList events={data.events} />
            )}
        </>
    );
}

export async function eventsLoader() {
    const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {
        return { isError: true, message: 'Could not fetch events' }
    } else {
        return response;
    }
}