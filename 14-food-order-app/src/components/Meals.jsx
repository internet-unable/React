import { useEffect } from 'react';
import { useHttp } from '../hooks/useHttp.js';
import Meal from './Meal.jsx';

export default function Meals() {
    const {
        isPending: areMealsFetching,
        data: meals,
        error: mealsFetchingError,
        sendRequest: fetchMeals
    } = useHttp('meals');

    useEffect(() => {
        fetchMeals();
    }, []);

    return (
        <section id="meals">
            {areMealsFetching && <p>Meals are fetching</p>}
            {mealsFetchingError && <p>{mealsFetchingError}</p>}
            {!areMealsFetching && !mealsFetchingError && (
                <ul id="meals-list">
                    {meals && meals.map(meal => (
                        <li className="meal-item" key={meal.id}>
                            <Meal meal={meal} />
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}