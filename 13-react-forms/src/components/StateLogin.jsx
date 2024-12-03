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

    const [inputsValue, setInputsValue] = useState({
        email: '',
        password: ''
    });
    const [didEdit, setDidEdit] = useState({
        email: false,
        password: false
    });
    const isEmailValid = didEdit.email && !inputsValue.email.includes('@');

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(inputsValue);
    }

    function handleInputChange(inputType, value) {
        setInputsValue(prevState => ({
            ...prevState,
            [inputType]: value
        }));

        setDidEdit(prevState => ({
            ...prevState,
            [inputType]: false
        }));
    }

    function handleInputBlur(inputType) {
        setDidEdit(prevState => ({
            ...prevState,
            [inputType]: true
        }));
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
                        onBlur={() => handleInputBlur("email")}
                        onChange={() => handleInputChange("email", event.target.value)}
                        value={inputsValue.email}
                    />
                    <div className="control-error">{isEmailValid && <p>Please enter a valid email adress</p>}</div>
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        // onChange={handlePasswordInputChange}
                        // value={passwordInput}
                        onBlur={() => handleInputBlur("password")}
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
