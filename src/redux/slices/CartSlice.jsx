import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name : "cart",
    initialState : {
        cart : [],
    },
    reducers : {
        addToCart : (state , action) => {
            const existingItem = state.cart.find(item => item.name === action.payload.name);
            if (existingItem) {
                state.cart.map(item => item.name === action.payload.name ? {
                    ...item,
                    quantity: item.quantity + 1 
                } : item ); ;
            } 
            else {
                state.cart.push(action.payload)
            }
        },
        removeFromCart : (state , action) => {
            const index = state.cart.findIndex(item => item.id === action.payload);
            if (index >= 0) {
                state.cart.splice(index, 1);
            }
        }
    }
})

export const {addToCart , removeFromCart} = CartSlice.actions
export default CartSlice.reducer