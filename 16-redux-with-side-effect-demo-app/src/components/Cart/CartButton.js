import { useSelector, useDispatch }  from "react-redux";
import { uiActions } from "../../store/ui-slice.js";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const dispatch = useDispatch();

    const handleCartToogle = () => {
        dispatch(uiActions.toogle());
    }

    return (
        <button className={classes.button} onClick={handleCartToogle}>
            <span>My Cart</span>
            <span className={classes.badge}>{totalQuantity}</span>
        </button>
    );
};

export default CartButton;
