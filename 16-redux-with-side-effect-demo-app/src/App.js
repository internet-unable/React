import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartData, sendCartData } from "./store/cart/cart-custom-actions";

import Notification from './components/UI/Notification';
import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products";

let isInitial = true;

function App() {
    const isCartVisible = useSelector((state) => state.ui.isCartVisible);
    const cart = useSelector((state) => state.cart);
    const notification = useSelector((state) => state.ui.notification);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    useEffect(() => {
        // Option 1
        // const sendCartData = async () => {
        //     dispatch(
        //         uiActions.showNotification({
        //             status: "pending",
        //             title: "Sending",
        //             message: "Sending cart data",
        //         })
        //     );

        //     const response = await fetch(
        //         "https://redux-with-side-effects-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        //         {
        //             method: "PUT",
        //             body: JSON.stringify(cart),
        //         }
        //     );

        //     if (response.ok) {
        //         dispatch(
        //             uiActions.showNotification({
        //                 status: "success",
        //                 title: "Success",
        //                 message: "Sent cart data successfully",
        //             })
        //         );
        //     } else {
        //         throw new Error("Sending cart data failed");
        //     }
        // };

        // if (isInitial) {
        //     isInitial = false;
        // } else {
        //     sendCartData().catch((error) => {
        //         dispatch(
        //             uiActions.showNotification({
        //                 status: "error",
        //                 title: "Error",
        //                 message: "Sending cart data failed",
        //             })
        //         );
        //     });
        // }

        // Option 2
        if (isInitial) {
            isInitial = false;
            return;
        }

        if (cart.changed) {
            dispatch(sendCartData(cart));
        }
    }, [dispatch, cart]);

    return (
        <>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout>
                {isCartVisible && <Cart />}
                <Products />
            </Layout>
        </>
    );
}

export default App;
