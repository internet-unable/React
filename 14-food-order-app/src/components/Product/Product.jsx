export default function Product() {
    return (
        <li className="meal-item">
            <article>
                <img />
                <h3>Mac & Cheese</h3>
                <p className="meal-item-price">$8.99</p>
                <p className="meal-item-description">Creamy cheddar cheese mixed with perfeclty cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.</p>
                <button type="button" className="button meal-item-actions">Add to cart</button>
            </article>
        </li>
    );
}