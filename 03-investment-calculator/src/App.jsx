function App() {
    return (
        <>
            <section id="user-input">
                <div className="input-group">
                    <div>
                        <label>Initial investment</label>
                        <input type="number" />
                    </div>
                    <div>
                        <label>Annual investment</label>
                        <input type="number" />
                    </div>
                </div>

                <div className="input-group">
                    <div>
                        <label>Expected return</label>
                        <input type="number" />
                    </div>
                    <div>
                        <label>Duration</label>
                        <input type="number" />
                    </div>
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
