import { redirect } from "react-router-dom";

import EventForm from "../components/EventForm";

export default function NewEventPage() {
    return (
        <EventForm />
    );
}

export async function newEventAction({request}) {
    const data = await request.formData();
    const eventData = {
        title: data.get("title"),
        image: data.get("image"),
        date: data.get("date"),
        description: data.get("description"),
    };

    const response = await fetch("http://localhost:8080/events", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventData)
    });

    if (response.status === 422) {
        return response;
    }

    if (response.ok) {
        return redirect('/events');
    } else {
        throw new Response(JSON.stringify({ message: "Could not save event" }), { status: 500 });
    }
}