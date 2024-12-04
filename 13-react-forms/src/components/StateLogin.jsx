import { useState } from "react";
import Input from "./Input.jsx";

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
    const isEmailInvalid = didEdit.email && !inputsValue.email.includes('@');
    const isPasswordInvalid = didEdit.password && inputsValue.password.trim().length < 6;
    console.log(`Email - ${isEmailInvalid}`);
    console.log(`Password - ${isPasswordInvalid}`);

    function handleFormSubmit(event) {
        event.preventDefault();
        if (!isEmailInvalid && !isPasswordInvalid) {
            console.log(inputsValue);
        }
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
                <Input
                    label="Email"
                    id="email"
                    type="email"
                    name="email"
                    onBlur={() => handleInputBlur("email")}
                    onChange={() => handleInputChange("email", event.target.value)}
                    value={inputsValue.email}
                    error={isEmailInvalid && 'Please enter a valid email adress'}
                />
                <Input
                    label="Password"
                    id="password"
                    type="password"
                    name="password"
                    onBlur={() => handleInputBlur("password")}
                    onChange={() => handleInputChange("password", event.target.value)}
                    value={inputsValue.password}
                    error={isPasswordInvalid && 'Password must be at least 6 characters'}
                />
            </div>

            <p className="form-actions">
                <button type="button" className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
