import { useFetch } from '../hooks/useFetch.js';
import { fetchMeals } from '../http.js';
import Meal from './Meal.jsx';

export default function Meals() {
    const {
        isFetching: areMealsFetching,
        fetchedData: meals,
        error: mealsFetchingError
    } = useFetch(fetchMeals);

    return (
        <section id="meals">
            {areMealsFetching && <p>Meals are fetching</p>}
            {mealsFetchingError && <p>{mealsFetchingError.message}</p>}
            {!areMealsFetching && !mealsFetchingError && (
                <ul id="meals-list">
                    {meals.map(meal => (
                        <li className="meal-item" key={meal.id}>
                            <Meal meal={meal} />
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}