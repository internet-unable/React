import { useContext } from 'react';
import { AppContext } from '../store/cart-context.jsx';
import { useHttp } from '../hooks/useHttp.js';
import { countTotalSum } from '../utils/formatting.js';
import Button from './UI/Button.jsx';
import Input from './UI/Input.jsx';

const requestConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    }
};

export default function Checkout({ onCloseCheckoutClick }) {
    const { cart, clearCart } = useContext(AppContext);
    const cartTotalSum = countTotalSum(cart);
    const {
        isPending: isSendingOrder,
        data,
        setData,
        error: isOrderSubmitError,
        setError: setIsOrderSubmitError,
        sendRequest
    } = useHttp('orders', requestConfig);

    async function handleFormSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formFieldsValues = Object.fromEntries(formData.entries());

        await sendRequest(JSON.stringify({
            order: {
                items: cart,
                customer: formFieldsValues,
            }
        }));
    }

    function handleCheckoutClose() {
        if (data) {
            setData(false);
            clearCart();
        }
        
        onCloseCheckoutClick();
    }
    
    function handleTryAgain() {
        setIsOrderSubmitError(false);
    }

    return (
        <>
            {!data && !isOrderSubmitError && (
                <div>
                    <h2>Checkout</h2>
                    <p>Total amount: {cartTotalSum}</p>
                    <form onSubmit={handleFormSubmit}>
                        <div className="control">
                            <Input
                                label="Full name"
                                id="name"
                                type="text"
                                name="name"
                                required
                                minLength={2}
                            />
                        </div>

                        <div className="control">
                            <Input
                                label="E-mail"
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
                            {isSendingOrder && <span>Sending order data...</span>}
                            {!isSendingOrder && (
                                <>
                                    <Button type="button" textOnly onClick={handleCheckoutClose}>Close</Button>
                                    <Button type="submit">Submit order</Button>
                                </>
                            )}
                        </div>
                    </form>
                </div>
            )}

            {data && !isOrderSubmitError && (
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