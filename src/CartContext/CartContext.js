import React, { createContext, useContext, useReducer } from 'react'
import { cartReducer } from './cartReducer'

const Cart = createContext()

export const CartContext = ({ children }) => {

    const initialState = {
        cart: [],
    };
    const [state, dispatch] = useReducer(cartReducer, initialState)

    return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>
}

export const CartState = () => useContext(Cart)

