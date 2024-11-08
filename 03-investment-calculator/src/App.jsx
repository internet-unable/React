import { useState } from 'react';
import Input from './components/Input/Input.jsx';
import {calculateInvestmentResults, formatter} from './util/investment.js';

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 300,
        expectedReturn: 5.5,
        duration: 12
    });
    const list = calculateInvestmentResults(userInput);

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

            <section id="result">
                <table>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Investment value</th>
                            <th>Interest (Year)</th>
                            <th>Total interest</th>
                            <th>Invested Capital</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map(item => (
                            <tr key={item.year}>
                                <td>{item.year}</td>
                                <td>{formatter.format(item.valueEndOfYear)}</td>
                                <td>{formatter.format(item.interest)}</td>
                                <td>$550</td>
                                <td>$10,300</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default App
