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
                // si le produit existe déjà → on augmente la quantité
                existingItem.quantity += 1;
            } else {
                // sinon → on l’ajoute avec une quantité = 1
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart : (state , action) => {
            const index = state.cart.findIndex(item => item.id === action.payload);
            if (index >= 0) {
                state.cart.splice(index, 1);
            }
        },
        decreaseQuantity: (state, action) => {
      const existingItem = state.cart.find(item => item.name === action.payload);
        if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          // si quantity == 1 → on supprime l’item
          state.cart = state.cart.filter(item => item.name !== action.payload);
        }
      }
    },
    }
})

export const {addToCart , removeFromCart , decreaseQuantity } = CartSlice.actions
export default CartSlice.reducer