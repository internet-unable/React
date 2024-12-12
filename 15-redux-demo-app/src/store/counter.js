import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0, showCounter: true },
    reducers: {
        increment(state, action) {
            state.counter += action.payload;
        },
        decrement(state, action) {
            state.counter -= action.payload;
        },
        toogle(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterActions = counterSlice.actions;
export const counterReducer = counterSlice.reducer;