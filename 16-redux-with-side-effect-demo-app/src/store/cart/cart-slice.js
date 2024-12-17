import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
        changed: false
    },
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const itemInCart = state.items.find(
                (item) => item.id === newItem.id
            );
            state.totalQuantity += 1;
            state.changed = true;

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
            state.changed = true;

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

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
