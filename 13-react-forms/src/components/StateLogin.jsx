import { useState } from "react";
import Input from "./Input.jsx";
import { isEmail, isNotEmpty } from '../util/validation.js';

export default function StateLogin() {
    const [inputsValue, setInputsValue] = useState({
        email: '',
        password: ''
    });
    const [didEdit, setDidEdit] = useState({
        email: false,
        password: false
    });
    const isEmailInvalid = didEdit.email && !isEmail(inputsValue.email) && !isNotEmpty(inputsValue.email);
    const isPasswordInvalid = didEdit.password && !hasMinLength(inputsValue.password, 6);

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
