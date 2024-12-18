import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/events", element: <EventsPage />, children: [
                { path: "/events/:eventId", element: <EventDetailPage /> },
                { path: "/events/new", element: <NewEventPage /> },
                { path: "/events/:eventId/edit", element: <EditEventPage /> },
            ]}
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
