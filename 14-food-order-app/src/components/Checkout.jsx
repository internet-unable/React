import { useContext, useState } from 'react';
import { AppContext } from '../store/cart-context.jsx';
import { submitOrder } from '../http.js';
import { currencyFormatter } from '../utils/formatting.js';
import Button from './UI/Button.jsx';
import Input from './UI/Input.jsx';

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
        } catch (error) {
            setIsOrderSubmitError(error.message);
        }
    }

    return (
        <>
            {!isOrderSubmitted && !isOrderSubmitError && (
                <div>
                    <h2>Checkout</h2>
                    <p>Total amount: {currencyFormatter.format(cartTotalSum)}</p>
                    <form onSubmit={handleFormSubmit}>
                        <div className="control">
                            <Input
                                label="Full name"
                                id="full-name"
                                type="text"
                                name="full-name"
                                required
                                minLength={2}
                            />
                        </div>

                        <div className="control">
                            <Input
                                label="E-mai"
                                id="email"
                                type="email"
                                name="email"
                                required
                            />
                        </div>

                        <div className="control">
                            <Input
                                label="Street"
                                id="street"
                                type="text"
                                name="street"
                                required
                                minLength={2}
                            />
                        </div>

                        <div className="control-row">
                            <div className="control">
                                <Input
                                    label="Postal Code (digits)"
                                    id="postal-code"
                                    type="text"
                                    name="postal-code"
                                    required
                                    pattern="[0-9]{2,}"
                                />
                            </div>
                            <div className="control">
                                <Input
                                    label="City"
                                    id="city"
                                    type="text"
                                    name="city"
                                    required
                                    minLength={2}
                                />
                            </div>
                        </div>

                        <div className="modal-actions">
                            <Button type="button" textOnly onClick={handleCheckoutClose}>Close</Button>
                            <Button type="submit">Submit order</Button>
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
                        <Button onClick={handleCheckoutClose}>Okay</Button>
                    </div>
                </div>
            )}

            {isOrderSubmitError && (
                <div>
                    <h2>{isOrderSubmitError}</h2>
                    <div className="modal-actions">
                        <Button onClick={handleTryAgain}>Try again</Button>
                    </div>
                </div>
            )}
        </>
    );
}