import Input from './components/Input/Input.jsx';

function App() {
    return (
        <>
            <section id="user-input">
                <div className="input-group">
                    <Input label="Initial investment" />
                    <Input label="Annual investment" />
                </div>

                <div className="input-group">
                    <Input label="Expected return" />
                    <Input label="Duration" />
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
                        <tr>
                            <td>1</td>
                            <td>$10,850</td>
                            <td>$550</td>
                            <td>$550</td>
                            <td>$10,300</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default App
