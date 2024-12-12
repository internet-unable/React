import { createSlice, configureStore } from '@reduxjs/toolkit';

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

const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;
export default store;

// import { createStore } from 'redux';

// const counterReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case 'increment':
//             return {
//                 ...state,
//                 counter: state.counter + action.amount
//             };
//             break;

//         case 'decrement': 
//             return {
//                 ...state,
//                 counter: state.counter - action.amount
//             };
//             break;

//         case 'toogle':
//             return {
//                 ...state,
//                 showCounter: !state.showCounter
//             }
//             break;

//         default:
//             return state;
//             break;
//     }
// };

// const store = createStore(counterReducer);

// export default store;