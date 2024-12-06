import { createContext, useReducer } from 'react';

function countTotalSum(array) {
    const calc = array.reduce((acc, item) => {
        if (item.count) {
            acc += Number(item.price) * item.count;
        } else {
            acc += Number(item.price);
        }

        return acc;
    }, 0);

    return calc.toFixed(2);
}

export const AppContext = createContext({
    cart: [],
    cartTotalSum: 0,
    addItemToCart: () => { }, // for vs code autocomplete
    updateCart: () => { }, // for vs code autocomplete
    clearCart: () => { } // for vs code autocomplete
});

function cartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        const updatedCart = [
            ...state.cart,
            { ...action.payload.item }
        ];
        const totalSum = countTotalSum(updatedCart);

        return {
            cart: updatedCart,
            totalSum
        };
    }

    if (action.type === 'REMOVE_ITEM') {
        const updatedCart = [...state.cart];
        const indexOfMealById = updatedCart.indexOf(updatedCart.find(meal => meal.id === action.payload.id));
        updatedCart.splice(indexOfMealById, 1);
        const totalSum = countTotalSum(updatedCart);

        return {
            cart: updatedCart,
            totalSum
        };
    }

    if (action.type === 'CLEAR_CART') {
        return {
            cart: [],
            totalSum: 0
        };
    }

    return state;
}

export default function AppContextProvider({ children }) {
    const [cartState, cartDispatch] = useReducer(cartReducer, {
        cart: [],
        totalSum: 0
    });

    function handleAddItemToCart(item) {
        cartDispatch({
            type: 'ADD_ITEM',
            payload: { item }
        });
    }

    function handleUpdateCart(isIncrement, id) {
        if (isIncrement) {
            cartDispatch({
                type: 'ADD_ITEM',
                payload: { item: { ...cartState.cart.find(item => item.id === id) } }
            });
        } else {
            cartDispatch({
                type: 'REMOVE_ITEM',
                payload: { id }
            });
        }
    }

    function handleClearCart() {
        cartDispatch({
            type: 'CLEAR_CART',
            payload: {}
        });
    }

    const ctxValue = {
        cart: cartState.cart,
        cartTotalSum: cartState.totalSum,
        addItemToCart: handleAddItemToCart,
        updateCart: handleUpdateCart,
        clearCart: handleClearCart
    };

    return (
        <AppContext.Provider value={ctxValue}>
            {children}
        </AppContext.Provider>
    );
}