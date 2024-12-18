import { Link, useParams } from "react-router-dom";

export default function ProductDetailPage() {
    const params = useParams();

    return (
        <>
            <h1>Product detail page</h1>
            {params.productId}
            <div class="control-group">
                <Link to="..">Back to home page</Link>
                <Link to=".." relative="path">Back to producst page</Link>
            </div>
        </>
    );
}
