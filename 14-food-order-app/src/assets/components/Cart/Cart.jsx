export default function Cart() {
    return (
        <div className="cart">
            <h2>Your cart</h2>

            <ul>
                <li className="cart-item">
                    <p>Seafood Paella</p>
                    <div className="cart-item-actions">
                        <button type="button">-</button>
                        1
                        <button type="button">+</button>
                    </div>
                </li>
                <li className="cart-item">
                    <p>Sushi Roll Platter</p>
                    <div className="cart-item-actions">
                        <button type="button">-</button>
                        1
                        <button type="button">+</button>
                    </div>
                </li>
                <li className="cart-item">
                    <p>Steak Frites</p>
                    <div className="cart-item-actions">
                        <button type="button">-</button>
                        1
                        <button type="button">+</button>
                    </div>
                </li>
            </ul>

            <div className="cart-total">$53.97</div>
            <div className="modal-actions">
                <button type="button" className="text-button">Close</button>
                <button type="button" className="button">Go to Checkout</button>
            </div>
        </div>
    );
}