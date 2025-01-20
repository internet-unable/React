import { Suspense } from "react";

import RSCDemo from "@/components/RSCDemo";
import ClientDemo from "@/components/ClientDemo";
import DataFetchingDemo from "@/components/DataFetchingDemo";
import ServerActionsDemo from "@/components/ServerActionsDemo";
import UsePromisesDemo from "@/components/UsePromisesDemo";

export default function Home() {
    return (
        <main>
            {/* <RSCDemo /> */}

            {/* <ClientDemo>
                <RSCDemo />
            </ClientDemo> */}

            {/* <DataFetchingDemo /> */}

            {/* <ServerActionsDemo /> */}

            <Suspense fallback={<p>Loading...</p>}>
                <UsePromisesDemo />
            </Suspense>

        </main>
    );
}
