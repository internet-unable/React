import { createContext, useReducer } from 'react';

export const CartContext = createContext({
    cart: [],
    addItemToCart: () => { }, // for vs code autocomplete
    updateCart: () => { }, // for vs code autocomplete
    clearCart: () => { } // for vs code autocomplete
});

function cartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        const updatedCart = [...state.cart];
        const indexOfItemInCart = updatedCart.findIndex(meal => meal.id === action.item.id);

        if (indexOfItemInCart > -1) {
            const itemFromCart = updatedCart[indexOfItemInCart];
            const updatedItem = {
                ...itemFromCart,
                quantity: itemFromCart.quantity + 1
            }

            updatedCart[indexOfItemInCart] = updatedItem;
        } else {
            updatedCart.push({
                ...action.item,
                quantity: 1
            });
        }

        return {
            ...state,
            cart: updatedCart
        };
    }

    if (action.type === 'REMOVE_ITEM') {
        const updatedCart = [...state.cart];
        const indexOfItemInCart = updatedCart.findIndex(meal => meal.id === action.id);
        const itemFromCart = updatedCart[indexOfItemInCart];
        
        if (itemFromCart.quantity > 1) {
            const updatedItem = {
                ...itemFromCart,
                quantity: itemFromCart.quantity - 1
            };
            updatedCart[indexOfItemInCart] = updatedItem;
            
        } else {
            updatedCart.splice(indexOfItemInCart, 1);
        }

        return {
            ...state,
            cart: updatedCart
        };

    }

    if (action.type === 'CLEAR_CART') {
        return {
            ...state,
            cart: []
        };
    }

    return state;
}

export function CartContextProvider({ children }) {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, {
        cart: []
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
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
}