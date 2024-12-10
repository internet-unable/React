import { useRef } from 'react';

import { CartContextProvider } from './store/cart-context.jsx';
import Modal from './components/UI/Modal.jsx';
import Header from './components/Header.jsx';
import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx'
import Meals from './components/Meals.jsx';

function App() {
    const cartDialog = useRef();
    const cartCheckout = useRef();

    function handleOpenCart() {
        cartDialog.current.open();
    }

    function handleCloseCart() {
        cartDialog.current.close();
    }

    function handleSwitchToCheckoutDialog() {
        cartDialog.current.close();
        cartCheckout.current.open();
    }

    function handleCloseCheckout() {
        cartCheckout.current.close();
    }

    return (
        <CartContextProvider>
            <Modal ref={cartDialog}>
                <Cart
                    onCloseCartClick={handleCloseCart}
                    onCheckoutClick={handleSwitchToCheckoutDialog}
                />
            </Modal>

            <Modal ref={cartCheckout}>
                <Checkout onCloseCheckoutClick={handleCloseCheckout} />
            </Modal>

            <Header onCartClick={handleOpenCart} />

            <Meals />
        </CartContextProvider>
    );
}

export default App;
