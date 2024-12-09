import { useContext } from 'react';
import { AppContext } from '../store/cart-context.jsx';
import logoPath from '../assets/logo.jpg';
import Button from './UI/Button.jsx';

export default function Header({ onCartClick }) {
    const { cart } = useContext(AppContext);
    // const totalItemsInCart = cart.reduce((total, item) => {
    //     return total += item.count;
    // }, 0);

    return (
        <header id="main-header">
            <div id="title">
                <img src={logoPath} alt="" />
                <h1>Food Order App</h1>
            </div>

            <Button textOnly onClick={onCartClick}>
                Cart {cart.length > 0 && `(${cart.length})`}
            </Button>
        </header>
    );
}