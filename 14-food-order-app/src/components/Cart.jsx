import { useContext } from 'react';
import { AppContext } from '../store/cart-context.jsx';
import { countTotalSum } from '../utils/formatting.js';
import Button from './UI/Button.jsx';
import CartItem from './CartItem.jsx';

export default function Cart({ onCloseCartClick, onCheckoutClick }) {
    const { cart, updateCart } = useContext(AppContext);
    const cartTotalSum = countTotalSum(cart);
    console.log(cartTotalSum);

    return (
        <div className="cart">
            {!cart.length && <h2>Your cart is empty</h2>}

            {cart.length > 0 && (
                <>
                    <h2>Your cart</h2>
                    <ul>
                        {cart.map(meal => (
                            <CartItem
                                key={meal.id}
                                item={meal}
                                onIncrease={() => updateCart(false, meal.id)}
                                onDecrease={() => updateCart(true, meal.id)}
                            />
                        ))}
                    </ul>

                    <div className="cart-total">{cartTotalSum}</div>
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