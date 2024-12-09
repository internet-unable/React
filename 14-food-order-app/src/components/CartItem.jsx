import { currencyFormatter } from '../utils/formatting.js';

export default function CartItem({ item, onIncrease, onDecrease }) {
    return (
        <li className="cart-item">
            <p>{item.name} - {item.count} x {currencyFormatter.format(item.price)}</p>
            <div className="cart-item-actions">
                <button onClick={onIncrease}>-</button>
                <span>{item.count}</span>
                <button onClick={onDecrease}>+</button>
            </div>
        </li>
    );
}