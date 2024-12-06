import { useContext, useState } from "react";
import { AppContext } from '../../store/cart-context.jsx';
import { submitOrder } from '../../http.js';

export default function Checkout({ onCloseCheckoutClick }) {
    const { cart, cartTotalSum, clearCart } = useContext(AppContext);
    const [isOrderFetching, setIsOrderFetching] = useState(false);
    const [isOrderSubmitted, setIsOrderSubmitted] = useState(false);
    const [isOrderSubmitError, setIsOrderSubmitError] = useState(false);

    function handleFormSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        sendData({
            items: cart,
            customer: data
        });
    }

    function handleCheckoutClose() {
        setIsOrderSubmitted(false);
        onCloseCheckoutClick();
    }

    function handleTryAgain() {
        setIsOrderSubmitError(false);
    }

    async function sendData(data) {
        try {
            const responseMessage = await submitOrder(data);
            setIsOrderSubmitted(true);
            clearCart();
        } catch(error) {
            setIsOrderSubmitError(error.message);
        }
    }

    return (
        <>
            {!isOrderSubmitted && !isOrderSubmitError && (
                <div>
                    <h2>Checkout</h2>
                    <p>Total amount: ${cartTotalSum}</p>
                    <form onSubmit={handleFormSubmit}>
                        <div className="control">
                            <label htmlFor="fullName">Full name</label>
                            <input id="fullName" type="text" name="fullName" required minLength={2} />
                        </div>

                        <div className="control">
                            <label htmlFor="email">E-mail</label>
                            <input imd="email" type="email" name="email" required />
                        </div>

                        <div className="control">
                            <label htmlFor="street">Street</label>
                            <input id="street" type="text" name="street" required minLength={2} />
                        </div>

                        <div className="control-row">
                            <div className="control">
                                <label htmlFor="postalCode">Postal Code (digits)</label>
                                <input id="postalCode" type="text" name="postalCode" pattern="[0-9]{2,}" required />
                            </div>
                            <div className="control">
                                <label htmlFor="city">City</label>
                                <input id="city" type="text" name="city" required minLength={2} />
                            </div>
                        </div>

                        <div className="modal-actions">
                            <button type="reset" className="text-button" onClick={handleCheckoutClose}>Close</button>
                            <button type="submit" className="button">Submit order</button>
                        </div>
                    </form>
                </div>
            )}

            {isOrderSubmitted && !isOrderSubmitError && (
                <div>
                    <h2>Success!</h2>
                    <p>Your order was submitted successfully.</p>
                    <p>We will get back to you with more details via email within the next few minutes.</p>
                    <div className="modal-actions">
                        <button type="button" className="button" onClick={handleCheckoutClose}>Okay</button>
                    </div>
                </div>
            )}

            {isOrderSubmitError && (
                <div>
                    <h2>{isOrderSubmitError}</h2>
                    <div className="modal-actions">
                        <button type="button" className="button" onClick={handleTryAgain}>Try again</button>
                    </div>
                </div>
            )}
        </>
    );
}