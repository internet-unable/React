import { useState } from "react";

export default function StateLogin() {
    // const [emailInput, setEmailInput] = useState('');
    // const [passwordInput, setPasswordInput] = useState('');

    // function handleEmailInputChange(event) {
    //     setEmailInput(event.target.value);
    // }

    // function handlePasswordInputChange(event) {
    //     setPasswordInput(event.target.value);
    // }

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(inputsValue);
    }

    const [inputsValue, setInputsValue] = useState({
        email: '',
        password: ''
    });

    function handleInputChange(inputType, value) {
        setInputsValue(prevState => {
            return {
                ...prevState,
                [inputType]: value
            }
        });
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
                        // onChange={handleEmailInputChange}
                        // value={emailInput}
                        onChange={() => handleInputChange("email", event.target.value)}
                        value={inputsValue.email}
                    />
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        // onChange={handlePasswordInputChange}
                        // value={passwordInput}
                        onChange={() => handleInputChange("password", event.target.value)}
                        value={inputsValue.password}
                    />
                </div>
            </div>

            <p className="form-actions">
                <button type="button" className="button button-flat">Reset</button>
                <button
                    className="button"
                    // type="button"
                    // onClick={handleFormSubmit}
                >
                    Login
                </button>
            </p>
        </form>
    );
}
