import { useEffect } from "react";
import { useLoaderData, useSubmit, Outlet } from "react-router-dom";

import { getTokenDuration } from "../utils/auth";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
    const token = useLoaderData();
    const submit = useSubmit();
    
    useEffect(() => {
        if (!token) {
            return;
        }

        if (token === "EXPIRED") {
            submit(null, { action: "/logout", method: "POST" });
            return
        }

        const tokenDutaion = getTokenDuration();
        setTimeout(() => {
            submit(null, { action: "/logout", method: "POST" });
        }, tokenDutaion);
    }, [token, submit]);

    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default RootLayout;
