import { useContext } from "react";
import { AppContext } from '../../store/cart-context.jsx';

export default function Cart({ onCloseCartClick, onCheckoutClick }) {
    const { cart, cartTotalSum, updateCart } = useContext(AppContext);
    const combinedCart = combineDuplicates(cart);

    function combineDuplicates(array) {
        return Object.values(
            array.reduce((acc, item) => {
                if (acc[item.id]) {
                    acc[item.id].count += 1;
                } else {
                    acc[item.id] = { ...item, count: 1 };
                }

                return acc;
            }, {})
        );
    }

    return (
        <div className="cart">
            {!combinedCart.length && <h2>Your cart is empty</h2>}

            {combinedCart.length > 0 && (
                <>
                    <h2>Your cart</h2>

                    <ul>
                        {combinedCart.map(meal => (
                            <li className="cart-item" key={meal.id}>
                                <p>{meal.name} - {meal.count} x ${meal.price}</p>
                                <div className="cart-item-actions">
                                    <button type="button" onClick={() => updateCart(false, meal.id)}>-</button>
                                    {meal.count}
                                    <button type="button" onClick={() => updateCart(true, meal.id)}>+</button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="cart-total">${cartTotalSum}</div>
                </>
            )}

            <div className="modal-actions">
                <button type="button" className="text-button" onClick={onCloseCartClick}>Close</button>
                {cart.length > 0 && (<button type="button" className="button" onClick={onCheckoutClick}>Go to Checkout</button>)}
            </div>
        </div>
    );
}