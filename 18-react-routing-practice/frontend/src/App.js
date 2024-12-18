import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import EventsRootLayout from "./pages/EventsRoot";
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
            { index: true, element: <HomePage /> },
            { path: "events", element: <EventsRootLayout />, children: [
                { index: true, element: <EventsPage /> },
                { path: ":eventId", element: <EventDetailPage /> },
                { path: "new", element: <NewEventPage /> },
                { path: ":eventId/edit", element: <EditEventPage /> },
            ]}
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
