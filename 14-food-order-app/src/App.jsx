import { useRef } from 'react';
import { useFetch } from './hooks/useFetch.js';
import { fetchMeals } from './http.js'

import AppContextProvider from './store/cart-context.jsx';
import Modal from './components/Modal/Modal.jsx';
import Header from './components/Header/Header.jsx';
import Cart from "./components/Cart/Cart.jsx";
import Checkout from './components/Checkout/Checkout.jsx'
import Product from './components/Product/Product.jsx';

function App() {
    const {
        isFetching: areMealsFetching,
        fetchedData: meals,
        error: mealsFetchingError
    } = useFetch(fetchMeals);
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

            <section id="meals">
                {areMealsFetching && <p>Meals are fetching</p>}
                {mealsFetchingError && <p>{mealsFetchingError.message}</p>}
                {!areMealsFetching && !mealsFetchingError && (
                    <ul id="meals-list">
                        {meals.map(meal => (
                            <li className="meal-item" key={meal.id}>
                                <Product product={meal} />
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </AppContextProvider>
    );
}

export default App;
