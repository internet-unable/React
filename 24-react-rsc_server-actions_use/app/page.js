import fs from "node:fs/promises";
import { Suspense } from "react";

import RSCDemo from "@/components/RSCDemo";
import ClientDemo from "@/components/ClientDemo";
import DataFetchingDemo from "@/components/DataFetchingDemo";
import ServerActionsDemo from "@/components/ServerActionsDemo";
import UsePromisesDemo from "@/components/UsePromisesDemo";

export default function Home() {
    const fetchUsers = new Promise(resolve => setTimeout(async () => {
        const data = await fs.readFile("dummy-db.json", "utf-8");
        const users = JSON.parse(data);
        resolve(users);
    }, 2000));

    return (
        <main>
            {/* <RSCDemo /> */}

            {/* <ClientDemo>
                <RSCDemo />
            </ClientDemo> */}

            {/* <DataFetchingDemo /> */}

            {/* <ServerActionsDemo /> */}

            <Suspense fallback={<p>Loading...</p>}>
                <UsePromisesDemo usersPromise={fetchUsers} />
            </Suspense>

        </main>
    );
}
