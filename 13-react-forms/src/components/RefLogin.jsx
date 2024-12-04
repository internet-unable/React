import { useRef, useState } from "react";

export default function Ref() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [isEmailValid, setIsEmailValid] = useState(false);

    function handleFormSubmit(event) {
        event.preventDefault();
        const isEmailIncludes = emailRef.current.value.includes('@');

        if (!isEmailIncludes) {
            setIsEmailValid(true);
        } else {
            setIsEmailValid(false);
        }
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
                    <div className="control-error">{isEmailValid && <p>Please enter a valid email adress</p>}</div>
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
