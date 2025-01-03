import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { tokenLoader, checkAuthLoader } from "./utils/auth";
import EditEventPage from "./pages/EditEvent";
import ErrorPage from "./pages/Error";
import EventDetailPage, {
    loader as eventDetailLoader,
    action as deleteEventAction,
} from "./pages/EventDetail";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventsRootLayout from "./pages/EventsRoot";
import HomePage from "./pages/Home";
import NewEventPage from "./pages/NewEvent";
import RootLayout from "./pages/Root";
import { action as manipulateEventAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";
import AuthenticationPage, { authAction } from "./pages/Authentication";
import { logoutAction } from "./pages/Logout";

const router = createBrowserRouter([
    {
        id: "root",
        path: "/",
        loader: tokenLoader,
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
                                loader: checkAuthLoader,
                                element: <EditEventPage />,
                                action: manipulateEventAction,
                            },
                        ],
                    },
                    {
                        path: "new",
                        loader: checkAuthLoader,
                        element: <NewEventPage />,
                        action: manipulateEventAction,
                    },
                ],
            },
            {
                path: "newsletter",
                element: <NewsletterPage />,
                action: newsletterAction,
            },
            {
                path: "auth",
                element: <AuthenticationPage />,
                action: authAction,
            },
            {
                path: "logout",
                action: logoutAction
            }
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
