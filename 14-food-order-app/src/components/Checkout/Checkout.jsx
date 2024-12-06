import { useContext } from "react";
import { AppContext } from '../../store/cart-context.jsx';

export default function Checkout() {
    const { cartTotalSum } = useContext(AppContext);

    return (
        <>
            <h2>Checkout</h2>
            <p>Total amount: ${cartTotalSum}</p>

            <form>
                <div className="control">
                    <label>Full name</label>
                    <input type="text" />
                </div>

                <div className="control">
                    <label>E-mail</label>
                    <input type="email" />
                </div>

                <div className="control">
                    <label>Street</label>
                    <input type="text" />
                </div>

                <div className="control-row">
                    <div className="control">
                        <label>Postal Code</label>
                        <input type="text" />
                    </div>
                    <div className="control">
                        <label>City</label>
                        <input type="text" />
                    </div>
                </div>
            </form>
        </>
    );
}