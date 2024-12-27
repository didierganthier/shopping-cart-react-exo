import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item) => {
        setCartItems([...cartItems, item]);
    }

    const removeItem = (itemName) => {
        setCartItems(cartItems.filter(cartItem => cartItem.name !== itemName));
    }

    const updateItem = (item, quantity) => {
        setCartItems(cartItems.map(cartItem => {
            if (cartItem.name === item.name) {
                return {...item, quantity};
            }
            return cartItem;
        }))
    }

    const contextValue = {
        cartItems,
        addItem,
        removeItem,
        updateItem
    }

    return (
        <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
    )
}