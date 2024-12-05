import { useContext } from "react";
import { AppContext } from '../../store/cart-context.jsx';

export default function Cart() {
    const { cart, updateCart } = useContext(AppContext);
    const combinedCart = combineDuplicates(cart);
    const totalSum = countTotalSum(cart).toFixed(2);

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

    function countTotalSum(array) {
        return array.reduce((acc, item) => {
            if (item.count) {
                acc += Number(item.price) * item.count;
            } else {
                acc += Number(item.price);
            }

            return acc;
        }, 0);
    }

    return (
        <div className="cart">
            <h2>Your cart</h2>

            {combinedCart.length > 0 && (
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
            )}

            <div className="cart-total">${totalSum}</div>

            <div className="modal-actions">
                <button type="button" className="text-button">Close</button>
                <button type="button" className="button">Go to Checkout</button>
            </div>
        </div>
    );
}