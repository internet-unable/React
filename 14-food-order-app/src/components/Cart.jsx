import { useContext } from 'react';
import { AppContext } from '../store/cart-context.jsx';
import { currencyFormatter } from '../utils/formatting.js';
import Button from './UI/Button.jsx';
import CartItem from './CartItem.jsx';

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
                            <CartItem
                                key={meal.id}
                                item={meal}
                                onIncrease={() => updateCart(false, meal.id)}
                                onDecrease={() => updateCart(true, meal.id)}
                            />
                        ))}
                    </ul>

                    <div className="cart-total">{currencyFormatter.format(cartTotalSum)}</div>
                </>
            )}

            <div className="modal-actions">
                <Button textOnly onClick={onCloseCartClick}>Close</Button>
                {cart.length > 0 && (
                    <Button onClick={onCheckoutClick}>Go to Checkout</Button>
                )}
            </div>
        </div>
    );
}