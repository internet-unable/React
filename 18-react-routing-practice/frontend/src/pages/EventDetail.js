import { Suspense } from "react";
import { useRouteLoaderData, redirect, Await } from "react-router-dom";

import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

export default function EventDetailPage() {
    const { event, events } = useRouteLoaderData("event-detail");

    return (
        <>
            <Suspense fallback={<p>Loading event details...</p>}>
                <Await resolve={event}>
                    {(fetchedEvent) => <EventItem event={fetchedEvent} />}
                </Await>
            </Suspense>

            <Suspense fallback={<p>Loading events...</p>}>
                <Await resolve={events}>
                    {(fetchedEvents) => <EventsList events={fetchedEvents} />}
                </Await>
            </Suspense>
        </>
    );
}

async function fetchEvent(id) {
    const response = await fetch(`http://localhost:8080/events/${id}`);

    if (response.ok) {
        const resData = response.json();
        return resData;
    } else {
        throw new Response(
            JSON.stringify({ message: "Could not fetch events details" }),
            { status: 500 }
        );
    }
}

async function fetchEvents() {
    const response = await fetch("http://localhost:8080/events");

    if (response.ok) {
        const resData = await response.json();
        return resData;
    } else {
        throw new Response(
            JSON.stringify({ message: "Could not fetch events" }),
            { status: 500 }
        );
    }
}

export async function eventDetailLoader({ params }) {
    const id = params.id;

    return {
        event: await fetchEvent(id),
        events: fetchEvents(),
    };
}

export async function deleteEventAction({ request, params }) {
    const eventId = params.eventId;
    const response = await fetch("http://localhost:8080/events/" + eventId, {
        method: request.method,
    });

    if (response) {
        return redirect("/events");
    } else {
        throw new Response(
            JSON.stringify({ message: "Failed to delete event" }),
            { status: 500 }
        );
    }
}
