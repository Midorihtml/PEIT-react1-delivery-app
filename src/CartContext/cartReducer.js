export const cartReducer = (state, action) => {
    switch (action.type) {

        case 'GET_CART':
            return {
                ...state,
                cart: action.payload
            }
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload)
            }
        default:
            return state;
    }
}