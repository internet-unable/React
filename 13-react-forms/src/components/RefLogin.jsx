import { useRef } from "react";

export default function Ref() {
    const emailRef = useRef();
    const passwordRef = useRef();

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        ref={emailRef}
                    />
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        ref={passwordRef}
                    />
                </div>
            </div>

            <p className="form-actions">
                <button type="button" className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
