import { useState } from 'react';
import styled from 'styled-components';
import Input from './Input/Input.jsx';

export default function AuthInputs() {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleInputChange(identifier, value) {
        if (identifier === 'email') {
            setEnteredEmail(value);
        } else {
            setEnteredPassword(value);
        }
    }

    function handleLogin() {
        setSubmitted(true);
    }

    const emailNotValid = submitted && !enteredEmail.includes('@');
    const passwordNotValid = submitted && enteredPassword.trim().length < 6;

    const StyledButton = styled.button`
        padding: 1rem 2rem;
        font-weight: 600;
        text-transform: uppercase;
        border-radius: 0.25rem;
        color: #1f2937;
        background-color: #f0b322;
        border-radius: 6px;
        border: none;

        &:hover {
            background-color: #f0920e;
        }
    `;

    return (
        <div id="auth-inputs">
            <div className="controls">
                <Input
                    label="Email"
                    type="email"
                    className={emailNotValid ? 'invalid' : ''}
                    onChange={(event) => handleInputChange('email', event.target.value)}
                />
                <Input
                    label="Password"
                    type="password"
                    className={passwordNotValid ? 'invalid' : undefined}
                    onChange={(event) =>
                        handleInputChange('password', event.target.value)
                    }
                />
            </div>
            <div className="actions">
                <button type="button" className="text-button">
                    Create a new account
                </button>
                <StyledButton className='button' onClick={handleLogin}>Sign In</StyledButton>
            </div>
        </div>
    );
}
