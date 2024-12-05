import { useEffect, useState } from 'react';

import AppContextProvider from './store/cart-context.jsx';
import Modal from './components/Modal/Modal.jsx';
import Header from './components/Header/Header.jsx';
import Cart from "./components/Cart/Cart.jsx";
import Checkout from './components/Checkout/Checkout.jsx'
import Product from './components/Product/Product.jsx';

function App() {
    const [areMealsFetching, setAreMealsFetching] = useState(false);
    const [meals, setMeals] = useState([]);
    const [mealsFetchingError, setMealsFetchingError] = useState(false);

    useEffect(() => {
        async function fetchMeals() {
            setAreMealsFetching(true);
            try {
                const response = await fetch("http://localhost:3000/meals");
                const meals = await response.json();

                setAreMealsFetching(false);
                if (response.ok) {
                    // status code 200/300
                    setMeals(meals);
                } else {
                    // status code 400/500
                    throw new Error("Failed to fetch meals");
                }
            } catch (error) {
                setMealsFetchingError({ message: error.message || 'Failed to fetch meals' });
            }
        };

        fetchMeals();
    }, []);

    function handleOpenCart() {
        // 
    }

    return (
        <AppContextProvider>
            <Modal>
                <Cart />
            </Modal>

            {/* <Modal>
                <Checkout />
            </Modal> */}

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
