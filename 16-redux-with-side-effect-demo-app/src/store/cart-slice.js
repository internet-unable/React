import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const itemInCart = state.items.find(
                (item) => item.id === newItem.id
            );
            state.totalQuantity += 1;

            if (itemInCart) {
                itemInCart.quantity += 1;
                itemInCart.totalPrice += newItem.price;
            } else {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            }
        },
        removeItem(state, action) {
            const id = action.payload;
            const itemInCart = state.items.find((item) => item.id === id);
            state.totalQuantity -= 1;

            console.log(state.isCartVisible);
            if (itemInCart.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                itemInCart.quantity -= 1;
                itemInCart.totalPrice -= itemInCart.price;
            }
        },
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
    },
});

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
                    body: JSON.stringify(cart),
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
        }

        try {
            await sendRequest();
        } catch(error) {
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

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
