import { Link } from "react-router-dom";

export default function ProductsPage() {
    return (
        <>
            <h1>Products page</h1>
            <p>Go to <Link to="/">Home page</Link></p>
        </>
    );
}