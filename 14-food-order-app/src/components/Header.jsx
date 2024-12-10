import { useContext } from 'react';
import { CartContext } from '../store/cart-context.jsx';
import logoPath from '../assets/logo.jpg';
import Button from './UI/Button.jsx';

export default function Header({ onCartClick }) {
    const { cart } = useContext(CartContext);
    const totalItemsInCart = cart.reduce((total, item) => {
        return total += item.quantity;
    }, 0);

    return (
        <header id="main-header">
            <div id="title">
                <img src={logoPath} alt="" />
                <h1>Food Order App</h1>
            </div>

            <Button textOnly onClick={onCartClick}>
                Cart {cart.length > 0 && `(${totalItemsInCart})`}
            </Button>
        </header>
    );
}