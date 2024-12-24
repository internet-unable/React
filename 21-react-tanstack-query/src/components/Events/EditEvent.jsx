import { useQuery, useMutation } from '@tanstack/react-query';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { fetchEvent, updateEvent } from '../../utils/http.js';
import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EditEvent() {
    const params = useParams();
    const navigate = useNavigate();
    const { data, isPending, isError, error } = useQuery({
        queryKey: ['events', params.id],
        queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
    });
    const { mutate } = useMutation({
        mutationFn: updateEvent
    });

    function handleSubmit(formData) {
        mutate({ id: params.id, event: formData });
        navigate('../');
    }

    function handleClose() {
        navigate('../');
    }

    return (
        <Modal onClose={handleClose}>
            {isPending && (
                <div className="center">
                    <LoadingIndicator />
                </div>
            )}

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
                    <Link to="../" className="button-text">
                        Cancel
                    </Link>
                    <button type="submit" className="button">
                        Update
                    </button>
                </EventForm>
            )}
        </Modal>
    );
}
