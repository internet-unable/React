import { useContext } from 'react';
import { AppContext } from '../../store/cart-context.jsx';

export default function Header({ onCartClick }) {
    const { cart } = useContext(AppContext);

    return (
        <header id="main-header">
            <div id="title">
                <img />
                <h1>Reactfood</h1>
            </div>

            <button
                type="button"
                className="text-button"
                onClick={onCartClick}
            >
                Cart {cart.length > 0 && `(${cart.length})`}
            </button>
        </header>
    );
}