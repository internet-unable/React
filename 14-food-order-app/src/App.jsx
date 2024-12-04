import { useEffect, useState } from 'react';
import Modal from './components/Modal/Modal.jsx';
import Cart from "./components/Cart/Cart.jsx";
import Checkout from './components/Checkout/Checkout.jsx'
import Product from './components/Product/Product.jsx';

function App() {
    const [isMealsFetching, setIsMealsFetching] = useState(false);
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function fetchMeals() {
            setIsMealsFetching(true);
            try {
                const response = await fetch("http://localhost:3000/meals");
                const meals = await response.json();

                if (response.ok) {
                    // status code 200/300
                    setMeals(meals);
                } else {
                    // status code 400/500
                    // throw new Error("Failed to fetch user places");
                }

            } catch (error) {
                // setError({ message: message.error || 'Failed to feth user places' });
            }
            setIsMealsFetching(false);
        };

        fetchMeals();
    }, []);

    return (
        <>
            {/* <Modal>
                <Cart />
                <Checkout />
            </Modal> */}

            <header id="main-header">
                <div id="title">
                    <img />
                    <h1>Reactfood</h1>
                </div>
                <button type="button" className="button">Cart (3)</button>
            </header>

            <ul id="meals">
                {isMealsFetching && <p>Meals are fetching</p>}

                {!isMealsFetching && meals.map(meal => (
                    <li className="meal-item" key={meal.id}>
                        <Product props={meal} />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;
