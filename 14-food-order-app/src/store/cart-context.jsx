import { createContext, useReducer } from 'react';

export const AppContext = createContext({
    cart: [],
    addItemToCart: () => { }, // for vs code autocomplete
    updateCart: () => { } // for vs code autocomplete
});

function cartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        return [
            ...state,
            { ...action.payload.item }
        ];
    }

    if (action.type === 'REMOVE_ITEM') {
        const updateCart = [...state];
        const indexOfMealById = updateCart.indexOf(updateCart.find(meal => meal.id === action.payload.id));
        updateCart.splice(indexOfMealById, 1);

        return [...updateCart];
    }

    return state;
}

export default function AppContextProvider({ children }) {
    const [cartState, cartDispatch] = useReducer(cartReducer, []);

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
                payload: { item: { ...cartState.find(item => item.id === id) } }
            });
        } else {
            cartDispatch({
                type: 'REMOVE_ITEM',
                payload: { id }
            });
        }
    }

    const ctxValue = {
        cart: cartState,
        addItemToCart: handleAddItemToCart,
        updateCart: handleUpdateCart
    };

    return (
        <AppContext.Provider value={ctxValue}>
            {children}
        </AppContext.Provider>
    );
}