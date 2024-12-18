import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
    const params = useParams();

    return (
        <>
            <h1>Product detail page</h1>
            {params.productId}
        </>
    );
}
