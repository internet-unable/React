import { useRef } from 'react';

import AppContextProvider from './store/cart-context.jsx';
import Modal from './components/Modal/Modal.jsx';
import Header from './components/Header/Header.jsx';
import Cart from "./components/Cart/Cart.jsx";
import Checkout from './components/Checkout/Checkout.jsx'
import Meals from './components/Meals/Meals.jsx';

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
        <AppContextProvider>
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
        </AppContextProvider>
    );
}

export default App;
