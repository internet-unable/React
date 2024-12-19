import { useRouteLoaderData } from "react-router-dom";

import EventItem from "../components/EventItem";

export default function EventDetailPage() {
    const data = useRouteLoaderData('event-detail');

    return (
        <>
            <EventItem event={data.event} />
        </>
    );
}

export async function eventDetailLoader({params}) {
    const response = await fetch(`http://localhost:8080/events/${params.eventId}`);

    if (response.ok) {
        return response;
    } else {
        throw new Response(JSON.stringify({ message: "Could not fetch events details"}), { status: 500 });
    }
}
