import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counter';
import { authReducer } from './auth';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
});

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