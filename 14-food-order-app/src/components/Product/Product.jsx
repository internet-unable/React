import { useContext } from 'react';
import { AppContext } from '../../store/cart-context.jsx';

export default function Product({ product, onAddMealToCart }) {
    const { addItemToCart } = useContext(AppContext);

    function handleAddMealToCart() {
        addItemToCart({
            id: product.id,
            name: product.name,
            price: product.price
        });
    }

    return (
        <article>
            <img src={`http://localhost:3000/${product.image}`} alt={product.description} />
            <h3>{product.name}</h3>
            <div>
                <p className="meal-item-price">${product.price}</p>
            </div>
            <p className="meal-item-description">{product.description}</p>
            <div>
                <button
                    type="button"
                    className="button meal-item-actions"
                    onClick={handleAddMealToCart}
                >
                    Add to cart
                </button>
            </div>
        </article>
    );
}