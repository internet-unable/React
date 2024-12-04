import { useInput } from "../hooks/useInput.js";
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';
import Input from "./Input.jsx";

export default function StateLogin() {
    const {
        value: email,
        handleInputChange: handleEmailChange,
        handleInputBlur: handleEmailBlur,
        hasError: isEmailValid
    } = useInput('', (email) => isEmail(email) && isNotEmpty(email));
    const {
        value: password,
        handleInputChange: handlePasswordChange,
        handleInputBlur: handlePasswordBlur,
        hasError: isPasswordValid
    } = useInput('', (password) => hasMinLength(password, 6));

    function handleFormSubmit(event) {
        event.preventDefault();
        if (isEmailValid && isPasswordValid) {
            console.log(email, password);
        }
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
                    onBlur={handleEmailBlur}
                    onChange={handleEmailChange}
                    value={email}
                    error={isEmailValid && 'Please enter a valid email adress'}
                />
                <Input
                    label="Password"
                    id="password"
                    type="password"
                    name="password"
                    onBlur={handlePasswordBlur}
                    onChange={handlePasswordChange}
                    value={password}
                    error={isPasswordValid && 'Password must be at least 6 characters'}
                />
            </div>

            <p className="form-actions">
                <button type="button" className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
