import { Link } from "react-router-dom";

const DUMMY_PRODUCTS = [
    { id: 1, title: "Product 1" },
    { id: 2, title: "Product 2" },
    { id: 3, title: "Product 3" },
];

export default function ProductsPage() {
    return (
        <>
            <h1>Products page</h1>
            <p>
                Go to <Link to="/">Home page</Link>
            </p>
            <ul>
                {DUMMY_PRODUCTS.map((product) => (
                    <li>
                        <Link to={`/products/product-${product.id}`}>
                            {product.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
