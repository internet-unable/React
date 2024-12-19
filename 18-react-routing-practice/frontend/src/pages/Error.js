import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";

export default function ErrorPage() {
    const error = useRouteError();
    let title ="An error occurred";
    let message = "Could not find this page";

    if (error.status === 500) {
        message = JSON.parse(error.data).message;
    }

    if (error.status === 404) {
        title = "Page not found";
        message = "Could not find resource or page";
    }

    return (
        <>
            <MainNavigation />
            <main>
                <PageContent title={title}>
                    <p>{message}</p>
                </PageContent>
            </main>
        </>
    );
}