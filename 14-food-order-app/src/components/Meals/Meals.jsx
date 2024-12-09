import { useContext } from 'react';
import { AppContext } from '../../store/cart-context.jsx';
import { useFetch } from '../../hooks/useFetch.js';
import { fetchMeals } from '../../http.js'

export default function Meals({ meal }) {
    const { addItemToCart } = useContext(AppContext);
    const {
        isFetching: areMealsFetching,
        fetchedData: meals,
        error: mealsFetchingError
    } = useFetch(fetchMeals);

    function handleAddMealToCart() {
        addItemToCart({
            id: meal.id,
            name: meal.name,
            price: meal.price
        });
    }

    return (
        <section id="meals">
            {areMealsFetching && <p>Meals are fetching</p>}
            {mealsFetchingError && <p>{mealsFetchingError.message}</p>}
            {!areMealsFetching && !mealsFetchingError && (
                <ul id="meals-list">
                    {meals.map(meal => (
                        <li className="meal-item" key={meal.id}>
                            <article>
                                <img src={`http://localhost:3000/${meal.image}`} alt={meal.description} />
                                <h3>{meal.name}</h3>
                                <div>
                                    <p className="meal-item-price">${meal.price}</p>
                                </div>
                                <p className="meal-item-description">{meal.description}</p>
                                <div>
                                    <button type="button" className="button meal-item-actions"
                                        onClick={handleAddMealToCart}
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}