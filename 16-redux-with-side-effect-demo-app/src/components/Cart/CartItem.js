import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
    const { id, name, quantity, totalPrice, price } = props.item;
    const dispatch = useDispatch();

    const handleAddItem = () => {
        dispatch(cartActions.addItem({
            id,
            price,
            quantity,
            totalPrice
        }));
    }

    const handleRemoveItem = () => {
        dispatch(cartActions.removeItem(id));
    }

    return (
        <li className={classes.item}>
            <header>
                <h3>{name}</h3>
                <div className={classes.price}>
                    ${totalPrice.toFixed(2)}{" "}
                    <span className={classes.itemprice}>
                        (${price.toFixed(2)}/item)
                    </span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={handleRemoveItem}>-</button>
                    <button onClick={handleAddItem}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
