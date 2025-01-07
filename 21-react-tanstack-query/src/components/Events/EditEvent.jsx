import { useQuery, useMutation } from '@tanstack/react-query';
import { useParams, useNavigate, useNavigation, useSubmit, Link, redirect } from 'react-router-dom';

import { fetchEvent, updateEvent, queryClient } from '../../utils/http.js';
import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EditEvent() {
    const params = useParams();
    const navigate = useNavigate();
    const { state } = useNavigation();
    const submit = useSubmit();
    const queryKey = ['events', params.id];
    const { data, isError, error } = useQuery({
        queryKey,
        queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
        staleTime: 10000, // don't refetch if data in cache is younger than 10 seconds
    });

    // Optimistic update
    // const { mutate } = useMutation({
    //     mutationFn: updateEvent,
    //     onMutate: async (data) => {
    //         const newEvent = data.event;
    //         const previousEventData = queryClient.getQueryData(queryKey);

    //         await queryClient.cancelQueries({ queryKey }); // Cancel potential update if cache from other sources
    //         queryClient.setQueryData(queryKey, newEvent); // Optimistically update the cache with new data

    //         return { previousEventData }; // Value of cache before the mutation. Will be passed to onError
    //     },
    //     // If http-request fails - revert the changes from cache
    //     onError: (error, data, context) => { // context is the return value from onMutate
    //         queryClient.setQueryData(queryKey, context.previousEventData);
    //     },
    //     /*
    //         When http-request is done (no matter if it failed or succeeded) - invalidate the cache.
    //         Just in case (maybe the server did some extra work on the data).
    //     */
    //     onSettled: () => {
    //         queryClient.invalidateQueries(queryKey);
    //     },
    // });

    function handleSubmit(formData) {
        // mutate({ id: params.id, event: formData });
        // navigate('../');
        submit(formData, { method: 'PUT' });
    }

    function handleClose() {
        navigate('../');
    }

    return (
        <Modal onClose={handleClose}>
            {isError && (
                <>
                    <ErrorBlock
                        title="Failed to load event"
                        message={error.info?.message || "Please check your inputs and try again"}
                    />
                    <div className="form-actions">
                        <Link to="../" className="button">Okay</Link>
                    </div>
                </>
            )}

            {data && (
                <EventForm inputData={data} onSubmit={handleSubmit}>
                    {state === "submitting" ? <p>Sending data...</p> : (
                        <>
                            <Link to="../" className="button-text">
                                Cancel
                            </Link>
                            <button type="submit" className="button">
                                Update
                            </button>
                        </>
                    )}
                </EventForm>
            )}
        </Modal>
    );
}

export function loader({ params }) {
    return queryClient.fetchQuery({
        queryKey: ['events', params.id],
        queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
    });
}

export async function action({ request, params }) {
    const formData = await request.formData();
    const updatedFormData = Object.fromEntries(formData);

    await updateEvent({ id: params.id, event: updatedFormData });
    await queryClient.invalidateQueries(['events', params.id]);

    return redirect("../");
}