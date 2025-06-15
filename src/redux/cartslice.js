import { createSlice } from '@reduxjs/toolkit';

const loadCartFromLocalStorage = () => JSON.parse(localStorage.getItem('cartItems')) || [];

const saveCartToLocalStorage = (cartItems) => localStorage.setItem('cartItems', JSON.stringify(cartItems));


// Initial cart state
const initialState = {
    cartItems: loadCartFromLocalStorage()
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemExists = state.cartItems.find(item => item.id === action.payload.id);
            if (!itemExists) {
                // state.cartItems.push(action.payload);
                state.cartItems.push({ ...action.payload, quantity: 1 });
                saveCartToLocalStorage(state.cartItems);
            }
        }
        ,
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
            saveCartToLocalStorage(state.cartItems);
        },
        increaseQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
                saveCartToLocalStorage(state.cartItems);
            }
        },
         decreaseQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload);
            if (item) {
                item.quantity -= 1;
                saveCartToLocalStorage(state.cartItems);
            }
        }


    }
});

export const { addToCart, removeFromCart, increaseQuantity,decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;

