import { createContext, useReducer } from 'react';

function countTotalSum(array) {
    const totalSum = array.reduce((total, item) => {
        if (item.count) {
            total += Number(item.price) * item.count;
        } else {
            total += Number(item.price);
        }

        return total;
    }, 0);

    return totalSum.toFixed(2);
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
        // const updatedCart = [...state.cart];
        // const indexOfItemInCart = updatedCart.findIndex(meal => meal.id === action.item.id);

        // if (indexOfItemInCart > -1) {
        //     const itemFromCart = updatedCart[indexOfItemInCart];
        //     const updatedItem = {
        //         ...itemFromCart,
        //         quantity: itemFromCart.quantity + 1
        //     }

        //     updatedCart[indexOfItemInCart] = updatedItem;
        // } else {
        //     updatedCart.push({
        //         ...action.item,
        //         quantity: 1
        //     });
        // }

        // return {
        //     ...state,
        //     cart: updatedCart
        // };

        const updatedCart = [...state.cart];
        updatedCart.push(action.item);
        const totalSum = countTotalSum(updatedCart);

        return {
            ...state,
            cart: updatedCart,
            totalSum
        };
    }

    if (action.type === 'REMOVE_ITEM') {
        // const updatedCart = [...state.cart];
        // const indexOfItemInCart = updatedCart.findIndex(meal => meal.id === action.id);
        // const itemFromCart = updatedCart[indexOfItemInCart];
        
        // if (itemFromCart.quantity > 1) {
        //     const updatedItem = {
        //         ...itemFromCart,
        //         quantity: itemFromCart.quantity - 1
        //     };
        //     updatedCart[indexOfItemInCart] = updatedItem;
            
        // } else {
        //     updatedCart.splice(indexOfItemInCart, 1);
        // }

        // return {
        //     ...state,
        //     cart: updatedCart
        // };
        
        const updatedCart = [...state.cart];
        const indexOfItemInCart = updatedCart.findIndex(meal => meal.id === action.id);
        updatedCart.splice(indexOfItemInCart, 1);
        const totalSum = countTotalSum(updatedCart);

        return {
            cart: updatedCart,
            totalSum
        };
    }

    if (action.type === 'CLEAR_CART') {
        return {
            ...state,
            cart: [],
            totalSum: 0
        };
    }

    return state;
}

export function AppContextProvider({ children }) {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, {
        cart: [],
        totalSum: 0
    });

    function handleAddItemToCart(item) {
        dispatchCartAction({
            type: 'ADD_ITEM',
            item
        });
    }

    function handleUpdateCart(isIncrement, id) {
        if (isIncrement) {
            dispatchCartAction({
                type: 'ADD_ITEM',
                item: { ...cartState.cart.find(item => item.id === id) }
            });
        } else {
            dispatchCartAction({
                type: 'REMOVE_ITEM',
                id
            });
        }
    }

    function handleClearCart() {
        dispatchCartAction({
            type: 'CLEAR_CART',
            payload: {}
        });
    }

    const cartContext = {
        cart: cartState.cart,
        cartTotalSum: cartState.totalSum,
        addItemToCart: handleAddItemToCart,
        updateCart: handleUpdateCart,
        clearCart: handleClearCart
    };

    return (
        <AppContext.Provider value={cartContext}>
            {children}
        </AppContext.Provider>
    );
}