import { uiActions } from "../ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch("https://redux-with-side-effects-default-rtdb.europe-west1.firebasedatabase.app/cart.json");
            const responseData = await response.json();

            if (response.ok) {
                return responseData;
            } else {
                throw new Error("Could not fetch data");
            }
        }

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));
        } catch(error) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "Error",
                    message: "Fetching cart data failed",
                })
            );
        }
    };
};

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: "pending",
                title: "Sending",
                message: "Sending cart data",
            })
        );

        const sendRequest = async () => {
            const response = await fetch(
                "https://redux-with-side-effects-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
                {
                    method: "PUT",
                    body: JSON.stringify({
                        items: cart.items,
                        totalQuantity: cart.totalQuantity
                    }),
                }
            );

            if (response.ok) {
                dispatch(
                    uiActions.showNotification({
                        status: "success",
                        title: "Success",
                        message: "Sent cart data successfully",
                    })
                );
            } else {
                throw new Error("Sending cart data failed");
            }
        };

        try {
            await sendRequest();
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "Error",
                    message: "Sending cart data failed",
                })
            );
        }
    };
};
