import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import EventsRootLayout from "./pages/EventsRoot";
import EventsPage, { eventsLoader } from "./pages/Events";
import EventDetailPage, {
    eventDetailLoader,
    deleteEventAction,
} from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import { eventAction } from "./components/EventForm";
import NewsletterPage, { newsLetterAction } from './pages/Newsletter';

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: "events",
                element: <EventsRootLayout />,
                children: [
                    {
                        index: true,
                        element: <EventsPage />,
                        loader: eventsLoader,
                    },
                    {
                        path: "new",
                        element: <NewEventPage />,
                        action: eventAction,
                    },
                    {
                        path: ":eventId",
                        id: "event-detail",
                        loader: eventDetailLoader,
                        children: [
                            {
                                index: true,
                                element: <EventDetailPage />,
                                action: deleteEventAction,
                            },
                            {
                                path: "edit",
                                element: <EditEventPage />,
                                action: eventAction,
                            },
                        ],
                    }
                ],
            },
            {
                path: 'newsletter',
                element: <NewsletterPage />,
                action: newsLetterAction,
              },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
