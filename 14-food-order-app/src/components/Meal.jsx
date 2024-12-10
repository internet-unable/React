import { useContext } from 'react';
import { CartContext } from '../store/cart-context.jsx';
import { currencyFormatter } from '../utils/formatting.js';
import Button from './UI/Button.jsx';

export default function Meal({meal}) {
    const { addItemToCart } = useContext(CartContext);

    function handleAddMealToCart() {
        addItemToCart(meal);
    }

    return (
        <article>
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.description} />
            <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                <p className="meal-item-description">{meal.description}</p>
            </div>
            <div className="meal-item-actions">
                <Button onClick={handleAddMealToCart}>
                    Add to cart
                </Button>
            </div>
        </article>
    );
}