import { useState } from 'react';
import Input from './components/Input/Input.jsx';
import Results from './components/Results/Results.jsx';
import {calculateInvestmentResults} from './util/investment.js';

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 300,
        expectedReturn: 5.5,
        duration: 12
    });
    const inputIsValid = userInput.duration > 0 ? true : false;
    const resultsList = calculateInvestmentResults(userInput);

    function handleUserInputChange(type) {
        setUserInput(prevState => {
            return {
                ...prevState,
                [type]: +event.target.value
            };
        });
    }

    return (
        <>
            <section id="user-input">
                <div className="input-group">
                    <Input
                        label="Initial investment"
                        inputValue={userInput.initialInvestment}
                        onChange={() => handleUserInputChange('initialInvestment')}
                    />
                    <Input
                        label="Annual investment"
                        inputValue={userInput.annualInvestment}
                        onChange={() => handleUserInputChange('annualInvestment')}
                    />
                </div>

                <div className="input-group">
                    <Input
                        label="Expected return"
                        inputValue={userInput.expectedReturn}
                        onChange={() => handleUserInputChange('expectedReturn')}
                    />
                    <Input
                        label="Duration"
                        inputValue={userInput.duration}
                        onChange={() => handleUserInputChange('duration')}
                    />
                </div>
            </section>
            {inputIsValid && <Results list={resultsList} />}
            {!inputIsValid && <p className='center'>Please enter a duration greater then 0</p>}
        </>
    )
}

export default App
