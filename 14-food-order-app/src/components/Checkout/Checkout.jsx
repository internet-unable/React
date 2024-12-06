import { useContext } from "react";
import { AppContext } from '../../store/cart-context.jsx';

export default function Checkout({ onCloseCheckoutClick }) {
    const { cart, cartTotalSum } = useContext(AppContext);

    function handleFormSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        
        sendData({
            items: cart,
            customer: data
        });
    }

    async function sendData(data) {
        try {
            const response = await fetch("http://localhost:3000/orders", {
                method: "PUT",
                body: JSON.stringify({ order: data }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const resData = await response.json();

            if (response.ok) {
                // status code 200/300
                return resData.message;
            } else {
                // status code 400/500
                throw new Error("Failed to update user data");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
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
                    <button type="reset" className="text-button" onClick={onCloseCheckoutClick}>Close</button>
                    <button type="submit" className="button">Submit order</button>
                </div>
            </form>
        </>
    );
}