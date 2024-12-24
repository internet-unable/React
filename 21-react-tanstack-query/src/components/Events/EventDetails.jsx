import { useQuery, useMutation } from '@tanstack/react-query';
import { useParams, useNavigate, Link, Outlet } from 'react-router-dom';

import { queryClient, fetchEvent, deleteEvent } from "../../utils/http.js";
import Header from '../Header.jsx';
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EventDetails() {
    const params = useParams();
    const navigate = useNavigate();
    const { data, isPending, isError, error } = useQuery({
        queryKey: ["events", params.id],
        queryFn: ({ signal }) => fetchEvent({ signal, id: params.id })
    });
    const { mutate, isPending: isDeletePending, isError: isDeleteError, error: deleteError } = useMutation({
        mutationFn: deleteEvent,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["events"],
                refetchType: "none"
            });
            navigate('/events');
        }
    });
    let formattedDate;

    function handleDeleteEvent() {
        mutate({ id: params.id });
    }

    if (data) {
        formattedDate = new Date(data.date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    }

    return (
        <>
            <Outlet />

            <Header>
                <Link to="/events" className="nav-item">
                    View all Events
                </Link>
            </Header>

            {isPending && <p style={{ textAlign: "center" }}>Loading event details...</p>}
            {isError && (
                <ErrorBlock
                    title="Failed to fetch event data"
                    message={error.info?.message || "Try again later"}
                />
            )}
            {data && (
                <>
                    <article id="event-details">
                        {isDeletePending && <p style={{ textAlign: "center" }}>Deleting event...</p>}
                        {isDeleteError && (
                            <ErrorBlock
                                title="Failed to delet event"
                                message={deleteError.info?.message || "Try again later"}
                            />
                        )}
                        <header>
                            <h1>{data.title}</h1>
                            <nav>
                                <button onClick={handleDeleteEvent}>Delete</button>
                                <Link to="edit">Edit</Link>
                            </nav>
                        </header>
                        <div id="event-details-content">
                            <img src={`http://localhost:3000/${data.image}`} alt="" />
                            <div id="event-details-info">
                                <div>
                                    <p id="event-details-location">{data.location}</p>
                                    <time dateTime={`Todo-DateT$Todo-Time`}>{formattedDate} @ {data.time}</time>
                                </div>
                                <p id="event-details-description">{data.description}</p>
                            </div>
                        </div>
                    </article>
                </>
            )}
        </>
    );
}
