import { NavLink, Outlet } from "react-router-dom";

import EventsNavigation from "../components/EventsNavigation";

const DUMMY_EVENTS = [
    { id: 1, title: "Event 1" },
    { id: 2, title: "Event 2" },
    { id: 3, title: "Event 3" },
];

export default function EventsPage() {
    return (
        <>
            <EventsNavigation />
            <main>
                <h1>Events page</h1>
                <ul>
                    {DUMMY_EVENTS.map(event => (
                        <li key={event.id}>
                            <NavLink to={`/events/${event.id}`}>{event.title}</NavLink>
                        </li>
                    ))}
                </ul>
                {/* <Outlet /> */}
            </main>
        </>
    );
}
