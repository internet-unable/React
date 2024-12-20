import { redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

export default function AuthenticationPage() {
    return <AuthForm />;
}

export async function authAction({ request }) {
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get("mode") || "login";
    const data = await request.formData();
    const autData = {
        email: data.get("email"),
        password: data.get("password"),
    };

    if (mode !== "login" && mode !== "signup") {
        // or some other action
        throw new Response(JSON.stringify({ message: "Unsupported mode" }), {
            status: 422,
        });
    }

    const response = await fetch("http://localhost:8080/" + mode, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(autData),
    });

    if (response.ok) {
        const resData = await response.json();
        const token = resData.token;

        localStorage.setItem("token", token);

        return redirect("/");
    } else if (response.status === 422 || response.status === 401) {
        return response;
    } else {
        throw new Response(
            JSON.stringify({ message: "Could not authenticate user" }),
            { status: 500 }
        );
    }
}
