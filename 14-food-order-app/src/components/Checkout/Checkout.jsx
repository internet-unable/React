export default function Checkout() {
    return (
        <>
            <h2>Checkout</h2>
            <p>Total amount: $89.95</p>

            <form className="control">
                <div>
                    <label>Full name</label>
                    <input type="text" />
                </div>

                <div>
                    <label>E-mail</label>
                    <input type="email" />
                </div>

                <div>
                    <label>Street</label>
                    <input type="text" />
                </div>

                <div className="control-row">
                    <div>
                        <label>Postal Code</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>City</label>
                        <input type="text" />
                    </div>
                </div>
            </form>

            <div className="modal-actions">
                <button type="button" className="text-button">Close</button>
                <button type="button" className="button">Submit order</button>
            </div>
        </>
    );
}