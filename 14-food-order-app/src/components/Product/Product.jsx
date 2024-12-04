export default function Product({ props }) {
    return (
        <article>
            <img src={`http://localhost:3000/${props.image}`} alt={props.description} />
            <h3>{props.name}</h3>
            <div>
                <p className="meal-item-price">${props.price}</p>
            </div>
            <p className="meal-item-description">{props.description}</p>
            <div>
                <button type="button" className="button meal-item-actions">Add to cart</button>
            </div>
        </article>
    );
}