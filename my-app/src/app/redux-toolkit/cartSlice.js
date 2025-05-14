// redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { current } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingProduct = state.items.find(item => item.idProduct === product.idProduct);
            if (existingProduct) {
                existingProduct.quantity += 1;

            } else {
                const newProduct = { ...product, quantity: 1 };
                state.items.push(newProduct);

            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => {
                return item.idProduct !== action.payload.idProduct;
            });
        },
        clearCart: (state) => {
            state.items = [];
        },
        removeZeroPriceItems(state) {
            state.items = state.items.filter(item => Number(item.price) > 0);
        },
    },
});

export const { addToCart, removeFromCart, clearCart, removeZeroPriceItems } = cartSlice.actions;
export default cartSlice.reducer;
