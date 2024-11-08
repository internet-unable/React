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

            <section>
                Result
            </section>
        </>
    )
}

export default App
