import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: { isCartVisible: false, notification: null },
    reducers: {
        toogle(state) {
            state.isCartVisible = !state.isCartVisible;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    },
});

export const uiActions = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
