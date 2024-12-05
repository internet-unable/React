export default function Product({ product, onAddMealToCart }) {
    function handleAddToCartClick() {
        onAddMealToCart({
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
                    onClick={handleAddToCartClick}
                >
                    Add to cart
                </button>
            </div>
        </article>
    );
}