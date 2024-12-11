import { createStore } from 'redux';

const initialState = {
    counter: 0,
    showCounter: true
};

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'increment':
            return {
                ...state,
                counter: state.counter + action.amount
            };
            break;

        case 'decrement': 
            return {
                ...state,
                counter: state.counter - action.amount
            };
            break;

        case 'toogle':
            return {
                ...state,
                showCounter: !state.showCounter
            }
            break;

        default:
            return state;
            break;
    }
};

const store = createStore(counterReducer);

export default store;