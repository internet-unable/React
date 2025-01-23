// import { useSelector } from "react-redux";
// import React, { useContext } from "react";
// import { ProductsContext } from "../context/products-context";
import { useStore } from "../hooks-store/store";

import FavoriteItem from "../components/Favorites/FavoriteItem";
import "./Products.css";

const Favorites = (props) => {
    // const favoriteProducts = useSelector((state) =>
    //     state.shop.products.filter((p) => p.isFavorite)
    // );

    // const favoriteProducts = useContext(ProductsContext).productsList.filter(
    //     (item) => item.isFavorite
    // );

    const state = useStore()[0];
    const favoriteProducts = state.products.filter(item => item.isFavorite);
    let content = <p className="placeholder">Got no favorites yet!</p>;

    if (favoriteProducts.length > 0) {
        content = (
            <ul className="products-list">
                {favoriteProducts.map((prod) => (
                    <FavoriteItem
                        key={prod.id}
                        id={prod.id}
                        title={prod.title}
                        description={prod.description}
                    />
                ))}
            </ul>
        );
    }
    return content;
};

export default Favorites;
