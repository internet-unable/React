import { useState, useEffect } from "react";

export default function Cart({ cart }) {
    const [modifiedCart, setModifiedCart] = useState(() => countDuplicates(cart));
    const total = countTotal(modifiedCart).toFixed(2);

    useEffect(() => {
        setModifiedCart(countDuplicates(cart));
    }, [cart]);

    function countDuplicates(array) {
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

    function countTotal(array) {
        return array.reduce((acc, item) => {
            if (item.count) {
                acc += Number(item.price) * item.count;
            } else {
                acc += Number(item.price);
            }

            return acc;
        }, 0);
    }

    function handleCountUpdate(isIncrement, id) {
        setModifiedCart(prevState => {
            return prevState.reduce((acc, meal) => {
                if (meal.id === id) {
                    const newCount = isIncrement ? meal.count + 1 : meal.count - 1;

                    if (newCount > 0) {
                        acc.push({ ...meal, count: newCount });
                    }
                } else {
                    acc.push(meal);
                }
                return acc;
            }, []);
        });
    }

    return (
        <div className="cart">
            <h2>Your cart</h2>

            {modifiedCart.length > 0 && (
                <ul>
                    {modifiedCart.map(meal => (
                        <li className="cart-item" key={meal.id}>
                            <p>{meal.name} - {meal.count} x ${meal.price}</p>
                            <div className="cart-item-actions">
                                <button type="button" onClick={() => handleCountUpdate(false, meal.id)}>-</button>
                                {meal.count}
                                <button type="button" onClick={() => handleCountUpdate(true, meal.id)}>+</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            <div className="cart-total">${total}</div>

            <div className="modal-actions">
                <button type="button" className="text-button">Close</button>
                <button type="button" className="button">Go to Checkout</button>
            </div>
        </div>
    );
}