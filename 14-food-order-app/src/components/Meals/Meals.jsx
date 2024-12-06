import { useContext } from 'react';
import { AppContext } from '../../store/cart-context.jsx';

export default function Meals({ meal }) {
    const { addItemToCart } = useContext(AppContext);

    function handleAddMealToCart() {
        addItemToCart({
            id: meal.id,
            name: meal.name,
            price: meal.price
        });
    }

    return (
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
    );
}